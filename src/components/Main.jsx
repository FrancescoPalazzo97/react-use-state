import React from 'react'
import { useState } from 'react'
import languages from '../assets/languages'

const Main = () => {
    return (
        <main>
            <div className="container">
                <div id="btn-section">
                    <h2>Languages</h2>
                    {languages.map((language) => {
                        return (
                            <button key={language.id} className="btn" id={language.id}>
                                {language.title}
                            </button>
                        )
                    })}
                </div>
                <div id="card-section"></div>
            </div>
        </main>
    )
}

export default Main
