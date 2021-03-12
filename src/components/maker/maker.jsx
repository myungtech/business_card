import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
    const histroyState = useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(histroyState && histroyState.id);

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };
    // 마운트 되었을때 사용자의 아이디가 변경 되었을때
    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });
        return () => stopSync();
    }, [userId]);
    // callback 함수를 전달해줌
    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
                console.log(userId);
            } else {
                history.push('/');
            }
        });
    });

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    };

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    FileInput={FileInput}
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
