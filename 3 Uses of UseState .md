# 🚀 React useState Hook - Complete Guide

> **Master the art of state management in React functional components**

---

## 🛠️ Common Use Cases

### 1. 📝 Managing User Input

**Description:** Track and update values from input fields (text, checkboxes, dropdowns)

```jsx
import React, { useState } from 'react';

function InputForm() {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>You typed: {input}</p>
    </div>
  );
}
```

**💡 Perfect for:** Form inputs, search bars, text areas

---

### 2. 🔄 Toggling UI Elements

**Description:** Control the visibility or state of UI elements (modals, dropdowns, toggles)

```jsx
import React, { useState } from 'react';

function ToggleButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This is visible!</p>}
    </div>
  );
}
```

**💡 Perfect for:** Show/hide modals, menus, conditional rendering

---

### 3. 🔢 Counters and Numeric Values

**Description:** Manage numeric data such as counters, scores, or quantities

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

**💡 Perfect for:** Counters, pagination, quantity selectors

---

### 4. 📋 Managing Form States

**Description:** Handle multiple form fields using a single state object

```jsx
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>Name: {formData.name}, Email: {formData.email}</p>
    </div>
  );
}
```

**💡 Perfect for:** Multi-field forms, user profiles, complex data structures

---

### 5. ⏳ Tracking Loading States

**Description:** Manage loading indicators during asynchronous operations (API calls)

```jsx
import React, { useState } from 'react';

function DataFetcher() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simulate API call
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <p>{isLoading ? 'Loading...' : 'Data Loaded!'}</p>
    </div>
  );
}
```

**💡 Perfect for:** Loading spinners, progress indicators, async operations

---

### 6. 📋 Managing Lists and Arrays

**Description:** Store and manipulate arrays such as to-do lists or dynamic data collections

```jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
