// 10. Чтение сообщения
// Создайте компонент Message, который принимает isRead и text. Если сообщение прочитано, отображайте его обычным шрифтом, если нет — жирным и с иконкой "новое сообщение".

import React from "react";

function Message({ isRead, text }) {
    return (
        <div style={{ marginBottom: '10px' }}>
            {!isRead && <span style={{ marginRight: '6px' }}>🆕</span>}
            <span style={{ fontWeight: isRead ? "normal" : "bold" }}>
                {text}
            </span>
        </div>
    );
}

function App() {
    return (
        <div>
            <Message isRead={false} text="Новое сообщение от Анны" />
            <Message isRead={true} text="Вчерашнее сообщение от Петра" />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
