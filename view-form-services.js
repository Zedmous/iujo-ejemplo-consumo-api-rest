document.getElementById('btnGuardar').addEventListener('click', async function() {
    const form = document.getElementById('formServices');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Aquí puedes hacer la llamada a la API
    await fetch('http://localhost:3500/api/services', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
        // Aquí puedes manejar la respuesta de la API
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
