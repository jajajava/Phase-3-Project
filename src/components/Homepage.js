import React from "react"
import Cardholder from "./Cardholder"
import Logo from "./Logo"

function Homepage({data}){
    return(
        <div id="whole-page">
            <header id="header">
                <div id="inline">
                    <Logo />
                    <div id="searchpadding">
                        <input id="searchbar"></input>
                    </div>
                    
                </div>
                
            </header>
            <Cardholder data={data}/>
        </div>
    )
}



export default Homepage



// Add following components: Search-bar, Logo, Filter buttons