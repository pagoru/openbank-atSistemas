import {Reducer} from 'redux'
import {ClientActions, ClientActionTypes, clientDefaultState, ClientState} from "./client.types";
import {StatusCodesEnum} from "../../enums/status-codes.enum";

export const clientReducer: Reducer<ClientState, ClientActions> = (
    state = clientDefaultState(),
    action: ClientActions
) => {
    switch (action.type) {
        case ClientActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                email: action.email,
                jwt: action.jwt,
                refreshJwt: action.refreshJwt,
                status: {
                    action: action.type,
                    code: StatusCodesEnum.OK,
                }
            }

        default:
            return state
    }
}
