import React, {useState} from "react";
import {Input} from "../input.component";
import {IconEnum} from "../../../../enums/icon.enum";
import styles from './password.module.sass';
import {isPasswordValid} from "../../../../utils/password.utils";

export type PasswordStatus = 'none' | 'error' | 'danger' | 'almost' | 'good';

export type InputPasswordProps = {
    className?: string;
    onChange?: (value: string, isValid: boolean) => any;
    maxLength?: number;
    placeHolder?: string;
    checkValue?: (value: string) => PasswordStatus;
}

export const InputPassword: React.FunctionComponent<InputPasswordProps> = (
    {
        className,
        onChange,
        maxLength,
        placeHolder,
        checkValue
    }
) => {
    const [value, setValue] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    
    const _getPasswordStatus = (value: string): PasswordStatus => {
        if(checkValue) return checkValue(value);

        if(value.length > 0 && value.length < 4)
            return 'error';
        
        if(value.length >= 4 && value.length < 8)
            return 'danger';
        
        if(value.length >= 8)
            return isPasswordValid(value) ? 'good' : 'almost';
        
        return 'none';
    }
    
    const onClickIcon = () => {
        setIsVisible(!isVisible);
    }
    
    const _onChangeValue = (_value: string) => {
        setValue(_value);
        onChange && onChange(_value, _getPasswordStatus(_value) === 'good');
    }
    
    const _className = [
        className,
        styles.input,
        styles[_getPasswordStatus(value)]
    ].join(' ');
    
    return (
        <Input
            className={_className}
            value={value}
            onChangeValue={_onChangeValue}
            icon={isVisible ? IconEnum.EYE_SHOW : IconEnum.EYE_HIDE}
            onClickIcon={onClickIcon}
            type={isVisible ? 'text' : 'password'}
            maxLength={maxLength}
            placeholder={placeHolder}
        />
    )
}