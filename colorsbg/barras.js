function nuevoColor() {
    const rojo = document.getElementById('Rojo').value;
    const verde = document.getElementById('Verde').value;
    const azul = document.getElementById('Azul').value;
    const transparencia = document.getElementById('Transparencia').value;

    document.body.style.backgroundColor = `rgba(${rojo}, ${verde}, ${azul}, ${transparencia})`;

    document.getElementById('RojoValue').textContent = rojo;
    document.getElementById('VerdeValue').textContent = verde;
    document.getElementById('AzulValue').textContent = azul;
    document.getElementById('TransparenciaValue').textContent = transparencia;
}


