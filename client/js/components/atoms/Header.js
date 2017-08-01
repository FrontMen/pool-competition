import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        const HeaderElement = `h${this.props.level}`;
        const className = `ato__header--${HeaderElement}`;
        return (
            <HeaderElement className={className}>{this.props.children}</HeaderElement>
        );
    }
}
export default Header;