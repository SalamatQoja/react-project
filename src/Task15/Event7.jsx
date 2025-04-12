// Raskrivayushixsya spisok (dropdown) 
// Sozday komponent vipadayushego spiska.Pri klike on otkrivaetsya pri povtornom zakrivaetsya . Vibranniy elemnt otobrajaetsya naverxu 

import React, { useState } from "react";

function ListCheck() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Vibray mashinu");
    const options = ["Toyota", "Chevrolet", "BMW", "Opel"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false); 
    };

    return (
        <div style={{ margin: "20px" }}>
            <h1 style={{ color: "red" }}>Car brand</h1>
            <div
                style={{
                    border: "1px solid gray",
                    width: "200px",
                    padding: "10px",
                    cursor: "pointer",
                    userSelect: "none",
                    position: "relative"
                }}
                onClick={toggleDropdown}
            >
                {selected}
                {isOpen && (
                    <div
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            background: "#fff",
                            border: "1px solid gray",
                            width: "100%",
                            zIndex: 1,
                        }}
                    >
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(option)}
                                style={{
                                    padding: "10px",
                                    borderBottom: "1px solid #eee",
                                    cursor: "pointer",
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListCheck;

