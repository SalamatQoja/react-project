import React, { useState, useEffect } from 'react';

function ChangeItem() {
    const [name, setName] = useState("Cool Guy");
    const [nameChanges, setNameChanges] = useState(0);
    const [luckyNumber, setLuckyNumber] = useState(8);

    useEffect(() => {
    
        const yCount = name.match(/y+$/)?.[0].length || 0;
   
        setLuckyNumber(yCount % 100);
    }, [name]); 

    const handleChangeName = () => {
        setName(prev => prev + 'y');
        setNameChanges(prev => prev + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1 style={{color: "blue", fontSize: "36px"}}>Welcome {name}!</h1>
            <p style={{color: "darkblue", fontSize: "25px"}}>Your lucky number is {luckyNumber}</p>
            <p style={{color: "darkblue", fontSize: "20px"}}>Name has changed {nameChanges} times</p>
            <button onClick={handleChangeName} style={{padding: "8px", borderRadius: "7px", backgroundColor: "gray", border: "none"}}>Change Name</button>
        </div>
    );
}

export default ChangeItem;
