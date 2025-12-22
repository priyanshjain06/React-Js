# React useContext Hook

## What is `useContext`?

`useContext` lets a component directly read shared (global) data without passing props through every level.

**In simple words:**
It avoids prop drilling.

---

## 🚨 Problem without `useContext` (prop drilling)

```javascript
<App>
  <Navbar user={user}>
    <Profile user={user} />
  </Navbar>
</App>
```

Even if `Navbar` doesn't need `user`, it must pass it down 😤

---

## ✅ Solution: Context + `useContext`

```
App (Provider)
 └── Navbar
      └── Profile (Consumer)
```

`Profile` gets data directly, no middlemen.

---

## 🧠 How `useContext` works (3 steps)

### 1️⃣ Create Context

```javascript
import { createContext } from "react";

export const AuthContext = createContext(null);
```

### 2️⃣ Provide Context (usually at top level)

```javascript
function App() {
  const user = { name: "Priyansh" };

  return (
    <AuthContext.Provider value={user}>
      <Profile />
    </AuthContext.Provider>
  );
}
```

### 3️⃣ Consume using `useContext`

```javascript
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Profile() {
  const user = useContext(AuthContext);
  return <h1>Hello {user.name}</h1>;
}
```

✨ **Done. No props passed.**

---

## 📦 What can be stored in Context?

✔ User authentication  
✔ Theme (dark / light)  
✔ Language  
✔ Global settings

### ❌ NOT recommended for:

* Frequently changing values
* Large app-wide state (use Redux / Zustand)

---

## ⚠️ Important behavior (interview favorite)

### 🔁 Context causes re-render

When context value changes:
* ALL consuming components re-render
* Even if they use only part of the data.

---

## 🧠 Best Practice Pattern (very important)

```javascript
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### Usage:

```javascript
const { user, setUser } = useContext(AuthContext);
```

---

## ❌ Common mistakes

* Putting everything in one context
* Updating context too frequently
* Forgetting to wrap component with Provider

---

## 📊 `useContext` vs Redux

| Feature | `useContext` | Redux |
|---------|--------------|-------|
| **Setup** | Very easy | Boilerplate |
| **Performance** | Re-renders all consumers | Optimized updates |
| **DevTools** | ❌ No | ✅ Yes (time travel) |
| **Async logic** | ❌ Manual | ✅ Built-in patterns |
