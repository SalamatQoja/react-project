// 2. Создайте компонент <EvenOdd>, который будет отображать число и информацию о том, является ли число четным или нечетным. Используйте условный рендеринг для отображения соответствующей информации в зависимости от числа.

import React from "react";
import ReactDOM from 'react-dom';


function EvenOdd({ number }) {
    const isEven = number % 2 === 0;

    return (
        <div>
            <h2>Chislo: {number}</h2>
            {isEven ? (
                <p>Eto chetnoe chislo</p>
            ) : (
                <p>Eto nechetnoe chislo</p>
            )}
        </div>
    )
};

export default EvenOdd;