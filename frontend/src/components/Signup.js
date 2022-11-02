import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo";

function Signup(){

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    console.log(name, email, username, password)

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
        .then(res => res.json())
        .then(res => console.log(res)) //FIX THIS
        
        navigate('/Signin')
        
    }

    function takeMeHome(){
        navigate('/')
    }



    return(
        <div id="signUpAll">
            <div id="signUpHome" onClick={takeMeHome}><Logo/></div>
            <form id="signUpForm" onSubmit={handleSubmit} >
                <label id="signUpNameLabel" className="signUpLabel" htmlFor="signUpName">Name:</label>
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