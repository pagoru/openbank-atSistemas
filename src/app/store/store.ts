import { combineReducers } from 'redux';
import { all } from "@redux-saga/core/effects";
import {clientReducer, clientSaga, ClientState} from "./example";

/** Default State **/
export interface DefaultState {
    example: ClientState;
}

/** root Reducers **/
export const rootReducer = combineReducers<DefaultState>({
    example: clientReducer,
});

/** root Sagas **/
export function* rootSaga() {
    yield all([
        clientSaga(),
    ]);
}