import {all, delay, put, takeEvery} from "@redux-saga/core/effects";
import {PasswordManagerActionTypes,} from "./password-manager.types";
import {
    IClearAction,
    ISavePasswordAction,
    ISavePasswordActionError,
    ISavePasswordActionSuccess,
} from "./password-manager.actions";
import {
    clearDispatchAction,
    savePasswordDispatchActionError,
    savePasswordDispatchActionSuccess
} from "./password-manager.dispatchers";
import {getRandomNumber} from "../../utils/number.utils";
import {StatusCodesEnum} from "../../enums/status-codes.enum";
import {Status} from "../../types/status.types";

/** Initial saga **/
export function* passwordManagerSaga() {
    yield all([
        takeEvery(PasswordManagerActionTypes.SAVE_PASSWORD, savePassword)
    ])
}

/** Saga functions **/
//***************************************TESTED*****************************************
function* savePassword(action: ISavePasswordAction) {
    yield put<IClearAction>(clearDispatchAction());

    console.log('?', getRandomNumber(2000, 5000))
    yield delay(getRandomNumber(2000, 5000));

    const isValid = getRandomNumber(0, 1) === 0;
    const token = (Math.random() + 1).toString(36).substring(7) + action.password;
    const status: Status = {
        action: 'SAVE_PASSWORD',
        code: isValid ? StatusCodesEnum.OK : StatusCodesEnum.ERROR
    }

    yield put<ISavePasswordActionSuccess | ISavePasswordActionError>(
        isValid
            ? savePasswordDispatchActionSuccess(status, token)
            : savePasswordDispatchActionError(status)
    );
}