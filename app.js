/* =========================================================
   TEMPLE · 30 DÍAS
   EXPERIENCIAS + DASHBOARD
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
   10 EXPERIENCIAS DE PRUEBA
========================================================= */

const experiences = [

    /* =====================================================
       CONOCERME
    ===================================================== */

    {
        id: "conocerme-1",
        journey: "conocerme",
        day: 1,

        title: "Una cita conmigo",

        duration: "30–60 min",

        moment:
            "En un lugar que te resulte agradable y en un momento que puedas reservar para ti.",

        description:
            "Hoy vas a tener una cita contigo. La propuesta es salir de la rutina y dedicar un momento a hacer algo que realmente quieras hacer, sin esperar a que alguien más pueda acompañarte.",

        steps: [

            {
                icon: "🎯",
                title: "Elige",
                text:
                    "Una actividad que te gustaría compartir con alguien o que llevas tiempo queriendo hacer."
            },

            {
                icon: "🧭",
                title: "Decide",
                text:
                    "Elige dónde ir, qué hacer y cuánto tiempo quieres quedarte."
            },

            {
                icon: "🚶",
                title: "Hazlo",
                text:
                    "Ve, hazlo y disfruta de la experiencia a tu propio ritmo."
            },

            {
                icon: "📵",
                title: "Desconecta",
                text:
                    "Deja el teléfono a un lado durante algunos momentos."
            },

            {
                icon: "👀",
                title: "Observa",
                text:
                    "Fíjate en tus elecciones: qué te apetece, qué disfrutas, qué te incomoda o qué despierta tu interés."
            }

        ],

        question:
            "¿Qué descubriste sobre ti al compartir este tiempo contigo?"
    },


    {
        id: "conocerme-2",
        journey: "conocerme",
        day: 2,

        title: "Elegir por mí",

        duration: "15–30 min",

        moment:
            "En un momento cotidiano en el que tengas varias opciones para elegir.",

        description:
            "Hoy vas a prestar atención a tus elecciones cotidianas. No se trata de tomar decisiones importantes, sino de observar cuánto espacio das a lo que realmente quieres.",

        steps: [

            {
                icon: "👀",
                title: "Observa",
                text:
                    "Identifica una situación cotidiana en la que tengas varias opciones: qué comer, qué escuchar, qué hacer en tu tiempo libre, qué ropa ponerte o dónde ir."
            },

            {
                icon: "💭",
                title: "Pregúntate",
                text:
                    "Antes de elegir, nota qué opción te apetece realmente."
            },

            {
                icon: "🎯",
                title: "Elige",
                text:
                    "Esta vez, toma la decisión teniendo en cuenta tu propia preferencia."
            },

            {
                icon: "🧭",
                title: "Observa",
                text:
                    "Después de elegir, fíjate en cómo te sientes con esa decisión. Nota si aparece satisfacción, duda, culpa, indiferencia u otra sensación."
            }

        ],

        question:
            "¿Qué notaste sobre la forma en que eliges cuando das espacio a lo que tú quieres?"
    },


    /* =====================================================
       CONECTAR
    ===================================================== */

    {
        id: "conectar-1",
        journey: "conectar",
        day: 1,

        title: "Volver a mirarnos",

        duration: "10–15 min",

        moment:
            "En un momento tranquilo, cuando puedan estar juntos sin interrupciones.",

        description:
            "A veces compartimos tanto tiempo con nuestra pareja que dejamos de mirarnos realmente. Hoy van a hacer una pausa para volver a encontrarse a través de la mirada y observar qué ocurre cuando se prestan atención de una manera diferente.",

        steps: [

            {
                icon: "👀",
                title: "Mirarse",
                text:
                    "Siéntense frente a frente y mírense durante un minuto en silencio. No necesitan mantener una expresión determinada ni intentar provocar una reacción."
            },

            {
                icon: "🌿",
                title: "Permanecer",
                text:
                    "Continúen durante unos minutos. Si aparecen risas, incomodidad, pensamientos o ganas de apartar la mirada, simplemente reconózcanlo y vuelvan a prestar atención a la persona que tienen delante."
            },

            {
                icon: "💬",
                title: "Compartir",
                text:
                    "Después, cada persona puede compartir brevemente qué experimentó durante el ejercicio y qué notó de sí misma al estar frente a su pareja."
            },

            {
                icon: "🤍",
                title: "Cerrar",
                text:
                    "Terminen el momento con un gesto que ambos elijan: un abrazo, tomarse de las manos, sonreírse o simplemente permanecer juntos unos instantes."
            }

        ],

        question:
            "¿Qué descubriste sobre lo que ocurre entre ustedes cuando se detienen a mirarse realmente?"
    },


    {
        id: "conectar-2",
        journey: "conectar",
        day: 2,

        title: "Una conversación sin pantallas",

        duration: "15–20 min",

        moment:
            "En casa o en un lugar tranquilo, durante un momento en el que puedan estar juntos sin interrupciones.",

        description:
            "A veces estamos juntos, pero nuestra atención está en diferentes lugares. Hoy van a crear un espacio para estar realmente presentes en la conversación, dejando fuera aquello que suele interponerse entre ustedes.",

        steps: [

            {
                icon: "📵",
                title: "Apartar",
                text:
                    "Dejen los teléfonos y otros dispositivos fuera de su alcance. Durante estos minutos, no necesitan atender nada más."
            },

            {
                icon: "💬",
                title: "Conversar",
                text:
                    "Siéntense frente a frente y comiencen una conversación sobre algo cotidiano que ambos tengan ganas de compartir. No necesitan buscar un tema profundo; simplemente hablen y estén presentes."
            },

            {
                icon: "👀",
                title: "Observar",
                text:
                    "Mientras conversan, presta atención a la persona que tienes delante: su manera de hablar, sus expresiones, sus pausas y aquello que comparte contigo."
            },

            {
                icon: "🤍",
                title: "Cerrar",
                text:
                    "Cuando terminen, permanezcan unos instantes juntos y observen cómo se sintió compartir ese tiempo sin otras distracciones."
            }

        ],

        question:
            "¿Qué notaste al compartir una conversación teniendo toda tu atención en tu pareja?"
    },


    /* =====================================================
       PONER LÍMITES
    ===================================================== */

    {
        id: "limites-1",
        journey: "limites",
        day: 1,

        title: "Decir no a algo pequeño",

        duration: "10–20 min",

        moment:
            "En una situación cotidiana en la que puedas rechazar algo sin poner en riesgo tu bienestar ni el de otra persona.",

        description:
            "Hoy vas a experimentar qué ocurre cuando reconoces que no quieres algo y lo expresas de manera clara.",

        steps: [

            {
                icon: "👀",
                title: "Detecta",
                text:
                    "Durante el día, presta atención a alguna situación sencilla en la que te propongan algo que realmente no quieras hacer, aceptar o elegir."
            },

            {
                icon: "⏸️",
                title: "Pausa",
                text:
                    "Antes de responder, detente unos segundos y observa qué quieres tú."
            },

            {
                icon: "💬",
                title: "Di que no",
                text:
                    "Si la situación lo permite, responde con un ‘no’ claro y respetuoso. No necesitas dar una explicación extensa."
            },

            {
                icon: "🧭",
                title: "Observa",
                text:
                    "Después de responder, fíjate en qué ocurre en ti: qué sientes, qué piensas y qué ganas aparecen. Observa también si aparece la necesidad de cambiar tu respuesta."
            }

        ],

        question:
            "¿Qué descubriste al expresar un ‘no’ en una situación pequeña?"
    },


    {
        id: "limites-2",
        journey: "limites",
        day: 2,

        title: "Elegir sin adaptarme",

        duration: "10–20 min",

        moment:
            "En un momento del día en el que otra persona pueda proponerte qué hacer.",

        description:
            "Hoy vas a prestar atención a tus propias preferencias antes de adaptarte automáticamente a lo que otra persona quiere.",

        steps: [

            {
                icon: "🔎",
                title: "Observa",
                text:
                    "Identifica una situación cotidiana en la que tengas la posibilidad de elegir qué hacer: qué comer, qué ver, dónde ir o cómo pasar un momento libre."
            },

            {
                icon: "💭",
                title: "Pregúntate",
                text:
                    "Antes de preguntar qué prefiere la otra persona, pregúntate qué quieres tú."
            },

            {
                icon: "🎯",
                title: "Elige",
                text:
                    "Si es posible, toma en cuenta tu propia preferencia al decidir."
            },

            {
                icon: "🧭",
                title: "Observa",
                text:
                    "Después de elegir, fíjate en qué aparece: satisfacción, duda, incomodidad, culpa, tranquilidad u otra sensación."
            }

        ],

        question:
            "¿Qué notaste cuando tomaste en cuenta primero lo que tú querías?"
    },


    /* =====================================================
       ELEGIR
    ===================================================== */

    {
        id: "elegir-1",
        journey: "elegir",
        day: 1,

        title: "Elegir sin consultar",

        duration: "10–20 min",

        moment:
            "En un momento cotidiano en el que tengas que tomar una decisión sencilla.",

        description:
            "Hoy vas a observar qué ocurre cuando tomas una decisión sin buscar primero la opinión, aprobación o confirmación de otra persona. No se trata de decidir algo importante, sino de darte la oportunidad de elegir por ti en una situación cotidiana.",

        steps: [

            {
                icon: "👀",
                title: "Encuentra",
                text:
                    "Identifica una decisión sencilla que tengas que tomar hoy. Puede ser qué hacer, qué comprar, qué comer, qué plan elegir o cómo resolver algo cotidiano."
            },

            {
                icon: "📵",
                title: "No consultes",
                text:
                    "Si normalmente preguntarías a alguien qué haría, qué elegiría o si tu decisión está bien, esta vez intenta decidir sin consultar."
            },

            {
                icon: "🎯",
                title: "Elige",
                text:
                    "Toma la decisión considerando lo que tú piensas y quieres hacer en esa situación."
            },

            {
                icon: "🧭",
                title: "Observa",
                text:
                    "Después de elegir, presta atención a lo que aparece: seguridad, duda, incomodidad, alivio, ganas de confirmar tu decisión o cualquier otra reacción."
            }

        ],

        question:
            "¿Qué descubriste sobre ti al tomar una decisión sin buscar primero la opinión de otra persona?"
    },


    {
        id: "elegir-2",
        journey: "elegir",
        day: 2,

        title: "Elegir cuando ambas opciones me convienen",

        duration: "10–20 min",

        moment:
            "En un momento cotidiano en el que tengas que elegir entre dos opciones que te resulten igualmente aceptables.",

        description:
            "A veces no resulta difícil elegir porque una opción sea mala, sino porque varias alternativas pueden parecernos igualmente buenas. Hoy vas a experimentar qué ocurre cuando decides sin necesitar encontrar una opción claramente superior.",

        steps: [

            {
                icon: "🎯",
                title: "Elige",
                text:
                    "Busca una situación cotidiana con dos opciones que realmente puedas elegir: qué comer, qué actividad hacer, qué comprar o cómo organizar un momento del día."
            },

            {
                icon: "⚖️",
                title: "Compara",
                text:
                    "Observa brevemente qué te ofrece cada alternativa. No necesitas analizar todas sus consecuencias."
            },

            {
                icon: "🧭",
                title: "Decide",
                text:
                    "Elige una de las dos y permite que sea suficiente, aunque la otra también te pareciera una buena opción."
            },

            {
                icon: "👀",
                title: "Observa",
                text:
                    "Después de decidir, nota qué aparece: satisfacción, duda, ganas de cambiar, alivio, indiferencia o cualquier otra reacción."
            }

        ],

        question:
            "¿Qué descubriste sobre ti cuando tuviste que elegir sin que hubiera una opción claramente mejor?"
    },


    /* =====================================================
       SOLTAR
    ===================================================== */

    {
        id: "soltar-1",
        journey: "soltar",
        day: 1,

        title: "Dejar algo sin terminar",

        duration: "10–20 min",

        moment:
            "En casa, en el trabajo o en cualquier lugar donde estés realizando una actividad que puedas detener sin consecuencias.",

        description:
            "A veces sentimos que algo tiene que quedar terminado antes de poder pasar a otra cosa. Hoy vas a experimentar qué ocurre cuando eliges detener una actividad aunque todavía quede algo por hacer.",

        steps: [

            {
                icon: "🔎",
                title: "Elige",
                text:
                    "Busca una actividad sencilla que estés realizando y que puedas dejar para después sin que esto genere un problema. Puede ser ordenar algo, terminar una tarea, responder un mensaje o cualquier otra actividad cotidiana."
            },

            {
                icon: "⏸️",
                title: "Detente",
                text:
                    "En un momento en el que normalmente continuarías hasta terminar, haz una pausa y deja la actividad tal como está."
            },

            {
                icon: "👀",
                title: "Observa",
                text:
                    "Durante unos minutos, nota qué aparece al dejarla sin terminar: ganas de volver, incomodidad, alivio, pensamientos sobre lo que falta o cualquier otra experiencia."
            },

            {
                icon: "🌿",
                title: "Continúa",
                text:
                    "Haz otra cosa durante un momento y permite que aquello que dejaste pendiente permanezca así. No necesitas resolverlo inmediatamente."
            }

        ],

        question:
            "¿Qué descubriste al permitir que algo quedara sin terminar?"
    },


    {
        id: "soltar-2",
        journey: "soltar",
        day: 2,

        title: "Dejar de revisar",

        duration: "10–20 min",

        moment:
            "En un momento del día en el que puedas dejar de comprobar algo que sueles revisar repetidamente.",

        description:
            "A veces volvemos una y otra vez a algo para comprobar si cambió, si llegó una respuesta o si todo sigue igual. Hoy vas a experimentar qué ocurre cuando dejas de comprobarlo durante un tiempo.",

        steps: [

            {
                icon: "🔎",
                title: "Detecta",
                text:
                    "Identifica algo que suelas revisar más de una vez y que puedas dejar de comprobar durante un tiempo sin que esto genere un problema."
            },

            {
                icon: "⏸️",
                title: "Detén",
                text:
                    "Cuando aparezca el impulso de volver a revisarlo, reconoce que está presente y decide no hacerlo durante el tiempo que hayas elegido."
            },

            {
                icon: "👀",
                title: "Observa",
                text:
                    "Presta atención a lo que aparece mientras no compruebas: ganas de volver, inquietud, curiosidad, pensamientos o cualquier otra experiencia."
            },

            {
                icon: "🌿",
                title: "Continúa",
                text:
                    "Haz otra cosa y permite que aquello que dejaste de revisar permanezca fuera de tu atención durante ese tiempo."
            }

        ],

        question:
            "¿Qué ocurrió cuando dejaste de comprobar algo que normalmente vuelves a revisar?"
    }

];


