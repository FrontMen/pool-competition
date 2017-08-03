import React from 'react';
import Dialog from '../templates/Dialog';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import Button from '../atoms/Button';

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    onContinue() {
        console.log("going to ranking");
    }

    render() {
        return (
            <div className="pag__verified">
                <Dialog>
                    <Header level="1">Activated.</Header>
                    <Paragraph>
                        Your account has been verified and is now active!
                    </Paragraph>
                    <Button link="/" label="OK thanx, bye!" />
                </Dialog>

            </div>

        )
    }
}
export default Registration;