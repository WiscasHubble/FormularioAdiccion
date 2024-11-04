const parrafoRecomendaciones = document.getElementById('cardRecomendaciones');
function obtenerRecomendacionNecesidad(storedNecesidad) {
    
    return (storedNecesidad <= 25) ? parrafoRecomendaciones.textContent = 'Dedicar tiempo a alguna actividad recreativa de interes personal (hobbies).' :
           (storedNecesidad <= 50) ? parrafoRecomendaciones.textContent = 'Meditacion.' :
           (storedNecesidad <= 75) ? parrafoRecomendaciones.textContent = 'Invertir grandes cantidades de tiempo y esfuerzo en actividades fisicas.' :
           (storedNecesidad <= 100) ? parrafoRecomendaciones.textContent = 'Agendar cita con un profesional.' :
           'Valor no válido.';
}

function obtenerRecomendacionObsesion(storedObsesion) {
    return (storedObsesion <= 25) ? parrafoRecomendaciones.textContent = 'Prescindir de los dispositivos unicamente en momentos clave o estrictamente necesarios.' :
           (storedObsesion <= 50) ? parrafoRecomendaciones.textContent = 'Establecer un tiempo minimo de 15 minutos entre conexiones a redes.' :
           (storedObsesion <= 75) ? parrafoRecomendaciones.textContent = 'Explorar el miedo al "FOMO"(miedo a perderse algo).' :
           (storedObsesion <= 100) ? parrafoRecomendaciones.textContent = 'Trabajar en la autoestima y la validacion interna.' :
           'Valor no válido.';
}

function obtenerRecomendacionProblemas(storedProblemas) {
    return (storedProblemas <= 25) ? parrafoRecomendaciones.textContent = 'Proporcionar información sobre los niveles de dependencia a redes.' :
           (storedProblemas <= 50) ? parrafoRecomendaciones.textContent = 'Definir un tiempo mínimo diario para realizar actividades fuera de redes sociales.' :
           (storedProblemas <= 75) ? parrafoRecomendaciones.textContent = 'Crear y establecer una rutina enfocada en aspectos personales.' :
           (storedProblemas <= 100) ? parrafoRecomendaciones.textContent = 'Crear y establecer una rutina enfocada en aspectos personales.' :
           'Valor no válido.';
}

function obtenerRecomendacionSatisfaccion(storedSatisfaccion) {
    return (storedSatisfaccion <= 25) ? parrafoRecomendaciones.textContent = 'Involucrarse en actividades recreativas que generen satisfacción personal por logros.' :
           (storedSatisfaccion <= 50) ? parrafoRecomendaciones.textContent = 'Pasar más tiempo con la familia.' :
           (storedSatisfaccion <= 75) ? parrafoRecomendaciones.textContent = 'Hacer actividades con amigos o relaciones personales.' :
           (storedSatisfaccion <= 100) ? parrafoRecomendaciones.textContent = 'Explorar experiencias significativas fuera de las redes sociales.' :
           'Valor no válido.';
}
