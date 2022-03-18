import React, {ReactNode} from "react";
import styles from './steps-container.module.sass';
import {StepsContainerHeader} from "./header/header.component";

type PasswordManagerContainerProps = {
    footer: ReactNode;
};

export const StepsContainer: React.FunctionComponent<PasswordManagerContainerProps> = (
    {
        children,
        footer
    }
) => {
    const length = 3;
    const current = 1;
    return (
        <div
            data-testid='container'
            className={styles.container}
        >
            <div
                data-testid='header'
                className={styles.header}
            >
                <StepsContainerHeader
                    length={length}
                    current={current}
                />
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