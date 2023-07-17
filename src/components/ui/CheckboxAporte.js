import React from 'react'

export const CheckboxAporte = () => {
  return (
    <>
        <div className='row mt-3'>
                <div className='col-2'>
                    <label className="col-form-label mt-2">Aporte de la idea</label>
                </div>
                <div className='col-2 mt-3'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="productividad"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Productividad
                            </label>
                    </div>
                </div>

                <div className='col-2 mt-3'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="condicionesDeTrabajo"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Condiciones de trabajo
                            </label>
                    </div>
                </div>

                <div className='col-2 mt-3'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="MedioAmbiente"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Medio ambiente
                            </label>
                    </div>
                </div>

                <div className='col-1 mt-3'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="calidad"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Calidad
                            </label>
                    </div>
                </div>

                <div className='col-1 mt-3'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="costos"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Costos
                            </label>
                    </div>
                </div>

                <div className='col-1 mt-3'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="otros"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Otros
                            </label>
                    </div>
                </div>
                
            </div>
    </>
  )
}
