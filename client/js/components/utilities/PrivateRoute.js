import React from 'react';
import {
    Redirect, Route
} from 'react-router-dom';

import StatusCodes from '../../helpers/StatusCodes';
const xhr = require("xhr");

let isAuthenticated = false;

class PrivateRoute extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authenticated: "unknown"
        };

        this.authenticate();
    }
    authenticate(){
        return xhr("/api/is-user", function(err, resp, body){
            this.setState({ authenticated: StatusCodes.happy(resp.statusCode)});
        }.bind(this));
    }

    render() {
        let {component: Component, ...rest} = this.props;

        return (<Route {...rest} render={props => {
                if (isAuthenticated === "unknown") {
                    return (<div>...</div>);
                } else if (isAuthenticated){
                    return (<Component {...props}/>);
                } else {
                    return (<Redirect to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}/>);
                }
            }}/>
        )
    }
}

export default PrivateRoute;