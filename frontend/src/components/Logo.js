import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../all-logos/1.png"
import logo2 from "../all-logos/2.png"
import logo3 from "../all-logos/3.png"
import logo4 from "../all-logos/4.png"
import logo5 from "../all-logos/5.png"
import logo6 from "../all-logos/6.png"
import logo7 from "../all-logos/7.png"
import logo8 from "../all-logos/8.png"

let arrayOfLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]
let logo = arrayOfLogos[Math.floor(Math.random()*arrayOfLogos.length)]

function Logo(){

    const navigate = useNavigate()

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    return(
        <div>
            <img onClick={takeMeHome} id="Logo" src={logo} alt="Broken logo" width="350" height="100" style={{"borderRadius": "8px"}}/>
        </div>
    )
}






export default Logo

// arrayOfImages[randomNum]