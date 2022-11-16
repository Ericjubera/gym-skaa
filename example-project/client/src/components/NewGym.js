import { useState } from "react"
import './Form.css'
export default function NewGym({addnew}){
        const [formData,setFormData]=useState({name:"", location:"",image:"",size:"",open:"",closed:""})

function handleSubmit(e){
    e.preventDefault()
        const newForm={
            name:formData.name,
            location:formData.location,
            image:formData.image,
            size:formData.size,
            open:formData.open,
            closed:formData.closed
        }
        fetch("/gyms",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify((newForm))
        })
        .then(res=>res.json())
        .then(addnew)
    }

    const handleFormChange = (e) => {
        const { name,value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return(
        <div className = "form-box">
        <h5 className = "form-step"> add a new gym</h5>
        <form onSubmit={handleSubmit}>
            
            <div className = "field1">
            <label className="gyminfo">gym info</label>
            <input placeholder="Name" value={formData.name} name='name' onChange={handleFormChange} id="name"/> 
            <input type="text" name="image" value={formData.image} id="image" onChange={handleFormChange} placeholder="image" />       
            <input type="text" name="size" value={formData.size} onChange={handleFormChange} id="size" placeholder="size"></input>
            <input type="text" name="location" value={formData.location} onChange={handleFormChange} id="location" placeholder="location" ></input>
            <div className="location"> opening time-
            <select  name="open" value={formData.open} onChange={handleFormChange} placeholder="open time ">
        
                    <option>1am</option>
                     <option>2am</option>
                     <option>3am</option>
                     <option>4am</option>
                     <option>5am</option>
                     <option>6am</option>
                     <option>7am</option>
                     <option>8am</option>
                     <option>9am</option>
                     <option>10am</option>
                     <option>11am</option>
                     <option>12am</option>
                 </select>

                 closing time-
                 <select className="select" name="closed" value={formData.closed} onChange={handleFormChange} placeholder="closed time">
                 <option>1pm</option>
                     <option>2pm</option>
                     <option>3pm</option>
                     <option>4pm</option>
                     <option>5pm</option>
                     <option>6pm</option>
                     <option>7pm</option>
                     <option>8pm</option>
                     <option>9pm</option>
                     <option>10pm</option>
                     <option>11pm</option>
                     <option>12pm</option>
                 </select>
                 </div>
            {/* <textarea type="text" name="location" value={formData.location} onChange={handleFormChange} id="location" placeholder="location"/> */}
            </div>

            <button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button>
        </form>

    </div>
      
//         <div className> 
//         <form className="gym-form" onSubmit={handleSubmit}>
//     <h2>Add a gym</h2>
// <input type="text" name="name" value={formData.name} onChange={handleFormChange} id="name" placeholder="name"></input>
// <input type="text" name="image" value={formData.image} id="image" onChange={handleFormChange} placeholder="image" />
//                 <input type="text" name="location" value={formData.location} onChange={handleFormChange} id="location" placeholder="location" ></input>
//                 <input type="text" name="size" value={formData.size} onChange={handleFormChange} id="size" placeholder="size"></input>
//                 <select name="open" value={formData.open} onChange={handleFormChange} placeholder="open time "> 
//                     <option>1am</option>
//                     <option>2am</option>
//                     <option>3am</option>
//                     <option>4am</option>
//                     <option>5am</option>
//                     <option>6am</option>
//                     <option>7am</option>
//                     <option>8am</option>
//                     <option>9am</option>
//                     <option>10am</option>
//                     <option>11am</option>
//                     <option>12am</option>
//                 </select>
//                 <select name="closed" value={formData.closed} onChange={handleFormChange} placeholder="closed time">
//                 <option>1pm</option>
//                     <option>2pm</option>
//                     <option>3pm</option>
//                     <option>4pm</option>
//                     <option>5pm</option>
//                     <option>6pm</option>
//                     <option>7pm</option>
//                     <option>8pm</option>
//                     <option>9pm</option>
//                     <option>10pm</option>
//                     <option>11pm</option>
//                     <option>12pm</option>
//                 </select>
//                 {/* <input type="text" name="open" value={formData.open} onChange={handleFormChange} id="open" placeholder="open"></input>
//                 <input type="text" name="closed" value={formData.closed} onChange={handleFormChange} id="closed" placeholder="closed"></input> */}
//         <input type="submit" value="Create" id="create"/>
//         </form>            
//     </div>

    )
    }