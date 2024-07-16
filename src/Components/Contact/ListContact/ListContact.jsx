import React, { useEffect } from 'react'
import { obtenerContactos } from '../../../Fetching/data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ListContact.css'

export const ListContact = () => {

const [contactos, setContactos] = useState([])
const [isLoading, setIsLoading] = useState(true)

    useEffect(
        () => {
            setTimeout(()=> {
                obtenerContactos()
        .then((contactos) => { 
            console.log('contactos', contactos) 
            setContactos(contactos) 
            setIsLoading(false)
        })
            }, 500
            )
        
    }, 
    []
)
    return (
        <div className='contactos'>
        {
        isLoading 
        ? <h2>Cargando...</h2>
        : contactos.map((contacto, index) => 
            <Link to={'/chat/' + contacto.id} key={index}>
                <div className='contacto' key={index}>
                    <img src={contacto.thumbnail} alt="gato"/>
                    <h3>{contacto.nombre}</h3>
                    <p>{contacto.ultima_conexion}</p>
                </div>
            </Link>
        )
        }
        </div>
    )
}
