import React from "react";
import Card from "./Card"

function Cardholder({data, setData, setSearchedData, isSignedIn, setPhotoId, confirm, setToDelete, photoId}){
    
    return(
    <div>
        <div id="cardholder">
        {data.map((each) => (<div id="cell"><Card data={data} setData={setData} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each} confirm={confirm} setToDelete={setToDelete} photoId={photoId} username={each.user.name}/></div>))}

        </div>
    </div>
    
    
    )
}



export default Cardholder