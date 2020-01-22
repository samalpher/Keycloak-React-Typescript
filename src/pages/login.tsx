import React, {useCallback} from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {useKeycloak} from "@react-keycloak/web";

const LoginPage: React.FC = () => {
    const [keycloak, initalized] = useKeycloak();
    const login = useCallback(() => {
        keycloak.login()
    }, [keycloak]);

    const logout = useCallback(() => {
        //If a BaseURL is not configured in your keycloak client configuration (server side) or if you
        //want to override the BaseUrl in favor of a targeted logout URL, supply options to keycloak.logout
        //such as keycloak.logout({redirectUri: 'http://localhost:3000') reflecting the desired logout landing page.
        keycloak.logout();
    }, [keycloak]);

    const authenticatedContent = () =>
        <div>
            <button type={"button"} onClick={logout}>Logout</button>
            <NavLink to={'/priv'}>Priv</NavLink>
        </div>;

    return (
        <div>
            {initalized && keycloak.authenticated ?
                (authenticatedContent())
                : (<button type={"button"} onClick={login}>Login</button>)}
        </div>
    )
};

export default withRouter(LoginPage);
