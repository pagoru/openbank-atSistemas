import React from "react";
import styles from './subtitle.module.sass';

export const Subtitle: React.FunctionComponent = (
    {
        children
    }
) => (
    <h3
        data-testid='subtitle'
        className={styles.subtitle}
    >
        {
            children
        }
    </h3>
)