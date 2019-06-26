import React from 'react';
import './Die.css';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";

class Die extends React.Component {
      
    render() {
        const dice = this.props.dice
        return (
          <div>
                {dice === 1 ? <FaDiceOne className="Die" /> : null}
                {dice === 2 ? <FaDiceTwo className="Die" /> : null}
                {dice === 3 ? <FaDiceThree className="Die" /> : null}
                {dice === 4 ? <FaDiceFour className="Die" /> : null}
                {dice === 5 ? <FaDiceFive className="Die" /> : null}
                {dice === 6 ? <FaDiceSix className="Die" /> : null}
          </div>

      );
    }
  }
  export default Die;