import React from 'react'

export const InfoOperario = () => {
    return (
        <>
            <div className='row mt-3'>
                <div className='col-lg-1 col-md-2 col-sm-12 text-center'>
                    <label className="col-form-label mt-2">Nombre</label>
                </div>
                <div className='col-lg-7 col-md-10'>
                    <input type="text" class="form-control mt-1" id='nombre' />
                </div>
                <div className='col-lg-1 col-md-2 col-sm-12 text-center'>
                    <label className="col-form-label mt-2">Cédula</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" class="form-control mt-1" id='cedula' />
                </div>

            </div>

            <div className='row mt-3'>
                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">Área</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" class="form-control mt-1" id='area' />
                </div>
                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">Cargo</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" class="form-control mt-1" id='cargo' />
                </div>
                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">Facilitador</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" class="form-control mt-1" id='facilitador' />
                </div>
            </div>

            <div className='row mt-3'>

            <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">JT</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" class="form-control mt-1" id='jt' />
                </div>

                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">JU</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" class="form-control mt-1" id='ju' />
                </div>

                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">UET</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" class="form-control mt-1" id='uet' />
                </div>


            </div>
        </>
    )
}
