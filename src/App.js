import React from 'react';
import AddItem from './UseState/AddItem';
import TimeShow from './UseState/TimeShow';
import ChangeItem from './useEffect/AddWord';
import ChangeColor from './useEffect/ChangeColor';
import CounterNumber from './useEffect/CountNumber';
import Position from './useEffect/Position';
import ChangeTitle from './useRef/ChangeTitle';
import ShowHide from './useRef/ShowHide';

function App() {
  return (
    <div>
      <AddItem/>
      <TimeShow/>
      <ChangeItem/>
      <ChangeItem/>
      <ChangeColor/>
      <CounterNumber/>
      <Position/>
      <ChangeTitle/>
      <ShowHide/>
      
    

    </div>
  );
}

export default App;
