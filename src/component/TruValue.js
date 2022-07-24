import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


export default function PropertySearch() {

    
    
  return (
    <div className='truvalue my-4 d-flex flex-wrap ' >
          <div>
          <Dropdown>
      <Dropdown.Toggle className='dropdownButton mx-1' variant="light"  id="dropdown-basic " >
        Buy
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <div className=" purpose mx-2 ">
        <h6>Purpose</h6>
        <div className="conatiner my-2 mx-2 border">
        <div className='d-flex flex-wrap flex-row  '>
        {/* <a href="#" class={`btn mx-3 `} role="button" onClick={Purposeclick1}   aria-pressed="true"><strong>Buy</strong></a>   
        <a href="#" class={`btn mx-3`} role="button" onClick={Purposeclick2} aria-pressed="true"><strong>Rent</strong></a>    */}
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
        <label class="btn btn-outline-success btnpurpose btn-w" style={{width:"90px"}}  for="option1">Buy</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btnpurpose btn-w" style={{width:"90px"}} for="option2">Rent</label>
        </div >
        </div>
        <button type="button" class="btn btn-dark mx-2 my-2" style={{width:"14rem"}}>Done</button>
              

        </div>
      </Dropdown.Menu>
    </Dropdown>
          </div>

          <input type="location" id="location" className="input form-control "
              placeholder="Enter Location"/>

<div>
          <Dropdown>
      <Dropdown.Toggle className='dropdownButton mx-1' variant="light"  id="dropdown-basic " >
        Property type
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <div className=" mx-2 ">
        <div className="conatiner my-2 mx-2 border">
        <div className='d-flex flex-column  '>
        {/* <a href="#" class={`btn mx-3 `} role="button" onClick={Purposeclick1}   aria-pressed="true"><strong>Buy</strong></a>   
        <a href="#" class={`btn mx-3`} role="button" onClick={Purposeclick2} aria-pressed="true"><strong>Rent</strong></a>    */}
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
        <label class="btn btn-outline-success btnpurpose btn-w" style={{width:"120px"}}  for="option1">Buy</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btnpurpose btn-w" style={{width:"120px"}} for="option2">Rent</label>
        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btnpurpose btn-w" style={{width:"120px"}} for="option2">Rent</label>
        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btnpurpose btn-w" style={{width:"120px"}} for="option2">Rent</label>
        </div >
        </div>
        <button type="button" class="btn btn-dark mx-2 my-2" style={{width:"9rem"}}>Done</button>
              

        </div>
      </Dropdown.Menu>
    </Dropdown>
          </div>
          <div>
          <Dropdown>
      <Dropdown.Toggle className='dropdownButton mx-1'  variant="light"  id="dropdown-basic " >
        Bed
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </div>
          <div>
          <Dropdown>
      <Dropdown.Toggle className='dropdownButton mx-1'  variant="light"  id="dropdown-light " >
       Bath
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <div >
        <div className='my-2'>
            
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
        <label class="btn btn-outline-success truvaluePurpose" for="option1">1</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success truvaluePurpose" for="option2">2</label>

        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
        <label class="btn btn-outline-success truvaluePurpose" for="option3">3</label>
        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" />
        <label class="btn btn-outline-success truvaluePurpose" for="option4">4</label>

        <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off"/>
        <label class="btn btn-outline-success truvaluePurpose" for="option5">5</label>

        <input type="radio" class="btn-check" name="options" id="option6" autocomplete="off" />
        <label class="btn btn-outline-success truvaluePurpose" for="option6">6+</label>


        </div>
        <button type="button" class="btn btn-dark mx-2 my-2" style={{width:"14rem"}}>Done</button>

        </div>
        
      
      </Dropdown.Menu>
    </Dropdown>
          </div>
         
          <input type="numer" id="area" className="dropdownButton form-control "
              placeholder="e.g 1078 sqft"/>
          <div>
          <Button variant="danger" className='mx-1 dropdownButton' >Get Estimate</Button>
          </div>
          <div style={{ right:"2px"}}>
            <a href="#" className='text-white ' style={{ width:"4rem",height:"2rem", }}> Reset Form</a>
          {/* <Button variant="light" className='mx-1 dropdownButton float-right' style={{ width:"4rem",height:"2rem"}}>Find</Button> */}
          </div>
          
          
          
    </div>
  )
}
