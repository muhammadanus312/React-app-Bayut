import { fontSize } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light " style={{height:"40px", fontSize:"1rem"}}>
    <div className="container-fluid "  style={{marginTop:"18px"}} >
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"170px"}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown mx-2 " >
            <a className="nav-link dropdown-toggle d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>UAE</p>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item d-flex" href="https://www.zameen.com/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Pakistan</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bayut.sa/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Saudi Arabia</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bayut.jo/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Jordan</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.mubawab.ma/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Morocco</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bproperty.com/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Bangladesh</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.lamudi.com.mx/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Mexico</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bproperty.com/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Philippines</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.lamudi.co.id/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Indonesia</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://baan.kaidee.com/"><img className='mx-2' width={"30px"} height={"20px"} src="https://www.firebirdtours.com/sites/all/themes/basic/images/svg-country-flags/ae.svg" alt="" />
              <p>Thailan</p></a></li>
              
              
            </ul>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="#"> <strong>العربية</strong> </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link d-flex" href="#"><i class="fa fa-cog mx-2 my-1" aria-hidden="true"></i>
        <p>Site setting</p></a>
          </li>
          
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
            <a className="nav-link d-flex" href="#"><i class="fa fa-heart mx-2 my-1"></i>
        <p>Favorite properties</p></a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link d-flex" href="#"><i class="fa fa-star-sharp my-2 mx-1"></i>
        <p>Saved searches</p></a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link d-flex" href="#">
              <img  className='mx-2 my-1' width={"30px"} height={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTjDu-RBkcBWZNg73nth4TlmJvWRBqQfQnQ&usqp=CAU" alt="" />

        <p><strong>Login</strong></p></a>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>


  <nav className="navbar navbar-expand-lg " style={{height:"20px", fontSize:"0.9rem"}}>
    <div className="container-fluid"  style={{marginTop:"50px"}} >
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"200px"}}>
      <a className="navbar-brand" href=""><img width={"105px"} height={"40px"} src="https://www.bayut.com/assets/logoBayutGreenEN.84f52857a6ac17bbd45b805a7d9621f2.png" alt="" /></a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"200px"}}>
          <li className="nav-item mx-1">
            <a className="nav-link active" aria-current="page" href="#"> Blog </a>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link d-flex" to="/companies">
        <p>Find an Agency</p></Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link active" aria-current="page" to="/floorplans">Floor Plans</Link>
          </li>
         
          <li className="nav-item dropdown mx-1" >
            <a className="nav-link dropdown-toggle d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p>Guides</p>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item d-flex" href="https://www.zameen.com/">
              <p>Area Guides</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bayut.sa/">
              <p>Building Guides</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bayut.jo/">
              <p>School  Guides</p></a></li>              
            </ul>
          </li>
          <li className="nav-item dropdown mx-1 " >
            <a className="nav-link dropdown-toggle d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p>Market Intelligence</p>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item d-flex" href="https://www.zameen.com/">
              <p>TrueValue</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bayut.sa/">
              <p>Property Prices</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bayut.jo/">
              <p>Dubai Transactions</p></a></li>              
              <li><a className="dropdown-item d-flex" href="https://www.bayut.jo/">
              <p>Trends</p></a></li>              
              <li><a className="dropdown-item d-flex" href="https://www.bayut.jo/">
              <p>New Projects</p></a></li>              
            </ul>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link active" aria-current="page" href="#"> Agent Portal </a>
          </li>
          <li className="nav-item dropdown mx-1 " >
            <a className="nav-link dropdown-toggle d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p>Events</p>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item d-flex" href="https://www.zameen.com/">
              <p>B3DXB 2022</p></a></li>
              <li><a className="dropdown-item d-flex" href="https://www.bayut.sa/">
              <p>Your Home Your Choice</p></a></li>
                         
            </ul>
          </li>
         
          
        </ul>
      </div>
      
    </div>
    
  </nav>
  </>
  )
}
