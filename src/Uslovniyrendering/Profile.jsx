// 7. Компонент профиля с фото
// Создайте компонент Profile, который принимает props: name, avatar, hasPhoto. Если hasPhoto — false, вместо аватара показывайте заглушку (например, иконку).

import React from "react";
import ReactDOM from "react-dom/client";
import defaultAvatar from "./img/default-avatar.png"; // Заглушка
import realAvatar from "./img/user-avatar.png"; // Настоящее фото

function Profile({ name, avatar, hasPhoto }) {
    return (
        <div>
            <h2>{name}</h2>
            <img
                src={hasPhoto ? avatar : defaultAvatar}
                alt="User Avatar"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
        </div>
    );
}

function App() {
    return (
        <div>
            <Profile name="Salamat" avatar={realAvatar} hasPhoto={false} />
            <Profile name="Aigerim" avatar={realAvatar} hasPhoto={true} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
