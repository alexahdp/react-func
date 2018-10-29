import React, { useState } from 'react';

// useState

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          {counter}
        </h3>
        <button
          onClick={() => setCounter(counter => counter + 1)}
        >
          Update counter
        </button>
      </header>
    </div>
  );
}

export default App;
