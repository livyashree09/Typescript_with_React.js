import { useEffect, useState } from "react";

const CountuseEffect = () =>{
    const[count,setcount]=useState<number>(0);
    useEffect(() => {
  console.log("count changed:",count);
  if (count === 5){
    alert("Reached 5!")

  }

  return () => {
   console.log("cleanup count changed ",count);
  };
}, [count]);


    return(
        <>
       <h1>{count}</h1>
        <button onClick = {()=>setcount(count+1)}>Increment</button>
        
        </>
    )
};
export default CountuseEffect;