import React from 'react';
import Dialog from '../templates/Dialog';
import SelectAccount from '../organisms/SelectAccount';
import {session} from '../../services/Session';
import {Redirect} from 'react-router-dom';


/**
 * A counter button: tap the button to increase the count.
 */
class Registration extends React.Component {
    constructor() {
        super();

        this.state = {
            redirectToReferrer: false
        };
    }

    onSelection(value) {
        session.set("user", value);
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
            <Dialog>
                <SelectAccount onSelection={this.onSelection.bind(this)}/>
            </Dialog>

        )
    }
}
export default Registration;