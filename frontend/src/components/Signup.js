import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo";

function Signup({setIsSignedIn, setCurrentUser}){

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorsList, setErrorsList] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://127.0.0.1:8000/users', {
            method: "POST",
            headers: {
                'content-type': "application/json"
                },
            body: JSON.stringify({
                name: name,
                email: email,
                username: username,
                password: password
            })
        })
        .then(res => {
            if (res.ok){
                res.json().then((data) => {
                    localStorage.setItem("jwt", data.token);
                    setIsSignedIn(true);
                    setCurrentUser(data.user);
                    navigate('/')
                })
            } 
            else {
                res.json().then(res => setErrorsList(res.errors))
            }
        })

    }

    return(
        <div id="signUpAll">
            <div id="signUpHome"><Logo/></div>
            
            <form id="signUpForm" onSubmit={handleSubmit} >
            {errorsList !== [] ? <div id="signUpErrors">{errorsList.map(each => <h2><span style={{color: "red"}}>{each}</span></h2>)}</div>: null }
                <label id="signUpNameLabel" className="signUpLabel" htmlFor="signUpName">Name (will be public):</label>
                <input onChange={(e)=> setName(e.target.value)} id="signUpName"></input>

                <label id="signUpEmailLabel" className="signUpLabel" htmlFor="signUpEmail">Email (for buyers to contact you):</label>
                <input onChange={(e)=> setEmail(e.target.value)} id="signUpEmail"></input>

                <label id="signUpUsernameLabel" className="signUpLabel" htmlFor="signUpUsername">Username:</label>
                <input onChange={(e)=> setUsername(e.target.value)} id="signUpUsername"></input>

                <label id="signUpPasswordLabel" className="signUpLabel" htmlFor="signUpPassword">Password:</label>
                <input onChange={(e)=> setPassword(e.target.value)} id="signUpPassword"></input>
                
                <button id="signInButton">Sign up</button>

                
            </form>
            
        </div>
    )
}





export default Signup