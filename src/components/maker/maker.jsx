import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    // callback함수를 전달해줌
    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        })
    })
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor />
                <Preview />
            </div>
            <Footer />
        </section>
    )
};

export default Maker;