console.log('logica storege');

const user =localStorage.getItem('usuario')

document.getElementById('titulo').innerHTML= `Bienvenido ${user}`