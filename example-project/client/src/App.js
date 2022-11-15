
import './App.css';
import { useState, useEffect } from "react";
// import {Route,Switch} from "react-dom"
import Navbar from './components/nav';
import Signup from './components/Signup';
import {Route,Switch} from "react-router-dom";
import Login from './components/login'
import UserPage from './components/UserPage';
import GymCards from './components/Gymcards';
import GymInfo from './components/GymInfo'
import NewReview from './components/newReviews';

 

function App() {
  const [currentUser,setCurrentUser]=useState(false)
  
 


 




  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  const updateUser = (user) => setCurrentUser(user)

  // useEffect(()=>{
  //   fetch("/gyms")
  //   .then((r)=>r.json())
  //   .then((data) => console.log(data));
  // },[])
  useEffect(()=>{
    fetch("/authorized_user")
    .then(res=>{
      if(res.ok){
        res.json().then(user=>{
          updateUser(user)
        })
      }
    })
  },[])

  return (
  <div>
 <Navbar updateUser={updateUser}/>
 { !currentUser? <Login error={'please login'} updateUser={updateUser} /> :
 <Switch>
  <Route exact path="/signup">
 <Signup updateUser={updateUser}/>
 </Route>
 <Route exact path="/login">
 <Login updateUser={updateUser}/>
 </Route>
 <Route exact path="/gyms">
 <GymCards updateUser={updateUser} />
 </Route>
 <Route exact path='/users/:id'>
        <UserPage  />
      </Route>
      <Route exact path="/:id">
          <GymInfo />
        </Route>
        <Route exact path="/:id/:id">
          <NewReview  updateUser={updateUser}/>
        </Route>
    
 </Switch>
}
 </div>
  );
}

export default App;
// import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route path="/testing">
//             <h1>Test Route</h1>
//           </Route>
//           <Route path="/">
//             <h1>Page Count: {count}</h1>
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



