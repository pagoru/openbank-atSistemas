import React, {useEffect, useState} from "react";
import styles from './input.module.sass';
import {Icon} from "../icon/icon.component";
import {IconEnum} from "../../../enums/icon.enum";

export type InputProps = {
    placeholder?: string;
    value?: string;
    icon?: IconEnum;
}

export const Input: React.FunctionComponent<InputProps> = (
    {
        placeholder = '',
        value = '',
        icon
    }
) => {
    const [_value, _setValue] = useState<string>('');

    useEffect(() => {
        _setValue(value);
    }, [value]);

    const _onChange = (event: any) => {
        _setValue(event.target.value);
    }

    const inputClassName = [
        styles.input,
        icon ? styles.inputIcon : ''
    ].join(' ');

    return (
        <div
            data-testid='input'
            className={styles.container}
        >
            <input
                className={inputClassName}
                placeholder={placeholder}
                value={_value}
                onChange={_onChange}
            />
            {
                icon && (
                    <Icon
                        className={styles.icon}
                        icon={icon}
                    />
                )
            }
        </div>
    )
}