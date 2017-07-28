import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Registered extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="pag__registered">
                Your account is registered. Check your email to verify your account.
            </div>
        )
    }
}
export default Registered;