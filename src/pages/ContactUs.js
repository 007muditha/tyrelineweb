import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import './ContactUs.css'



const ContactUs = () => {

    return(
        <>
        <Container fluid className='contactUsHeader'>
            <Row>
                <Col className='contactUsHeaderText'>
                    Contact Us
                </Col>
            </Row>
        </Container>
        <Container className='FormContainer' >
           
            <Form>
                <Row>
<Col lg={6}>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Col>
<Col lg={6}>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Col>           
<Col lg={6}>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Col>     
<Col lg={6}>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Col>     
<Col lg={12}>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Col>     
  
  
  
  </Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          
        </Container>

<Container>
  <Row className='contactUsSection'>
    <Col className='contactUsCol'>
      <span>
    <img src="https://tyrelineimg.s3.amazonaws.com/telephone-call.png" className='contactUsLogos'/>
    </span>
    <span className='contactUsData'>
      1300 798 089
    </span>
    </Col>
    <Col className='contactUsCol'>
    <span>
    <img src="https://tyrelineimg.s3.amazonaws.com/pin.png"  className='contactUsLogos'/>
    <span className='contactUsArea'>
    Western Australia
    </span>
    </span>
    <span className='contactUsData'>
      198/50 William Street, <br/>
      Beckenham.<br/>
      WA 6107
    </span>
    </Col>
    <Col className='contactUsCol'>
    <span>
    <img src="https://tyrelineimg.s3.amazonaws.com/pin.png"  className='contactUsLogos'/>
    <span className='contactUsArea'>
    Victoria
    </span>
    </span>
    
    <span className='contactUsData'>
      52 Boundary Road,<br/>
      sunshine West,<br/>
      VIC 3020
    </span>
    </Col>
  </Row>
</Container>

        <Container>
          <Row>
            <Col className='mapContainerHeading'>
            Our Partners
            </Col>
          </Row>
          <Row>
            <Col className='mapContainer'>
              <img className='maps' src="https://tyrelineimg.s3.amazonaws.com/Tyreline-maps+copy.png" />
            </Col>
          </Row>
        </Container>
        </>
    )

}

export default ContactUs