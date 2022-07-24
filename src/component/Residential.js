import React from 'react'

import Button from 'react-bootstrap/Button';
export default function Residential() {
  return (
        <div className='my-2'>

        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option1">Appartment</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option2">Villa</label>

        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option3">Townhouse</label>

        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option4">Painthouse</label>

        <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option5">Villa Compound</label>
        
        <input type="radio" class="btn-check" name="options" id="option6" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option6">Hotel Apartment</label>

        <input type="radio" class="btn-check mx-2" name="options" id="option7" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option7">Residential Plot</label>
        <input type="radio" class="btn-check mx-2" name="options" id="option7" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option7">Residential Floor</label>
        <input type="radio" class="btn-check mx-2" name="options" id="option7" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option7">Residential Building</label>
        <div>
        <button type="button" class="btn btn-light mx-2 my-2" style={{width:"120px", border:"1px solid black"}}>Reset</button>
        <button type="button" class="btn btn-success mx-2 my-2" style={{width:"120px"}}>Done</button>
        </div>
        


        </div>
    
  )
}
