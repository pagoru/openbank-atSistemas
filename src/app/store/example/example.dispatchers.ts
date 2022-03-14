import {ExampleActionTypes, TestType} from "./example.types";
import {
    ISetAction,
    ISetActionSuccess,
} from "./example.actions";


/** Actions **/
export const setDispatchAction = (
    test: TestType
): ISetAction => ({
    type: ExampleActionTypes.SET,
    test
});


/** Saga Actions **/
export const setDispatchActionSuccess = (
    test: TestType
): ISetActionSuccess => ({
    type: ExampleActionTypes.SET_SUCCESS,
    test
});