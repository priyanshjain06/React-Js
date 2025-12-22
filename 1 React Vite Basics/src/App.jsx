  import { useRef } from 'react';

  function App() {
    const inputRef = useRef();

    const focusInput = () => {
      inputRef.current.focus(); // Accesses the DOM node
    };

    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }