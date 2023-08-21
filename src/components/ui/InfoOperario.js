import React from 'react'
import { useLocalStorage } from '../customHooks/useLocalStorage'

export const InfoOperario = () => {

    const [ name, setName ] = useLocalStorage('nombre', '')
    const [ id, setId ] = useLocalStorage('cedula', '')
    const [ area, setArea ] = useLocalStorage('area', '')
    const [ cargo, setCargo ] = useLocalStorage('cargo', '')
    const [ facilitador, setFacilitador ] = useLocalStorage('facilitador', '')
    const [ jt, setJt ] = useLocalStorage('jt', '')
    const [ ju, setJu ] = useLocalStorage('ju', '')
    const [ uet, setUet ] = useLocalStorage('uet', '')

    

    return (
        <>
            <div className='row mt-3'>
                <div className='col-lg-1 col-md-2 col-sm-12 text-center'>
                    <label className="col-form-label mt-2">Nombre</label>
                </div>
                <div className='col-lg-7 col-md-10'>
                    <input type="text" className="form-control mt-1" id='nombre' onChange={ e => setName(e.target.value)} value={name} />
                </div>
                <div className='col-lg-1 col-md-2 col-sm-12 text-center'>
                    <label className="col-form-label mt-2">Cédula</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" className="form-control mt-1" id='cedula'  onChange={ e => setId(e.target.value)} value={id} />
                </div>

            </div>

            <div className='row mt-3'>
                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">Área</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" className="form-control mt-1" id='area'  onChange={ e => setArea(e.target.value)} value={area} />
                </div>
                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">Cargo</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" className="form-control mt-1" id='cargo' onChange={ e => setCargo(e.target.value)} value={cargo} />
                </div>
                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">Facilitador</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" className="form-control mt-1" id='facilitador' onChange={ e => setFacilitador(e.target.value)} value={facilitador} />
                </div>
            </div>

            <div className='row mt-3'>

            <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">JT</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" className="form-control mt-1" id='jt' onChange={ e => setJt(e.target.value)} value={jt} />
                </div>

                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">JU</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" className="form-control mt-1" id='ju' onChange={ e => setJu(e.target.value)} value={ju} />
                </div>

                <div className='col-lg-1 col-md-2 text-center'>
                    <label className="col-form-label mt-2">UET</label>
                </div>
                <div className='col-lg-3 col-md-4'>
                    <input type="text" className="form-control mt-1" id='uet' onChange={ e => setUet(e.target.value)} value={uet} />
                </div>


            </div>
        </>
    )
}
