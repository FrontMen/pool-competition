import React from 'react';
import Dialog from '../templates/Dialog';
import CreateAccount from '../organisms/CreateAccount';
import {Redirect} from 'react-router-dom';

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