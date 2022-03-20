import { combineReducers } from 'redux';
import { all } from "@redux-saga/core/effects";
import {passwordManagerReducer, passwordManagerSaga, PasswordManagerState} from "./password-manager";

/** Default State **/
export interface DefaultState {
    passwordManager: PasswordManagerState;
}

/** root Reducers **/
export const rootReducer = combineReducers<DefaultState>({
    passwordManager: passwordManagerReducer,
});

/** root Sagas **/
export function* rootSaga() {
    yield all([
        passwordManagerSaga(),
    ]);
}