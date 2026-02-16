import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const withoutuseMemo = (num: number): number => {
    console.log("Calculating factorial...");
    if (num <= 1) return 1;
    return num * withoutuseMemo(num - 1);
  };

  return (
    <>
      <h2>Factorial: {withoutuseMemo(number)}</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
    </>
  );
}

export default App;
