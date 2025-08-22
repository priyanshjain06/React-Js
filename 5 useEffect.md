# React useEffect Hook

```js
useEffect(() => {
  // Side effect logic
  return () => {
    // Optional cleanup logic
  };
}, [dependencies]);
```

* **Callback Function**: Runs the side effect after the component renders.
* **Dependency Array**: Controls when the effect runs. If empty ([]), it runs once on mount. If omitted, it runs on every render. If it contains variables, it runs when those variables change.
* **Cleanup Function** (optional): Returned from the callback to clean up resources (e.g., timers, subscriptions) when the component unmounts or before the effect runs again.

**Cleanup**: 
* The cleanup function runs before the next effect (on dependency change) or when the component unmounts.

## **Empty Array ([])**
* **Behavior**: Runs once on mount; cleanup runs on unmount.
* **Use Case**: One-time setup (e.g., fetching initial data, setting up subscriptions).
* **Example**: Fetch users on mount: `useEffect(() => { fetchUsers(); }, []);`.
  
## **Populated Array ([var1, var2])**
* **Behavior**: Runs on mount and when listed dependencies change; cleanup runs before re-runs and on unmount.
* **Use Case**: Dynamic effects (e.g., fetching data based on a prop like userId).
* **Example**: Fetch user when userId changes: `useEffect(() => { fetchUser(userId); }, [userId]);`.

## **No Dependency Array**
* **Behavior**: Runs after every render; cleanup runs before every re-render and on unmount.
* **Use Case**: Rare, for effects needing to run on every update (e.g., logging state changes).
* **Example**: Log count: `useEffect(() => { console.log(count); });`.

## **Objects/Arrays as Dependencies**
* **Behavior**: Runs when the object/array reference changes, even if content is the same.
* **Use Case**: Effects tied to complex props/state; requires caution to avoid unnecessary runs.
* **Example**: Update UI when settings object changes: `useEffect(() => { setMessage(settings.theme); }, [settings]);`. Use useMemo to optimize.

## **Missing Dependencies (Bug)**
* **Behavior**: Omitting used variables causes stale data or missed updates.
* **Use Case**: Common mistake; fix by including all used variables or using a linter.
* **Example**: Bug: `useEffect(() => { fetchUser(userId); }, []);` misses userId updates.