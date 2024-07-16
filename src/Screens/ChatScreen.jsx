import React, { useEffect } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import './ChatScreen.css'
import { useState } from 'react'
import { obtenerContactos} from '../Fetching/data'
import { useParams } from 'react-router-dom'
import gatoUsuario from '../Components/assets/img/gatoUsuario.jpg'

export const ChatScreen = () =>{
  const urlParams = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [contactos, setContactos] = useState([
    {
        nombre: '',
        mensajes: [
            {
                author: "",
                text: "",
                estado: "",
                day: "",
                hour: "",
                id: ""
            }
        ],
        id: Number(urlParams.id)
    }
])
  
  useEffect(
    () => {
        setTimeout(()=> {
            obtenerContactos()
    .then((contactos) => {
        console.log('contactos', contactos)
        setContactos(contactos)
        setMensajes(contactos[Number(urlParams.id -1)].mensajes)
        setIsLoading(false)
    })
        }, 1000
        )
    
}, 
[]
)

  const id = contactos.find(contacto => contacto.id === Number(urlParams.id))
  const { nombre, thumbnail, mensajes }= id

  const [AcumuladorMensajes, setMensajes] = useState(mensajes);


  const addMensaje = (mensajeNuevo) => {
    setMensajes([...AcumuladorMensajes, {
      author: 'yo',
      text: mensajeNuevo,
      estado: 'no visto',
      day: 'hoy',
      hour: '13:18',
      id: AcumuladorMensajes.length + 1
  }] )
  }

  return (
    <div>
    {
      isLoading
      ?<div className='screen'>
      <ChatHeaderInfo nombre='...' thumbnail={gatoUsuario}/>
        <div className='chat'>
          <ListaMensajes lista={AcumuladorMensajes}/> 
        </div>
      <MensajeForm addMensaje={addMensaje}/>
    </div>
      :<div className='screen'>
        <ChatHeaderInfo nombre={nombre} thumbnail={thumbnail}/>
          <div className='chat'>
            <ListaMensajes lista={AcumuladorMensajes}/> 
          </div>
        <MensajeForm addMensaje={addMensaje}/>
      </div>
    }
    </div>
  )
}
