import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom"

function Settings({currentUser, setUpdateSelection}){ //Might have to move current user to update and out of this one

    const navigate = useNavigate()

    
    function handleSelection(e){
        e.preventDefault()
        setUpdateSelection(e.target.id)
        navigate('/update')
    }

    return(
        <div id="settingsAll">
            <div id="settingsHome" ><Logo/></div>
            <div id="settingsButtonsContainer">
            <button onClick={handleSelection} className="greenButton" id="settingsUsernameChange">Change username</button>
            <button onClick={handleSelection} className="greenButton" id="settingsPasswordChange">Change password</button>
            <button onClick={handleSelection} className="greenButton" id="settingsEmailChange">Change email</button>
            <button onClick={handleSelection} className="greenButton" id="settingsBioChange">Update bio</button>
            <button onClick={handleSelection} className="greenButton" id="deleteAccountButton">DELETE ACCOUNT</button>
            
            </div>
        </div>
    )
}

export default Settings


// Replace all "10" string interpolation in username with current user info! (from App.js)
// Then fix whatever validation stuff you want to (is bio updatable in users?)
// Fix styling of bio in Profile and MyAccount
// Add margin to separate the art and headers (my account)
// Separation of concerns. Make a separate route from settings and allow person to change one thing at a time
