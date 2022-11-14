import {useState, useEffect} from "react"
import {NavLink, useParams} from 'react-router-dom'
import NewReview from "./newReviews"
import { useHistory } from "react-router-dom";
import './Gyminfo.css'
function GymInfo(){
    const [gym,setGyms]=useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const params = useParams()
    const [user,setUser]=useState([])
    const {id} = params
    const history = useHistory();  


    // function handleMoreInfoClick() { 
       
    //     history.push(`/${gym.id}/${user.id}`);
    //   }

    function addnew(newRev){
        setGyms([...gym,newRev]);
    }

         
    useEffect(() => { 
        fetch(`/users/${id}`)
        .then(r => r.json())
          .then(setUser)
          
      }, [])
      
    

    useEffect(()=>{
        fetch(`/gyms/${id}`)
        .then(res => {
            if(res.ok){
                res.json()
               
                .then(gym => {
                   setGyms(gym)
                   console.log(gym)
                   
                //  console.log(gym.reviews)
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
        
        <div className="">
            <h1 className="title">{gym.name}</h1>
            <img className="img" src={gym.image}></img>
            <p className="location">Location: {gym.location}</p>
            <p className="size"> size: {gym.size}</p>
            <p className="time"> opens {gym.open} - closed {gym.closed}</p>
 <h2 className="title2">Reviews</h2> 
            {gym.reviews.map((review)=> (
               
    
                   <div className="rev" key={review.id} >{review.review} - {review.stars} stars</div>
            
               
               ))}
               <NewReview className="newrev" user={user} gym={gym} addnew={addnew}  />
               {/* <button onClick={handleMoreInfoClick }>review</button> */}
        </div>

    )
}export default GymInfo