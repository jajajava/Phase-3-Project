import React from "react";
import Card from "./Card"

function Cardholder({data}){
    
    return(
    <div>
        <div id="cardholder">
        {data.map((each) => (<div id="cell"><Card key={each.id} each={each}/></div>))}
        </div>
    </div>
    
    
    )
}



export default Cardholder