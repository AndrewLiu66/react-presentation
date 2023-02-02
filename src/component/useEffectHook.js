import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [countNumber, setCountMethod] = useState(0);

// render when mounted + when count changes
  useEffect(() => {
    // Fetch data from an API
    console.log(123)

  });

  return (
    <div>
      <p>You clicked {countNumber} times</p>
      <button onClick={() => setCountMethod(countNumber + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseEffectHook;
