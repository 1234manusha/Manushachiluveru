import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

export default class ViewEmployeeComponent extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        //  id: this.props.match.params.id,
        
        id: window.location.pathname.substring(window.location.pathname.length-1),
         employee: {}
      }
      
    }

    componentDidMount(){

      EmployeeService.getEmployeeById(this.state.id).then(res => {
        this.setState({employee: res.data});
      })

    }

    backtohome(){
       window.location.href='/employees'
    }



  render() {
    return (
      
      <div>
        <HeaderComponent />
        <div className='card col-md-6 offset-md-3'>
          <h3 className='text-center'>View Employee Details</h3>
          <div className='card-body'>
            <div className='row'>
            <div className='col'>
                <label> Employee First Name : </label>  </div>
                <div className='col'>
                <text>  {this.state.employee.firstName}</text> </div>
            </div>

            <div className='row'>
            <div className='col'>
                <label> Employee Last Name : </label>  </div>
                <div className='col'>
                <text>  {this.state.employee.lastName}</text> </div>
            </div>

            <div className='row'>
            <div className='col'>
                <label> Employee Email Id : </label>  </div>
                <div className='col'>
                <text>  {this.state.employee.emailId}</text> </div>
            </div>


          </div>
          <div >
            <button className='btn btn-primary' onClick={() => this.backtohome()}>Back to Home</button>
          </div>
        </div>
        <FooterComponent/>
      </div>
    )
  }
}
