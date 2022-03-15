/** Action Types **/
import {
    ISetAction,
    ISetActionSuccess,
} from "./example.actions";
import {Status} from "../../types/status.types";

export enum ExampleActionTypes {
    SET = 'EXAMPLE@@SET',
    SET_SUCCESS = 'EXAMPLE@@SET_SUCCESS',
}

/** Action List **/
export type ExampleActions =
    | ISetAction
    | ISetActionSuccess


/** Default State Values **/
export const exampleDefaultState = (): ExampleState => ({
    test: 'ONE'
});

/** State **/
export interface ExampleState {
    test?: TestType;

    status?: Status;
}

/** Other... **/
export type TestType = 'ONE' | 'TWO';