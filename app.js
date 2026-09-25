/* =========================================================
   TEMPLE · 30 DÍAS
   JAVASCRIPT
========================================================= */


/*
    Datos básicos de los recorridos.

    Más adelante aquí conectaremos la verdadera
    base de datos de las 150 experiencias.
*/

const journeys = {

    conocerme: {
        name: "Conocerme",
        number: "01"
    },

    conectar: {
        name: "Conectar",
        number: "02"
    },

    limites: {
        name: "Poner límites",
        number: "03"
    },

    elegir: {
        name: "Elegir",
        number: "04"
    },

    soltar: {
        name: "Soltar",
        number: "05"
    }

};


/*
    Cuando la persona pulse "Comenzar recorrido".
*/

function openJourney(journey) {

    const selectedJourney = journeys[journey];

    if (!selectedJourney) {
        return;
    }


    /*
        Por ahora mostramos una pequeña confirmación.

        En la siguiente etapa reemplazaremos esto
        por la verdadera pantalla del recorrido.
    */

    alert(
        `Has elegido "${selectedJourney.name}".\n\n` +
        `Estamos preparando este recorrido.`
    );

}


/*
    Permite volver al inicio.
*/

function goHome(event) {

    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
