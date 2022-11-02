import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"

function Signin({setIsSignedIn}){

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        //MAKE A CONDITIONAL THAT EITHER FINDS USER AND LOGS THEM IN OR DOESN'T AND SAYS 'TRY AGAIN' (NEEDS USER INSTANCE API)
        e.preventDefault()
        // fetch(`http://127.0.0.1:8000/users?username=${username}&password=${password}`)
        // .then(res => res.json())
        // .then(res => console.log(res))
        setIsSignedIn(true)
        navigate('/')
        
    }

    function handleSignUp(e){
        e.preventDefault()
        navigate('/Signup')
    }

    function takeMeHome(){

        navigate('/')
    }


    return(
        <div id="signInAll">
            <div id="signInHome" onClick={takeMeHome}><Logo/></div>
            <form id="signInForm" onSubmit={handleSubmit} >
                <label id="signInUsernameLabel" className="signInLabel" htmlFor="signInUsername">Username:</label>
                <input onChange={setUsername} id="signInUsername"></input>
                
                <label id="signInPasswordLabel" className="signInLabel" htmlFor="signInPassword">Password:</label>
                <input type="password" id="signInPassword"></input>
                
                <button id="signInButton">Sign in</button>
                <div id="signUpSpacer">
                <h3>Don't have an account? <a id="signUpLink" onClick={handleSignUp}>Make an account</a></h3>
                </div>
            </form>
            
        </div>
    )
}







export default Signin

