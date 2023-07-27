import React from 'react'

export const BotonGuardar = () => {

    const btnGuardar = () => {
        console.log("funciona boton")
    }

  return (
    <>
        <div className='row text-center mb-2'>
            <div className='col'>
            <button type="button" class="btn btn-dark" onClick={btnGuardar}>Guardar</button>
            </div>
        </div>
    </>
  )
}
