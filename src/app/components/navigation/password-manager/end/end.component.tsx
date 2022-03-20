import React, {useEffect, useState} from "react";
import styles from './end.module.sass';
import {useTranslation} from "../../../../hooks/use-translation.hook";
import {Title} from "../../../shared/title/title.component";
import {useSelector} from "react-redux";
import {DefaultState} from "../../../../store/store";
import {PasswordManagerState} from "../../../../store/password-manager";
import {Status} from "../../../../types/status.types";
import {Loader} from "../../../shared/loader/loader.component";
import {StatusCodesEnum} from "../../../../enums/status-codes.enum";
import {TranslationEnum} from "../../../../enums/translation.enum";

export type PasswordManagerResultProps = {
    onLoad: () => any;
}

export const PasswordManagerResult: React.FunctionComponent<PasswordManagerResultProps> = (
    {
        onLoad
    }
) => {
    const {translation} = useTranslation();

    const [status, setStatus] = useState<Status>();

    const passwordManagerState = useSelector<DefaultState, PasswordManagerState>((state) => state.passwordManager);

    useEffect(() => {

    })

    useEffect(() => {
        setStatus(passwordManagerState.status);
    }, [passwordManagerState]);

    useEffect(() => {
        if(!status) return;
        onLoad();
    }, [status]);

    return (
        <div className={styles.content}>
            <Title>
                {
                    status ? (
                        <span>
                            {
                                status.code === StatusCodesEnum.OK
                                && translation(TranslationEnum.PASSWORD_MANAGER_SAVED)
                            }
                            {
                                status.code === StatusCodesEnum.ERROR
                                && translation(TranslationEnum.SOMETHING_WENT_WRONG)
                            }
                        </span>
                    ) : (
                        <span>
                            {
                                translation(TranslationEnum.LOADING)
                            }
                        </span>
                    )
                }
            </Title>
            <div className={styles.container}>
                {
                    status ? (
                        <span>
                            {
                                status.code === StatusCodesEnum.OK
                                && translation(TranslationEnum.PASSWORD_MANAGER_SAVED_INFO)
                            }
                            {
                                status.code === StatusCodesEnum.ERROR
                                && translation(TranslationEnum.PASSWORD_MANAGER_NOT_SAVED_INFO)
                            }
                        </span>
                    ) : (
                        <Loader/>
                    )
                }
            </div>
        </div>
    )
}