import React, {Component} from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import {useKeycloak} from "@react-keycloak/web";

export const PrivateRoute: React.FC<RouteProps> = (props) => {

    const {...rest} = props;

    const [keycloak] = useKeycloak();

    if (!keycloak.authenticated)
        return <Redirect to={{pathname: '/login', state: {from: rest.location}}} />;

    return(
        <Route
            {...rest}
            render={props => <Component {...props} />} />
    )
};
