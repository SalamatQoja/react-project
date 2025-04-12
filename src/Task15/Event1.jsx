// Komponent vvoda c ogranicheniem
// Sozday tekstvoe pole, kototriye prinimat ne bolee 10 simvolov. Pri popitke vvestiy bolshe - otobrajay soobshenie ob oshibke 

import React, { useState } from "react";

function Inputtext() {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const input = e.target.value;

        if (input.length > 10) {
            setError("Oshibka: Mojno vvesti ne bolee 10 simvolov")
        } else {
            setText(input);
            setError("");
        };
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Inputtext;