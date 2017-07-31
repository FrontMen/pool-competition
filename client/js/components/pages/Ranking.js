//import Session from '../../services/Session';
import React from 'react';
import Default from "../templates/Default";


/**
 * A counter button: tap the button to increase the count.
 */
class Ranking extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="pag__ranking">
                <Default>
                    <div>Ranking...</div>
                </Default>
            </div>
        );
    }
}
export default Ranking;