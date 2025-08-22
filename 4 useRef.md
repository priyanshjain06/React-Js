# React useRef Hook

The `useRef` hook in React is used to:

1. **Access and interact with DOM elements directly**
2. **Store a mutable value that persists across re-renders without causing re-renders**

## 🔧 Syntax:

```js
const myRef = useRef(initialValue);
```

## 🔹 **1. Accessing DOM Elements**

You can use `useRef` to get a reference to a DOM element — similar to `document.getElementById()` in vanilla JS.

### ✅ Example:

```jsx
import { useRef } from 'react';

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Accesses the DOM node
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

* `inputRef.current` holds the actual DOM element.
* Clicking the button focuses the input.

## 🔹 **2. Storing Persistent Mutable Values**

Unlike `useState`, changing a value in `useRef` **doesn't re-render** the component.

### ✅ Example:

```jsx
function Timer() {
  const count = useRef(0);

  const increment = () => {
    count.current += 1;
    console.log(count.current); // Updated but no re-render
  };

  return <button onClick={increment}>Count</button>;
}
```

## 🔍 `useRef` vs `useState`

| Feature | `useRef` | `useState` |
|---------|----------|------------|
| Triggers re-render? | ❌ No | ✅ Yes |
| Stores value | ✅ Yes (in `.current`) | ✅ Yes |
| DOM access | ✅ Yes | ❌ No |