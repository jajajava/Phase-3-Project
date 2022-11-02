import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "./Card";
import Logo from "./Logo"


function Profile({getById, setPhotoId}){

    const navigate = useNavigate()
    const [userArts, setUserArts] = useState([])
    const [userData, setUserData] = useState({})
    let mailto = `mailto:${userData.email}` //this wouldn't work, no contact. CREATE CONTACT
    let userId = getById.user_id

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }



    console.log(userData)

    useEffect(()=> {
    fetch(`http://127.0.0.1:8000/users/${userId}/arts`)
    .then(res => res.json())
    .then(res => setUserArts(res))}, [])

    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/users/${userId}`)
        .then(res => res.json())
        .then(res => setUserData(res))
        }, [])

    return (
        <div>
            <div id="profileAll">
            <div id="profileHome" onClick={takeMeHome}><Logo/></div>
            <h1 id="profileName"><span style={{color: "#a1a7d6"}}>Artist's page: </span><span style={{color: "#80ffd0"}}>{userData.name}</span></h1>
            <h2><a id="emailLink" href={`${mailto}`}><span>{userData.email}</span></a></h2>
            <div id="cardholder">
            {userArts.map((each) => (<div id="cell"><Card setPhotoId={setPhotoId} key={each.id} each={each}/></div>))}

        </div>

            </div>

        </div>
    )
}




export default Profile