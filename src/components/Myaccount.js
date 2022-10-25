import React from "react";
import { useNavigate } from "react-router";

function Myaccount(){

    const navigate = useNavigate()

    return (
        <div>
            <button onClick={()=> navigate('/') }>Home</button>
            <h1>hello</h1>

        </div>
    )
}






export default Myaccount