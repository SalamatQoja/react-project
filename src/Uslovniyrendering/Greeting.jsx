// 1. Приветствие по времени суток
// Создайте компонент Greeting, который принимает через props имя пользователя и текущее время. В зависимости от времени суток (утро, день, вечер, ночь) рендерьте соответствующее приветствие: "Доброе утро, Алексей!", "Добрый вечер, Анна!" и т.д.

import React from "react";
import ReactDOM from "react-dom/client";

function Greeting({ name, time }) {
    let greeting;

    if (time >= 5 && time < 12) {
        greeting = "Доброе утро";
    } else if (time >= 12 && time < 18) {
        greeting = "Добрый день";
    } else if (time >= 18 && time < 22) {
        greeting = "Добрый вечер";
    } else {
        greeting = "Доброй ночи";
    }

    return <h1>{greeting}, {name}!</h1>;
}

function Important() {
    const currentHour = new Date().getHours(); 

    return (
        <div>
            <Greeting name="Алиса" time={currentHour} />
            <Greeting name="Пётр" time={currentHour} />
            <Greeting name="Алексей" time={currentHour} />
            <Greeting name="Вероника" time={currentHour} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Important />);