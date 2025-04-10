// Skrit/pokazat tekst
// Sozdayte komponent s tekstom i knopkoy. knoKpka doljna bit skrivat ili pokazovat tekst pri kajdom najatiy
import React, {useState} from "react";

function ShowHide2() {
    const [visible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!visible);
    }

    return (
        <div className="todo">
            <button onClick={handleClick} className="btn3">{visible ? "skrit" : "Pokazat"}</button>
            {visible && (
                <div className="todo2">Learn React</div>
            )}

        </div>
    )
}

export default ShowHide2;