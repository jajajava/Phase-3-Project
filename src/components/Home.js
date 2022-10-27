import React, { useState } from "react"
import { useNavigate } from "react-router"
import Cardholder from "./Cardholder"
import Logo from "./Logo"


function Home({data, searchedData, setSearchedData, isSignedIn, setIsSignedIn, setPhotoId}){

   

    const navigate = useNavigate()
    

    const shownData = (searchedData === [] ? data : searchedData)


    function handleSignIn(){
        navigate('/signin')

    }

    function handleSignOut(){
        setIsSignedIn(false)
    }

    function handleSearch(e){
        setSearchedData(data.filter((thing)=> {return (thing.title.toLowerCase().includes(e.target.value.toLowerCase())) || (thing.medium.toLowerCase().includes(e.target.value.toLowerCase())) || (thing.tags.toString().toLowerCase().includes(e.target.value.toLowerCase())) || (thing.name.toLowerCase().includes(e.target.value.toLowerCase())) }))
    }


    return(
        <div id="whole-page">
            <header id="header">
                <div id="inline">
                    <Logo />
                    <div id="searchpadding">
                        <input onChange={handleSearch} id="searchbar"></input>
                    </div>
                    {isSignedIn? 
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown</button>
                        <div className="dropdown-content">
                        <a href="/post">Make a post</a>
                         <a onClick={handleSignOut} href="/">Sign out</a>
                        </div>
                    </div> 
                   : <button onClick={handleSignIn} id="signin">Sign in</button>
                    }

                </div>
                
            </header>
            <Cardholder data={shownData} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setPhotoId={setPhotoId}/>
        </div>
    )
}



export default Home