/* =========================================================
   ACTIVIDADES DEL CALENDARIO DE PRUEBA
   ========================================================= */

const demoActivities = {

    "2026-09-01": [
        {
            experienceId: "conocerme-1"
        }
    ],

    "2026-09-02": [
        {
            experienceId: "conocerme-2"
        }
    ],

    "2026-09-03": [
        {
            experienceId: "conectar-1"
        }
    ],

    "2026-09-04": [
        {
            experienceId: "conectar-2"
        }
    ],

    "2026-09-05": [
        {
            experienceId: "limites-1"
        }
    ],

    "2026-09-06": [
        {
            experienceId: "limites-2"
        }
    ],

    "2026-09-07": [
        {
            experienceId: "elegir-1"
        }
    ],

    "2026-09-08": [
        {
            experienceId: "elegir-2"
        }
    ],

    "2026-09-09": [
        {
            experienceId: "soltar-1"
        }
    ],

    "2026-09-10": [
        {
            experienceId: "soltar-2"
        }
    ]

};


/* =========================================================
   ESTADO
========================================================= */

let calendarDate =
    new Date(2026, 8, 1);

let currentExperience = null;

let currentRating = 0;


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCalendar();

        setupRating();

    }
);


/* =========================================================
   BUSCAR EXPERIENCIA
========================================================= */

