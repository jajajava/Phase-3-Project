import React from "react";
import Card from "./Card"

function Cardholder({setData, searchedData, isSignedIn, setPhotoId, setToDelete, photoId}){
    
    return(
    <div>
        <div id="cardholder">
        {searchedData.map((each) => (<div id="cell"><Card setData={setData} searchedData={searchedData} isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each} setToDelete={setToDelete} photoId={photoId} username={each.user.name}/></div>))}

        </div>
    </div>
    
    
    )
}



export default Cardholder