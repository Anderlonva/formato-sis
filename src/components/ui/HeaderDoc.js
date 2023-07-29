import React from 'react'
import logoSis from '../img/img/sis2.jpg'

export const HeaderDoc = () => {
    return (
        <>
            <div className='row mt-3'>
                <div className='col-4'>
                    <h1 className='title-doc'><span className='title-groupe'>GROUPE</span> RENAULT</h1>
                </div>
                <div className='col-4 text-center'>
                    <img className='' src={logoSis}></img>
                </div>
                <div className='col-2 text-center'>
                    <label className="col-form-label mt-2">No. Sugerencia</label>
                </div>
                <div className='col-2'>
                    <input type="text" class="form-control mt-1" disabled/>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>

                </div>
                <div className='col-4 text-center'>

                </div>
                <div className='col-2 text-center'>
                    <label className="col-form-label mt-1">Fecha</label>
                </div>
                <div className='col-2'>
                    <input type="text" class="form-control mt-1" placeholder='DIA - MES - AÑO'/>
                </div>
            </div>
        </>
    )
}
