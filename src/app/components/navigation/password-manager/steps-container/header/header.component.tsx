import React from "react";
import styles from './header.module.sass';

export const PasswordManagerStepsContainerHeader: React.FunctionComponent = () => {
    
    return (
        <div className={styles.header}>
            <div className={styles.options}>
                <div className={styles.option}>
                    1
                </div>
                <div className={styles.line}/>
                <div className={styles.option}>
                    1
                </div>
                <div className={styles.line}/>
                <div className={styles.option}>
                    1
                </div>
            </div>
            <div className={styles.triangle}/>
        </div>
    )
}