/* =========================================================
   TEMPLE · 30 DÍAS
   APP PRINCIPAL
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
   LAS 10 EXPERIENCIAS DE PRUEBA
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
        place: "En un lugar que te resulte agradable y en un momento que puedas reservar para ti.",
        description:
            "Hoy vas a tener una cita contigo. La propuesta es salir de la rutina y dedicar un momento a hacer algo que realmente quieras hacer, sin esperar a que alguien más pueda acompañarte.",

        steps: [
            {
                emoji: "🎯",
                title: "Elige",
                text: "Una actividad que te gustaría compartir con alguien o que llevas tiempo queriendo hacer."
            },
            {
                emoji: "🧭",
                title: "Decide",
                text: "Elige dónde ir, qué hacer y cuánto tiempo quieres quedarte."
            },
            {
                emoji: "🚶",
                title: "Hazlo",
                text: "Ve, hazlo y disfruta de la experiencia a tu propio ritmo."
            },
            {
                emoji: "📵",
                title: "Desconecta",
                text: "Deja el teléfono a un lado durante algunos momentos."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en tus elecciones: qué te apetece, qué disfrutas, qué te incomoda o qué despierta tu interés."
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
        place: "En un momento cotidiano en el que tengas varias opciones para elegir.",
        description:
            "Hoy vas a prestar atención a tus elecciones cotidianas. No se trata de tomar decisiones importantes, sino de observar cuánto espacio das a lo que realmente quieres.",

        steps: [
            {
                emoji: "👀",
                title: "Observa",
                text: "Identifica una situación cotidiana en la que tengas varias opciones: qué comer, qué escuchar, qué hacer en tu tiempo libre, qué ropa ponerte o dónde ir."
            },
            {
                emoji: "💭",
                title: "Pregúntate",
                text: "Antes de elegir, nota qué opción te apetece realmente."
            },
            {
                emoji: "🎯",
                title: "Elige",
                text: "Esta vez, toma la decisión teniendo en cuenta tu propia preferencia."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después de elegir, fíjate en cómo te sientes con esa decisión. Nota si aparece satisfacción, duda, culpa, indiferencia u otra sensación."
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
        place: "En un momento tranquilo, cuando puedan estar juntos sin interrupciones.",
        description:
            "A veces compartimos tanto tiempo con nuestra pareja que dejamos de mirarnos realmente. Hoy van a hacer una pausa para volver a encontrarse a través de la mirada y observar qué ocurre cuando se prestan atención de una manera diferente.",

        steps: [
            {
                emoji: "👀",
                title: "Mirarse",
                text: "Siéntense frente a frente y mírense durante un minuto en silencio. No necesitan mantener una expresión determinada ni intentar provocar una reacción."
            },
            {
                emoji: "🌿",
                title: "Permanecer",
                text: "Continúen durante unos minutos. Si aparecen risas, incomodidad, pensamientos o ganas de apartar la mirada, simplemente reconózcanlo y vuelvan a prestar atención a la persona que tienen delante."
            },
            {
                emoji: "💬",
                title: "Compartir",
                text: "Después, cada persona puede compartir brevemente qué experimentó durante el ejercicio y qué notó de sí misma al estar frente a su pareja."
            },
            {
                emoji: "🤍",
                title: "Cerrar",
                text: "Terminen el momento con un gesto que ambos elijan: un abrazo, tomarse de las manos, sonreírse o simplemente permanecer juntos unos instantes."
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
        place: "En casa o en un lugar tranquilo, durante un momento en el que puedan estar juntos sin interrupciones.",
        description:
            "A veces estamos juntos, pero nuestra atención está en diferentes lugares. Hoy van a crear un espacio para estar realmente presentes en la conversación, dejando fuera aquello que suele interponerse entre ustedes.",

        steps: [
            {
                emoji: "📵",
                title: "Apartar",
                text: "Dejen los teléfonos y otros dispositivos fuera de su alcance. Durante estos minutos, no necesitan atender nada más."
            },
            {
                emoji: "💬",
                title: "Conversar",
                text: "Siéntense frente a frente y comiencen una conversación sobre algo cotidiano que ambos tengan ganas de compartir. No necesitan buscar un tema profundo; simplemente hablen y estén presentes."
            },
            {
                emoji: "👀",
                title: "Observar",
                text: "Mientras conversan, presta atención a la persona que tienes delante: su manera de hablar, sus expresiones, sus pausas y aquello que comparte contigo."
            },
            {
                emoji: "🤍",
                title: "Cerrar",
                text: "Cuando terminen, permanezcan unos instantes juntos y observen cómo se sintió compartir ese tiempo sin otras distracciones."
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
        place: "En una situación cotidiana en la que puedas rechazar algo sin poner en riesgo tu bienestar ni el de otra persona.",
        description:
            "Hoy vas a experimentar qué ocurre cuando reconoces que no quieres algo y lo expresas de manera clara.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Durante el día, presta atención a alguna situación sencilla en la que te propongan algo que realmente no quieras hacer, aceptar o elegir."
            },
            {
                emoji: "⏸️",
                title: "Pausa",
                text: "Antes de responder, detente unos segundos y observa qué quieres tú."
            },
            {
                emoji: "💬",
                title: "Di que no",
                text: "Si la situación lo permite, responde con un “no” claro y respetuoso. No necesitas dar una explicación extensa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después de responder, fíjate en qué ocurre en ti: qué sientes, qué piensas y qué ganas aparecen. Observa también si aparece la necesidad de cambiar tu respuesta."
            }
        ],

        question:
            "¿Qué descubriste al expresar un “no” en una situación pequeña?"
    },


    {
        id: "limites-2",
        journey: "limites",
        day: 2,
        title: "Elegir sin adaptarme",
        duration: "10–20 min",
        place: "En un momento del día en el que otra persona pueda proponerte qué hacer.",
        description:
            "Hoy vas a prestar atención a tus propias preferencias antes de adaptarte automáticamente a lo que otra persona quiere.",

        steps: [
            {
                emoji: "🔎",
                title: "Observa",
                text: "Identifica una situación cotidiana en la que tengas la posibilidad de elegir qué hacer: qué comer, qué ver, dónde ir o cómo pasar un momento libre."
            },
            {
                emoji: "💭",
                title: "Pregúntate",
                text: "Antes de preguntar qué prefiere la otra persona, pregúntate qué quieres tú."
            },
            {
                emoji: "🎯",
                title: "Elige",
                text: "Si es posible, toma en cuenta tu propia preferencia al decidir."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después de elegir, fíjate en qué aparece: satisfacción, duda, incomodidad, culpa, tranquilidad u otra sensación."
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
        place: "En un momento cotidiano en el que tengas que tomar una decisión sencilla.",
        description:
            "Hoy vas a observar qué ocurre cuando tomas una decisión sin buscar primero la opinión, aprobación o confirmación de otra persona. No se trata de decidir algo importante, sino de darte la oportunidad de elegir por ti en una situación cotidiana.",

        steps: [
            {
                emoji: "👀",
                title: "Encuentra",
                text: "Identifica una decisión sencilla que tengas que tomar hoy. Puede ser qué hacer, qué comprar, qué comer, qué plan elegir o cómo resolver algo cotidiano."
            },
            {
                emoji: "📵",
                title: "No consultes",
                text: "Si normalmente preguntarías a alguien qué haría, qué elegiría o si tu decisión está bien, esta vez intenta decidir sin consultar."
            },
            {
                emoji: "🎯",
                title: "Elige",
                text: "Toma la decisión considerando lo que tú piensas y quieres hacer en esa situación."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después de elegir, presta atención a lo que aparece: seguridad, duda, incomodidad, alivio, ganas de confirmar tu decisión o cualquier otra reacción."
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
        place: "En un momento cotidiano en el que tengas que elegir entre dos opciones que te resulten igualmente aceptables.",
        description:
            "A veces no resulta difícil elegir porque una opción sea mala, sino porque varias alternativas pueden parecernos igualmente buenas. Hoy vas a experimentar qué ocurre cuando decides sin necesitar encontrar una opción claramente superior.",

        steps: [
            {
                emoji: "🎯",
                title: "Elige",
                text: "Busca una situación cotidiana con dos opciones que realmente puedas elegir: qué comer, qué actividad hacer, qué comprar o cómo organizar un momento del día."
            },
            {
                emoji: "⚖️",
                title: "Compara",
                text: "Observa brevemente qué te ofrece cada alternativa. No necesitas analizar todas sus consecuencias."
            },
            {
                emoji: "🧭",
                title: "Decide",
                text: "Elige una de las dos y permite que sea suficiente, aunque la otra también te pareciera una buena opción."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Después de decidir, nota qué aparece: satisfacción, duda, ganas de cambiar, alivio, indiferencia o cualquier otra reacción."
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
        place: "En casa, en el trabajo o en cualquier lugar donde estés realizando una actividad que puedas detener sin consecuencias.",
        description:
            "A veces sentimos que algo tiene que quedar terminado antes de poder pasar a otra cosa. Hoy vas a experimentar qué ocurre cuando eliges detener una actividad aunque todavía quede algo por hacer.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Busca una actividad sencilla que estés realizando y que puedas dejar para después sin que esto genere un problema. Puede ser ordenar algo, terminar una tarea, responder un mensaje o cualquier otra actividad cotidiana."
            },
            {
                emoji: "⏸️",
                title: "Detente",
                text: "En un momento en el que normalmente continuarías hasta terminar, haz una pausa y deja la actividad tal como está."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Durante unos minutos, nota qué aparece al dejarla sin terminar: ganas de volver, incomodidad, alivio, pensamientos sobre lo que falta o cualquier otra experiencia."
            },
            {
                emoji: "🌿",
                title: "Continúa",
                text: "Haz otra cosa durante un momento y permite que aquello que dejaste pendiente permanezca así. No necesitas resolverlo inmediatamente."
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
        place: "En un momento del día en el que puedas dejar de comprobar algo que sueles revisar repetidamente.",
        description:
            "A veces volvemos una y otra vez a algo para comprobar si cambió, si llegó una respuesta o si todo sigue igual. Hoy vas a experimentar qué ocurre cuando dejas de comprobarlo durante un tiempo.",

        steps: [
            {
                emoji: "🔎",
                title: "Detecta",
                text: "Identifica algo que suelas revisar más de una vez y que puedas dejar de comprobar durante un tiempo sin que esto genere un problema."
            },
            {
                emoji: "⏸️",
                title: "Detén",
                text: "Cuando aparezca el impulso de volver a revisarlo, reconoce que está presente y decide no hacerlo durante el tiempo que hayas elegido."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Presta atención a lo que aparece mientras no compruebas: ganas de volver, inquietud, curiosidad, pensamientos o cualquier otra experiencia."
            },
            {
                emoji: "🌿",
                title: "Continúa",
                text: "Haz otra cosa y permite que aquello que dejaste de revisar permanezca fuera de tu atención durante ese tiempo."
            }
        ],

        question:
            "¿Qué ocurrió cuando dejaste de comprobar algo que normalmente vuelves a revisar?"
    }

];


/* =========================================================
   ESTADO
========================================================= */

