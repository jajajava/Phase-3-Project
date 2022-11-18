import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";



function UpdatePage({updateSelection, currentUser, setCurrentUser, setIsSignedIn}){

    const [chosenKey, setChosenKey] = useState('')
    const [chosenValue, setChosenValue] = useState(null)
    const [result, setResult] = useState([])
    const [showDeleteButton, setShowDeleteButton] = useState(false)
    const [toggleValue, setToggleValue] = useState(currentUser.commissions)


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
    
    } else if(updateSelection === 'settingsCommissionChange'){
        setChosenKey('commissions')
        setChosenValue(toggleValue)
    }
}

    useState(()=> {setShowDeleteButton(false)}, [])

    function handleSubmitCommission(e){
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                },
            body: JSON.stringify({
                "commissions": toggleValue
            })
        })
        .then(res => {
            if(res.ok){
                result.push(`Your commission status has been updated to '${toggleValue === true ? 'open to commissions' : 'not open to commissions'}'!`)
                alert(result.toString())
                navigate('/')
                window.location.reload()
                result.splice(0, result.length)
            }
            else{
                res.json()
                .then((res) => setResult(res.errors))
                alert(result)
                result.splice(0, result)
            }}
        )
    }

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
                window.location.reload()
                result.splice(0, result.length)
            }
            else{
                res.json()
                .then((res) => setResult(res.errors))
                alert(result)
                result.splice(0, result)
            }}
        )
    }

    function handleToggle(){
        setToggleValue(!toggleValue)
    }

    function handleDeleteInput(e){
        if (e.target.value === "I want to delete my account"){setShowDeleteButton(true)}
        else {setShowDeleteButton(false)}
    }

    function handleDelete(){
        fetch(`http://127.0.0.1:8000/users/${currentUser.id}`, {
            method: "DELETE",
            headers: {
            'content-type': "application/json",
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(setIsSignedIn(false), setCurrentUser(null), localStorage.removeItem('jwt'), navigate('/'))
    }


    return(
        <div>
            {updateSelection === 'settingsUsernameChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <div id="updateBottomHalf">
                <h1 id="updateH1">Update Username</h1>
                <p id="updateCurrentInfo">Current username: {currentUser.username}</p>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
        
                </form>
                </div>
            </div>
            : updateSelection === 'settingsPasswordChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <div id="updateBottomHalf">
                <h1 id="updateH1">Update Password</h1>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
        
            </form>
            </div>
            </div>
            : updateSelection === 'settingsEmailChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <div id="updateBottomHalf">
                <h1 id="updateH1">Update Email</h1>
                <p id="updateCurrentInfo">Current email: {currentUser.email}</p>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
                    
                </form>
                </div>
            </div>
            : updateSelection === 'settingsBioChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <div id="updateBottomHalf">
                <h1 id="updateH1">Update Bio</h1>
                <p id="updateCurrentInfo">Current bio: "{currentUser.bio}"</p>
                <form onSubmit={handleSubmit} id="updateForm">
                    <input onChange={handleInput} id="updateInput"></input>
                    <button className="greenButton" id="updateSubmit">Submit</button>
                    
                </form>
                </div>
            </div>
            : updateSelection === 'settingsCommissionChange' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>

                <div id="updateBottomHalf">
                <h1 id="updateH1">Toggle commission status</h1>
                <form onSubmit={handleSubmitCommission} id="updateForm">
                    { currentUser.commissions ? 
                    <label className="switch">
                    <input onChange={handleToggle} type="checkbox" checked={toggleValue}/>
                    <span className="slider round"></span>
                    </label>
                    :
                    <label className="switch">
                    <input onChange={handleToggle} type="checkbox"/>
                    <span className="slider round"></span>
                    </label>
                    }
                    <button className="greenButton" id="updateSubmit">Submit</button>
                    
                </form>
                </div>
            </div>




            : updateSelection === 'deleteAccountButton' ?
            <div id="updateAll">
                <div id="updateHome"><Logo/></div>
                
                <div id="updateBottomHalf">
                <h1 id="updateH1Delete">DELETE ACCOUNT</h1>
                <form onSubmit={handleDelete} id="updateForm">
                    <label htmlFor="updateInput" id="updateInputLabel">Type <span style={{color: 'red'}}>'I want to delete my account'</span> to delete</label>
                    <input onChange={handleDeleteInput} id="updateInput"></input>
                    {showDeleteButton === true ? <button className="greenButton" id="updateSubmit">Submit</button> : null}
                    
                </form>
                </div>
            </div>
            : null}
        </div>
        )
    }


export default UpdatePage