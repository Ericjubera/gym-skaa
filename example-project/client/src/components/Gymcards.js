import { useState,useEffect } from "react";
import Gyms from "./gyms";
import NewGym from "./NewGym"
import { Card } from "semantic-ui-react";

function GymCards(){

    function onDelete(id){
        let newCard=gyms.filter((neww)=>neww.id !== id)
        setGyms(newCard)
      }
      const [gyms,setGyms]=useState([])

      function addnew(newRev){
        setGyms([...gyms,newRev]);
    }
    
      useEffect(() => { 
        fetch("/gyms")
        .then(r => r.json())
          .then(setGyms)
      }, [])
  
  



    // function onDelete(id){
    //     let newCard=gyms.filter((neww)=>neww.id !== id)
    //     gyms(newCard)}

        
  
  

      const cards=gyms.map((gyms)=>
    <Gyms key={gyms.id} onDelete={onDelete} gyms={gyms} />)
    



    return(
      <Card.Group itemsPerRow={2}>
        {/* <div className="ska"> */}
            {cards}
            <NewGym onDelete={onDelete} addnew={addnew} gyms={""}/>
        {/* </div> */}
        </Card.Group>
    )
}export default GymCards