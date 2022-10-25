import React, { useState } from "react";

function Post(){

    const [image, setImage] = useState("")
    const [selectedName, setSelectedName] = useState("")
    const [title, setTitle] = useState("")
    const [medium, setMedium] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setNewTag] = useState([])
    const [tagInput, setTagInput] = useState("")
    

    //Image
    function handleUpload(e){
        setImage(e.target.value)
    }

    //Selected name
    function handleName(e){
        setSelectedName(e.target.value)
    }

    //Title
    function handleTitle(e){
        setTitle(e.target.value)
    }

    //Medium
    function handleMedium(e){
        setMedium(e.target.value)
    }

    //Description
    function handleDescription(e){
        setDescription(e.target.value)
    }

    //Tags
    function addTag(e){
        e.preventDefault()
        tags.push(tagInput)
        setNewTag(tags)
    }

    console.log(image, selectedName, title, medium, description, tags)


    // function makeThePost(e){
    //     fetch('http://localhost:4000/thing', {
    //         method: "POST",
    //         headers: {
    //             'content-type': "application/json"
    //             },
    //         body: JSON.stringify({
    //             name: nameselector,

    //         })
    //     })
    // }
    

    //Maybe pass the nameselector options down from myaccount?
    // onSubmit={makeThePost}
    return(
        <div>
            <form > 
                <label htmlFor="upload">Select an image </label>
                <input id="upload" type = "file" name = "upload" accept = "image/*" onChange={handleUpload} required/>

                <label htmlFor="nameselector">What name would you like to display on the main page? </label>
                <select onChange={handleName} id="nameselector" required>
                    <option>Name </option>
                    <option>Username </option>
                </select>

                <label htmlFor="title">Title </label>
                <input onChange={handleTitle} id="title" required></input>

                <label htmlFor="medium">Medium </label>
                <input onChange={handleMedium} id="medium" required></input>

                <h4>Optional fields:</h4>

                <label htmlFor="description">Description </label>
                <textarea onChange={handleDescription} id="description"></textarea>


                <label htmlFor="tags">Tags make your art easier to find! (Press add tag button to add to the list)</label>
                <input onChange={(e)=> setTagInput(e.target.value)} className="tags"></input>
                <button onClick={addTag}>Add tag</button>


                <button>Post</button>
            </form>
        </div>
    )
}


export default Post