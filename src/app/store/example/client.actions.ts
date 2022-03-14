import {ClientActionTypes} from "./client.types";

/** Actions **/
export interface ILoginAction {
    type: typeof ClientActionTypes.LOGIN
    email: string;
    password: string;
}

/** Saga Actions **/
export interface ILoginActionSuccess {
    type: typeof ClientActionTypes.LOGIN_SUCCESS
    email: string;
    jwt: string;
    refreshJwt: string;
}