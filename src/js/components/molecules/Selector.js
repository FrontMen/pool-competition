import React from 'react';
import Header from '../atoms/Header';

/**
 * A counter button: tap the button to increase the count.
 */
class Dialog extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header level="1">Select your account</Header>
                {/*<Selector label="Accounts:" data={data} />*/}
                <Button label="Continue" />
            </div>
        );
    }
}
export default Dialog;