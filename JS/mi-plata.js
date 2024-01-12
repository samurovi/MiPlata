//Carousel

let posicion = 1;

function regresar (){
    if (posicion == 3){
        document.getElementById('slide').style.transform = "translateX(-100%)";
        posicion = 2;
    }else if (posicion == 2){
        document.getElementById('slide').style.transform = "translateX(0%)";
        posicion = 1;
    }else{
        document.getElementById('slide').style.transform = "translateX(0%)";
    }
    event.preventDefault();
}

function adelantar (){
    if (posicion == 1){
        document.getElementById('slide').style.transform = "translateX(-100%)";
        posicion = 2;
    }else if (posicion == 2){
        document.getElementById('slide').style.transform = "translateX(-200%)";
        posicion = 3;
    }else {
        document.getElementById('slide').style.transform = "translateX(-200%)";
    }
    event.preventDefault();
}

//Arreglo para almacenar datos de registro

let datosRegistro = [];

//Saldo inicial

let saldo = parseFloat(1000000);

//Usuario

let usuarioPrincipal = "";

//Contraseña

let clavePrincipal = parseInt(0);

//Arreglos para almacenar movimientos

let movimientosRetiros = [];
let movimientosConsignaciones = [];


//Abrir formulario ingreso

function activarIngreso(){
    let ingreso = document.getElementById("ingreso");
    ingreso.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Cerrar formulario ingreso
function cerrarIngreso(){
    let ingreso = document.getElementById("ingreso");
    ingreso.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "100%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "100%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "100%"

    event.preventDefault();
}

//Abrir formulario registro
function activarRegistro(){
    let registro = document.getElementById("registro");
    registro.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Registrarse
function procesoRegistro(event){
    let identificacion = document.getElementById("id").value;
    datosRegistro.push(identificacion);
    let usuario = document.getElementById("usuario").value;
    datosRegistro.push(usuario);
    let correo = document.getElementById("email").value;
    datosRegistro.push(correo);
    let clave = document.getElementById("clave").value;
    datosRegistro.push(clave);
    let repetirClave = document.getElementById("repetir-clave").value;
    datosRegistro.push(repetirClave);

    usuarioPrincipal = usuario;
    clavePrincipal = parseInt(clave);

    document.getElementById("texto-registro").innerText = "Tu registro ha sido completado con éxito"
    document.getElementById("iniciar-sesion").style.display = "flex";

    event.preventDefault();
}

//Inciar sesión post registro
function iniciarSesionRegistro(){
    let ingreso = document.getElementById("ingreso");
    ingreso.style.display = "flex";
    let registro = document.getElementById("registro");
    registro.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Cerrar formulario registro
function cerrarRegistro(){
    let registro = document.getElementById("registro");
    registro.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "100%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "100%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "100%"

    document.getElementById("texto-registro").innerText = ""
    document.getElementById("iniciar-sesion").style.display = "none";
    document.getElementById("id").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("email").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("repetir-clave").value = "";

    event.preventDefault();
}

let intentos = parseInt(0);

//Abrir formulario consultas
function condicion (){
    
    function activarConsultas(){
        let usuarioIngreso = document.getElementById("usuarioIngreso").value;
        let claveIngreso = parseInt(document.getElementById("claveIngreso").value);
            if (usuarioIngreso === usuarioPrincipal && claveIngreso === clavePrincipal){
                let consultas = document.getElementById("consultas");
                consultas.style.display = "flex";
                let ingreso = document.getElementById("ingreso");
                ingreso.style.display = "none";
                let difuminar1 = document.getElementById("section-carousel");
                difuminar1.style.opacity = "40%"
                let difuminar2 = document.getElementById("section-1");
                difuminar2.style.opacity = "40%"
                let difuminar3 = document.getElementById("section-2");
                difuminar3.style.opacity = "40%"
            }else if (usuarioIngreso !== usuarioPrincipal && claveIngreso !== clavePrincipal){
                if (intentos<=2){
                    document.getElementById("texto-ingreso").innerText = "El usuario y la clave son incorrectos"
                    intentos = intentos + 1;
                    document.getElementById("intentos").innerText = "Intentos fallidos: "+ intentos;
                }else{
                    document.getElementById("texto-ingreso").innerText = "Cuenta bloqueada por 24 horas, comunícate con tu banco"
                }
            }else if (usuarioIngreso !== usuarioPrincipal && claveIngreso === clavePrincipal){
                if (intentos<=2){
                    document.getElementById("texto-ingreso").innerText = "El usuario es incorrecto"
                    intentos = intentos + 1;
                    document.getElementById("intentos").innerText = "Intentos fallidos: "+ intentos;
                }else{
                    document.getElementById("texto-ingreso").innerText = "Cuenta bloqueada por 24 horas, comunícate con tu banco"
                }
            }else{
                if (intentos<=2){
                    document.getElementById("texto-ingreso").innerText = "La clave es incorrecta"
                    intentos = intentos + 1;
                    document.getElementById("intentos").innerText = "Intentos fallidos: "+ intentos;
                }else{
                    document.getElementById("texto-ingreso").innerText = "Cuenta bloqueada por 24 horas, comunícate con tu banco"
                }
            }
    }
    activarConsultas();
   
    event.preventDefault();
}


//Cerrar formulario consultas
function cerrarConsultas(){
    let consultas = document.getElementById("consultas");
    consultas.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "100%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "100%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "100%"

    event.preventDefault();
}

//Abrir formulario retiros

function activarRetiros(){
    let retiros = document.getElementById("retiros");
    retiros.style.display = "flex";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Retirar dinero

function retirarDinero(){
    let vlrRetiro = parseFloat(document.getElementById("cantidad-retiro").value);
    if(vlrRetiro>saldo){
        document.getElementById("texto-resultado").innerText = "Su transacción no puedo completarse debido a fondos insuficientes";
    }else{
        let resultado = parseFloat(saldo - vlrRetiro);
        document.getElementById("texto-resultado").innerText = "Su transacción fué exitosa. Su nuevo saldo es de:";
        document.getElementById("nuevo-saldo").innerText = resultado;
        let finalizar = document.getElementById("finalizar");
        finalizar.style.display = "flex";
        saldo = resultado;
        movimientosRetiros.push(vlrRetiro);
    }
    event.preventDefault();
}


//Cerrar formulario retiros

function cerrarRetiros(){
    let retiros = document.getElementById("retiros");
    retiros.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"
    document.getElementById("texto-resultado").innerText = "";
    document.getElementById("nuevo-saldo").innerText = "";
    let finalizar = document.getElementById("finalizar");
    finalizar.style.display = "none";
    document.getElementById("cantidad-retiro").value = "";

    event.preventDefault();
}

//Regresar a consultas general desde retiros

function regresarRetiros(){
    let retiros = document.getElementById("retiros");
    retiros.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"
    document.getElementById("texto-resultado").innerText = "";
    document.getElementById("nuevo-saldo").innerText = "";
    let finalizar = document.getElementById("finalizar");
    finalizar.style.display = "none";
    document.getElementById("cantidad-retiro").value = "";


    event.preventDefault();
}

//Abrir formulario de consulta de saldo

function activarConsultaSaldo(){
    let consultaSaldo = document.getElementById("consulta-saldo");
    consultaSaldo.style.display = "flex";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"
    document.getElementById("saldo-actual").innerText = saldo;

    event.preventDefault();
}

//Cerrar formulario de consulta de saldo

function cerrarConsultaSaldo(){
    let consultaSaldo = document.getElementById("consulta-saldo");
    consultaSaldo.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Abrir formulario consignaciones

function activarConsignaciones(){
    let consignaciones = document.getElementById("consignaciones");
    consignaciones.style.display = "flex";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Consignar dinero

function consignarDinero(){
    let vlrConsignacion = parseFloat(document.getElementById("cantidad-consignacion").value);
    if(vlrConsignacion<=0){
        document.getElementById("texto-resultado2").innerText = "Su transacción no puedo completarse debido a que ingresó un valor inválido";
    }else{
        let resultado = parseFloat(saldo + vlrConsignacion);
        document.getElementById("texto-resultado2").innerText = "Su transacción fué exitosa. Su nuevo saldo es de:";
        document.getElementById("nuevo-saldo2").innerText = resultado;
        let finalizar2 = document.getElementById("finalizar2");
        finalizar2.style.display = "flex";
        saldo = resultado;
        movimientosConsignaciones.push(vlrConsignacion);
    }
    event.preventDefault();
}

//Cerrar formulario consignaciones

function cerrarConsignaciones(){
    let consignaciones = document.getElementById("consignaciones");
    consignaciones.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"
    document.getElementById("texto-resultado2").innerText = "";
    document.getElementById("nuevo-saldo2").innerText = "";
    let finalizar2 = document.getElementById("finalizar2");
    finalizar2.style.display = "none";
    document.getElementById("cantidad-consignacion").value = "";

    event.preventDefault();
}

//Regresar a consultas general desde consignaciones
function regresarConsignaciones(){
    let consignaciones = document.getElementById("consignaciones");
    consignaciones.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"
    document.getElementById("texto-resultado2").innerText = "";
    document.getElementById("nuevo-saldo2").innerText = "";
    let finalizar2 = document.getElementById("finalizar2");
    finalizar2.style.display = "none";
    document.getElementById("cantidad-consignacion").value = "";


    event.preventDefault();
}

//Abrir formulario de movimientos

function activarMovimientos(){
    let movimientos = document.getElementById("movimientos");
    movimientos.style.display = "flex";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1;
    let año = fechaActual.getFullYear();
    let fechaCorta = dia + '/' + mes + '/' + año;
    
    movimientosRetiros.forEach(movRetiro => document.getElementById("mostrar-retiros").innerHTML += 
    "● Retiro por "+movRetiro+" el día "+fechaCorta + "<br>"
    );
    movimientosConsignaciones.forEach(movConsignacion => document.getElementById("mostrar-consignaciones").innerHTML += 
    "● Consignación por "+movConsignacion+" el día "+fechaCorta + "<br>"
    );

    event.preventDefault();
}

//Cerrar formulario de movimientos

function cerrarMovimientos(){
    let movimientos = document.getElementById("movimientos");
    movimientos.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Abrir formulario de cambio de clave

function activarCambioClave(){
    let cambioClave = document.getElementById("cambio-clave");
    cambioClave.style.display = "flex";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "none";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"

    event.preventDefault();
}

//Cambiar clave

function cambiarClave(){
    let claveActual = parseInt(document.getElementById("clave-actual").value);
    let nuevaClave = parseInt(document.getElementById("nueva-clave").value);
    let confirmarClave = parseInt(document.getElementById("confirmar-clave").value);
        if (clavePrincipal == claveActual && nuevaClave == confirmarClave && claveActual == nuevaClave){
            document.getElementById("texto-resultado3").innerText = "La nueva clave debe ser diferente a la actual";
        }else if (clavePrincipal == claveActual && nuevaClave == confirmarClave){
            clavePrincipal = nuevaClave;
            document.getElementById("texto-resultado3").innerText = "Su clave ha sido cambiada con éxito";
            let finalizar3 = document.getElementById("finalizar3");
            finalizar3.style.display = "flex";
            document.getElementById("texto-resultado3").style.color = "green";
        }else if (clavePrincipal == claveActual && nuevaClave != confirmarClave){
            document.getElementById("texto-resultado3").innerText = "La nueva clave no coincide con la confirmación de la misma";
        }else if (clavePrincipal != claveActual && nuevaClave == confirmarClave){
            document.getElementById("texto-resultado3").innerText = "La clave actual es incorrecta"; 
        }else{    
            document.getElementById("texto-resultado3").innerText = "La clave actual es incorrecta y la nueva clave no coincide con la confirmación de la misma";
        }

    event.preventDefault();
}

//Cerrar formulario de cambio de clave

function cerrarCambioClave(){
    let cambioClave = document.getElementById("cambio-clave");
    cambioClave.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"
    document.getElementById("texto-resultado3").innerText = "";
    let finalizar3 = document.getElementById("finalizar3");
    finalizar3.style.display = "none";
    document.getElementById("clave-actual").value = "";
    document.getElementById("nueva-clave").value = "";
    document.getElementById("confirmar-clave").value = "";

    event.preventDefault();
}

//Regresar a consultas general desde cambio de clave
function regresarCambioClave(){
    let cambioClave = document.getElementById("cambio-clave");
    cambioClave.style.display = "none";
    let consultas = document.getElementById("consultas");
    consultas.style.display = "flex";
    let difuminar1 = document.getElementById("section-carousel");
    difuminar1.style.opacity = "40%"
    let difuminar2 = document.getElementById("section-1");
    difuminar2.style.opacity = "40%"
    let difuminar3 = document.getElementById("section-2");
    difuminar3.style.opacity = "40%"
    document.getElementById("texto-resultado3").innerText = "";
    document.getElementById("nuevo-saldo2").innerText = "";
    let finalizar3 = document.getElementById("finalizar3");
    finalizar3.style.display = "none";
    document.getElementById("clave-actual").value = "";
    document.getElementById("nueva-clave").value = "";
    document.getElementById("confirmar-clave").value = "";


    event.preventDefault();
}




