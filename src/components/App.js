import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from "./Home"
import Login from "./Login"
import Details from "./Details"


function App() {

  const [data, setData] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [photoId, setPhotoId] = useState("")

  useEffect(()=> {
    fetch('http://localhost:4000/thing')
    .then(res => res.json())
    .then(res => setData(res))
    
  }, [])

//isLoggedIn && isArtist ? render (routes) : render (less routes) <-- No need for passing info to each component?


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setPhotoId={setPhotoId} data={data}/>} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="signup" />
        <Route path="details" element={<Details data={data} photoId={photoId} />} />
        <Route path="profile" />
        <Route path="myprofile" />
        <Route path="post" />



      </Routes>
      
    </div>
  );
}

export default App;
