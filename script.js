            // COMPONENTES DEL HTML //
const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');
const boton4 = document.querySelector('#boton4');
const boton5 = document.querySelector('#boton5');

const respuesta1 = document.querySelector('#respuesta1');


                // LISTENERS //
boton1.addEventListener('click', () => abrirRespuesta('1'));
boton2.addEventListener('click', () => abrirRespuesta('2'));
boton3.addEventListener('click', () => abrirRespuesta('3'));
boton4.addEventListener('click', () => abrirRespuesta('4'));
boton5.addEventListener('click', () => abrirRespuesta('5'));


                // FUNCIONES //
function abrirRespuesta(numeroRespuesta) {
    
    const respuesta = document.getElementById(`respuesta${numeroRespuesta}`);
    respuesta.classList.toggle('respuestaInactiva');
}
    



                




