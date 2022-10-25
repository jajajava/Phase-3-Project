import React, { useState } from "react";

function Post(){

    const [tags, setNewTag] = useState([])
    const [tagInput, setTagInput] = useState("")


    function addTag(e){
        e.preventDefault()
        tags.push(tagInput)
        setNewTag(tags)
    }
console.log(tags)
    

    //Maybe pass the nameselector options down from myaccount?
    return(
        <div>
            <form>
                <label htmlFor="upload">Select an image </label>
                <input id="upload" type = "file" name = "upload" accept = "image/*" required/>

                <label htmlFor="nameselector">What name would you like to display on the main page? </label>
                <select id="nameselector" required>
                    <option>Name </option>
                    <option>Username </option>
                </select>

                <label htmlFor="title">Title </label>
                <input id="title" required></input>

                <label htmlFor="medium">Medium </label>
                <input id="medium" required></input>

                <h4>Optional fields:</h4>

                <label htmlFor="description">Description </label>
                <input id="description"></input>


                <label htmlFor="tags">Tags make your art easier to find! </label>
                <input onChange={(e)=> setTagInput(e.target.value)} class="tags"></input>
                <button onClick={addTag}>Add tag</button>


                <button>Post</button>
            </form>
        </div>
    )
}


export default Post