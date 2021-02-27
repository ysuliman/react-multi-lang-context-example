import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const HomePage = () => {
    const [Language, setLanguage] = useContext(LanguageContext)

    return (
        <div>
            <h1>Title: {Language.title}</h1>
            <p>Intro: {Language.intro}</p>
        </div>
    )
}

export default HomePage
