// Pereklyuchatel temi (svetlaya/temnaya)
// Sozdayte knopku, kototrix pri najati menyat sostayaniy ,mejdu "Svetlaya tema" i "Temnaya tema".V zavisimostiy ot sostayanie izmenite tsvet fona i teksta

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