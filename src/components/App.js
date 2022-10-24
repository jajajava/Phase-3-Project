import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from "./Home"
import Login from "./Login"


function App() {

  const [data, setData] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=> {
    fetch('http://localhost:4000/thing')
    .then(res => res.json())
    .then(res => setData(res))
    
  }, [])
console.log(data)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} data={data}/>} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="signup" />
        <Route path="details" />
        <Route path="profile" />
        <Route path="myprofile" />
        <Route path="post" />



      </Routes>
      
    </div>
  );
}

export default App;
