import React from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends React.Component {
  static defaultProps = {
    sides: [1, 2, 3, 4, 5, 6]
  };
  constructor(props) {
    super(props);
    this.state = {
      face1: 1,
      face2: 4,
      rolling: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ face1: newDie1, face2: newDie2, rolling: true });

    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div>
        <Die dice={this.state.face1} rolling={this.state.rolling} />
        <Die dice={this.state.face2} rolling={this.state.rolling} />
        <button onClick={this.handleClick} disabled={this.state.rolling} className="btn">
            {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
