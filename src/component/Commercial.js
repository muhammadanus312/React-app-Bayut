import React from 'react'

export default function Commercial() {
  return (
    <div className='my-2 '>
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option1">Ofiice</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option2">Shop</label>


        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option4">Warehouse</label>

        <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option5">Labour Camp</label>
        
        <input type="radio" class="btn-check" name="options" id="option6" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option6">Commercial Villa</label>

        <input type="radio" class="btn-check mx-2" name="options" id="option7" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option7">Bulk unit</label>
    
        <input type="radio" class="btn-check" name="options" id="option8" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option8">Commercial Plot</label>

        <input type="radio" class="btn-check mx-2" name="options" id="option9" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option9">Commercial Floor</label>

        <input type="radio" class="btn-check" name="options" id="option10" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option10">Commercial Building</label>

        <input type="radio" class="btn-check" name="options" id="option11" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option11">Factory</label>

        <input type="radio" class="btn-check" name="options" id="option12" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option12">Industrial Land</label>

        <input type="radio" class="btn-check" name="options" id="option13" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option13">Mixed use Land</label>
        
        <input type="radio" class="btn-check" name="options" id="option14" autocomplete="off"/>
        <label class="btn btn-outline-success btn-w" for="option14">Showroom</label>
        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" checked/>
        <label class="btn btn-outline-success btn-w" for="option3">Other Commertial</label>
        <div>
        <button type="button" class="btn btn-light mx-2 my-2" style={{width:"120px",border:"1px solid black"}}>Reset</button>
        <button type="button" class="btn btn-success mx-2 my-2" style={{width:"120px"}}>Done</button>
        </div>
        </div>
  )
}
