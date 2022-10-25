import React from "react";
import { useNavigate } from "react-router";

function Login({setIsLoggedIn}){

    const navigate = useNavigate()

    function handleSubmit(){
        //MAKE A CONDITIONAL THAT EITHER FINDS USER AND LOGS THEM IN OR DOESN'T AND SAYS 'TRY AGAIN' (NEEDS USER INSTANCE API)
        setIsLoggedIn(true)
        navigate('/')
        
    }

    function takeMeHome(){
        navigate('/')
    }


    return(
        <div>
            <button onClick={takeMeHome}>Home</button>
            <form onSubmit={handleSubmit} id="loginform">
                <label htmlFor="username">Username:</label>
                <input></input>
                
                <label htmlFor="password">Password:</label>
                <input></input>
                
                <button>Submit</button>
            </form>
            
        </div>
    )
}







export default Login

