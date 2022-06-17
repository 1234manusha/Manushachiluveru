import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export class ListEmployeeComponents extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         employees: []
      }
   
      this.editEmployee = this.editEmployee.bind(this);
      this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id != id)});
        });
    }

    viewEmployee(id){
        window.location.href=`/view-employee/${id}`
    }


    addEmployee(){
        window.location.href='/add-employee'
    }

    editEmployee(id){
        window.location.href=`/update-employee/${id}`
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({
                employees : res.data
            });
        });
    }

    referbackpage(){
        window.location.href='/'
    }

  render() {
    return (
      <div >
        <HeaderComponent />
    
    <div className='container'>
            <h2 className='text-center'>Employees List</h2>
        
            <button style={{marginBottom: "20px"}} className= "btn btn-primary " onClick={() => this.addEmployee()}>Add Employee</button>
       
        <div className="row " ></div>
            <table className = "table table-striped table-bordered" >
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id </th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                    this.state.employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                
                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                <button style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)} className="btn btn-primary">View</button>

                            </td>

                        </tr>
                    )
                    }
                </tbody>
            </table>
            </div>

                        <button className='btn btn-danger'  onClick={() => this.referbackpage()}>Log Out</button>
           <FooterComponent/>
      </div>
    )
  }
}

export default ListEmployeeComponents