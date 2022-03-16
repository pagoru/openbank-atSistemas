import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import {PasswordManager} from "./password-manager/password-manager.component";

export const Navigation: React.FunctionComponent = () => {

    return (
        <Routes>
            <Route
                path="/password-manager"
                element={<PasswordManager/>}
            />
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    )

}