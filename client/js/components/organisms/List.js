import React from 'react';
import ListEntry from '../molecules/ListEntry';
import moment from "moment";

class Ranking extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [
                { title: "Frontmen",
                  subtitle: `(expires ${moment(Date.now()).calendar()})`,
                  onClick: function(entry){console.log("CLICKED", entry)}
                }]
        };
    }

    onGameClick(label){

    }

    render() {
        let entries = this.state.entries.map((entry, index) => <ListEntry key={index} label={entry.title} subtitle={entry.subtitle} onClick={entry.onClick} />);

        return (
            <ul className="org__list">
                { entries }
            </ul>

        );
    }
}
export default Ranking;