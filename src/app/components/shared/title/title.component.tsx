import React from "react";
import styles from './title.module.sass';

export const Title: React.FunctionComponent = (
    {
        children
    }
) => (
    <h2
        data-testid='title'
        className={styles.title}
    >
        {
            children
        }
    </h2>
)