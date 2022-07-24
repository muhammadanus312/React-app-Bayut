import React from "react";
// import {ContextProperty} from "/ContextProperty"
import { useState } from "react";
import ContextProperty from "./ContextProperty";

export default function StateProperty(props){

    const [property, setproperty] = useState({purpose:"",duration:"",category:""})
    //   const [property1, setproperty1] = useState({purpose:"",duration:"",category:"",type:"",beds:"",baths:"",minarea:"",maxarea:"",minprice:"",maxprice:""})
    //   const [property2, setproperty2] = useState({purpose:"",duration:"",category:"",type:"",beds:"",baths:"",minarea:"",maxarea:"",minprice:"",maxprice:""})


    return(
        <ContextProperty.Provider value={{property,setproperty}}>
            {props.children}
        </ContextProperty.Provider>
        
    )
}
