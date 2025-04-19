import React, {useRef} from "react";

function ChangeTitle() {
    const title1 = useRef(null);
    const title2 = useRef(null);
    const title3 = useRef(null);

    const handleClick = () => {
        title1.current.textContent = "Delivered";
        title2.current.textContent = "Delivered";
        title3.current.textContent = "Delivered";
    };

    return (
        <div>
            <h2 ref={title1}>In progress</h2>
            <h2 ref={title2}>In progress</h2>
            <h2 ref={title3}>In progress</h2>
            <button onClick={handleClick}>Special button</button>
        </div>
    );
}

export default ChangeTitle;