import React, { useState } from "react";
import { useNavigate } from "react-router";


function Card({each, isSignedIn, setPhotoId, setSearchedData}){

    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false)
    const [username, setUsername] = useState('')

    function toDetails(){
        setPhotoId(each.id)
        navigate('/details')
    }

    fetch(`http://localhost:7901/arts/${each.id}/user`)
    .then(res=> res.json())
    .then(res=> setUsername(res.name))

    function handleDelete(e){
            e.preventDefault() 
            setConfirm(true)
            fetch(`http://localhost:7901/arts/${each.id}`, {
                method: "DELETE"
            })
            .then(fetch('http://localhost:7901/arts')
            .then(res => res.json())
            .then(res => {setSearchedData(res)})) //Only deletes after 2 clicks on delete button
            console.log(each.id)
        }
        
    return(
        <div id="cardAll">
            <div onClick={toDetails}>
                
                <img id="cardImage" src={each.image} alt="" width="300" height="300"/>
                <h3 id="cardTitle">{each.title}</h3>
                <p id="cardArtist">Artist: {username}</p>
                <p id="cardMedium" >Medium: {each.medium}</p>
                <p id="cardTags">Tags: <span style={{color: "#ebb871"}}>#{each.tags}</span></p>  {/*  .join(' #')}  */}
            </div>
                {isSignedIn? <button onClick={handleDelete} id="remove">❌</button> : null}
                {confirm ? <div><h4><strong><span style={{color: "#efaa4a"}}> Please click again to hide deleted post </span></strong></h4></div> : null}
        </div>
    )
}

export default Card