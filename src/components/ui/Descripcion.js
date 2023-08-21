import React from 'react'

export const Descripcion = ({ titulo, idDescripcion }) => {
    return (
        <div className='row mt-3'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label mx-2">{titulo}</label>
                <textarea className="form-control" id={idDescripcion} rows="3"></textarea>
            </div>
        </div>
    )
}
