import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
    // onLogout이 있다면 로그아웃 버튼을 보여줄거다.
    <header className={styles.header}>
        {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Business Card Maker</h1>
    </header>
);

export default Header;