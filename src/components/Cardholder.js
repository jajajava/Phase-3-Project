import React from "react";
import Card from "./Card"

function Cardholder({data, shownData, setData, isSignedIn, setPhotoId}){
    
    return(
    <div>
        <div id="cardholder">
        {shownData.map((each) => (<div id="cell"><Card data={data} shownData={shownData} setData={setData} isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each}/></div>))}
        </div>
    </div>
    
    
    )
}



export default Cardholder