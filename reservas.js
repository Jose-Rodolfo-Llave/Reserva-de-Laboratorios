@"
// Módulo de reservas - Reserva de Laboratorios
// Vinculado al paquete de trabajo OP#42

function registrarReserva(laboratorioId, fecha, hora, usuario) {
  // Lógica pendiente de implementar
  return { laboratorioId, fecha, hora, usuario, estado: 'pendiente' };
}

module.exports = { registrarReserva };
"@ | Out-File -Encoding utf8 reservas.js
