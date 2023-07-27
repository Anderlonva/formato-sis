import React from 'react'

export const Descripcion = ({ titulo, idDescripcion }) => {
    return (
        <div className='row mt-3'>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label mx-2">{titulo}</label>
                <textarea class="form-control" id={idDescripcion} rows="3"></textarea>
            </div>
        </div>
    )
}
