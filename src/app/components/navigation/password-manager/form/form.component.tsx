import React from "react";
import styles from './form.module.sass';
import {useTranslation} from "../../../../hooks/use-translation.hook";
import {TranslationEnum} from "../../../../enums/translation.enum";
import {Title} from "../../../shared/title/title.component";
import {InputPassword} from "../../../shared/input/password/password.component";
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
                        />
                    </div>
                    <div className={styles.passwordInputItem}>
                        <label>
                            Repite tu Contraseña Maestra
                        </label>
                        <InputPassword
                            placeHolder='asd'
                            maxLength={24}
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