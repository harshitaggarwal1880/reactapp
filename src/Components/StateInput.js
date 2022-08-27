// import React from "react";

import React, {useState} from 'react';




export default function StateInput(props) {
  
  const Click = ()=>{
    // console.log("Uppercase was clicked");

    setText(text.toUpperCase());     // here using setText method, we set the changes in text state

  }

  const Changefunc = (event)=>{       // In react , in event listener return an event object , by using event object , we can use element properties/attributes
    
    
    setText(event.target.value);      // here we get value of input after changing/typing using event object 
    
    
    // console.log(text);

  }



  const [text, setText] = useState("InitiGFal text");   // state
  // text = "new text";  // Wrong way to change the state
  // setText("text change")  // correct method to change the state 
  
  
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
        
        ></textarea>

      </div>

      <button className='btn btn-primary' onClick={Click}> Convert to Uppercase </button> 
      
    </div>
  );
}
