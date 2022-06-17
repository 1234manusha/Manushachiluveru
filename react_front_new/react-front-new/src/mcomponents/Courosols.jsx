import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';

export class Courosols extends Component {
  render() {
    return (
      <div>
        <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="view3.png"
      alt="First slide"
    
    />
    <Carousel.Caption  >
      <h3>We Helped Phenom get this Review</h3>
      <p>They are our regular customer.They love us alot</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="view2.png"
      alt="Second slide"
      
    />
    <Carousel.Caption>
    <h3>We Helped Phenom get this Review</h3>
      <p>They use our platform regularly.They are enjoying our services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="view1.png"
      alt="Third slide"
     
    />
    <Carousel.Caption>
    <h3>We Helped Phenom get this Review</h3>
      <p>Brother International is out regular customer.They love us alot</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
}

export default Courosols