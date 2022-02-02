import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const membersSet = [
     {
    name: "Jeff",
    image:"imgLink",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  }, {
    name: "Jeff",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  },  {
    name: "Jeff",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  },{
    name: "Jeff",
    email: "test@gmail.com",
    linkedin:"linkedin",
    details: "Consectetur adipisicing ea est ad ad anim culpa ut ad. Commodo duis consectetur do reprehenderit duis. In pariatur adipisicing non ad Lorem eiusmod sint qui dolor consectetur."
  }
]

const Memebers = () => {
  return (

      <Row>
          {membersSet.map(member => (
              <Col lg={6} md={6}>
                  <Row>
                      <Col lg={3}>
                          <img src={member.image} alt="member Image"></img>
                      </Col>
                      <Col lg={9}>
                  <Row>
                      <Col sm={12}>
                          <h3>
                          {member.name}
                          </h3>
                      </Col>
                      <Col sm={12}>
                          <Row>
                              <Col>
                              {member.email}
                              {member.email}
                              </Col>
                          </Row>
                      
                      </Col>
                      <Col sm={12}>
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
