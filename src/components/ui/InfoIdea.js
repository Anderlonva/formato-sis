import React from 'react'
import { CheckboxAporte } from './CheckboxAporte'
import { Descripcion } from './Descripcion'

export const InfoIdea = () => {

    let titulo = 'Descripción del problema o situación'
    let idDes = 'descripcionProblema'

    return (
        <>
            <div className='row mt-3'>
                <div className='col-lg-4 col-md-12 text-center'>
                    <label className="col-form-label mt-2">Puesto de implementación de la idea</label>
                </div>
                <div className='col-lg-8 col-md-12 text-center'>
                    <input type="text" className="form-control mt-1" id='puestoImplementacionIdea' />
                </div>

            </div>

            <CheckboxAporte />

            <div className='row mt-3'>
                <div className='col-lg-2 col-md-4'>
                    <label className="col-form-label mt-2">Fecha Implementación</label>
                </div>
                <div className='col-lg-2 col-md-4 text-center'>
                    <input type="text" className="form-control mt-1" id='fechaImplementacion' placeholder='DIA - MES - AÑO' />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-2 col-md-4 text-center'>
                    <label className="col-form-label mt-2">Titulo de la idea</label>
                </div>
                <div className='col-lg-8 col-md-8 text-center'>
                    <input type="text" className="form-control mt-1" id='tituloIdea' />
                </div>
            </div>

            <Descripcion titulo={titulo} idDescripcion={idDes}/>

        </>
    )
}
