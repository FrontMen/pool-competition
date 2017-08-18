import React from 'react';
import Dialog from '../templates/Dialog';
import LoginAccount from '../organisms/LoginAccount';
import {Redirect} from 'react-router-dom';


class Registration extends React.Component {
    constructor() {
        super();

        this.state = {
            redirectToReferrer: false
        };
    }

    onLogin() {
        this.setState({ redirectToReferrer: true });
    };



    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            console.log(from);
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div className="pag__login">
                <Dialog>
                    <LoginAccount onLogin={this.onLogin.bind(this)}/>
                </Dialog>
            </div>

        )
    }
}
export default Registration;