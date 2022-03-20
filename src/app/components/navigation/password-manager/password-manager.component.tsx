import React, {useState} from "react";
import {Container} from "../../shared/container/container.component";
import styles from './password-manager.module.sass';
import {StepsContainer} from "../../shared/steps-container/steps-container.component";
import {PasswordManagerInfo} from "./info/info.component";
import {PasswordManagerForm} from "./form/form.component";
import {useDispatch} from "react-redux";
import {savePasswordDispatchAction} from "../../../store/password-manager";
import {PasswordManagerFormType} from "../../../types/password-manager.types";
import {PasswordManagerResult} from "./end/end.component";

enum PasswordManagerSteps {
    INFO,
    FORM,
    RESULT
}

export const PasswordManager: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    const [passwordManagerForm, setPasswordManagerForm] = useState<PasswordManagerFormType>()

    const [currentStep, setCurrentStep] = useState<PasswordManagerSteps>(PasswordManagerSteps.INFO)
    const [canContinue, setCanContinue] = useState<boolean>(false);
    
    const _onChangePasswordManagerInfo = (isValid: boolean) => setCanContinue(isValid);
    const _onChangePasswordManagerForm = (isValid: boolean, passwordManagerForm: PasswordManagerFormType) => {
        setCanContinue(isValid);
        setPasswordManagerForm(passwordManagerForm)
    }
    const _onLoadPasswordManagerResult = () => setCanContinue(true);

    const _onNextStep = (isLast: boolean) => {
        if(!passwordManagerForm) return;

        const targetStep = isLast ? 0 : currentStep + 1;

        setCanContinue(isLast && targetStep !== 0);
        setCurrentStep(targetStep);

        if(targetStep === PasswordManagerSteps.FORM)
            dispatch(savePasswordDispatchAction(passwordManagerForm.password, passwordManagerForm.hint));

    }
    const _onPreviousStep = () => {
        setCanContinue(false);
        setCurrentStep(currentStep - 1);
    }
    
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
                        onChange={_onChangePasswordManagerForm}
                    />
                    <PasswordManagerResult
                        onLoad={_onLoadPasswordManagerResult}
                    />
                </StepsContainer>
            </Container>
        </div>
    )
}