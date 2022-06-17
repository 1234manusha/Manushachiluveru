// import React from "react";

import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
// import { useKeycloak } from "@react-keycloak/web";
// import { link } from 'react-router-dom'
// //keycloak.login()
// const Navbar1 = () => {
// //  const { keycloak, initialized } = useKeycloak();

 

//  return (
   
//         <>
//   <Navbar bg="dark" variant="dark">
//     <Container>
//     <Navbar.Brand href="#home">ServiceHub Adda</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Mission</Nav.Link>
//       <Nav.Link href="http://localhost:3000/employees" >Employees</Nav.Link>
//     </Nav>
//     <div className="hidden xl:flex items-center space-x-5">
//                <div className="hover:text-gray-200">
//                  {/* {!keycloak.authenticated && (
//                    <button
//                      type="button"
//                      className="text-blue-800"
//                      onClick={() => keycloak.login()}
//                    >
//                      Login
//                    </button>
//                  )}

//                  {!!keycloak.authenticated && (
//                    <button
//                      type="button"
//                      className="text-blue-800"
//                      onClick={() => keycloak.logout()}
//                    >
//                      Logout ({keycloak.tokenParsed.preferred_username})
//                    </button>
//                  )} */}
//                  <button>
//                   Login
//                  </button>
//                </div>
//              </div>
//     {/* <Navbar.Collapse className="justify-content-end">
//       <NavDropdown title="Sign In"  id="basic-nav-dropdown">
//           <NavDropdown.Item onClick={() => keycloak.login()}  >Admin</NavDropdown.Item>
//           {/* <NavDropdown.Item href="http://localhost:3000/employees" >Employee</NavDropdown.Item> */}
//        {/* </NavDropdown>
//     </Navbar.Collapse> */} 
//     {/* <button onClick={() => this.reference()} >Sign in</button> */}
//     </Container>
//   </Navbar>
  
// </>
      
//  );
// };

// export default Navbar1;


import React, { Component } from 'react'

export class Navbar1 extends Component {
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">ServiceHub Adda</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="Mission">Mission</Nav.Link>
          <Nav.Link href="AskHelp">Demo</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3000/employees">Admin</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/employees" >Employee</NavDropdown.Item>
           </NavDropdown>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
    )
  }
}

export default Navbar1
//         <>
//   <Navbar bg="dark" variant="dark">
//     <Container>
//     <Navbar.Brand href="#home">ServiceHub Adda</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Mission</Nav.Link>
//       <Nav.Link onClick={() => this.reference()}>Demo</Nav.Link>
//     </Nav>
//     <Navbar.Collapse className="justify-content-end">
//       <NavDropdown title="Sign In" id="basic-nav-dropdown">
//           <NavDropdown.Item href="http://localhost:3000/employees">Admin</NavDropdown.Item>
//           <NavDropdown.Item href="http://localhost:3000/employees" >Employee</NavDropdown.Item>
//        </NavDropdown>
//     </Navbar.Collapse>
//     {/* <button onClick={() => this.reference()} >Sign in</button> */}
//     </Container>
//   </Navbar>
  
// </>
      
  