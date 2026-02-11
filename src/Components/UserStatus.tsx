import { useState } from "react";

const UserStatus= () => {
const[isLoggedin ,setisLoggedin]=useState (false);
const[isAdmin,setisAdmin] = useState(false);

    return(
        <>
        <h2>
      {isLoggedin ? "Welcome user ":"Please Log in"}
      {isLoggedin && isAdmin && <p>Admin Panel Access</p>}

      </h2>
        <button className="bg-cyan-400" onClick={ () => { 
   setisLoggedin(!isLoggedin)
}}>
     {isLoggedin ? "Logout" : "Login"}
</button>
<button className= " flex items-center justify-center"onClick={() => setisAdmin(!isAdmin)}>
  Toggle Admin
</button>
     


        </>
    )
};
export default UserStatus;