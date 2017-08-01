import React from 'react';
import Dialog from '../templates/Dialog';
import LoginAccount from '../organisms/LoginAccount';
import {session} from '../../services/Session';
import {Link, Redirect} from 'react-router-dom';


class Registration extends React.Component {
    constructor() {
        super();

        this.state = {
            redirectToReferrer: false
        };
    }

    onLogin(value) {
        session.set("token", value);
        this.setState({ redirectToReferrer: true });
    };



    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div className="pag__login">
                <Dialog>
                    <LoginAccount onLogin={this.onLogin.bind(this)}/>
                    <Link to="/registration">Create an account</Link>
                </Dialog>
            </div>

        )
    }
}
export default Registration;