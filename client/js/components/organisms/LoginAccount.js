import React from 'react';
import Anchor from '../atoms/Anchor';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import xhr from "xhr";

import Username from '../../config/forms/Username';
import Password from '../../config/forms/Password';
import RememberMe from '../../config/forms/RememberMe';
import StatusCodes from '../../helpers/StatusCodes';

class SelectAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            showErrors: false,
            fields: {
                username: Username,
                password: Password,
                rememberMe: RememberMe
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
    onRememberMeChange(field){
        Object.assign(this.state.fields.rememberMe, field);
        this.setState({ fields: this.state.fields});
    }

    onPress(){
        this.setState({ showErrors: true });
        let fields = Object.keys(this.state.fields);
        if (!fields.some(field => this.state.fields[field].error)) {
            xhr.post('http://localhost:3000/api/login', {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                json: true,
                body: {
                    username: this.state.fields.username.value,
                    password: this.state.fields.password.value,
                    remember: this.state.fields.rememberMe.value,
                }
            }, (err, resp, data) => {
                if (StatusCodes.happy(resp.statusCode)){
                    this.props.onLogin && this.props.onLogin();
                } else if (data && data.description){
                    console.log(data.description);
                }
            });
        }
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
                <FormField link={this.state.fields.rememberMe}
                           showErrors={this.state.showErrors}
                           onChange={this.onRememberMeChange.bind(this)} />
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