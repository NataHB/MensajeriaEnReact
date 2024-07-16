import gato from './Components/assets/img/gato.jpeg'
import gatito from './Components/assets/img/gatomeme.jpg'
import gatuno from './Components/assets/img/gatin.jpg'

export const contactos =[
    {
    nombre: 'Chancla',
    thumbnail: gato,
    ultima_conexion: 'ayer',
    id: 1,
    mensajes:[
            {
                author: 'cualquier nombre',
                text: 'holis',
                estado: 'entregado' ,
                day: 'hoy',
                hour: '13:15',
                id: 'valor_id'
            }
            ]
     },
     {
      nombre: 'Papu',
      thumbnail:gatito,
      ultima_conexion: 'ayer',
      id: 2,
      mensajes:[
              {
                  author: 'cualquier nombre',
                  text: 'chauchis',
                  estado: 'entregado' ,
                  day: 'hoy',
                  hour: '13:15',
                  id: 'valor_id'
              }
              ]
       },
       {
        nombre: 'Bigotes',
        thumbnail:gatuno,
        ultima_conexion: 'ayer',
        id: 3,
        mensajes:[
                {
                    author: 'cualquier nombre',
                    text: 'como estas?',
                    estado: 'entregado' ,
                    day: 'hoy',
                    hour: '13:15',
                    id: 'valor_id'
                }
                ]
         }
  ]

