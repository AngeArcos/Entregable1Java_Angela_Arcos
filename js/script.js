

// --- I D E A  1 ---
// 1.- TO DO LIST QUE TIENE POR OBJETIVO SACAR EL CALCULO DE LA CANTIDAD DE DÍAS DE ESFUERZO QUE LLEVAN LAS TAREAS A REALIZAR. 

let cantidadTareas = parseInt(prompt("Cuantas tareas reaizarás?"))

let totalEsfuerzo = 0;
let tareas = []

for (let i = 0; i < cantidadTareas; i++) {  
  let objetivo = prompt("Escribe el título de la tarea")

  let descripcion = prompt("Escribe una breve descripción de la tarea")

  let esfuerzo = parseInt(prompt("¿Cuanto tiempo tomará realizarla?"))
  
  tareas.push({ 
    objetivo: objetivo, 
    descripcion: descripcion, 
    esfuerzo: esfuerzo })
  totalEsfuerzo = totalEsfuerzo + esfuerzo
}

alert("Tu proyecto tomará " + totalEsfuerzo + " días");
console.log("Tu proyecto tomará " + totalEsfuerzo + " días")
console.log(tareas)


// 2.- LLEVAR LOS DÍAS A TRABAJAR A UN CALENDARIO.
// Aquí podría agregar esta información en un calendario, que responda a ¿Que días trabajaré? del 1 al 7 y que se agregue al calendario donde lunes es 1 y domingo 7, pasando por todos los días. Pero no se si se aplica con arrays o no. 

//let diasTrabajados = parseInt(prompt("¿Que días trabajaré? Ingrese 1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado y 7: Domingo "))

// no supe como hacerlo, lo pongo porque puede ser algo que haga a futuro (o no).


// 3.- VENDER EL PRODUCTO
// En el html se colocarían imágenes de la presentación del "to do list" y el calendario. 

let respuestaCalendario = prompt("¿Quieres un calendario sí o no?")
if (respuestaCalendario === "sí" || respuestaCalendario === "si" || respuestaCalendario === "Si" || respuestaCalendario === "Sí" || respuestaCalendario === "SI" ) {
    precioCalendario = 100;
}
let cantidadCalendarios = parseInt(prompt("¿Cuántos calendarios quieres?"));
let ValorTotalCalendarios = precioCalendario * cantidadCalendarios;

alert("El valor total es: " + ValorTotalCalendarios + " pesos.")
console.log("El valor total es: " + ValorTotalCalendarios + " pesos.")


let respuestaTareas = prompt("¿Quieres comprar tareas sí o no?")
if (respuestaCalendario === "sí" || respuestaCalendario === "si" || respuestaCalendario === "Si" || respuestaCalendario === "Sí" || respuestaCalendario === "SI" ) {

}
function multiplicar () {
    let Cantidadtareas = parseInt(prompt("¿Cuantas análisis de tareas quieres comprar?"))
    let ValorTarea = 50
   

    let ValorTotalTarea = Cantidadtareas * ValorTarea

    return ValorTotalTarea
}

let precio = multiplicar()

alert("El valor es de " + precio + " pesos.")
console.log("El valor es de " + precio + " pesos.")

// No logro sumar los dos y tampoco supe como hacer para que el "no" sea "false".
/*
let CostoTotal = ValorTotalCalendarios + precio
Alert(CostoTotal)
console.log(CostoTotal)
*/

// -- I D E A  2 --

// 4.-  AGREGAR GRÁFICO DE PORCENTAJE DE HÁBITOS y tareas logradas en base a la información de arriba 

let MiMeta = parseInt(prompt("¿Cuantos días te propondrás como hábito por cada semana?"))
let Objlogrado = parseInt(prompt("¿Cuandos días lo lograste realmente?"))

let resultado = 100 * Objlogrado / MiMeta

console.log("Lograste " + resultado + "% de tus hábitos")



// 5.-  Ideas para generar motivación en la página web si se usa de forma virtual.. eventualmente una app de registro de hábitos.. 


let miObjetivo = parseInt(prompt("¿Cuál era tu objetivo en días?"))

let logro = parseInt(prompt("¿Cuantos días trabajaste?"))

if (logro === miObjetivo) { 
    alert("lograste tu objetivo semanal, ¡Muy bien!")
} else if (logro > miObjetivo) {
    alert("Wooow! Superaste tus propios logros!") 
} else if (logro < miObjetivo) {
    alert("Sigue intentando, ¡tu puedes!")
 } else if (logro == 0) {
    alert("Puede que no haya sido tu semana, pero ¡Vamos! intentémoslo la próxima.")
 } else { 
        alert("Error")
    }

console.log("Lograste trabajar " + logro + " de " + miObjetivo + " días.")



