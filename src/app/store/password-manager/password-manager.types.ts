/** Action Types **/
import {
    IClearAction,
    ISavePasswordAction, ISavePasswordActionError,
    ISavePasswordActionSuccess,
} from "./password-manager.actions";
import {Status} from "../../types/status.types";

export enum PasswordManagerActionTypes {
    SAVE_PASSWORD = 'PASSWORD_MANAGER@@SAVE_PASSWORD',
    SAVE_PASSWORD_SUCCESS = 'PASSWORD_MANAGER@@SAVE_PASSWORD_SUCCESS',
    SAVE_PASSWORD_ERROR = 'PASSWORD_MANAGER@@SAVE_PASSWORD_ERROR',

    CLEAR = 'PASSWORD_MANAGER@@CLEAR',
}

/** Action List **/
export type PasswordManagerActions =
    | ISavePasswordAction
    | ISavePasswordActionSuccess
    | ISavePasswordActionError

    | IClearAction


/** Default State Values **/
export const passwordManagerDefaultState = (): PasswordManagerState => ({
    token: ''
});

/** State **/
export interface PasswordManagerState {
    token?: string;
    status?: Status;
}