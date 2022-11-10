import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom"

function Settings({currentUser}){

    const navigate = useNavigate()
    const [usernameChange, setUsernameChange] = useState('')
    const [passwordChange, setPasswordChange] = useState('')
    const [emailChange, setEmailChange] = useState('')
    const [bioChange, setBioChange] = useState('')
    const [showConfirmationInput, setShowConfirmationInput] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/users/${currentUser}`)
        .then(res => res.json())
        .then(res => {
            setUsernameChange(res.username)
            // setPasswordChange()
            setEmailChange(res.email)
            setBioChange(res.bio)
        })
    }, [])

    function toUsernameChange(e){
        e.preventDefault()
        navigate('/update')
    }

    function toPasswordChange(e){
        e.preventDefault()
        navigate('/update')
    }

    function toEmailChange(e){
        e.preventDefault()
        navigate('/update')
    }

    function toBioChange(e){
        e.preventDefault()
        navigate('/update')
    }

    function showDeleteConfirmation(){
        setShowConfirmationInput(!showConfirmationInput)
    }

    function deleteAccount(){
        
    }


    // function updateAccount(e){
    //     e.preventDefault()

    //     fetch(`http://127.0.0.1:8000/users/${currentUser}`, { //Fix later, this state is in App.js
    //         method: "PATCH",
    //         headers: {
    //             'content-type': "application/json"
    //             },
    //         body: JSON.stringify({
    //         username: usernameChange,
    //         password: passwordChange,
    //         email: emailChange,
    //         bio: bioChange
    //         })
    //     })
    // alert('Your account information was updated!')
    // }


    console.log(usernameChange, passwordChange, emailChange, bioChange) 

    return(
        <div id="settingsAll">
            <div id="settingsHome" ><Logo/></div>
            <div id="settingsButtonsContainer">
            <button onClick={toUsernameChange} className="greenButton" id="settingsUsernameChange">Change username</button>
            {/* <button> onClick={toPasswordChange} className="greenButton" id="settingsPasswordChange" change password</button>  FIX THIS ONCE YOU LEARN AUTH */}
            <button onClick={toEmailChange} className="greenButton" id="settingsEmailChange">Change email</button>
            <button onClick={toBioChange} className="greenButton" id="settingsBioChange">Update bio</button>
            <button onClick={showDeleteConfirmation} className="greenButton" id="deleteAccountButton">DELETE ACCOUNT</button>
            {showConfirmationInput === true ?
            <div>
            <div id="deleteAccountContainer">
                    <label id="deleteAccountLabel" htmlFor="deleteAccount">Please enter your password to delete this account (your posts will be deleted too)</label>
                    <input type={isChecked ? "text" : "password"} id="deleteAccount"></input>
            </div>
            <div id="showPasswordContainer">
                    <label id="showPasswordLabel">Show password</label>
                    <input id="showPassword" type="checkbox" onClick={()=> setIsChecked(!isChecked)}></input>
                </div>
            </div>
            : null}
            </div>
        </div>
    )
}

export default Settings

// First of all, align settings page css.
// Then fix whatever validation stuff you want to (is bio updatable in users?)
// Then add a bio to the profile & my account page
// Add margin to separate the art and headers (my account)
// Separation of concerns. Make a separate route from settings and allow person to change one thing at a time