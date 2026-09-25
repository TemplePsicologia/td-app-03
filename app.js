/* =========================================================
   TEMPLE · 30 DÍAS
   DASHBOARD VISUAL
========================================================= */


/* =========================================================
   RECORRIDOS
========================================================= */

const journeys = {

    conocerme: {
        name: "Conocerme",
        color: "green"
    },

    conectar: {
        name: "Conectar",
        color: "blue"
    },

    limites: {
        name: "Poner límites",
        color: "orange"
    },

    elegir: {
        name: "Elegir",
        color: "purple"
    },

    soltar: {
        name: "Soltar",
        color: "sage"
    }

};


/* =========================================================
   DATOS VISUALES DE DEMOSTRACIÓN
========================================================= */

const demoActivities = {

    "2026-09-03": [
        {
            journey: "conocerme",
            title: "Una experiencia de Conocerme"
        }
    ],

    "2026-09-05": [
        {
            journey: "conectar",
            title: "Una experiencia de Conectar"
        }
    ],

    "2026-09-09": [
        {
            journey: "elegir",
            title: "Una experiencia de Elegir"
        }
    ],

    "2026-09-14": [
        {
            journey: "conocerme",
            title: "Una experiencia de Conocerme"
        }
    ],

    "2026-09-16": [
        {
            journey: "limites",
            title: "Una experiencia de Poner límites"
        }
    ],

    "2026-09-18": [

        {
            journey: "conectar",
            title: "Una experiencia de Conectar"
        },

        {
            journey: "elegir",
            title: "Una experiencia de Elegir"
        }

    ],

    "2026-09-25": [
        {
            journey: "elegir",
            title: "Una experiencia de Elegir"
        }
    ]

};


/* =========================================================
   CALENDARIO
========================================================= */

let calendarDate =
    new Date(2026, 8, 1);


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCalendar();

    }
);


/* =========================================================
   SELECCIONAR RECORRIDO
========================================================= */

function selectJourney(journey) {

    const selected =
        journeys[journey];


    if (!selected) {
        return;
    }


    showTemporaryMessage(
        `Aquí comenzará tu recorrido de ${selected.name}.`
    );

}


/* =========================================================
   OPCIONES PARA HOY
========================================================= */

function todayChoice(journey) {

    const selected =
        journeys[journey];


    if (!selected) {
        return;
    }


    showTemporaryMessage(
        `Aquí podrás comenzar una experiencia de ${selected.name}.`
    );

}


/* =========================================================
   SORPRÉNDEME
========================================================= */

function surpriseMe() {

    const keys =
        Object.keys(journeys);


    const randomKey =
        keys[
            Math.floor(
                Math.random() * keys.length
            )
        ];


    const selected =
        journeys[randomKey];


    const message =
        document.getElementById(
            "surprise-message"
        );


    message.textContent =
        `Hoy podrías explorar una experiencia de ${selected.name}.`;

}


/* =========================================================
   MENSAJE TEMPORAL
========================================================= */

function showTemporaryMessage(text) {

    let message =
        document.getElementById(
            "temporary-message"
        );


    if (!message) {

        message =
            document.createElement("div");

        message.id =
            "temporary-message";

        message.className =
            "temporary-message";

        document.body.appendChild(
            message
        );

    }


    message.textContent =
        text;


    requestAnimationFrame(() => {

        message.classList.add("show");

    });


    setTimeout(() => {

        message.classList.remove("show");

    }, 2500);

}


/* =========================================================
   RENDERIZAR CALENDARIO
========================================================= */

