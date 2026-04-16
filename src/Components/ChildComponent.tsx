import React, {  useImperativeHandle, useRef } from "react";



const ChildComponent = React.forwardRef((props,ref) => {
    const inputRef = useRef(null);

 useImperativeHandle(ref,()=>({
    focusInput:()=>{
        if(inputRef.current){
        inputRef.current.focus();
        }
    }
 
}));
    return(
        <>
        
        <input ref={inputRef}></input>
        
        </>
    )
})
export default ChildComponent;