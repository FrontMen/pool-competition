import React from 'react';
const noop = function(){};

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
        return (
            <button className={this.props.priority} disabled={this.props.disabled} onClick={this.onPress.bind(this)}>{this.props.label}</button>
        );
    }
}
export default Button;