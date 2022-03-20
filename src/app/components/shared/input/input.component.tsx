import React, {useEffect, useState} from "react";
import styles from './input.module.sass';
import {Icon} from "../icon/icon.component";
import {IconEnum} from "../../../enums/icon.enum";

export type InputProps = {
    className?: string;
    placeholder?: string;
    value?: string;
    onChangeValue?: (value: string) => any;
    icon?: IconEnum;
    onClickIcon?: () => any;
    type?: 'password' | 'number' | 'text';
    maxLength?: number;
}

export const Input: React.FunctionComponent<InputProps> = (
    {
        className = '',
        placeholder = '',
        value = '',
        onChangeValue,
        icon,
        onClickIcon,
        type = 'text',
        maxLength
    }
) => {
    const [_value, _setValue] = useState<string>('');

    useEffect(() => {
        _setValue(value);
    }, [value]);

    const _onChange = (event: any) => {
        const value = event.target.value;
        _setValue(value);
        onChangeValue && onChangeValue(value)
    }

    const containerClassName = [
        className,
        styles.container
    ].join(' ');
    
    const inputClassName = [
        styles.input,
        icon ? styles.inputIcon : ''
    ].join(' ');

    return (
        <div
            data-testid='input'
            className={containerClassName}
        >
            <input
                data-testid='input-dom'
                className={inputClassName}
                placeholder={placeholder}
                value={_value}
                onChange={_onChange}
                type={type}
                maxLength={maxLength}
            />
            {
                icon && (
                    <Icon
                        className={styles.icon}
                        onClick={onClickIcon}
                        icon={icon}
                    />
                )
            }
        </div>
    )
}