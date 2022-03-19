import React from "react";
import dayjs from "dayjs";
import styles from './footer.module.sass';
import logoSantanderFooter from '../../../assets/images/logoSantanderFooter_0_es.svg';
import logoAtSistemas from '../../../assets/images/logo_atSistemas.png';
import {useTranslation} from "../../../hooks/use.translation";
import {TranslationEnum} from "../../../enums/translation.enum";

export const Footer: React.FunctionComponent = () => {
    const { translation } = useTranslation();
    
    const year = dayjs(Date.now()).year();

    return (
        <div className={styles.footer}>
            <div className={styles.santanderBox}>
                <div>
                    <img
                        alt='logo Santander'
                        className={styles.logo}
                        src={logoSantanderFooter}
                    />
                </div>
                <div className={styles.atSistemasBox}>
                    <a
                        rel="noreferrer"
                        href='https://github.com/pagoru'
                        target='_blank'
                    >
                        Pablo G. Rubio para
                    </a>
                    <img
                        alt='logo atSistemas'
                        src={logoAtSistemas}
                        className={styles.logo}
                    />
                </div>
            </div>
            <div className={styles.copyrightBox}>
                <span>
                    © {year} OPEN BANK S.A.
                    {
                        translation(TranslationEnum.COPYRIGHT)
                    }
                </span>
            </div>
        </div>
    )
}