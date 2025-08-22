# useCallback Example - Preventing Unnecessary Re-renders

Sure! Here's a clear example showing **how** `useCallback` helps prevent unnecessary re-renders — especially when passing functions to child components.

## 🧪 Scenario: Counter with Child Button

We'll create:
* A **parent component** (`App`)
* A **child component** (`Button`)
* The child receives a **function prop** from the parent

## 🔁 Without `useCallback` (Function recreated every render)

```jsx
import React, { useState } from "react";

function Button({ onClick, label }) {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} label="Increment" />
    </div>
  );
}

export default App;
```

💥 Every time the parent (`App`) re-renders, the `increment` function is **recreated**, causing the child `Button` to **re-render** even if it's unnecessary.

## ✅ With `useCallback` (Function is memoized)

```jsx
import React, { useState, useCallback } from "react";

function Button({ onClick, label }) {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Function is created only once

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} label="Increment" />
    </div>
  );
}

export default App;
```

## 🧠 Now:
* `increment` has a **stable reference**
* `Button` only re-renders when truly needed
* ✅ **Performance improved**, especially if there are multiple children

## 🔍 Want to go deeper?

Wrap the `Button` component with `React.memo()` for full optimization:

```js
const Button = React.memo(function Button({ onClick, label }) {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});
```

This way, React **skips re-rendering** `Button` unless props (`onClick`, `label`) actually change.

Let me know if you'd like to see this with multiple buttons, inputs, or a more complex example!