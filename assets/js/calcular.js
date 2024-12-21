document.getElementById('salmonCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularPrecio();
});

document.getElementById('peso').addEventListener('focus', function() {
    this.value = '';
});

function calcularPrecio() {
    const tipoSalmon = document.querySelector('input[name="tipoSalmon"]:checked');
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (!tipoSalmon || isNaN(peso) || peso <= 0) {
        resultado.classList.remove('d-none', 'alert-success');
        resultado.classList.add('alert-danger');
        resultado.textContent = 'Por favor, completa los campos correctamente.';
        return;
    }

    const precioPorKilo = parseFloat(tipoSalmon.value);
    const precioTotal = (precioPorKilo * peso)/1000;

    const precioFormateado = precioTotal.toLocaleString('es-CL');

    resultado.classList.remove('d-none', 'alert-danger');
    resultado.classList.add('alert-success');
    resultado.textContent = `El precio total del filete es: $${precioFormateado}`;
}