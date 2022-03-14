import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import { App } from "./app/app";
import '@testing-library/jest-dom';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);