import React from 'react';
import RankEntry from '../molecules/RankEntry';

class Ranking extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: ["Justus", "Remco", "Jac", "Lucas", "Ramin"]
        };


    }
    render() {
        let entries = this.state.entries.map((entry, index) => <RankEntry key={index} position={index} label={entry} />);

        return (
            <ul className="org__ranking">
                { entries }
            </ul>

        );
    }
}
export default Ranking;