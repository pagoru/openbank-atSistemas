import React from "react";
import styles from './title.module.sass';

export type TitleProps = {

}

export const Title: React.FunctionComponent<TitleProps> = (
    {
        children
    }
) => (
    <h1
        data-testid='title'
        className={styles.title}
    >
        {
            children
        }
    </h1>
)