import React, { useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom"

function Settings({currentUsername}){

    const navigate = useNavigate()
    const [usernameChange, setUsernameChange] = useState('')
    const [passwordChange, setPasswordChange] = useState('')
    const [emailChange, setEmailChange] = useState('')
    const [bioChange, setBioChange] = useState('')

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    function handleUsernameChange(e){
        setUsernameChange(e.target.value)
    }

    function handlePasswordChange(e){
        setPasswordChange(e.target.value)
    }

    function handleEmailChange(e){
        setEmailChange(e.target.value)
    }

    function handleBioChange(e){
        setBioChange(e.target.value)
    }

    function updateAccount(e){
        e.preventDefault()

        fetch(`http://127.0.0.1:8000/users/${currentUsername}`, { //Fix later, this state is in App.js
            method: "PATCH",
            headers: {
                'content-type': "application/json"
                },
            body: JSON.stringify({
            username: usernameChange,
            password: passwordChange,
            email: emailChange,
            bio: bioChange
            })
        })
    alert('Your account information was updated!')
    }


    console.log(usernameChange, passwordChange, emailChange, bioChange)

    return(
        <div id="settingsAll">
            <div id="settingsHome" onClick={takeMeHome}><Logo/></div>

            <form id="settingsForm" onSubmit={updateAccount}>
            <label className="settingsLabels" htmlFor="settingsUsername">Update username:</label>
            <input id="settingsUsername" onChange={handleUsernameChange} placeholder="username"></input>

            <label className="settingsLabels" htmlFor="settingsPassword">Update password:</label>
            <input id="settingsPassword" onChange={handlePasswordChange} placeholder="password"></input>

            <label className="settingsLabels" htmlFor="settingsEmail">Update email:</label>
            <input id="settingsEmail" onChange={handleEmailChange} placeholder="email"></input>


            <label className="settingsLabels" htmlFor="settingsBio">Update bio:</label>
            <textarea id="settingsBio" onChange={handleBioChange} placeholder="bio"></textarea>

            <button class="greenButton" id="settingsSubmit">Post</button>
            </form>
        </div>
    )
}

export default Settings

// First of all, align settings page css.
// Then fix whatever validation stuff you want to (is bio updatable in users?)
// Then add a bio to the profile & my account page
// Add margin to separate the art and headers (my account)