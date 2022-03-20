import React, {useEffect, useState} from "react";
import styles from './form.module.sass';
import {useTranslation} from "../../../../hooks/use-translation.hook";
import {TranslationEnum} from "../../../../enums/translation.enum";
import {Title} from "../../../shared/title/title.component";
import {InputPassword, PasswordStatus} from "../../../shared/input/password/password.component";
import {InputCounter} from "../../../shared/input/counter/counter.component";
import {PasswordManagerFormType} from "../../../../types/password-manager.types";

export type PasswordManagerFormProps = {
    onChange: (isValid: boolean, passwordManagerFormType: PasswordManagerFormType) => any;
}

export const PasswordManagerForm: React.FunctionComponent<PasswordManagerFormProps> = (
    {
        onChange
    }
) => {
    const { translation } = useTranslation();

    const [password, setPassword] = useState<string>('');
    const [hint, setHint] = useState<string>('');

    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isRePasswordValid, setIsRePasswordValid] = useState<boolean>(false);

    useEffect(() => {
        onChange(isPasswordValid && isRePasswordValid, { password, hint })
    }, [isPasswordValid, isRePasswordValid]);

    const _onChangePasswordInput = (value: string, isValid: boolean) => {
        setPassword(value);
        setIsPasswordValid(isValid);
    }

    const _onChangeRePasswordInput = (value: string, isValid: boolean) => {
        setIsRePasswordValid(isValid);
    }

    const _onCheckRePassword = (value: string): PasswordStatus => {
        if(value.length === 0) return 'none';
        return password === value ? 'good' : 'error';
    }

    const _onChangeHintInput = (value: string) => setHint(value);
    
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
                            onChange={_onChangeHintInput}
                            maxLength={255}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}