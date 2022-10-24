import React from "react";
import Card from "./Card"

function Cardholder({data, isLoggedIn}){
    
    return(
    <div>
        <div id="cardholder">
        {data.map((each) => (<div id="cell"><Card isLoggedIn={isLoggedIn} key={each.id} each={each}/></div>))}
        </div>
    </div>
    
    
    )
}



export default Cardholder