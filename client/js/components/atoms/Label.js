import React from 'react';

class Label extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const className = `ato__label`;
        return (
            <label className={className}>{this.props.children}</label>
        );
    }
}
export default Label;