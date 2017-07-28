import React from 'react';


/**
 * A counter button: tap the button to increase the count.
 */
class Label extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const className = `atom-label`;
        return (
            <label className={className}>{this.props.children}</label>
        );
    }
}
export default Label;