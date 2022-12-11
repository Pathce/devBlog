import React from 'react';
import './App.css';

import Home from './components/home';

const App = (): JSX.Element => {
  const onClick = () => {
    console.log("Clicked!");
    document.getElementById("test")!.innerHTML = `${document.getElementById("test")!.innerHTML} Button Clicked!`;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <div id="test">Test</div>
        <button onClick={onClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