function getExperienceById(id) {

    return experiences.find(
        experience =>
            experience.id === id
    );

}


/* =========================================================
   ABRIR TOMO
========================================================= */

function openJourney(journey) {

    const available =
        experiences.filter(
            experience =>
                experience.journey === journey
        );


    if (
        available.length === 0
    ) {

        showTemporaryMessage(
            `Pronto podrás comenzar tu recorrido de ${journeys[journey].name}.`
        );

        return;

    }


    openExperience(
        available[0].id
    );

}


/* =========================================================
   ABRIR EXPERIENCIA
========================================================= */

function openExperience(id) {

    const experience =
        getExperienceById(id);


    if (!experience) {

        return;

    }


    currentExperience =
        experience;

    currentRating = 0;


    const journey =
        journeys[
            experience.journey
        ];


    document.getElementById(
        "experience-emoji"
    ).textContent =
        journey.emoji;


    document.getElementById(
        "experience-journey"
    ).textContent =
        journey.name.toUpperCase();


    document.getElementById(
        "experience-day"
    ).textContent =
        `Día ${experience.day} de 30`;


    document.getElementById(
        "experience-title"
    ).textContent =
        experience.title;


    document.getElementById(
        "experience-duration"
    ).textContent =
        experience.duration;


    document.getElementById(
        "experience-moment"
    ).textContent =
        experience.moment;


    document.getElementById(
        "experience-description-text"
    ).textContent =
        experience.description;


    renderExperienceSteps(
        experience.steps
    );


    document.getElementById(
        "experience-question"
    ).textContent =
        experience.question;


    resetRating();


    updateCompleteButton();


    const dashboard =
        document.getElementById(
            "dashboard-view"
        );


    const experienceView =
        document.getElementById(
            "experience-view"
        );


    dashboard.style.display =
        "none";


    experienceView.classList.add(
        "active"
    );


    experienceView.setAttribute(
        "aria-hidden",
        "false"
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================================
   CERRAR EXPERIENCIA
========================================================= */

function closeExperience() {

    const dashboard =
        document.getElementById(
            "dashboard-view"
        );


    const experienceView =
        document.getElementById(
            "experience-view"
        );


    experienceView.classList.remove(
        "active"
    );


    experienceView.setAttribute(
        "aria-hidden",
        "true"
    );


    dashboard.style.display =
        "";


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    renderCalendar();

}


/* =========================================================
   RENDERIZAR PASOS
========================================================= */

function renderExperienceSteps(
    steps
) {

    const container =
        document.getElementById(
            "experience-steps"
        );


    container.innerHTML =
        "";


    steps.forEach(
        step => {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "experience-step";


            element.innerHTML = `

                <div class="experience-step-icon">
                    ${step.icon}
                </div>

                <div class="experience-step-content">

                    <div class="experience-step-title">
                        ${step.title}
                    </div>

                    <div class="experience-step-text">
                        ${step.text}
                    </div>

                </div>

            `;


            container.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   SORPRÉNDEME
========================================================= */

function surpriseMe() {

    if (
        experiences.length === 0
    ) {

        return;

    }


    const random =
        experiences[
            Math.floor(
                Math.random() *
                experiences.length
            )
        ];


    openExperience(
        random.id
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

                    const experience =
                        getExperienceById(
                            activity.experienceId
                        );


                    if (!experience) {
                        return;
                    }


                    const selected =
                        journeys[
                            experience.journey
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
                        `${selected.name} · Día ${experience.day}`;


                    emojis.appendChild(
                        emoji
                    );

                }
            );


            dayElement.appendChild(
                emojis
            );

        }


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

            const experience =
                getExperienceById(
                    activity.experienceId
                );


            if (!experience) {
                return;
            }


            const selected =
                journeys[
                    experience.journey
                ];


            html += `

                <button
                    type="button"
                    class="day-detail-item day-detail-button"
                    onclick="openExperience('${experience.id}')"
                >

                    <div class="detail-emoji">
                        ${selected.emoji}
                    </div>

                    <div class="detail-info">

                        <span class="detail-journey">
                            ${selected.name}
                        </span>

                        <span class="detail-title">
                            ${experience.title}
                        </span>

                        <span class="detail-day">
                            Día ${experience.day} de 30
                        </span>

                    </div>

                    <div class="detail-check">
                        →
                    </div>

                </button>

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
   VALORACIÓN
========================================================= */

function setupRating() {

    const stars =
        document.querySelectorAll(
            "#rating-stars button"
        );


    stars.forEach(
        star => {

            star.addEventListener(
                "click",
                () => {

                    const rating =
                        Number(
                            star.dataset.rating
                        );


                    currentRating =
                        rating;


                    renderRating(
                        rating
                    );


                    saveRating(
                        rating
                    );

                }
            );

        }
    );

}


function renderRating(
    rating
) {

    const stars =
        document.querySelectorAll(
            "#rating-stars button"
        );


    stars.forEach(
        star => {

            const value =
                Number(
                    star.dataset.rating
                );


            star.textContent =
                value <= rating
                    ? "★"
                    : "☆";


            star.classList.toggle(
                "active",
                value <= rating
            );

        }
    );


    const message =
        document.getElementById(
            "rating-message"
        );


    const messages = {

        1: "No fue lo que esperaba.",

        2: "Me costó un poco.",

        3: "Fue una experiencia interesante.",

        4: "Me gustó hacerla.",

        5: "Quiero volver a esta experiencia."

    };


    message.textContent =
        messages[rating];

}


function resetRating() {

    const stars =
        document.querySelectorAll(
            "#rating-stars button"
        );


    stars.forEach(
        star => {

            star.textContent =
                "☆";

            star.classList.remove(
                "active"
            );

        }
    );


    const message =
        document.getElementById(
            "rating-message"
        );


    message.textContent =
        "Puedes valorar la experiencia cuando termines.";

}


/* =========================================================
   GUARDAR VALORACIÓN
========================================================= */

function saveRating(
    rating
) {

    if (!currentExperience) {
        return;
    }


    const ratings =
        JSON.parse(
            localStorage.getItem(
                "temple30_ratings"
            ) || "{}"
        );


    ratings[
        currentExperience.id
    ] = rating;


    localStorage.setItem(
        "temple30_ratings",
        JSON.stringify(ratings)
    );

}


/* =========================================================
   COMPLETAR EXPERIENCIA
========================================================= */

function toggleComplete() {

    if (!currentExperience) {
        return;
    }


    const completed =
        JSON.parse(
            localStorage.getItem(
                "temple30_completed"
            ) || "{}"
        );


    const id =
        currentExperience.id;


    completed[id] =
        !completed[id];


    localStorage.setItem(
        "temple30_completed",
        JSON.stringify(completed)
    );


    updateCompleteButton();


    renderCalendar();

}


function updateCompleteButton() {

    if (!currentExperience) {
        return;
    }


    const completed =
        JSON.parse(
            localStorage.getItem(
                "temple30_completed"
            ) || "{}"
        );


    const isCompleted =
        Boolean(
            completed[
                currentExperience.id
            ]
        );


    const button =
        document.getElementById(
            "complete-button"
        );


    const icon =
        document.getElementById(
            "complete-icon"
        );


    const text =
        document.getElementById(
            "complete-text"
        );


    if (isCompleted) {

        button.classList.add(
            "completed"
        );

        icon.textContent =
            "✓";

        text.textContent =
            "Experiencia completada";

    } else {

        button.classList.remove(
            "completed"
        );

        icon.textContent =
            "○";

        text.textContent =
            "Marcar como completada";

    }

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

    if (
        currentExperience
    ) {

        closeExperience();

        return;

    }


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
