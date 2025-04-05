// 1. Создайте компонент "Приветствие", который принимает в качестве props имя пользователя и выводит сообщение вида "Привет, [имя пользователя]!".

import React from "react";

function Privetstviye({ name }) {
    return <h2>Privet, {name}</h2>
}

export default Privetstviye;