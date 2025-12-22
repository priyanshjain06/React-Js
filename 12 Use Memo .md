# React useMemo Hook

## What is `useMemo`?

`useMemo` remembers (memoizes) a calculated value so React doesn't recompute it on every re-render.

It is used to avoid expensive calculations again and again.

---

## 🧠 Syntax (simple)

```javascript
const value = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

* Function runs only when `data` changes
* Otherwise, React reuses the old value

---

## 🚨 Problem without `useMemo`

```javascript
function App() {
  const [count, setCount] = useState(0);

  const result = heavyCalculation(); // runs EVERY render ❌

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

👉 **Clicking the button:**
* `count` changes
* Component re-renders
* `heavyCalculation()` runs again (even though result didn't change)

---

## ✅ Solution with `useMemo`

```javascript
const result = useMemo(() => {
  return heavyCalculation();
}, []); // run once
```

**Now:**
* Component re-renders
* Calculation does NOT re-run
* UI stays fast ⚡

---

## 🧩 Real-life use cases

### 1️⃣ Filtering large lists

```javascript
const filteredUsers = useMemo(() => {
  return users.filter(u => u.name.includes(search));
}, [users, search]);
```

### 2️⃣ Derived data

```javascript
const totalPrice = useMemo(() => {
  return cart.reduce((sum, item) => sum + item.price, 0);
}, [cart]);
```

### 3️⃣ Prevent unnecessary re-renders (with `React.memo`)

If you pass a calculated value to a memoized child:
* `useMemo` keeps the reference stable

---

## 🔑 Key mental model (remember this)

`useMemo` saves calculation cost, not re-render cost.

**The component still re-renders.**

---

## 🆚 `useMemo` vs `useCallback` (1 line)

* `useMemo` → memoizes **value**
* `useCallback` → memoizes **function**