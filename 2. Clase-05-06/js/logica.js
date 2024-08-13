console.log('logica inicio sesion');

const usuario = 'admin'
const clave = '1234'
let contador =0

let usuarios =[
    {"usario":"Ozkr", "clave":"1234", "edad":15},
    {"usuario":"admin", "clave":"4567", "edad":20},
    {"usuario":"otro", "clave":"1111", "edad":18},
    {"usuario":"otro", "clave":"1111", "edad":10}]

let fruta = ['Manzana','Pera','Sandia']

function pruebaBoton(){
    let frutasMayus= frutas.map(fruta=>fruta.toLocaleUpperCase())

    let usarioEdad= usuarios.map(usuario=>{
        return{
            ...usuario,
            edadRta:usario.edad >=18 ? "Mayor Edad" :"Menor Edad"
        }
    })

    console.log(usarioEdad);
}

// function pruebaBoton(){

//     let user = document.getElementById('user').value
//     let usuariosEdad= usuarios.find(usuario=> usuario.usuario===user)
    
//     console.log(buscarUsuario);
// }

// function pruebaBoton(){

//     let user = document.getElementById('user').value.toLocaleUpperCase()
//     let pw = document.getElementById('pw').value

//     let usuarioLogueado= usuarios.some(usuario=> usuario.usuario.toLocaleUpperCase()==user && usuario.clave==pw){

//     if(usuarioLogueado){
//         setUser()
//         window.open('LocalStorage.html')
//     }else{

//         bloquearCuenta()
//         console.log('error de credenciales');
//     }
// }
// // function pruebaBoton(){

//     let user = document.getElementById('user').value.toLocaleUpperCase()
//     let pw = document.getElementById('pw').value

//     if(usuario.toLocaleUpperCase()==user && clave==pw){
//         //logeado
//         setUser()
//         window.open('localstorege.html')
//     }else{
//         bloquearCuenta()
//         console.log(`Error de credencial`);
//     }

//Bloquear el acceso
function bloquearCuenta(){
    let contadorStorage =getStorage()
    console.log(`valor inicial storage ${contadorStorage}`);
    if(contador==3){
        console.log(`cuenta bloqueada`);
    }else{
        contarIntentos()
    }

}
//Contar cada vez que me equivoque

function contarIntentos(){
    let contadorStorage =localStorage.getItem(`contador`) || 0
    contadorStorage++
    console.log(`contador antes de sumar${contadorStorage}`);
    setContador(contadorStorage)
}

function imprimir(mensaje,valor){
    console.log(`${mensaje} ${valor}`);
}

function setUser(){
    localStorage.setItem('usuario',usuario)
}

function setContador(){
    localStorage.setItem('contador',contador)
}

function desbloquearCuenta(){
    localStorage.removeItem('contador')
}

function imprimirArreglo(){
    let posicion= document.getElementById('arrayPosicion').value
    console.log(localStorage.getItem('arregloFrutas'));

    if(posicion>=frutas.length){
        console.log('posicion no valida');
        limpiar()
    }else{
        console.log(frutas[posicion]);
    }
}

function limpiar(){
    document.getElementById('arrayPosicion').value =''
    document.getElementById('arrayPosicion').focus()
}

function agregarFruta(){
    let nombreFruta=document.getElementById('arrayPosicion').value.toLocaleUpperCase()
    nombreFruta= nombreFruta.trim()
    if(nombreFruta.trim()!==''){
        frutas.push(nombreFruta)
        guardaStorage(frutas)
        console.log(frutas);
        console.log(`Se agrego la fruta ${nombreFruta}`);
        document.getElementById('nombreFruta').focus()
    }else{
        console.log('Nombre no valido');
    }
}

function eliminarFruta(){
    let posicion= document.getElementById('arrayPosicion').value
    frutas.splice(posicion,1)
    console.log('eliminar '+frutas);
}