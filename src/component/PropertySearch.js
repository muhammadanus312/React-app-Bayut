import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Residential from './Residential';
import Commercial from './Commercial';
import { useContext } from "react";
import ContextProperty from '../context/ContextProperty'


export default function PropertySearch() {

  const Context = useContext(ContextProperty);

  const {property,setProperty1} = Context;

//define onchange functions for updaing state value of property
// ......


    const [ctgview, setctgview] = useState(true)
    const [purposeview, setpurposeview] = useState(true)

    const ctg_onclick1=()=>{
        if(ctgview===false)
        setctgview(true)
    }
    const ctg_onclick2=()=>{
        if(ctgview===true)
        setctgview(false)
    }
    const Purposeclick1=()=>{
        if(purposeview===false)
        setpurposeview(true)
    }
    const Purposeclick2=()=>{
        if(purposeview===true)
        setpurposeview(false)
    }




  return (
    <div className='propertyform my-2 d-flex flex-wrap ' >
          <div>
          <Dropdown>
      <Dropdown.Toggle className='dropdownButton mx-1' variant="light"  id="dropdown-basic " >
        Buy
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <div className=" purpose mx-2 ">
        <h6>Purpose</h6>
        <div className="conatiner my-2 mx-2 border">
        <div className='d-flex flex-wrap flex-row  ' style={{borderRadius:"5px",textDecoration:"underline"}}>
        <a href="#" class={`btn mx-3 `} role="button" onClick={Purposeclick1}   aria-pressed="true"><strong>Buy</strong></a>   
        <a href="#" class={`btn mx-3`} role="button" onClick={Purposeclick2} aria-pressed="true"><strong>Rent</strong></a>   
        </div >
        </div>
        
        <div >{purposeview && 
        <div className='my-2'>
          <h6>Completion status</h6>  
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
        <label class="btn btn-outline-success btnpurpose" for="option1">All</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btnpurpose" for="option2">Ready</label>

        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
        <label class="btn btn-outline-success btnpurpose" for="option3">Offplane</label>


        <div>
        <button type="button" class="btn btn-light mx-2 my-2" style={{width:"80px", border:"1px solid black"}}>Reset</button>
        <button type="button" class="btn btn-success mx-2 my-2" style={{width:"80px"}}>Done</button>
        </div>
        </div>
        }</div>
        

        <div >{!purposeview && 
        <div className='my-2'>
          <h6>Rent Frequenct</h6>  
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
        <label class="btn btn-outline-success btnpurpose" for="option1">Yearly</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-outline-success btnpurpose" for="option2">Monthly</label>

        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
        <label class="btn btn-outline-success btnpurpose" for="option3">Weekly</label>
        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"/>
        <label class="btn btn-outline-success btnpurpose" for="option4">Daily</label>

        <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" />
        <label class="btn btn-outline-success btnpurpose" for="option5">Any</label>


        <div>
        <button type="button" class="btn btn-light mx-2 my-2" style={{width:"80px", border:"1px solid black"}}>Reset</button>
        <button type="button" class="btn btn-success mx-2 my-2" style={{width:"80px"}}>Done</button>
        </div>
        </div>
        }</div>
              

        </div>
      </Dropdown.Menu>
    </Dropdown>
          </div>

          <input type="location" id="location" className="input form-control "
              placeholder="Enter Location"/>

          <div>
          <Dropdown>
      <Dropdown.Toggle className='dropdownButton mx-1' variant="light"  id="dropdown-basic " >
       Residential
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <div className=" category ">
        <div className='d-flex flex-wrap flex-row ' style={{borderRadius:"5px"}}>
        <a href="#" class={`btn mx-3 `} role="button" onClick={ctg_onclick1}  aria-pressed="true"><strong>Residential</strong></a>   
        <a href="#" class={`btn mx-3`} role="button" onClick={ctg_onclick2} aria-pressed="true"><strong>Commercial</strong></a>   
        </div >
        <div >{ctgview && <Residential/>}</div>
        <div >{!ctgview && <Commercial/>}</div>
              

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
       Area(sqft)
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="mx-2"  >
            <form action="" className='d-flex flex-row'>
            <div className="form-outline mb-4 d-flex flex-column">
            <label className="form-label" htmlfor="form3Example3">Minimum sqft</label>
            <input type="email" id="email" className="form-control form-control-lg"/>  
            <Button variant="light" className='mx-1 dropdownButton my-2'>Done</Button>
            </div>

            <div className=" form-outline mb-4 container d-flex flex-column">
            <label className="form-label" htmlfor="form3Example3">Maximum sqft</label>
            <input type="email" id="email" className="form-control form-control-lg"/>
            <Button variant="dark" className='mx-1 dropdownButton my-2'>Reset</Button>

            </div>
            </form>
            
            <div className="container d-flex flex-column">

            </div>
        </div>
      
      </Dropdown.Menu>
    </Dropdown>
          </div>
          <div>
          <Dropdown>
      <Dropdown.Toggle className='dropdownButton mx-1' variant="light"  id="dropdown-basic " >
        Price (EUR)
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <div className="mx-2"  >
            <form action="" className='d-flex flex-row'>
            <div className="form-outline mb-4 d-flex flex-column">
            <label className="form-label" htmlfor="form3Example3">Minimum</label>
            <input type="email" id="email" className="form-control form-control-lg"/>  
            <Button variant="light" className='mx-1 dropdownButton my-2'>Done</Button>
            </div>

            <div className=" form-outline mb-4 container d-flex flex-column">
            <label className="form-label" htmlfor="form3Example3">Maximum </label>
            <input type="email" id="email" className="form-control form-control-lg"/>
            <Button variant="dark" className='mx-1 dropdownButton my-2'>Reset</Button>

            </div>
            </form>
            
            <div className="container d-flex flex-column">

            </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
          </div>
          <div>
          <Button variant="danger" className='mx-1 dropdownButton' >Find</Button>
          </div>

          <div>
          <Button variant="light" className='mx-1 dropdownButton' style={{width:"630px"}}>Find hones by commute time 
          <img className='mx-2 float-right' width={"60px"} height={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDlmDG-v6e7JzyyC7StabdIcLBkgeYUDEsQ&usqp=CAU" alt="" />

          </Button>
          </div>
          
    </div>
  )
}
