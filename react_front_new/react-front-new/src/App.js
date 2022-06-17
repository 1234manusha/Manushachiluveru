
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import EmployeePage from './EmployeePage';
import Askhelp from './mcomponents/Askhelp';
import keycloak from "./Keycloak"
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import PrivateRoute from './helpers/PrivateRoute';
import Mission from './mcomponents/Mission';


function App() {
  return (
    // <div>
    //   <Router>
    //          <HeaderComponent />
    //           <div className="container">
    //                <Routes>
    //                      <Route path = "/" element={<ListEmployeeComponents/>}></Route>
    //                      <Route path = "/employees"  element={<ListEmployeeComponents/>}></Route>
    //                      <Route path = "/add-employee"  element={<CreateEmployeeComponent/>}></Route>
    //                      <Route path = "/update-employee/:id"  element={<UpdateEmployeeComponent />}></Route>
    //                      <Route path = "/view-employee/:id"  element={<ViewEmployeeComponent />}></Route>
                         
    //                </Routes>
    //           </div>
    //           <FooterComponent/>
    //  </Router>
    // </div>
    
<div>
<Router>
    <Routes>
            <Route path = "/" element={<EmployeePage/>}></Route>           
            <Route path = "/employees"  element={<ListEmployeeComponents/>}></Route>
            <Route path = "/add-employee"  element={<CreateEmployeeComponent/>}></Route>
            <Route path = "/update-employee/:id"  element={<UpdateEmployeeComponent />}></Route>
            <Route path = "/view-employee/:id"  element={<ViewEmployeeComponent />}></Route>           
            <Route path = "/AskHelp"  element={<Askhelp />}></Route> 
            <Route path = "/Mission"  element={<Mission />}></Route>            
  </Routes>
  </Router>


</div> 


  );
}

export default App;