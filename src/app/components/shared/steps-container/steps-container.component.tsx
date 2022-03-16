import React, {ReactNode} from "react";
import styles from './steps-container.module.sass';

type PasswordManagerContainerProps = {
    header: ReactNode;
    footer: ReactNode;
}

export const StepsContainer: React.FunctionComponent<PasswordManagerContainerProps> = (
    {
        header,
        children,
        footer
    }
) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {
                    header
                }
            </div>
            <div className={styles.content}>
                <div className={styles.children}>
                    {
                        children
                    }
                </div>
                <div className={styles.footer}>
                    {
                        footer
                    }
                </div>
            </div>
        </div>
    )
}