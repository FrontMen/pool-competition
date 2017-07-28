import React from 'react';
import { session } from '../../services/Session';

import Header from '../atoms/Header';
import EmailField from '../molecules/EmailField';
import PasswordField from '../molecules/PasswordField';
import Button from '../atoms/Button';

import xhr from "xhr";

/**
 * A counter button: tap the button to increase the count.
 */
class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            email: "",
            password: ""
        };
    }

    onPress(){
        xhr.post('http://localhost:3000/register-user', {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }, (err, resp) => {
            // TODO validate and error handling
            this.props.onCreate && this.props.onCreate();
        });
    }

    onEmailChange(email){
        this.setState({email: email});
    }
    onPasswordChange(password){
        this.setState({password: password});
    }
    validate(){
        console.log("validation");
        if (this.state.email && this.state.password && this.state.disabled){
            this.setState({ disabled: false });
            // SEND AJAX REQUEST
        }
    }

    componentDidUpdate(){
        this.validate();
    }

    render() {
        return (
            <div className="org__create-account">
                <Header level="1">Create account</Header>
                <EmailField label="Email" onChange={this.onEmailChange.bind(this)} />
                <PasswordField label="Password" onChange={this.onPasswordChange.bind(this)} />
                <Button priority="primary"
                        label="Create"
                        onPress={this.onPress.bind(this)}
                        disabled={this.state.disabled} />
            </div>
        );
    }
}
export default CreateAccount;