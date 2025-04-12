// Pereklyuchatel temi svetlaya/temnaya  
// Dobavit knopku kotoraya menyaet temu na svetlyu ili temnuyu .Ispolzyua useState.Tsvet teksta doljna menyaetsya 

import React, { useState } from "react";


function DrankBrigt() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleClick = () => {
        setIsDarkTheme(prev => !prev);
    };

    const themeStyles = {
        backgroundColor: isDarkTheme ? "#333" : "#fff",
        color: isDarkTheme ? "#fff" : "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    return (
        <div style={themeStyles}>
            <h1>{isDarkTheme ? "Темная тема" : "Светлая тема"}</h1>
            <button className="btn" onClick={handleClick}>
                Переключить тему
            </button>
        </div>
    );
}

export default DrankBrigt;