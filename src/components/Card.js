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
        <div id="card">
            <div onClick={toDetails}>
                <img src={each.image} alt="" width="300" height="300"/>
                <h3>{each.title}</h3>
                <p>Artist: {each.name}</p>
                <p>Medium: {each.medium}</p>
                <p>Tags: <span style={{color: "purple"}}>{each.tags.join(', ')}</span></p> 
            </div>
                {isSignedIn? <button onClick={handleDelete} id="remove">❌</button> : null}
                {confirm ? <div><p><strong><span style={{color: "red"}} >Please click again to confirm deletion!</span></strong></p></div> : null}
        </div>
    )
}

export default Card