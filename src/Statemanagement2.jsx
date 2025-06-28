// import React, { useState } from 'react'

// const Statemanagement2 = () => {
   
//     const [count,setCount]=useState(0)

//   return (
//     <>
//    <h1>No.of Students :<b>{count}</b></h1>
//     <button style={{color:'red'}} onClick={()=>setCount(count+1)}>Click here❤</button>
//     <p></p>
//     </>
   
//   )
// }   

// export default Statemanagement2
import React,{useState} from 'react'
const Statemanagement2=()=>{
  const [count,setCount]=useState(0)
return(
  <>
  <h1>Total number of Students Increasing and Decreasing:{count}</h1>
  <button onClick={()=>setCount(count+1)}>➕</button>
<button onClick={()=>setCount(count-1)}>➖</button>
  </>
)

}
export default Statemanagement2