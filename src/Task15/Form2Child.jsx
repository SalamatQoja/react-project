// Input s podskazkiy oy roditelya 
// Sozday komponent, v kotorom roditel peredaet b props podskazku (placeholder) i maksimalnyu dlinu teksta . Docherniy komponent otobrajaet ix v pole vvoda 

import React from "react";
import ChildInput from "./ChildInput";

function Parent() {
    return (
        <div>
            <h2>Input s podskazkoy i ogranicheniem</h2>
            <ChildInput placeholder="Vvedite imya" maxLength={10} />
        </div>
    );
}

export default Parent;