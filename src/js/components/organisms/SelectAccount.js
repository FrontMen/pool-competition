import React from 'react';
import Header from '../atoms/Header';
import { session } from '../../services/Session';
import Button from '../atoms/Button';

/**
 * A counter button: tap the button to increase the count.
 */
class SelectAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    onPress(){
        console.log("WTF");
    }

    onSelect(value){
        if (value){
            session.set("user", value);
            this.state.disabled = false;
        }
    }

    render() {
        return (
            <div>
                <Header level="1">Select your account</Header>
                {/*<Selector label="Accounts:" data={data} onSelect={this.onSelect} />*/}
                <Button priority="primary" label="Continue" onPress={this.onPress} disabled={this.state.disabled}/>
            </div>
        );
    }
}
export default SelectAccount;