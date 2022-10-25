import React, { useState } from "react";
import { useNavigate } from "react-router";

function Card({each, isLoggedIn, setPhotoId}){

    const navigate = useNavigate()
    

    function toDetails(){
        setPhotoId(each.id)
        navigate('/details')
    }
    

    return(
        <div onClick={toDetails} id="card">
            <img src={each.image} alt="" width="300" height="300"/>
            <p>{each.title}</p>
            <p>{each.media}</p>
            <p>{each.tags}</p>
            {isLoggedIn? <button id="remove">❌</button> : null}
            

        </div>
    )
}

export default Card