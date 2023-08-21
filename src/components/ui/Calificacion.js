import React from 'react'

export const Calificacion = () => {
    return (
        <>
            <div className='row mb-3 mx-2 mt-4'>
                <div className='col-lg-3 '>
                    <div className='row mt-4'>
                        <div className='col-lg-3 text-center'>
                            <label className="form-label mt-2">10.000</label>
                        </div>

                        <div className='col-lg-6 '>
                            <input type="text" readOnly className="form-control mt-1" id='area' />
                        </div>
                    </div>
                    <div className='row mt-4 mb-2'>
                        <div className='col-lg-3 text-center'>
                            <label className="form-label mt-2">Jurado</label>
                        </div>

                        <div className='col-lg-6 '>
                            <input type="text" readOnly className="form-control mt-1" id='area' />
                        </div>
                    </div>
                </div>


                <div className='col-lg-9 col-md-8 bg-gris'>

                    <div className='row mt-2'>
                        <h6><strong>¡SOLO PARA SIS DE JURADO!</strong></h6>
                    </div>

                    <div className='row mb-2'>

                        <div className='col-7 '>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <span className='jurado'><strong>Creatividad</strong></span>
                                </div>
                                <div className='col-lg-2'>
                                    <input type="text" readOnly className="inputJurado" id='creatividad' />
                                </div>
                            </div>
                            <div className='row mt-1'>
                                <div className='col-lg-6'>
                                    <span className='jurado'><strong>Part. en la implementación</strong></span>
                                </div>
                                <div className='col-1'>
                                    <input type="text" readOnly className="inputJurado" id='partImplementacion' />
                                </div>
                            </div>
                            <div className='row mt-1'>
                                <div className='col-lg-6'>
                                    <span className='jurado'><strong>Relación con el cargo</strong></span>
                                </div>
                                <div className='col-lg-1'>
                                    <input type="text" readOnly className="inputJurado" id='relacionCargo' />
                                </div>
                            </div>

                            <div className='row mt-1'>
                                <div className='col-lg-6'>
                                    <span className='jurado'><strong>Aportes</strong></span>
                                </div>
                                <div className='col-lg-1'>
                                    <input type="text" readOnly className="inputJurado" id='aportes' />
                                </div>
                            </div>
                            <div className='row mt-1'>
                                <div className='col-lg-6'>
                                    <span className='jurado'><strong>Transversabilidad</strong></span>
                                </div>
                                <div className='col-lg-1'>
                                    <input type="text" readOnly className="inputJurado" id='transversabilidad' />
                                </div>
                            </div>
                            <div className='row mt-1'>
                                <div className='col-lg-6'>
                                    <span className='jurado'><strong>Total</strong></span>
                                </div>
                                <div className='col-lg-1'>
                                    <input type="text" readOnly className="inputJurado" id='total' />
                                </div>
                            </div>
                        </div>

                        <div className='col-5'>
                            <div className='row mt-1'>
                                <div className='col-lg-7'>
                                    <span className='jurado'><strong>Calificación Jurado</strong></span>
                                </div>
                                <div className='col-lg-1'>
                                    <input type="text" readOnly className="inputJurado" id='calificacionJurado' />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-lg-7'>
                                    <span className='jurado'><strong>Firma Jurado</strong></span>
                                </div>
                                <div className='col-lg-1'>
                                <span>_______________</span>
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-lg-7'>
                                    <span className='jurado'><strong>Nombre del Jurado</strong></span>
                                </div>
                                <div className='col-lg-1'>
                                    <span>_______________</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

/*
    
<input type="text" readOnly className="inputJurado2" id='firmaJurado' />
<input type="text" readOnly className="inputJurado2" id='nombreJurado' />
*/