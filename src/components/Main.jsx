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

    const [active, setActive] = useState(null)

    return (
        <main>
            <div className="container">
                <div id="btn-section">
                    {languages.map((language) => {

                        const { id, title, description } = language

                        const handleClick = () => (
                            setContent({ title, description }),
                            setActive(active === id ? null : id)
                        )

                        return (
                            <Btn
                                key={id}
                                language={language}
                                isActive={active === id}
                                handleClick={handleClick} />
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
