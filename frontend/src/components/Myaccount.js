import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Logo from "./Logo"
import Card from "./Card"


function Myaccount({setPhotoId, isSignedIn}){

    const navigate = useNavigate()
    const [userArts, setUserArts] = useState([])
    const [userData, setUserData] = useState({})

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    //Change "userId" to a state that's set when logged in
    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/users/${10}`)
        .then(res => res.json())
        .then(res => {setUserArts(res.arts.reverse()); setUserData(res)})}, [])
    
        return (
            <div id="myAccountAll">
                <div id="myAccountHome" onClick={takeMeHome}><Logo/></div>
                <h1 id="myAccountName"><span style={{color: "#80ffd0"}}>Welcome, {userData.name}.</span></h1>
                <div id="cardholder3">
                {userArts.map((each) => (<div id="cell"><Card isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each}/></div>))}
                </div>
            </div>
        )
}






export default Myaccount