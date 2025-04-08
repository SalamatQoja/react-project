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

export default Message;