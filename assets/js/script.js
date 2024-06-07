
//import personas... qui tienen que estar las importaciones de las funciones que se estan usando
// antes de las funciones se comienza con un  una ventana + LOAD+funcion flecha que las contengan los elemnetos

wundow.addEventListener("load", () => {
    document.getElementById("botonRegistrar").addEventListener("click",registrar);
    document.getElementById("botonActualizar").addEventListener("click",actualizar);
}); //faltan cosas 

//nota aparte: OJO MEGA OJO CON LOS PARENTESIS Y LLAVES Y CORCHETES

//OJITOO a las siguientes funciones le faltan datos, solo están los trabajados en clases 
const registrar = () => {
    //Esta funcion recupera un elemento completo,todo todito; e=elemento como referencia
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEdad = document.getElementById("edad");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");

    //si creo un elemento debo recuperar su valor; v= valor como referencia
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vEdad = eEdad.value;
    let vCorreo = eCorreo.value;
    let vTelefono = eTelefono.value;

    //creo un objeto
    let objeto = {vNombre,vApellido,vEdad,vCorreo,vTelefono}
    console.log(objeto);
    registrarPersona(objeto).then(() => {
    alert("Persona registrada con exito");
        //cargarDatos();
    })//.catch(r) => {
        alert("Error al registrar persona");
        alert(r);
}

const actualizar = () => {
    //nuevamente se recupera el elemento completo
    let eNombre = document.getElementById("UPDnombre");
    let eApellido = document.getElementById("UPDapellido");
    let eEdad = document.getElementById("UPDedad");
    let eCorreo = document.getElementById("UPDcorreo");
    let eTelefono = document.getElementById("UPDtelefono");

    // debo recuperar el valor del elemento
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vEdad = eEdad.value;
    let vCorreo = eCorreo.value;
    let vTelefono = eTelefono.value;

}


//en general hay que hacer cambios mas modificar algunos detalles 
const eliminar = () =>{}