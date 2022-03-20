import React from "react";
import styles from './loader.module.sass';

export type LoaderProps = {
    className?: string;
}

export const Loader: React.FunctionComponent<LoaderProps> = (
    {
        className
    }
) => (
    <div className={`${styles.loader} ${className}`}/>
)