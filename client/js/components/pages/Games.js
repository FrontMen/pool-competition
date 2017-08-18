import React from 'react';
import Default from "../templates/Default";
import Button from "../atoms/Button";
import List from "../organisms/List";
import xhr from "xhr";

class Games extends React.Component {
    constructor() {
        super();

        this.state = {
            games: []
        };
        this.loadGames();
    }

    loadGames(){
        fetch("http://justus.local.nl:3000/api/games", {
            headers: new Headers({
                'Content-Type': 'text/json'
            }),
            credentials: "include",
            mode: "cors"})
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);
            });
    }

    onNewGame(){
        console.log("new game");
    }

    render() {
        return (
            <div className="pag__games">
                <Default title="Active games">
                    <div>
                        <List items={this.state.games} />
                        <Button priority="primary"
                                label="Create new game"
                                onPress={this.onNewGame.bind(this)} />
                    </div>
                </Default>
            </div>
        );
    }
}
export default Games;