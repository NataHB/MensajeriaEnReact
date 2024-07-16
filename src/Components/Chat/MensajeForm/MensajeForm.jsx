import React from 'react'
import './MensajeForm.css'


export const MensajeForm = ({addMensaje}) => { 

  const handleSubmit = (e) => {
    e.preventDefault()
    addMensaje(e.target.mensaje.value)
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='input-mensaje'
          type="text"
          name="mensaje"
          placeholder="Escribe un mensaje"
        />
        <button className='boton-mensaje' type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default MensajeForm
