import React from 'react'
import { HeaderDoc } from './HeaderDoc'
import { InfoOperario } from './InfoOperario'
import { InfoIdea } from './InfoIdea'
import { DropzoneImg } from './DropzoneImg'
import { Descripcion } from './Descripcion'
import { Calificacion } from './Calificacion'

export const Main = () => {

    let antes = 'Antes'
    let despues = 'Después'
    let descripcion = 'Descripción de la Idea'
    let idDes = 'descripcionSolucion'

    return (
        <div className='container border border-3 mb-3'>
            <HeaderDoc/>
            <InfoOperario/>
            <InfoIdea/>
            <DropzoneImg titulo={antes}/>
            <Descripcion titulo={descripcion} idDescripcion={idDes}/>
            <DropzoneImg titulo={despues}/>
            <Calificacion/>

        </div>
    )
}
