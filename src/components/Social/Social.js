import React from 'react'
import './Social.css'

const Social = () => {

    const Images=[
        "https://tyrelineimg.s3.amazonaws.com/1.png",
        "https://tyrelineimg.s3.amazonaws.com/3.png",
        "https://tyrelineimg.s3.amazonaws.com/1.png",
        "https://tyrelineimg.s3.amazonaws.com/Artboard+1.png",
        "https://tyrelineimg.s3.amazonaws.com/3.png",
    ]

    return(
        <div>
            <h2 className='socialHeader'>Social Media Content</h2>
        <div className="socialImageContainer">
            {Images.map(poster => (
                    <img className="socialImage" src={poster}/>
            ))}
        </div>
        </div>
    )

}

export default Social;