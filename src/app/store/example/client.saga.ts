import {all, put, takeEvery} from "@redux-saga/core/effects";
import {
    ClientActionTypes,
} from "./client.types";
import {
    ILoginAction,

} from "./client.actions";

/** Initial saga **/
export function* clientSaga() {
    yield all([
        takeEvery(ClientActionTypes.LOGIN, login)
    ])
}

/** Saga functions **/
//***************************************TESTED*****************************************
function* login(action: ILoginAction) {
    try {

        // yield put<ILoadClientAction>(loadClientDispatchAction());
    } catch (e) {
        // yield put<ILoginActionError>(loginDispatchActionError());
    }
}