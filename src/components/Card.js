import React from "react";

function Card({each}){

    let isLoggedIn
    

    return(
        <div id="card">
            <img src={each.image} alt="" width="300" height="300"/>
            <p>{each.title}</p>
            <p>{each.media}</p>
            <p>{each.tags}</p>
            {isLoggedIn? <button id="remove">❌</button> : null}

        </div>
    )
}

export default Card