import React, { useState } from "react";
import { useNavigate } from "react-router";


function Card({each, isSignedIn, setPhotoId, data, setData}){

    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false)
    const [username, setUsername] = useState('')

    function toDetails(){
        setPhotoId(each.id)
        navigate('/details')
    }

    fetch(`http://127.0.0.1:8000/arts/${each.id}/user`)
    .then(res=> res.json())
    .then(res=> setUsername(res.name))

    function handleDelete(e){
            e.preventDefault() 
            setConfirm(true)
            fetch(`http://127.0.0.1:8000/arts/${each.id}`, {
                method: "DELETE"
            })
            setData(data)
        }


    return(
        <div id="cardAll">
            <div onClick={toDetails}>
                
                <img id="cardImage" src={each.image} alt="" width="300" height="300"/>
                <h3 id="cardTitle">{each.title}</h3>
                <p id="cardArtist"><span style={{color: "#88f2e9"}}>Artist: </span>{username}</p>
                <p id="cardMedium"><span style={{color: "#88f2e9"}}>Medium: </span>{each.medium}</p>
                {each.price !== 1123581321340000 ? <p id="cardMedium"><span style={{color: "#88f2e9"}}>Price:</span> ${each.price}</p> : <p><span style={{color: "#88f2e9"}}>Contact artist for price</span></p>}
                {<p id="cardTags"><span style={{color: "#90c2fc"}}>Tags: </span><span style={{color: "#ebb871"}}>{each.tags}</span></p>}
            </div>
                {isSignedIn? <button onClick={handleDelete} id="remove">❌</button> : null}
        </div>
    )
}

export default Card