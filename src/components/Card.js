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
            <p><span style={{color: "purple"}}>{each.tags.join(', ')}</span></p> 
            {isLoggedIn? <button id="remove">❌</button> : null}
            

        </div>
    )
}

export default Card
//Maybe for each.tags you can make that element render conditionally where if the value is an empty array, it instead puts a div which you
//customize in CSS to give padding