/* =========================================================
   TEMPLE · 30 DÍAS
   App principal
   ========================================================= */


/* =========================================================
   DATOS DE LOS TOMOS
   ========================================================= */

const journeys = {
    conocerme: {
        emoji: "🌱",
        name: "30 Días para Conocerme",
        shortName: "Conocerme",
        color: "#759C7B"
    },

    conectar: {
        emoji: "🤍",
        name: "30 Días para Conectar",
        shortName: "Conectar",
        color: "#A785B0"
    },

    limites: {
        emoji: "🪴",
        name: "30 Días para Poner Límites",
        shortName: "Poner límites",
        color: "#B58A73"
    },

    elegir: {
        emoji: "🧭",
        name: "30 Días para Elegir",
        shortName: "Elegir",
        color: "#708EAE"
    },

    soltar: {
        emoji: "🍃",
        name: "30 Días para Soltar",
        shortName: "Soltar",
        color: "#819580"
    }
};


/* =========================================================
   LAS 10 EXPERIENCIAS REALES
   ========================================================= */

const experiences = [

    /* -----------------------------------------------------
       CONOCERME
       ----------------------------------------------------- */

    {
        id: "conocerme-1",
        journey: "conocerme",
        day: 1,
        title: "UNA CITA CONMIGO",
        duration: "30–60 min",
        moment: "En un lugar que te resulte agradable y en un momento que puedas reservar para ti",
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
        title: "ELEGIR POR MI",
        duration: "15–30 min",
        moment: "En un momento cotidiano en el que tengas varias opciones para elegir.",
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

   {
    id: "conocerme-3",
    journey: "conocerme",
    day: 3,
    title: "PROBAR ALGO NUEVO",
    duration: "20–60 min",
    moment: "En un momento disponible y en un lugar donde puedas probar algo diferente de forma segura.",
    description:
        "Hoy vas a salir de una elección habitual para descubrir qué ocurre cuando haces algo que normalmente no harías.",

    steps: [
        {
            emoji: "🔎",
            title: "Busca",
            text: "Elige algo nuevo que puedas probar hoy: una actividad, un lugar, una comida, una ruta, una forma diferente de hacer algo o cualquier experiencia que te genere curiosidad."
        },
        {
            emoji: "🎯",
            title: "Elige",
            text: "No necesitas que sea algo grande ni extraordinario. Busca algo que realmente tengas ganas de experimentar."
        },
        {
            emoji: "🚶",
            title: "Pruébalo",
            text: "Hazlo sin exigirte que te guste. Permítete simplemente descubrir cómo es."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en qué te sorprendió, qué disfrutaste, qué no te gustó o qué volverías a probar."
        }
    ],

    question:
        "¿Qué descubriste sobre tus gustos o intereses al probar algo diferente?"
},

   {
    id: "conocerme-4",
    journey: "conocerme",
    day: 4,
    title: "LO QUE SÍ ME GUSTA",
    duration: "15–30 min",
    moment: "Durante un momento cotidiano en el que puedas elegir libremente qué hacer.",
    description:
        "Hoy vas a prestar atención a esas cosas que disfrutas y que quizá haces sin detenerte a reconocer que realmente te gustan.",

    steps: [
        {
            emoji: "👀",
            title: "Detecta",
            text: "A lo largo del día, presta atención a momentos que te resulten agradables: una canción, un lugar, una conversación, una comida, una actividad, una sensación o cualquier otro detalle."
        },
        {
            emoji: "💭",
            title: "Detente",
            text: "Cuando algo te guste, quédate unos segundos con esa experiencia en lugar de pasar inmediatamente a lo siguiente."
        },
        {
            emoji: "🧭",
            title: "Explora",
            text: "Pregúntate qué es exactamente lo que disfrutas de ese momento."
        },
        {
            emoji: "✨",
            title: "Elige",
            text: "Si puedes, date permiso para repetir o prolongar una de esas experiencias."
        }
    ],

    question:
        "¿Qué descubriste que disfrutas más de lo que sueles reconocer?"
},

{
    id: "conocerme-5",
    journey: "conocerme",
    day: 5,
    title: "CAMBIAR DE RUTA",
    duration: "15–30 min",
    moment: "Durante un recorrido o rutina que realices habitualmente.",
    description:
        "Hoy vas a modificar una pequeña parte de tu rutina para observar qué ocurre cuando haces algo de una manera diferente.",

    steps: [
        {
            emoji: "🧭",
            title: "Cambia",
            text: "Elige una parte de tu recorrido o rutina que puedas modificar sin complicarte el día."
        },
        {
            emoji: "🚶",
            title: "Prueba",
            text: "Toma otra ruta, cambia el orden de una actividad, utiliza otro espacio o haz de otra manera algo que normalmente realizas igual."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Presta atención a lo que aparece cuando cambias lo habitual: curiosidad, incomodidad, interés, resistencia, disfrute u otra sensación."
        },
        {
            emoji: "💭",
            title: "Descubre",
            text: "Fíjate en qué parte del cambio te resultó agradable y cuál preferirías mantener como antes."
        }
    ],

    question:
        "¿Qué aprendiste sobre tu forma de relacionarte con lo conocido y lo diferente?"
},

{
    id: "conocerme-6",
    journey: "conocerme",
    day: 6,
    title: "DECIR QUE NO",
    duration: "10–20 min",
    moment: "En una situación cotidiana en la que puedas rechazar algo sin poner en riesgo tu bienestar ni el de otra persona.",
    description:
        "Hoy vas a observar qué ocurre cuando reconoces que algo no quieres y respondes de acuerdo con esa preferencia.",

    steps: [
        {
            emoji: "👀",
            title: "Detecta",
            text: "Durante el día, identifica una situación sencilla en la que realmente no quieras hacer, aceptar o elegir algo."
        },
        {
            emoji: "💭",
            title: "Reconoce",
            text: "Antes de responder, observa qué quieres tú, sin decidir todavía en función de lo que la otra persona pueda esperar."
        },
        {
            emoji: "🗣️",
            title: "Expresa",
            text: "Si es apropiado, responde con un “no” claro y respetuoso, sin necesidad de justificarte más de lo necesario."
        },
        {
            emoji: "🧭",
            title: "Observa",
            text: "Después, presta atención a cómo te sientes con tu decisión y qué pensamientos aparecen."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que ocurre dentro de ti cuando reconoces y expresas lo que no quieres?"
},

{
    id: "conocerme-7",
    journey: "conocerme",
    day: 7,
    title: "CUANDO NADIE ME MIRA",
    duration: "15–30 min",
    moment: "En un momento del día en el que puedas estar a solas y sin tener que responder a nadie.",
    description:
        "Hoy vas a observar cómo eres cuando no estás pendiente de cómo te ven los demás.",

    steps: [
        {
            emoji: "🚪",
            title: "Quédate contigo",
            text: "Busca un momento en el que nadie necesite nada de ti y puedas hacer lo que quieras."
        },
        {
            emoji: "🎭",
            title: "Suelta el papel",
            text: "Durante un rato, no intentes actuar como esperas que los demás te vean."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en qué haces, cómo te mueves, qué eliges o qué te interesa cuando no estás tratando de cumplir ninguna expectativa."
        },
        {
            emoji: "💭",
            title: "Descubre",
            text: "Presta atención a alguna característica tuya que aparezca con más libertad en esos momentos."
        }
    ],

    question:
        "¿Qué parte de ti aparece cuando no estás pendiente de cómo te ven los demás?"
},

{
    id: "conocerme-8",
    journey: "conocerme",
    day: 8,
    title: "UNA PARTE DE MÍ QUE CASI NO MUESTRO",
    duration: "20–40 min",
    moment: "En un momento tranquilo y en un contexto en el que te sientas cómodo/a.",
    description:
        "Hoy vas a acercarte a una parte de ti que existe, pero que no siempre tiene espacio para mostrarse.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconoce",
            text: "Piensa en una característica tuya que sueles mantener más reservada: puede ser una afición, una forma de pensar, un sentido del humor, una sensibilidad o algo que te importa."
        },
        {
            emoji: "💭",
            title: "Acércate",
            text: "Busca una manera sencilla de darle espacio durante el día."
        },
        {
            emoji: "💬",
            title: "Compártela",
            text: "Si te resulta natural y seguro, permite que alguien conozca un poco más de esa parte de ti."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en cómo se siente mostrar algo que normalmente mantienes más privado."
        }
    ],

    question:
        "¿Qué notaste al darle un poco más de espacio a una parte de ti que sueles mostrar poco?"
},

{
    id: "conocerme-9",
    journey: "conocerme",
    day: 9,
    title: "ANTES Y AHORA",
    duration: "20–40 min",
    moment: "En un momento tranquilo en el que puedas recordar experiencias de otras etapas de tu vida.",
    description:
        "Hoy vas a mirar hacia atrás para reconocer aspectos de ti que han cambiado con el tiempo.",

    steps: [
        {
            emoji: "🕰️",
            title: "Recuerda",
            text: "Piensa en cómo eras hace algunos años: qué te gustaba, qué te importaba, cómo te relacionabas o qué cosas hacías de otra manera."
        },
        {
            emoji: "🔎",
            title: "Compara",
            text: "Observa una diferencia concreta entre aquella versión de ti y la persona que eres ahora."
        },
        {
            emoji: "💭",
            title: "Explora",
            text: "Pregúntate qué pudo haber influido en ese cambio: experiencias, personas, decisiones, aprendizajes o simplemente el paso del tiempo."
        },
        {
            emoji: "🌱",
            title: "Reconoce",
            text: "También identifica algo que, a pesar de los cambios, sigue formando parte de ti."
        }
    ],

    question:
        "¿Qué descubriste sobre la persona que eras y la persona que eres ahora?"
},

{
    id: "conocerme-10",
    journey: "conocerme",
    day: 10,
    title: "LO QUE ES IMPORTANTE PARA MÍ",
    duration: "20–40 min",
    moment: "En un momento tranquilo, preferiblemente sin interrupciones.",
    description:
        "Hoy vas a observar qué cosas tienen un valor especial para ti a través de una situación real, no solo de lo que crees que debería importarte.",

    steps: [
        {
            emoji: "🔎",
            title: "Observa",
            text: "Piensa en una decisión, actividad o momento reciente que haya sido importante para ti."
        },
        {
            emoji: "💭",
            title: "Pregúntate",
            text: "¿Qué había detrás de esa importancia? ¿Qué estabas intentando cuidar, conseguir, mantener o expresar?"
        },
        {
            emoji: "🧭",
            title: "Conecta",
            text: "Busca qué valor personal aparece detrás de esa experiencia: libertad, seguridad, conexión, aprendizaje, tranquilidad, creatividad, justicia u otro."
        },
        {
            emoji: "👀",
            title: "Llévalo al presente",
            text: "Durante el día, observa una oportunidad sencilla de actuar de acuerdo con ese valor."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que realmente es importante para ti?"
},

{
    id: "conocerme-11",
    journey: "conocerme",
    day: 11,
    title: "DARME TIEMPO",
    duration: "20–40 min",
    moment: "En un momento del día que normalmente ocupas con tareas, pantallas u otras obligaciones.",
    description:
        "Hoy vas a experimentar qué ocurre cuando dejas un espacio de tiempo sin llenarlo inmediatamente con algo productivo.",

    steps: [
        {
            emoji: "⏸️",
            title: "Haz una pausa",
            text: "Reserva un momento para ti y decide no utilizarlo para adelantar tareas pendientes."
        },
        {
            emoji: "📵",
            title: "Desconecta",
            text: "Durante ese tiempo, deja a un lado el teléfono y otras distracciones."
        },
        {
            emoji: "🌿",
            title: "Permanece",
            text: "Puedes descansar, caminar, mirar por la ventana o simplemente estar. No necesitas convertir este momento en otra actividad."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en qué aparece cuando no tienes que estar haciendo algo: tranquilidad, inquietud, aburrimiento, disfrute u otra experiencia."
        }
    ],

    question:
        "¿Qué descubriste sobre tu relación con los momentos que no tienen una tarea asignada?"
},

{
    id: "conocerme-12",
    journey: "conocerme",
    day: 12,
    title: "CUANDO CAMBIO DE PLANES",
    duration: "15–30 min",
    moment: "Durante una situación cotidiana en la que un plan pueda cambiar de manera inesperada.",
    description:
        "Hoy vas a observar cómo reaccionas cuando algo no ocurre como lo habías imaginado.",

    steps: [
        {
            emoji: "🔄",
            title: "Déjalo cambiar",
            text: "Cuando un plan cotidiano cambie, evita intentar recuperar inmediatamente la situación original."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en tu primera reacción: molestia, preocupación, indiferencia, curiosidad, alivio u otra."
        },
        {
            emoji: "💭",
            title: "Explora",
            text: "Observa qué era lo que esperabas que ocurriera y qué significaba para ti."
        },
        {
            emoji: "🧭",
            title: "Adáptate",
            text: "Cuando sea posible, decide cómo continuar con lo que tienes disponible ahora."
        }
    ],

    question:
        "¿Qué descubriste sobre ti cuando algo no salió como lo habías previsto?"
},

{
    id: "conocerme-13",
    journey: "conocerme",
    day: 13,
    title: "MI ENERGÍA A LO LARGO DEL DÍA",
    duration: "10–15 min",
    moment: "A lo largo de un día cotidiano.",
    description:
        "Hoy vas a observar cómo cambia tu energía durante el día y qué actividades o momentos parecen relacionarse con esos cambios.",

    steps: [
        {
            emoji: "🌅",
            title: "Observa",
            text: "Al comenzar el día, presta atención a cómo se siente tu nivel de energía."
        },
        {
            emoji: "🔎",
            title: "Compara",
            text: "Vuelve a observarlo en diferentes momentos: después de una tarea, una conversación, una comida, un descanso o un desplazamiento."
        },
        {
            emoji: "🧭",
            title: "Detecta",
            text: "Fíjate en qué momentos sientes más disposición y cuáles parecen agotarte."
        },
        {
            emoji: "💭",
            title: "Descubre",
            text: "No busques una explicación definitiva. Solo reconoce qué patrones empiezas a notar."
        }
    ],

    question:
        "¿Qué descubriste sobre los momentos en los que tu energía cambia?"
},

{
    id: "conocerme-14",
    journey: "conocerme",
    day: 14,
    title: "CUANDO ME SIENTO MÁS YO",
    duration: "30–60 min",
    moment: "En un lugar, actividad o situación donde suelas sentirte cómodo/a siendo tú mismo/a.",
    description:
        "Hoy vas a acercarte a una experiencia en la que puedas observar qué condiciones hacen que te sientas más conectado/a contigo.",

    steps: [
        {
            emoji: "🌿",
            title: "Elige",
            text: "Piensa en un momento, lugar o actividad en el que puedas expresarte con naturalidad."
        },
        {
            emoji: "🚶",
            title: "Acércate",
            text: "Si es posible, busca hoy una experiencia similar."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en cómo actúas, qué expresas y qué partes de ti aparecen con mayor libertad."
        },
        {
            emoji: "💭",
            title: "Descubre",
            text: "Presta atención a qué condiciones hacen posible esa sensación de estar más tú."
        }
    ],

    question:
        "¿Qué condiciones parecen ayudarte a sentirte más tú?"
},

{
    id: "conocerme-15",
    journey: "conocerme",
    day: 15,
    title: "RECIBIR SIN DEVOLVER",
    duration: "10–20 min",
    moment: "En una interacción cotidiana en la que alguien te ofrezca algo de manera genuina.",
    description:
        "Hoy vas a experimentar qué ocurre cuando recibes algo sin sentir que tienes que compensarlo inmediatamente.",

    steps: [
        {
            emoji: "🎁",
            title: "Recibe",
            text: "Si alguien te ofrece ayuda, un cumplido, un detalle, tiempo o atención, permite que llegue a ti."
        },
        {
            emoji: "⏸️",
            title: "Haz una pausa",
            text: "Antes de responder automáticamente, observa qué aparece dentro de ti."
        },
        {
            emoji: "💬",
            title: "Agradece",
            text: "Puedes simplemente reconocer el gesto y decir gracias."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate si aparece comodidad, incomodidad, necesidad de devolver el gesto, vergüenza, alegría u otra reacción."
        }
    ],

    question:
        "¿Qué descubriste sobre tu forma de recibir de los demás?"
},

{
    id: "conocerme-16",
    journey: "conocerme",
    day: 16,
    title: "HACER ALGO QUE HE POSPUESTO",
    duration: "20–40 min",
    moment: "En un momento del día en el que puedas dedicar tiempo a algo que llevas postergando.",
    description:
        "Hoy vas a acercarte a algo que llevas tiempo dejando para después y observar qué ocurre cuando finalmente das el primer paso.",

    steps: [
        {
            emoji: "🔎",
            title: "Elige",
            text: "Piensa en una tarea o actividad pendiente que puedas comenzar sin necesidad de terminarla hoy."
        },
        {
            emoji: "⏳",
            title: "Empieza",
            text: "Dedica unos minutos a dar el primer paso."
        },
        {
            emoji: "🚶",
            title: "Continúa",
            text: "Avanza hasta donde puedas sin exigirte completar todo."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en qué aparecía antes de comenzar y qué ocurre una vez que ya estás en movimiento."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que ocurre cuando dejas de esperar el momento perfecto para empezar?"
},

{
    id: "conocerme-17",
    journey: "conocerme",
    day: 17,
    title: "UNA CONVERSACIÓN DIFERENTE",
    duration: "20–40 min",
    moment: "En una conversación con alguien con quien tengas suficiente confianza.",
    description:
        "Hoy vas a salir de las conversaciones habituales para descubrir qué aparece cuando compartes algo más personal o significativo.",

    steps: [
        {
            emoji: "💬",
            title: "Pregunta",
            text: "Haz una pregunta que normalmente no harías y que realmente tengas interés en conocer."
        },
        {
            emoji: "👂",
            title: "Escucha",
            text: "Presta atención a la respuesta sin preparar inmediatamente la tuya."
        },
        {
            emoji: "💭",
            title: "Comparte",
            text: "Cuando sea natural, comparte también algo propio relacionado con la conversación."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en cómo te sientes al escuchar, compartir y mostrar una parte diferente de ti."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al tener una conversación fuera de lo habitual?"
},

{
    id: "conocerme-18",
    journey: "conocerme",
    day: 18,
    title: "CUANDO ALGO ME SALE MAL",
    duration: "15–30 min",
    moment: "Después de una situación cotidiana en la que algo no haya salido como esperabas.",
    description:
        "Hoy vas a observar cómo te tratas cuando cometes un error o algo no resulta como querías.",

    steps: [
        {
            emoji: "🛑",
            title: "Detente",
            text: "Cuando ocurra un error o algo salga mal, evita corregirte o juzgarte inmediatamente."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Presta atención a las primeras palabras que aparecen en tu mente."
        },
        {
            emoji: "💭",
            title: "Escucha",
            text: "Fíjate en el tono con el que te hablas y en lo que esperas de ti en ese momento."
        },
        {
            emoji: "🌿",
            title: "Prueba otra respuesta",
            text: "Después, háblate de una manera que describa lo ocurrido sin convertir un error puntual en una definición de quién eres."
        }
    ],

    question:
        "¿Qué descubriste sobre la forma en que te tratas cuando algo no sale bien?"
},

{
    id: "conocerme-19",
    journey: "conocerme",
    day: 19,
    title: "DEJAR QUE ME SORPRENDAN",
    duration: "20–40 min",
    moment: "En una actividad o situación cotidiana en la que puedas permitir cierta espontaneidad.",
    description:
        "Hoy vas a dejar un pequeño espacio para no decidirlo todo de antemano y observar qué ocurre cuando algo diferente tiene la oportunidad de aparecer.",

    steps: [
        {
            emoji: "🎲",
            title: "Suelta una decisión",
            text: "Elige una parte sencilla de tu día que puedas dejar abierta: qué ruta tomar, qué lugar visitar, qué actividad hacer o qué pedir."
        },
        {
            emoji: "🧭",
            title: "Permite",
            text: "En lugar de planificar cada detalle, deja que una opción surja en el momento."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en qué sientes al tener menos control sobre lo que ocurrirá."
        },
        {
            emoji: "✨",
            title: "Experimenta",
            text: "Permite que la experiencia se desarrolle sin intentar que sea exactamente como la imaginabas."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al dejar un espacio para la espontaneidad?"
},

{
    id: "conocerme-20",
    journey: "conocerme",
    day: 20,
    title: "LO QUE QUIERO CONSERVAR DE MÍ",
    duration: "20–40 min",
    moment: "En un momento tranquilo en el que puedas estar a solas.",
    description:
        "Hoy vas a mirar hacia lo que ya forma parte de ti y reconocer aquello que valoras y quieres seguir conservando.",

    steps: [
        {
            emoji: "🕰️",
            title: "Recuerda",
            text: "Piensa en una característica, forma de relacionarte, interés, costumbre o manera de vivir que haya sido importante para ti."
        },
        {
            emoji: "👀",
            title: "Reconoce",
            text: "Busca una experiencia reciente en la que esa parte de ti haya estado presente."
        },
        {
            emoji: "💭",
            title: "Observa",
            text: "Fíjate qué valor tiene para ti y qué aporta a tu manera de vivir."
        },
        {
            emoji: "🌱",
            title: "Elige cuidarlo",
            text: "Durante los próximos días, busca una oportunidad sencilla para darle espacio nuevamente."
        }
    ],

    question:
        "¿Qué parte de ti reconociste que quieres seguir conservando?"
},

{
    id: "conocerme-21",
    journey: "conocerme",
    day: 21,
    title: "MI ESPACIO, MI HUELLA",
    duration: "20–40 min",
    moment: "En un espacio personal que utilices con frecuencia.",
    description:
        "Hoy vas a observar cuánto de ti está presente en los espacios que habitas y qué ocurre cuando haces un pequeño cambio para que se sientan más tuyos.",

    steps: [
        {
            emoji: "👀",
            title: "Observa",
            text: "Mira con atención un espacio que forme parte de tu vida cotidiana. Fíjate en los objetos, la distribución, los colores y aquello que has elegido tener cerca."
        },
        {
            emoji: "🔎",
            title: "Reconoce",
            text: "Identifica algo de ese espacio que sientas especialmente tuyo y algo que simplemente está allí por costumbre."
        },
        {
            emoji: "🪴",
            title: "Cambia",
            text: "Haz un pequeño ajuste que represente mejor cómo quieres sentirte o qué te gusta actualmente."
        },
        {
            emoji: "🌿",
            title: "Permanece",
            text: "Después de hacerlo, permanece unos momentos en el espacio y observa cómo se siente diferente."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al observar el espacio que habitas?"
},

{
    id: "conocerme-22",
    journey: "conocerme",
    day: 22,
    title: "HACERLO SIN CONTARLO",
    duration: "20–40 min",
    moment: "En un momento en el que puedas disfrutar de una actividad sin necesidad de compartirla.",
    description:
        "Hoy vas a hacer algo que disfrutas sin fotografiarlo, publicarlo ni contarle a alguien que lo estás haciendo.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige",
            text: "Haz algo que realmente disfrutes y que normalmente podrías compartir con otras personas."
        },
        {
            emoji: "📵",
            title: "Desconecta",
            text: "Durante la actividad, evita convertirla en una experiencia para mostrar o documentar."
        },
        {
            emoji: "🌿",
            title: "Disfruta",
            text: "Permanece en lo que estás haciendo y permite que la experiencia sea únicamente para ti."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en qué ocurre cuando nadie más necesita saber que estás disfrutando de ese momento."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que disfrutas cuando no necesitas compartirlo?"
},

{
    id: "conocerme-23",
    journey: "conocerme",
    day: 23,
    title: "CUANDO CAMBIO DE OPINIÓN",
    duration: "15–30 min",
    moment: "En un momento tranquilo en el que puedas pensar en una opinión o decisión que haya cambiado con el tiempo.",
    description:
        "Hoy vas a explorar qué ocurre cuando reconoces que tu manera de pensar puede cambiar sin que eso borre quién eres.",

    steps: [
        {
            emoji: "🕰️",
            title: "Recuerda",
            text: "Piensa en algo sobre lo que antes tenías una opinión diferente."
        },
        {
            emoji: "🔎",
            title: "Compara",
            text: "Observa qué pensabas entonces y qué piensas ahora."
        },
        {
            emoji: "💭",
            title: "Explora",
            text: "Fíjate qué experiencias, información o cambios pudieron influir en esa transformación."
        },
        {
            emoji: "🌱",
            title: "Reconoce",
            text: "Permite que ambas versiones formen parte de tu historia sin tener que decidir cuál era la “correcta”."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al reconocer que tu manera de pensar también puede cambiar?"
},

{
    id: "conocerme-24",
    journey: "conocerme",
    day: 24,
    title: "UN MOMENTO DE SILENCIO",
    duration: "10–20 min",
    moment: "En un lugar tranquilo donde puedas permanecer sin música, videos ni otras formas de entretenimiento.",
    description:
        "Hoy vas a experimentar qué ocurre cuando dejas un espacio sin estímulos externos y permaneces contigo durante unos minutos.",

    steps: [
        {
            emoji: "🔇",
            title: "Detén",
            text: "Apaga durante un momento la música, televisión, videos o cualquier otro estímulo que estés utilizando."
        },
        {
            emoji: "🪑",
            title: "Quédate",
            text: "Permanece sentado/a o en una posición cómoda sin buscar inmediatamente otra actividad."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Presta atención a los sonidos del entorno, tus pensamientos, sensaciones y ganas de hacer algo."
        },
        {
            emoji: "🌿",
            title: "Permite",
            text: "Deja que el momento transcurra sin intentar llenarlo ni convertirlo en una tarea."
        }
    ],

    question:
        "¿Qué descubriste sobre ti cuando dejaste un espacio sin estímulos?"
},

{
    id: "conocerme-25",
    journey: "conocerme",
    day: 25,
    title: "RECONOCER ALGO QUE HICE BIEN",
    duration: "10–20 min",
    moment: "En un momento tranquilo al finalizar una actividad o al terminar el día.",
    description:
        "Hoy vas a detenerte en algo que hiciste bien, no para compararte ni para buscar aprobación, sino para reconocerlo desde tu propia mirada.",

    steps: [
        {
            emoji: "🔎",
            title: "Recuerda",
            text: "Piensa en algo concreto que hayas hecho bien recientemente."
        },
        {
            emoji: "🧭",
            title: "Detalla",
            text: "Observa qué hiciste tú para que ese resultado fuera posible."
        },
        {
            emoji: "🌿",
            title: "Reconoce",
            text: "Permítete valorar tu propio esfuerzo, decisión, habilidad o constancia."
        },
        {
            emoji: "💬",
            title: "Exprésalo",
            text: "Dilo en voz alta o para ti mismo/a con una frase sencilla que reconozca lo que hiciste."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de reconocer tus propios logros?"
},

{
    id: "conocerme-26",
    journey: "conocerme",
    day: 26,
    title: "VOLVER A ALGO QUE ME REPRESENTA",
    duration: "20–40 min",
    moment: "En un momento en el que puedas reencontrarte con algo que haya sido significativo para ti.",
    description:
        "Hoy vas a volver a una experiencia, objeto, lugar, canción, actividad o costumbre que haya formado parte de ti en otro momento.",

    steps: [
        {
            emoji: "🕰️",
            title: "Elige",
            text: "Busca algo que haya tenido un significado especial para ti en otra etapa de tu vida."
        },
        {
            emoji: "🚶",
            title: "Acércate",
            text: "Vuelve a escucharlo, utilizarlo, visitarlo o realizarlo, según corresponda."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate qué permanece igual en ti y qué se siente diferente ahora."
        },
        {
            emoji: "🌱",
            title: "Reconoce",
            text: "Permite que aparezcan tanto la continuidad como los cambios."
        }
    ],

    question:
        "¿Qué parte de ti reconociste al volver a algo que había sido importante para ti?"
},

{
    id: "conocerme-27",
    journey: "conocerme",
    day: 27,
    title: "MI MANERA DE HACER LAS COSAS",
    duration: "15–30 min",
    moment: "Durante una actividad cotidiana que conozcas bien.",
    description:
        "Hoy vas a prestar atención a tu manera particular de hacer algo que forma parte de tu rutina.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige",
            text: "Selecciona una actividad cotidiana que puedas realizar de diferentes maneras."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en el orden que eliges, el ritmo que utilizas, los detalles que priorizas y aquello que prefieres hacer a tu manera."
        },
        {
            emoji: "🔎",
            title: "Reconoce",
            text: "Observa qué parte de esa forma de hacer las cosas responde realmente a tus preferencias."
        },
        {
            emoji: "✨",
            title: "Hazlo a tu manera",
            text: "Durante esta ocasión, permite que la actividad se ajuste a tu propia forma de hacerla, siempre que sea posible."
        }
    ],

    question:
        "¿Qué descubriste sobre tus preferencias al observar tu manera de hacer las cosas?"
},

{
    id: "conocerme-28",
    journey: "conocerme",
    day: 28,
    title: "LO QUE ME REPRESENTA HOY",
    duration: "20–40 min",
    moment: "En un momento tranquilo en el que puedas explorar algo que forme parte de tu identidad actual.",
    description:
        "Hoy vas a elegir algo que represente una parte de quién eres actualmente y observar por qué tiene sentido para ti.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige",
            text: "Puede ser una canción, objeto, prenda, lugar, fotografía, libro, actividad o cualquier elemento que sientas cercano a ti."
        },
        {
            emoji: "👀",
            title: "Obsérvalo",
            text: "Permanece unos momentos con aquello que elegiste y fíjate qué relación tiene contigo."
        },
        {
            emoji: "💭",
            title: "Explora",
            text: "Pregúntate qué parte de ti representa: una etapa, una forma de pensar, un interés, un valor, una experiencia u otra característica."
        },
        {
            emoji: "🌿",
            title: "Reconoce",
            text: "Observa si esa parte de ti sigue teniendo el mismo significado o si ha cambiado con el tiempo."
        }
    ],

    question:
        "¿Qué descubriste sobre la persona que eres actualmente a través de aquello que elegiste?"
},

{
    id: "conocerme-29",
    journey: "conocerme",
    day: 29,
    title: "DEJARME CONOCER",
    duration: "20–40 min",
    moment: "En una conversación con alguien con quien tengas confianza.",
    description:
        "Hoy vas a compartir algo sobre ti que normalmente no aparece en las conversaciones cotidianas.",

    steps: [
        {
            emoji: "🔎",
            title: "Elige",
            text: "Piensa en algo que forme parte de ti y que esa persona probablemente no conozca: una preferencia, recuerdo, interés, opinión o experiencia."
        },
        {
            emoji: "💬",
            title: "Compártelo",
            text: "Busca un momento natural para contarlo sin preparar una explicación perfecta."
        },
        {
            emoji: "👂",
            title: "Escucha",
            text: "Observa cómo responde la otra persona sin intentar controlar qué pensará de ti."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate en cómo te sientes al permitir que alguien conozca un poco más de ti."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al permitir que alguien conociera una parte que normalmente no compartes?"
},

{
    id: "conocerme-30",
    journey: "conocerme",
    day: 30,
    title: "UN MOMENTO MÁS MÍO",
    duration: "30–60 min",
    moment: "En un momento del día que puedas reservar para hacer algo elegido conscientemente por ti.",
    description:
        "Para cerrar estos 30 días, vas a crear un momento que reúna algo que has descubierto sobre ti y llevarlo a una experiencia concreta.",

    steps: [
        {
            emoji: "🧭",
            title: "Elige",
            text: "Piensa en algo que hayas descubierto sobre ti durante estos días y que quieras tener más presente."
        },
        {
            emoji: "🎯",
            title: "Llévalo a la práctica",
            text: "Elige una actividad o momento cotidiano en el que puedas expresarlo."
        },
        {
            emoji: "🌿",
            title: "Hazlo",
            text: "Vive ese momento sin intentar hacerlo perfecto. Simplemente permite que esa parte de ti tenga espacio."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Fíjate qué se siente diferente cuando actúas teniendo presente algo que reconoces como propio."
        }
    ],

    question:
        "¿Qué quieres seguir conociendo de ti después de estos 30 días?"
},

    /* -----------------------------------------------------
       CONECTAR
       ----------------------------------------------------- */

    {
        id: "conectar-1",
        journey: "conectar",
        day: 1,
        title: "VOLVER A MIRARNOS",
        duration: "10–15 min",
        moment: "En un momento tranquilo, cuando puedan estar juntos sin interrupciones.",
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
        title: "UNA CONVERSACIÓN SIN PANTALLAS",
        duration: "15–20 min",
        moment: "En casa o en un lugar tranquilo, durante un momento en el que puedan estar juntos sin interrupciones.",
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


    /* -----------------------------------------------------
       LÍMITES
       ----------------------------------------------------- */

    {
        id: "limites-1",
        journey: "limites",
        day: 1,
        title: "DECIR NO A ALGO PEQUEÑO",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que puedas rechazar algo sin poner en riesgo tu bienestar ni el de otra persona.",
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
                text: "Si la situación lo permite, responde con un ‘no’ claro y respetuoso. No necesitas dar una explicación extensa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después de responder, fíjate en qué ocurre en ti: qué sientes, qué piensas y qué ganas aparecen. Observa también si aparece la necesidad de cambiar tu respuesta."
            }
        ],

        question:
            "¿Qué descubriste al expresar un ‘no’ en una situación pequeña?"
    },

    {
        id: "limites-2",
        journey: "limites",
        day: 2,
        title: "ELEGIR SIN ADAPTARME",
        duration: "10–20 min",
        moment: "En un momento del día en el que otra persona pueda proponerte qué hacer.",
        description:
            "Hoy vas a prestar atención a tus propias preferencias antes de adaptarte automáticamente a lo que otra persona quiere.",

        steps: [
            {
                emoji: "🔎👀",
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


    /* -----------------------------------------------------
       ELEGIR
       ----------------------------------------------------- */

    {
        id: "elegir-1",
        journey: "elegir",
        day: 1,
        title: "ELEGIR SIN CONSULTAR",
        duration: "10–20 min",
        moment: "En un momento cotidiano en el que tengas que tomar una decisión sencilla.",
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
        title: "ELEGIR CUANDO AMBAS OPCIONES ME CONVIENEN",
        duration: "10–20 min",
        moment: "En un momento cotidiano en el que tengas que elegir entre dos opciones que te resulten igualmente aceptables.",
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


    /* -----------------------------------------------------
       SOLTAR
       ----------------------------------------------------- */

    {
        id: "soltar-1",
        journey: "soltar",
        day: 1,
        title: "DEJAR ALGO SIN TERMINAR",
        duration: "10–20 min",
        moment: "En casa, en el trabajo o en cualquier lugar donde estés realizando una actividad que puedas detener sin consecuencias.",
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
        title: "DEJAR DE REVISAR",
        duration: "10–20 min",
        moment: "En un momento del día en el que puedas dejar de comprobar algo que sueles revisar repetidamente.",
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
   ESTADO DE LA APLICACIÓN
   ========================================================= */

let calendarDate = new Date();
let currentExperience = null;
let currentJourney = null;
let returnView = "dashboard";

let completedExperiences = [];
let ratings = {};
let completionDates = {};
let feelings = {};
let favorites = [];


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

const STORAGE_COMPLETED = "temple30_completed";
const STORAGE_RATINGS = "temple30_ratings";
const STORAGE_DATES = "temple30_completion_dates";
const STORAGE_FEELINGS = "temple30_feelings";
const STORAGE_FAVORITES = "temple30_favorites";


function loadState() {
    try {

        const savedCompleted =
            localStorage.getItem(STORAGE_COMPLETED);

        const savedRatings =
            localStorage.getItem(STORAGE_RATINGS);

        const savedDates =
            localStorage.getItem(STORAGE_DATES);

        const savedFeelings =
            localStorage.getItem(STORAGE_FEELINGS);
       const savedFavorites =
          localStorage.getItem(STORAGE_FAVORITES);


        completedExperiences =
            savedCompleted
                ? JSON.parse(savedCompleted)
                : [];

        ratings =
            savedRatings
                ? JSON.parse(savedRatings)
                : {};

        completionDates =
            savedDates
                ? JSON.parse(savedDates)
                : {};

        feelings =
            savedFeelings
                ? JSON.parse(savedFeelings)
                : {};
       favorites =
          savedFavorites
          ? JSON.parse(savedFavorites)
          : [];


        if (!Array.isArray(completedExperiences)) {
            completedExperiences = [];
        }

        if (!ratings || typeof ratings !== "object") {
            ratings = {};
        }

        if (!completionDates || typeof completionDates !== "object") {
            completionDates = {};
        }

        if (!feelings || typeof feelings !== "object") {
            feelings = {};
        }
       if (!Array.isArray(favorites)) {
    favorites = [];
       }

    } catch (error) {

        console.warn(
            "No se pudo cargar el progreso:",
            error
        );

        completedExperiences = [];
        ratings = {};
        completionDates = {};
        feelings = {};
       favorites = [];
    }
}


function saveState() {

    localStorage.setItem(
        STORAGE_COMPLETED,
        JSON.stringify(completedExperiences)
    );

    localStorage.setItem(
        STORAGE_RATINGS,
        JSON.stringify(ratings)
    );

    localStorage.setItem(
        STORAGE_DATES,
        JSON.stringify(completionDates)
    );

    localStorage.setItem(
        STORAGE_FEELINGS,
        JSON.stringify(feelings)
    );
   localStorage.setItem(
    STORAGE_FAVORITES,
    JSON.stringify(favorites)
   );
}

/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadState();

    injectJourneyStyles();

    renderCalendar();

    setupRatingButtons();

    hideExperienceView();

});


/* =========================================================
   UTILIDADES
   ========================================================= */

function getExperience(id) {
    return experiences.find(
        experience => experience.id === id
    );
}


function getJourneyExperience(journey, day) {
    return experiences.find(
        experience =>
            experience.journey === journey &&
            experience.day === day
    );
}


function isCompleted(id) {
    return completedExperiences.includes(id);
}


function getTodayKey() {
    const today = new Date();

    return formatDateKey(today);
}


function formatDateKey(date) {
    const year = date.getFullYear();

    const month =
        String(date.getMonth() + 1).padStart(2, "0");

    const day =
        String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function getJourneyCompletedCount(journey) {
    return experiences.filter(
        experience =>
            experience.journey === journey &&
            isCompleted(experience.id)
    ).length;
}


/* =========================================================
   VISTA DE TOMO
   ========================================================= */

function openJourney(journey) {

    if (!journeys[journey]) {
        return;
    }

    currentJourney = journey;
    returnView = "journey";

    hideDashboard();

    createJourneyView();

    renderJourneyView(journey);

    showJourneyView();
}


function createJourneyView() {

    let view = document.getElementById("journey-view");

    if (view) {
        return;
    }

    view = document.createElement("div");

    view.id = "journey-view";

    view.setAttribute("aria-hidden", "true");

    document.querySelector(".app").appendChild(view);
}


function showJourneyView() {

    const view =
        document.getElementById("journey-view");

    if (!view) {
        return;
    }

    view.setAttribute("aria-hidden", "false");

    view.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function hideJourneyView() {

    const view =
        document.getElementById("journey-view");

    if (!view) {
        return;
    }

    view.setAttribute("aria-hidden", "true");

    view.style.display = "none";
}


function renderJourneyView(journey) {

    const view =
        document.getElementById("journey-view");

    if (!view || !journeys[journey]) {
        return;
    }

    const data = journeys[journey];

    const completedCount =
        getJourneyCompletedCount(journey);

    const progress =
        Math.round((completedCount / 30) * 100);

    const availableExperiences =
        experiences.filter(
            experience => experience.journey === journey
        );

    const nextExperience =
        availableExperiences.find(
            experience => !isCompleted(experience.id)
        );

    let daysHTML = "";

    for (let day = 1; day <= 30; day++) {

        const experience =
            getJourneyExperience(journey, day);

        if (experience) {

            const completed =
                isCompleted(experience.id);

            daysHTML += `
<button
    type="button"
    class="journey-day-card ${completed ? "is-completed" : ""}"
    onclick="openExperienceFromJourney('${experience.id}')"
    style="--journey-color:${data.color};"
>
    <div class="journey-day-number">
        Día ${day}
    </div>

    <div class="journey-day-emoji">
        ${data.emoji}
    </div>
                    <div class="journey-day-content">
                        <div class="journey-day-title">
                            ${experience.title}
                        </div>

                        <div class="journey-day-status">
                            ${
                                completed
                                    ? "✓ Completado"
                                    : "Disponible"
                            }
                        </div>
                    </div>

                    <div class="journey-day-arrow">
                        →
                    </div>
                </button>
            `;

        } else {

            daysHTML += `
                <div
                    class="journey-day-card journey-day-locked"
                    style="--journey-color:${data.color};"
                >
                    <div class="journey-day-number">
                        Día ${day}
                    </div>

                    <div class="journey-day-emoji">
                        ${data.emoji}
                    </div>

                    <div class="journey-day-content">
                        <div class="journey-day-title">
                            Próximamente
                        </div>

                        <div class="journey-day-status">
                            Esta experiencia todavía no está disponible
                        </div>
                    </div>

                    <div class="journey-day-lock">
                        •
                    </div>
                </div>
            `;
        }
    }


    const continueHTML = nextExperience
        ? `
            <button
                type="button"
                class="journey-continue-button"
                onclick="openExperienceFromJourney('${nextExperience.id}')"
                style="--journey-color:${data.color};"
            >
                <span>
                    Continuar recorrido
                </span>

                <strong>
                    Día ${nextExperience.day} →
                </strong>
            </button>
        `
        : `
            <div class="journey-finished-message">
                <strong>Has recorrido todas las experiencias disponibles.</strong>
                <span>Puedes volver a hacerlas cuando quieras.</span>
            </div>
        `;


    view.innerHTML = `
        <main class="journey-browser">

            <header class="journey-browser-header">

                <button
                    type="button"
                    class="journey-back-button"
                    onclick="closeJourneyView()"
                >
                    ←
                    <span>Volver</span>
                </button>

                <button
                    type="button"
                    class="journey-temple-button"
                    onclick="goHome()"
                >
                    Temple
                </button>

            </header>


            <section
                class="journey-browser-hero"
                style="--journey-color:${data.color};"
            >

                <div class="journey-browser-identity">

                    <div class="journey-browser-emoji">
                        ${data.emoji}
                    </div>

                    <div>

                        <div class="journey-browser-label">
                            RECORRIDO
                        </div>

                        <h1>
                            ${data.name}
                        </h1>

                    </div>

                </div>


                <p class="journey-browser-intro">
                    Treinta días para comenzar a explorar
                    esta parte de ti a través de pequeñas
                    experiencias.
                </p>


                <div class="journey-progress-card">

                    <div class="journey-progress-top">

                        <span>
                            Tu progreso
                        </span>

                        <strong>
                            ${completedCount} de 30
                        </strong>

                    </div>

                    <div class="journey-progress-track">

                        <div
                            class="journey-progress-fill"
                            style="
                                width:${progress}%;
                                background:${data.color};
                            "
                        ></div>

                    </div>

                    <div class="journey-progress-bottom">
                        ${completedCount === 0
                            ? "Aún no has comenzado este recorrido."
                            : completedCount === 1
                                ? "Has avanzado 1 día."
                                : `Has avanzado ${completedCount} días.`
                        }
                    </div>

                </div>

            </section>


            <section class="journey-days-section">

                <div class="journey-section-heading">

                    <div>

                        <span>
                            TU RECORRIDO
                        </span>

                        <h2>
                            Elige qué quieres hacer hoy
                        </h2>

                    </div>

                </div>


                ${continueHTML}


                <div class="journey-days-grid">
                    ${daysHTML}
                </div>

            </section>


            <section class="journey-note">

                <span>🌿</span>

            <p>
                No tienes que seguir un orden.
                Elige la experiencia que más te llame hoy y avanza a tu propio ritmo.
            </p>

            </section>


            <footer class="journey-browser-footer">
                Temple · 30 Días
            </footer>

        </main>
    `;

    showJourneyView();
}


function openExperienceFromJourney(id) {

    const experience = getExperience(id);

    if (!experience) {
        alert("No se encontró la experiencia: " + id);
        return;
    }

    currentExperience = experience;
    returnView = "journey";

    openExperience(id);
}


function closeJourneyView() {

    currentJourney = null;

    hideJourneyView();

    showDashboard();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   EXPERIENCIA
   ========================================================= */

function openExperience(id) {

    const experience = getExperience(id);

    if (!experience) {
        alert("No se encontró la experiencia: " + id);
        return;
    }

    currentExperience = experience;
      
   /* Cerrar panel de Guardadas / Realizadas */
    closeExperiencesPanel();

    /* =========================================
       DATOS DEL RECORRIDO
    ========================================= */

    const journey = journeys[experience.journey];

    if (!journey) {
        alert("No se encontró el recorrido: " + experience.journey);
        return;
    }


    /* =========================================
       IDENTIDAD
    ========================================= */

    const emojiElement =
        document.getElementById("experience-emoji");

    const journeyElement =
        document.getElementById("experience-journey");

    const dayElement =
        document.getElementById("experience-day");

    const titleElement =
        document.getElementById("experience-title");

    const durationElement =
        document.getElementById("experience-duration");

    const momentElement =
        document.getElementById("experience-moment");

    const descriptionElement =
        document.getElementById("experience-description-text");


    if (emojiElement) {
        emojiElement.textContent = journey.emoji;
    }

    if (journeyElement) {
        journeyElement.textContent =
            journey.shortName || journey.name;
    }

    if (dayElement) {
        dayElement.textContent =
            `Día ${experience.day} de 30`;
    }

    if (titleElement) {
        titleElement.textContent =
            experience.title;
    }

    if (durationElement) {
        durationElement.textContent =
            experience.duration;
    }

    if (momentElement) {
        momentElement.textContent =
            experience.moment;
    }

    if (descriptionElement) {
        descriptionElement.textContent =
            experience.description;
    }


    /* =========================================
       PASOS
    ========================================= */

    const stepsContainer =
        document.getElementById("experience-steps");

    if (stepsContainer) {

        const steps =
            Array.isArray(experience.steps)
                ? experience.steps
                : [];

        stepsContainer.innerHTML =
            steps.map((step, index) => `
                <div class="experience-step">

                    <div class="step-number">
                        ${index + 1}
                    </div>

                    <div class="step-content">

                        <div class="step-title">
                            <span>${step.emoji || ""}</span>
                            ${step.title || ""}
                        </div>

                        <p>
                            ${step.text || ""}
                        </p>

                    </div>

                </div>
            `).join("");
    }


    /* =========================================
       PREGUNTA FINAL
    ========================================= */

    const questionElement =
        document.getElementById("experience-question");

    if (questionElement) {
        questionElement.textContent =
            experience.question || "";
    }

      /* =========================================
       CÓMO SE SINTIÓ
    ========================================= */

    setupFeelingButtons();
    updateFeelingUI();


    /* =========================================
       VALORACIÓN
    ========================================= */

    setupRatingButtons();
    updateRatingUI();


    /* =========================================
       ESTADO COMPLETADO
    ========================================= */

    updateCompleteButton();

   /* =========================================
       FAVORITO
    ========================================= */
   
   updateFavoriteUI();

   /* =========================================
   NAVEGACIÓN ENTRE DÍAS
   ========================================= */
   
   updateDayNavigation();

    /* =========================================
       CAMBIAR DE VISTA
    ========================================= */

    hideDashboard();

    /* Quitar el foco antes de ocultar el recorrido */
    if (document.activeElement) {
        document.activeElement.blur();
    }

    hideJourneyView();


    const experienceView =
        document.getElementById("experience-view");

    if (!experienceView) {
        alert("No se encontró #experience-view");
        return;
    }


    experienceView.setAttribute(
        "aria-hidden",
        "false"
    );

    experienceView.classList.add(
        "experience-open"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* =========================================================
   CÓMO SE SINTIÓ
   ========================================================= */

function setupFeelingButtons() {

    const buttons =
        document.querySelectorAll(".feeling-option");

    buttons.forEach(button => {

        button.onclick = () => {

            if (!currentExperience) {
                return;
            }

            const feeling =
                button.dataset.feeling;

            if (!feeling) {
                return;
            }

            feelings[currentExperience.id] =
                feeling;

            saveState();

            updateFeelingUI();
        };
    });
}


function updateFeelingUI() {

    if (!currentExperience) {
        return;
    }

    const selectedFeeling =
        feelings[currentExperience.id];

    const buttons =
        document.querySelectorAll(".feeling-option");

    buttons.forEach(button => {

        const selected =
            button.dataset.feeling === selectedFeeling;

        button.classList.toggle(
            "is-selected",
            selected
        );

        button.setAttribute(
            "aria-pressed",
            selected ? "true" : "false"
        );
    });
}

/* =========================================================
   FAVORITOS
   ========================================================= */

function toggleFavorite() {

    if (!currentExperience) {
        return;
    }

    const id = currentExperience.id;

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

    } else {

        favorites.push(id);
    }

    saveState();
    updateFavoriteUI();
}


function updateFavoriteUI() {

    if (!currentExperience) {
        return;
    }

    const button =
        document.getElementById("favorite-button");

    if (!button) {
        return;
    }

    const isFavorite =
        favorites.includes(currentExperience.id);

    button.textContent =
        isFavorite ? "♥" : "♡";

    button.classList.toggle(
        "is-favorite",
        isFavorite
    );

    button.setAttribute(
        "aria-pressed",
        isFavorite ? "true" : "false"
    );

    button.setAttribute(
        "aria-label",
        isFavorite
            ? "Quitar de guardadas"
            : "Guardar experiencia"
    );

    button.title =
        isFavorite
            ? "Quitar de guardadas"
            : "Guardar experiencia";
}

/* =========================================================
   NAVEGACIÓN ENTRE DÍAS
   ========================================================= */

function openPreviousExperience() {

    if (!currentExperience) {
        return;
    }

    const previousDay =
        currentExperience.day - 1;

    if (previousDay < 1) {
        return;
    }

    const previousExperience =
        getJourneyExperience(
            currentExperience.journey,
            previousDay
        );

    if (!previousExperience) {
        return;
    }

    openExperience(
        previousExperience.id
    );
}


function openNextExperience() {

    if (!currentExperience) {
        return;
    }

    const nextDay =
        currentExperience.day + 1;

    if (nextDay > 30) {
        return;
    }

    const nextExperience =
        getJourneyExperience(
            currentExperience.journey,
            nextDay
        );

    if (!nextExperience) {
        return;
    }

    openExperience(
        nextExperience.id
    );
}

function updateDayNavigation() {

    if (!currentExperience) {
        return;
    }

    const previousButton =
        document.getElementById(
            "previous-day-button"
        );

    const nextButton =
        document.getElementById(
            "next-day-button"
        );


    const previousExperience =
        getJourneyExperience(
            currentExperience.journey,
            currentExperience.day - 1
        );

    const nextExperience =
        getJourneyExperience(
            currentExperience.journey,
            currentExperience.day + 1
        );


    if (previousButton) {

        previousButton.disabled =
            !previousExperience;
    }


    if (nextButton) {

        nextButton.disabled =
            !nextExperience;
    }
}

function closeExperience() {

    const experienceView =
        document.getElementById("experience-view");

    experienceView.setAttribute(
        "aria-hidden",
        "true"
    );

    experienceView.classList.remove(
        "experience-open"
    );


    if (
        returnView === "journey" &&
        currentJourney
    ) {

        renderJourneyView(currentJourney);

        hideDashboard();

        showJourneyView();

    } else {

        currentJourney = null;

        showDashboard();

        renderCalendar();
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function hideExperienceView() {

    const experienceView =
        document.getElementById("experience-view");

    if (!experienceView) {
        return;
    }

    experienceView.setAttribute(
        "aria-hidden",
        "true"
    );

    experienceView.classList.remove(
        "experience-open"
    );
}


/* =========================================================
   VALORACIÓN
   ========================================================= */

function setupRatingButtons() {

    const stars =
        document.querySelectorAll(
            "#rating-stars button"
        );

    stars.forEach(star => {

        star.onclick = () => {

            if (!currentExperience) {
                return;
            }

            const value =
                Number(star.dataset.rating);

            if (!value) {
                return;
            }

            ratings[currentExperience.id] =
                value;

            saveState();

            updateRatingUI();
        };
    });
}


function updateRatingUI() {

    if (!currentExperience) {
        return;
    }

    const currentRating =
        ratings[currentExperience.id] || 0;

    const stars =
        document.querySelectorAll(
            "#rating-stars button"
        );

    stars.forEach(star => {

        const value =
            Number(star.dataset.rating);

        const selected =
            value <= currentRating;

        /* Rellenar visualmente las estrellas */
        star.textContent =
            selected ? "★" : "☆";

        star.classList.toggle(
            "selected",
            selected
        );

        star.setAttribute(
            "aria-pressed",
            value === currentRating
                ? "true"
                : "false"
        );
    });


    const message =
        document.getElementById("rating-message");

    if (!message) {
        return;
    }


    if (currentRating === 0) {

        message.textContent =
            "Puedes valorar la experiencia cuando termines.";

    } else {

        const messages = {
            1: "Gracias por registrarlo.",
            2: "Gracias por registrar cómo fue.",
            3: "Gracias por compartir cómo fue.",
            4: "Parece que fue una experiencia significativa.",
            5: "Gracias por registrar tu experiencia."
        };

        message.textContent =
            messages[currentRating] ||
            "Gracias por registrar tu experiencia.";
    }
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
        completedExperiences.indexOf(id);


    if (index === -1) {

        completedExperiences.push(id);

        completionDates[id] =
            getTodayKey();

    } else {

        completedExperiences.splice(
            index,
            1
        );

        delete completionDates[id];
    }


    saveState();

    updateCompleteButton();

    renderCalendar();


    if (
        returnView === "journey" &&
        currentJourney
    ) {
        renderJourneyView(currentJourney);
    }
}


function updateCompleteButton() {

    if (!currentExperience) {
        return;
    }

    const button =
        document.getElementById("complete-button");

    const icon =
        document.getElementById("complete-icon");

    const text =
        document.getElementById("complete-text");

    if (!button) {
        return;
    }

    const completed =
        isCompleted(currentExperience.id);


    button.classList.toggle(
        "is-completed",
        completed
    );


    if (icon) {
        icon.textContent =
            completed ? "✓" : "○";
    }


    if (text) {
        text.textContent =
            completed
                ? "Experiencia realizada"
                : "Marcar como realizada";
    }


    button.setAttribute(
        "aria-pressed",
        completed ? "true" : "false"
    );
}


/* =========================================================
   CALENDARIO
   ========================================================= */

function renderCalendar() {

    const daysContainer =
        document.getElementById("calendar-days");

    if (!daysContainer) {
        return;
    }


    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    const monthTitle =
        document.getElementById("calendar-month");

    if (monthTitle) {

        const formatted =
            calendarDate.toLocaleDateString(
                "es-PE",
                {
                    month: "long",
                    year: "numeric"
                }
            );

        monthTitle.textContent =
            formatted.charAt(0).toUpperCase() +
            formatted.slice(1);
    }


    daysContainer.innerHTML = "";


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const mondayOffset =
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
        i < mondayOffset;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.className =
            "calendar-day calendar-empty";

        daysContainer.appendChild(
            empty
        );
    }


    const todayKey =
        getTodayKey();


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const date =
            new Date(
                year,
                month,
                day
            );

        const dateKey =
            formatDateKey(date);


        const activities =
            getActivitiesForDate(
                dateKey
            );


        const dayElement =
            document.createElement("button");

        dayElement.type = "button";

        dayElement.className =
            "calendar-day";


        if (
            dateKey === todayKey
        ) {
            dayElement.classList.add(
                "calendar-today"
            );
        }


        if (activities.length > 0) {
            dayElement.classList.add(
                "calendar-has-activity"
            );
        }


        const emoji =
            activities.length > 0
                ? journeys[
                    activities[0].journey
                  ].emoji
                : "";


        dayElement.innerHTML = `
            <span class="calendar-number">
                ${day}
            </span>

            ${
                emoji
                    ? `<span class="calendar-emoji">${emoji}</span>`
                    : ""
            }
        `;


        dayElement.addEventListener(
            "click",
            () => {
                showDayActivities(
                    dateKey,
                    activities
                );
            }
        );


        daysContainer.appendChild(
            dayElement
        );
    }
}


function getActivitiesForDate(dateKey) {

    return experiences.filter(
        experience =>
            completionDates[
                experience.id
            ] === dateKey
    );
}


function showDayActivities(
    dateKey,
    activities
) {

    const detail =
        document.getElementById(
            "day-detail"
        );

    if (!detail) {
        return;
    }


    const date =
        new Date(
            `${dateKey}T12:00:00`
        );


    const formattedDate =
        date.toLocaleDateString(
            "es-PE",
            {
                weekday: "long",
                day: "numeric",
                month: "long"
            }
        );


    const dateTitle =
        formattedDate.charAt(0).toUpperCase() +
        formattedDate.slice(1);


    if (!activities.length) {

        detail.innerHTML = `
            <div class="day-detail-empty">

                <div class="day-detail-empty-icon">
                    ✦
                </div>

                <strong>
                    ${dateTitle}
                </strong>

                <p>
                    No hay experiencias registradas
                    en este día.
                </p>

            </div>
        `;

        return;
    }


    detail.innerHTML = `
        <div class="day-detail-header">
            <span>
                ${dateTitle}
            </span>

            <strong>
                ${activities.length}
                ${
                    activities.length === 1
                        ? " experiencia"
                        : " experiencias"
                }
            </strong>
        </div>

        <div class="day-detail-list">

            ${activities.map(activity => {

                const journey =
                    journeys[
                        activity.journey
                    ];

                return `
                    <button
                        type="button"
                        class="day-detail-item"
                        onclick="openExperienceFromCalendar('${activity.id}')"
                    >

                        <div
                            class="detail-emoji"
                            style="
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                width:43px;
                                height:43px;
                                border-radius:14px;
                                background:${journey.color}18;
                                font-size:20px;
                            "
                        >
                            ${journey.emoji}
                        </div>

                        <div class="detail-info">

                            <span class="detail-journey">
                                ${journey.shortName}
                            </span>

                            <span class="detail-title">
                                ${activity.title}
                            </span>

                            <span class="detail-day">
                                Día ${activity.day} de 30
                            </span>

                        </div>

                        <div class="detail-check">
                            ✓
                        </div>

                    </button>
                `;

            }).join("")}

        </div>
    `;
}


function openExperienceFromCalendar(id) {

    currentJourney = null;

    returnView = "dashboard";

    openExperience(id);
}


function changeMonth(offset) {

    calendarDate.setMonth(
        calendarDate.getMonth() + offset
    );

    renderCalendar();

    const detail =
        document.getElementById(
            "day-detail"
        );

    if (detail) {
        detail.innerHTML = "";
    }
}


/* =========================================================
   SORPRÉNDEME
   ========================================================= */

function surpriseMe() {

    if (!experiences.length) {
        return;
    }

    /* Solo experiencias que todavía no se han realizado */
    const pendingExperiences =
        experiences.filter(
            experience =>
                !isCompleted(experience.id)
        );


    /* Si ya se realizaron todas */
    if (!pendingExperiences.length) {

        showTemporaryMessage(
            "Ya realizaste todas las experiencias de 30 Días ✨"
        );

        return;
    }


    /* Elegir una experiencia pendiente al azar */
    const randomIndex =
        Math.floor(
            Math.random() *
            pendingExperiences.length
        );

    const randomExperience =
        pendingExperiences[randomIndex];


    currentJourney = null;

    returnView = "dashboard";

    openExperience(
        randomExperience.id
    );
}
/* =========================================================
   NAVEGACIÓN PRINCIPAL
   ========================================================= */

function hideDashboard() {

    const dashboard =
        document.getElementById(
            "dashboard-view"
        );

    if (!dashboard) {
        return;
    }

    /* Cerrar Guardadas / Realizadas al salir del dashboard */
    closeExperiencesPanel();

    dashboard.style.display =
        "none";
}

function showDashboard() {

    const dashboard =
        document.getElementById(
            "dashboard-view"
        );

    if (!dashboard) {
        return;
    }

    dashboard.style.display =
        "";
}


function goHome() {

    currentExperience = null;

    currentJourney = null;

    returnView = "dashboard";

    hideExperienceView();

    hideJourneyView();

    showDashboard();

    renderCalendar();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   FUNCIONES DE SECCIONES EXISTENTES
   ========================================================= */

function showFeature(feature) {

    const panel =
        document.getElementById("experiences-panel");

    const label =
        document.getElementById("experiences-panel-label");

    const title =
        document.getElementById("experiences-panel-title");

    const description =
        document.getElementById("experiences-panel-description");

    const list =
        document.getElementById("experiences-panel-list");


    if (
        !panel ||
        !label ||
        !title ||
        !description ||
        !list
    ) {
        return;
    }


    /* =========================================
       GUARDADAS
    ========================================= */

    if (feature === "guardadas") {

        const savedExperiences =
            experiences.filter(
                experience =>
                    favorites.includes(experience.id)
            );


        label.textContent =
            `GUARDADAS · ${savedExperiences.length}`;

        title.textContent =
            "Experiencias para volver";

        description.textContent =
            "Las experiencias que quisiste conservar para volver a ellas cuando quieras.";


        if (!savedExperiences.length) {

            list.innerHTML = `
                <div class="experiences-empty">

                    <span class="experiences-empty-icon">
                        ♡
                    </span>

                    <strong>
                        Aún no has guardado ninguna experiencia.
                    </strong>

                    <p>
                        Cuando encuentres una experiencia a la que quieras volver,
                        pulsa el corazón junto a su nombre.
                    </p>

                </div>
            `;

        } else {

            list.innerHTML =
                savedExperiences
                    .map(
                        experience =>
                            createExperiencePanelCard(
                                experience,
                                "guardadas"
                            )
                    )
                    .join("");
        }


        openExperiencesPanel();

        return;
    }


    /* =========================================
       REALIZADAS
    ========================================= */

    if (feature === "realizadas") {

        const completed =
            experiences.filter(
                experience =>
                    isCompleted(experience.id)
            );


        label.textContent =
            `REALIZADAS · ${completed.length}`;

        title.textContent =
            "Tu recorrido hasta ahora";

        description.textContent =
            "Las experiencias que ya realizaste y que forman parte de tu recorrido.";


        if (!completed.length) {

            list.innerHTML = `
                <div class="experiences-empty">

                    <span class="experiences-empty-icon">
                        ✓
                    </span>

                    <strong>
                        Aún no has realizado ninguna experiencia.
                    </strong>

                    <p>
                        Cuando marques una experiencia como completada,
                        aparecerá aquí.
                    </p>

                </div>
            `;

        } else {

            list.innerHTML =
                completed
                    .map(
                        experience =>
                            createExperiencePanelCard(
                                experience,
                                "realizadas"
                            )
                    )
                    .join("");
        }


        openExperiencesPanel();

        return;
    }


    showTemporaryMessage(
        "Esta sección estará disponible próximamente."
    );
}

   /* =========================================================
   PANEL DE EXPERIENCIAS
   ========================================================= */

function openExperiencesPanel() {

    const panel =
        document.getElementById("experiences-panel");

    if (!panel) {
        return;
    }

    panel.setAttribute(
        "aria-hidden",
        "false"
    );

    panel.classList.add(
        "is-open"
    );
}


function closeExperiencesPanel() {

    const panel =
        document.getElementById("experiences-panel");

    if (!panel) {
        return;
    }

    panel.setAttribute(
        "aria-hidden",
        "true"
    );

    panel.classList.remove(
        "is-open"
    );
}


/* =========================================================
   TARJETA DE EXPERIENCIA
   ========================================================= */

function createExperiencePanelCard(
    experience,
    type
) {

    const journey =
        journeys[experience.journey];

    if (!journey) {
        return "";
    }


    let extraHTML = "";


    /* GUARDADAS */

    if (type === "guardadas") {

        extraHTML = `
            <span class="panel-card-status saved">
                ♥ Guardada
            </span>
        `;
    }


    /* REALIZADAS */

    if (type === "realizadas") {

        const date =
            completionDates[experience.id];

        extraHTML = `
            <span class="panel-card-status completed">
                ✓ Realizada${date ? ` · ${formatCompletionDate(date)}` : ""}
            </span>
        `;
    }


    return `
        <button
            type="button"
            class="experiences-panel-card"
            onclick="openExperienceFromPanel('${experience.id}')"
        >

            <div class="panel-card-identity">

                <span class="panel-card-emoji">
                    ${journey.emoji}
                </span>

                <div class="panel-card-content">

                    <span class="panel-card-journey">
                        ${journey.shortName || journey.name}
                    </span>

                    <span class="panel-card-day">
                        Día ${experience.day}
                    </span>

                    <strong class="panel-card-title">
                        ${experience.title}
                    </strong>

                    ${extraHTML}

                </div>

            </div>


            <span class="panel-card-arrow">
                →
            </span>

        </button>
    `;
}


/* =========================================================
   ABRIR DESDE EL PANEL
   ========================================================= */

function openExperienceFromPanel(id) {

    returnView = "dashboard";

    openExperience(id);
}


/* =========================================================
   FECHA DE REALIZACIÓN
   ========================================================= */

function formatCompletionDate(dateValue) {

    if (!dateValue) {
        return "";
    }

    const date =
        new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleDateString(
        "es-PE",
        {
            day: "numeric",
            month: "short"
        }
    );
}

function showTemporaryMessage(message) {

    const existing =
        document.getElementById(
            "temporary-message"
        );

    if (existing) {
        existing.remove();
    }


    const box =
        document.createElement("div");

    box.id =
        "temporary-message";

    box.textContent =
        message;


    box.style.position =
        "fixed";

    box.style.left =
        "50%";

    box.style.bottom =
        "24px";

    box.style.transform =
        "translateX(-50%)";

    box.style.width =
        "min(90%, 420px)";

    box.style.padding =
        "16px 18px";

    box.style.borderRadius =
        "16px";

    box.style.background =
        "#293A49";

    box.style.color =
        "#FFFFFF";

    box.style.fontFamily =
        '"Inter", sans-serif';

    box.style.fontSize =
        "13px";

    box.style.lineHeight =
        "1.5";

    box.style.whiteSpace =
        "pre-line";

    box.style.textAlign =
        "center";

    box.style.zIndex =
        "9999";

    box.style.boxShadow =
        "0 12px 35px rgba(41,58,73,.18)";


    document.body.appendChild(
        box
    );


    setTimeout(() => {

        box.style.opacity =
            "0";

        box.style.transition =
            "opacity .3s ease";

        setTimeout(
            () => box.remove(),
            300
        );

    }, 3000);
}


/* =========================================================
   ESTILOS DE LA VISTA DE TOMOS
   Se inyectan desde JS para no tocar style.css todavía.
   ========================================================= */

function injectJourneyStyles() {

    if (
        document.getElementById(
            "journey-browser-styles"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");

    style.id =
        "journey-browser-styles";


    style.textContent = `

        #journey-view {
            display: none;
            width: 100%;
            min-height: 100vh;
            background: #F7F7F4;
        }


        #journey-view[aria-hidden="false"] {
            display: block;
        }


        .journey-browser {
            width: min(100%, 900px);
            margin: 0 auto;
            padding: 0 20px 50px;
            box-sizing: border-box;
            color: #293A49;
            font-family: "Inter", sans-serif;
        }


        .journey-browser-header {
            height: 76px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }


        .journey-back-button,
        .journey-temple-button {
            border: 0;
            background: transparent;
            cursor: pointer;
            font-family: "Inter", sans-serif;
        }


        .journey-back-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #71808B;
            font-size: 13px;
            font-weight: 500;
            padding: 8px 0;
        }


        .journey-back-button:hover {
            color: #293A49;
        }


        .journey-temple-button {
            color: #4C6789;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: -.02em;
        }


        .journey-browser-hero {
            position: relative;
            overflow: hidden;
            border-radius: 28px;
            padding: 28px;
            background: #FFFFFF;
            border: 1px solid rgba(41,58,73,.07);
            box-shadow: 0 10px 35px rgba(41,58,73,.045);
        }


        .journey-browser-hero::after {
            content: "";
            position: absolute;
            width: 180px;
            height: 180px;
            right: -70px;
            top: -80px;
            border-radius: 50%;
            background: var(--journey-color);
            opacity: .08;
        }


        .journey-browser-identity {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 16px;
        }


        .journey-browser-emoji {
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 19px;
            background: color-mix(
                in srgb,
                var(--journey-color) 13%,
                white
            );
            font-size: 27px;
        }


        .journey-browser-label {
            margin-bottom: 5px;
            color: var(--journey-color);
            font-size: 9px;
            font-weight: 700;
            letter-spacing: .13em;
        }


        .journey-browser-hero h1 {
            margin: 0;
            max-width: 580px;
            color: #293A49;
            font-size: clamp(23px, 4vw, 34px);
            line-height: 1.15;
            letter-spacing: -.035em;
        }


        .journey-browser-intro {
            position: relative;
            z-index: 1;
            max-width: 620px;
            margin: 21px 0 25px;
            color: #71808B;
            font-size: 14px;
            line-height: 1.65;
        }


        .journey-progress-card {
            position: relative;
            z-index: 1;
            padding: 17px 18px;
            border-radius: 18px;
            background: #F7F7F4;
        }


        .journey-progress-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 11px;
            font-size: 11px;
            color: #71808B;
        }


        .journey-progress-top strong {
            color: #293A49;
            font-size: 12px;
        }


        .journey-progress-track {
            width: 100%;
            height: 7px;
            overflow: hidden;
            border-radius: 20px;
            background: #E8EAE7;
        }


        .journey-progress-fill {
            height: 100%;
            border-radius: inherit;
            transition: width .35s ease;
        }


        .journey-progress-bottom {
            margin-top: 9px;
            color: #8A969E;
            font-size: 10px;
            line-height: 1.4;
        }


        .journey-days-section {
            padding-top: 34px;
        }


        .journey-section-heading > div > span {
            color: #8A969E;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: .13em;
        }


        .journey-section-heading h2 {
            margin: 6px 0 19px;
            color: #293A49;
            font-size: 20px;
            line-height: 1.25;
            letter-spacing: -.025em;
        }


        .journey-continue-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 14px;
            padding: 17px 19px;
            border: 0;
            border-radius: 17px;
            background: var(--journey-color);
            color: white;
            cursor: pointer;
            text-align: left;
            font-family: "Inter", sans-serif;
            box-shadow: 0 7px 20px color-mix(
                in srgb,
                var(--journey-color) 20%,
                transparent
            );
        }


        .journey-continue-button span {
            font-size: 12px;
            font-weight: 500;
        }


        .journey-continue-button strong {
            font-size: 11px;
            font-weight: 700;
        }


        .journey-days-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }


        .journey-day-card {
            position: relative;
            min-height: 112px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr;
            column-gap: 12px;
            align-items: center;
            padding: 14px;
            border: 1px solid rgba(41,58,73,.07);
            border-radius: 18px;
            background: #FFFFFF;
            cursor: pointer;
            text-align: left;
            font-family: "Inter", sans-serif;
            transition:
                transform .18s ease,
                box-shadow .18s ease,
                border-color .18s ease;
        }


        .journey-day-card:hover {
            transform: translateY(-2px);
            border-color: color-mix(
                in srgb,
                var(--journey-color) 28%,
                #FFFFFF
            );
            box-shadow: 0 8px 25px rgba(41,58,73,.07);
        }


        .journey-day-card:active {
            transform: translateY(0);
        }


        .journey-day-number {
            grid-column: 1 / -1;
            margin-bottom: 8px;
            color: #8A969E;
            font-size: 9px;
            font-weight: 600;
            letter-spacing: .08em;
            text-transform: uppercase;
        }


        .journey-day-emoji {
            width: 39px;
            height: 39px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 13px;
            background: color-mix(
                in srgb,
                var(--journey-color) 11%,
                white
            );
            font-size: 18px;
        }


        .journey-day-content {
            min-width: 0;
        }


        .journey-day-title {
            color: #293A49;
            font-size: 11px;
            line-height: 1.4;
            font-weight: 650;
        }


        .journey-day-status {
            margin-top: 4px;
            color: #8A969E;
            font-size: 9px;
            line-height: 1.3;
        }


        .journey-day-card.is-completed
        .journey-day-status {
            color: var(--journey-color);
            font-weight: 600;
        }


        .journey-day-arrow {
            color: #9AA4AA;
            font-size: 15px;
        }


        .journey-day-lock {
            color: #B4BCBF;
            font-size: 18px;
        }


        .journey-day-locked {
            cursor: default;
            opacity: .64;
            background: #FBFBF9;
        }


        .journey-day-locked:hover {
            transform: none;
            border-color: rgba(41,58,73,.07);
            box-shadow: none;
        }


        .journey-finished-message {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 14px;
            padding: 17px 18px;
            border-radius: 17px;
            background: #EAF0E9;
            color: #638269;
            font-size: 11px;
            line-height: 1.45;
        }


        .journey-finished-message strong {
            font-size: 12px;
        }


        .journey-note {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-top: 30px;
            padding: 17px 18px;
            border-radius: 17px;
            background: #EEEFEA;
        }


        .journey-note span {
            font-size: 15px;
            line-height: 1.5;
        }


        .journey-note p {
            margin: 0;
            color: #71808B;
            font-size: 11px;
            line-height: 1.6;
        }


        .journey-browser-footer {
            padding-top: 35px;
            color: #A0A8AC;
            font-size: 10px;
            text-align: center;
        }


        @media (max-width: 600px) {

            .journey-browser {
                padding-left: 15px;
                padding-right: 15px;
            }


            .journey-browser-header {
                height: 68px;
            }


            .journey-browser-hero {
                padding: 22px 18px;
                border-radius: 23px;
            }


            .journey-browser-identity {
                gap: 12px;
            }


            .journey-browser-emoji {
                width: 50px;
                height: 50px;
                border-radius: 16px;
                font-size: 23px;
            }


            .journey-browser-hero h1 {
                font-size: 23px;
            }


            .journey-browser-intro {
                font-size: 13px;
                margin-top: 17px;
            }


            .journey-days-grid {
                grid-template-columns: 1fr;
                gap: 8px;
            }


            .journey-day-card {
                min-height: 94px;
                grid-template-columns: auto 1fr auto;
                padding: 13px;
            }


            .journey-section-heading h2 {
                font-size: 19px;
            }
        }

    `;


    document.head.appendChild(
        style
    );
}
