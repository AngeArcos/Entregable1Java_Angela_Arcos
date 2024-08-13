document.addEventListener('DOMContentLoaded', () => {

    const botonGuardar = document.getElementById('boton-guardar');
    const inputTitulo = document.getElementById('titulo');
    const inputDescripcion = document.getElementById('descripcion');
    const inputDias = document.getElementById('dias');
    const tablaActividades = document.getElementById('tabla-actividades');
    const totalEsfuerzo = document.getElementById('total-esfuerzo');

    const listaTareas = []


    botonGuardar.addEventListener('click', (evento) => {
        const tarea = {
            titulo: inputTitulo.value,
            descripcion: inputDescripcion.value,
            dias: Number(inputDias.value)
        }

        const crearTd = function (texto) {
            const td = document.createElement('td')
            td.textContent = texto

            return td
        }
        
        const nuevaActividad = document.createElement('tr')
        nuevaActividad.appendChild(crearTd(''))
        nuevaActividad.appendChild(crearTd(tarea.titulo))
        nuevaActividad.appendChild(crearTd(tarea.descripcion))
        nuevaActividad.appendChild(crearTd(tarea.dias))

        tablaActividades.appendChild(nuevaActividad)

        inputTitulo.value = ''
        inputDescripcion.value = ''
        inputDias.value = ''
        
        listaTareas.push(tarea)

        let esfuerzoAcumulado = 0

        
        for(let i = 0; i < listaTareas.length; i++){
            esfuerzoAcumulado = esfuerzoAcumulado + listaTareas[i].dias;
        }
            
        totalEsfuerzo.textContent = esfuerzoAcumulado
    })

})

