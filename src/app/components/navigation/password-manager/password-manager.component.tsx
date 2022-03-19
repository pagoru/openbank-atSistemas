import React from "react";
import {Container} from "../../shared/container/container.component";
import styles from './password-manager.module.sass';
import {StepsContainer} from "../../shared/steps-container/steps-container.component";

export const PasswordManager: React.FunctionComponent = () => {
    
    return (
        <div className={styles.content}>
            <div className={styles.backgroundHeader}/>
            <Container>
                <StepsContainer className={styles.stepsContainer}>
                    <div>
                        dadad
                    </div>
                    <div>
                        dadad
                    </div>
                </StepsContainer>
            </Container>
        </div>
    )
}