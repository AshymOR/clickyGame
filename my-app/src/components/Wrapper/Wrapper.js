import React from "react";
import "./Wrapper.css";
import Tile from "../Images";
import StatusBar from "../StatusBar"
import tiles from "../../Images.json"

class Wrapper extends React.Component {
    state = {
        tiles: tiles,
        message: "Press any character to begin",
        score: 0
    };

    generateSequence() {
        let sequence = [];
        while (sequence.length < this.state.tiles.length) {
            const randomIndex = Math.floor(Math.random() * this.state.tiles.length);
            if (sequence.indexOf(randomIndex) === -1) {
                sequence.push(randomIndex);
            }
        }

        return sequence;
    }

    gameover() {
        this.state.tiles.map(tile => {
            tile.touched = false;
            return tile;
        })
    }

    touch = id => {
        const newTiles = this.state.tiles;
        let message;
        let newScore = this.state.score;
        newTiles.forEach(tile => {
            if (tile.id === id) {
                if (tile.touched) {
                    message = "Game over!"
                    newScore = 0;
                    this.gameover();
                } else {
                    tile.touched = true
                    newScore++;
                    if (newScore === this.state.tiles.length) {
                        message="You win!"
                        newScore=0;
                        this.gameover();
                    }
                }
            }
        });
        this.setState({
            tiles: newTiles,
            message: message,
            score: newScore
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <StatusBar message={this.state.message} score={this.state.score}></StatusBar>
                </nav>
                <div className="wrapper">
                    {
                        this.generateSequence().map(index => {
                            const tile = this.state.tiles[index];
                            return (
                                <Tile
                                    id={tile.id}
                                    image={tile.image}
                                    touched={tile.touched}
                                    touch={this.touch}
                                />
                            )
                        })
                    }
                </div>
            </div>
            
        )
    }


}

export default Wrapper;