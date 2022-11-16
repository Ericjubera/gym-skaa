import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import NewReview from "./newReviews"
import './Gyminfo.css'
import Reviews from "./reviews"
function GymInfo(){
    const [gym,setGym]=useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const params = useParams()
    const [user,setUser]=useState([])
    const [rev,revUser]=useState([])
    const {id} = params
    //   useEffect((id) => { 
    //     fetch(`/reviews/${id}`)
    //     .then(r => r.json())
    //       .then(revUser)
    //       console.log(revUser)
          
    //   }, [])
    function onDelete(id){
        let newCard=gym.reviews.filter((neww)=>neww.id !== id)
        setGym(newCard)
      }
       
    useEffect(() => { 
        fetch(`/users/${id}`)
        .then(r => r.json())
          .then(setUser)
          
      }, [id])
      
    

    useEffect(()=>{
        fetch(`/gyms/${id}`)
        .then(res => {
            if(res.ok){
                res.json()
               
                .then(gym => {
                   setGym(gym)
                   
                //  console.log(gym.reviews)
                 setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
      
       
    },[id])
    function addnew(newRev){
        // console.log(gym.reviews,':::::',newRev)
         setGym([...gym, newRev]);
     
     }
   
     
  
    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    // {gym.reviews.map((review)=> (
    //     <div  className="rev"  key={review.id}  >{review.review} - {review.stars} stars
      
    //     <button onSubmit={()=>onDelete(review.id)}>x</button> 
    //     {/* {console.log(review.id)} */}
    //     </div>
    // ))}
    
    return(
        
        <div className="">
            <h1 className="title">{gym.name}</h1>
            <img alt="sum" className="img" src={gym.image}></img>
            <p className="location">Location: {gym.location}</p>
            <p className="size"> size: {gym.size}</p>
            <p className="time"> opens {gym.open} - closed {gym.closed}</p>
 <NewReview className="newrev" user={user} gym={gym} addnew={addnew} />
 <h2 className="title2">All Reviews</h2> 
 {gym.reviews.map((reviews)=> (
              
                <Reviews className="revski" setGym={setGym} key={reviews.id} reviews={reviews} onDelete={onDelete}/>
                ))}
    
            
              
        </div>

    )
}export default GymInfo