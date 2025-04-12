// Schetchik s polzovatel shagom
// Komponent doljen imeet knopki "Uvelichet" i "Umenshit" a shag schetchika (na skolko uvelichivat/umenshat) peredaetsya cherez props 

import React, { useState } from "react"

function Level({ step }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + step);
    }

    const decrement = () => {
        setCount(count - step)
    };

    return (
        <div>
            <h1>Chetchik: {count}</h1>
            <button onClick={increment}>Uvelichit</button>
            <button onClick={decrement}>Umenshit</button>
        </div>
    );
}

export default Level;