import React from 'react';
import AppHeader from '../organisms/AppHeader';
import AppFooter from '../organisms/AppFooter';

/**
 * A counter button: tap the button to increase the count.
 */
class Default extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="tem_default">
                <AppHeader />
                    { this.props.children }
                <AppFooter />
            </div>
        );
    }
}
export default Default;