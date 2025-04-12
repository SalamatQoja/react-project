// Spisok zametkiy s vozmojnostiy udaleniya
// Sozday spisok zametok, kajdaya iz kotorix imeet knopku udaleniya.Pri najatiy zametka doljna udalyatsya iz obshego spiska

import React, { useState } from "react"

function ListItem() {
    const [List, setlist] = useState([
        { id: 1, title: "React", content: "basically learnned case" },
        { id: 2, title: "Vue", content: "basically learnned improtant" },
        { id: 3, title: "Angular", content: "Basically learned" }
    ]);

    const handleDelete = (id) => {
        setlist(List.filter(e => e.id !== id))
    }

    return (
        <div>
            <h1 style={{textAlign: "center", color: "blue"}}>Explore Fronted</h1>
                {List.map(e => (
                    <div key={e.id} style={{
                        width: "400px",
                        height: "90px",
                        borderRadius: "10px",
                        border: "1px solid red",
                        marginBottom: "10px",
                        padding: "5px"
                    }}>
                        <h2 style={{ color: "blue" }}>{e.title}</h2>
                        <p>{e.content}</p>
                        <button className="btn3" onClick={() => handleDelete(e.id)}>Удалить</button>
                    </div>
                ))}
        </div>
    );
}

export default ListItem;