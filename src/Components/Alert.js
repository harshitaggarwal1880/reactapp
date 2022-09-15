import React from 'react'
import "./Alert.css"


function Alert(props) {
    

    const capitalise = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  
    return (
    
    // here we use js logical operation to check props.alert is nul , then JSX will not evaluate , otherwise it run. 
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong> {capitalise(props.alert.type)} </strong> : {props.alert.msg} 
    </div>
    
  )
}

export default Alert