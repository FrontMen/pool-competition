import React from 'react';
import Dialog from '../templates/Dialog';
import CreateAccount from '../organisms/CreateAccount';
import {Redirect} from 'react-router-dom';
//import {session} from '../../services/Session';

/**
 * A counter button: tap the button to increase the count.
 */
class Registration extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="pag__verified">
                Your account has been verified!
            </div>

        )
    }
}
export default Registration;