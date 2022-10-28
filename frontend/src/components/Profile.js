import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "./Card";
import Logo from "./Logo"


function Profile({getById, data, email}){

    const navigate = useNavigate()
    const [userArts, setUserArts] = useState([])
    const [userData, setUserData] = useState({})
    let mailto = `mailto:${getById.contact}`
    let userId = getById.user_id

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    console.log(userData)

    useEffect(()=> {
    fetch(`http://localhost:7901/users/${userId}/arts`)
    .then(res => res.json())
    .then(res => setUserArts(res))}, [])

    useEffect(()=> {
        fetch(`http://localhost:7901/users/${userId}`)
        .then(res => res.json())
        .then(res => setUserData(res))
        }, [])



    console.log(getById)
    return (
        <div>
            <div id="profileAll">
            <div id="profileHome" onClick={takeMeHome}><Logo/></div>
            <h1 id="profileName"><span style={{color: "#a1a7d6"}}>Artist's page: </span><span style={{color: "#80ffd0"}}>{userData.name}</span></h1>
            <h2><a id="emailLink" href={`${mailto}`}><span>{email}</span></a></h2>
            <div id="cardholder">
            {userArts.map((each) => (<div id="cell"><Card key={each.id} each={each}/></div>))}

        </div>

            </div>

        </div>
    )
}




export default Profile