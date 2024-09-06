document.addEventListener('DOMContentLoaded', async () => {
    const botonGuardar = document.getElementById('boton-guardar');
    const inputTitulo = document.getElementById('titulo');
    const inputDescripcion = document.getElementById('descripcion');
    const inputDias = document.getElementById('dias');
    const tablaActividades = document.getElementById('tabla-actividades');
    const totalEsfuerzo = document.getElementById('total-esfuerzo');

    let listaTareas = []

    const dibujarTablaTareas = (listado) => {
        listado.forEach((tarea) => {
            const filaTabla = document.createElement('tr')
            filaTabla.appendChild(crearTd(''))
            filaTabla.appendChild(crearTd(tarea.titulo))
            filaTabla.appendChild(crearTd(tarea.descripcion))
            filaTabla.appendChild(crearTd(tarea.dias))
            filaTabla.appendChild(crearAcciones(tarea.titulo))

            tablaActividades.appendChild(filaTabla)
        })

        let esfuerzoAcumulado = 0
        
        for(let i = 0; i < listado.length; i++){
            esfuerzoAcumulado = esfuerzoAcumulado + listado[i].dias;
        }
            
        totalEsfuerzo.textContent = esfuerzoAcumulado
    }

    const crearTd = function (texto) {
        const td = document.createElement('td')
        td.textContent = texto

        return td
    }

    const crearAcciones = function (tituloTarea) {
        const botonEliminar = document.createElement('button')
        botonEliminar.innerHTML = 'Eliminar'

        botonEliminar.addEventListener('click', (evento) => {
            const nuevoListadoTareas = listaTareas.filter((tarea) => tarea.titulo !== tituloTarea)
            listaTareas = nuevoListadoTareas

            limpiarTablaTareas()
            dibujarTablaTareas(listaTareas)
            guardarEnLocalStorage()
        })

        return botonEliminar
    }

    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'))
    
    if (tareasGuardadas !== null) {
        listaTareas.push(...tareasGuardadas)
    }

    await fetch('./tareas.json')
        .then(response => response.json())
        .then(data => listaTareas.push(...data))

    dibujarTablaTareas(listaTareas)

    const guardarEnLocalStorage = () => {
        localStorage.setItem('tareas', JSON.stringify(listaTareas))
    }

    const limpiarTablaTareas = () => {
        tablaActividades.innerHTML = ''
    }

    botonGuardar.addEventListener('click', (evento) => {
        const tarea = {
            titulo: inputTitulo.value,
            descripcion: inputDescripcion.value,
            dias: Number(inputDias.value)
        }
    

        inputTitulo.value = ''
        inputDescripcion.value = ''
        inputDias.value = ''

        listaTareas.push(tarea)

        limpiarTablaTareas()
        dibujarTablaTareas(listaTareas)
        guardarEnLocalStorage()
    })
})


