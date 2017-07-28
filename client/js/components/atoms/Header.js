import React from 'react';


/**
 * A counter button: tap the button to increase the count.
 */
class Header extends React.Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        const HeaderElement = `h${this.props.level}`;
        const className = `atom-header--${HeaderElement}`;
        return (
            <HeaderElement className={className}>{this.props.children}</HeaderElement>
        );
    }
}
export default Header;