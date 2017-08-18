import React from 'react';
import Username from '../../config/forms/Username';
import Email from '../../config/forms/Email';
import Password from '../../config/forms/Password';
import Header from '../atoms/Header';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import PoolApi from '../../services/PoolApi';


class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false,
            fields: {
                username: Username,
                email: Email,
                password: Password
            },
            showErrors: false
        };
    }

    onUsernameChange(field){
        Object.assign(this.state.fields.username, field);
        this.setState({ fields: this.state.fields });
    }

    onEmailChange(field){
        Object.assign(this.state.fields.email, field);
        this.setState({ fields: this.state.fields});
    }
    onPasswordChange(field){
        Object.assign(this.state.fields.password, field);
        this.setState({ fields: this.state.fields});
    }

    onPress(){
        this.setState({ showErrors: true });
        let fields = Object.keys(this.state.fields);
        if (!fields.some(field => this.state.fields[field].error)) {
            console.log("VALID FORM");

            PoolApi.createUser({
                username: this.state.fields.username.value,
                email: this.state.fields.email.value,
                password: this.state.fields.password.value,
            }).then((resp, data) => {
                if (resp.ok){
                    this.props.onCreate && this.props.onCreate();
                } else if (data && data.description){
                    console.log(data.description);
                }
            });
        }
    }


    render() {
        return (
            <div className="org__create-account">
                <Header level="1">Create account</Header>
                <FormField link={this.state.fields.username}
                           showErrors={this.state.showErrors}
                           onChange={this.onUsernameChange.bind(this)}
                />
                <FormField link={this.state.fields.email}
                           showErrors={this.state.showErrors}
                           onChange={this.onEmailChange.bind(this)}
                />
                <FormField link={this.state.fields.password}
                           showErrors={this.state.showErrors}
                           onChange={this.onPasswordChange.bind(this)}
                />

                <Button priority="primary"
                        label="Create"
                        onPress={this.onPress.bind(this)}
                        disabled={this.state.disabled} />
            </div>
        );
    }
}
export default CreateAccount;