export const obtenerContactos = async () => {
    const response = await fetch(
        '/data.json', 
        {method: 'GET'}
    )
    const contactos = response.json()
    return contactos
}