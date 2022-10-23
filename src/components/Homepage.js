import React from "react"
import Logo from "./Logo"

function Homepage(){
    return(
        <div>
            <header id="header">
                <div id="inline">
                    <Logo />
                    <div id="searchpadding">
                        <input id="searchbar"></input>
                    </div>
                </div>
                
            </header>
        </div>
    )
}



export default Homepage



// Add following components: Search-bar, Logo, Filter buttons