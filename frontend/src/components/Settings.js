import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom"

function Settings({currentUser}){

    const navigate = useNavigate()
    const [usernameChange, setUsernameChange] = useState('')
    const [passwordChange, setPasswordChange] = useState('')
    const [emailChange, setEmailChange] = useState('')
    const [bioChange, setBioChange] = useState('')

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/users/${currentUser}`)
        .then(res => res.json())
        .then(res => {
            setUsernameChange(res.username)
            setPasswordChange()
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
            <h1 onClick={toUsernameChange} id="toUsernameChange">Change username</h1>
            {/* <h1> onClick={toPasswordChange} id="toPasswordChange" change password</h1>  FIX THIS ONCE YOU LEARN AUTH */}
            <h1 onClick={toEmailChange} id="toEmailChange">Change email</h1>
            <h1 onClick={toBioChange} id="toBioChange">Update bio</h1>
        </div>
    )
}

export default Settings

// First of all, align settings page css.
// Then fix whatever validation stuff you want to (is bio updatable in users?)
// Then add a bio to the profile & my account page
// Add margin to separate the art and headers (my account)
// Separation of concerns. Make a separate route from settings and allow person to change one thing at a time