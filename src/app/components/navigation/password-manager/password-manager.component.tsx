import React from "react";
import {Container} from "../../shared/container/container.component";
import styles from './password-manager.module.sass';
import {StepsContainer} from "../../shared/steps-container/steps-container.component";
import {PasswordManagerStepsContainerFooter} from "./steps-container/footer/footer.component";

export const PasswordManager: React.FunctionComponent = () => {
    
    const ch = () => <div>children</div>;
    
    return (
        <div className={styles.content}>
            <div className={styles.backgroundHeader}/>
            <Container>
                <StepsContainer
                    children={ch()}
                    footer={<PasswordManagerStepsContainerFooter/>}
                />
            </Container>
        </div>
    )
}