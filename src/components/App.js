import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from "./Home"
import Signin from "./Signin"
import Details from "./Details"
import Post from "./Post"


function App() {

  const [data, setData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [photoId, setPhotoId] = useState("")
  const [amazonImage, setAmazonImage] = useState("")

  useEffect(()=> {
    fetch('http://localhost:4000/thing')
    .then(res => res.json())
    .then(res => {setData(res); setSearchedData(res); setIsSignedIn(false)})
    
  }, [])
  console.log(data)
  console.log(isSignedIn)

  
    fetch(`https://tqsmeseh4l.execute-api.us-east-2.amazonaws.com/dev/imagestorage11/9.png`)
    .then(res => res.json())
    .then(res => console.log(res))

//isLoggedIn && isArtist ? render (routes) : render (less routes) <-- No need for passing info to each component?


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setPhotoId={setPhotoId} data={data} setData={setData} searchedData={searchedData} setSearchedData={setSearchedData}/>} />
        <Route path="signin" element={<Signin setIsSignedIn={setIsSignedIn}/>} />
        <Route path="details" element={<Details data={data} photoId={photoId} />} />
        <Route path="profile" />
        <Route path="post" element={<Post isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />

      </Routes>
      
    </div>
  );
}

export default App;
