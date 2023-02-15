import React, { useState } from 'react';
import './App.css';
import { Button } from '@demo-ui/vite-button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div>Your count is {count}</div>
        <Button onClick={() => setCount(count + 1)}>Click ME!!!</Button>
      </header>
    </div>
  );
}

export default App;
