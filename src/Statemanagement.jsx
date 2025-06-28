import React from 'react'

const Statemanagement = () => {

    let fruitsName=["Apple","Mango","Banana","Grapes","orange","Pineapple"]
  return (
   <>
   {/* {fruitsName.map(name=>{
    return<>
    <li>{name}</li></>
   })} */}
   {/* without return approach */}
   {fruitsName.map(names=>(<><li style={{color:'red'}}>{names}</li></>))}
   </>

  )
}

export default Statemanagement