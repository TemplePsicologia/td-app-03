/* =========================================================
   TEMPLE · 30 DÍAS
   DASHBOARD
========================================================= */


/* =========================================================
   INFORMACIÓN DE LOS TOMOS
========================================================= */

const journeys = {

    conocerme: {

        name: "Conocerme",

        emoji: "🌱",

        color: "#759C7B"

    },


    conectar: {

        name: "Conectar",

        emoji: "🤍",

        color: "#A785B0"

    },


    limites: {

        name: "Poner límites",

        emoji: "🪴",

        color: "#B58A73"

    },


    elegir: {

        name: "Elegir",

        emoji: "🧭",

        color: "#708EAE"

    },


    soltar: {

        name: "Soltar",

        emoji: "🍃",

        color: "#819580"

    }

};


/* =========================================================
   DATOS DE DEMOSTRACIÓN
   -----------------------------------------------
   Estos datos solamente sirven para comprobar
   visualmente cómo funcionará el calendario.
========================================================= */

const demoActivities = {


    "2026-09-03": [

        {

            journey: "conocerme",

            day: 1,

            title: "Volver a mirarme"

        }

    ],


    "2026-09-05": [

        {

            journey: "conectar",

            day: 1,

            title: "Volver a mirarnos"

        }

    ],


    "2026-09-09": [

        {

            journey: "elegir",

            day: 1,

            title: "Elegir sin consultar"

        }

    ],


    "2026-09-14": [

        {

            journey: "conocerme",

            day: 4,

            title: "Una pausa para observarme"

        }

    ],


    "2026-09-16": [

        {

            journey: "limites",

            day: 2,

            title: "Reconocer lo que necesito"

        }

    ],


    "2026-09-18": [

        {

            journey: "conectar",

            day: 3,

            title: "Decir lo que normalmente callamos"

        },

        {

            journey: "elegir",

            day: 4,

            title: "Elegir desde lo que quiero"

        }

    ],


    "2026-09-25": [

        {

            journey: "elegir",

            day: 7,

            title: "Tomar una decisión propia"

        }

    ]

};


/* =========================================================
   ESTADO
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
   ABRIR TOMO
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

                        day: activity.day,

                        title: activity.title

                    });

                }
            );

        }
    );


    if (
        allActivities.length === 0
    ) {

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
        journeys[
            random.journey
        ];


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
                ${selected.emoji}
                ${random.title}
            </h3>

            <p>
                ${selected.name}
                · Día ${random.day}
            </p>

        </div>

    `;


    result.classList.add(
        "visible"
    );

}


/* =========================================================
   CALENDARIO
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
        JavaScript:

        Domingo = 0
        Lunes = 1
        ...
        Sábado = 6

        Nuestro calendario comienza
        en lunes.
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


    /* ESPACIOS INICIALES */

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


    /* CREAR DÍAS */

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


        /* ACTIVIDADES */

        if (
            activities &&
            activities.length > 0
        ) {

            dayElement.classList.add(
                "has-activity"
            );


            const emojis =
                document.createElement(
                    "div"
                );


            emojis.className =
                "activity-emojis";


            activities.forEach(
                activity => {

                    const selected =
                        journeys[
                            activity.journey
                        ];


                    const emoji =
                        document.createElement(
                            "span"
                        );


                    emoji.className =
                        "activity-emoji";


                    emoji.textContent =
                        selected.emoji;


                    emoji.title =
                        `${selected.name} · Día ${activity.day}`;


                    emojis.appendChild(
                        emoji
                    );

                }
            );


            dayElement.appendChild(
                emojis
            );

        }


        /* DÍA ACTUAL DE DEMOSTRACIÓN */

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
   FECHA
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
   DETALLE DEL DÍA
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
        `${day} de ${monthNames[month]} ${year}`;


    /* SIN ACTIVIDAD */

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

            <div class="day-detail-date">
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

                    <div class="detail-emoji">
                        ${selected.emoji}
                    </div>


                    <div class="detail-info">

                        <span class="detail-journey">
                            ${selected.name}
                        </span>

                        <span class="detail-title">
                            ${activity.title}
                        </span>

                        <span class="detail-day">
                            Día ${activity.day} de 30
                        </span>

                    </div>

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
   CAMBIAR MES
========================================================= */

function changeMonth(
    direction
) {

    calendarDate.setMonth(

        calendarDate.getMonth()
        +
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

function showFeature(
    type
) {

    if (
        type === "guardadas"
    ) {

        showTemporaryMessage(
            "Aquí aparecerán las experiencias que guardes."
        );

    }


    if (
        type === "realizadas"
    ) {

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


/* =========================================================
   MENSAJE TEMPORAL
========================================================= */

function showTemporaryMessage(
    message
) {

    let messageElement =
        document.querySelector(
            ".temporary-message"
        );


    if (!messageElement) {

        messageElement =
            document.createElement(
                "div"
            );


        messageElement.className =
            "temporary-message";


        document.body.appendChild(
            messageElement
        );

    }


    messageElement.textContent =
        message;


    messageElement.classList.add(
        "show"
    );


    clearTimeout(
        window.temporaryMessageTimer
    );


    window.temporaryMessageTimer =
        setTimeout(
            () => {

                messageElement.classList.remove(
                    "show"
                );

            },
            2600
        );

}
