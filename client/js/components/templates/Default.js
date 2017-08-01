import React from 'react';
import AppHeader from '../organisms/AppHeader';
import AppFooter from '../organisms/AppFooter';

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