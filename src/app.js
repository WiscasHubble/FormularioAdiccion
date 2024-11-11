

function obtenerRecomendacionesSatisfaccion(puntuacion) {
    if (puntuacion > 80) {
        return {
            frase: "La persona se siente más cómoda y satisfecha interactuando en redes sociales que en la vida real.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-blue-500 dark:text-white">
                    <p>"La persona se siente más cómoda y satisfecha interactuando en redes sociales que en la vida real."</p>
                </blockquote>
                `
        };
    } else if (puntuacion > 40) {
        return {
            frase: "La persona encuentra una satisfacción notable en las redes, a veces prefiriendo las interacciones virtuales.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-blue-500 dark:text-white">
                    <p>"La persona encuentra una satisfacción notable en las redes, a veces prefiriendo las interacciones virtuales."</p>
                </blockquote>
                `
        };
    } else {
        return {
            frase: "La persona disfruta de las redes sociales, pero no las necesita para sentirse bien.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-blue-500 dark:text-white">
                    <p>"La persona disfruta de las redes sociales, pero no las necesita para sentirse bien."</p>
                </blockquote>
                `
        };
    }
}



function obtenerRecomendacionesProblemas(puntuacion) {
    if (puntuacion > 80) {
        return {
            frase: "Es probable que estés pasando mucho tiempo en redes sociales, lo cual podría estar afectando tu bienestar y tu vida social fuera de internet. Sería útil que consideraras equilibrar tu tiempo entre las redes sociales y otras actividades.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-red-500 dark:text-white">
                    <p>"Es probable que estés pasando mucho tiempo en redes sociales, lo cual podría estar afectando tu bienestar y tu vida social fuera de internet. Sería útil que consideraras equilibrar tu tiempo entre las redes sociales y otras actividades."</p>
                </blockquote>
                `
        };
    } else if (puntuacion > 40) {
        return {
            frase: "Parece que el uso de redes sociales está teniendo un impacto notable en tu vida. Aunque no es algo extremo, sería conveniente reflexionar sobre cómo este uso afecta tu vida diaria y tratar de gestionar mejor tu tiempo online.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-red-500 dark:text-white">
                    <p>"Parece que el uso de redes sociales está teniendo un impacto notable en tu vida. Aunque no es algo extremo, sería conveniente reflexionar sobre cómo este uso afecta tu vida diaria y tratar de gestionar mejor tu tiempo online."</p>
                </blockquote>
                `
        };
    } else {
        return {
            frase: "El uso de redes sociales no parece estar teniendo un gran impacto en tu vida diaria. Aún así, es importante mantener un balance para asegurarte de que no se convierta en una distracción mayor.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-red-500 dark:text-white">
                    <p>"El uso de redes sociales no parece estar teniendo un gran impacto en tu vida diaria. Aún así, es importante mantener un balance para asegurarte de que no se convierta en una distracción mayor."</p>
                </blockquote>
                `
        };
    }
}



function obtenerRecomendacionesObsesion(puntuacion) {
    if (puntuacion > 80) {
        return {
            frase: "Parece que la necesidad de estar constantemente conectado a las redes sociales está afectando tu bienestar. Es importante que tomes un paso atrás y busques un equilibrio entre tu vida online y offline para evitar que esta obsesión interfiera en otros aspectos de tu vida.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-green-500 dark:text-white">
                    <p>"Parece que la necesidad de estar constantemente conectado a las redes sociales está afectando tu bienestar. Es importante que tomes un paso atrás y busques un equilibrio entre tu vida online y offline para evitar que esta obsesión interfiera en otros aspectos de tu vida."</p>
                </blockquote>
                `
        };
    } else if (puntuacion > 40) {
        return {
            frase: "Tu conexión constante a las redes sociales parece estar siendo una parte importante de tu vida. Aunque no es algo excesivo, sería útil reflexionar sobre cómo afecta tus interacciones personales y buscar momentos para desconectar y disfrutar de actividades fuera de la pantalla.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-green-500 dark:text-white">
                    <p>"Tu conexión constante a las redes sociales parece estar siendo una parte importante de tu vida. Aunque no es algo excesivo, sería útil reflexionar sobre cómo afecta tus interacciones personales y buscar momentos para desconectar y disfrutar de actividades fuera de la pantalla."</p>
                </blockquote>
                `
        };
    } else {
        return {
            frase: "Parece que tu relación con las redes sociales no está afectando en gran medida tu vida diaria. Sin embargo, sigue siendo importante mantener un equilibrio para evitar que esta dependencia aumente con el tiempo.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-green-500 dark:text-white">
                    <p>"Parece que tu relación con las redes sociales no está afectando en gran medida tu vida diaria. Sin embargo, sigue siendo importante mantener un equilibrio para evitar que esta dependencia aumente con el tiempo."</p>
                </blockquote>
                `
        };
    }
}



function obtenerRecomendacionesNecesidad(puntuacion) {
    if (puntuacion > 80) {
        return {
            frase: "Parece que la necesidad de estar constantemente conectado a las redes sociales está tomando un papel central en tu vida. Es importante reflexionar sobre el impacto que esto puede tener en tu bienestar emocional y en las relaciones personales. Considera buscar momentos para desconectar y reconectar con el mundo offline.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-yellow-500 dark:text-white">
                    <p>"Parece que la necesidad de estar constantemente conectado a las redes sociales está tomando un papel central en tu vida. Es importante reflexionar sobre el impacto que esto puede tener en tu bienestar emocional y en las relaciones personales. Considera buscar momentos para desconectar y reconectar con el mundo offline."</p>
                </blockquote>
                `
        };
    } else if (puntuacion > 40) {
        return {
            frase: "Tu necesidad de estar conectado a las redes sociales es moderada, pero aún puede tener un impacto en tu bienestar. Reflexiona sobre cómo tu uso de redes sociales afecta tu vida diaria y busca un balance para no depender excesivamente de ellas.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-yellow-500 dark:text-white">
                    <p>"Tu necesidad de estar conectado a las redes sociales es moderada, pero aún puede tener un impacto en tu bienestar. Reflexiona sobre cómo tu uso de redes sociales afecta tu vida diaria y busca un balance para no depender excesivamente de ellas."</p>
                </blockquote>
                `
        };
    } else {
        return {
            frase: "Parece que no tienes una necesidad urgente de estar constantemente conectado a las redes sociales. Sin embargo, sigue siendo importante mantener un equilibrio saludable, ya que el exceso de conexión puede surgir de manera gradual.",
            estructuraHtml: `
                <blockquote class="text-lg italic font-semibold text-yellow-500 dark:text-white">
                    <p>"Parece que no tienes una necesidad urgente de estar constantemente conectado a las redes sociales. Sin embargo, sigue siendo importante mantener un equilibrio saludable, ya que el exceso de conexión puede surgir de manera gradual."</p>
                </blockquote>
                `
        };
    }
}
