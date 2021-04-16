/* setTimeout(() => {
    console.log('hola mundo');
}, 1000); */

const getUsuariosById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fermando'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsuariosById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});