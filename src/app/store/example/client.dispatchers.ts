import {ClientActionTypes} from "./client.types";
import {
    ILoginAction,
    ILoginActionSuccess,
} from "./client.actions";


/** Actions **/
export const loginDispatchAction = (email: string, password: string): ILoginAction => ({
    type: ClientActionTypes.LOGIN,
    email,
    password
});


/** Saga Actions **/
export const loginDispatchActionSuccess = (email: string, jwt: string, refreshJwt: string): ILoginActionSuccess => ({
    type: ClientActionTypes.LOGIN_SUCCESS,
    email,
    jwt,
    refreshJwt
});