import React from 'react';
import './Die.css';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";

class Die extends React.Component {
      
    render() {
        const dice = this.props.dice
        return (
          <div>
                {dice === 1 ? <FaDiceOne className={`Die ${this.props.rolling &&
          "shaking"}`} /> : null}
                {dice === 2 ? <FaDiceTwo className={`Die ${this.props.rolling &&
          "shaking"}`} /> : null}
                {dice === 3 ? <FaDiceThree className={`Die ${this.props.rolling &&
          "shaking"}`} /> : null}
                {dice === 4 ? <FaDiceFour className={`Die ${this.props.rolling &&
          "shaking"}`} /> : null}
                {dice === 5 ? <FaDiceFive className={`Die ${this.props.rolling &&
          "shaking"}`} /> : null}
                {dice === 6 ? <FaDiceSix className={`Die ${this.props.rolling &&
          "shaking"}`} /> : null}
          </div>
      );
    }
  }
  export default Die;