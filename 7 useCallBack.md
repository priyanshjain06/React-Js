# React useCallback Hook

In React:
* Functions are **re-created** every time a component re-renders.
* This can cause problems, especially when:
   * Passing functions as props to child components
   * Using functions in dependency arrays (e.g., `useEffect`, `useMemo`)
   * Optimizing performance

---

## 🔧 Syntax

```javascript
const memoizedCallback = useCallback(() => {
  // Your function code
}, [dependencies]);
```

---

## ✅ Basic Example

```javascript
import { useCallback, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <button onClick={increment}>Count: {count}</button>;
}
```

* `increment` is memoized.
* It will **not be recreated** on every render unless dependencies change (in this case, there are none).

---

## 🧠 Why Use It?

### 1. **Prevent unnecessary re-renders** of child components

```javascript
<Child onClick={handleClick} />
```

If `handleClick` is not memoized, `Child` may re-render even when it doesn't need to.

### 2. **Stable function references** in dependency arrays

```javascript
useEffect(() => {
  someFunction();
}, [someFunction]);
```
If `someFunction` is not memoized, this effect might run more often than necessary.

---
### 3. **When useCallBack function is dependency of useEffect**
 Refer to folder 5 password generator !! 
  

---

## ⚠️ When NOT to use it?

Don't use `useCallback` **unless** you're optimizing a specific performance issue. It adds overhead and doesn't always make things faster.

---

## When `useCallback` can make things SLOW

### 1️⃣ When the function is cheap and not reused

```javascript
const handleClick = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

❌ **Problem:**
* Function creation is already cheap
* `useCallback` adds memory usage
* React must compare dependency array every render

👉 **Net result:** more work than benefit

### 2️⃣ When dependencies change frequently

```javascript
useCallback(() => {
  doSomething(a, b, c);
}, [a, b, c]);
```

If `a, b, c` change often:
* New function is created anyway
* `useCallback` becomes useless
* You still pay its overhead

### 3️⃣ When NOT passing function to child components

```javascript
const handleSubmit = useCallback(() => {
  console.log("submit");
}, []);
```

If:
* Function is used only inside the same component
* Not a dependency of `useEffect`
* Not passed to memoized child

👉 `useCallback` does nothing useful

---

## 📌 Comparison: `useCallback` vs `useMemo`

| Hook | Memoizes… | Use for… |
|------|-----------|----------|
| `useCallback` | A **function** | Event handlers, callbacks |
| `useMemo` | A **value/result** | Expensive computations |

---

## 🧠 Summary

| Feature | Description |
|---------|-------------|
| Purpose | Memoizes a function to avoid re-creating it |
| When it runs | Only when its dependencies change |
| Helps with | Performance, stable props, effect dependencies |
| Common use cases | `onClick`, `useEffect`, child props optimization |