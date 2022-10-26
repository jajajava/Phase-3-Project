import React from "react";
import { useNavigate } from "react-router";

function Signin({setIsSignedIn}){

    const navigate = useNavigate()

    function handleSubmit(){
        //MAKE A CONDITIONAL THAT EITHER FINDS USER AND LOGS THEM IN OR DOESN'T AND SAYS 'TRY AGAIN' (NEEDS USER INSTANCE API)

        setIsSignedIn(true)
        navigate('/')
        
    }

    function takeMeHome(){

        navigate('/')
    }


    return(
        <div>
            <button onClick={takeMeHome}>Home</button>
            <form onSubmit={handleSubmit} id="signinform">
                <label htmlFor="username">Username:</label>
                <input></input>
                
                <label htmlFor="password">Password:</label>
                <input></input>
                
                <button>Sign in</button>
            </form>
            
        </div>
    )
}







export default Signin

