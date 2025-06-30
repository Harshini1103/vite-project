import React from "react";
import Student1 from "./student1";
import Student2 from "./student2";
import Destructuring from "./Destructuring";
import Statemanagement from "./Statemanagement";
import Statemanagement2 from "./Statemanagement2";//useState
import ChangeColor from "./changeColor";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

const App=()=>{
  let university="Marvel"
  return(
    <>
   {/* <Student1 university={university} bestFriend="Tony Stark" yearOfMovie={2003}/>
   <hr/>

   <Student2 university={university}/>
   <Destructuring university={university} bestFriend="Meghana"/> */}
   {/* <Statemanagement/> */}
 {/* <Statemanagement2/> */}
{/* <ChangeColor/> */}
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
    <Route path='/gallary' element={<Gallery/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
</Routes>
</BrowserRouter>



    </>
  )
}
export default App