import {ExampleActionTypes, TestType} from "./example.types";

/** Actions **/
export interface ISetAction {
    type: typeof ExampleActionTypes.SET;
    test: TestType;
}

/** Saga Actions **/
export interface ISetActionSuccess {
    type: typeof ExampleActionTypes.SET_SUCCESS;
    test: TestType;
}