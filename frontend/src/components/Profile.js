import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"
import Card from "./Card";



function Profile({userId, setPhotoId}){

    const navigate = useNavigate()
    const [userArts, setUserArts] = useState([])
    const [userData, setUserData] = useState({})
    const [username, setUsername] = useState('')
    let mailto = `mailto:${userData.email}`

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    useEffect(()=> {
    fetch(`http://127.0.0.1:8000/users/${userId}`)
    .then(res => res.json())
    .then(res => {setUserArts(res.arts.reverse()); setUserData(res)})}, [])
    
    useEffect(()=> {setUsername(userData.name)}, [userData])

    return (
        <div id="profileAll">
            <div id="profileHome" onClick={takeMeHome}><Logo/></div>
            <h1 id="profileName"><span style={{color: "#a1a7d6"}}>Artist's page: </span><span style={{color: "#80ffd0"}}>{username}</span></h1>
            <h2><a id="emailLink" href={`${mailto}`}><span>{userData.email}</span></a></h2>
            <h1 id="profileBio">{userData.bio}</h1>
            <div id="cardholder2">
            {userArts.map((each) => (<div id="cell"><Card setPhotoId={setPhotoId} key={each.id} each={each} username={username}/></div>))}
            </div>
        </div>
    )
}




export default Profile