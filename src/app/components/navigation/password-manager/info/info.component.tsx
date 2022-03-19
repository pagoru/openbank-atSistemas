import React from "react";
import styles from './info.module.sass';
import headImage from '../../../../assets/images/head.svg';
import vaultImage from '../../../../assets/images/vault.svg';
import {useTranslation} from "../../../../hooks/use-translation.hook";
import {TranslationEnum} from "../../../../enums/translation.enum";
import {Subtitle} from "../../../shared/subtitle/subtitle.component";
import {Title} from "../../../shared/title/title.component";

export const PasswordManagerInfo: React.FunctionComponent = () => {
    const { translation } = useTranslation();
    
    return (
        <div className={styles.content}>
            <Title>
                {
                    translation(TranslationEnum.BUILD_YOUR_PASSWORD_MANAGER)
                }
            </Title>
            <div className={styles.info}>
                <div className={styles.infoContainer}>
                    <img
                        src={headImage}
                    />
                    <span>
                        {
                            translation(TranslationEnum.SAVE_ALL_YOUR_PASSWORDS)
                        }
                    </span>
                </div>
                <div className={styles.infoContainer}>
                    <img
                        src={vaultImage}
                    />
                    <span>
                        {
                            translation(TranslationEnum.MASTER_PASSWORD)
                        }
                    </span>
                </div>
            </div>
            <div>
                <Subtitle>
                    {
                        translation(TranslationEnum.HOW_IT_WORKS)
                    }
                </Subtitle>
                <span>
                    {
                        translation(TranslationEnum.HOW_IT_WORKS_DESCRIPTION)
                    }
                </span>
            </div>
            <div>
                <Subtitle>
                    {
                        translation(TranslationEnum.WHAT_COULD_BE_SAVED)
                    }
                </Subtitle>
                <span>
                    {
                        translation(TranslationEnum.WHAT_COULD_BE_SAVED_DESCRIPTION)
                    }
                </span>
            </div>
        </div>
    )
}