import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
function GymInfo(){
    const [gyms,setGyms]=useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const params = useParams()
    const {id} = params


    useEffect(()=>{
        fetch(`/gyms/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(gyms => {  
                    setGyms(gyms)
                 console.log(gyms.reviews)
                 setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])
    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return(
        
        <div>
            <h1>{gyms.name}</h1>
            <img src={gyms.image}></img>
            <p>Location:{gyms.location}</p>
            <p> size :{gyms.size}</p>
            {/* {console.log(gyms.reviews)} */}
 <h2>reviews</h2> 
            {gyms.reviews.map((review)=> (
               
    
                   <div key={review.id} >{review.review}: {review.stars} stars</div>
            
               
               ))}
               
        </div>

    )
}export default GymInfo