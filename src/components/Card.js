import React from "react";

function Card({each}){


    return(
        <div id="card">
            <img src={each.image} alt="" width="300" height="300"/>
            <p>{each.title}</p>
            <p>{each.media}</p>
            <p>{each.tags}</p>


        </div>
    )
}

export default Card