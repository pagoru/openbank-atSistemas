import React from "react";
import styles from './header.module.sass';
import logo from '../../../assets/images/Logo_Web_8.svg';
import {Link} from "react-router-dom";

export const Header: React.FunctionComponent = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <Link to='/'>
                    <img
                        alt='logo'
                        className={styles.logo}
                        src={logo}
                    />
                </Link>
            </div>
            <div className={styles.navigator}>
                <Link
                    to='/password-manager'
                    className={styles.item}
                >
                    Password Manager
                </Link>
            </div>
        </header>
    )
}