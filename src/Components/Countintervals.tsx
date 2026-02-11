import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    console.log("Timer started");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Timer stopped");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2>Timer: {seconds}</h2>
    </>
  );
};

export default Timer;
