// Izmeneniye razmer teksta
// Sozdayte knopku "Uvelivichit" i "Umenshit", kotoriy izmenyat razmer teksta na stranitse

import React, {useState} from "react"

function SizeText() {
    const [fontSize, setFontsize] = useState(16);

    const incresize = () => {
        setFontsize((e) => e + 2);
    }

    const decrementSize = () => {
        setFontsize((e) => (e > 6 ? e - 2 : e));
    };

    return (
        <div style={{ padding: "20px"}}>
            <p style={{ color: "red", fontSize: `${fontSize}px`}}>Lorem ipsum dolor sit amet.</p>
            <button onClick={incresize}>Uvelichet</button>
            <button onClick={decrementSize}>Umenshit</button>
        </div>
    );
}

export default SizeText;