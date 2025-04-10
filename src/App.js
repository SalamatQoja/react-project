import React from 'react';
import EvenOdd from './Uslovniyrendering/EvenOdd';
import ShowHide from './Uslovniyrendering/ShowHide';
import Privetstviye from './Props/Privetstiye';
import Calculyator from './Props/Calkulyator';
import TodoList from './Props/TodoList';
import Increment from './Uslovniyrendering/Events';

function App() {
  return (
    <div>
      <ShowHide />
      <h1>Proverka chislo</h1>
      <EvenOdd number={7} />
      <EvenOdd number={10} />
      <Privetstviye name="Tom" />
      <Privetstviye name="Chris" />
      <Calculyator num1={10} num2={4} />
      <Calculyator num1={22} num2={2} />
      <TodoList tasks={tasks} />
      <ProductCard title="Samsung" price={300000} discount={50000} />
      <ProductCard title="Artel" price={500000} discount={0} />
      <ProductCard title="Shivaki" price={600000} discount={200000} />
      <AuthStatus isLoggedin={true} name="Salamat" />
      <ConnectionStatus isOnline={true} name="Salamat" />
      <Profile name="Salamat" avatar={realAvatar} hasPhoto={false} />
      <Profile name="Aigerim" avatar={realAvatar} hasPhoto={true} />
      <Message isRead={false} text="Новое сообщение от Анны" />
      <Increment/>
    </div>
  );
}

export default App;
