import React from 'react';
import Anchor from '../atoms/Anchor';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

import Username from '../../config/forms/Username';
import Password from '../../config/forms/Password';

class SelectAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            showErrors: false,
            fields: {
                username: Username,
                password: Password
            }
        };
    }
    onUsernameChange(field){
        Object.assign(this.state.fields.username, field);
        this.setState({ fields: this.state.fields });
    }
    onPasswordChange(field){
        Object.assign(this.state.fields.password, field);
        this.setState({ fields: this.state.fields});
    }
    onRememberMeChange(rememberMe){
        this.state.rememberMe = rememberMe;
    }

    onPress(){
        this.setState({ showErrors: true });
        // TODO perform XHR login request. Redirect to home if succesful. Handle errors.
    }

    render() {
        return (
            <div className="org__login-account">
                <Header level="1">Login to proceed</Header>
                <FormField link={this.state.fields.username}
                           showErrors={this.state.showErrors}
                           onChange={this.onUsernameChange.bind(this)} />
                <FormField link={this.state.fields.password}
                           showErrors={this.state.showErrors}
                           onChange={this.onPasswordChange.bind(this)} />
                <Button priority="primary"
                        label="Continue"
                        onPress={this.onPress.bind(this)}
                        disabled={this.state.disabled}/>

                <Paragraph><Anchor to="/registration">Or create an account</Anchor></Paragraph>
            </div>
        );
    }
}
export default SelectAccount;