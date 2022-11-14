import { useState } from "react"
import {Form} from "../styled/Form"
import {useHistory} from "react-router-dom"

function Signup(){
const histroy=useHistory([])
const [formData,setFormData]=useState({
    name:'',
    password:'',
    age:''
})
const [errors,setErrors]=useState([])
const{name,password,age}=formData

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

function onSubmit(e){
    e.preventDefault()
    const user = {
        name,
        password,
        age
    }
    
   
    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                histroy.push(`/login`)
            })
        }else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })
   
}

return(
   
    <>

    <Form onSubmit={onSubmit}>
        <label>
            Username
        </label>
        <input type="text" name="name" value={name} onChange={handleChange} />
   
        <label>
            age
        </label>
        <input type="age" name="age" value={age} onChange={handleChange}></input>
        <label>
            password
        </label>
        <input type="password" name="password" value={password} onChange={handleChange}></input> 
        <input type='submit' value='Sign up' />
    </Form> 
     {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        
        </>
  
)}export default Signup