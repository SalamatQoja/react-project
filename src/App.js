import React from 'react';
import EvenOdd from './Uslovniyrendering/EvenOdd';
import ShowHide from './Uslovniyrendering/ShowHide';
import Privetstviye from './Props/Privetstiye';
import Calculyator from './Props/Calkulyator';
import TodoList from './Props/TodoList';

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
      <TodoList tasks={tasks}/>
    </div>
  );
}

export default App;
