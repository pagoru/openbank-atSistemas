import React from 'react';
import { Provider } from 'react-redux';
import logo from '../logo.svg';
import './app.sass';
import {useStoreHook} from "./hooks/use-store.hook";
import {useTranslationHook} from "./hooks/use-translation.hook";

export const App = () => {
    const isTranslationLoaded = useTranslationHook();
    const store = useStoreHook();

    if (!isTranslationLoaded || !store) return null;

    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Provider>
    );
}
