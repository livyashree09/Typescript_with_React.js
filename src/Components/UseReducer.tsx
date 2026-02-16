import { useReducer } from "react";

const initialState = 0; 
const reducer = (state: number,action: any)=>{
switch (action) {
    case "increment":
        return state+1;
    case "decrement":
        return state-1;
    case "reset":
        return initialState;
    default:
        return state;
    }
}



export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <p>count: {count}</p>
     <button onClick={()=>dispatch("increment")}>Increment</button>
     <button onClick={()=>dispatch("decrement")}>Decrement</button>
     <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  );
}