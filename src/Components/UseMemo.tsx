import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const UseMemo = (num: number): number => {
    console.log("Calculating factorial...");
    if (num <= 1) return 1;
    return num * UseMemo(num - 1);
  };

  const memoizedFactorial = useMemo(() => {
    return UseMemo(number);
  }, [number]);

  return (
    <>
      <h2>Factorial: {memoizedFactorial}</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
    </>
  );
}
export default App;