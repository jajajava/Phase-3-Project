import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Logo from "./Logo"
import Card from "./Card"

function Myaccount({setPhotoId, currentUser, isSignedIn}){

    const navigate = useNavigate()
    const [userArts, setUserArts] = useState([])
    const [userData, setUserData] = useState({})

    function handlePost(e){
        e.preventDefault()
        navigate('/Post')
    }

    //Change "userId" to a state that's set when logged in
    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/users/${currentUser.id}`)
        .then(res => res.json())
        .then(res => {setUserArts(res.arts.reverse()); setUserData(res)})}, [])
    
        console.log(userData)
        return (
            <div id="myAccountAll">
                <div id="myAccountHome"><Logo/></div>
                <h1 id="myAccountName"><span style={{color: "#80ffd0"}}>Welcome, {userData.name}.</span></h1>
                <h1 id="myAccountBio">{userData.bio}</h1>
                {userArts.length > 0 ? 
                <div id="cardholder3">
                {userArts.map((each) => (<div id="cell"><Card isSignedIn={isSignedIn} setPhotoId={setPhotoId} key={each.id} each={each}/></div>))}
                </div> 
                : <div>
                    <h1 id="myAccountNoPosts">You haven't posted yet! </h1>
                    <button class="greenButton" id="makePost" onClick={handlePost}>Make a post</button>
                </div>
                }
            </div>
        )
}






export default Myaccount