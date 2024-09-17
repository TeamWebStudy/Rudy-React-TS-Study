import './App.css';
import React, { useState, useEffect } from 'react';
//import {useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1)
  }

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return (
    <div>
      <p>Count : <span>{count}</span></p>
      {count >= 10 && <p>Count is high!</p>}
      <button onClick = {handleClick}>
        Increment
      </button>
    </div>
  );
}


export default App;
