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
  const [currentUser, setCurrentUser] = useState({})
  const [toDelete, setToDelete] = useState(null)
  const [updateSelection, setUpdateSelection] = useState('')
  const token = localStorage.getItem('jwt')

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/arts')
    .then(res => res.json())
    .then(res => {setData(res); setSearchedData(res.reverse());})
    
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/arts')
    .then(res => res.json())
    .then(res => {setSearchedData(res.reverse())})
}, [data])

useEffect(()=> {
  fetch(`http://127.0.0.1:8000/arts/${toDelete}`, {
      method: "DELETE",
      headers: {
        'content-type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
  })
    .then(res => {
    res.json()
    .then(res => {setData([...data.splice(res)]); setSearchedData([...data.splice(res).reverse()])})
}
    )}
,[toDelete])


useEffect(()=> {token !== null ?
  fetch('http://127.0.0.1:8000/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(res => {setCurrentUser(res); setIsSignedIn(true)})
  : setIsSignedIn(false)}, [isSignedIn])
  console.log(currentUser)

console.log(getById)
console.log(data)
console.log(updateSelection)
console.log(token, isSignedIn)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} setPhotoId={setPhotoId} data={data} setData={setData} searchedData={searchedData} setSearchedData={setSearchedData} photoId={photoId} currentUser={currentUser} setToDelete={setToDelete}/>} />
        <Route path="signin" element={<Signin setCurrentUser={setCurrentUser} setIsSignedIn={setIsSignedIn}/>} />
        <Route path="signup" element={<Signup setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser}/>} />
        <Route path="details" element={<Details setUserId={setUserId} data={data} photoId={photoId} getById={getById} setGetById={setGetById} email={email} setEmail={setEmail} />} />
        <Route path="profile" element={<Profile userId={userId} photoId={photoId} data={data} setPhotoId={setPhotoId} email={email}/>} />
        <Route path="post" element={<Post data={data} setData={setData} setSearchedData={setSearchedData} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} currentUser={currentUser} />} />
        <Route path='settings' element={<Settings currentUser={currentUser} setUpdateSelection={setUpdateSelection} />} />
        <Route path="myaccount" element={<Myaccount currentUser={currentUser} setCurrentUser={setCurrentUser} setPhotoId={setPhotoId} isSignedIn={isSignedIn} setToDelete={setToDelete}/>} />
        <Route path="update" element={<UpdatePage updateSelection={updateSelection} currentUser={currentUser} />} />

      </Routes>
      
    </div>
  );
}

export default App;
