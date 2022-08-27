// import logo from './logo.svg';
import './App.css';


import State from "./Components/StateInput";      // Import state component
import Navbar from './Components/Navbar';     // Import Navbar component 



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
  return(
    <>
        <Navbar/>
        <State heading="Text Area"/> 
    </> 
  )
}




export default App;
