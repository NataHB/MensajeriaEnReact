import React from 'react'
import './ChatHeaderInfo.css'
import camara from '../../assets/img/video-camara.png'
import telefono from '../../assets/img/telefono.png'
import puntos from '../../assets/img/puntos.png'
import angulo from '../../assets/img/angulo.png'
import { useNavigate } from 'react-router-dom'

export const ChatHeaderInfo = ({ nombre, thumbnail }) => {

  const navigate = useNavigate();

  const handleClick = (e) => {
      e.preventDefault();
      navigate('/');
  };

  return (
    <div className="chat-header-info">
      <div className='chat-header'>
        <img onClick={handleClick} src={angulo} style={{ cursor: 'pointer' }} alt="angulo"/>
        <img src={`../../${thumbnail}`} alt="gato soldado"/>
        <div>
          <h1 className="perfil-nombre">{nombre}</h1>
          <p className="estado-texto">En línea</p>
        </div>
      </div>
      <div className="iconos">
        <img src={telefono} alt='telefono'/>
        <img src={camara} alt='camara'/>
        <img src={puntos} alt='puntos'/>
      </div>
    </div>
  )
}

export default ChatHeaderInfo
