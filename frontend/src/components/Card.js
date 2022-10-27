import React, { useState } from "react";
import { useNavigate } from "react-router";


function Card({each, isSignedIn, setPhotoId, setSearchedData}){

    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false)

    function toDetails(){
        setPhotoId(each.id)
        navigate('/details')
    }

    function handleDelete(e){
            e.preventDefault() 
            setConfirm(true)
            fetch(`http://localhost:4000/thing/${each.id}`, {
                method: "DELETE"
            })
            .then(fetch('http://localhost:4000/thing')
            .then(res => res.json())
            .then(res => {setSearchedData(res)})) //Only deletes after 2 clicks on delete button

        }
        
    return(
        <div id="cardAll">
            <div onClick={toDetails}>
                
                <img id="cardImage" src={each.image} alt="" width="300" height="300"/>
                <h3 id="cardTitle">{each.title}</h3>
                <p id="cardArtist">Artist: {each.name}</p>
                <p id="cardMedium" >Medium: {each.medium}</p>
                <p id="cardTags">Tags: <span style={{color: "#b5bcf5"}}>#{each.tags.join(' #')}</span></p> 
            </div>
                {isSignedIn? <button onClick={handleDelete} id="remove">❌</button> : null}
                {confirm ? <div><h4><strong><span style={{color: "#820d0d"}}>Please click again to hide deleted post</span></strong></h4></div> : null}
        </div>
    )
}

export default Card