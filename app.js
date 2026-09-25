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
        color: "#759C7B",
        description:
            "Experiencias para volver la mirada hacia ti y descubrirte desde la acción."
    },

    conectar: {
        name: "Conectar",
        emoji: "🤍",
        color: "#A785B0",
        description:
            "Experiencias para crear momentos diferentes y volver a encontrarse."
    },

    limites: {
        name: "Poner límites",
        emoji: "🪴",
        color: "#B58A73",
        description:
            "Experiencias para practicar nuevas formas de expresar lo que necesitas."
    },

    elegir: {
        name: "Elegir",
        emoji: "🧭",
        color: "#708EAE",
        description:
            "Experiencias para darte espacio para decidir desde lo que quieres."
    },

    soltar: {
        name: "Soltar",
        emoji: "🍃",
        color: "#819580",
        description:
            "Experiencias para dejar ir y hacer espacio para algo nuevo."
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

let calendarDate = new Date(2026, 8, 1);

let currentExperience = null;

let currentJourney = null;

let completedExperiences = [];

let ratings = {};


/* =========================================================
   CARGAR DATOS GUARDADOS
========================================================= */

try {

    completedExperiences =
        JSON.parse(
            localStorage.getItem("temple30_completed") || "[]"
        );

} catch (error) {

    completedExperiences = [];

}


try {

    ratings =
        JSON.parse(
            localStorage.getItem("temple30_ratings") || "{}"
        );

} catch (error) {

    ratings = {};

}


/* =========================================================
   ESTILOS PARA LA VISTA DE TOMO
   Se generan desde JS para que funcione sin modificar
   todavía el style.css.
========================================================= */

function injectJourneyStyles() {

    if (
        document.getElementById(
            "temple-journey-dynamic-styles"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "temple-journey-dynamic-styles";


    style.textContent = `

        .journey-view {
            min-height: 100vh;
            background: #F7F7F4;
            padding: 0 20px 60px;
        }

        .journey-view-inner {
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
        }

        .journey-view-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 22px 0 34px;
        }

        .journey-view-back {
            border: 0;
            background: transparent;
            padding: 8px 0;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #71808B;
            font: 500 13px/1 "Inter", sans-serif;
            cursor: pointer;
        }

        .journey-view-back:hover {
            color: #293A49;
        }

        .journey-view-brand {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #293A49;
            font: 600 13px/1 "Inter", sans-serif;
        }

        .journey-view-hero {
            text-align: center;
            padding: 18px 0 30px;
        }

        .journey-view-emoji {
            width: 66px;
            height: 66px;
            margin: 0 auto 18px;
            border-radius: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--journey-soft, #E8EEE8);
            font-size: 29px;
        }

        .journey-view-label {
            margin: 0 0 7px;
            color: var(--journey-color, #759C7B);
            font: 600 10px/1.2 "Inter", sans-serif;
            letter-spacing: .14em;
            text-transform: uppercase;
        }

        .journey-view-title {
            margin: 0;
            color: #293A49;
            font: 700 clamp(27px, 6vw, 38px)/1.1 "Inter", sans-serif;
            letter-spacing: -.04em;
        }

        .journey-view-description {
            max-width: 510px;
            margin: 13px auto 0;
            color: #71808B;
            font: 400 14px/1.65 "Inter", sans-serif;
        }

        .journey-progress-card {
            margin: 8px 0 30px;
            padding: 21px;
            border-radius: 22px;
            background: #FFFFFF;
            border: 1px solid rgba(41,58,73,.07);
            box-shadow: 0 8px 28px rgba(41,58,73,.045);
        }

        .journey-progress-top {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 12px;
        }

        .journey-progress-label {
            color: #71808B;
            font: 600 10px/1.2 "Inter", sans-serif;
            letter-spacing: .11em;
            text-transform: uppercase;
        }

        .journey-progress-count {
            color: #293A49;
            font: 600 13px/1.2 "Inter", sans-serif;
        }

        .journey-progress-count strong {
            font-size: 20px;
        }

        .journey-progress-track {
            height: 7px;
            border-radius: 99px;
            overflow: hidden;
            background: #EDF0EC;
        }

        .journey-progress-fill {
            height: 100%;
            width: 0;
            border-radius: inherit;
            background: var(--journey-color, #759C7B);
            transition: width .35s ease;
        }

        .journey-progress-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            color: #8A969E;
            font: 400 10px/1.3 "Inter", sans-serif;
        }

        .journey-continue {
            width: 100%;
            min-height: 51px;
            margin-top: 17px;
            border: 0;
            border-radius: 15px;
            background: var(--journey-color, #759C7B);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            cursor: pointer;
            font: 600 13px/1 "Inter", sans-serif;
            transition: transform .15s ease, opacity .15s ease;
        }

        .journey-continue:hover {
            transform: translateY(-1px);
        }

        .journey-continue:active {
            transform: translateY(0);
        }

        .journey-days-heading {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 14px;
        }

        .journey-days-heading h2 {
            margin: 0;
            color: #293A49;
            font: 600 17px/1.25 "Inter", sans-serif;
            letter-spacing: -.02em;
        }

        .journey-days-heading p {
            margin: 4px 0 0;
            color: #8A969E;
            font: 400 11px/1.4 "Inter", sans-serif;
        }

        .journey-days-legend {
            color: #8A969E;
            font: 400 10px/1.3 "Inter", sans-serif;
            white-space: nowrap;
        }

        .journey-days-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 9px;
        }

        .journey-day {
            min-height: 69px;
            padding: 9px 7px;
            border: 1px solid #E7EAE6;
            border-radius: 15px;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            cursor: pointer;
            color: #293A49;
            transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
        }

        .journey-day:hover:not(.locked) {
            transform: translateY(-1px);
            border-color: var(--journey-color, #759C7B);
            box-shadow: 0 6px 18px rgba(41,58,73,.06);
        }

        .journey-day-number {
            font: 600 13px/1 "Inter", sans-serif;
        }

        .journey-day-status {
            min-height: 12px;
            color: #8A969E;
            font: 400 9px/1.2 "Inter", sans-serif;
        }

        .journey-day.available {
            border-color: color-mix(
                in srgb,
                var(--journey-color, #759C7B) 25%,
                #FFFFFF
            );
        }

        .journey-day.completed {
            background: var(--journey-soft, #EEF3ED);
            border-color: transparent;
        }

        .journey-day.completed .journey-day-status {
            color: var(--journey-color, #759C7B);
            font-weight: 600;
        }

        .journey-day.current {
            box-shadow: inset 0 0 0 1.5px var(--journey-color, #759C7B);
        }

        .journey-day.locked {
            background: #F2F3F1;
            color: #A5ADB2;
            cursor: default;
        }

        .journey-day.locked .journey-day-status {
            color: #B0B7BB;
        }

        .journey-available-note {
            margin: 17px 0 0;
            padding: 13px 15px;
            border-radius: 14px;
            background: #EFF2EE;
            color: #71808B;
            font: 400 11px/1.55 "Inter", sans-serif;
        }

        .journey-available-note strong {
            color: #52636D;
            font-weight: 600;
        }

        .journey-footer-note {
            margin: 38px 0 0;
            padding-top: 24px;
            border-top: 1px solid #E4E7E3;
            text-align: center;
            color: #8A969E;
            font: 400 11px/1.6 "Inter", sans-serif;
        }

        @media (max-width: 480px) {

            .journey-view {
                padding-left: 16px;
                padding-right: 16px;
            }

            .journey-view-topbar {
                padding-top: 18px;
                padding-bottom: 24px;
            }

            .journey-view-hero {
                padding-top: 10px;
            }

            .journey-progress-card {
                padding: 18px;
                border-radius: 19px;
            }

            .journey-days-grid {
                grid-template-columns: repeat(5, 1fr);
                gap: 7px;
            }

            .journey-day {
                min-height: 62px;
                border-radius: 13px;
            }

            .journey-days-heading {
                display: block;
            }

            .journey-days-legend {
                display: block;
                margin-top: 5px;
            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   CREAR VISTA DE TOMO
========================================================= */

function createJourneyView() {

    if (
        document.getElementById(
            "journey-view"
        )
    ) {
        return;
    }


    const app =
        document.querySelector(".app");


    if (!app) {
        return;
    }


    const view =
        document.createElement("div");


    view.id =
        "journey-view";


    view.className =
        "journey-view";


    view.style.display =
        "none";


    view.setAttribute(
        "aria-hidden",
        "true"
    );


    view.innerHTML = `

        <div class="journey-view-inner">

            <header class="journey-view-topbar">

                <button
                    type="button"
                    class="journey-view-back"
                    id="journey-view-back"
                >
                    <span>←</span>
                    <span>Volver</span>
                </button>

                <div class="journey-view-brand">
                    <span class="temple-symbol"></span>
                    <span>Temple</span>
                </div>

            </header>


            <section class="journey-view-hero">

                <div
                    class="journey-view-emoji"
                    id="journey-view-emoji"
                >
                    🌱
                </div>

                <p
                    class="journey-view-label"
                    id="journey-view-label"
                >
                    TU RECORRIDO
                </p>

                <h1
                    class="journey-view-title"
                    id="journey-view-title"
                >
                    Conocerme
                </h1>

                <p
                    class="journey-view-description"
                    id="journey-view-description"
                ></p>

            </section>


            <section class="journey-progress-card">

                <div class="journey-progress-top">

                    <div class="journey-progress-label">
                        TU PROGRESO
                    </div>

                    <div
                        class="journey-progress-count"
                        id="journey-progress-count"
                    >
                        <strong>0</strong> de 30
                    </div>

                </div>


                <div class="journey-progress-track">

                    <div
                        class="journey-progress-fill"
                        id="journey-progress-fill"
                    ></div>

                </div>


                <div class="journey-progress-footer">

                    <span id="journey-progress-message">
                        Comienza cuando quieras.
                    </span>

                    <span id="journey-progress-percent">
                        0%
                    </span>

                </div>


                <button
                    type="button"
                    class="journey-continue"
                    id="journey-continue"
                >
                    <span id="journey-continue-text">
                        Comenzar recorrido
                    </span>
                    <span>→</span>
                </button>

            </section>


            <section class="journey-days-section">

                <div class="journey-days-heading">

                    <div>

                        <h2>
                            Tus 30 días
                        </h2>

                        <p>
                            Puedes elegir el día que quieras.
                        </p>

                    </div>

                    <span class="journey-days-legend">
                        ✓ completado
                    </span>

                </div>


                <div
                    class="journey-days-grid"
                    id="journey-days-grid"
                ></div>


                <div
                    class="journey-available-note"
                    id="journey-available-note"
                ></div>

            </section>


            <p class="journey-footer-note">
                No necesitas avanzar en orden. Puedes elegir
                una experiencia según el momento en el que estés.
            </p>

        </div>

    `;


    app.appendChild(view);


    document
        .getElementById("journey-view-back")
        .addEventListener(
            "click",
            closeJourney
        );


    document
        .getElementById("journey-continue")
        .addEventListener(
            "click",
            continueJourney
        );

}


/* =========================================================
   ABRIR TOMO
========================================================= */

function openJourney(journeyKey) {

    const journey =
        journeys[journeyKey];


    if (!journey) {
        return;
    }


    const availableExperiences =
        experiences
            .filter(
                function (experience) {
                    return experience.journey === journeyKey;
                }
            )
            .sort(
                function (a, b) {
                    return a.day - b.day;
                }
            );


    if (
        availableExperiences.length === 0
    ) {
        return;
    }


    currentJourney =
        journeyKey;


    createJourneyView();


    const dashboard =
        document.getElementById(
            "dashboard-view"
        );


    const journeyView =
        document.getElementById(
            "journey-view"
        );


    const experienceView =
        document.getElementById(
            "experience-view"
        );


    if (
        !dashboard ||
        !journeyView
    ) {
        return;
    }


    const emoji =
        document.getElementById(
            "journey-view-emoji"
        );


    const label =
        document.getElementById(
            "journey-view-label"
        );


    const title =
        document.getElementById(
            "journey-view-title"
        );


    const description =
        document.getElementById(
            "journey-view-description"
        );


    if (emoji) {
        emoji.textContent =
            journey.emoji;
    }


    if (label) {

        label.textContent =
            "RECORRIDO · 30 DÍAS";

        label.style.color =
            journey.color;

    }


    if (title) {

        title.textContent =
            journey.name;

        title.style.color =
            "#293A49";

    }


    if (description) {

        description.textContent =
            journey.description;

    }


    dashboard.style.display =
        "none";


    if (experienceView) {

        experienceView.style.display =
            "none";

        experienceView.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    journeyView.style.display =
        "block";


    journeyView.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "journey-open"
    );


    renderJourneyProgress(
        journeyKey
    );


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* =========================================================
   CERRAR TOMO
========================================================= */

function closeJourney() {

    const dashboard =
        document.getElementById(
            "dashboard-view"
        );


    const journeyView =
        document.getElementById(
            "journey-view"
        );


    if (!dashboard || !journeyView) {
        return;
    }


    journeyView.style.display =
        "none";


    journeyView.setAttribute(
        "aria-hidden",
        "true"
    );


    dashboard.style.display =
        "block";


    document.body.classList.remove(
        "journey-open"
    );


    currentJourney = null;


    renderCalendar();


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* =========================================================
   RENDERIZAR PROGRESO DEL TOMO
========================================================= */

function renderJourneyProgress(journeyKey) {

    const journey =
        journeys[journeyKey];


    if (!journey) {
        return;
    }


    const journeyExperiences =
        experiences
            .filter(
                function (experience) {
                    return experience.journey === journeyKey;
                }
            )
            .sort(
                function (a, b) {
                    return a.day - b.day;
                }
            );


    const completedCount =
        journeyExperiences.filter(
            function (experience) {

                return completedExperiences.includes(
                    experience.id
                );

            }
        ).length;


    /*
       El progreso siempre se calcula sobre 30.
       Así, cuando carguemos las 30 experiencias,
       no será necesario modificar esta función.
    */

    const totalDays =
        30;


    const percentage =
        Math.round(
            (completedCount / totalDays) * 100
        );


    const countElement =
        document.getElementById(
            "journey-progress-count"
        );


    const fillElement =
        document.getElementById(
            "journey-progress-fill"
        );


    const percentElement =
        document.getElementById(
            "journey-progress-percent"
        );


    const messageElement =
        document.getElementById(
            "journey-progress-message"
        );


    const continueText =
        document.getElementById(
            "journey-continue-text"
        );


    const continueButton =
        document.getElementById(
            "journey-continue"
        );


    if (countElement) {

        countElement.innerHTML =
            `<strong>${completedCount}</strong> de ${totalDays}`;

    }


    if (fillElement) {

        fillElement.style.width =
            `${percentage}%`;

        fillElement.style.background =
            journey.color;

    }


    if (percentElement) {

        percentElement.textContent =
            `${percentage}%`;

    }


    if (messageElement) {

        if (completedCount === 0) {

            messageElement.textContent =
                "Comienza cuando quieras.";

        } else if (completedCount === 30) {

            messageElement.textContent =
                "Has completado este recorrido.";

        } else {

            messageElement.textContent =
                `${completedCount} ${completedCount === 1 ? "día realizado" : "días realizados"}.`;

        }

    }


    /*
       Buscar la primera experiencia disponible
       que todavía no esté completada.
    */

    const nextExperience =
        journeyExperiences.find(
            function (experience) {

                return !completedExperiences.includes(
                    experience.id
                );

            }
        );


    if (continueButton) {

        continueButton.style.background =
            journey.color;

    }


    if (continueText) {

        if (!nextExperience) {

            continueText.textContent =
                "Volver a recorrer";

        } else if (completedCount === 0) {

            continueText.textContent =
                "Comenzar recorrido";

        } else {

            continueText.textContent =
                `Continuar · Día ${nextExperience.day}`;

        }

    }


    renderJourneyDays(
        journeyKey,
        journeyExperiences
    );


    const availableNote =
        document.getElementById(
            "journey-available-note"
        );


    if (availableNote) {

        const availableDays =
            journeyExperiences.length;


        const remaining =
            totalDays - availableDays;


        if (remaining > 0) {

            availableNote.innerHTML = `
                <strong>${availableDays} de 30 días disponibles.</strong>
                Los demás aparecerán aquí a medida que se incorporen
                nuevas experiencias.
            `;

        } else {

            availableNote.innerHTML = `
                <strong>Los 30 días están disponibles.</strong>
                Puedes recorrerlos en el orden que prefieras.
            `;

        }

    }

}


/* =========================================================
   RENDERIZAR LOS 30 DÍAS DEL TOMO
========================================================= */

function renderJourneyDays(
    journeyKey,
    journeyExperiences
) {

    const grid =
        document.getElementById(
            "journey-days-grid"
        );


    if (!grid) {
        return;
    }


    const journey =
        journeys[journeyKey];


    grid.innerHTML = "";


    for (
        let day = 1;
        day <= 30;
        day++
    ) {

        const experience =
            journeyExperiences.find(
                function (item) {
                    return item.day === day;
                }
            );


        const button =
            document.createElement("button");


        button.type =
            "button";


        button.className =
            "journey-day";


        button.style.setProperty(
            "--journey-color",
            journey.color
        );


        /*
           Fondo suave del color del tomo.
        */

        button.style.setProperty(
            "--journey-soft",
            hexToSoftColor(
                journey.color
            )
        );


        const number =
            document.createElement("span");


        number.className =
            "journey-day-number";


        number.textContent =
            `Día ${day}`;


        const status =
            document.createElement("span");


        status.className =
            "journey-day-status";


        if (!experience) {

            /*
               Días que todavía no tienen experiencia
               cargada.
            */

            button.classList.add(
                "locked"
            );


            button.disabled =
                true;


            status.textContent =
                "Próximamente";

        } else {

            const completed =
                completedExperiences.includes(
                    experience.id
                );


            button.classList.add(
                "available"
            );


            if (completed) {

                button.classList.add(
                    "completed"
                );


                status.textContent =
                    "✓ Completado";

            } else {

                status.textContent =
                    "Disponible";

            }


            button.addEventListener(
                "click",
                function () {

                    openExperience(
                        experience.id
                    );

                }
            );

        }


        button.appendChild(
            number
        );


        button.appendChild(
            status
        );


        grid.appendChild(
            button
        );

    }

}


/* =========================================================
   CONTINUAR TOMO
========================================================= */

function continueJourney() {

    if (!currentJourney) {
        return;
    }


    const journeyExperiences =
        experiences
            .filter(
                function (experience) {

                    return (
                        experience.journey ===
                        currentJourney
                    );

                }
            )
            .sort(
                function (a, b) {

                    return a.day - b.day;

                }
            );


    if (
        journeyExperiences.length === 0
    ) {
        return;
    }


    let nextExperience =
        journeyExperiences.find(
            function (experience) {

                return !completedExperiences.includes(
                    experience.id
                );

            }
        );


    /*
       Si todas las experiencias actualmente
       disponibles están completadas,
       volvemos a abrir la primera.
    */

    if (!nextExperience) {

        nextExperience =
            journeyExperiences[0];

    }


    openExperience(
        nextExperience.id
    );

}


/* =========================================================
   COLOR SUAVE
========================================================= */

function hexToSoftColor(hex) {

    const clean =
        hex.replace(
            "#",
            ""
        );


    if (clean.length !== 6) {
        return "#EEF2EE";
    }


    const r =
        parseInt(
            clean.substring(0, 2),
            16
        );


    const g =
        parseInt(
            clean.substring(2, 4),
            16
        );


    const b =
        parseInt(
            clean.substring(4, 6),
            16
        );


    const mix =
        function (value) {

            return Math.round(
                value +
                (255 - value) * 0.88
            );

        };


    return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;

}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        injectJourneyStyles();

        createJourneyView();

        renderCalendar();

        setupRatingButtons();

        hideExperienceView();

        hideJourneyView();

    }
);


/* =========================================================
   BUSCAR EXPERIENCIA
========================================================= */

function getExperience(id) {

    return experiences.find(
        function (experience) {

            return experience.id === id;

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

function openExperience(id) {

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


    const journeyView =
        document.getElementById(
            "journey-view"
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
            "No se encontró una de las vistas necesarias."
        );

        return;

    }


    currentExperience =
        experience;


    const journey =
        journeys[
            experience.journey
        ];


    /*
       Si venimos desde un tomo,
       mantenemos el tomo actual.
    */

    if (
        !currentJourney ||
        currentJourney !== experience.journey
    ) {

        currentJourney =
            experience.journey;

    }


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


    if (emoji) {

        emoji.textContent =
            journey.emoji;

    }


    if (journeyName) {

        journeyName.textContent =
            journey.name.toUpperCase();

        journeyName.style.color =
            journey.color;

    }


    /* =====================================================
       DÍA
    ===================================================== */

    const dayElement =
        document.getElementById(
            "experience-day"
        );


    if (dayElement) {

        dayElement.textContent =
            `Día ${experience.day} de 30`;

    }


    /* =====================================================
       TÍTULO
    ===================================================== */

    const titleElement =
        document.getElementById(
            "experience-title"
        );


    if (titleElement) {

        titleElement.textContent =
            experience.title;

    }


    /* =====================================================
       DURACIÓN
    ===================================================== */

    const durationElement =
        document.getElementById(
            "experience-duration"
        );


    if (durationElement) {

        durationElement.textContent =
            experience.duration;

    }


    /* =====================================================
       MOMENTO
    ===================================================== */

    const momentElement =
        document.getElementById(
            "experience-moment"
        );


    if (momentElement) {

        momentElement.textContent =
            experience.place;

    }


    /* =====================================================
       DESCRIPCIÓN
    ===================================================== */

    const descriptionElement =
        document.getElementById(
            "experience-description-text"
        );


    if (descriptionElement) {

        descriptionElement.textContent =
            experience.description;

    }


    /* =====================================================
       PASOS
    ===================================================== */

    const stepsContainer =
        document.getElementById(
            "experience-steps"
        );


    if (stepsContainer) {

        stepsContainer.innerHTML =
            "";


        experience.steps.forEach(
            function (step) {

                const stepElement =
                    document.createElement(
                        "article"
                    );


                stepElement.className =
                    "experience-step";


                stepElement.innerHTML = `

                    <div class="step-number">
                        ${step.emoji}
                    </div>

                    <div class="step-body">

                        <h3>
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

    }


    /* =====================================================
       PREGUNTA FINAL
    ===================================================== */

    const questionElement =
        document.getElementById(
            "experience-question"
        );


    if (questionElement) {

        questionElement.textContent =
            experience.question;

    }


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


    if (journeyView) {

        journeyView.style.display =
            "none";

        journeyView.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    experienceView.style.display =
        "block";


    experienceView.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.remove(
        "journey-open"
    );


    document.body.classList.add(
        "experience-open"
    );


    /*
       Transición.
    */

    experienceView.classList.remove(
        "experience-enter"
    );


    void experienceView.offsetWidth;


    experienceView.classList.add(
        "experience-enter"
    );


    window.scrollTo({
        top: 0,
        behavior: "auto"
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


    const journeyView =
        document.getElementById(
            "journey-view"
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


    experienceView.classList.remove(
        "experience-enter"
    );


    document.body.classList.remove(
        "experience-open"
    );


    currentExperience =
        null;


    /*
       Si la experiencia fue abierta desde
       un tomo, volvemos al tomo.
    */

    if (
        currentJourney &&
        journeyView
    ) {

        dashboard.style.display =
            "none";


        journeyView.style.display =
            "block";


        journeyView.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "journey-open"
        );


        renderJourneyProgress(
            currentJourney
        );

    } else {

        dashboard.style.display =
            "block";

    }


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* =========================================================
   OCULTAR EXPERIENCIA
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
   OCULTAR VISTA DE TOMO
========================================================= */

function hideJourneyView() {

    const journeyView =
        document.getElementById(
            "journey-view"
        );


    if (!journeyView) {
        return;
    }


    journeyView.style.display =
        "none";


    journeyView.setAttribute(
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

function rateExperience(rating) {

    if (!currentExperience) {
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

    if (!currentExperience) {
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


    updateCompleteButton();


    renderCalendar();


    /*
       Si estamos trabajando dentro de un tomo,
       actualizamos también su progreso.
    */

    if (currentJourney) {

        renderJourneyProgress(
            currentJourney
        );

    }

}


/* =========================================================
   ACTUALIZAR BOTÓN COMPLETAR
========================================================= */

function updateCompleteButton() {

    if (!currentExperience) {
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
       Por ahora mantenemos las fechas de prueba.
       Más adelante podemos hacer que estas fechas
       se creen automáticamente cuando el usuario
       complete una experiencia.
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
        demoDates[
            dateKey
        ];


    if (demoExperienceId) {

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
        calendarDate.getMonth() +
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

function showFeature(type) {

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


    const journeyView =
        document.getElementById(
            "journey-view"
        );


    /*
       Si estamos dentro de una experiencia,
       primero volvemos al tomo.
    */

    if (
        experienceView &&
        experienceView.style.display !== "none"
    ) {

        closeExperience();

        return;

    }


    /*
       Si estamos dentro de un tomo,
       volvemos al dashboard.
    */

    if (
        journeyView &&
        journeyView.style.display !== "none"
    ) {

        closeJourney();

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
