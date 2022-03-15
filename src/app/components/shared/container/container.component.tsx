import React from "react";
import styles from './container.module.sass';

export const Container: React.FunctionComponent = (
    {
        children
    }
) => (
    <div className={styles.container}>
        {
            children
        }
    </div>
)