import React from 'react'

export default function Section1() {
  return (
    
    <div className="conatiner d-flex flex-row flex wrap my-4 mx-4">
        <a href="/3" className="box" id='box1'>
        <div><h2 className='sec-heading'>TruCheck™</h2></div>
        <div className='sec-content' >
        Filter your results with validated, available listings
        </div>
        </a>
        <a href="/1" className="box" id='box2'>
        <div><h2 className='sec-heading'>Search 2.0</h2></div>
        <div className='sec-content' >
        Find homes by commute time
        </div>
        </a>
        <a href="/2" className="box" id='box3'>
        <div><h2 className='sec-heading'>Map View</h2></div>
        <div className='sec-content' >
        Search for properties in preferred areas using a map
        </div>
        </a>
       
    </div>
  )
}
