import React from 'react'

const Card = ({ content }) => {

    const { title, description } = content
    console.log(title, description, content)
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{!description ? content : description}</p>
        </div>
    )
}

export default Card
