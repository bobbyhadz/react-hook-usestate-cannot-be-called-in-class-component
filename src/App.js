import './App.css';

import {useState, useEffect} from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
