import React, {useEffect, useState} from "react";
import styles from './form.module.sass';
import {useTranslation} from "../../../../hooks/use-translation.hook";
import {TranslationEnum} from "../../../../enums/translation.enum";
import {Title} from "../../../shared/title/title.component";
import {InputPassword, PasswordStatus} from "../../../shared/input/password/password.component";
import {InputCounter} from "../../../shared/input/counter/counter.component";
import {PasswordManagerFormType} from "../../../../types/password-manager.types";
import {isPasswordValid} from "../../../../utils/password.utils";

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

    const [_isPasswordValid, _setIsPasswordValid] = useState<boolean>(false);
    const [_isRePasswordValid, _setIsRePasswordValid] = useState<boolean>(false);

    useEffect(() => {
        onChange(_isPasswordValid && _isRePasswordValid, { password, hint })
    }, [_isPasswordValid, _isRePasswordValid]);

    const _onChangePasswordInput = (value: string, isValid: boolean) => {
        setPassword(value);
        _setIsPasswordValid(isValid);
    }

    const _onChangeRePasswordInput = (value: string, isValid: boolean) => {
        _setIsRePasswordValid(isValid);
    }

    const _onCheckRePassword = (value: string): PasswordStatus => {
        if(value.length === 0) return 'none';
        return password === value && isPasswordValid(value) ? 'good' : 'error';
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
                    {
                        translation(TranslationEnum.IN_FIRST_PLACE)
                    }
                </span>
                <div className={styles.passwordInputItems}>
                    <div className={styles.passwordInputItem}>
                        <label>
                            {
                                translation(TranslationEnum.BUILD_YOUR_MASTER_PASSWORD)
                            }
                        </label>
                        <InputPassword
                            placeHolder={translation(TranslationEnum.WRITE_YOUR_PASSWORD)}
                            maxLength={24}
                            onChange={_onChangePasswordInput}
                        />
                    </div>
                    <div className={styles.passwordInputItem}>
                        <label>
                            {
                                translation(TranslationEnum.REPEAT_MASTER_PASSWORD)
                            }
                        </label>
                        <InputPassword
                            placeHolder={translation(TranslationEnum.REPEAT_PASSWORD)}
                            maxLength={24}
                            checkValue={_onCheckRePassword}
                            onChange={_onChangeRePasswordInput}
                        />
                    </div>
                    <span>
                        {
                            translation(TranslationEnum.PASSWORD_INFO)
                        }
                    </span>
                </div>
                <div className={styles.hintContainer}>
                    <span>
                        {
                            translation(TranslationEnum.HINT_INFO)
                        }
                    </span>
                    <div className={styles.hintBox}>
                        <label>
                            {
                                translation(TranslationEnum.BUILD_YOUR_HINT)
                            }
                        </label>
                        <InputCounter
                            onChange={_onChangeHintInput}
                            placeholder={translation(TranslationEnum.WRITE_YOUR_HINT)}
                            maxLength={255}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}