import React from "react";
import Student1 from "./student1";
import Student2 from "./student2";
import Destructuring from "./Destructuring";
import Statemanagement from "./Statemanagement";
import Statemanagement2 from "./Statemanagement2";//useState




const App=()=>{
  let university="Marvel"
  return(
    <>
   {/* <Student1 university={university} bestFriend="Tony Stark" yearOfMovie={2003}/>
   <hr/>

   <Student2 university={university}/>
   <Destructuring university={university} bestFriend="Meghana"/> */}
   {/* <Statemanagement/> */}
 <Statemanagement2/>
    </>
  )
}
export default App;