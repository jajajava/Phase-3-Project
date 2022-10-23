import React from "react";
import Card from "./Card"

function Cardholder({data}){
    
    return(
    <div>
        {data.map((each) => (<Card key={each.id} each={each}/>))}
    </div>
    
    )
}



export default Cardholder