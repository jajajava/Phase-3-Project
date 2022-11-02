import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from "./Home"
import Signin from "./Signin"
import Details from "./Details"
import Profile from "./Profile"
import Post from "./Post"


function App() {

  const [data, setData] = useState([])
  const [getById, setGetById] = useState({})
  const [searchedData, setSearchedData] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [photoId, setPhotoId] = useState("")
  const [email, setEmail] = useState('')

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/arts')
    .then(res => res.json())
    .then(res => {setData(res); setSearchedData(res); setIsSignedIn(false)})
    
  }, [])

  console.log(searchedData)
  
//isLoggedIn && isArtist ? render (routes) : render (less routes) <-- No need for passing info to each component?


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setPhotoId={setPhotoId} data={data} searchedData={searchedData} setSearchedData={setSearchedData}/>} />
        <Route path="signin" element={<Signin setIsSignedIn={setIsSignedIn}/>} />
        <Route path="details" element={<Details data={data} photoId={photoId} getById={getById} setGetById={setGetById} email={email} setEmail={setEmail} />} />
        <Route path="profile" element={<Profile getById={getById} data={data} setPhotoId={setPhotoId} email={email}/>} /> {/* REPLACE THIS DATA WITH ARTIST DATA VIA GET REQUEST INSIDE THE ARTIST PAGE ITSELF*/}
        <Route path="post" element={<Post isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />

      </Routes>
      
    </div>
  );
}

export default App;
