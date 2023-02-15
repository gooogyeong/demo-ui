import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from '@demo-ui/vite-button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Your count is {count}
        <Button onClick={() => setCount(count + 1)}>Click ME!!!</Button>
      </header>
    </div>
  );
}

export default App;
