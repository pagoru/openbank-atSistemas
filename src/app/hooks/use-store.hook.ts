import * as React from 'react';
import { createStore, Store, applyMiddleware } from 'redux';
import {DefaultState, rootReducer, rootSaga} from "../store/store";
import createSagaMiddleware from 'redux-saga'

export const useStoreHook = () => {
    const [store, setStore] = React.useState<Store<DefaultState>>();
    
    React.useEffect(() => {
        const sagaMiddleware = createSagaMiddleware();
        const _store = createStore(
            rootReducer,
            applyMiddleware(sagaMiddleware)
        );
        sagaMiddleware.run(rootSaga);
        
        setStore(_store);
    }, []);
    
    return store;
}
