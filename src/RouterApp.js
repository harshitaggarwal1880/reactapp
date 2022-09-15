// import logo from './logo.svg';
import './App.css';

// import Car from "./Components/Classcomponent";
import State from "./Components/StateInput";      // Import state component
import Navbar from './Components/Navbar';     // Import Navbar component 
import DarkMode from './Components/DarkMode';   // Import DarkMode Component
import { useState } from 'react';
import Alert from './Components/Alert';



import {
  BrowserRouter as Router,
  // Switch,   latest version of react-router-dom does not need a "switch" and the structure is different, we use Routes in place of Switch. 
  Route,
  Routes
  // Link
} from "react-router-dom";
import React from 'react';





// All Changes we have to done in app.js, then using using this file index.js render this file to show main result


// Default React Screen function
// function App() {    
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App(){


  const [mode , setMode] = useState("light");


  const [alert, setAlert] = useState(null)

  const showAlert = (text , type) =>{
      setAlert({
          msg: text, 
          type: type
      })
      
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }





  const toggleMode = () =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042343";
      document.body.style.color="white";
      showAlert("Dark Mode has been Enabled", "success");   // show dismisable alert box 
      document.title="Textutils-DarkMode"   // change title on swiching dark mode
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color="black";
      showAlert("Dark Mode has been Disabled", "success");   // show dismisable alert box
      document.title="Textutils-LightMode"     // change title on switching light mode
    }
  }


  return(
    <Router> 
    <>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} /> 
        
        <Routes>

          <Route exact path="/about" element={      // we use exact path instead of path to get result by matching exact path of url, if we use Only path , then it show some times parent file results.
          <DarkMode/>    /* Component of testing dark on single component */}></Route>

          <Route exact path="/" element={
            <State heading="Text Area" mode={mode} showAlert={showAlert} />
          }></Route>

        </Routes>

    </>
    </Router>
  )
}




export default App;
