// import React from "react";


// What Is State ? 

// React components has a built-in state object.

// The state object is where you store property values that belongs to the component.

// When the state object changes, the component re-renders.
   

// syntax for class based component and function based component is little bit change 

// In this file , we talk about state for function based conmponent 





import React, {useState} from 'react';    // here we import useState hook from react 

// Hooks  : Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. means hook are very usefull for function based components



// What is React useState Hook ? 

// The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.




export default function StateInput(props) {
  
  const Click = ()=>{
    // console.log("Uppercase was clicked");

    setText(text.toUpperCase());     // here using setText method, we set the changes in text state

    // setCar({color: "Blue"});   // here we change property of state car object 

    props.showAlert("Converted to UpperCase", "success")

  }


  const Click2 = () =>{


      setText(text.toLowerCase())

      props.showAlert("Converted to LowerCase", "success")


  }


  const Click3 = () =>{

    setText("")

    props.showAlert("All Text has been Cleared", "success")


  }



  const Changefunc = (event)=>{       // In react , in event listener return an event object , by using event object , we can use element properties/attributes
    
    setText(event.target.value);      // here we get value of input after changing/typing using event object 
    
    // console.log(text);
  }



  const [text, setText] = useState("InitiGFal text");   // state 
  // text = "new text";  // Wrong way to change the state
  // setText("text change")  // correct method to change the state 
  
  // const[car, setCar] = useState({    // set object
  //   brand: "Ford", 
  //   model: "Mustang",
  //   year: 1903,
  //   color: "red"
  // });


  
  return (
    <div className="container">
      <div className="form-group m-3">
        <h1>{props.heading}</h1>   
        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}  
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={Changefunc}
          style={{backgroundColor: props.mode==="dark" ? "#141619" : "white" , color: props.mode==="light" ? "black" : "white"}}
        
        ></textarea>

      </div>

      <button className='btn btn-primary m-1' onClick={Click}> Convert to Uppercase </button> 

      <button className='btn btn-primary m-1' onClick={Click2}> Convert to Lowercase </button> 

      <button className='btn btn-primary m-1' onClick={Click3}> Clear </button> 

      <h3 className='m-3'> Text Summary </h3> 

      <p className='m-3'> {text.split(" ").length} Words and {text.length} Characters </p> 

      <h3 className='m-3'>Preview</h3> 

      <p> {text.length>0 ? text : "Please Enter Some Text"} </p>


    </div>
  );
}
