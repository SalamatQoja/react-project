//  качестве props дв2. Создайте компонент "Калькулятор", который принимает ва числа и выводит их сумму.
import React from "react";

function Calculyator({ num1, num2 }) {
    const sum = num1 + num2;
    return (
        <div>
            <h2>Calkulyator</h2>
            <p>Chislo 1: {num1}</p>
            <p>Chislo 2: {num2}</p>
            <p>Summa : {sum}</p>
        </div>
    )
}

export default Calculyator;