import "./App.css";
import NavBar from "./components/NavBar.js" ;
import React, { useState } from 'react';
import Alert from "./components/Alert.js";
// import About from "./components/About.js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
   const [mode, setmode] = useState('light');
   const [alert, setalert] = useState(null);
   const showalert=(message,type)=>{
    setalert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1100);
   }
   
   const togglemode=()=>{
    if ( mode === 'light')
    {setmode('dark');
     document.body.style.backgroundColor = '#2c3136';
     showalert('Dark mode is enabled','success');
     document.title='Jithin kalyan- Dark mode'
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('light mode is enabled','success');
      document.title='Jithin kalyan- light mode'
    }
   }

  return (
    <>
    {/* <Router> */}
    <NavBar title= "Jithin kalyan Tadaka " mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
        {/* <Routes>
        <Route exact path="/about" element={<About />} />
              
        </Routes> */}
    {/* </Router> */}
    
    </>
  );
}

export default App;
