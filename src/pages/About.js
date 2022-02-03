import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Memebers from "../components/Members/Members"
import "./About.css"


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
        <Container fluid className="aboutUsTop">
        <Container>
            <Row>
                <Col lg={12} md={12} className="aboutUsHeader">

                About Us

                </Col>
                <Col lg={12} md={12}>
                    <Row>
                        <Col lg={6} md={6} className="aboutUsWhoWeAre">
                        Who We Are
                        </Col>
                        <Col lg={6} md={6} className="aboutUsWhoWeAreContent">
                        <p className="aboutUsWhoWeAreContentParagraph">
                           Pariatur dolor dolore ut adipisicing cupidatat aute est occaecat ea adipisicing duis voluptate aliqua cupidatat. Laboris magna aute voluptate voluptate ad duis sunt Lorem reprehenderit ut. Adipisicing deserunt culpa eu veniam deserunt anim qui occaecat Lorem mollit commodo sint. Sit veniam cillum culpa deserunt laboris anim quis ipsum non eiusmod amet nulla qui occaecat. In nulla duis ad aute irure dolor ad et minim esse anim.
                        </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            </Container>
            <Container>
            <Row>
                <Col lg={12} md={12} className="aboutusOurTeamHeader">
                    Our Team
                </Col>
                <Col lg={12} md={12}>
                         <Memebers/>
                </Col>
            </Row>
            </Container>
            <Container fluid className="aboutusVisionContainer">
            <Container>
            <Row>
            
                <Col lg={6} md={6}>
                
                <Row>
                    <Col lg={12} md={12} className="aboutusOurVision">
                    Our Vision
                    </Col>
                    <Col lg={12} md={12} className="aboutusOurConnecting">
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
            </Container>

        </>
    )
}


export default About
