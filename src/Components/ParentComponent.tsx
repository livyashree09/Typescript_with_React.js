import React,{ useRef } from "react";
import ChildComponent from "./ChildComponent";



const ParentComponent = () => {
 const inputRef = useRef(null);
    const handleClick= () =>{
        
        alert("Clicked")
        inputRef.current.focusInput();
    }

    return(
        <>
        
        <ChildComponent ref={inputRef}/>
       <button onClick={handleClick}>FocusInput Element</button>
        </>
    )
}
export default ParentComponent;