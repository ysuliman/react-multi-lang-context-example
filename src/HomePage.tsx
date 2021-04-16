import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import { SomeComponentWithLogic } from './SomeComponentWithLogic'

const HomePage = () => {
    const [Language,] = useContext(LanguageContext)
    console.log('HomePage rerendered.')

    return (
        <div>
            <h1>Title: {Language.title}</h1>
            <p>Intro: {Language.intro}</p>
            <SomeComponentWithLogic />
        </div>
    )
}

export default HomePage
