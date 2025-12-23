# React useId Hook

## 🤔 What is `useId`?

`useId` generates a unique, stable ID that works correctly with SSR (server-side rendering) and hydration.

**Main purpose:** accessibility + uniqueness

---

## 🧠 Basic syntax

```javascript
import { useId } from "react";

function Form() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} />
    </>
  );
}
```

---

## ✅ Why `useId` exists (real problem)

### ❌ Bad approach

```javascript
const id = Math.random();
```

**Problems:**
* Changes every render
* Breaks SSR
* Causes hydration mismatch

### ❌ Also bad

```javascript
const id = "email-input";
```

**Problems:**
* Duplicate IDs if component reused
* Invalid HTML
* Accessibility issues

---

## ✅ Why `useId` is good

* Unique across the app
* Same ID on server & client
* Stable between re-renders
* Safe for accessibility

---

## 🧩 Real-life use cases

### 1️⃣ Label + input (MOST COMMON)

```javascript
<label htmlFor={id}>Password</label>
<input id={id} />
```

### 2️⃣ Multiple related IDs

```javascript
const id = useId();

<input id={`${id}-email`} />
<input id={`${id}-password`} />
```

### 3️⃣ Component reused multiple times

Each instance gets a different ID automatically.

---

## ⚠️ Important rules (interview favorite)

### ❌ Do NOT use `useId` for:

* `key` in lists
* Database IDs
* Random identifiers