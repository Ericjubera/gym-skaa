function Gyms({gyms,onDelete}){
    const {id,name,location,size,image} = gyms
    function handleDelete(){
        fetch(`/pipes/${id}`,{
          method:'DELETE'
        }).then(res=>res.json())
        .then(()=>onDelete(id))
      }
    return(
        <li>
         <div  className="plant-card">
        <h3>{name}</h3>
        <img className="uska" src={image} />
       
        <div className="plant-flex">
        <p>location: <span>{location}</span></p>
        <p>size: <span>{size}</span> </p>
        <button onClick={()=>handleDelete(id)}>remove</button>
    
        </div>
    </div>
    </li>
    )
}export default Gyms 