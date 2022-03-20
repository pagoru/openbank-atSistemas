import React, {useState} from "react";
import {Container} from "../../shared/container/container.component";
import styles from './password-manager.module.sass';
import {StepsContainer} from "../../shared/steps-container/steps-container.component";
import {PasswordManagerInfo} from "./info/info.component";
import {PasswordManagerForm} from "./form/form.component";

export const PasswordManager: React.FunctionComponent = () => {
    
    const [canContinue, setCanContinue] = useState<boolean>(false);
    
    const _onChangePasswordManagerInfo = (isValid: boolean) => setCanContinue(isValid);
    const _onNextStep = (isLast: boolean) => setCanContinue(isLast);
    const _onPreviousStep = () => setCanContinue(false);
    
    return (
        <div className={styles.content}>
            <div className={styles.backgroundHeader}/>
            <Container>
                <StepsContainer
                    canContinue={canContinue}
                    onNext={_onNextStep}
                    onPrevious={_onPreviousStep}
                    className={styles.stepsContainer}
                >
                    <PasswordManagerInfo
                        onChange={_onChangePasswordManagerInfo}
                    />
                    <PasswordManagerForm
                        onChange={_onChangePasswordManagerInfo}
                    />
                    <div>
                        Step 3
                    </div>
                </StepsContainer>
            </Container>
        </div>
    )
}