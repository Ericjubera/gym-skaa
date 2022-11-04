import { useState,useEffect } from "react";
import Gyms from "./gyms";
function GymCards(){
    const [gyms,setGyms]=useState([])



    function onDelete(id){
        let newCard=gyms.filter((neww)=>neww.id !== id)
        gyms(newCard)}

        
    useEffect(() => { 
        fetch("/gyms")
        .then(r => r.json())
          .then(setGyms)
      }, [])

      const cards=gyms.map((gyms)=>
    <Gyms key={gyms.id} onDelete={onDelete} gyms={gyms} />)
    



    return(
        <div>uska
            {cards}
        </div>
    )
}export default GymCards