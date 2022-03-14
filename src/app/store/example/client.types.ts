/** Action Types **/
import {
    ILoginAction,
    ILoginActionSuccess,
} from "./client.actions";
import {Status} from "../../types/status.types";

export enum ClientActionTypes {
    LOGIN = 'CLIENT@@LOGIN',
    LOGIN_SUCCESS = 'CLIENT@@LOGIN_SUCCESS',
}

/** Action List **/
export type ClientActions =
    | ILoginAction
    | ILoginActionSuccess


/** Default State Values **/
export const clientDefaultState = (): ClientState => ({

});

/** State **/
export interface ClientState {

    status?: Status;
}

/** Other... **/
