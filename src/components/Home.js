import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Cardholder from "./Cardholder"
import Logo from "./Logo"


function Home({data, searchedData, setSearchedData, isLoggedIn, setIsLoggedIn, setPhotoId}){

   

    const navigate = useNavigate()
    

    const shownData = (searchedData === [] ? data : searchedData)


    function handleLogIn(){
        navigate('/login')

    }

    function handleLogOut(){
        setIsLoggedIn(false)
    }

    function handleSearch(e){
        setSearchedData(data.filter((thing)=> {return thing.title.toLowerCase().includes(e.target.value.toLowerCase())}))

        
    }


    return(
        <div id="whole-page">
            <header id="header">
                <div id="inline">
                    <Logo />
                    <div id="searchpadding">
                        <input onChange={handleSearch} id="searchbar"></input>
                    </div>
                    {isLoggedIn? 
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                        <a href="/post">Make a post</a>
                         <a href="/myaccount">My account</a>
                         <a onClick={handleLogOut} href="/">Log out</a>
                        </div>
                    </div> 
                   : <button onClick={handleLogIn} id="login">Log in</button>
                    }

                </div>
                
            </header>
            <Cardholder data={shownData} isLoggedIn={isLoggedIn} setPhotoId={setPhotoId}/>
        </div>
    )
}



export default Home



// Add following components: Search-bar, Logo, Filter buttons