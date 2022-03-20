import {PasswordManagerActionTypes} from "./password-manager.types";
import {Status} from "../../types/status.types";

/** Actions **/
export interface ISavePasswordAction {
    type: typeof PasswordManagerActionTypes.SAVE_PASSWORD;
    password: string;
    hint?: string;
}

/** Saga Actions **/
export interface ISavePasswordActionSuccess {
    type: typeof PasswordManagerActionTypes.SAVE_PASSWORD_SUCCESS;
    status: Status;
    token: string;
}

export interface ISavePasswordActionError {
    type: typeof PasswordManagerActionTypes.SAVE_PASSWORD_ERROR;
    status: Status;
}
export interface IClearAction {
    type: typeof PasswordManagerActionTypes.CLEAR;
}