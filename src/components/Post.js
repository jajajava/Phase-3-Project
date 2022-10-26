import React, { useState } from "react";
import { useNavigate } from "react-router";

function Post({setData}){

    const navigate = useNavigate()

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    const [image, setImage] = useState("")
    const [selectedName, setSelectedName] = useState("Username")
    const [title, setTitle] = useState("")
    const [media, setMedia] = useState("")
    const [price, setPrice] = useState("")
    const [contact, setContact] = useState("")
    const [bid, setBid] = useState([])
    const [bidDays, setBidDays] = useState(7)
    const [description, setDescription] = useState("")
    const [tags, setNewTag] = useState([])
    const [tagInput, setTagInput] = useState("")
    const [targetValue, setTargetValue] = useState("set")
    
    var someDate = new Date();
    var numberOfDaysToAdd = parseInt(bidDays);
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd); //POST result
    let finalDate = new Date(result)
    console.log(finalDate)

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

    //Media
    function handleMedia(e){
        setMedia(e.target.value)
    }

    //Price Select

    function handlePriceSelect(e){
        setTargetValue(e.target.value)
    }
        
        // if (e.target.value === "set"){
        //     return (
        //     <div>
        //         <label htmlFor="price">Please provide a price:</label>
        //         <input id="price" onChange={handlePrice} required></input>
        //     </div>
        //     )
        // } else if (e.target.value === "negotiable"){
        //     return (
        //         <div>
        //             <label htmlFor="contact">Please provide a method for buyers to contact you:</label>
        //             <input id="contact" onChange={handleContact} required></input>
        //         </div>
        //             )
        // } else if (e.target.value === "bid"){
        //     return (
        //         <div>
        //             <label htmlFor="bid">Starting bid:</label>
        //             <input id="startbid" onChange={handleBid}></input>
        //             <label htmlFor="days">Number of days for bidding:</label>
        //             <input id="days" onChange={handleBidDays}></input>
        //         </div>
        //     )
        
    // }


    //Set price
    function handlePrice(e){
        setPrice(e.target.value)
    }

    //Set contact
    function handleContact(e){
        setContact(e.target.value)
    }

    //Set starting bid
    function handleBid(e){
        setBid(e.target.value)
    }

    //Set days for bid
    function handleBidDays(e){
        setBidDays(e.target.value)
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

    console.log(image, selectedName, title, media, description, tags)


    function makeThePost(){
        
        fetch('http://localhost:4000/thing', {
            method: "POST",
            headers: {
                'content-type': "application/json"
                },
            body: JSON.stringify({
                image: image,
                selectedName: selectedName,
                title: title,
                media: media,
                price: price,
                contact: contact,
                bid: bid,
                bidends: finalDate,
                description: description,
                tags: tags
            })
        })
        navigate('/')
        
    }
    

    //Maybe pass the nameselector options down from myaccount?
    
    return(
        <div>
            <button onClick={takeMeHome}>Home</button>
            <form onSubmit={makeThePost}> 
                <label htmlFor="upload">Select an image </label>
                <input id="upload" type = "file" name = "upload" accept = "image/*" onChange={handleUpload} required/>

                <label htmlFor="nameselector">What name would you like to display on the main page? </label>
                <select onChange={handleName} id="nameselector" required>
                    <option>Username </option>
                    <option>Name </option>
                </select>

                <label htmlFor="title">Title </label>
                <input onChange={handleTitle} id="title" required></input>

                <label htmlFor="media">Media </label>
                <input onChange={handleMedia} id="media" required></input>

                <label htmlFor="price">Select pricing option</label>
                <select onInput={handlePriceSelect} id="priceselector">
                    <option value="set">Set price</option>
                    <option value="negotiable">Price negotiable</option>
                    <option value="bid">Open bid</option>
                </select>
                {targetValue === "set"?
                <div>
                <label htmlFor="price">Please provide a price:</label>
                <input id="price" onChange={handlePrice} required></input>
                </div>
                : targetValue === "negotiable" ?
                <div>
                    <label htmlFor="contact">Please provide a method for buyers to contact you:</label>
                    <input id="contact" onChange={handleContact} required></input>
                </div>
                : targetValue === "bid" ? 
                <div>
                    <label htmlFor="bid">Starting bid (USD): </label>
                    <input id="startbid" onChange={handleBid} required></input>
                    <label htmlFor="days"> Number of days for bidding: </label>
                    <input id="days" onChange={handleBidDays} required></input>
                </div> : null 

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