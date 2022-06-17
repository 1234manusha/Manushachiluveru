import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export class Content1 extends Component {

  refertopage(){
    window.location.href=`/AskHelp`
  }

  render() {
    return (
     <>
      <Container >
        <Row>
            <Col className=" text-center align-items-center py-4">
            
            <Row className="py-3">
            <h1>
                We are a <i> Heart of Phenom </i> FOREVER
            </h1>
            </Row>

            <Row>
            <h3 className="py-3">
               We have a team of super heros , who can code anything and solve everything. We are 
               backbone of phenom.
            </h3>
            </Row>

            <Button  variant="success" size="sm" onClick={() => this.refertopage()}>Click to ask for our Help</Button>
        

            </Col>
            
            <Col className="d-flex justify-content-around py-4">
            <img 
             src="content1.png"
             width={500}
             height={400}
            />
           
            </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
      <img
      className="d-block w-100"
      src="trust.png"    
        />
     </>
    )
  }
}

export default Content1