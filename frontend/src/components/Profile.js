import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "./Card";


function Profile({getById, data}){

    const navigate = useNavigate()
    const [userArts, setUserArts] = useState([])
    let userId = getById.user_id

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }


    useEffect(()=> {
    fetch(`http://localhost:7901/users/${userId}/arts`)
    .then(res => res.json())
    .then(res => setUserArts(res))}, [])



    console.log(getById)
    return (
        <div>
            <div id="profileAll">
            <button id="profileHome" onClick={takeMeHome}>Home</button>
            <h1 id="profileName">Artist's page: <span style={{color: "80ffd0"}}>{getById.name}</span></h1>
            <div id="cardholder">
            {userArts.map((each) => (<div id="cell"><Card key={each.id} each={each}/></div>))}

        </div>

            </div>

        </div>
    )
}




export default Profile