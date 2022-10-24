import React, {useState} from "react"
import { useNavigate } from "react-router"
import Cardholder from "./Cardholder"
import Logo from "./Logo"


function Home({data, isLoggedIn, setIsLoggedIn}){

    const navigate = useNavigate()


    function handleLogIn(){
        navigate('/login')

    }

    function handleLogOut(){
        setIsLoggedIn(false)
    }

    return(
        <div id="whole-page">
            <header id="header">
                <div id="inline">
                    <Logo />
                    <div id="searchpadding">
                        <input id="searchbar"></input>
                    </div>
                    {isLoggedIn? 
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                        <a href="#">Link 1</a>
                         <a href="#">Link 2</a>
                         <a onClick={handleLogOut} href="/">Log out</a>
                        </div>
                    </div> 
                   : <button onClick={handleLogIn} id="login">Log in</button>
                    }

                </div>
                
            </header>
            <Cardholder data={data} isLoggedIn={isLoggedIn}/>
        </div>
    )
}



export default Home



// Add following components: Search-bar, Logo, Filter buttons