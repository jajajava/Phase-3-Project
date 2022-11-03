import React, { useState } from "react"
import { useNavigate } from "react-router"
import Cardholder from "./Cardholder"
import Logo from "./Logo"


function Home({data, searchedData, setSearchedData, isSignedIn, setIsSignedIn, setPhotoId}){

    const navigate = useNavigate()

    function handleSignIn(){
        navigate('/signin')

    }

    function handleSignOut(){
        setIsSignedIn(false)
    }

    function handleSearch(e){
    setSearchedData(data.filter((thing)=> {return (thing.title.toLowerCase().includes(e.target.value.toLowerCase())) || (thing.medium.toLowerCase().includes(e.target.value.toLowerCase())) || (thing.tags? (thing.tags.toLowerCase().includes(e.target.value.toLowerCase())) : null) }))
    }

    function handlePost(e){
        e.preventDefault()
        navigate('/post')
    }


    return(
        <div id="whole-page">
            <header id="header">
                <div id="inline">
                    <div id="logopad"><Logo/></div>
                    
                    <div id="searchpadding">
                        <input onChange={handleSearch} id="searchbar"></input>
                    </div>

                    {isSignedIn? 

                    <div className="dropdown">
                        <button className="dropbtn">Options</button>
                        <div className="dropdown-content">
                        <a className="ddopt" onClick={handlePost}>Make a post</a>
                        <a className="ddopt" onClick={handleSignOut}>Sign out</a>
                        </div>
                    </div> 
                   : <button onClick={handleSignIn} id="signin">Sign in</button>
                    }
                    </div>
                
                
            </header>
            <Cardholder data={searchedData} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setPhotoId={setPhotoId}/>

        </div>
    )
}

export default Home