import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router';

import Navbar1 from './mcomponents/Navbar1';
import Courosols from './mcomponents/Courosols';
import Footer1 from './mcomponents/Footer1';
import Content1 from './mcomponents/Content1';
import Team from './mcomponents/Team';

function EmployeePage() {
  return (
    
    
     <div>
        <Navbar1/>
      <Content1/>
      <Courosols/> 
      <Team/>
      <Footer1/>  
     </div>
     
     

  )
}

export default EmployeePage