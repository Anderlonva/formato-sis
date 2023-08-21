import React from 'react'

export const CheckboxAporte = () => {
  return (
    <>
        <div className='row mt-3'>
                <div className='col-lg-2 col-md-12'>
                    <label className="col-form-label mt-2">Aporte de la idea</label>
                </div>
                <div className='col-lg-2 col-md-4 mt-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="productividad"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Productividad
                            </label>
                    </div>
                </div>

                <div className='col-lg-2 col-md-4 mt-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="condicionesDeTrabajo"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Condiciones de trabajo
                            </label>
                    </div>
                </div>

                <div className='col-lg-2 col-md-4 mt-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="MedioAmbiente"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Medio ambiente
                            </label>
                    </div>
                </div>

                <div className='col-lg-1 col-md-4 mt-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="calidad"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Calidad
                            </label>
                    </div>
                </div>

                <div className='col-lg-1 col-md-4 mt-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="costos"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Costos
                            </label>
                    </div>
                </div>

                <div className='col-lg-1 col-md-4 mt-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="otros"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Otros
                            </label>
                    </div>
                </div>
                
            </div>
    </>
  )
}
