import React, { useState } from 'react'

const ChangeColor = () => {
    const [bgColor,setBgColor]=useState('#4567ae');
    const getRandomcolor=()=>{
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        setBgColor(color)
    }
  return (
   <div>
   <div style={{backgroundColor:bgColor,
   width:'100vw',
   height:'100vh',
   display:'flex',
   alignItems:'center',
   justifyContent:'center'
   }}>
    <button onClick={()=>getRandomcolor()} style={{borderRadius:'20px',border:'none',padding:"10px 30px"}}>Change Color</button>
   </div>
   </div>
  )
}

export default ChangeColor
