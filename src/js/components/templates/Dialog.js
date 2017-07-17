import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Dialog extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="dialog__container">
                <div className="dialog">
                    { this.props.children }
                </div>
            </div>
        );
    }
}
export default Dialog;