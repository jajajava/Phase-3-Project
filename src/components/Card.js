import React from "react";
import { useNavigate } from "react-router";

function Card({each, isSignedIn, setPhotoId, shownData, data, setData}){

    const navigate = useNavigate()
    

    function toDetails(){
        setPhotoId(each.id)
        navigate('/details')
    }

    function handleDelete(){
        fetch(`http://localhost:4000/thing/${each.id}`, {
            method: "DELETE"
        })

        setData(data)
    }
    

    return(
        <div id="card">
            <div onClick={toDetails}>
                <img src={each.image} alt="" width="300" height="300"/>
                <p>{each.selectedName}</p>
                <p>{each.title}</p>
                <p>{each.medium}</p>
                <p><span style={{color: "purple"}}>{each.tags.join(', ')}</span></p> 
            </div>
                {isSignedIn? <button onClick={handleDelete} id="remove">❌</button> : null}
        </div>
    )
}

export default Card
//Maybe for each.tags you can make that element render conditionally where if the value is an empty array, it instead puts a div which you
//customize in CSS to give padding