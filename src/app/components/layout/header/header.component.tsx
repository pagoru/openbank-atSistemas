import React from "react";
import styles from './header.module.sass';
import logo from '../../../assets/images/Logo_Web_8.svg';

export const Header: React.FunctionComponent = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <img
                    className={styles.logo}
                    src={logo}
                />
            </div>
        </header>
    )
}