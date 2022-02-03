import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"


const ContactUs = () => {

    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                    Contact Us is pending with backend development 
                </Col>
            </Row>
        </Container>
        <Container>
            <Form>

            
            <Row>
                <Col>
                <input type="text" placeholder="First Name"/>
                </Col>
                <Col>
                <input type="text" placeholder="Last Name"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <input type="text" placeholder="First Name"/>
                </Col>
                <Col>
                <input type="text" placeholder="Last Name"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <input type="text" placeholder="First Name"/>
                </Col>
                <Col>
                <input type="text" placeholder="Last Name"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <textarea type="text" placeholder="First Name"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        Submit
                    </Button>
                </Col>
            </Row>
            </Form>
        </Container>
        </>
    )

}

export default ContactUs