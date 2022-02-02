import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Memebers from "../components/Members/Members"

const About = () => {

    const ourVisionList = [
    "Proident velit Lorem veniam quis aliqua qui in minim eu sit reprehenderit aute duis.",
    "Proident velit Lorem veniam quis aliqua qui in minim eu sit reprehenderit aute duis.",
    "Proident velit Lorem veniam quis aliqua qui in minim eu sit reprehenderit aute duis.",
    "Proident velit Lorem veniam quis aliqua qui in minim eu sit reprehenderit aute duis.",
    "Proident velit Lorem veniam quis aliqua qui in minim eu sit reprehenderit aute duis."
    ]



    return(
        <>
        <Container fluid>
        <Container>
            <Row>
                <Col lg={12} md={12}>

                About Us

                </Col>
                <Col lg={12} md={12}>
                    <Row>
                        <Col >
                        Who we are
                        </Col>
                        <Col>
                        <p>
                            Test test test
                        </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            </Container>
            <Container>
            <Row>
                <Col lg={12} md={12}>
                    Our Team
                </Col>
                <Col lg={12} md={12}>
                         <Memebers/>
                </Col>
            </Row>

            
            <Row>
            
                <Col lg={6} md={6}>
                
                <Row>
                    <Col lg={12} md={12}>
                    Our Vision
                    </Col>
                    <Col lg={12} md={12}>
                    Connecting the Worlds
                    </Col>
                    
                </Row>
                
                </Col>
                <Col lg={6} md={6}>

                    <ul>
                    {ourVisionList.map(ourVision => (
                        <li>
                            {ourVision}
                        </li>
                    ))}
                    </ul>
                </Col>
                
            </Row>
            </Container>

        </>
    )
}


export default About
