import { combineReducers } from 'redux';
import { all } from "@redux-saga/core/effects";
import {exampleReducer, exampleSaga, ExampleState} from "./example";

/** Default State **/
export interface DefaultState {
    example: ExampleState;
}

/** root Reducers **/
export const rootReducer = combineReducers<DefaultState>({
    example: exampleReducer,
});

/** root Sagas **/
export function* rootSaga() {
    yield all([
        exampleSaga(),
    ]);
}