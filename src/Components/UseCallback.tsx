import React, { useState, useCallback } from "react";

interface CounterProps {
  onClick: () => void;
  count: number;
}

const CounterOne = React.memo(({ onClick, count }: CounterProps) => {
  console.log("CounterOne Rendered");
  return (
    <div>
      <p>Count 1: {count}</p>
      <button onClick={onClick}>Increment 1</button>
    </div>
  );
});

const CounterTwo = React.memo(({ onClick, count }: CounterProps) => {
  console.log("CounterTwo Rendered");
  return (
    <div>
      <p>Count 2: {count}</p>
      <button onClick={onClick}>Increment 2</button>
    </div>
  );
});

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <CounterOne onClick={handleClick1} count={count1} />
      <CounterTwo onClick={handleClick2} count={count2} />
    </div>
  );
}

export default App;
