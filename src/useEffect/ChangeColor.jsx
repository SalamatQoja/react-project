import React, {useState, useEffect} from "react";

function ChangeColor() {
    const [list, setList] = useState("Sand");
  
    useEffect(() => {

        const typecolors = {
            Sand: "#f5e3a1",
            Sea: "#a2ccb6",
            Peach: "#ffcccb"
        };

        document.body.style.backgroundColor = typecolors[list] || "white";
    }, [list]);

    return (
        <div style={{  height: "300px", display: "flex", 
        justifyContent: "center", alignItems: "center"}}>
        <select value={list} onChange={(e) => setList(e.target.value)}>
            <option value="Sand">Sand</option>
            <option value="Sea">Sea</option>
            <option value="Peach">Peach</option>
        </select>
        </div>
    );
}

export default ChangeColor;

