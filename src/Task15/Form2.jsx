// Input s podskazkiy oy roditelya 
// Sozday komponent, v kotorom roditel peredaet b props podskazku (placeholder) i maksimalnyu dlinu teksta . Docherniy komponent otobrajaet ix v pole vvoda 

import React from "react";

function ChildInput({ placeholder, maxLength }) {
    return (
        <div style={{ margin: "20px" }}>
            <input
                type="text"
                placeholder={placeholder}
                maxLength={maxLength}
                style={{ padding: "10px", fontSize: "16px", width: "250px" }}
            />
        </div>
    );
}

export default ChildInput;