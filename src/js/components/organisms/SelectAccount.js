import React from 'react';
import { session } from '../../services/Session';

import Header from '../atoms/Header';
import Selector from '../molecules/Selector';
import Button from '../atoms/Button';

/**
 * A counter button: tap the button to increase the count.
 */
class SelectAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            options: [
                { id: 0, value: 'Justus', label: 'Justus' },
                { id: 1, value: 'Remco', label: 'Remco' },
                { id: 2, value: 'Jac', label: 'Jac' }
            ]
        };
    }

    onPress(){
        this.props.onSelection(this.state.selected);
    }

    onChange(value){
        this.setState({ selected: value });
        this.setState({ disabled: false });
    }

    render() {
        return (
            <div>
                <Header level="1">Select your account</Header>
                <Selector label="Accounts:"
                          options={this.state.options}
                          onChange={this.onChange.bind(this)} />
                <Button priority="primary"
                        label="Continue"
                        onPress={this.onPress.bind(this)}
                        disabled={this.state.disabled}/>
            </div>
        );
    }
}
export default SelectAccount;