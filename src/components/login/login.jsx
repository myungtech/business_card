import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    // 로그인화면에서 다른 라우터로 가기 위해 history
    const history = useHistory();

    //페이지 이동시 데이터를 함께 전달( 사용자 정보 )
    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: { id: userId },
        });
    }

    //로그인이 된 데이터가 받아지면 goToMaker호출
    const onLogin = event => {
        authService //
            .login(event.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid));
    };
    // 로그인 정보가 있다면 자동 로그인 되게
    useEffect(() => {
        authService.onAuthChange(user => {
            // 사용자가 있다면 goToMaker로
            user && goToMaker(user.id);
        });

    });

    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Google
                </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Github
                </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;