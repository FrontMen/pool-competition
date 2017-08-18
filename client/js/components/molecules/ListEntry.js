import React from 'react';
import Header from '../atoms/Header';

class ListEntry extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    onClick(){
        this.props.onClick && this.props.onClick(this.props.label);
    }

    render() {
        let subtitle = this.props.subtitle ? (<Header level="5">{this.props.subtitle}</Header>) : "";
        return (
            <li className="mol__list-entry" onClick={this.onClick.bind(this)}>
                <Header level="3">{this.props.label}</Header>
                {subtitle}
            </li>
        );
    }
}
export default ListEntry;