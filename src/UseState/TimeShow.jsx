import React, {useState} from "react";


function TimeShow() {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const times = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(times);
    }, []);

    return (
        <div className="clock">
            <h1>The time is</h1>
            <div className="clock-time">{time.toLocaleTimeString()}</div>
        </div>
    );
}

export default TimeShow;