import React from 'react';
const noop = function(){};

const defaults = {
    priority: "primary"
};

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
        const className = `ato__button ato__button--${this.props.priority || defaults.priority}`;

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