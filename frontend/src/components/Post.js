import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"

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
        alert(`Tag added! \n CURRENT TAGS: ${tags.join(' #')}`)
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
        <div id="postAll">
            <div id="postHome" onClick={takeMeHome}><Logo/></div>
            <form id="postForm" onSubmit={makeThePost}> 
                
                <label class="postLabel" htmlFor="postImage"> Please provide a link for the image: </label>
                <input id="postImage" onChange={handleImage} placeholder="image url" required></input>

                <label class="postLabel" htmlFor="postName"> Your name: </label>
                <input id="postName" onChange={handleName} placeholder="name" required></input>

                <label class="postLabel" htmlFor="postTitle"> Title: </label>
                <input onChange={handleTitle} id="postTitle" placeholder="title" required></input>

                <label class="postLabel" htmlFor="postMedium"> Medium: </label>
                <input onChange={handleMedium} id="postMedium" placeholder="medium" required></input>

                <label class="postLabel" htmlFor="postPriceSelector">Select pricing option:</label>
                <select onInput={handlePriceSelect} id="postPriceSelector">
                    <option value="set" class="postPriceSelectorOption">Set price</option>
                    <option value="negotiable" class="postPriceSelectorOption">Price negotiable</option>
                </select>
                {targetValue === "set"?
                <div id="setPriceDiv">
                <label class="postLabel" htmlFor="postPriceSelectorSet">Please provide a price (USD):</label>
                <input id="postPriceSelectorSet" onChange={handlePrice} placeholder="price" required></input>
                <label class="postLabel" htmlFor="postContact">Please provide an email for buyers to contact you:</label>
                    <input id="postContact" onChange={handleContact} placeholder="email" required></input>
                </div>
                : targetValue === "negotiable" ?
                <div>
                    <label class="postLabel" htmlFor="postContact">Please provide an email for buyers to contact you: </label>
                    <input id="postContact" onChange={handleContact} placeholder="email" required></input>
                </div>
                : null 

                
                }
                <label class="postLabel" htmlFor="postSize">Canvas size:</label>
                <input id="postSize" placeholder="size"></input>
                <h4 id="postOptFieldsH4"><span style={{color: "#9cffbe"}}>|-------------------------- <i>Optional fields:</i> --------------------------|</span></h4>

                <label class="postLabel" htmlFor="postDescription">Description:</label>
                <textarea onChange={handleDescription} id="postDescription" placeholder="description"></textarea>
                <label class="postLabel" htmlFor="postTags">Tags make your art easier to find! (Press add tag button to add to the list)</label>
                <input onChange={(e)=> setTagInput(e.target.value)} id="postTags" placeholder="tags"></input>
                <button id="postTagsAdder" onClick={addTag}>Add tag</button>

                <button id="postSubmit">Post</button>
            </form>
        </div>
    )
}

export default Post