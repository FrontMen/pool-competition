import React from 'react';

import Header from '../atoms/Header';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

import xhr from "xhr";

class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false,
            fields: {
                username: {
                    label: "Username",
                    type: "text",
                    value: "",
                    error: true,
                    validations: [
                        {
                            rule: function(val){
                                return val.length > 2
                            },
                            message: "Username should be at least 3 characters."
                        }
                    ]
                },
                email: {
                    label: "Email",
                    type: "email",
                    value: "",
                    error: true,
                    validations: [
                        {
                            rule: function(val){
                                return val.length > 2
                            },
                            message: "Email should be at least 3 characters."
                        },
                        {
                            rule: function(val){
                                return val.indexOf('@') !== -1;
                            },
                            message: "No '@' symbol. Please try harder!"
                        }
                    ]
                },
                password: {
                    label: "Password",
                    type: "password",
                    value: "",
                    error: true,
                    validations: [{
                        rule: function(val){
                            return val.length > 5
                        },
                        message: "Password should contain at least 6 characters."
                    }]
                }
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
            // xhr.post('http://localhost:3000/api/users', {
            //     headers: {
            //         "Access-Control-Allow-Origin": "*"
            //     },
            //     json: true,
            //     body: {
            //         username: this.state.username.value
            //     }
            // }, (err, resp) => {
            //     // TODO validate and error handling
            //     this.props.onCreate && this.props.onCreate();
            // });
        }

    }


    render() {
        console.log(this.state.fields.email);
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