import React from 'react';
import Header from '../atoms/Header';

class AppHeader extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="org__app-header">
                <Header level="1">{this.props.title}</Header>
            </div>
        );
    }
}
export default AppHeader;