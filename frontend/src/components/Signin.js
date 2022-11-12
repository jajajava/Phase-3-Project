import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"

function Signin({setIsSignedIn}){

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [pleaseTryAgain, setPleaseTryAgain] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        if (username != '' && password != ''){
        fetch("http://127.0.0.1:8000/auth/login/", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          })
            .then((res) => {
                if (res.ok){
                    res.json().then((data) => {
                    localStorage.setItem("jwt", data.token);
                    setIsSignedIn(true);
                    navigate('/')
                      })
                } else {
                    localStorage.setItem("jwt", null)
                    alert("please try again!")
                }
            })
        } else {
            alert("please try again!")
        }
    }

    function handleSignUp(e){
        e.preventDefault()
        navigate('/Signup')
    }

    return(
        <div id="signInAll">
            <div id="signInHome"><Logo/></div>
            <form id="signInForm" onSubmit={handleSubmit} >
                <label id="signInUsernameLabel" className="signInLabel" htmlFor="signInUsername">Username:</label>
                <input onChange={(e) => setUsername(e.target.value)} id="signInUsername"></input>
                
                <label id="signInPasswordLabel" className="signInLabel" htmlFor="signInPassword">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="signInPassword"></input>
                
                <button id="signInButton">Sign in</button>
                <div id="signUpSpacer">
                <h3>Don't have an account? <a id="signUpLink" onClick={handleSignUp}>Make an account</a></h3>
                </div>
            </form>
            
        </div>
    )
}







export default Signin

