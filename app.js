/* =========================================
   TEMPLE · 30 DÍAS
========================================= */


const journeys = {

    conocerme: {
        name: "Conocerme"
    },

    conectar: {
        name: "Conectar"
    },

    limites: {
        name: "Poner límites"
    },

    elegir: {
        name: "Elegir"
    },

    soltar: {
        name: "Soltar"
    }

};


/* =========================================
   ABRIR RECORRIDO
========================================= */

function openJourney(journey) {

    const selected = journeys[journey];

    if (!selected) {
        return;
    }

    alert(
        `Has elegido el recorrido "${selected.name}".`
    );

}


/* =========================================
   VOLVER AL INICIO
========================================= */

function goHome(event) {

    event.preventDefault();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
