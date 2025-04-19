import React, { useState, useEffect } from 'react';

function CounterNumber() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Tekushiy znachenie chetchika ${count}`);

        localStorage.setItem("counterValue", count);
    }, [count]);

    const reset = () => setCount(0);

    return (
        <div style={{background: "linear-gradient(to bottom, #ff5f6d), #ffc371",
        height: "400px", width: "600px", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{backgroundColor: "#222", width: "300px", borderRadius: "12px", textAlign: "center"}}>
                <p style={{fontSize: "57px", color: 'red'}}>{count}</p>
                <div style={{display: "flex", justifyContent: "center", gap: "20px", margin: "20px"}}>
                    <button onClick={() => setCount(count - 1)} style={{width: "80px", backgroundColor: "#448aff", borderRadius: "8px"}}>-1</button>
                    <button onClick={() => setCount(count + 1)} style={{width: "80px", height: "30px", backgroundColor: "#448aff", borderRadius: "8px"}}>+1</button>
                </div>
                <button onClick={reset} style={{padding: "10px 66px", fontSize: "20px", backgroundColor: "#448aff", color: "white", border: "none", borderRadius: "8px", cursor: "pointer"}}>Reset</button>
            </div>
        </div>
    );
}
export default CounterNumber;