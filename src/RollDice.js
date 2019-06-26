import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: "Roll Dice!",
            face: "one",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }
    render() {
        return (
            <div>
                <Die dice={this.state.face}/>
                <Die dice={this.state.face}/>
                <button onClick={this.handleClick}>{this.state.button}</button>
            </div>
        )
    }
}

export default RollDice