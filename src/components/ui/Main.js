import React from 'react'
import { HeaderDoc } from './HeaderDoc'
import { InfoOperario } from './InfoOperario'
import { InfoIdea } from './InfoIdea'

export const Main = () => {
    return (
        <div className='container border border-3'>
            <HeaderDoc/>
            <InfoOperario/>
            <InfoIdea/>

        </div>
    )
}
