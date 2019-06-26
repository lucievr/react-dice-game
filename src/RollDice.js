import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnText: "Roll Dice!",
            face1: 1,
            face2: 4
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }
    render() {
        return (
            <div>
                <Die dice={this.state.face1}/>
                <Die dice={this.state.face2}/>
                <button onClick={this.handleClick}>{this.state.btnText}</button>
            </div>
        )
    }
}

export default RollDice