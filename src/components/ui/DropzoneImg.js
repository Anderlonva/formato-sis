import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

export const DropzoneImg = ({ titulo }) => {
  // https://www.youtube.com/watch?v=41vjTLb8v0Q

  const [imageFiles, setImageFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImageFiles([...imageFiles, ...acceptedFiles]);
  }, [imageFiles]);

  const removeImage = (index) => {
    const newImageFiles = [...imageFiles];
    newImageFiles.splice(index, 1);
    setImageFiles(newImageFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop,
  });



  return (
    <>
      <div className='container'>
        <h5>{titulo}</h5>
      </div>
      <div className='border border-solid mb-3 '>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          <p className='mt-2 mx-2 hoverP containerDrop mb-0'>Arrastra y suelta las imágenes aquí o haz clic para seleccionarlas</p>
        </div>
        {imageFiles.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} className=''>
            {imageFiles.map((file, index) => (
              <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                <img src={URL.createObjectURL(file)} alt={`Imagen ${index}`} style={{ width: '180px', objectFit: 'cover' }} className='imgDropzone'/>
                <br />
                <button onClick={() => removeImage(index)} className='btn btn-danger botonEliminar mb-0'>x</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
