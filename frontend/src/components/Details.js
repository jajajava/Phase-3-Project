import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"


function Details({photoId, getById, setGetById}){
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    
    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/arts/${photoId}`)
        .then(res => res.json())
        .then(res => {setGetById(res); setEmail(res.user.email); setUsername(res.user.name)})
    },[])
//CHANGE THIS
    // fetch(`http://127.0.0.1:8000/arts/${photoId}/user`)
    // .then(res=> res.json())
    // .then(res=> {setUsername(res.name); setEmail(res.email)})

    const navigate = useNavigate()

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    function toProfile(e){
        e.preventDefault()
        navigate('/profile')
    }

    console.log(getById.user.email)

    //Tags show up only when loaded in
    // let tags = getById.tags !== [] ? getById.tags.join(', #') : null
    let mailto = `mailto:${email}`

    return(
        <div id="detailsAll">
            <div id="detailsHome" onClick={takeMeHome}><Logo/></div>
            <h1 id="detailsTitle">{getById.title}</h1>
            <img id="detailsImage" src={getById.image} height="600" width="600"></img>
            <div id="detailsArtist"><h1 style={{color: "#80ffd0"}} onClick={toProfile}>{username}</h1></div>
            <h1 id="detailsTitle"><span style={{color: "#a1a7d6"}}>Title: </span>{getById.title}</h1>
            <h1 id="detailsMedium"><span style={{color: "#a1a7d6"}}>Medium: </span>{getById.medium}</h1>
            <h1 id="detailsDescription"><span style={{color: "#a1a7d6"}}>Description: </span>{getById.description}</h1>
            {getById.price !== 1123581321340000 ? <h1 id="detailsPrice"><span style={{color: "#a1a7d6"}}>Price:</span> ${getById.price}</h1> : <h1>Price negotiable, contact artist at:</h1>}
            <h1 id="detailsContact"><a id="emailLink" href={`${mailto}`}><span>{email}</span></a></h1> 
            
            {/* <h1 id="detailsTags"><span style={{color: "#a1a7d6"}}>Tags: <span style={{color: "#deb67e"}}>#{tags}</span></span></h1> */}

        </div>
    )
}


export default Details