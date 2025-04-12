// Otpravka formiy s predvaritelniy validatsyi
// Sozday formu s polyami 'IMya' i ' Email'.Pri najati otpravit , esli polya pustiy pokazovat oshibku ispolzvyu useState dlya upravleniye znacheniyami i oshibka 

import React, { useState } from "react";

function Account() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // otmenyaem peresozdanie stranitsy

        if (name.trim() && email.trim()) {
            setError(""); // net oshibki
            alert(`Imya: ${name}, Email: ${email}`); // ili drugoe deystvie
        } else {
            setError("Pozhaluysta, zapolnite oba polya");
        }
    };

    return (
        <div>
            <h1 style={{ color: "blue" }}>Write Account</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Imya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button
                    type="submit"
                    style={{ padding: "16px", borderRadius: "8px", marginTop: "10px" }}
                >
                    Click me
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
}

export default Account;
