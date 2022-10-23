import '../App.css';
import Homepage from "./Homepage"
import React, { useEffect, useState } from 'react';

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
      <Homepage data={data}/>
      
    </div>
  );
}

export default App;
