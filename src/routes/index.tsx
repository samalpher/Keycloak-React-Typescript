import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';

import {useKeycloak} from "@react-keycloak/web";

import {PrivateRoute} from "./private-route";
import LoginPage from "../pages/login";
import ProtectedPage from "../pages/protected";

export const AppRouter: React.FC = () => {
    const [,initialized] = useKeycloak();

    if (!initialized) {
        return <div>Loading...</div>
    }

    return (
        <Router>
            <Redirect path={'/'} to={'/priv'} />
            <Route path={'/login'} component={LoginPage} />
            <PrivateRoute path={'/priv'} component={ProtectedPage}/>
        </Router>
    )
};
