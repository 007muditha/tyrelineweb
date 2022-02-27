import { Container,Row,Col,Form,Button } from "react-bootstrap"
import './getIntouch.css'
const GetinTouch = () => {

    return(
            <div className="GetInTouchInnerContainer">
              <Row>
                <Col>
                <span className="getInToutchText">Get In Touch</span>
                </Col>
 
              </Row>
<Form>
  <Row>
  <Col md={3}>
  <Form.Group className="mb-2" controlId="name">
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>
  </Col>
  <Col md={6}>
  <Form.Group className="mb-2" controlId="email">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  </Col>
  <Col  md={3}>
  <Button className="getIntouchSubmit" variant="warning" type="submit">
    Submit
  </Button>
  </Col>
  </Row>
</Form>

            </div>
    )
}

export default GetinTouch