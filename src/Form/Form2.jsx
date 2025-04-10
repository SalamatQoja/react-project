// Prostaya forma logina
// Sozdayte dva polya: login i parol i knopku "Voyti", posle vvoda dannix i najatya knopku otobrazite sobsheniye: "Vi voshi kak login"

import React, { useState } from "react";

function Account() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (login && password) {
            setMessage(`vi voshli kak logn ${login}`);
        } else {
            setMessage("pojalyusta vvedite login i parol");
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <input
                type="email"
                placeholder="Email"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                style={{ display: "block", marginBottom: "10px", padding: "8px" }}
            />
            <input
                type="password"
                placeholder="parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", marginBottom: "10px", padding: "8px" }}
            />
            <button onClick={handleLogin} style={{ padding: "8px 16px" }}>
                Войти
            </button>
            {message && <p style={{ marginTop: "20px" }}>{message}</p>}
        </div>
    );
}

export default Account;
