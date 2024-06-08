import { useState } from "react";
import ChangeTxt from "./ChangeTxt";
import Navbar from "./Navbar";
import Alert from "./Alert";
import About from "./About";
// import { Switch } from 'react-router'
import { Routes } from "react-router-dom";


import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";



function App(){
  const[alert,setalert]=useState(null);
  const [mode,setMode]=useState("light");

  const changemode=()=>{
    if(mode==="success"){
      document.body.style.backgroundColor="white";
      setMode("light");
    
    

    }
    else{
      setMode("success");
      document.body.style.backgroundColor="#455e41";
    }
    
  }
  const showAlert=(message,type)=>{
setalert({
  message,
  type
});

setTimeout(()=>{
  setalert(null)
},1000)
  }

  


  return(
<Router>



    <Navbar mode={mode} changemode={changemode} />
    <Alert text={alert}/>
    <div className="container">

    <Routes>

          

    <Route path="/about" element={<About />} />
    <Route path="/changeTxt" element={<ChangeTxt mode={mode} showAlert={showAlert}/>} />




    </Routes>
    </div>



</Router>

  )
}


export default App;