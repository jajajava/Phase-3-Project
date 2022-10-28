import React from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"

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
        <div id="signInAll">
            <div id="signInHome" onClick={takeMeHome}><Logo/></div>
            <form id="signInForm" onSubmit={handleSubmit} >
                <label id="signInUsernameLabel" className="signInLabel" htmlFor="signInUsername">Username:</label>
                <input id="signInUsername"></input>
                
                <label id="signInPasswordLabel" className="signInLabel" htmlFor="signInPassword">Password:</label>
                <input type="password" id="signInPassword"></input>
                
                <button id="signInButton">Sign in</button>
            </form>
            
        </div>
    )
}







export default Signin

