import React, { useState, useEffect } from "react";

function Position() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPos({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleClick = () => {
        setNumber(prev => prev + 1);
    };

    return (
        <div>
            <h1>You clicked{number}</h1>
            <h1>Kolichestvo cursora: x = {pos.x}, y = {pos.y}</h1>
            <button onClick={handleClick}>Click me </button>
        </div>
    );
}

export default Position;