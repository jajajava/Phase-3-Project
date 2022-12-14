import React from "react"
import { useNavigate } from "react-router"
import Cardholder from "./Cardholder"
import Logo from "./Logo"


function Home({data, setData, searchedData, setSearchedData, isSignedIn, setPhotoId, photoId, currentUser, setToDelete}){

    const navigate = useNavigate()

    function toTop(){
        window.scrollTo(0, 0)
    }

    function handleSignIn(){
        navigate('/signin')
    }

    function handleMyAccount(){
        navigate('/myaccount')
    }

    function handleSignOut(){
        localStorage.removeItem('jwt')
        window.location.reload()
    }

    function handleSearch(e){
    setSearchedData(data.filter((thing)=> {return (thing.title.toLowerCase().includes(e.target.value.toLowerCase())) || (thing.medium.toLowerCase().includes(e.target.value.toLowerCase())) || (thing.tags? (thing.tags.toLowerCase().includes(e.target.value.toLowerCase())) : null) }))
    // OPTIONAL, resets position to top of page as you type
    if (e.target.value.length > 0){ window.scrollTo(0, 40)
    } else {
        window.scrollTo(0,0)
    }
    }

    function handleSettings(e){
        e.preventDefault()
        navigate('/Settings')

    }

    function handlePost(e){
        e.preventDefault()
        navigate('/post')
    }

    return(
        <div id="whole-page">
            <header id="header">
                <div id="inline">
                    <div id="logopad" onClick={toTop}><Logo/></div>
                    
                    <div id="searchpadding">
                        <input onChange={handleSearch} id="searchbar" placeholder="Search by title, medium, or tags"></input>
                    </div>

                    {isSignedIn? 

                    <div className="dropdown">
                        <button className="dropbtn">Options</button>
                        <div className="dropdown-content">
                        <a className="ddopt" onClick={handlePost}>Make a post</a>
                        <a className="ddopt" onClick={handleMyAccount}>My Account</a>
                        <a className="ddopt" onClick={handleSettings}>Settings</a>
                        <a className="ddopt" onClick={handleSignOut}>Sign out</a>
                        </div>
                    </div> 
                   : <button onClick={handleSignIn} className="greenButton" id="signinorout">Sign in</button>
                    }
                    </div>
                
                
            </header>
            <Cardholder setData={setData} searchedData={searchedData} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setPhotoId={setPhotoId} photoId={photoId} currentUser={currentUser} setToDelete={setToDelete}/>

        </div>
    )
}

export default Home