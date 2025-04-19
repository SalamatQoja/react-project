import React, { useRef } from "react";

function ShowHide() {
    const inputRef = useRef();

    const handleHide = () => {
        inputRef.current.style.display = "none";
    };

    const handleshow = () => {
        inputRef.current.style.display = "block";
    }

    return (
        <div style={{width: "400px", height: "300px", marginTop: "80px"}}>
            <div style={{display: "flex", gap: "20px"}}>
                <button onClick={handleshow} style={{padding: "3px 15px", borderRadius: "5px"}}>Show</button>
                <button onClick={handleHide} style={{padding: "3px 15px", borderRadius: "5px"}}>Hide</button>
            </div>
            <input ref={inputRef} type="text" style={{marginTop: "15px"}} placeholder="napishite..." />
        </div>
    );
}

export default ShowHide;