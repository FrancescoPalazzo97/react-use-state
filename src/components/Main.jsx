import React from 'react'
import { useState } from 'react'
import languages from '../assets/languages'
import Btn from './Btn'

const Main = () => {

    const [content, setContent] = useState({
        title: '',
        description:
            'nessuna descrizione è stata selezionata. Seleziona un linguaggio per visualizzarne la descrizione.',
    })

    const { title, description } = content

    return (
        <main>
            <div className="container">
                <div id="btn-section">
                    {languages.map((language) => {
                        const { id, title, description } = language
                        const handleClick = () => setContent({ title, description })
                        return (
                            <Btn language={language} handleClick={handleClick} />
                        )
                    })}
                </div>
                <div id="card-section">
                    <div className="card">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
