import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './newReview.css'
function EditReview(updateProduction){
    const [review, setReview] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const history = useHistory()
    const [formData,setFormData]=useState({
        stars:"",
        review:""
    })
    function onSubmit(e){
        e.preventDefault()
        //PATCH to `/productions/${id}`
        fetch(`/reviews/${id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(updateProduction)
            history.goBack()
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }
    
     
      
   
    // const params = useParams()
    // const {id} = params
    const {id} = useParams()


    useEffect(()=>{
        fetch(`/reviews/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(review => { 
                    setReview(review)
                    setLoading(false)
                    .then(setFormData)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])
    const handleFormChange = (e) => {
        const { name,value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    

    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <div className='john'>
        {/* <h1>{user.name}'s</h1> */}
        <h3>Current review</h3>  
        <p>review-{review.review}</p>
        <p>Rating score - {review.stars}</p>     
    </div>
        <div className='App'>
      {errors?errors.map(e => <div>{e}</div>):null}
      <div className="revski">
        <form  className="gym-form" onSubmit={onSubmit}>
    <h2 className="titles">update review</h2>
<input className="input" type="text" name="review" value={formData.review} onChange={handleFormChange} id="review" placeholder="review" ></input>

<div> update Rating
<select className="rating" type="text" name="stars" value={formData.stars} onChange={handleFormChange} id="" placeholder="review">
        
                    <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                 </select>
                 </div>
<button onSubmit={onSubmit}  type = "submit" id= "submitBtn" className = "button2"> submit</button>
         </form>            
    </div>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
 
    </div>
    )
}
export default EditReview