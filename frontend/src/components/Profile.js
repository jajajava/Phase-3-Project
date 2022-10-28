import React from "react";
import { useNavigate } from "react-router";

function Profile({getById}){

    const navigate = useNavigate()

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    console.log(getById)
    return (
        <div>
            <div id="">
            <button onClick={takeMeHome}>Home</button>
            <h1>THIS WORKS</h1>
            </div>

        </div>
    )
}






export default Profile