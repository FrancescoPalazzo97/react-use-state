import React from 'react'

const Btn = ({ language, isActive, handleClick }) => {

    const { id, title, description } = language

    return (
        <button className={isActive ? 'active' : ''} id={title} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Btn
