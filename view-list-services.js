
// Función para obtener y mostrar los servicios
async function fetchServices() {
    try {
        const response = await fetch('http://localhost:3500/api/services'); // Reemplaza con tu URL de API
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const services = await response.json();
        console.log("veamos: ",services)
        displayServices(services.data.services);
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        document.getElementById('servicesList').innerHTML = '<p>Error al cargar los servicios.</p>';
    }
}

// Función para mostrar los servicios en el HTML
function displayServices(services=[]) {
    const servicesList = document.getElementById('servicesList');
    servicesList.innerHTML = ''; // Limpiar el contenedor

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service';
        serviceDiv.innerHTML = `
            <h3>${service.name}</h3>
            <p>ID: ${service.id}</p>
            <p>Precio: $${service.price}</p>
        `;
        servicesList.appendChild(serviceDiv);
    });
}

// Llamar a la función para obtener los servicios al cargar la página
window.onload = fetchServices;