import React from 'react'
import './Social.css'

const Social = () => {

    const Images=[
        "https://i.pinimg.com/originals/a0/92/ec/a092eccd4a6903a38a9e538b89ec17d2.jpg",
        "https://i.pinimg.com/originals/a0/92/ec/a092eccd4a6903a38a9e538b89ec17d2.jpg",
        "https://i.pinimg.com/originals/a0/92/ec/a092eccd4a6903a38a9e538b89ec17d2.jpg",
        "https://i.pinimg.com/originals/a0/92/ec/a092eccd4a6903a38a9e538b89ec17d2.jpg",
        "https://i.pinimg.com/originals/a0/92/ec/a092eccd4a6903a38a9e538b89ec17d2.jpg"
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