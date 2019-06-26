import React from 'react';

function Die(props) {
    let iconStr = `fas fa-dice-${props.dice}`
    return (
        <div>
            <i className={iconStr}></i>
        </div>
    )    
}

export default Die;