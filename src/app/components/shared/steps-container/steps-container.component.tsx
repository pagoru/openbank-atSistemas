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
        <div
            data-testid='container'
            className={styles.container}
        >
            <div
                data-testid='header'
                className={styles.header}
            >
                {
                    header
                }
            </div>
            <div
                data-testid='content'
                className={styles.content}
            >
                <div
                    data-testid='children'
                    className={styles.children}
                >
                    {
                        children
                    }
                </div>
                <div
                    data-testid='footer'
                    className={styles.footer}
                >
                    {
                        footer
                    }
                </div>
            </div>
        </div>
    )
}