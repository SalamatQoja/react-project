// 2. Показать VIP-пользователя
// Создайте компонент UserCard, который принимает isVIP и username через props. Если isVIP — true, то отображайте имя с золотой рамкой и подписью "VIP-пользователь".

function UserCard({ username, isVIP }) {
    const cardStyle = {
        border: isVIP ? "2px solid gold" : "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: isVIP ? "#fffbea" : "#f9f9f9"
    };

    return (
        <div style={cardStyle}>
            <h2>{username}</h2>
            {isVIP && <p style={{ color: "gold", fontWeight: "bold" }}>VIP-пользователь</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <UserCard username="Алиса" isVIP={true} />
            <UserCard username="Пётр" isVIP={false} />
            <UserCard username="Виктор" isVIP={true} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);