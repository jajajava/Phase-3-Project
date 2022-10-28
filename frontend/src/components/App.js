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

  useEffect(()=> {
    fetch('http://localhost:4000/thing')
    .then(res => res.json())
    .then(res => {setData(res); setSearchedData(res); setIsSignedIn(false)})
    
  }, [])


  
//isLoggedIn && isArtist ? render (routes) : render (less routes) <-- No need for passing info to each component?


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setPhotoId={setPhotoId} data={data} setData={setData} searchedData={searchedData} setSearchedData={setSearchedData}/>} />
        <Route path="signin" element={<Signin setIsSignedIn={setIsSignedIn}/>} />
        <Route path="details" element={<Details data={data} photoId={photoId} getById={getById} setGetById={setGetById} />} />
        <Route path="profile" element={<Profile getById={getById} data={data} setPhotoId={setPhotoId}/>} /> {/* REPLACE THIS DATA WITH ARTIST DATA VIA GET REQUEST INSIDE THE ARTIST PAGE ITSELF*/}
        <Route path="post" element={<Post isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />

      </Routes>
      
    </div>
  );
}

export default App;