let calendarDate = new Date(2026, 8, 1);

let currentExperience = null;

let completedExperiences =
    JSON.parse(
        localStorage.getItem("temple30_completed") || "[]"
    );

let ratings =
    JSON.parse(
        localStorage.getItem("temple30_ratings") || "{}"
    );


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCalendar();

        createExperienceView();

    }
);


/* =========================================================
   CREAR VISTA DE EXPERIENCIA
========================================================= */

function createExperienceView() {

    const view =
        document.createElement("section");

    view.id =
        "experience-view";

    view.className =
        "experience-view";

    view.innerHTML = `

        <div class="experience-page">

            <button
                class="experience-back"
                type="button"
                onclick="closeExperience()"
            >
                ← Volver
            </button>


            <div
                class="experience-header"
                id="experience-header"
            ></div>


            <div
                class="experience-content"
                id="experience-content"
            ></div>

        </div>

    `;

    document.querySelector(".app").appendChild(view);

}


/* =========================================================
   ABRIR TOMO
========================================================= */

function openJourney(journey) {

    const firstExperience =
        experiences.find(
            experience =>
                experience.journey === journey
        );

    if (!firstExperience) {

        return;

    }

    openExperience(
        firstExperience.id
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

    const randomExperience =
        experiences[
            Math.floor(
                Math.random() *
                experiences.length
            )
        ];

    openExperience(
        randomExperience.id
    );

}


/* =========================================================
   ABRIR EXPERIENCIA
========================================================= */

function openExperience(id) {

    const experience =
        experiences.find(
            item =>
                item.id === id
        );

    if (!experience) {

        return;

    }

    currentExperience =
        experience;


    const journey =
        journeys[
            experience.journey
        ];


    const view =
        document.getElementById(
            "experience-view"
        );


    const header =
        document.getElementById(
            "experience-header"
        );


    const content =
        document.getElementById(
            "experience-content"
        );


    const isCompleted =
        completedExperiences.includes(
            experience.id
        );


    const currentRating =
        ratings[
            experience.id
        ] || 0;


    header.innerHTML = `

        <div
            class="experience-route"
            style="--route-color:${journey.color}"
        >

            <span class="experience-route-emoji">
                ${journey.emoji}
            </span>

            <span>
                ${journey.name}
            </span>

        </div>


        <div class="experience-day">
            Día ${experience.day} de 30
        </div>


        <h1>
            ${experience.title}
        </h1>


        <div class="experience-meta">

            <span>
                ⏱ ${experience.duration}
            </span>

            <span>
                📍 ${experience.place}
            </span>

        </div>

    `;


    let stepsHTML = "";


    experience.steps.forEach(
        (step, index) => {

            stepsHTML += `

                <article class="experience-step">

                    <div class="step-number">
                        ${index + 1}
                    </div>

                    <div class="step-body">

                        <h3>
                            ${step.emoji}
                            ${step.title}
                        </h3>

                        <p>
                            ${step.text}
                        </p>

                    </div>

                </article>

            `;

        }
    );


    let starsHTML = "";


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        starsHTML += `

            <button
                type="button"
                class="rating-star ${i <= currentRating ? "active" : ""}"
                onclick="rateExperience(${i})"
                aria-label="Valorar con ${i} estrellas"
            >
                ★
            </button>

        `;

    }


    content.innerHTML = `

        <div class="experience-description">

            <p>
                ${experience.description}
            </p>

        </div>


        <div class="experience-steps">

            <div class="experience-section-label">
                LA EXPERIENCIA
            </div>

            ${stepsHTML}

        </div>


        <div class="experience-reflection">

            <span>
                PARA CERRAR
            </span>

            <h2>
                ${experience.question}
            </h2>

        </div>


        <div class="experience-rating">

            <span>
                ¿Cómo fue para ti?
            </span>

            <div class="rating-stars">
                ${starsHTML}
            </div>

        </div>


        <button
            type="button"
            class="complete-experience-button ${isCompleted ? "completed" : ""}"
            onclick="toggleComplete()"
        >

            ${isCompleted
                ? "✓ Experiencia realizada"
                : "Marcar como realizada"
            }

        </button>

    `;


    view.classList.add(
        "visible"
    );


    document.body.classList.add(
        "experience-open"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CERRAR EXPERIENCIA
========================================================= */

function closeExperience() {

    const view =
        document.getElementById(
            "experience-view"
        );

    view.classList.remove(
        "visible"
    );

    document.body.classList.remove(
        "experience-open"
    );

    currentExperience =
        null;

}


/* =========================================================
   VALORACIÓN
========================================================= */

function rateExperience(
    rating
) {

    if (!currentExperience) {

        return;

    }


    ratings[
        currentExperience.id
    ] = rating;


    localStorage.setItem(
        "temple30_ratings",
        JSON.stringify(ratings)
    );


    openExperience(
        currentExperience.id
    );

}


/* =========================================================
   COMPLETAR EXPERIENCIA
========================================================= */

function toggleComplete() {

    if (!currentExperience) {

        return;

    }


    const id =
        currentExperience.id;


    const index =
        completedExperiences.indexOf(
            id
        );


    if (index === -1) {

        completedExperiences.push(
            id
        );

    } else {

        completedExperiences.splice(
            index,
            1
        );

    }


    localStorage.setItem(
        "temple30_completed",
        JSON.stringify(
            completedExperiences
        )
    );


    openExperience(
        id
    );


    renderCalendar();

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


        const dayActivities =
            getActivitiesForDate(
                dateKey
            );


        if (
            dayActivities.length > 0
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


            dayActivities.forEach(
                experience => {

                    const journey =
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
                        journey.emoji;


                    emoji.title =
                        `${journey.name} · Día ${experience.day}`;


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
   ACTIVIDADES DEL CALENDARIO
========================================================= */

function getActivitiesForDate(
    dateKey
) {

    const result = [];


    /*
       Para la prueba usamos algunas experiencias
       distribuidas en septiembre.

       Más adelante esto se sustituirá por el
       historial real de experiencias completadas.
    */

    const demoDates = {

        "2026-09-03": "conocerme-1",
        "2026-09-05": "conectar-1",
        "2026-09-09": "elegir-1",
        "2026-09-14": "conocerme-2",
        "2026-09-16": "limites-2",
        "2026-09-18": "conectar-2",
        "2026-09-25": "elegir-2"

    };


    if (
        demoDates[dateKey]
    ) {

        const experience =
            experiences.find(
                item =>
                    item.id ===
                    demoDates[dateKey]
            );


        if (experience) {

            result.push(
                experience
            );

        }

    }


    return result;

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
        getActivitiesForDate(
            dateKey
        );


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


            const completed =
                completedExperiences.includes(
                    activity.id
                );


            html += `

                <button
                    type="button"
                    class="day-detail-item"
                    onclick="openExperience('${activity.id}')"
                    style="text-align:left; width:100%; border:none; cursor:pointer;"
                >

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

                    <div class="detail-check">
                        ${completed ? "✓" : "→"}
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

    closeExperience();

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
