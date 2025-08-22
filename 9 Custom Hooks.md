`see the folder 6 Currency Generator `

# React Custom Hooks

## ✅ Why use Custom Hooks?
* Avoid duplicate code
* Separate logic from UI
* Make components cleaner and easier to test

## 🔨 Example 1: `useWindowWidth` — Track window width

### 🧩 Step 1: Create the custom hook

```js
// useWindowWidth.js
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
```

### 🧪 Step 2: Use it in a component

```js
import React from "react";
import useWindowWidth from "./useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div>
      <h1>Window width: {width}px</h1>
    </div>
  );
}
```

✅ Now this logic is reusable across multiple components.