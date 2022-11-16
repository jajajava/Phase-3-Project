import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom"

function Settings({setUpdateSelection}){ //Might have to move current user to update and out of this one

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
            <button onClick={handleSelection} className="greenButton" id="settingsCommissionChange">Change commission status</button>
            <button onClick={handleSelection} className="greenButton" id="deleteAccountButton">DELETE ACCOUNT</button>
            
            </div>
        </div>
    )
}

export default Settings