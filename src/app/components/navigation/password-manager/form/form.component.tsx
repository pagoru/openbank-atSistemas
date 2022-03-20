import React, {useEffect, useState} from "react";
import styles from './form.module.sass';
import {useTranslation} from "../../../../hooks/use-translation.hook";
import {TranslationEnum} from "../../../../enums/translation.enum";
import {Title} from "../../../shared/title/title.component";
import {InputPassword, PasswordStatus} from "../../../shared/input/password/password.component";
import {InputCounter} from "../../../shared/input/counter/counter.component";

export type PasswordManagerFormProps = {
    onChange: (isValid: boolean) => any;
}

export const PasswordManagerForm: React.FunctionComponent<PasswordManagerFormProps> = (
    {
        onChange
    }
) => {
    const { translation } = useTranslation();

    const [password, setPassword] = useState<string>('');

    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isRePasswordValid, setIsRePasswordValid] = useState<boolean>(false);

    useEffect(() => {
        console.log(isPasswordValid && isRePasswordValid)
        onChange(isPasswordValid && isRePasswordValid);
    }, [isPasswordValid, isRePasswordValid]);

    const _onChangePasswordInput = (value: string, isValid: boolean) => {
        console.log(value, isValid, '1');
        setPassword(value);
        setIsPasswordValid(isValid);
    }

    const _onChangeRePasswordInput = (value: string, isValid: boolean) => {
        console.log(value, isValid, '2');
        setIsRePasswordValid(isValid);
    }

    const _onCheckRePassword = (value: string): PasswordStatus => {
        if(value.length === 0) return 'none';
        return password === value ? 'good' : 'error';
    }
    
    return (
        <div className={styles.content}>
            <Title>
                {
                    translation(TranslationEnum.BUILD_YOUR_PASSWORD_MANAGER)
                }
            </Title>
            <div className={styles.form}>
                <span>
                    En primer lugar
                </span>
                <div className={styles.passwordInputItems}>
                    <div className={styles.passwordInputItem}>
                        <label>
                            Crea tu Contraseña Maestra
                        </label>
                        <InputPassword
                            placeHolder='asd'
                            maxLength={24}
                            onChange={_onChangePasswordInput}
                        />
                    </div>
                    <div className={styles.passwordInputItem}>
                        <label>
                            Repite tu Contraseña Maestra
                        </label>
                        <InputPassword
                            placeHolder='asd'
                            maxLength={24}
                            checkValue={_onCheckRePassword}
                            onChange={_onChangeRePasswordInput}
                        />
                    </div>
                </div>
                <div className={styles.hintContainer}>
                    <span>
                        También puedes crear una pista
                    </span>

                    <div className={styles.hintBox}>
                        <label>
                            Crea tu pista para recordar u contraseña (opcional)
                        </label>
                        <InputCounter
                            maxLength={255}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}