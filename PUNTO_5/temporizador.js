// Fecha del evento (puedes cambiarla según el evento)
const eventDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Función para actualizar el temporizador cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar los resultados
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Si el temporizador llega a cero, mostrar el mensaje
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown').style.display = 'none';
        document.getElementById('message').textContent = '¡El evento ha comenzado!';
    }
}, 1000);