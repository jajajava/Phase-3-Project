import React from "react";
import Card from "./Card"

function Cardholder({setData, searchedData, setSearchedData, isSignedIn, setPhotoId, setToDelete, photoId, currentUser}){
    
    return(
    <div>
        <div id="cardholder">
        {searchedData.map((each) => (<div id="cell"><Card setData={setData} searchedData={searchedData} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each} photoId={photoId} username={each.user.name} setToDelete={setToDelete} user_id={each.user.id} currentUser={currentUser}/></div>))}

        </div>
    </div>
    
    
    )
}



export default Cardholder