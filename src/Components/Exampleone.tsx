import { useReducer } from "react";

const initialState = {
    username:"",
    password:"",
    errors:{
        username:"",    
        password:""
    },
    isSubmitting:false
}
const reducer = (state:any, action:any)=> {{
    switch(action.type){
        case "SET_USERNAME":
            return{
                ...state,
                [action.field]:action.value
            }
            case "SET_PASSWORD":
                return{
                    ...state,
                    [action.field]:action.value
    }
    case"SET_ERRORS":        return{
            ...state,
            errors:action.errors
    }
        } 
    }  
}

const Exampleone = () =>{
       

    const [show, dispatch] = useReducer(reducer, initialState);

     

    return(
        <>
        <div>
            <p>Username: {show.username}</p>
            <p>Password: {show.password}</p>
            <p>Errors: {JSON.stringify(show.errors)}</p>
        </div>
        <button className="btn btn-primary flex bg-slate-600 justify-center items-center" onClick={()=>dispatch({type:"SET_USERNAME", field:"username", value:"JohnDoe"})}>Set Username</button>
        <button className="btn btn-primary flex bg-slate-600 justify-center items-center" onClick={()=>dispatch({type:"SET_PASSWORD", field:"password", value:"password123"})}>Set Password</button>
        <button className="btn btn-primary flex bg-slate-600 justify-center items-center"onClick={()=>dispatch({type:"SET_ERRORS", errors:{username:"Username is required", password:"Password must be at least 8 characters"}})}>Set Errors</button>
        <button className="btn btn-primary flex bg-green-600 justify-center items-center" onClick={()=>dispatch({type:"SUBMIT"})}>Submit</button>
        
        </>
    )
};
export default Exampleone;