import React from 'react';
import Loading from '../pages/Loading';
import {Redirect, Route} from 'react-router-dom';
import PoolApi from '../../services/PoolApi';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: "unknown",
            isAuthenticating: false
        };
    }

    componentDidMount() {
        this.authenticate();
    }

    authenticate() {
        if (this.state.isAuthenticating)
            return;

        this.setState({isAuthenticating: true});
        PoolApi.isUser().then(resp => {
            this.setState({authenticated: resp.ok, isAuthenticating: false});
        });
    }

    render() {
        let {component: Component, ...rest} = this.props;

        return (<Route {...rest} render={props => {
                if(this.state.authenticated === "unknown") {
                    return (<Loading />);
                } else if(this.state.authenticated) {
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