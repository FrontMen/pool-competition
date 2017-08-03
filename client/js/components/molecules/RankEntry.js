import React from 'react';
import Header from '../atoms/Header';

const classModifiers = {
    0: "mol__rank-entry--first",
    1: "mol__rank-entry--second",
    2: "mol__rank-entry--third"
};

class RankEntry extends React.Component {
    constructor() {
        super();
        this.state = { value: "" };
    }

    render() {
        let positionClass = "mol__rank-entry " + (classModifiers[this.props.position] || "");
        return (
            <li className={positionClass}>
                <Header level="4">{this.props.label}</Header>
            </li>
        );
    }
}
export default RankEntry;