// Avtomoticheskiye ochistka polya 
// Pri vvode bolee 5 simvolov v pole , soderjimoe ochishaetsya avtomoticheskiye  i vivedutsya uvedomleniye: "Slishkom mnogo simvolov" 

import React, { useState } from "react";

function AutoClearInput() {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const input = e.target.value;

        if (input.length > 5) {
            setValue(""); 
            setMessage("Slishkom mnogo simvolov");
        } else {
            setValue(input); 
            setMessage("");  
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Vvedi do 5 simvolov</h2>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Vvedi tekst"
                style={{ padding: "10px", fontSize: "16px" }}
            />
            {message && <p style={{ color: "red" }}>{message}</p>}
        </div>
    );
}

export default AutoClearInput;