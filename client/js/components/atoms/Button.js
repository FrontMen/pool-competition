import React from 'react';
const noop = function(){};

const defaults = {
    priority: "primary"
};

/**
 * A counter button: tap the button to increase the count.
 */
class Button extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    onPress(evt){
        evt.preventDefault();
        if (this.props.onPress){
            this.props.onPress();
        }
    }

    render() {
        const className = `atom-button atom-button--${this.props.priority || defaults.priority}`;

        return (
            <button className={className}
                    disabled={this.props.disabled}
                    onClick={this.onPress.bind(this)}>
                {this.props.label}
            </button>
        );
    }
}
export default Button;