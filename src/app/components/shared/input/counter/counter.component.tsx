import React, {useEffect, useState} from "react";
import {Input} from "../input.component";
import styles from './counter.module.sass';

export type InputCounterProps = {
    value?: string;
    onChangeValue?: (value: string) => any;
    maxLength: number;
}

export const InputCounter: React.FunctionComponent<InputCounterProps> = (
    {
        onChangeValue,
        value = '',
        maxLength
    }
) => {

    const [_value, _setValue] = useState<string>('');

    useEffect(() => {
        _setValue(value);
    }, [value]);

    const _onChangeValue = (_value: string) => {
        _setValue(_value);
        onChangeValue && onChangeValue(_value);
    }

    return (
        <div
            data-testid='input-counter'
            className={styles.inputCounter}>
            <Input
                className={styles.input}
                maxLength={maxLength}
                value={_value}
                onChangeValue={_onChangeValue}
            />
            <span
                data-testid='input-counter-span'
            >
                {_value.length}/{maxLength}
            </span>
        </div>
    )
}