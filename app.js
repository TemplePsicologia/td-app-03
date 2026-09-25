/* =========================================================
   TEMPLE · 30 DÍAS
   DASHBOARD
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
   DATOS DE DEMOSTRACIÓN
   -----------------------------------------------
   Estos datos solamente sirven para visualizar
   cómo funcionará el calendario.
========================================================= */

const demoActivities = {

    "2026-09-03": [
        {
            journey: "conocerme",
            title: "Experiencia de Conocerme"
        }
    ],

    "2026-09-05": [
        {
            journey: "conectar",
            title: "Experiencia de Conectar"
        }
    ],

    "2026-09-09": [
        {
            journey: "elegir",
            title: "Experiencia de Elegir"
        }
    ],

    "2026-09-14": [
        {
            journey: "conocerme",
            title: "Experiencia de Conocerme"
        }
    ],

    "2026-09-16": [
        {
            journey: "limites",
            title: "Experiencia de Poner límites"
        }
    ],

    "2026-09-18": [

        {
            journey: "conectar",
            title: "Experiencia de Conectar"
        },

        {
            journey: "elegir",
            title: "Experiencia de Elegir"
        }

    ],

    "2026-09-25": [

        {
            journey: "elegir",
            title: "Experiencia de Elegir"
        }

    ]

};


/* =========================================================
   ESTADO DEL CALENDARIO
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
   ABRIR RECORRIDO
========================================================= */

function openJourney(journey) {

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
   SORPRÉNDEME
========================================================= */

function surpriseMe() {

    const allActivities = [];


    Object.entries(
        demoActivities
    ).forEach(
        ([date, activities]) => {

            activities.forEach(
                activity => {

                    allActivities.push({

                        date: date,

                        journey: activity.journey,

                        title: activity.title

                    });

                }
            );

        }
    );


    if (allActivities.length === 0) {

        showTemporaryMessage(
            "Pronto podrás descubrir una experiencia."
        );

        return;

    }


    const random =
        allActivities[
            Math.floor(
                Math.random() *
                allActivities.length
            )
        ];


    const selected =
        journeys[random.journey];


    const result =
        document.getElementById(
            "surprise-result"
        );


    result.innerHTML = `

        <div class="surprise-card">

            <small>
                UNA SUGERENCIA PARA TI
            </small>

            <h3>
                ${random.title}
            </h3>

            <p>
                Recorrido · ${selected.name}
            </p>

        </div>

    `;


    result.classList.add(
        "visible"
    );

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


    /*
        JavaScript devuelve:

        Domingo = 0
        Lunes = 1
        ...
        Sábado = 6

        Como nuestro calendario comienza
        en lunes, hacemos el ajuste.
    */

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


    /* ESPACIOS ANTES DEL PRIMER DÍA */

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


    /* CREAR CADA DÍA */

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


        /* ACTIVIDADES DEL DÍA */

        if (
            activities &&
            activities.length > 0
        ) {

            dayElement.classList.add(
                "has-activity"
            );


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


        /* DÍA ACTUAL DE LA DEMOSTRACIÓN */

        if (
            year === 2026 &&
            month === 8 &&
            day === 25
        ) {

            dayElement.classList.add(
                "today"
            );

        }


        /* CLICK */

        dayElement.addEventListener(
            "click",
            () => {

                showDayActivities(
                    dateKey,
                    day,
                    month,
                    year
                );

            }
        );


        daysContainer.appendChild(
            dayElement
        );

    }

}


/* =========================================================
   CREAR CLAVE DE FECHA
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
   MOSTRAR ACTIVIDADES DE UN DÍA
========================================================= */

function showDayActivities(
    dateKey,
    day,
    month,
    year
) {

    const detail =
        document.getElementById(
            "day-detail"
        );


    const activities =
        demoActivities[
            dateKey
        ];


    const monthNames = [

        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"

    ];


    const dateText =
        `${day} de ${monthNames[month]}`;


    if (
        !activities ||
        activities.length === 0
    ) {

        detail.innerHTML = `

            <div class="day-detail-placeholder">

                <span>
                    ${dateText}
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
                ${dateText}
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
            "Aquí aparecerán las experiencias que guardes."
        );

    }


    if (type === "realizadas") {

        showTemporaryMessage(
            "Aquí aparecerán las experiencias que completes."
        );

    }

}


/* =========================================================
   VOLVER ARRIBA
========================================================= */

function goHome() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
