# React Component Files

---

## When does a file become a component file?

When it exports a component (function returning JSX):

```javascript
// Header.jsx
export default function Header() {
  return <h1>Header</h1>;
}
```

- ✔ This file contains a component
- ✔ File name doesn't matter, function does

# ⚛️ What is a Prop in React?

## 📌 Exact Meaning (No Fluff)

> **A prop (short for property) is a read-only value passed from a parent component to a child component.**

---

## 1️⃣ What Props Actually Are (Technically)

Props are just a **JavaScript object** passed as an argument to a component function.

```jsx
function Child(props) {
  console.log(props); 
  // { name: "Priyansh", age: 22 }
}
```

---

## 2️⃣ How Props Are Passed

### Parent Component

```jsx
function Parent() {
  return <Child name="Priyansh" age={22} />;
}
```

### Child Component

```jsx
function Child({ name, age }) {
  return <h1>{name} — {age}</h1>;
}
```

> `name` and `age` are **props**.

---

## 🔄 Props vs State (Very Important)

| Props | State |
|-------|-------|
| Passed from parent | Owned by component |
| **Read-only** | **Mutable** via setters |
| External data | Internal data |
| Causes re-render when changed | Causes re-render when changed |

### Key Difference:
- ✅ **Props**: Data flows DOWN (parent → child)
- ✅ **State**: Data lives INSIDE the component

---

## 📤 Passing Functions as Props

Used for **child → parent communication**.

### Parent Component

```jsx
function Parent() {
  const handleClick = () => console.log("clicked");
  return <Child onClick={handleClick} />;
}
```

### Child Component

```jsx
function Child({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}
```

### What Happens:
1. Parent creates function
2. Passes function to child via props
3. Child calls the function
4. Parent's function executes

---

## 🎯 Quick Reference

### ✅ Props ARE:
- Read-only
- Passed from parent
- JavaScript objects
- Can be any data type (string, number, object, function, etc.)

### ❌ Props are NOT:
- Mutable inside child
- Owned by the child
- State

---

## 💡 Common Props Patterns

### 1. String Props
```jsx
<Child title="Hello" />
```

### 2. Number Props
```jsx
<Child count={5} />
```

### 3. Boolean Props
```jsx
<Child isActive={true} />
// Shorthand:
<Child isActive />
```

### 4. Object Props
```jsx
<Child user={{ name: "John", age: 25 }} />
```

### 5. Array Props
```jsx
<Child items={[1, 2, 3]} />
```

### 6. Function Props
```jsx
<Child onSubmit={handleSubmit} />
```

### 7. JSX Props (children)
```jsx
<Child>
  <p>This is children prop</p>
</Child>
```

---

## 🚀 Remember This

```jsx
// Parent defines and passes
function Parent() {
  return <Child name="React" />;
}

// Child receives and uses
function Child(props) {
  return <h1>{props.name}</h1>;
}

// Or with destructuring (preferred)
function Child({ name }) {
  return <h1>{name}</h1>;
}
```

> 💡 **Golden Rule**: Props flow DOWN, events flow UP!