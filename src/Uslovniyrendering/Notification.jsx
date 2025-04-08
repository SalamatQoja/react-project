// 3. Список уведомлений
// Создайте компонент Notification, который принимает массив уведомлений через props. Если уведомлений нет, показывайте текст "Нет новых уведомлений".

const notificationList = [
    { id: 1, type: "info", message: "Dobro pojalovat" },
    { id: 2, type: "warning", message: "Parol ckoro istekaet" },
    { id: 3, type: "error", message: "Oshibke pri zagruzka" },
    { id: 4, type: "succes", message: "Uspeshno rabotaet" }
];

function Notification({ notificationList }) {
    if(!notificationList || notificationList.length === 0){
       return <h1>Net novix uvedomleniye</h1>
    }

    return (
        <div>
            <h1>Uvedomleniye:</h1>
            {notificationList.map((note) => (
                <p key={note.id}>
                    <strong>{note.type.toUppercase()}:</strong>{note.message}
                </p>
            ))}
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Notification notificationList={notificationList}/>);


