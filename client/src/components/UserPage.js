
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
    <div>
            <h1>{user.name}'s</h1>
            <h3>gym reviews</h3>
           

           </div>
    )
}

export default UserPage