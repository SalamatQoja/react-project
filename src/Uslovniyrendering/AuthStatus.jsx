// 4. Компонент авторизации
// Создайте компонент AuthStatus, который принимает isLoggedIn через props. Если пользователь авторизован, отображайте "Вы вошли как [имя]", если нет — "Пожалуйста, войдите в систему".

function AuthStatus({isLoggedin, name}) {
    if(isLoggedin) {
        return (
            <div>
                <h1>Vi voshli kak, {name}</h1>
            </div>
        )
    }

    return <h1>Pojalyusta voydite v sistemu </h1>
}

export default AuthStatus;


