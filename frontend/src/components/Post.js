import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"

function Post({setIsSignedIn, data, setData}){

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [medium, setMedium] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [targetValue, setTargetValue] = useState("set")
    const [tags, setNewTag] = useState([])
    const [tagInput, setTagInput] = useState("")
    const [tagToString, setTagToString] = useState('')
    const [errors, setErrors] = useState([])

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

    //Image
    function handleImage(e){
        setImage(e.target.value)
    }

    //Set price
    function handlePrice(e){

        setPrice(e.target.value)
    }

    //Price Select
    function handlePriceSelect(e){
        if (e.target.value === "set"){
            setTargetValue("set")
        } else {
            setTargetValue("negotiable")
            setPrice(1123581321340000)
        }
        
    }

    
    function addTag(e){
        e.preventDefault()
        tags.push(tagInput.toLowerCase())
        setNewTag(tags)
        alert(`Tag added! \n CURRENT TAGS: #${tags.join(' #')}`)
        setTagToString(`#${tags.join(' #')}`)
    }


    

    function remTag(e){
        e.preventDefault()
        setNewTag([])
        alert(`Tags cleared!`)
    }

    // console.log(title, medium, description, image, price)

    function makeThePost(e){
        
        e.preventDefault()
        
        
        fetch('http://127.0.0.1:8000/arts', {
            method: "POST",
            headers: {
                'content-type': "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            body: JSON.stringify({
                title: title,
                medium: medium,
                description: description,
                image: image,
                price: price,
                tags: tagToString,
                user_id: 10 //Fix later (settings too)
            })
        })
        .then(res => {
                res.json()
                .then(res => {setData([...data, res])})
                .then(() => navigate('/'))
            }
        )
        console.log(errors)

    }

    return(
        <div id="postAll">
            <div id="postHome"><Logo/></div>
            <form id="postForm" onSubmit={makeThePost}> 
                
                <label className="postLabel" htmlFor="postImage"> Please provide a link for the image: </label>
                <input id="postImage" onChange={handleImage} placeholder="image url" required></input>

                <label className="postLabel" htmlFor="postTitle"> Title: </label>
                <input onChange={handleTitle} id="postTitle" placeholder="title" required></input>

                <label className="postLabel" htmlFor="postMedium"> Medium: </label>
                <input onChange={handleMedium} id="postMedium" placeholder="medium" required></input>

                <label className="postLabel" htmlFor="postPriceSelector">Select pricing option:</label>
                <select onInput={handlePriceSelect} id="postPriceSelector">
                    <option value="set" className="postPriceSelectorOption">Set price</option>
                    <option value="negotiable" className="postPriceSelectorOption">Price negotiable</option>
                </select>
                {targetValue === "set"?
                <div id="setPriceDiv">
                <label className="postLabel" htmlFor="postPriceSelectorSet">Please provide a price (USD):</label>
                <input id="postPriceSelectorSet" onChange={handlePrice} placeholder="price" required></input>

                <h2 id="willBeEmail">Buyers will be able to contact you via email!</h2>
                </div>

                : targetValue === "negotiable" ?
                <div>
                    <h2 id="willBeEmail">Buyers will be able to contact you via email!</h2>
                </div>
                
                : null 
                }

                <h4 id="postOptFieldsH4"><span style={{color: "#9cffbe"}}>|-------------------------- <i>Optional fields:</i> --------------------------|</span></h4>

                <label className="postLabel" htmlFor="postDescription">Description:</label>
                <textarea onChange={handleDescription} id="postDescription" placeholder="description"></textarea>

                <label className="postLabel" htmlFor="postTags">Tags make your art easier to find! (Press add tag button to add to the list)</label>
                <input onChange={(e)=> setTagInput(e.target.value)} id="postTags" placeholder="tags"></input>
                <button id="postTagsAdder" onClick={addTag}>Add tag</button>
                <button id="postTagsClearer" onClick={remTag}>Clear all tags</button>

                <button id="postSubmit">Post</button>
            </form>
        </div>
    )
}

export default Post