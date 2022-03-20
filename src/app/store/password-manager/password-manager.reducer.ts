import {Reducer} from 'redux'
import {PasswordManagerActions, PasswordManagerActionTypes, passwordManagerDefaultState, PasswordManagerState} from "./password-manager.types";

export const passwordManagerReducer: Reducer<PasswordManagerState, PasswordManagerActions> = (
    state = passwordManagerDefaultState(),
    action: PasswordManagerActions
) => {
    switch (action.type) {
        case PasswordManagerActionTypes.SAVE_PASSWORD_SUCCESS:
            return {
                ...state,
                status: action.status,
                token: action.token
            }
        case PasswordManagerActionTypes.SAVE_PASSWORD_ERROR:
            return {
                ...state,
                status: action.status,
                token: undefined
            }
        case PasswordManagerActionTypes.CLEAR:
            return {
                ...state,
                status: undefined,
                token: undefined
            }

        default:
            return state
    }
}
