import React,{useState} from 'react'
import PropertySearch from './PropertySearch'
import TruValue from './TruValue'
export default function FormSection() {

    const [bg, setbg] = useState({bgColor:"white",color:"black"})
    const [view, setview] = useState(true)
    const click_button1=()=>{
        if(bg.bgColor==='black'){
            setbg({bgColor:"white",color:"black"})
            setview(true)
        }
        else{
            
        }
    }
    const click_button2=()=>{
        if(bg.color==='black'){
            setbg({bgColor:"black",color:"white"})
            setview(false)
        }
        
    }
  return (
    <div className="formsection mx-4 ">
        <div className="d-flex flex-wrap flex-column align-items-sm-center">
        <h2 className="conatiner text-light mb-auto p-2 " style={{marginTop:"100px"}}>The UAE's Only Instant Property Valuation Solution!</h2>

        <div className='d-flex margin-top my-2' style={{background:"#222",borderRadius:"5px"}}>
        <a href="#" class={` btn-width btn text-${bg.color} bg-${bg.bgColor} btn-lg`} role="button" onClick={click_button1} aria-pressed="true"><strong>Property Search</strong></a>   
        <a href="#" class={`btn-width btn text-${bg.bgColor} bg-${bg.color} btn-lg`} role="button" onClick={click_button2} aria-pressed="true"><strong>TruValue</strong></a>   
        </div >
        <div >{view && <PropertySearch/>}</div>
        <div>{!view && <TruValue/>}</div>           

        </div>
    </div>
  )
}
