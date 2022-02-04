import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Members.css'



const membersSet = [
     {
    name: "GEOFF SPARROWHAWK",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+3.png",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "For more than 23 years, Jeff has owned and operated a tyre wholesale and retail business in Western Australia. He has amassed a global knowledge base as well as a network of tyre manufacturers and suppliers from around the world. Jeff's extensive experience buying, importing, and distributing tyres in Australia is welcomed by Tyreline. Jeff is looking forward to seeing and helping Tyreline succeed along with its valued customers in the Australian Agricultural and Off-Road Tyre Market."}, 
    {
    name: "CHANGA ALAHAKOON",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+1.jpg",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Changa's experience, network, and competence in the tyre industry, which spans the entire Australian Eastern Seaboard for more than ten years, adds a valuable dimension to Tyreline. Changa has had a lot of success connecting brands from around the world to Australian tyre companies. Changa brings his global and local knowledge, experience, and expertise to ensure that our customers receive the finest service possible."
  },  {
    name: "NEIL MONTGOMERIE",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+4.png",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Neil began his career in the tyre industry as a tyre technician at Beaurepairs in Fremantle, Western Australia, in 1983. From there, he worked at tyre firms in both Western Australia and the Northern Territory, holding various management positions. He has held prominent positions with both Michelin and Bridgestone, two major tire producers. Neil is a customer-focused individual who takes pride in his honesty, ethics, and transparency. Tyreline Australia is a new venture for Neil, and he is looking forward to the challenge of providing a high-quality product to tyre dealers."
  },{
    name: "KHANG NGUYEN",
    image:"https://tyrelineimg.s3.amazonaws.com/Artboard+2.jpg",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Being in the tyre sector for seven years, Khang has paved the way for the development of a number of brands in Australia. He excels in providing excellent customer service and is particularly proud of Tyreline’s company culture and dealer success stories in delivering a high-quality product to small businesses all over the east coast."
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
