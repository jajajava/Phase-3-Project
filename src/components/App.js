import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from "./Home"
import Signin from "./Signin"
import Details from "./Details"
import Myaccount from "./Myaccount"
import Post from "./Post"


function App() {

  const [data, setData] = useState([])
  // const [newData, setNewData] = useState(data)
  const [searchedData, setSearchedData] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [photoId, setPhotoId] = useState("")

  useEffect(()=> {
    fetch('http://localhost:4000/thing')
    .then(res => res.json())
    .then(res => {setData(res); setSearchedData(res)})
    
  }, [])
  console.log(data)
  console.log(isSignedIn)

//isLoggedIn && isArtist ? render (routes) : render (less routes) <-- No need for passing info to each component?


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setPhotoId={setPhotoId} data={data} searchedData={searchedData} setSearchedData={setSearchedData}/>} />
        <Route path="signin" element={<Signin setIsSignedIn={setIsSignedIn}/>} />
        <Route path="signup" />
        <Route path="details" element={<Details data={data} photoId={photoId} />} />
        <Route path="profile" />
        <Route path="myaccount" element={<Myaccount />} />
        <Route path="post" element={<Post isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />



      </Routes>
      
    </div>
  );
}

export default App;
