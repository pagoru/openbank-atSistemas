import React from "react";
import styles from './form.module.sass';
import {useTranslation} from "../../../../hooks/use-translation.hook";
import {TranslationEnum} from "../../../../enums/translation.enum";
import {Title} from "../../../shared/title/title.component";
import {InputPassword} from "../../../shared/input/password/password.component";

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
                            className={styles.passwordInput}
                        />
                    </div>
                    <div className={styles.passwordInputItem}>
                        <label>
                            Repite tu Contraseña Maestra
                        </label>
                        <InputPassword
                            placeHolder='asd'
                            className={styles.passwordInput}
                        />
                    </div>
                </div>
                <div>
                    <span>
                        También puedes crear una pista
                    </span>

                </div>
            </div>
        </div>
    )
}