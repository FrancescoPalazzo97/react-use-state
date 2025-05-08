import React from 'react'
import { useState } from 'react'
import languages from '../assets/languages'
import Btn from './Btn'
import Card from './Card'

const Main = () => {

    const [content, setContent] = useState({
        title: '',
        description:
            'nessuna descrizione è stata selezionata. Seleziona un linguaggio per visualizzarne la descrizione.',
    })

    return (
        <main>
            <div className="container">
                <div id="btn-section">
                    {languages.map((language) => {
                        const { id, title, description } = language
                        const handleClick = () => setContent({ title, description })
                        return (
                            <Btn key={id} language={language} handleClick={handleClick} />
                        )
                    })}
                </div>
                <div id="card-section">
                    <Card content={content} />
                </div>
            </div>
        </main>
    )
}

export default Main
