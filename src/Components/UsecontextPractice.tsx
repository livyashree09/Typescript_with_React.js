import React,{createContext,useState,useEffect, useContext} from "react";

 const UserContext = createContext<any>(null);
const UsercontextPractice = () =>{

    

    //state
    const[user,setUser] = useState(null);
  //fetch user from a fake backend api
 // https://jsonplaceholder.typicode.com/posts//
  useEffect(()=>{
  const  fetchUser = ()=>{
    fetch("https://randomuser.me/api/")
    .then((response)=>response.json())
    .then ((result)=>setUser(result.results[0]))
    .catch((error)=>console.error("Error fetching user:", error))
  };
  fetchUser();
  },[]);
    return(
        <>
        <UserContext.Provider value={user}>
        <h1>User login</h1>
        <Page/>
        </UserContext.Provider>
        </>
    )
}
const Page=()=>{      

    const user = useContext(UserContext);
    if(user?.login?.username){
        return <p>you are logged in as {user?.login?.username}</p>
    }else{
        return <p>You are not logged in.</p>
    }
}
export default UsercontextPractice; 