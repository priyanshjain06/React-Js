import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with value 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

` Syntax ` : 
count is the state variable.
setCount is the function to update the state.
useState(0) initializes the state with a value of 0.

`Characteristics`:
1) it is local to the componenet that uses it.
2) it is immutable. 

` Advance Use Case ` :
    setCounter(prevCounter => prevCounter + 1)
