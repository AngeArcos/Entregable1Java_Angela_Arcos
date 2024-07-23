/* Armar una app web interactiva
Tiene que simular un proceso comercial o profesional. 

Declarar variables, constantes y arrays
1 o a funciones que interactúen. 
condicionales o ciclos necesarios. 
Prompt, confirm y alert. 
Por lo menos un condicional y un bucle o un while o un for. pero al menos uno en cada uno
Procesar una información con minimo tres funciones. 
llamar las funciones, usarlas (no olvidar)
*/


// EJEMPLO PARA HACER UNA CARTA GANTT

/*
let actividad = prompt("¿Que actividad quieres programar?")

let dias = parseInt(prompt("¿Por cuantos días?"))

let rangoInicialdia = parseInt(prompt("¿Desde que día del mes que quieres comenzar"))

let rangoInicialmes = prompt("¿Que mes quieres comenzar?")

let rangoFinaldia = parseInt(prompt("Desde que día del mes que quieres terminar"))

let rangoFinalmes = prompt("¿Que mes quieres terminar?")

let diasDelaSemana = prompt("¿Que días de la semana lo harás?")

let cartaGantt = actividad + dias + rangoInicialdia + rangoInicialmes + rangoFinaldia + rangoFinalmes + diasDelaSemana

alert ("Mi actividad: Realizaré " + actividad + " por " + dias + " días, entre el " + rangoInicialdia + " de " + rangoInicialmes + " hasta el " + rangoFinaldia + " de " + rangoFinalmes + " trabajando los " + diasDelaSemana)*/


// Cuando se automatice debería tirar el rango final automático dependiendo de la cantidad de días que se decida trabajar y la fecha en que se comience.. también podría agregarse los días que ese rango implican (o mejor no, para que complicarme la vida.)


//Funionará la carta gantt con ciclo for??? 


//Si quiero que el usuario coloque el númeo que desea multiplicar puedo usar un prompt



//EJEMPLO DE TOO DO LIST

/*let objetivo = prompt("Escribe tu actividad")

let dia = prompt("Escribe el día de la semana que lo realizarás")

let ToDolist = objetivo + dia

console.log (objetivo + " el día " + dia) */


// Ejemplo de ojetivos logrados a la semana con condicionales. 

/*let objetivoSemanal = parseInt(prompt("Cuantos días trabajaste?"))


    if (objetivoSemanal >= 5) {
        alert ("lograste tu objetivo semanal")
    }  else if (objetivoSemanal == 0) {
        alert ("Date otra oportunidad")
    } else { 
        alert ("Sigue mejorando")
    }*/

// Con switch y while


/*let continuar = true

while(continuar) {

    let objetivoSemanal = parseInt(prompt("Ingrese 1 si trabajaste 5 o mas días, 2 si trabajaste 0 días y 3 si trabajaste entre 1 y 4 días"))

    switch(objetivoSemanal) {
        case 1: 
            alert("lograste tu objetivo semanal")
            break
        case 2:
            alert("Date otra oportunidad")
            break
        case 3: 
            alert("Sigue mejorando")
            break
        default:
            alert("Entrada inválida")
    }
   
    let confirmacion = prompt("Desea hacer otra consulta? si/no")
    if(confirmacion == "no"){
        continuar=false
        alert("Buena práctica de orgaización, vuelve pronto!") }
}*/

/*let dias = console.log("Cuantos días trabajaste?")

let objetivoSemanal = parseInt(prompt("Ingrese 1 si trabajaste 5 o mas días, 2 si trabajaste 0 días y 3 si trabajaste entre 1 y 4 días"))

switch (menu) {
    case 1: 
        alert("lograste tu objetivo semanal")
        break
    case 2:
        alert("Date otra oportunidad")
        break
    case 3: 
        alert("Sigue mejorando")
        break
    default:
        alert("Buena práctica de organización")

}
let confirmacion = prompt("Desea hacer otra consulta? si/no")
if(confirmacion == "no"){
    continuar=false
    alert("gracias!") }*/

    


//Después hay que asociar cada actividad a un día diferente ooooo puedo hacer un to do list sin días de la semana, solo que haga el de el día, para eso es solo una interfaz, para el otro hay que hacer una interfaz de planner de l a d. 


// EJEMPLO DE REGISTRO DE HÁBITOS. 


// ARRAYS

/*const dia1 = 1 
const dia2 = 2 
const dia3 = 3 
const dia4 = 4 
const dia5 = 5 
const dia6 = 6 
const dia7 = 7
const dia8 = 8 
const dia9 = 9 
const dia10 = 10 
const dia11 = 11 
const dia12 = 12 
const dia13 = 13 
const dia14 = 14 
const dia15 = 15 
const dia16 = 16 
const dia17 = 17
const dia18 = 18 
const dia19 = 19 
const dia20 = 20 
const dia21 = 21 
const dia22 = 22 
const dia23 = 23 
const dia24 = 24 
const dia25 = 25 
const dia26 = 26 
const dia27 = 27
const dia28 = 28 
const dia29 = 29 
const dia30 = 30 
const dia31 = 31 

const dias = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
dias.push(40)
console.log(dias)


const mes1 = "Enero"
const mes2 = "Febrero"
const mes3 = "Marzo"
const mes4 = "Abril"
const mes5 = "Mayo"
const mes6 = "Junio"
const mes7 = "Julio"
const mes8 = "Agosto"
const mes9 = "Septiembre"
const mes10 = "Octubre"
const mes11 = "Noviembre"
const mes12 = "Diciembre"

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(meses)

const diaSemana1 = "lunes"
const diaSemana2 = "martes"
const diaSemana3 = "miercoles"
const diaSemana4 = "jueves"
const diaSemana5 = "viernes"
const diaSemana6 = "sabado"
const diaSemana7 = "domingo"

const semana = ["lunes", "martes", "miercoles", "jueves", "virnes", "sabado", "domingo"]
console.log(semana)

const cantidadSemana1 = "Semana 1"
const cantidadSemana2 = "Semana 2"
const cantidadSemana3 = "Semana 3"
const cantidadSemana4 = "Semana 4"

const cantidadSemana = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"]
console.log(cantidadSemana)*/

// CONTACTO EJEMPLO. 

let nombre = prompt("Nombre")
let correo = prompt("Correo")
let telefono = parseInt(prompt("teléfono"))
let mensaje = prompt("Escribe un mensaje")
let confirmar = confirm("¿Desea enviar el formulario?")

let contacto = nombre + correo + telefono + mensaje + confirmar

alert ("Nombre: " + nombre + " Correo: " + correo + " Teléfono: " + telefono + " Mensaje: " + mensaje + "." + confirmar)


//PRESTAR SERVICIOS:

