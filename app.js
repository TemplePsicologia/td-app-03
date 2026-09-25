/* =========================================================
   TEMPLE · 30 DÍAS
   APP PRINCIPAL
========================================================= */


/* =========================================================
   TOMOS
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
       🌱 CONOCERME
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
       🤍 CONECTAR
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
       🪴 PONER LÍMITES
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
       🧭 ELEGIR
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
       🍃 SOLTAR
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

let calendarDate =
    new Date(2026, 8, 1);

let currentExperience = null;

let completedExperiences = [];

let ratings = [];


/* =========================================================
   CARGAR DATOS GUARDADOS
========================================================= */

try {

    completedExperiences =
        JSON.parse(
            localStorage.getItem(
                "temple30_completed"
            ) || "[]"
        );

} catch (error) {

    completedExperiences = [];

}


try {

    ratings =
        JSON.parse(
            localStorage.getItem(
                "temple30_ratings"
            ) || "{}"
        );

} catch (error) {

    ratings = {};

}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderCalendar();

        setupRatingButtons();

        hideExperienceView();

    }
);


/* =========================================================
   BUSCAR EXPERIENCIA
========================================================= */

function getExperience(
    id
) {

    return experiences.find(
        function (experience) {

            return experience.id === id;

        }
    );

}


/* =========================================================
   ABRIR UN TOMO
========================================================= */

function openJourney(
    journey
) {

    const experience =
        experiences.find(
            function (item) {

                return item.journey === journey;

            }
        );


    if (!experience) {

        return;

    }


    openExperience(
        experience.id
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


    const randomIndex =
        Math.floor(
            Math.random() *
            experiences.length
        );


    const randomExperience =
        experiences[randomIndex];


    openExperience(
        randomExperience.id
    );

}


/* =========================================================
   ABRIR EXPERIENCIA
========================================================= */

function openExperience(
    id
) {

    const experience =
        getExperience(id);


    if (!experience) {

        console.error(
            "No se encontró la experiencia:",
            id
        );

        return;

    }


    const dashboard =
        document.getElementById(
            "dashboard-view"
        );


    const experienceView =
        document.getElementById(
            "experience-view"
        );


    if (
        !dashboard ||
        !experienceView
    ) {

        console.error(
            "No se encontró dashboard-view o experience-view."
        );

        return;

    }


    currentExperience =
        experience;


    const journey =
        journeys[
            experience.journey
        ];


    /* =====================================================
       IDENTIDAD DEL TOMO
    ===================================================== */

    const emoji =
        document.getElementById(
            "experience-emoji"
        );

    const journeyName =
        document.getElementById(
            "experience-journey"
        );


    emoji.textContent =
        journey.emoji;


    journeyName.textContent =
        journey.name.toUpperCase();


    journeyName.style.color =
        journey.color;


    /* =====================================================
       DÍA
    ===================================================== */

    document.getElementById(
        "experience-day"
    ).textContent =
        `Día ${experience.day} de 30`;


    /* =====================================================
       TÍTULO
    ===================================================== */

    document.getElementById(
        "experience-title"
    ).textContent =
        experience.title;


    /* =====================================================
       DURACIÓN
    ===================================================== */

    document.getElementById(
        "experience-duration"
    ).textContent =
        experience.duration;


    /* =====================================================
       MOMENTO
    ===================================================== */

    document.getElementById(
        "experience-moment"
    ).textContent =
        experience.place;


    /* =====================================================
       DESCRIPCIÓN
    ===================================================== */

    document.getElementById(
        "experience-description-text"
    ).textContent =
        experience.description;


    /* =====================================================
       PASOS
    ===================================================== */

    const stepsContainer =
        document.getElementById(
            "experience-steps"
        );


    stepsContainer.innerHTML = "";


    experience.steps.forEach(
        function (step, index) {

            const stepElement =
                document.createElement(
                    "article"
                );


            stepElement.className =
                "experience-step";


            stepElement.innerHTML = `

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

            `;


            stepsContainer.appendChild(
                stepElement
            );

        }
    );


    /* =====================================================
       PREGUNTA FINAL
    ===================================================== */

    document.getElementById(
        "experience-question"
    ).textContent =
        experience.question;


    /* =====================================================
       VALORACIÓN
    ===================================================== */

    updateRatingStars();


    /* =====================================================
       ESTADO COMPLETADA
    ===================================================== */

    updateCompleteButton();


    /* =====================================================
       MOSTRAR EXPERIENCIA
    ===================================================== */

    dashboard.style.display =
        "none";


    experienceView.style.display =
        "block";


    experienceView.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "experience-open"
    );


    window.scrollTo(
        0,
        0
    );

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


    if (
        !dashboard ||
        !experienceView
    ) {

        return;

    }


    experienceView.style.display =
        "none";


    experienceView.setAttribute(
        "aria-hidden",
        "true"
    );


    dashboard.style.display =
        "block";


    document.body.classList.remove(
        "experience-open"
    );


    currentExperience =
        null;


    window.scrollTo(
        0,
        0
    );

}


