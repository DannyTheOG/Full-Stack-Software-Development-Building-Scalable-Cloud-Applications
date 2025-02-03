import { Link, useParams } from "react-router";


const users = {
  123: "john moore",
  456: "jane doe"
}

function UseParams() {
  const params = useParams()
  
  const user = users[params.id]

 return(
  <>
    <div>
      <Link to='/use-params/123'>john moore</Link>
    </div>
    <div>
      <Link to='/use-params/456'>jane doe</Link>
    </div>
    
    <h2>Welcome, {user}</h2>
    <p>Your ID is {params.id}</p>
  </>
 ) 
}


export default UseParams;