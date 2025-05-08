import React from 'react'

const Btn = ({ language, handleClick }) => {

    const { id, title, description } = language

    return (
        <button key={id} className="btn" id={id} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Btn
