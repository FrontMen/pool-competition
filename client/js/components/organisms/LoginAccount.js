import React from 'react';
import Anchor from '../atoms/Anchor';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import EmailField from '../molecules/EmailField';
import PasswordField from '../molecules/PasswordField';
import Button from '../atoms/Button';

class SelectAccount extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    onPress(){

        // perform login action
        // receive token for session storage
    }

    render() {
        return (
            <div className="org__login-account">
                <Header level="1">Login to proceed</Header>
                <EmailField label="Email"/>
                <PasswordField label="Password"/>
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