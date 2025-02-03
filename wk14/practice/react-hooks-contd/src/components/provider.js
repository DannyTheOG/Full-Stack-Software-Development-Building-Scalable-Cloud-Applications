import { useState } from "react";
import MyContext from "./context"; 

function MyProvider( props ) {
  const [data, setData] = useState("happy coding.");
  const value = { data, setData }

  return(
    <MyContext.Provider value={value}>
      {props.children}
    </MyContext.Provider>
  )
}


export default MyProvider;