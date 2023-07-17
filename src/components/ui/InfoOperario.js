import React from 'react'

export const InfoOperario = () => {
    return (
        <>
            <div className='row mt-3'>
                <div className='col-1'>
                    <label className="col-form-label mt-2">Nombre</label>
                </div>
                <div className='col-3 text-center'>
                    <input type="text" class="form-control mt-1" id='nombre' />
                </div>
                <div className='col-1 text-center'>
                    <label className="col-form-label mt-2">Cedula</label>
                </div>
                <div className='col-3'>
                    <input type="text" class="form-control mt-1" id='cedula' />
                </div>
                <div className='col-1 text-center'>
                    <label className="col-form-label mt-2">Area</label>
                </div>
                <div className='col-3'>
                    <input type="text" class="form-control mt-1" id='area' />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-1'>
                    <label className="col-form-label mt-2">Cargo</label>
                </div>
                <div className='col-3 text-center'>
                    <input type="text" class="form-control mt-1" id='cargo' />
                </div>
                <div className='col-1 text-center'>
                    <label className="col-form-label mt-2">Facilitador</label>
                </div>
                <div className='col-3'>
                    <input type="text" class="form-control mt-1" id='facilitador' />
                </div>
                <div className='col-1 text-center'>
                    <label className="col-form-label mt-2">UET</label>
                </div>
                <div className='col-3'>
                    <input type="text" class="form-control mt-1" id='area' />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-1'>
                    <label className="col-form-label mt-2">JU</label>
                </div>
                <div className='col-3 text-center'>
                    <input type="text" class="form-control mt-1" id='cargo' />
                </div>
                <div className='col-1 text-center'>
                    
                </div>
                <div className='col-3'>
                    
                </div>
                <div className='col-1 text-center'>
                    
                </div>
                <div className='col-3'>
                    
                </div>
            </div>
        </>
    )
}
