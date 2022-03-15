import {all, put, takeEvery} from "@redux-saga/core/effects";
import {
    ExampleActionTypes,
} from "./example.types";
import {
    ISetAction, ISetActionSuccess,

} from "./example.actions";
import {setDispatchActionSuccess} from "./example.dispatchers";

/** Initial saga **/
export function* exampleSaga() {
    yield all([
        takeEvery(ExampleActionTypes.SET, set)
    ])
}

/** Saga functions **/
//***************************************TESTED*****************************************
function* set(action: ISetAction) {
    yield put<ISetActionSuccess>(setDispatchActionSuccess(action.test));
}