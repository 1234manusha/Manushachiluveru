import React, { Component } from 'react'
import { Container,Card,Button, Row ,Col} from 'react-bootstrap'

export class Team extends Component {
  render() {
    return (
      <Container>
        <h1 className='py-4'>
            We have a Team of Super Developers
        </h1>
        <Card className="py-2">
  <Card.Header as="h5">Principle Engineer</Card.Header>
  <Row>
  <Col>
    <img 
    src='logo512.png'
    width={250}
    height={250}
    />

  </Col>
  <Col>
  <Card.Body>
    <Card.Title>Sunil Metha</Card.Title>
    <Card.Text>
      Has an experience of 10+ years. Passionate to build a Robust Products and Applications
    </Card.Text>
    <Button variant="primary">work with us</Button>
  </Card.Body>

  </Col>
  </Row>
</Card>
<Card className="py-2">
  <Card.Header as="h5">Product Development Engineer-III</Card.Header>
  <Row>
  <Col>
    <img 
    src='logo512.png'
    width={250}
    height={250}
    />

  </Col>
  <Col>
  <Card.Body>
    <Card.Title>Rameshwar</Card.Title>
    <Card.Text>
    Has an experience of 6+ year in the feild of full stack development. Delivered 100+ products and completed 1000+ projects.
      Mentor, Guide and more ...
    </Card.Text>
    <Button variant="primary">work with us</Button>
  </Card.Body>

  </Col>
  </Row>
</Card>

      </Container>
    )
  }
}

export default Team