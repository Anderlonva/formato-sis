import React from 'react'
import { CheckboxAporte } from './CheckboxAporte'

export const InfoIdea = () => {
    return (
        <>
            <div className='row mt-3'>
                <div className='col-4 text-center'>
                    <label className="col-form-label mt-2">Puesto de implementación de la idea</label>
                </div>
                <div className='col-8 text-center'>
                    <input type="text" class="form-control mt-1" id='puestoImplementacionIdea' />
                </div>

            </div>

            <CheckboxAporte />

            <div className='row mt-3'>
                <div className='col-2'>
                    <label className="col-form-label mt-2">Fecha Implementación</label>
                </div>
                <div className='col-2 text-center'>
                    <input type="text" class="form-control mt-1" id='fechaImplementacion' placeholder='DIA - MES - AÑO' />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-2 text-center'>
                    <label className="col-form-label mt-2">Titulo de la idea</label>
                </div>
                <div className='col-8 text-center'>
                    <input type="text" class="form-control mt-1" id='tituloIdea' />
                </div>
            </div>

            <div className='row mt-3'>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label mx-2">Descripcion del problema o situación</label>
                    <textarea class="form-control" id="descripcionProblema" rows="3"></textarea>
                </div>
            </div>

        </>
    )
}