function renderCalendar() {

    const daysContainer =
        document.getElementById(
            "calendar-days"
        );


    const monthElement =
        document.getElementById(
            "calendar-month"
        );


    const yearElement =
        document.getElementById(
            "calendar-year"
        );


    if (!daysContainer) {
        return;
    }


    daysContainer.innerHTML =
        "";


    const year =
        calendarDate.getFullYear();


    const month =
        calendarDate.getMonth();


    const monthNames = [

        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"

    ];


    monthElement.textContent =
        monthNames[month];


    yearElement.textContent =
        year;


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const adjustedFirstDay =
        firstDay === 0
            ? 6
            : firstDay - 1;


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    /* ESPACIOS ANTERIORES */

    for (
        let i = 0;
        i < adjustedFirstDay;
        i++
    ) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "calendar-day empty";

        daysContainer.appendChild(
            empty
        );

    }


    /* DÍAS */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayElement =
            document.createElement(
                "button"
            );


        dayElement.type =
            "button";


        dayElement.className =
            "calendar-day";


        const number =
            document.createElement(
                "span"
            );


        number.className =
            "day-number";


        number.textContent =
            day;


        dayElement.appendChild(
            number
        );


        const dateKey =
            createDateKey(
                year,
                month,
                day
            );


        const activities =
            demoActivities[
                dateKey
            ];


        if (
            activities &&
            activities.length > 0
        ) {

            const dots =
                document.createElement(
                    "div"
                );


            dots.className =
                "activity-dots";


            activities.forEach(
                activity => {

                    const dot =
                        document.createElement(
                            "span"
                        );


                    const color =
                        journeys[
                            activity.journey
                        ]?.color;


                    dot.className =
                        `activity-dot dot-${color}`;


                    dots.appendChild(
                        dot
                    );

                }
            );


            dayElement.appendChild(
                dots
            );

        }


        /* DÍA ACTUAL DE LA DEMO */

        if (
            year === 2026 &&
            month === 8 &&
            day === 25
        ) {

            dayElement.classList.add(
                "today"
            );

        }


        dayElement.addEventListener(
            "click",
            () => {

                showDayActivities(
                    dateKey,
                    day
                );

            }
        );


        daysContainer.appendChild(
            dayElement
        );

    }

}


/* =========================================================
   CLAVE DE FECHA
========================================================= */

function createDateKey(
    year,
    month,
    day
) {

    const formattedMonth =
        String(
            month + 1
        ).padStart(
            2,
            "0"
        );


    const formattedDay =
        String(day).padStart(
            2,
            "0"
        );


    return `${year}-${formattedMonth}-${formattedDay}`;

}


/* =========================================================
   ACTIVIDADES DEL DÍA
========================================================= */

function showDayActivities(
    dateKey,
    day
) {

    const detail =
        document.getElementById(
            "day-detail"
        );


    const activities =
        demoActivities[
            dateKey
        ];


    if (
        !activities ||
        activities.length === 0
    ) {

        detail.innerHTML = `

            <div class="day-detail-placeholder">

                <span>
                    ${day} de septiembre
                </span>

                <p>
                    No hay experiencias registradas
                    en este día.
                </p>

            </div>

        `;

        return;

    }


    let html = `

        <div>

            <div class="day-detail-title">
                ${day} de septiembre
            </div>

    `;


    activities.forEach(
        activity => {

            const selected =
                journeys[
                    activity.journey
                ];


            html += `

                <div class="day-detail-item">

                    <span
                        class="detail-dot"
                        style="background:${getColor(selected.color)}"
                    ></span>

                    <span>
                        ${selected.name}
                    </span>

                </div>

            `;

        }
    );


    html += `
        </div>
    `;


    detail.innerHTML =
        html;

}


/* =========================================================
   COLORES
========================================================= */

function getColor(color) {

    const colors = {

        green: "#759C7B",

        blue: "#708EAE",

        orange: "#B58A73",

        purple: "#8582A8",

        sage: "#819580"

    };


    return (
        colors[color] ||
        "#708EAE"
    );

}


/* =========================================================
   CAMBIAR MES
========================================================= */

function changeMonth(direction) {

    calendarDate.setMonth(
        calendarDate.getMonth() +
        direction
    );


    renderCalendar();


    document.getElementById(
        "day-detail"
    ).innerHTML = `

        <div class="day-detail-placeholder">

            <span>
                Selecciona un día
            </span>

            <p>
                Aquí podrás ver las experiencias
                realizadas en esa fecha.
            </p>

        </div>

    `;

}


/* =========================================================
   GUARDADAS / REALIZADAS
========================================================= */

function showFeature(type) {

    if (type === "guardadas") {

        showTemporaryMessage(
            "Aquí aparecerán tus experiencias guardadas."
        );

    }


    if (type === "realizadas") {

        showTemporaryMessage(
            "Aquí aparecerán tus experiencias realizadas."
        );

    }

}


/* =========================================================
   VOLVER AL INICIO
========================================================= */

function goHome(event) {

    event.preventDefault();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
