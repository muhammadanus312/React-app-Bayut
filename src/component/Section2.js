import React,{Component,useEffect,useState} from 'react'

export default function Section2() {

    const [i, seti] = useState(0)
    let images=['green','yello','pink','grey']

    useEffect(() => {
        const changeimg = setTimeout(() => {
            seti((v) => (v === 5 ? 0 : v + 1));
        }, 1500);
      }, [i]);
    

    
  return (

    <div className="conatiner d-flex flex-row flex wrap my-4 mx-4">
    <a href="/2" className="sec2 mx-4 my-4" style={{backgroundColor:`${images[i]}`,transition:"width 5s",transitionDelay:"2s"}} >

    <div><h2 className='sec-heading'>Map View</h2></div>
    <div className='sec-content' >
    Search for properties in preferred areas using a map
    </div>
    <div>
    <button type="button" class="btn btn-light mx-2 my-2" style={{width:"180px", borderRadius:"10px"}}><h4>View <i class="fa fa-eye" aria-hidden="true"></i>
</h4></button>

    </div>
    </a>
   
</div>
  )
}
