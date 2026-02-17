import { useReducer } from "react";

const initialState = 0;

const reducer =  (state:any, action:any) => {
    switch(action){
        case "increment":
            return state+5;
        case "decrement":
            return state-5;
        case "reset":
            return 0;
        default:return state ;}
    }     

const Exampletwo = () => {

    const[count,dispatch]=useReducer(reducer, initialState);
    return(
        <>
        <div>Count: {count}</div>
        <button onClick = {()=>dispatch("increment")}>Increment</ button>       
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
        </>
    )
};
export default Exampletwo;