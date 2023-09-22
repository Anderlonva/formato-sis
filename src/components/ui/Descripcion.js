
import React, { useState } from 'react';
import Modal from 'react-modal'; // Importa el componente Modal de react-modal

export const Descripcion = ({ titulo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contenido, setContenido] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (event) => {
    const contenidoInput = event.target.value;
    setContenido(contenidoInput);
  };

  return (
    <div className=''>
    <div className='row mt-3 mx-1 mb-4'>
      <div className="mb-3">
        { //<label className="form-label mx-2">{titulo}</label>
        }
        <button className='btn btn-outline-dark' onClick={openModal}>{titulo}</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contenido Modal"
      >
        <textarea
          className="form-control"
          rows="5"
          onChange={handleInputChange}
          value={contenido}
        ></textarea>
        <button className='mt-2 btn btn-warning' onClick={closeModal}>Ingresar Texto o Cerrar</button>
      </Modal>
      <div className="mt-2 border p-2" > {contenido}</div>
    </div>
    </div>
  );
};

/**
 * 
 * import React from 'react'

export const Descripcion = ({ titulo, idDescripcion }) => {

    const textareaStyle = {
        whiteSpace: 'pre-line', // Esto preservará los saltos de línea
      };


    return (
        <div className='row mt-3'>
            <div className="mb-3">
                <label htmlFor={idDescripcion} className="form-label mx-2">{titulo}</label>
                <textarea className="form-control" id={idDescripcion} rows="3" style={textareaStyle} ></textarea>
               
            </div>
        </div>
    )
}
 * 
 */