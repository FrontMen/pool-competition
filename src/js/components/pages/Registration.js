import React from 'react';
import Dialog from '../templates/Dialog';
import SelectAccount from '../organisms/SelectAccount';
import {session} from '../../services/Session';

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

    register(user) {
        session.set({ user: user });
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
                <SelectAccount />
            </Dialog>

        )
    }
}
export default Registration;