import { registrarPersona, actualizarPersona, obtenerPersonas, eliminarPersona } from "./promesas.js";

window.addEventListener("load", () => {
    document.getElementById("botonRegistrar").addEventListener("click",registrar);
    document.getElementById("botonActualizar").addEventListener("click",actualizar);
    document.getElementById("botonRegistrar").addEventListener("click",validar);
    cargarDatos();
});

//nota aparte: OJO MEGA OJO CON LOS PARENTESIS Y LLAVES Y CORCHETES


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

   
    //crear un objeto
    let objeto = {nombre:vNombre,apellido:vApellido,edad:vEdad,correo:vCorreo,telefono:vTelefono}
    console.log(objeto);
    registrarPersona(objeto).then(() => {
    alert("Persona registrada con exito");
        cargarDatos();
    }).catch((r) => {
        alert("Error al registrar persona");
        alert(r);
    })
}

//esta funcion actualiza los datos que son ingresados 
const actualizar = () => {
    //nuevamente se recupera el elemento completo
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEdad = document.getElementById("edad");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");

    // recuperar el valor del elemento
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vEdad = eEdad.value;
    let vCorreo = eCorreo.value;
    let vTelefono = eTelefono.value;

    //crear objeto
    let objeto ={nombre:vNombre,apellido:vApellido,edad:vEdad,correo:vCorreo,telefono:vTelefono};
    console.log(objeto);           //console.log-> muestra datos que se piden del objeto
    let id = document.getElementById("botonActualizar").value;
    actualizarPersona(objeto,id).then(() => {
        alert("Persona actualizada");
        cargarDatos();
    }).catch((r) => {
        alert("Algo ocurrio");
        alert(r);
    });
}

  //cargarDatos-> se va la base de datos a buscar los datos almacanedos y los muestra en la estrucura 
const cargarDatos = () => {
    obtenerPersonas().then((personas) => {
        console.log("Datos recuperados");
        let estructura = "";
        personas.forEach((persona) =>{     //forEach ->recorre estructuras que contienen muchos elementos 
            estructura += "<tr>";
            estructura += "<td>"+persona.nombre+"</td>";
            estructura += "<td>"+persona.apellido+"</td>";
            estructura += "<td>"+persona.edad+"</td>";
            estructura += "<td>"+persona.correo+"</td>";
            estructura += "<td>"+persona.telefono+"</td>";
            estructura += "<td><button id= UPD"+persona.id+"> Actualizar </button></td>";
            estructura += "<td> <button id= DEL"+persona.id+"> Eliminar </button></td>";
            estructura += "</tr>";
            
        });
        document.getElementById("tbDatos").innerHTML = estructura; //Renderiza la estructura en el html
        //Agrego los eventos a los botones
        personas.forEach((persona) => {
            let botonUPD = document.getElementById("UPD"+persona.id);
            botonUPD.addEventListener("click",() => {
                let eNombre = document.getElementById("nombre");
                let eApellido = document.getElementById("apellido");
                let eEdad = document.getElementById("edad");
                let eCorreo = document.getElementById("correo");
                let eTelefono = document.getElementById("telefono");
                eNombre.value = persona.nombre;
                eApellido.value = persona.apellido;
                eEdad.value = persona.edad;
                eCorreo.value = persona.correo;
                eTelefono.value = persona.telefono;
                
                document.getElementById("botonActualizar").value = persona.id;
            });

            let botonDEL = document.getElementById("DEL"+persona.id); //Funcion para eliminar persona , DEL=DELETE
            botonDEL.addEventListener("click",() => { 
                 
                if (confirm("¿Desea eliminar a "+persona.nombre+" "+persona.apellido+"?")){
                    eliminarPersona(persona.id).then(() => {
                        alert("Persona eliminada");
                        cargarDatos();
                    });
                    
                }
                else{
                    alert("Persona no eliminada");
                }

            });
        });

        
    });
}

//funcion que cambia el contraste de la pagina
const cambioContraste = () =>{
    var element = document.body;
    element.classList.toggle("modooscuro")
}
 
document.addEventListener("DOMContentLoaded",() => {
    document.getElementById("cambioContraste").addEventListener("click", cambioContraste);
})


//funcion que cambia el tamaño de la letra de la pagina
const cambioFuente = () => {
    var element = document.body;
    element.classList.toggle("tamanio");
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cambioFuente").addEventListener("click", cambioFuente)
})

//funcion que ayuda a validar campos de lo pedido en el formulario
function validar(){
    validarVacio('nombre');
    validarVacio('apellido');
    validarVacio('edad');
    validarVacio('correo');
    validarLongitud('telefono',9);
}

function validarVacio(idCampo){                       //en caso de que los campos estén vacios se verá rojo
    let iNombre = document.getElementById(idCampo);
    console.log(iNombre+"linea158");
    let nombre = iNombre.value;
    console.log(nombre);
    console.log(typeof(nombre))
    if(nombre.trim()==""){
        iNombre.style.borderColor = "red";
        let pNombre = document.getElementById("p"+idCampo);
        pNombre.style.display = "block";
    }else{
        iNombre.style.borderColor = "green";
        let pNombre = document.getElementById("p"+idCampo);
        pNombre.style.display = "none";
    }
}


