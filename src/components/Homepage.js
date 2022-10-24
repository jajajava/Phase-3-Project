import React, {useState} from "react"
import Cardholder from "./Cardholder"
import Logo from "./Logo"

function Homepage({data}){

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handleLogIn(){
        setIsLoggedIn(!isLoggedIn)
    }

    return(
        <div id="whole-page">
            <header id="header">
                <div id="inline">
                    <Logo />
                    <div id="searchpadding">
                        <input id="searchbar"></input>
                    </div>
                    <button onClick={handleLogIn} id="login">{isLoggedIn? "Log out" : "Log in"}</button>
                </div>
                
            </header>
            <Cardholder data={data} isLoggedIn={isLoggedIn}/>
        </div>
    )
}



export default Homepage



// Add following components: Search-bar, Logo, Filter buttons