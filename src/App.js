import './App.css';
import Navbar from '../src/component/Navbar'
import FormSection from './component/FormSection';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StateProperty from './context/StateProperty';
import Floorplans from './component/Floorplans';
import Companies from './component/Companies';

function App() {
  return (
    <>
    
    <div>
      <StateProperty>
        <Router>
        <Navbar/>
      <FormSection/>
    <Section1/>
      <Section2/>
       <div className="container">
       <Routes>
            <Route path="/floorplans" element={<Floorplans/>} />
            <Route path="/companies" element={<Companies/>} />
          
        </Routes>
       </div>
        </Router>
        </StateProperty>
      </div>
    </>
  )
}

export default App;
