# 🚀 React Router Navigation Guide

` Refer to folder 10 React Router Dom `

## 🤔 Why Use `Link` Instead of `<a>` Tags?

**Link works without re-rendering while `<a>` tag works only when re-rendering!**

---

## 📋 Navigation Components

### ✅ Link Example

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

This works like a regular anchor tag (but doesn't reload the page).

---

### ✅ NavLink Example (adds active class)

```jsx
import { NavLink } from "react-router-dom";

<NavLink 
  to="/about" 
  className={({ isActive }) => 
    isActive ? "text-blue-500" : "text-gray-500"
  }
>
  About
</NavLink>
```

NavLink detects if the link is active based on the current route.  
You can conditionally style it using the `isActive` prop.

> **Note:** Always use `to` with `Link` and `NavLink`

---

## 🛠️ Extra Terms Used in React Router DOM

- **Route**
- **RouterProvider** 
- **createBrowserRouter**
- **createRoutesFromElements**

---

## 📚 Important

**Always refer to Documentation for more information in React Router DOM**

