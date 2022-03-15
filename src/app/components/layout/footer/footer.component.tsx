import React from "react";
import dayjs from "dayjs";
import styles from './footer.module.sass';
import logoSantanderFooter from '../../../assets/images/logoSantanderFooter_0_es.svg';

export const Footer: React.FunctionComponent = () => {

    const year = dayjs(Date.now()).year();

    return (
        <div className={styles.footer}>
            <div className={styles.santanderBox}>
                <div>
                    <img
                        className={styles.santanderLogo}
                        src={logoSantanderFooter}
                    />
                </div>
                <div>
                    <a
                        href='https://github.com/pagoru'
                        target='_blank'
                    >
                        Pablo G. Rubio
                    </a>
                </div>
            </div>
            <div className={styles.copyrightBox}>
                <span>
                    © {year} OPEN BANK S.A. Todos los derechos reservados. Openbank es una marca registrada.
                </span>
            </div>
        </div>
    )
}