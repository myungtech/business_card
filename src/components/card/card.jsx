import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {

    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileURL
    } = card;

    // url이 있다면 fileURL 없으면 default_image
    const url = fileURL || DEFAULT_IMAGE;

    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>

    )
}

// 각각의 스타일 테마들
const getStyles = (theme) => {
    switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}


export default Card;