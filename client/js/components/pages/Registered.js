import React from 'react';
import Dialog from "../templates/Dialog";
import Header from "../atoms/Header";
import Paragraph from "../atoms/Paragraph";

// TODO add gif to this page :)
class Registered extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="pag__registered">
                <Dialog>
                    <Header level="1">Registration done.</Header>
                    <Paragraph>
                        Your account has been registered. We have send you an email with a link to validate your account. Once you've followed that link, you can make use of Pool Competition!
                    </Paragraph>
                </Dialog>

            </div>
        )
    }
}
export default Registered;