import {Reducer} from 'redux'
import {ExampleActions, ExampleActionTypes, exampleDefaultState, ExampleState} from "./example.types";

export const exampleReducer: Reducer<ExampleState, ExampleActions> = (
    state = exampleDefaultState(),
    action: ExampleActions
) => {
    switch (action.type) {
        case ExampleActionTypes.SET_SUCCESS:
            return {
                ...state,
                test: action.test
            }

        default:
            return state
    }
}
