import React from "react";
import './Card.css'
import { Button } from "react-bootstrap";

const sampleImgLink = "https://tyrelineaustralia.com.au/wp-content/uploads/2021/06/AGRIBIB-Tyre.png"

const Card = () => {
    return(
        <div className="ewalkCard">
            <img className="cardImage" src={sampleImgLink}/>
            <h3 className="cardHeader">
                Tyre Name
            </h3>
            <p className="cardButton">
                <Button>Click Me</Button>
            </p>
        </div>
    )
}

export default Card