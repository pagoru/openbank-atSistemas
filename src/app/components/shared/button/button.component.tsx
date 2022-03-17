import React from "react";
import styles from './button.module.sass';

export type ButtonProps = {
    disabled?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = (
    {
        children,
        disabled = false
    }
) => (
    <button
        data-testid='button'
        className={`${styles.button} ${disabled ? styles.disabled : ''}`}
    >
        {
            children
        }
    </button>
)