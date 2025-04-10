// Forma vvoda imenii 
// Sozdayte pole vvoda i otobrajenie pod nim tekst: "Privet [vvedeniye imya]!", obnovlya ego v realnim vremeniy

import React, { useState } from "react";

function ShowName () {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="task">
            <input type="text" placeholder="vedite imya" value={name}
            onChange={handleChange} style={{ padding: "10px", fontSize: "25px"}}/>
            <p style={{ margin: "20px", fontSize: "25px", color: "red"}}>
                Privet {name || "drug"}
            </p>
        </div>
    );
}

export default ShowName;