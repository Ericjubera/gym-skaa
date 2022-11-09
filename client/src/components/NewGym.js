import { useState } from "react"
export default function NewGym(){
        const [formData,setFormData]=useState({name:"", location:"",image:"",size:""})

function handleSubmit(){
        const newForm={
            name:formData.name,
            location:formData.location,
            image:formData.image,
            size:formData.size
        }
        fetch("/gyms",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify((newForm))
        })
        .then(res=>res.json())
        // .then(addnew)
    }

    const handleFormChange = (e) => {
        const { name,value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return(
        <div className> new gym 
        <form className="gym-form" onSubmit={handleSubmit}>
    <h2>Add your gym</h2>
<input type="text" name="name" value={formData.name} onChange={handleFormChange} id="name" placeholder="name" ></input>
<input type="text" name="image" value={formData.image} id="image" onChange={handleFormChange} placeholder="image" />
                <input type="text" name="location" value={formData.location} onChange={handleFormChange} id="location" placeholder="location" ></input>
                <input type="text" name="size" value={formData.size} onChange={handleFormChange} id="size" placeholder="size" ></input>
                {/* <input type="text" name="time" placeholder="time" ></input> */}
        <input type="submit" value="Create" id="create" />
        



        </form>            
    </div>

    )
    }