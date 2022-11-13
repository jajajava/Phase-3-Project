import React from "react";
import { useNavigate } from "react-router";


function Card({each, isSignedIn, setPhotoId, username, currentUser, user_id, setToDelete, fromUser}){

    const navigate = useNavigate()

    function toDetails(){
        setPhotoId(each.id)
        navigate('/details')
    }

    function deletePressed(e){
        e.preventDefault()
        if (fromUser){
            alert('Your post has been deleted! Changes will be reflected on homepage')
        }
        setToDelete(each.id)
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
                {isSignedIn && currentUser.id === user_id ? <button onClick={deletePressed} id="remove">❌</button> : null}
        </div>
    )
}

export default Card