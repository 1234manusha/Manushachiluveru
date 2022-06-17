import React, { Component } from 'react'

export class Askhelp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: window.location.pathname.substring(window.location.pathname.length-1),
           firstName: '',
           reason: '',
           emailId: ''
        }
      
        this.changeReasonHandler = this.changeReasonHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
      }
       
   



            
      changeFirstNameHandler = event  => {
          this.setState({firstName: event.target.value});
      }
      
      changeReasonHandler = event  => {
          this.setState({reason: event.target.value});
      }
      
      changeEmailIdHandler = event  => {
          this.setState({emailId: event.target.value});
      }
      
      cancel(){
        window.location.href='/employees'
     }
      
  render() {
    return (
      <div>
       
       <div className='container py-5'>
                          <div className='row'>
                              <div className='card col -md-6 offset-md-3 offset-md-3 '>
                                  <h3 className='text-center'>Contact Us</h3>
                                  <div className='card-body'>
                                      <form>
                                          <div className='form-group'>
                                              <label> Company Name :</label>
                                              <input placeholder='Company Name' name='firstName' className='form-control'
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
      
                                          </div>
      
       
                                          <div className='form-group'>
                                              <label>Email Id :</label>
                                              <input placeholder='Email Id' name='emailId' className='form-control'
                                               value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
      
                                          </div>

                                          <div className='form-group'>
                                              <label>What help do you need from us ?</label>
                                              <input placeholder='Reason' name='reason' className='form-control'
                                               value={this.state.reason} onChange={this.changeReasonHandler} type ="text" />
      
                                          </div>
                                        <div className=' py-4'>
                                           <button className='btn btn-success' type='reset' onClick={()=>this.cancel()} >Send</button>
                                          <button className='btn btn-danger' type='reset' onClick={()=>this.cancel()} style={{marginLeft: "10px"}}>Cancel</button> 
                                         </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
   
      </div>
    )
  }
}

export default Askhelp