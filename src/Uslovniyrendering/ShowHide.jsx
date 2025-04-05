// 1. Создайте компонент <ShowHide>, который будет содержать кнопку "Показать" и текстовый блок. При нажатии на кнопку, текстовый блок должен появиться/скрыться.

import { useState } from "react";

export default function ShowHide() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            {}
            <button
                onClick={toggleVisibility}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                {isVisible ? "Скрыть" : "Показать"}
            </button>

            {}
            {isVisible && (
                <div className="p-4 border rounded-lg shadow-md bg-gray-100">
                    Это текстовый блок.
                </div>
            )}
        </div>
    );
}




