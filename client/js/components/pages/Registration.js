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

        this.state = {
            registered: false
        };
    }

    onCreate() {
        this.setState({ registered: true });
    };

    render() {
        const { registered } = this.state;

        if (registered) {
            return (
                <Redirect to="/registered" />
            )
        }

        return (
            <div className="pag__registration">
                <Dialog>
                    <CreateAccount onCreate={this.onCreate.bind(this)}/>
                </Dialog>
            </div>

        )
    }
}
export default Registration;