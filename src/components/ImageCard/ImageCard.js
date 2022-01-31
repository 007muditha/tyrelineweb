import React from "react";
import './ImageCard.css'


const brandImage= "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/Michelin-Logo.svg"

const ImageCard = () => {
    return(
        <div className="ewalkImageCard">
            <img className="ImagecardImage" src={brandImage}/>
        </div>
    )
}

export default ImageCard