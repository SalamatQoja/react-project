import React, {useState} from "react";


function AddItem(props) {
    const [item, setItem] = React.useState([]);

    const important = () => {
        const newItem = `Item ${item.length}`
        setItem([...item, newItem]);
    }

    return (
        <div>
            <ul>
                {item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={important}>Add</button>
        </div>
    );
}

export default AddItem;