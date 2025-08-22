# What is `thunk` in React/Redux?

**Thunk** is middleware used in Redux to handle **asynchronous logic** like API calls.

## ✅ Why use Thunk?

Redux actions are usually **synchronous**, but real-world apps need to deal with async operations like:

* Fetching data from a server
* Writing to a database
* Waiting for a timeout

This is where **Redux Thunk** helps.

## ✅ What is a Thunk?

A **thunk** is a function that returns another function.

```js
// Thunk example using Redux Toolkit
export const fetchUser = createAsyncThunk('user/fetch', async (userId) => {
  const response = await fetch(`/api/user/${userId}`);
  return await response.json();
});
```

* `createAsyncThunk` is from Redux Toolkit.
* It handles the lifecycle of the async call: `pending`, `fulfilled`, `rejected`.

## 🔹 What is `builder` in Redux Toolkit?

`builder` is used inside a `createSlice()` to **handle actions**, especially those created by `createAsyncThunk`.

## ✅ Why use Builder?

To add extra reducers for `pending`, `fulfilled`, and `rejected` cases automatically created by a thunk.

## ✅ Syntax Example:

```js
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});
```

## 🧠 Summary

| Term | Role |
|------|------|
| `Thunk` | Handles **async actions** in Redux (e.g., API calls). |
| `Builder` | Used inside `createSlice` to **respond to thunk lifecycle actions**. |