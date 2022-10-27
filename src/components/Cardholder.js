import React from "react";
import Card from "./Card"

function Cardholder({data, setSearchedData, isSignedIn, setPhotoId}){

    
    return(
    <div>
        <div id="cardholder">
        {data.map((each) => (<div id="cell"><Card data={data} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each}/></div>))}

        </div>
    </div>
    
    
    )
}



export default Cardholder