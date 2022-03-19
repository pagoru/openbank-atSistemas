import React from "react";
import styles from './button.module.sass';

export type ButtonProps = {
    className?: string;
    disabled?: boolean;
    secondary?: boolean;
    onClick?: () => any;
}

export const Button: React.FunctionComponent<ButtonProps> = (
    {
        className,
        children,
        disabled = false,
        secondary = false,
        onClick = () => '',
    }
) => {
    const _className = [
        className,
        styles.button,
        disabled ? styles.disabled : '',
        secondary ? styles.secondary : ''
    ].join(' ');
    
    const _onClick = () => !disabled && onClick();
    
    return (
        <button
            data-testid='button'
            className={_className}
            onClick={_onClick}
        >
            {
                children
            }
        </button>
    )
}