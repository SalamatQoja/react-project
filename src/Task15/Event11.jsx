// Upravlenye otobrajenye blokov 
// Sozday tri knopki: "Pokazat A ", "Pokazat B", "Pokazat S" pri najatiy doljan otobrajaetsya tolko sootvetstyushix seksya Ostalni skrivaetsya 

import React, { useState } from "react";

function BlockShow() {
    const [visibleBlock, setVisibleBlock] = useState(null);
    const handleShow = (block) => {
        setVisibleBlock(block);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Upravlenie Blokami</h2>
            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => handleShow("A")} style={{ marginRight: "10px" }}>Pokazat A</button>
                <button onClick={() => handleShow("B")} style={{ marginRight: "10px" }}>Pokazat B</button>
                <button onClick={() => handleShow("C")}>Pokazat C</button>
            </div>

            {visibleBlock === "A" && (
                <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
                    <h3>Blok A</h3>
                    <p>Kontent dlya A</p>
                </div>
            )}

            {visibleBlock === "B" && (
                <div style={{ backgroundColor: "#dff0d8", padding: "20px" }}>
                    <h3>Blok B</h3>
                    <p>Kontent dlya B</p>
                </div>
            )}

            {visibleBlock === "C" && (
                <div style={{ backgroundColor: "#d9edf7", padding: "20px" }}>
                    <h3>Blok C</h3>
                    <p>Kontent dlya C</p>
                </div>
            )}
        </div>
    );
}

export default BlockShow;
