import React, { useEffect } from 'react'

export const SomeComponentWithLogic = () => {
    useEffect(()=> {
        console.log('The useEffect ran!')
    }, [])

    console.log('The child component rerendered!')
    
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, numquam.</p>
        </div>
    )
}

