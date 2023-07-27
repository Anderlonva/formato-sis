import React from 'react'

export const Calificacion = () => {
    return (
        <>
            <div className='row mb-3 mx-2 '>
                <div className='col-3'>
                    <div className='row mt-4'>
                        <div className='col-3 text-center'>
                            <label className="form-label mt-2">10.000</label>
                        </div>

                        <div className='col-6 '>
                            <input type="text" readOnly class="form-control mt-1" id='area' />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-3 text-center'>
                            <label className="form-label mt-2">Jurado</label>
                        </div>

                        <div className='col-6 '>
                            <input type="text" readOnly class="form-control mt-1" id='area' />
                        </div>
                    </div>
                </div>


                <div className='col-8 bg-gris'>

                    <div className='row mt-2'>
                        <h6><strong>¡SOLO PARA SIS DE JURADO!</strong></h6>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-5 '>
                            <span className='jurado'><strong>Creatividad</strong></span><br />
                            <span className='jurado'><strong>Participación en la implementación</strong></span><br />
                            <span className='jurado'><strong>Relación con el cargo</strong></span><br />
                            <span className='jurado'><strong>Aportes</strong></span><br />
                            <span className='jurado'><strong>Transversabilidad</strong></span><br />
                            <span className='jurado'><strong>Total</strong></span><br />
                        </div>
                        <div className='col-3'>
                            <span className='jurado'><strong>Calificación Jurado</strong></span><br />
                            <br />
                            <span className='jurado'><strong>Firma Jurado</strong></span><br />
                            <br />
                            <span className='jurado'><strong>Nombre del jurado</strong></span><br />
                        </div>
                        <div className='col-2 '>
                            <div className='col'>
                                <input type="text" readOnly class="form-control mt-1" id='caJurado' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
