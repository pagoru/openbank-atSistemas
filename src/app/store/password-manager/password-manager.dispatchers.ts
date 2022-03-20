import {PasswordManagerActionTypes} from "./password-manager.types";
import {
    IClearAction,
    ISavePasswordAction, ISavePasswordActionError,
    ISavePasswordActionSuccess,
} from "./password-manager.actions";
import {Status} from "../../types/status.types";


/** Actions **/
export const savePasswordDispatchAction = (
    password: string,
    hint?: string
): ISavePasswordAction => ({
    type: PasswordManagerActionTypes.SAVE_PASSWORD,
    password,
    hint
});

/** Saga Actions **/
export const savePasswordDispatchActionSuccess = (
    status: Status,
    token: string
): ISavePasswordActionSuccess => ({
    type: PasswordManagerActionTypes.SAVE_PASSWORD_SUCCESS,
    status,
    token
});

export const savePasswordDispatchActionError = (
    status: Status
): ISavePasswordActionError => ({
    type: PasswordManagerActionTypes.SAVE_PASSWORD_ERROR,
    status,
});
export const clearDispatchAction = (): IClearAction => ({
    type: PasswordManagerActionTypes.CLEAR
});