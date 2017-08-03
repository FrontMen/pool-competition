import React from 'react';
import Default from "../templates/Default";
import Ranking from "../organisms/Ranking";

class Standings extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="pag__standings">
                <Default title="Standings">
                    <Ranking />
                </Default>
            </div>
        );
    }
}
export default Standings;