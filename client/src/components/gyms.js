import "./gyms.css"
import { useHistory } from "react-router-dom";


function Gyms({gyms,onDelete}){
  const history = useHistory();
    const {id,name,location,size,image,open,closed} = gyms
    function handleDelete(){
        fetch(`/gyms/${id}`,{
          method:'DELETE'
        }).then(res=>res.json())
        .then(()=>onDelete(id))
       
      }
      function handleMoreInfoClick() {   
        history.push(`/${gyms.id}`);
      }
    return(

        
         <div key={gyms.id}  className="card">
           <div className="image-container">
        <img src={image} />
        </div>
          <div className="card-content">
        <div className="card-title"><h1>{name} </h1></div>
       
       
        <div className="card-body">
        <p>location:{location}</p>
        <p>size:{size} </p>
        <p>open:{open} closed:{closed}</p>
        </div>
        <div className="btn">
        <button onClick={()=>handleDelete(id)}><a>DELETE</a></button>
        <button onClick={handleMoreInfoClick}>More Info</button>
        </div>
        </div>
        </div>
  

    )
}export default Gyms 