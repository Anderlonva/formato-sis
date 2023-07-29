import React from 'react'
import { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';

export const BotonGuardar = ({ resolution }) => {

  const saveAsPDF = () => {
    // Obtener el contenido de la página actual (root element)
    const rootElement = document.getElementById('root');

    // Opciones para el PDF
    const options = {
      margin: 10,
      filename: 'sis_web.pdf',
      image: { type: 'png', quality: 1 },
      html2canvas: { scale: 0.95 },
      jsPDF: { unit: 'pt', format: 'a2', orientation: 'portrait' },
    };

    // Crear el PDF a partir del contenido HTML
    html2pdf().set(options).from(rootElement).save();
  };


  /*const btnGuardar = () => {
      console.log("funciona boton")
      window.print()
  }*/

  return (
    <>
      <div className='row text-center mb-2'>
        <div className='col'>
          <button type="button" class="btn btn-dark" onClick={saveAsPDF}>Guardar</button>
        </div>
      </div>
    </>
  )
}

/*
    resolucion sea el pc que sea 

    diseño: retrato
    tamaño papel: A3
    paginas por hoja: 1
    margenes: ninguno
    escala: personalizado a 80 
    opciones : graficos de fondo check
 */