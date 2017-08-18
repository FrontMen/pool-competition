import React from 'react';
import Default from "../templates/Default";

class Game extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pag__game">
                <Default title="Game">
                    <div></div>
                </Default>
            </div>
        );
    }
}
export default Game;