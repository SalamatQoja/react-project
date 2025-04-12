// Interaktivniy spisok s videleniyem 
// Pri klike na element spiska on stanovistya videleniyem (menyaetsya stil). Povtornim klik snimaet videleniye 

import React, { useState } from "react";

function ListChange() {
    const items = ["Yabloko", "Banan", "Grusha", "Mango"];
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        if (selectedItem === item) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Spisok Fruktov</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(item)}
                        style={{
                            padding: "10px",
                            margin: "5px 0",
                            border: "1px solid gray",
                            borderRadius: "8px",
                            cursor: "pointer",
                            backgroundColor:
                                selectedItem === item ? "lightgreen" : "white",
                            fontWeight: selectedItem === item ? "bold" : "normal",
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListChange;