// Fecha de la boda: 13 de mayo de 2023 a las 12:00 hrs.
const weddingDate = new Date("May 13, 2023 12:00:00").getTime();

// Actualiza el contador cada segundo
const countdown = setInterval(function() {

  // Obtiene la fecha y hora actual
  const now = new Date().getTime();

  // Calcula la diferencia entre la fecha de la boda y la fecha actual
  const timeLeft = weddingDate - now;

  // Calcula los días, horas, minutos y segundos restantes
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Muestra los días, horas, minutos y segundos restantes
  updateCountdown(daysLeft, hoursLeft, minutesLeft, secondsLeft);

  // Si el contador llega a cero, muestra un mensaje
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-timer").innerHTML = "¡La boda ha llegado, ven a festejarla con nosotros!";
  }
}, 1000);

// Actualiza el contador en la página
function updateCountdown(days, hours, minutes, seconds) {
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
