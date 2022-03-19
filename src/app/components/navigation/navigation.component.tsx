import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {PasswordManager} from "./password-manager/password-manager.component";

export const Navigation: React.FunctionComponent = () => (
    <Routes>
        <Route
            path="/password-manager"
            element={<PasswordManager/>}
        />
        <Route
            path="*"
            element={<Navigate to="/password-manager" />}
        />
    </Routes>
)