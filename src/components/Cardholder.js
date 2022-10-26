import React from "react";
import Card from "./Card"

function Cardholder({data, isSignedIn, setPhotoId}){
    
    return(
    <div>
        <div id="cardholder">
        {data.map((each) => (<div id="cell"><Card isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each}/></div>))}
        </div>
    </div>
    
    
    )
}



export default Cardholder