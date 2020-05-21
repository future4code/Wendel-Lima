import React from 'react';
import axios from 'axios'
function ResetButton() {
    const onClickReset = () => {
      axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:wendel/clear')
      .then(response => {})
    
    }

    return (
        <div>
            <button onClick={onClickReset}>Reset Button</button>
        </div>
    )
}



export default ResetButton