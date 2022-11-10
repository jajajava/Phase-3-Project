import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from "./Home"
import Signin from "./Signin"
import Signup from "./Signup"
import Details from "./Details"
import Profile from "./Profile"
import Post from "./Post"
import Settings from './Settings'
import Myaccount from './Myaccount';
import UpdatePage from './UpdatePage';


function App() {

  const [data, setData] = useState([])
  const [getById, setGetById] = useState({})
  const [searchedData, setSearchedData] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [photoId, setPhotoId] = useState("")
  const [email, setEmail] = useState('')
  const [userId, setUserId] = useState('')
  const [toDelete, setToDelete] = useState(null)
  const [currentUser, setcurrentUser] = useState(10)
  const [thingToUpdate, setThingToUpdate] = useState('')

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/arts')
    .then(res => res.json())
    .then(res => {setData(res); setSearchedData(res.reverse()); setIsSignedIn(false)})
    
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/arts')
    .then(res => res.json())
    .then(res => {setSearchedData(res.reverse())})
}, [data])

useEffect(()=> {
  fetch(`http://127.0.0.1:8000/arts/${toDelete}`, {
      method: "DELETE"
  })
  setSearchedData(data)
},[toDelete]) //FIGURE OUT WHAT'S WRONG WITH DELETE

console.log(getById)



//isLoggedIn && isArtist ? render (routes) : render (less routes) <-- No need for passing info to each component?


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setPhotoId={setPhotoId} data={data} setData={setData} searchedData={searchedData} setSearchedData={setSearchedData} setToDelete={setToDelete} photoId={photoId}/>} />
        <Route path="signin" element={<Signin setIsSignedIn={setIsSignedIn}/>} />
        <Route path="signup" element={<Signup />} />
        <Route path="details" element={<Details setUserId={setUserId} data={data} photoId={photoId} getById={getById} setGetById={setGetById} email={email} setEmail={setEmail} />} />
        <Route path="profile" element={<Profile userId={userId} photoId={photoId} data={data} setPhotoId={setPhotoId} email={email}/>} />
        <Route path="post" element={<Post data={data} setData={setData} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
        <Route path='settings' element={<Settings currentUser={currentUser} />} />
        <Route path="myaccount" element={<Myaccount setPhotoId={setPhotoId} isSignedIn={isSignedIn}/>} />
        <Route path="update" element={<UpdatePage />} />

      </Routes>
      
    </div>
  );
}

export default App;
