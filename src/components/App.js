import '../App.css';
import Homepage from "./Homepage"
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {

  const [data, setData] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4000/thing')
    .then(res => res.json())
    .then(res => setData(res))
    
  }, [])
console.log(data)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage data={data}/>} />
        <Route path="log_in" />
        <Route path="sign_up" />
        <Route path="details" />
        <Route path="profile" />
        <Route path="my_profile" />
        <Route path="post" />



      </Routes>
      
    </div>
  );
}

export default App;
