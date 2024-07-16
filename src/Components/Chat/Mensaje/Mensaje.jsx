import React from 'react'
import './Mensaje.css'
export const Mensaje = ({propiedades}) => {
  const {author, text, estado, day, hour, id} = propiedades
  let direccion
  let color
  if(author === 'yo'){
    direccion = 'end'
    color = '#ff3198'
  }

  return (
    <div className='contenedor'  style={{justifyContent: direccion}}>
      <div className='mensaje' style={{backgroundColor: color}}>
          <p className='texto'>
          {text}
          </p>
          <div className='contenedorInferior'>
              <span className='timeSince'>
                  {`${day} ${hour}`}
              </span>
              <span className='timeSince'>
                  {estado}
              </span>
          </div>
      </div>
  </div>
  )
}
