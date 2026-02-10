import { useState } from "react";


const useStateExample = () =>{

    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<number>(0);
    const handleNumberClick =()=>{
        setNumber(number + 5);
        if (number<5){
            setNumber(0);
        }
    }
    const incrementNumber =()=>{
        setNumber(number + 1);
    }
    const decrementNumber =()=>{
        setNumber(number - 1);
    }

    return(
        <>
        <div >
           <button className="bg-green-500 text-black flex items-center justify-center p-3 hover:bg-emerald-200" onClick ={()=> setName("John")}>Click me</button>
           <p>Current name: {name}</p>
        </div>
        <div>
            <button className="bg-yellow-500  text-white p-3 hover:bg-yellow-600" onClick={incrementNumber}>Increment</button>
            <button className="bg-yellow-500 text-white p-3 hover:bg-yellow-600" onClick={decrementNumber}>Decrement</button>

            <button className="bg-blue-400 text-white p-3 hover:bg-blue-600" onClick={handleNumberClick}>Click me to increment number</button>
            <p>Current number: {number}</p>
        </div>
        </>
    )

}

export default useStateExample;