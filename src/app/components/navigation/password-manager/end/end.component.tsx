import React, {useEffect, useState} from "react";
import styles from './end.module.sass';
// import {useTranslation} from "../../../../hooks/use-translation.hook";
import {Title} from "../../../shared/title/title.component";
import {useSelector} from "react-redux";
import {DefaultState} from "../../../../store/store";
import {PasswordManagerState} from "../../../../store/password-manager";
import {Status} from "../../../../types/status.types";
import {Loader} from "../../../shared/loader/loader.component";

export type PasswordManagerResultProps = {
    onLoad: () => any;
}

export const PasswordManagerResult: React.FunctionComponent<PasswordManagerResultProps> = (
    {
        onLoad
    }
) => {
    // const {translation} = useTranslation();

    const [status, setStatus] = useState<Status>();

    const passwordManagerState = useSelector<DefaultState, PasswordManagerState>((state) => state.passwordManager);

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
                            ¡Tu Password Manager ya está creado!
                        </span>
                    ) : (
                        <span>
                            Cargando...
                        </span>
                    )
                }
            </Title>
            <div className={styles.container}>
                {
                    status ? {
                        status.code
                    } : (
                        <Loader/>
                    )
                }
            </div>
        </div>
    )
}