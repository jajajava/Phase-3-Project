import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Post({setIsSignedIn}){

    const navigate = useNavigate()

    function takeMeHome(e){
        e.preventDefault()
        setIsSignedIn(true)
        navigate('/')
    }

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [medium, setMedium] = useState("")
    const [price, setPrice] = useState("")
    const [contact, setContact] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setNewTag] = useState([])
    const [tagInput, setTagInput] = useState("")
    const [targetValue, setTargetValue] = useState("set")
    
    

    //Image
    function handleImage(e){
        setImage(e.target.value)
    }
    
    //Selected name
    function handleName(e){
        setName(e.target.value)
    }

    //Title
    function handleTitle(e){
        setTitle(e.target.value)
    }

    //Medium
    function handleMedium(e){
        setMedium(e.target.value)
    }

    //Price Select

    function handlePriceSelect(e){
        setTargetValue(e.target.value)
    }

    //Set price
    function handlePrice(e){
        setPrice(e.target.value)
    }

    //Set contact
    function handleContact(e){
        setContact(e.target.value)
    }

    //Description
    function handleDescription(e){
        setDescription(e.target.value)
    }

    //Tags
    function addTag(e){
        e.preventDefault()
        tags.push(tagInput.toLowerCase())
        setNewTag(tags)
    }

   let timestamp = new Date().toLocaleString()

    console.log(image, name, title, medium, description, tags, contact, targetValue, timestamp)


    function makeThePost(e){

        fetch('http://localhost:4000/thing', {
            method: "POST",
            headers: {
                'content-type': "application/json"
                },
            body: JSON.stringify({
                image: image,
                name: name,
                title: title,
                medium: medium,
                price: price,
                contact: contact,
                description: description,
                tags: tags,
                timestamp: timestamp
            })
        })

        e.preventDefault()
        setIsSignedIn(true)
        navigate('/')
        
    }
    return(
        <div>
            <button onClick={takeMeHome}>Home</button>
            <form onSubmit={makeThePost}> 
                <label htmlFor="upload"> Please provide a link for the image: </label>
                <input onChange={handleImage} required></input>

                <label htmlFor="name"> Your name: </label>
                <input id="name" onChange={handleName} required></input>

                <label htmlFor="title"> Title: </label>
                <input onChange={handleTitle} id="title" required></input>

                <label htmlFor="medium"> Medium: </label>
                <input onChange={handleMedium} id="medium" required></input>

                <label htmlFor="price">Select pricing option</label>
                <select onInput={handlePriceSelect} id="priceselector">
                    <option value="set">Set price</option>
                    <option value="negotiable">Price negotiable</option>
                </select>
                {targetValue === "set"?
                <div>
                <label htmlFor="price">Please provide a price (USD):</label>
                <input id="price" onChange={handlePrice} required></input>
                <label htmlFor="contact">Please provide an email for buyers to contact you:</label>
                    <input id="contact" onChange={handleContact} required></input>
                </div>
                : targetValue === "negotiable" ?
                <div>
                    <label htmlFor="contact">Please provide an email for buyers to contact you:</label>
                    <input id="contact" onChange={handleContact} required></input>
                </div>
                : null 
                }
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