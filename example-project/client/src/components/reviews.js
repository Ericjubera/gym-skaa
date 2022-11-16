import "./review.css"
export default function Reviews({reviews,onDelete,setGym}){
    const {id,stars,review} = reviews

    // function handleDelete(){
    //     fetch(`/reviews/${id}`,{
    //       method:'DELETE'
    //     }).then(res=>res.json())
    //     .then(()=>onDelete(id))
    //     .then((deleting) => {
    //       const remainingRooms = reviews.filter(
    //         (deletedRoom) => deletedRoom.id !== id
    //       );
    //           // Reset the rooms state
    //           setGym(remainingRooms)})
       
    //   }
      const funremove=((id)=>{
        if(window.confirm("Are you sure you want to remove")){
          fetch(`reviews/${id}`,{method:"DELETE"
          }).then(()=>{
            window.location.reload()
          }).catch((err)=>{
            console.log(err.message)
          })


        }
      })
return(
    

<div  className="rev"  key={id} > {review} - rating score {stars} 

     {/* <button onClick={()=>handleDelete(id)}>remove</button>  */}
     <button className="button" onClick={()=>(funremove(id))}>remove</button>
</div>
)}