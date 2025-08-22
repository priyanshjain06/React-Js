📚 Redux Notes

A powerful alternative to prop drilling, making state management a breeze!

🌟 Overview

Redux: Say goodbye to the headache of prop drilling!
Centralized Store: Your single source of truth for application state.

🔑 Key Terms

Action {event/object}
Represents an event or an event with additional info.
Example: Includes payload, object, or data.


Store {hold states}
The heart of Redux, containing:
State: The data you want to manipulate.
Reducers: Functions to update the state.


Reducer {functions}
Houses the logic for updating or changing data.

Slice {features}
Manages state logic for individual features.
Contains:
Initial state
Reducer function

State {data}
The actual data being managed.


🚀 Workflow

From user interaction to UI update, Redux streamlines the process!

Path:
UI trigger → Action dispatch → Store → Reducer → State update in store → UI update

Example:
Button click → handlefunc() → Store → increment() → num+1 in store → num+1 in UI

🛠️ Steps to Implement
    
Create Store (Place it in the redux folder)
Wrap App.js with Provider to connect Redux to your app
Create Slice (Store in the features folder)
Create Reducers in the slice
Register Reducers in the store

🧰 Useful Hooks

useSelector: Access state from the store.
dispatch: Send actions to the store.

