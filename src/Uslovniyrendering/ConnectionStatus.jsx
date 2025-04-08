// 6. Отображение статуса подключения
// Создайте компонент ConnectionStatus, который принимает isOnline через props. Если isOnline — true, отображайте "Вы онлайн" зелёным цветом, иначе — "Вы офлайн" серым.

function ConnectionStatus({ isOnline,name }) {
    return (
        <div style={{ backgroundColor: isOnline ? "green" : "gray" }}>
            <h1>{isOnline ? `${name} onlayn` : `${name} oflayn`}</h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <ConnectionStatus isOnline={true} name="Salamat" />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


