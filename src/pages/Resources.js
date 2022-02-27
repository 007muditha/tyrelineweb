import React, {useState,useEffect} from "react"
import { Container,Row,Col,Button} from "react-bootstrap"
import './Resources.css'



const Resources = () => {



   const [michellinRes, setMichRec] = useState([])
   const [otherRes, setOtherRec] = useState([])

   useEffect(() => {
    getMichData()
    getOtherData()
},[])



   const getMichData = async () => {
    const responce = await fetch(`${process.env.REACT_APP_BACKEND}/resources/michelin`);
    const respDataValues = await responce.json();
    if(respDataValues[0] != undefined) {
      setMichRec([respDataValues])
    }
    else{
      setMichRec([])
    }
}

const getOtherData = async () => {
  const responce = await fetch(`${process.env.REACT_APP_BACKEND}/resources/other`);
  const respDataValues = await responce.json();
  if(respDataValues[0] != undefined) {
    setOtherRec([respDataValues])
  }
  else{
    setOtherRec([])
  }
}



    return (
      <>
        <Container className="resourcesMainContainer">
          <Row>
            <Col>
            <h4 className="resourcesSectionTitle">
              Michelin Resources
            </h4>
            <hr/>
            </Col>
          </Row>
          <Row>
            {michellinRes[0]?.map(michResources => (
              <Col md={3} className="resourceContainer">
              <a href={michResources.link} target="_blank">
                <img v className="resourcesImage" src={michResources.image}/>
              </a>
              <h5 className="resourceTitle text-center">
              {michResources.resourceName}
              </h5>
              </Col>

    ))}
          </Row>
          <Row>
            <Col>
            <h4 className="resourcesSectionTitle">
              Other Resources
            </h4>
            <hr/>
            </Col>
          </Row>
          <Row>
            {otherRes[0]?.map(michResources => (
              <Col md={3} className="resourceContainer">
              <a href={michResources.link} target="_blank">
                <img v className="resourcesImage" src={michResources.image}/>
              </a>
              <h5 className="resourceTitle text-center">
              {michResources.resourceName}
              </h5>
              </Col>

    ))}
          </Row>
          
        </Container>
      </>
    );
  };
  
  export default Resources;