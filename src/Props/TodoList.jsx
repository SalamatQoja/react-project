// 3. Создайте компонент "Список дел", который принимает в качестве props массив задач и выводит их в виде списка.
import React from "react";

function TodoList({ tasks }) {
    const tasks = [
        { id: 1, text: 'Купить хлеб' },
        { id: 2, text: 'Сделать домашку' },
        { id: 3, text: 'Позвонить бабушке' }
    ];

    return (
        <ul>
            {tasks.map(tasks => (
                <li key={task.id}>{tasks.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;