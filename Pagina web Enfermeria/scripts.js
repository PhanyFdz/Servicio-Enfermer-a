// scripts.js

let signosVitales = []; // Almacena los signos vitales

function registrarSignos() {
    const fecha = document.getElementById('fecha').value;
    const presionArterial = document.getElementById('presionArterial').value;
    const glucosa = document.getElementById('glucosa').value;
    const temperatura = document.getElementById('temperatura').value;
    const frecuenciaCardiaca = document.getElementById('frecuenciaCardiaca').value;
    const tipoInyeccion = document.getElementById('tipoInyeccion').value;

    const nuevoRegistro = { fecha, presionArterial, glucosa, temperatura, frecuenciaCardiaca, tipoInyeccion };
    signosVitales.push(nuevoRegistro);

    mostrarTabla();
    limpiarFormulario();
}

function mostrarTabla() {
    const tbody = document.getElementById('tbodySignos');
    tbody.innerHTML = '';

    signosVitales.forEach((registro) => {
        const fila = `<tr>
            <td>${registro.fecha}</td>
            <td>${registro.presionArterial}</td>
            <td>${registro.glucosa}</td>
            <td>${registro.temperatura}</td>
            <td>${registro.frecuenciaCardiaca}</td>
            <td>${registro.tipoInyeccion}</td>
           
        </tr>`;
        tbody.innerHTML += fila;
    });
}

function limpiarFormulario() {
    document.getElementById('fecha').value = '';
    document.getElementById('presionArterial').value = '';
   document.getElementById('glucosa').value = '';
    document.getElementById('temperatura').value = '';
    document.getElementById('frecuenciaCardiaca').value = '';
    document.getElementById('tipoInyeccion').value = '';
}

