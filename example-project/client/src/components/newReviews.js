import { useState } from "react"
import './newReview.css'

export default function NewReview({user,gym,addnew}){
    const [formData,setFormData]=useState({review:"", stars:"",user_id:`${user.id}`,gym_id:`${gym.id}`})



function handleSubmit(e){
    // e.preventDefault()

    const newForm={
        review:formData.review,
        stars:formData.stars,
        user_id:`${user.id}`,
        gym_id:`${gym.id}`,
    }

    fetch("/reviews",{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify((newForm))
    
    }).then(res=>res.json())
    .then(addnew)
}

    const handleFormChange = (e) => {
        const { name,value } = e.target
        setFormData({ ...formData, [name]: value })
      }
      
    return(
        <div className="revski">
        <form  className="gym-form" onSubmit={handleSubmit}>
    <h2 className="titles">Leave a review</h2>
<input className="input" type="text" name="review" value={formData.review} onChange={handleFormChange} id="review" placeholder="review" ></input>
{/* <input type="text" name="stars" value={formData.stars} onChange={handleFormChange} id="stars" placeholder="1-5" ></input> */}
<div> rating
<select className="rating" type="text" name="stars" value={formData.stars} onChange={handleFormChange} id="" placeholder="review">
        
                    <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                 </select>
                 </div>
<button onSubmit={handleSubmit}  type = "submit" id= "submitBtn" className = "button2"> submit</button>
         </form>            
    </div>
    )
}