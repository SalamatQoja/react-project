// Napishite prilojenye dlya upravleniye zadachami (TodoList).Ispolzyute kontexst dlya xranenye spiska zadacha i funktsya dlya ix dobavlenye udalenye i otmetki kak vipolneniye.Komponentiy doljno poluchat dostup k etix funkstya cherez useContext 

import React, { createContext, useContext, useState } from "react";

const firstTask = createContext();

function TaskProvider(children) {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { text, done: false };
        setTasks([...tasks, newTask]);
    };


    const deleteTask = (index) => {
        const important = tasks.filter((_, i) => i !== index);
        setTasks(important);
    };

    const toggleTask = (index) => {
        const important = tasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        );
        setTasks(important);
    };

    return (
        <firstTask.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
            {children}
        </firstTask.Provider>
    );

}

function TodoApp() {
    return (
        <TaskProvider>
            <h1>Todo List</h1>
            <TaskInput />
            <TaskList />
        </TaskProvider>
    );
}

function TaskInput() {
    const { addTask } = useContext(firstTask);
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim() !== "") {
            addTask(input);
            setInput("");
        }
    };


    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Noviy zadaniye..." />
            <button onClick={handleAdd}>Add</button>
        </div>
    );

};

function TaskList() {
    const { tasks, deleteTask, toggleTask } = useContext(firstTask);

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.done ? "line-through" : "none" }}>
                    {task.text}
                    <button onClick={() => toggleTask(index)}>✔️</button>
                    <button onClick={() => deleteTask(index)}>❌</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoApp;



