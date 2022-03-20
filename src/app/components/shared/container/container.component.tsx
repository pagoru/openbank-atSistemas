import React from "react";
import styles from './container.module.sass';

export const Container: React.FunctionComponent = (
    {
        children
    }
) => (
    <div
        data-testid='container'
        className={styles.container}
    >
        {
            children
        }
    </div>
)