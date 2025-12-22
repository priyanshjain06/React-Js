# React useState Hook

---

## Example Code

```javascript
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
```

---

## Syntax

- **`count`** is the state variable.
- **`setCount`** is the function to update the state.
- **`useState(0)`** initializes the state with a value of 0.

---

## Characteristics

1. It is local to the component that uses it.
2. It is immutable.

---

## What does immutable mean in React state?

**Immutable means:** you should NOT directly change (mutate) the state value.

👉 Instead of modifying the existing state, you create a new copy and update that

### Simple Example (Wrong ❌)

```javascript
const [count, setCount] = useState(0);

count = count + 1; // ❌ direct mutation
```

- ❌ React doesn't know state changed
- ❌ This breaks React rules

### Correct Way (Right ✅)

```javascript
setCount(count + 1);
```

- ✔ New value
- ✔ React re-renders

---

## Arrays Example (Very Common Interview Trap ⚠️)

### ❌ Wrong (Mutating state)

```javascript
const [arr, setArr] = useState([1, 2, 3]);

arr.push(4);     // ❌ mutates original array
setArr(arr);
```

**React may not re-render ❌**

### ✅ Correct (Immutable update)

```javascript
setArr([...arr, 4]);
```

- ✔ New array
- ✔ New reference

---

## Objects Example

### ❌ Wrong

```javascript
user.name = "Priyansh";
setUser(user);
```

### ✅ Correct

```javascript
setUser({
  ...user,
  name: "Priyansh"
});
```

---

## Advance Use Case

```javascript
setCounter(prevCounter => prevCounter + 1)
``` 