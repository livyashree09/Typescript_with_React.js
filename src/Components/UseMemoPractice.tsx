import { useMemo, useState } from "react";



const UseMemoPractice = () => {
    const[number,setNumber] =useState(0);
    
    const handleInputChange = (e:any)=>{
        const inputvalue = parseInt(e.target.value);
        setNumber(inputvalue);

    }
    const computefactorial = ()=>{
        console.log("computing factorial");
        let result = 1;
        for(let i=1;i<=number;i++){
            result *= i;
        }
        return result;
    }
const memoizedfactorial = useMemo(()=>computefactorial(),[number]);
    return(
        <>
        <input type = "number" value={number} onChange = {handleInputChange}/>
        <p>Factorial of {number} is:{memoizedfactorial}</p>
         
        </>
    )
}

export default UseMemoPractice;