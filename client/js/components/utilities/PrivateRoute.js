import React from 'react';
import {
    Redirect, Route
} from 'react-router-dom';
const xhr = require("xhr");
let isAuthenticated = false;

class PrivateRoute extends React.Component {

    componentWillMount(){
        xhr("/api/is-user", function(err, resp, body){
            isAuthenticated = resp.statusCode === 204;
        });
    }

    render() {

        let {component: Component, ...rest} = this.props;

        return (<Route {...rest} render={props => (
                isAuthenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
                )
            )}/>
        )
    }
}

export default PrivateRoute;