import { useState, useCallback } from "react";



const UseCallbackPractice = () =>{
 
    const[count,setcount]=useState(0);
    const increment = useCallback(()=>{
        console.log("Increment function called");
        setcount(prev=>prev+1);
    },[]   )

console.log("component rerendered");

    return(
        <>
        <p>Count:{count}</p>
       <button onClick={increment}>Increment</button>
       
        </>
    )
}
export default UseCallbackPractice; 