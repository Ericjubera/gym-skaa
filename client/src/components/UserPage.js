
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


function UserPage(){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    // const [pipes,setPipes]=useState('')
    // const cards=user.map((pipe)=>
    // <Pipe  pipes={pipe} />)

    // useEffect(() => {
    //     fetch("/pipes")
    //       .then(r => r.json())
    //       .then(data => setPipes(data));
    //   }, []);

    //   useEffect(() => {
    //     fetch(`/pipes/`)
    //       .then(r => r.json())
    //       .then(data => setPipes(data));
    //   }, []);
     
      
   
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => { 
                    setUser(user)
                    setLoading(false)
                    console.log(user)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])
    

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <card>
            <h1>{user.name}'s</h1>
            <h3>Collection</h3>
{/*             
            {user.pipes.map(pipes => (
               
                <li>
                    <h2>{pipes.item_name}</h2>
                    <p>color {pipes.color}</p>
                    <img src={pipes.image}/>
                </li>
                ))} */}
             
                {/* <PipeCards></PipeCards> */}
               
           {/* <img src={user.pipes[1].image}/> */}
           {/* <img src={user.pipes[0].image}/> */}
           </card>
        
    )
}

export default UserPage