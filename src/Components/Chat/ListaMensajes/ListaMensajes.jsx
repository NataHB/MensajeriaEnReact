import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'

export const ListaMensajes = ({lista}) => {
   
  return (
    <>
    {lista.map((mensaje) => <Mensaje propiedades={mensaje} key={mensaje.id}/>)}
    </>
  )
}
