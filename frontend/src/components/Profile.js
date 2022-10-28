import React from "react";
import { useNavigate } from "react-router";
import Cardholder from "./Cardholder"


function Profile({getById, data, setPhotoId}){

    const navigate = useNavigate()

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    console.log(getById)
    return (
        <div>
            <div id="profileAll">
            <button id="profileHome" onClick={takeMeHome}>Home</button>
            <h1 id="profileName">Artist's page: <span style={{color: "80ffd0"}}>{getById.name}</span></h1>
            <Cardholder data={data} setPhotoId={setPhotoId} /> {/* REPLACE THIS DATA WITH ARTIST DATA VIA GET REQUEST INSIDE THE ARTIST PAGE ITSELF*/}

            </div>

        </div>
    )
}






export default Profile