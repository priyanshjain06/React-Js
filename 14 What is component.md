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