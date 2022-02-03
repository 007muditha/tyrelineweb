import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Members.css'



const membersSet = [
     {
    name: "Jeff Sparrowhawk",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+3.png",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  }, {
    name: "Changa Alahakoon",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+1.jpg",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  },  {
    name: "Meil Mintgimerie",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+4.png",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  },{
    name: "Khanh Nguyen",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+2.jpg",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  }
]

const Memebers = () => {
  return (

      <Row>
          {membersSet.map(member => (
              <Col lg={6} md={6} className="aboutUsUsers">
                  <Row>
                      <Col lg={3}>
                          <img className="memberImage" src={member.image} alt="member Image"></img>
                      </Col>
                      <Col lg={9}>
                  <Row className="aboutUserDetailsContainer">
                      <Col sm={12}>
                          <h3>
                          {member.name}
                          </h3>
                      </Col>
                      <Col sm={12}>
                          <Row>
                              <Col>
                              <a href= {member.email}>
                                  <img src="https://tyrelineimg.s3.amazonaws.com/email.png" className="aboutUsSocial"/>
                              </a>
                              <a href={member.linkedin}>
                                  <img src="https://tyrelineimg.s3.amazonaws.com/linkedin.png" className="aboutUsSocial"/>
                              </a>
                              </Col>
                          </Row>
                      
                      </Col>
                      <Col sm={12} className="memeberParaData">
                          <p>
                          {member.details}
                          </p>
                      </Col>
                  </Row>
                  </Col>
                  </Row>
              </Col>
              
          )
          )}

      </Row>

  );
};

export default Memebers;
