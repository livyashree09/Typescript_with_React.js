import { useState } from "react";

const Passwordusage = () =>{
    const [show,setshow]=useState(false);
    

    return(
        <>
        <h2>
            {show ? "Password Visible" : "Password Hidden"}
        </h2>
           <input 
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />

        <button className="flex items-center justify-center"onClick={()=>setshow(prev => !prev)}> Password </button>
         {show ? "Password Visible" : "Password Hidden"}
        
        </ >
    )
};
export default Passwordusage;
