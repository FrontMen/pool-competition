import React from 'react';
import { withRouter } from 'react-router-dom'

const defaults = {
    priority: "primary"
};

class Button extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    onPress(evt){
        if (this.props.link) {
            this.props.history.push(this.props.link);
        } else {
            evt.preventDefault();
            this.props.onPress && this.props.onPress();
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
export default withRouter(Button);