/* =========================================================
   OCULTAR EXPERIENCIA AL INICIAR
========================================================= */

function hideExperienceView() {

    const experienceView =
        document.getElementById(
            "experience-view"
        );


    if (!experienceView) {

        return;

    }


    experienceView.style.display =
        "none";


    experienceView.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   CONFIGURAR ESTRELLAS
========================================================= */

function setupRatingButtons() {

    const stars =
        document.querySelectorAll(
            "#rating-stars button"
        );


    stars.forEach(
        function (star) {

            star.addEventListener(
                "click",
                function () {

                    const rating =
                        Number(
                            star.dataset.rating
                        );


                    rateExperience(
                        rating
                    );

                }
            );

        }
    );

}


/* =========================================================
   VALORAR EXPERIENCIA
========================================================= */

function rateExperience(
    rating
) {

    if (
        !currentExperience
    ) {

        return;

    }


    ratings[
        currentExperience.id
    ] = rating;


    localStorage.setItem(
        "temple30_ratings",
        JSON.stringify(
            ratings
        )
    );


    updateRatingStars();


    const message =
        document.getElementById(
            "rating-message"
        );


    if (message) {

        message.textContent =
            `Has valorado esta experiencia con ${rating} de 5.`;

    }

}


/* =========================================================
   ACTUALIZAR ESTRELLAS
========================================================= */

function updateRatingStars() {

    if (
        !currentExperience
    ) {

        return;

    }


    const currentRating =
        ratings[
            currentExperience.id
        ] || 0;


    const stars =
        document.querySelectorAll(
            "#rating-stars button"
        );


    stars.forEach(
        function (star) {

            const value =
                Number(
                    star.dataset.rating
                );


            if (
                value <= currentRating
            ) {

                star.textContent =
                    "★";

                star.classList.add(
                    "active"
                );

            } else {

                star.textContent =
                    "☆";

                star.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   COMPLETAR EXPERIENCIA
========================================================= */

function toggleComplete() {

    if (
        !currentExperience
    ) {

        return;

    }


    const id =
        currentExperience.id;


    const index =
        completedExperiences.indexOf(
            id
        );


    if (
        index === -1
    ) {

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


    updateCompleteButton();


    renderCalendar();

}


/* =========================================================
   ACTUALIZAR BOTÓN COMPLETAR
========================================================= */

function updateCompleteButton() {

    if (
        !currentExperience
    ) {

        return;

    }


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


    if (
        !button ||
        !icon ||
        !text
    ) {

        return;

    }


    const completed =
        completedExperiences.includes(
            currentExperience.id
        );


    if (completed) {

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


    if (
        !daysContainer ||
        !monthElement ||
        !yearElement
    ) {

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


    /* =====================================================
       ESPACIOS ANTES DEL PRIMER DÍA
    ===================================================== */

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


    /* =====================================================
       DÍAS
    ===================================================== */

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
            getActivitiesForDate(
                dateKey
            );


        if (
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
                function (activity) {

                    const journey =
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
                        journey.emoji;


                    emojis.appendChild(
                        emoji
                    );

                }
            );


            dayElement.appendChild(
                emojis
            );

        }


        /*
           25 de septiembre se mantiene
           como día de prueba actual.
        */

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
            function () {

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
   EXPERIENCIAS DEL CALENDARIO
========================================================= */

function getActivitiesForDate(
    dateKey
) {

    /*
       Datos de prueba para poder comprobar
       visualmente el calendario y abrir experiencias.

       Luego estos datos serán reemplazados por
       el historial real del usuario.
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


    const activities = [];


    const demoExperienceId =
        demoDates[dateKey];


    if (
        demoExperienceId
    ) {

        const experience =
            getExperience(
                demoExperienceId
            );


        if (experience) {

            activities.push(
                experience
            );

        }

    }


    /*
       Si una experiencia fue completada
       y coincide con una fecha real,
       también podrá aparecer aquí
       cuando conectemos el historial.
    */

    return activities;

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
        String(
            day
        ).padStart(
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


    if (!detail) {

        return;

    }


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
        function (activity) {

            const journey =
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
                >

                    <div class="detail-emoji">
                        ${journey.emoji}
                    </div>

                    <div class="detail-info">

                        <span class="detail-journey">
                            ${journey.name}
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


    const detail =
        document.getElementById(
            "day-detail"
        );


    if (detail) {

        detail.innerHTML = `

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

        return;

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
   VOLVER AL INICIO
========================================================= */

function goHome() {

    const experienceView =
        document.getElementById(
            "experience-view"
        );


    if (
        experienceView &&
        experienceView.style.display !== "none"
    ) {

        closeExperience();

        return;

    }


    window.scrollTo(
        0,
        0
    );

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
        window.templeMessageTimer
    );


    window.templeMessageTimer =
        setTimeout(
            function () {

                messageElement.classList.remove(
                    "show"
                );

            },
            2500
        );

}
