import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Memebers from "../components/Members/Members"
import "./About.css"


const About = () => {

    const ourVisionList = [
    "We strive to move forward by learning a great deal from listening to the needs of our farmers. We believe the key to superior customer care is by identifying the needs of our customers, building trust and gaining their feedback. We’ve witnessed the hard work and dedication committed by you and we will always listen to your needs.",
    "To ensure timely deliveries and effective communication, we’ve implemented the use of the latest technology to ease our communication and supply process. ",
    "At Tyreline, we partner up with top tyre businesses to connect the supply chain in order to provide our customers with high quality tyres, customer service and care.",
    "We’re looking forward to partnering up with you. Our stock and supply chain is assured to deliver all of your needs year round."
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
            <Container className="aboutusOurTeam">
            <Row>
            
                <Col lg={6} md={6}>
                
                <div className="aboutVisionContainer">
                    <Col lg={12} md={12} className="aboutusOurVision">
                    Our Vision
                    </Col>
                    <Col lg={12} md={12} className="aboutusOurConnecting">
                    Bringing the world’s best tyres to you
                    </Col>
                    
                </div>
                
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
