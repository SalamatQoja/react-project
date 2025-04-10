// Chectchik klikov
// Sozdayte komponent s knopkoy.Pri kajdom klike na knopku chetshik doljen uvelichivatesya na 1. Vivedite tekushiy znachenie chetchik na ekran

import React, { useState } from "react";
import React from "react";

const Increment = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setCounter(Number(value));
    }

    return (
        <>
            <h1>Counter{counter}</h1>
            <button onClick={handleClick}>Increment</button>
            <input type="number" value={counter} onChange={handleChange} />
        </>
    );
}

export default Increment;