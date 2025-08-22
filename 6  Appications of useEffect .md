# **Most Common Use Cases with Examples**

## **1. Fetching Data (API Calls)**

* **Use Case**: Fetch data from an API when the component mounts or when a dependency (e.g., a user ID) changes.
* **Example**:

```javascript
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Runs when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {user && (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      )}
    </div>
  );
};

export default UserProfile;
```

* **What's Happening?**:
   * useEffect fetches user data when the component mounts or when userId changes.
   * The dependency array [userId] ensures the effect only runs when userId changes.
* **Why Common?**: Data fetching is a core part of most React apps, especially for displaying dynamic content.

## **2. Setting Up Timers or Intervals**

* **Use Case**: Run recurring tasks, like updating a counter every second, and clean up the timer to avoid memory leaks.
* **Example**:

```javascript
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty array: runs once on mount

  return <div>Seconds: {seconds}</div>;
};

export default Timer;
```

* **What's Happening?**:
   * useEffect sets up an interval that increments seconds every second.
   * The cleanup function (clearInterval) runs when the component unmounts to stop the interval.
* **Why Common?**: Timers are used for countdowns, animations, or polling in real-time apps.

## **3. Subscribing to External Data (e.g., WebSocket)**

* **Use Case**: Set up subscriptions (e.g., WebSocket, event listeners) and clean them up when the component unmounts.
* **Example**:

```javascript
import React, { useEffect } from 'react';

const MessageListener = () => {
  useEffect(() => {
    const socket = new WebSocket('wss://example.com/messages');

    socket.onmessage = (event) => {
      console.log('New message:', event.data);
    };

    return () => {
      socket.close(); // Cleanup on unmount
    };
  }, []); // Runs once on mount

  return <div>Listening for messages...</div>;
};

export default MessageListener;
```