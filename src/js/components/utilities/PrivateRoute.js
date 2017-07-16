import { session } from '../../services/Session';
import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        session.isUser ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/registration',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

export default PrivateRoute;