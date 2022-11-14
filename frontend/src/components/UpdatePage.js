import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";



function UpdatePage({updateSelection, currentUser}){

    const [chosenKey, setChosenKey] = useState('')
    const [chosenValue, setChosenValue] = useState(null)
    const [result, setResult] = useState([])

    const navigate = useNavigate()

    function handleInput(e){
    if(updateSelection === 'settingsUsernameChange'){
        setChosenKey('username')
        setChosenValue(e.target.value)
    
    } else if(updateSelection === 'settingsPasswordChange'){
        setChosenKey('password')
        setChosenValue(e.target.value)
    
    } else if(updateSelection === 'settingsEmailChange'){
        setChosenKey('email')
        setChosenValue(e.target.value)
    
    } else if(updateSelection === 'settingsBioChange'){
        setChosenKey('bio')
        setChosenValue(e.target.value)
    
    }
}

// let theThing = {[chosenKey]: chosenValue}

//FIGURE OUT HOW TO MAKE CHOSEN KEY A VARIABLE AND DELETE REPEATING CODE

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                },
            body: JSON.stringify({
                [chosenKey]: chosenValue
            })
        })
        .then(res => {
            if(res.ok){
                result.push(`Your ${chosenKey} has been updated to '${chosenValue}'!`)
                alert(result.toString())
                navigate('/')
                result.splice(0, result.length)
            }
            else{
                res.json()
                .then((res) => setResult(res.errors))
                alert(result)
                result.splice(0, result.length)
            }}
        )
    }

    return(
        <div>
            {updateSelection === 'settingsUsernameChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <h1>Update Username</h1>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
        
                </form>
            </div>
            : updateSelection === 'settingsPasswordChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <h1>Update Password</h1>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
        
            </form>
            </div>
            : updateSelection === 'settingsEmailChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <h1>Update Email</h1>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
                    
                </form>
            </div>
            : updateSelection === 'settingsBioChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <h1>Update Bio</h1>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
                    
                </form>
            </div>
            : updateSelection === 'deleteAccountButton' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>
                
                <h1>DELETE ACCOUNT</h1> {/* probably want to give it a different function */}
                <form id="updateForm">
                    <input id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
                    
                </form>
            </div>
            : null}
        </div>
        )
    }


export default UpdatePage

// const [isChecked, setIsChecked] = useState(false)

// {showConfirmationInput === true ?
//     <div>
//     <div id="deleteAccountContainer">
//             <label id="deleteAccountLabel" htmlFor="deleteAccount">Please enter your password to delete this account (your posts will be deleted too)</label>
//             <input type={isChecked ? "text" : "password"} id="deleteAccount"></input>
//     </div>
//     <div id="showPasswordContainer">
//             <label id="showPasswordLabel">Show password</label>
//             <input id="showPassword" type="checkbox" onClick={()=> setIsChecked(!isChecked)}></input>
//         </div>
//     </div>
//     : null}