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

   {
    id: "conectar-3",
    journey: "conectar",
    day: 3,
    title: "DESCUBRIR ALGO NUEVO DEL OTRO",
    duration: "15–20 min",
    moment: "En casa, durante una tarde o noche tranquila en la que puedan conversar sin interrupciones.",
    description:
        "Conocer a alguien no significa dejar de descubrirlo. Incluso cuando llevamos tiempo compartiendo con una persona, todavía existen gustos, ideas, recuerdos o pequeñas experiencias que no conocemos.",

    steps: [
        {
            emoji: "🔎",
            title: "Elegir",
            text: "Cada persona piensa en algo sobre sí misma que crea que su pareja probablemente no conoce."
        },
        {
            emoji: "💬",
            title: "Compartir",
            text: "Cuéntale aquello que elegiste. Puede ser algo pequeño: una preferencia, una experiencia, una idea, un recuerdo o algo que hayas descubierto recientemente."
        },
        {
            emoji: "👂",
            title: "Preguntar",
            text: "Quien escucha puede hacer una o dos preguntas para conocer un poco más sobre aquello que acaba de descubrir."
        },
        {
            emoji: "🌿",
            title: "Guardar",
            text: "Al terminar, cada persona puede decir qué fue lo que más le sorprendió o interesó conocer del otro."
        }
    ],

    question:
        "¿Qué descubriste hoy de tu pareja que no conocías o que nunca habían conversado de esa manera?"
},

   {
    id: "conectar-4",
    journey: "conectar",
    day: 4,
    title: "RECORDAR NUESTRO COMIENZO",
    duration: "20–30 min",
    moment: "En un lugar cómodo y tranquilo, durante un momento en el que puedan recordar juntos sin tener que atender otras actividades.",
    description:
        "Nuestra historia está hecha de momentos que quizá no hemos vuelto a mirar desde que ocurrieron. Hoy van a regresar juntos a uno de esos momentos y descubrir qué aparece al recordarlo desde el presente.",

    steps: [
        {
            emoji: "💭",
            title: "Elegir",
            text: "Cada persona piensa en un momento de los primeros tiempos de la relación que recuerde de manera especial."
        },
        {
            emoji: "🕰️",
            title: "Volver",
            text: "Cuéntenle a su pareja cómo recuerdan ese momento: qué estaba ocurriendo, qué sintieron o qué recuerdan especialmente de aquella etapa."
        },
        {
            emoji: "👀",
            title: "Mirar",
            text: "Escuchen la versión de la otra persona y observen qué detalles recuerdan de manera diferente."
        },
        {
            emoji: "🤍",
            title: "Compartir",
            text: "Elijan un recuerdo que ambos quieran conservar especialmente y dediquen unos minutos a volver a vivirlo a través de la conversación."
        }
    ],

    question:
        "¿Qué sentiste al volver juntos a un momento de su historia?"
},

{
    id: "conectar-5",
    journey: "conectar",
    day: 5,
    title: "ESCUCHAR SIN INTERRUMPIR",
    duration: "10–15 min",
    moment: "En casa o en un espacio tranquilo, durante un momento en el que puedan escucharse sin interrupciones.",
    description:
        "A veces escuchamos mientras pensamos qué vamos a responder. Hoy van a experimentar qué ocurre cuando una persona tiene la oportunidad de hablar y la otra simplemente permanece disponible para escuchar.",

    steps: [
        {
            emoji: "💬",
            title: "Compartir",
            text: "Una persona comienza contando algo que tenga presente últimamente. Puede ser algo que haya vivido, pensado, sentido o simplemente algo que quiera compartir."
        },
        {
            emoji: "👂",
            title: "Escuchar",
            text: "Mientras habla, la otra persona escucha hasta el final sin interrumpir, completar frases ni llevar la conversación hacia su propia experiencia."
        },
        {
            emoji: "🌿",
            title: "Recibir",
            text: "Cuando termine, quien escuchó puede decir brevemente qué comprendió de lo que la otra persona quiso compartir, sin interpretar ni buscar una solución."
        },
        {
            emoji: "🔄",
            title: "Cambiar",
            text: "Después cambien los roles y permitan que la otra persona tenga el mismo espacio para hablar y ser escuchada."
        }
    ],

    question:
        "¿Qué descubriste sobre la experiencia de escuchar cuando no necesitabas preparar una respuesta?"
},

{
    id: "conectar-6",
    journey: "conectar",
    day: 6,
    title: "DAR ESPACIO PARA HABLAR",
    duration: "10–15 min",
    moment: "En casa o en un espacio tranquilo, durante un momento en el que puedan escucharse sin interrupciones.",
    description:
        "Escuchar no siempre significa estar esperando nuestro turno para responder. Hoy van a practicar una forma de escucha en la que cada persona pueda expresarse sin ser interrumpida.",

    steps: [
        {
            emoji: "💬",
            title: "Hablar",
            text: "Una persona tendrá unos minutos para compartir algo que quiera contar. Puede hablar sobre cómo se ha sentido, algo que le ha ocurrido o algo que tenga presente últimamente."
        },
        {
            emoji: "👂",
            title: "Escuchar",
            text: "Mientras habla, la otra persona escucha sin interrumpir, completar frases ni preparar una respuesta."
        },
        {
            emoji: "🔄",
            title: "Cambiar",
            text: "Después cambien los roles y permitan que la otra persona tenga el mismo espacio para expresarse."
        },
        {
            emoji: "🤍",
            title: "Cerrar",
            text: "Al terminar, cada persona puede decir brevemente cómo se sintió al tener ese espacio para hablar y escuchar."
        }
    ],

    question:
        "¿Qué notaste sobre tu manera de escuchar cuando no necesitabas responder inmediatamente?"
},

{
    id: "conectar-7",
    journey: "conectar",
    day: 7,
    title: "DECIR LO QUE APRECIO DE TI",
    duration: "10–15 min",
    moment: "En casa o en un lugar tranquilo que ambos disfruten, durante un momento en el que puedan prestarse atención.",
    description:
        "Hay cosas que valoramos de nuestra pareja y que quizá damos por sentadas con el paso del tiempo. Hoy van a detenerse en aquello que reconocen y disfrutan del otro para expresarlo de una manera concreta.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconocer",
            text: "Cada persona piensa en algo que su pareja haya hecho, dicho o mostrado recientemente y que haya significado algo para ella."
        },
        {
            emoji: "💬",
            title: "Contar",
            text: "Compartan qué fue aquello y expliquen qué hizo que fuera importante para ustedes."
        },
        {
            emoji: "👂",
            title: "Recibir",
            text: "Escuchen lo que la otra persona quiere reconocer de ustedes sin minimizarlo, rechazarlo ni responder inmediatamente con otro reconocimiento."
        },
        {
            emoji: "💛",
            title: "Devolver",
            text: "Después, cada persona puede compartir algo que también quiera reconocer de la otra persona en este momento."
        }
    ],

    question:
        "¿Qué cambió cuando pusieron en palabras algo que normalmente dan por sentado?"
},

{
    id: "conectar-8",
    journey: "conectar",
    day: 8,
    title: "MOSTRAR CÓMO ESTOY HOY",
    duration: "10–15 min",
    moment: "En casa, al final del día o durante un momento tranquilo en el que puedan estar juntos sin interrupciones.",
    description:
        "Podemos compartir el mismo día y, aun así, no saber realmente cómo está la persona que tenemos al lado. Hoy van a hacer una pausa para encontrarse con cómo llega cada persona a este momento.",

    steps: [
        {
            emoji: "🌿",
            title: "Pausar",
            text: "Antes de comenzar, cada persona se toma unos instantes para reconocer cómo se siente hoy."
        },
        {
            emoji: "💬",
            title: "Mostrar",
            text: "Compartan cómo están realmente en este momento. Pueden hablar de algo que les haya ocurrido, algo que estén pensando, una emoción presente o simplemente de cómo se sienten."
        },
        {
            emoji: "👂",
            title: "Recibir",
            text: "Escucha lo que tu pareja comparte sin intentar cambiar lo que siente, minimizarlo o encontrar inmediatamente una solución."
        },
        {
            emoji: "🤍",
            title: "Acompañar",
            text: "Después de escucharse, pregunten qué necesita cada persona ahora: ser escuchada, compañía, espacio, afecto o simplemente saber que la otra persona está ahí."
        }
    ],

    question:
        "¿Qué descubriste al detenerte a conocer cómo estaba realmente tu pareja hoy?"
},

{
    id: "conectar-9",
    journey: "conectar",
    day: 9,
    title: "CAMBIAR NUESTRA RUTINA",
    duration: "20–40 min",
    moment: "En casa o durante una actividad cotidiana que suelan compartir, en un día en el que puedan modificarla sin prisas.",
    description:
        "Las rutinas pueden hacer que compartamos momentos sin prestar demasiada atención a cómo los estamos viviendo. Hoy van a cambiar deliberadamente una pequeña parte de una rutina compartida.",

    steps: [
        {
            emoji: "🔎",
            title: "Elegir",
            text: "Identifiquen una actividad que suelen hacer de manera habitual: comer, salir, conversar, descansar o pasar tiempo juntos."
        },
        {
            emoji: "🔄",
            title: "Cambiar",
            text: "Modifiquen una parte sencilla de esa rutina. Pueden cambiar el lugar, el momento, la forma de hacerlo o incorporar algo que normalmente no hacen."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Presten atención a cómo se siente realizar algo conocido de una manera diferente."
        },
        {
            emoji: "💬",
            title: "Compartir",
            text: "Al terminar, comenten qué les resultó diferente y si hubo algo que disfrutaron especialmente."
        }
    ],

    question:
        "¿Qué descubriste al cambiar algo pequeño de una rutina que comparten?"
},

{
    id: "conectar-10",
    journey: "conectar",
    day: 10,
    title: "CREAR UN MOMENTO SOLO NUESTRO",
    duration: "20–30 min",
    moment: "En casa o en un lugar que ambos disfruten, durante un momento que puedan reservar exclusivamente para compartir.",
    description:
        "El tiempo compartido no siempre significa tiempo conectado. Hoy van a crear un momento que tenga una condición sencilla: durante unos minutos, nada más necesita ocupar su atención.",

    steps: [
        {
            emoji: "⏰",
            title: "Reservar",
            text: "Elijan un momento y acuerden dejar fuera durante ese tiempo las tareas pendientes, los dispositivos y otras actividades que puedan esperar."
        },
        {
            emoji: "🤝",
            title: "Decidir",
            text: "Piensen juntos qué quieren hacer durante ese espacio. Puede ser algo que disfruten, algo que quieran probar o simplemente una forma de estar juntos."
        },
        {
            emoji: "🌿",
            title: "Compartir",
            text: "Realicen aquello que eligieron prestando atención a la experiencia de estar juntos, sin convertir ese momento en otra obligación."
        },
        {
            emoji: "🤍",
            title: "Permanecer",
            text: "Antes de terminar, quédense unos instantes juntos y observen cómo se siente haber creado intencionalmente ese espacio para ustedes."
        }
    ],

    question:
        "¿Qué hizo que este momento se sintiera realmente diferente de otros momentos que comparten?"
},

{
    id: "conectar-11",
    journey: "conectar",
    day: 11,
    title: "HACERNOS PREGUNTAS DIFERENTES",
    duration: "10–15 min",
    moment: "En casa o en un lugar tranquilo, durante un momento en el que puedan compartir tiempo sin interrupciones.",
    description:
        "Con el tiempo, muchas conversaciones de pareja terminan siguiendo los mismos caminos. Hoy van a crear un pequeño juego para salir de esos temas habituales y descubrir nuevas partes de la persona que tienen delante.",

    steps: [
        {
            emoji: "📝",
            title: "Crear",
            text: "Cada persona escribe tres preguntas que realmente le dé curiosidad conocer de su pareja. Pueden ser sobre gustos, experiencias, ideas, recuerdos, deseos o cualquier cosa que normalmente no conversen."
        },
        {
            emoji: "🔀",
            title: "Mezclar",
            text: "Junten todas las preguntas y mézclenlas. Después, cada persona toma una pregunta al azar."
        },
        {
            emoji: "💬",
            title: "Responder",
            text: "Lean la pregunta en voz alta y respondan desde lo que realmente piensan o sienten, sin preocuparse por dar una respuesta perfecta."
        },
        {
            emoji: "👀",
            title: "Descubrir",
            text: "Después de cada respuesta, observen qué apareció en la conversación que normalmente no surge entre ustedes."
        }
    ],

    question:
        "¿Qué descubriste al conversar sobre algo que normalmente no forma parte de sus conversaciones?"
},

{
    id: "conectar-12",
    journey: "conectar",
    day: 12,
    title: "COMPARTIR ALGO QUE CASI NUNCA CUENTO",
    duration: "10–15 min",
    moment: "En un lugar cómodo y privado, durante un momento en el que puedan estar tranquilos y escucharse.",
    description:
        "La cercanía también puede aparecer cuando mostramos partes de nuestra historia que normalmente quedan fuera de las conversaciones. Hoy cada persona elegirá algo que quiera permitir que su pareja conozca un poco mejor.",

    steps: [
        {
            emoji: "🧩",
            title: "Elegir",
            text: "Cada persona piensa en algo propio que casi nunca cuenta. Puede ser un recuerdo, una experiencia, una ilusión, una preocupación, una etapa de su vida o algo que haya influido en quién es actualmente."
        },
        {
            emoji: "💬",
            title: "Abrir",
            text: "Compártanlo a su propio ritmo. No es necesario contar todo ni explicar aquello que todavía no quieran compartir."
        },
        {
            emoji: "👂",
            title: "Recibir",
            text: "Mientras una persona habla, la otra escucha sin intentar completar la historia, compararla con la propia o buscar una solución."
        },
        {
            emoji: "🤍",
            title: "Acercarse",
            text: "Al terminar, quien escuchó puede decir qué parte de lo compartido le permitió conocer un poco más a su pareja."
        }
    ],

    question:
        "¿Qué significó para ti permitir que tu pareja conociera una parte de ti que normalmente no compartes?"
},

{
    id: "conectar-13",
    journey: "conectar",
    day: 13,
    title: "HACER ALGO QUE LE GUSTA AL OTRO",
    duration: "20–30 min",
    moment: "En casa o en un lugar donde puedan realizar una actividad que disfrute una de las dos personas.",
    description:
        "Conocer lo que disfruta nuestra pareja también puede implicar acercarnos a aquello que forma parte de su mundo. Hoy cada persona va a participar en algo que normalmente disfruta más la otra.",

    steps: [
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Cada persona propone una actividad sencilla que disfrute especialmente y que pueda compartir con su pareja."
        },
        {
            emoji: "🔄",
            title: "Intercambiar",
            text: "Elijan una de las propuestas y realícenla juntos, procurando que durante este momento la actividad esté guiada por lo que disfruta la persona que la propuso."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Quien acompaña presta atención a qué hace que esa actividad resulte agradable o significativa para su pareja."
        },
        {
            emoji: "🌿",
            title: "Compartir",
            text: "Al terminar, comenten qué descubrieron al entrar durante un momento en algo que forma parte del mundo de la otra persona."
        }
    ],

    question:
        "¿Qué descubriste al acercarte a algo que disfruta especialmente tu pareja?"
},

{
    id: "conectar-14",
    journey: "conectar",
    day: 14,
    title: "CAMBIAR DE LUGAR POR UN MOMENTO",
    duration: "15–20 min",
    moment: "En casa, durante un momento tranquilo en el que puedan observar una situación cotidiana que ambos conozcan.",
    description:
        "Podemos conocer muy bien una situación desde nuestra propia experiencia y, aun así, pasar por alto cómo la vive la otra persona. Hoy van a mirar una situación conocida desde un lugar diferente.",

    steps: [
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Piensen en una situación cotidiana que ambos conozcan bien: preparar algo juntos, organizar una salida, decidir qué hacer o cualquier otra actividad habitual."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Cada persona identifica qué suele notar, necesitar o tener en cuenta cuando ocurre esa situación."
        },
        {
            emoji: "🔄",
            title: "Intercambiar",
            text: "Durante unos minutos, intenten explicar la situación desde la perspectiva de su pareja, procurando describirla según lo que creen que ella experimenta."
        },
        {
            emoji: "💬",
            title: "Descubrir",
            text: "Después, cada persona cuenta qué coincidió con su experiencia real y qué aspecto había entendido de una manera diferente."
        }
    ],

    question:
        "¿Qué descubriste al mirar una situación cotidiana desde la experiencia de tu pareja?"
},

{
    id: "conectar-15",
    journey: "conectar",
    day: 15,
    title: "DECIR LO QUE NECESITO",
    duration: "10–15 min",
    moment: "En un lugar tranquilo, durante un momento en el que ninguno de los dos esté intentando resolver una situación urgente.",
    description:
        "Las necesidades no siempre se expresan claramente. A veces esperamos que la otra persona las descubra, las interpretamos de manera diferente o dejamos que aparezcan únicamente cuando ya estamos molestos. Hoy van a practicar una forma más directa de acercarse a ellas.",

    steps: [
        {
            emoji: "🌿",
            title: "Reconocer",
            text: "Cada persona identifica una necesidad concreta que tenga actualmente dentro de la relación."
        },
        {
            emoji: "💬",
            title: "Expresar",
            text: "Digan qué necesitan utilizando una petición clara y concreta. Hablen de aquello que les ayudaría, evitando convertir la petición en una explicación de todo lo que la otra persona debería cambiar."
        },
        {
            emoji: "👂",
            title: "Recibir",
            text: "Quien escucha intenta comprender qué está pidiendo su pareja antes de responder. Puede preguntar qué significaría concretamente para ella sentirse atendida en esa necesidad."
        },
        {
            emoji: "🤝",
            title: "Probar",
            text: "Elijan una pequeña acción posible que permita poner esa necesidad en práctica durante los próximos días."
        }
    ],

    question:
        "¿Qué cambió cuando convertiste una necesidad en una petición concreta?"
},

{
    id: "conectar-16",
    journey: "conectar",
    day: 16,
    title: "APRENDER A RECIBIR",
    duration: "10–15 min",
    moment: "En casa o en un lugar tranquilo, durante un momento en el que puedan prestarse atención.",
    description:
        "Dar y recibir forman parte de cualquier relación. A veces resulta más fácil ofrecer algo que permitirnos recibirlo. Hoy van a practicar únicamente esta segunda parte.",

    steps: [
        {
            emoji: "🎁",
            title: "Ofrecer",
            text: "Una persona elige un gesto sencillo para ofrecer a su pareja: una ayuda, un reconocimiento, preparar algo, acercarse, escuchar o hacer algo que pueda resultarle agradable."
        },
        {
            emoji: "🤲",
            title: "Recibir",
            text: "Quien recibe intenta aceptar el gesto sin rechazarlo, restarle importancia ni responder inmediatamente ofreciendo algo a cambio."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Presta atención a lo que ocurre internamente al recibir: comodidad, incomodidad, ganas de devolverlo, pensamientos o cualquier otra reacción."
        },
        {
            emoji: "🔄",
            title: "Cambiar",
            text: "Después cambien los roles y permitan que ambas personas experimenten tanto ofrecer como recibir."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de recibir algo de tu pareja?"
},

{
    id: "conectar-17",
    journey: "conectar",
    day: 17,
    title: "RECONOCER LO QUE HACEMOS POR NOSOTROS",
    duration: "15–20 min",
    moment: "En casa, durante un momento tranquilo en el que puedan observar algunos aspectos de su vida cotidiana como pareja.",
    description:
        "Muchas cosas que sostienen una relación ocurren sin que nadie las anuncie. Hoy van a mirar su vida cotidiana con más atención para descubrir qué acciones pequeñas ayudan a que la relación funcione.",

    steps: [
        {
            emoji: "🔎",
            title: "Recorrer",
            text: "Piensen en un día habitual de ustedes y recorran mentalmente algunos momentos: despertar, organizarse, trabajar, estudiar, comer, descansar o terminar el día."
        },
        {
            emoji: "🧩",
            title: "Detectar",
            text: "Cada persona identifica acciones concretas que la otra realiza y que facilitan, acompañan o hacen más agradable la vida que comparten."
        },
        {
            emoji: "💬",
            title: "Mostrar",
            text: "Compartan esas acciones y expliquen qué efecto tienen en su experiencia cotidiana, aunque parezcan pequeñas o habituales."
        },
        {
            emoji: "🤍",
            title: "Añadir",
            text: "Cada persona puede mencionar una acción que realiza por la relación y que quizá su pareja no había notado."
        }
    ],

    question:
        "¿Qué acción cotidiana descubriste que también forma parte de la manera en que construyen su relación?"
},

{
    id: "conectar-18",
    journey: "conectar",
    day: 18,
    title: "SORPRENDERNOS",
    duration: "20–30 min",
    moment: "En casa o durante un momento cotidiano que puedan transformar con un gesto inesperado.",
    description:
        "La conexión también puede aparecer cuando dejamos espacio para la espontaneidad. Hoy cada persona va a preparar una pequeña sorpresa para la otra sin necesidad de hacer algo grande.",

    steps: [
        {
            emoji: "💡",
            title: "Pensar",
            text: "Cada persona elige algo sencillo que crea que podría sorprender o agradar a su pareja."
        },
        {
            emoji: "🤫",
            title: "Preparar",
            text: "Preparen su gesto sin revelar qué están haciendo. Puede ser una actividad, una nota, algo que hayan preparado, una propuesta inesperada o cualquier detalle que tenga sentido para la otra persona."
        },
        {
            emoji: "✨",
            title: "Sorprender",
            text: "Entréguenlo o realicen aquello que prepararon y observen la reacción del otro sin esperar una respuesta determinada."
        },
        {
            emoji: "💬",
            title: "Compartir",
            text: "Después, cuenten qué los llevó a elegir esa sorpresa y qué sintieron al prepararla."
        }
    ],

    question:
        "¿Qué descubriste sobre tu pareja al pensar en algo que pudiera sorprenderla?"
},

{
    id: "conectar-19",
    journey: "conectar",
    day: 19,
    title: "DEJARNOS CUIDAR",
    duration: "10–15 min",
    moment: "En casa o en un espacio cómodo, durante un momento en el que ambos puedan bajar el ritmo y estar disponibles.",
    description:
        "Permitir que otra persona nos cuide también puede ser una forma de cercanía. Hoy van a practicar recibir un gesto de cuidado sin dirigir cómo debe hacerse.",

    steps: [
        {
            emoji: "🤍",
            title: "Elegir",
            text: "Una persona propone hacer algo concreto para cuidar a su pareja durante este momento: preparar algo, ayudar con una tarea, acercarse, escuchar, acompañar o facilitarle algo que necesite."
        },
        {
            emoji: "🌿",
            title: "Permitir",
            text: "Quien recibe permite que la otra persona realice ese gesto sin corregir innecesariamente cómo lo hace ni asumir inmediatamente la tarea."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Presta atención a cómo se siente recibir cuidado y a cualquier impulso de rechazarlo, devolverlo o tomar nuevamente el control."
        },
        {
            emoji: "🔄",
            title: "Cambiar",
            text: "Después intercambien los roles y permitan que la otra persona experimente también recibir."
        }
    ],

    question:
        "¿Qué notaste cuando permitiste que tu pareja hiciera algo por ti?"
},

{
    id: "conectar-20",
    journey: "conectar",
    day: 20,
    title: "DESCUBRIR CÓMO LE GUSTA SER CUIDADO AL OTRO",
    duration: "15–20 min",
    moment: "En casa o en un lugar cómodo, durante un momento en el que puedan realizar juntos una pequeña experiencia de cuidado.",
    description:
        "Cuidar a alguien no siempre significa hacer lo que nosotros creemos que necesita. Hoy van a descubrir una forma de cuidado que tenga sentido para la otra persona y llevarla inmediatamente a la práctica.",

    steps: [
        {
            emoji: "🧠",
            title: "Recordar",
            text: "Cada persona piensa en un momento reciente en el que necesitó sentirse acompañada, ayudada o cuidada."
        },
        {
            emoji: "💬",
            title: "Elegir",
            text: "En lugar de explicar solamente qué habría necesitado, elijan una acción concreta que hubiera representado para ustedes una forma de cuidado en ese momento."
        },
        {
            emoji: "🤍",
            title: "Practicar",
            text: "Realicen ahora una versión sencilla de esa acción para su pareja. Puede ser escucharla, acompañarla, ayudarla con algo, darle espacio, acercarse o facilitarle algo que necesite."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Quien recibe presta atención a cómo se siente experimentar ese gesto. Después cambien los roles y permitan que ambas personas tengan la oportunidad de dar y recibir."
        }
    ],

    question:
        "¿Qué descubriste sobre la manera en que tu pareja se siente cuidada cuando llevaste esa forma de cuidado a la práctica?"
},

{
    id: "conectar-21",
    journey: "conectar",
    day: 21,
    title: "HACER ALGO SIN HABLAR",
    duration: "15–20 min",
    moment: "En casa o en un lugar tranquilo, durante un momento en el que puedan realizar una actividad sencilla juntos.",
    description:
        "Podemos acostumbrarnos a explicar todo con palabras. Hoy van a experimentar otra forma de comunicarse mientras hacen algo juntos, prestando atención a los gestos, las acciones y las señales que aparecen entre ustedes.",

    steps: [
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Elijan una actividad sencilla que requiera cierta coordinación: preparar algo, armar un objeto, ordenar un espacio, dibujar juntos o realizar cualquier otra tarea compartida."
        },
        {
            emoji: "🤫",
            title: "Comenzar",
            text: "Durante unos minutos, realicen la actividad sin hablar. Utilicen únicamente gestos, miradas o acciones para coordinarse cuando sea necesario."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Presten atención a cómo intentan comprenderse, cómo responden a las señales del otro y qué ocurre cuando no pueden explicar inmediatamente lo que quieren hacer."
        },
        {
            emoji: "🔄",
            title: "Continuar",
            text: "Después de unos minutos, pueden volver a hablar y terminar la actividad de la manera que prefieran."
        }
    ],

    question:
        "¿Qué descubriste sobre la manera en que se comunican cuando las palabras dejan de estar disponibles?"
},

{
    id: "conectar-22",
    journey: "conectar",
    day: 22,
    title: "COMPARTIR UN SILENCIO",
    duration: "10–15 min",
    moment: "En un lugar cómodo que ambos disfruten, durante un momento tranquilo en el que puedan permanecer juntos sin otras actividades pendientes.",
    description:
        "A veces sentimos la necesidad de llenar los silencios. Hoy van a compartir un momento en el que no necesitan conversar ni hacer algo específico para estar juntos.",

    steps: [
        {
            emoji: "🪑",
            title: "Ubicarse",
            text: "Elijan un lugar cómodo y siéntense juntos de una manera que resulte natural para ambos."
        },
        {
            emoji: "🤍",
            title: "Permanecer",
            text: "Durante unos minutos, permanezcan juntos sin buscar un tema de conversación ni realizar otra actividad."
        },
        {
            emoji: "🌿",
            title: "Notar",
            text: "Observen qué ocurre durante el silencio: comodidad, ganas de hablar, pensamientos, sensaciones o simplemente la presencia de la otra persona."
        },
        {
            emoji: "👀",
            title: "Mirarse",
            text: "Antes de terminar, pueden mirarse durante unos instantes y reconocer que han compartido ese tiempo sin necesidad de llenarlo."
        }
    ],

    question:
        "¿Qué descubriste sobre compartir silencio con tu pareja?"
},

{
    id: "conectar-23",
    journey: "conectar",
    day: 23,
    title: "REPARAR UN PEQUEÑO DESENCUENTRO",
    duration: "15–20 min",
    moment: "En casa o en un lugar tranquilo, durante un momento en el que ambos estén disponibles para acercarse después de una pequeña fricción.",
    description:
        "Reparar no siempre significa resolver completamente un desacuerdo. A veces comienza con reconocer lo ocurrido y realizar un gesto que permita volver a acercarse.",

    steps: [
        {
            emoji: "🔎",
            title: "Elegir",
            text: "Piensen en un pequeño desencuentro reciente que ya haya pasado y que puedan recordar sin volver a entrar en una discusión."
        },
        {
            emoji: "🌿",
            title: "Reconocer",
            text: "Cada persona identifica qué podría haber hecho diferente para cuidar mejor ese momento."
        },
        {
            emoji: "💬",
            title: "Acercarse",
            text: "Cada persona expresa brevemente aquello que reconoce y, si corresponde, ofrece una disculpa concreta o un gesto de reparación."
        },
        {
            emoji: "🤝",
            title: "Hacer",
            text: "Elijan una pequeña acción que represente ese acercamiento: retomar una actividad juntos, darse un abrazo, preparar algo, acompañarse o simplemente permanecer juntos unos minutos."
        }
    ],

    question:
        "¿Qué notaste cuando intentaron acercarse después de un pequeño desencuentro?"
},

{
    id: "conectar-24",
    journey: "conectar",
    day: 24,
    title: "PEDIR ALGO Y ESCUCHAR LA RESPUESTA",
    duration: "15–20 min",
    moment: "En un espacio tranquilo, durante un momento en el que puedan hacer una petición sencilla sin que exista presión por resolverla inmediatamente.",
    description:
        "Pedir algo a nuestra pareja también implica permitir que responda desde sus propias posibilidades y necesidades. Hoy van a practicar ambas partes sin asumir de antemano cuál será la respuesta.",

    steps: [
        {
            emoji: "💡",
            title: "Elegir",
            text: "Cada persona piensa en una petición pequeña que le gustaría hacerle a su pareja y que pueda plantearse en este momento."
        },
        {
            emoji: "💬",
            title: "Pedir",
            text: "Una persona realiza su petición de manera clara y concreta, sin anticipar cómo debería responder la otra."
        },
        {
            emoji: "👂",
            title: "Recibir",
            text: "Quien recibe escucha la petición y responde con honestidad. Puede aceptar, proponer una alternativa o decir que en este momento no puede hacerlo."
        },
        {
            emoji: "🔄",
            title: "Negociar",
            text: "Si la respuesta no coincide con lo esperado, intenten encontrar juntos una alternativa que ambos puedan asumir. Después cambien los roles."
        }
    ],

    question:
        "¿Qué descubriste sobre pedir algo cuando permites que la otra persona responda con libertad?"
},

{
    id: "conectar-25",
    journey: "conectar",
    day: 25,
    title: "REÍRNOS JUNTOS",
    duration: "10–20 min",
    moment: "En casa o en un lugar donde puedan relajarse y hacer algo divertido sin interrupciones.",
    description:
        "El juego y el humor también forman parte de la conexión. Hoy van a buscar un momento de diversión compartida sin convertirlo en una actividad que tenga que salir perfecta.",

    steps: [
        {
            emoji: "🎲",
            title: "Elegir",
            text: "Elijan algo que pueda resultarles divertido a ambos: un juego, un reto sencillo, recordar una situación graciosa, hacer algo absurdo o inventar una pequeña competencia."
        },
        {
            emoji: "😄",
            title: "Jugar",
            text: "Dedíquense unos minutos a hacerlo sin preocuparse por quién gana, quién lo hace mejor o si resulta realmente gracioso."
        },
        {
            emoji: "🙃",
            title: "Soltar",
            text: "Permítanse hacer algo diferente a lo habitual y observar qué ocurre cuando dejan espacio para la espontaneidad."
        },
        {
            emoji: "🤍",
            title: "Guardar",
            text: "Al terminar, elijan qué momento de la experiencia les gustaría recordar."
        }
    ],

    question:
        "¿Qué ocurrió entre ustedes cuando dejaron espacio para jugar y divertirse?"
},

{
    id: "conectar-26",
    journey: "conectar",
    day: 26,
    title: "CREAR ALGO ENTRE LOS DOS",
    duration: "20–30 min",
    moment: "En casa o en un espacio donde tengan materiales sencillos para crear algo durante un momento sin prisas.",
    description:
        "Crear algo juntos permite que cada persona aporte ideas, tome decisiones y descubra cómo funciona la colaboración entre ustedes.",

    steps: [
        {
            emoji: "💡",
            title: "Imaginar",
            text: "Elijan algo que puedan crear juntos con lo que tengan disponible: una receta, un dibujo, una playlist, una decoración, una fotografía, un pequeño proyecto o cualquier otra creación."
        },
        {
            emoji: "🤝",
            title: "Construir",
            text: "Empiecen a hacerlo sin decidir de antemano cada detalle. Permitan que las ideas de una persona modifiquen o amplíen las de la otra."
        },
        {
            emoji: "🔄",
            title: "Adaptar",
            text: "Si aparecen diferencias en la manera de hacerlo, busquen una forma de incorporarlas en lugar de decidir inmediatamente cuál propuesta debe ganar."
        },
        {
            emoji: "✨",
            title: "Terminar",
            text: "Cuando hayan terminado, observen qué construyeron a partir de las ideas de ambos."
        }
    ],

    question:
        "¿Qué descubriste sobre la manera en que construyen algo cuando cada persona aporta su propia forma de hacerlo?"
},

{
    id: "conectar-27",
    journey: "conectar",
    day: 27,
    title: "DAR ESPACIO Y VOLVER A ENCONTRARNOS",
    duration: "20–30 min",
    moment: "Durante un momento del día en el que cada persona pueda disponer de un pequeño espacio propio y después reencontrarse.",
    description:
        "La conexión no requiere estar juntos todo el tiempo. También puede existir cuando cada persona tiene espacio para sí y después vuelve a encontrarse con la otra.",

    steps: [
        {
            emoji: "🌿",
            title: "Elegir",
            text: "Cada persona decide una actividad breve que quiera realizar por su cuenta durante este momento."
        },
        {
            emoji: "🚶",
            title: "Separarse",
            text: "Tómense un tiempo para hacer cada uno aquello que eligió, sin necesidad de mantenerse en contacto durante ese intervalo."
        },
        {
            emoji: "🤍",
            title: "Volver",
            text: "Después del tiempo acordado, vuelvan a encontrarse y permanezcan unos minutos juntos."
        },
        {
            emoji: "💬",
            title: "Compartir",
            text: "Cuéntenle brevemente a la otra persona cómo se sintió tener ese espacio propio y después volver a encontrarse."
        }
    ],

    question:
        "¿Qué notaste sobre la conexión entre ustedes después de tener un momento para cada persona?"
},

{
    id: "conectar-28",
    journey: "conectar",
    day: 28,
    title: "ELEGIR ALGO JUNTOS",
    duration: "20–30 min",
    moment: "En casa o en un lugar donde puedan realizar una actividad compartida durante un momento sin prisas.",
    description:
        "Hacer algo juntos implica más que llegar a una decisión. También supone escuchar propuestas, incorporar preferencias diferentes y construir una opción que tenga algo de cada persona.",

    steps: [
        {
            emoji: "💡",
            title: "Proponer",
            text: "Elijan algo que puedan hacer juntos durante los próximos días: preparar una comida, elegir un lugar, planear una salida, organizar un espacio o crear un pequeño plan compartido."
        },
        {
            emoji: "🧩",
            title: "Aportar",
            text: "Cada persona propone qué le gustaría incluir en ese plan y qué considera importante."
        },
        {
            emoji: "🔄",
            title: "Combinar",
            text: "Busquen una manera de incorporar elementos de ambas propuestas, aunque tengan que modificar parte de cada una."
        },
        {
            emoji: "🤝",
            title: "Concretar",
            text: "Lleguen a una propuesta que ambos puedan asumir y definan cómo la llevarán a cabo."
        }
    ],

    question:
        "¿Qué descubriste sobre la manera en que construyen algo cuando las preferencias de ambos tienen un lugar?"
},

{
    id: "conectar-29",
    journey: "conectar",
    day: 29,
    title: "RECONOCER LO QUE HEMOS CONSTRUIDO",
    duration: "15–20 min",
    moment: "En un lugar que tenga algún significado para ustedes, durante un momento tranquilo en el que puedan recordar su historia.",
    description:
        "Una relación no solo está formada por los momentos que recuerdan, sino también por aquello que han ido creando con el tiempo: lugares, costumbres, decisiones, experiencias y maneras propias de compartir la vida.",

    steps: [
        {
            emoji: "🕰️",
            title: "Recorrer",
            text: "Cada persona piensa en diferentes etapas o momentos de la historia que han compartido."
        },
        {
            emoji: "📸",
            title: "Elegir",
            text: "Elijan tres momentos que representen algo importante de lo que han construido como pareja. Pueden ser momentos grandes o experiencias aparentemente pequeñas."
        },
        {
            emoji: "💬",
            title: "Contar",
            text: "Compartan por qué eligieron esos momentos y qué representan para ustedes actualmente."
        },
        {
            emoji: "🌱",
            title: "Proyectar",
            text: "Para terminar, cada persona elige algo de su historia que le gustaría seguir construyendo o creando en el futuro."
        }
    ],

    question:
        "¿Qué parte de la historia que han construido juntos adquirió un significado diferente al volver a mirarla desde el presente?"
},

{
    id: "conectar-30",
    journey: "conectar",
    day: 30,
    title: "CREAR NUESTRO MOMENTO DE CONEXIÓN",
    duration: "20–30 min",
    moment: "En un lugar que ambos elijan, durante un momento que puedan reservar especialmente para compartir.",
    description:
        "Después de experimentar diferentes formas de acercarse, ahora van a crear una experiencia que tenga sentido para ustedes. No existe una única manera de conectar; cada pareja puede descubrir la suya.",

    steps: [
        {
            emoji: "💡",
            title: "Recordar",
            text: "Piensen en alguna de las experiencias de este recorrido que les haya permitido sentirse especialmente conectados."
        },
        {
            emoji: "🧩",
            title: "Elegir",
            text: "Identifiquen qué elemento hizo diferente ese momento: conversar, jugar, hacer algo juntos, escucharse, estar en silencio, cuidarse, compartir tiempo o cualquier otra cosa."
        },
        {
            emoji: "🤝",
            title: "Crear",
            text: "Utilicen ese elemento para diseñar ahora un momento propio de conexión. Pueden repetir algo que funcionó, combinar varias ideas o inventar una experiencia completamente nueva."
        },
        {
            emoji: "🌿",
            title: "Vivir",
            text: "Realicen el momento que crearon sin convertirlo en una tarea por completar. Permanezcan atentos a cómo se sienten al compartirlo."
        }
    ],

    question:
        "¿Qué forma de conexión quieren seguir creando y cuidando en su relación?"
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

    {
        id: "limites-3",
        journey: "limites",
        day: 3,
        title: "PEDIR ALGO QUE NECESITO",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que otra persona pueda ayudarte con algo concreto.",
        description:
            "Hoy vas a experimentar qué ocurre cuando expresas directamente algo que necesitas en lugar de esperar a que la otra persona lo adivine.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en algo sencillo que necesites de otra persona y que sea apropiado pedir."
            },
            {
                emoji: "🗣️",
                title: "Pide",
                text: "Exprésalo de manera clara y concreta, diciendo qué necesitas y, si corresponde, cómo podría ayudarte."
            },
            {
                emoji: "⏸️",
                title: "Espera",
                text: "Después de pedirlo, permite que la otra persona responda sin adelantarte a su respuesta."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué ocurre en ti mientras haces la petición y después de escuchar la respuesta."
            }
        ],

        question:
            "¿Qué descubriste al pedir directamente algo que necesitabas?"
    },

    {
        id: "limites-4",
        journey: "limites",
        day: 4,
        title: "DECIR CÓMO QUIERO QUE SEA",
        duration: "10–15 min",
        moment: "En una situación cotidiana en la que puedas expresar cómo prefieres que se haga algo.",
        description:
            "Hoy vas a experimentar qué ocurre cuando expresas de manera clara cómo quieres que sea una situación, en lugar de adaptarte automáticamente a la forma de otra persona.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Busca una situación sencilla en la que tengas una preferencia sobre cómo quieres que se haga algo."
            },
            {
                emoji: "💭",
                title: "Define",
                text: "Antes de adaptarte a la propuesta de otra persona, identifica qué forma te resulta más cómoda o adecuada."
            },
            {
                emoji: "🗣️",
                title: "Exprésalo",
                text: "Comunica tu preferencia de manera clara y respetuosa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en cómo te sientes al expresar lo que quieres y qué ocurre si la otra persona tiene una preferencia diferente."
            }
        ],

        question:
            "¿Qué ocurrió cuando expresaste cómo querías que fuera algo?"
    },

    {
        id: "limites-5",
        journey: "limites",
        day: 5,
        title: "NO ACEPTAR SOLO POR QUEDAR BIEN",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que puedas aceptar o rechazar algo sin consecuencias importantes.",
        description:
            "Hoy vas a observar qué ocurre cuando tienes la posibilidad de aceptar algo, pero eliges hacerlo solo si realmente quieres.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Presta atención a alguna propuesta, invitación o petición que recibas durante el día."
            },
            {
                emoji: "⏸️",
                title: "Detente",
                text: "Antes de responder, pregúntate si quieres aceptar o si estás pensando hacerlo únicamente para evitar incomodar a la otra persona."
            },
            {
                emoji: "🎯",
                title: "Decide",
                text: "Si realmente no quieres aceptar y la situación lo permite, recházalo de manera clara y respetuosa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después, fíjate en qué pensamientos o sensaciones aparecen al haber respondido de acuerdo con lo que realmente querías."
            }
        ],

        question:
            "¿Qué notaste al diferenciar entre aceptar porque quieres y aceptar solo para quedar bien?"
    },

    {
        id: "limites-6",
        journey: "limites",
        day: 6,
        title: "PEDIR MÁS TIEMPO",
        duration: "10–15 min",
        moment: "Ante una situación cotidiana en la que alguien espere una respuesta, una decisión o una acción de tu parte.",
        description:
            "Hoy vas a experimentar qué ocurre cuando reconoces que necesitas más tiempo antes de responder o actuar.",

        steps: [
            {
                emoji: "🔎",
                title: "Identifica",
                text: "Piensa en una situación sencilla en la que puedas necesitar unos minutos, unas horas o más tiempo para responder."
            },
            {
                emoji: "⏸️",
                title: "Reconoce",
                text: "Antes de dar una respuesta inmediata, observa si realmente estás preparado para hacerlo."
            },
            {
                emoji: "🗣️",
                title: "Pide",
                text: "Si lo necesitas, expresa que prefieres contar con más tiempo y, si es posible, indica cuándo podrás responder."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué ocurre después de pedir ese tiempo: qué sientes, qué piensas y qué haces con ese espacio."
            }
        ],

        question:
            "¿Qué descubriste al darte permiso para no responder inmediatamente?"
    },

    {
        id: "limites-7",
        journey: "limites",
        day: 7,
        title: "DECIDIR CUÁNDO QUIERO RESPONDER",
        duration: "10–20 min",
        moment: "Durante un día en el que recibas mensajes, llamadas o solicitudes que no requieran una respuesta inmediata.",
        description:
            "Hoy vas a observar qué ocurre cuando eliges conscientemente cuándo responder en lugar de hacerlo automáticamente.",

        steps: [
            {
                emoji: "📱",
                title: "Detecta",
                text: "Cuando recibas un mensaje, llamada o solicitud, observa si aparece la necesidad de responder inmediatamente."
            },
            {
                emoji: "⏸️",
                title: "Pausa",
                text: "Si no necesitas responder en ese momento, deja pasar unos minutos y continúa con lo que estabas haciendo."
            },
            {
                emoji: "🧭",
                title: "Elige",
                text: "Decide cuándo quieres responder, teniendo en cuenta lo que necesitas hacer y el tiempo que tienes disponible."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué aparece durante la espera y cómo te sientes cuando respondes en el momento que tú elegiste."
            }
        ],

        question:
            "¿Qué notaste al elegir cuándo responder en lugar de hacerlo automáticamente?"
    },

    {
        id: "limites-8",
        journey: "limites",
        day: 8,
        title: "GUARDAR TIEMPO PARA MÍ",
        duration: "15–30 min",
        moment: "En un momento del día en el que puedas disponer de un espacio personal sin descuidar una responsabilidad necesaria.",
        description:
            "Hoy vas a experimentar qué ocurre cuando reservas intencionalmente un momento para ti y proteges ese espacio de otras actividades.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Busca un momento disponible de tu día que puedas dedicarte a ti."
            },
            {
                emoji: "🎯",
                title: "Reserva",
                text: "Decide qué quieres hacer durante ese tiempo y procura mantenerlo libre de otras tareas."
            },
            {
                emoji: "🚫",
                title: "Protege",
                text: "Si aparece una actividad que puede esperar, permite que espere y conserva el espacio que habías reservado."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en cómo te sientes al permitir que un momento de tu día esté destinado a ti."
            }
        ],

        question:
            "¿Qué cambió cuando reservaste un espacio de tu día para ti y decidiste mantenerlo?"
    },

    {
        id: "limites-9",
        journey: "limites",
        day: 9,
        title: "DECIR QUE AHORA NO PUEDO",
        duration: "10–20 min",
        moment: "Ante una petición o propuesta cotidiana que llegue en un momento en el que realmente no puedas atenderla.",
        description:
            "Hoy vas a practicar responder de acuerdo con lo que puedes hacer en ese momento, sin asumir automáticamente una nueva tarea.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Durante el día, presta atención a alguna petición que llegue cuando estés ocupado o cuando no tengas disponibilidad para atenderla."
            },
            {
                emoji: "🧭",
                title: "Comprueba",
                text: "Antes de responder, observa si realmente tienes tiempo, energía o disponibilidad para hacerte cargo en ese momento."
            },
            {
                emoji: "🗣️",
                title: "Exprésalo",
                text: "Si no puedes, comunícalo de forma clara. Puedes indicar que ahora no puedes hacerlo y, si corresponde, proponer otro momento."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Después de responder, fíjate en qué ocurre en ti y si aparece la necesidad de cambiar tu respuesta."
            }
        ],

        question:
            "¿Qué descubriste al reconocer y expresar que en ese momento no podías?"
    },

    {
        id: "limites-10",
        journey: "limites",
        day: 10,
        title: "CAMBIAR DE OPINIÓN",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que todavía puedas modificar una decisión o preferencia.",
        description:
            "Hoy vas a experimentar qué ocurre cuando reconoces que ya no quieres lo mismo que habías elegido anteriormente.",

        steps: [
            {
                emoji: "🔎",
                title: "Detecta",
                text: "Piensa en alguna elección reciente que hayas hecho y pregúntate si todavía estás de acuerdo con ella."
            },
            {
                emoji: "💭",
                title: "Revisa",
                text: "Observa si tus preferencias, necesidades o circunstancias han cambiado desde que tomaste esa decisión."
            },
            {
                emoji: "🔄",
                title: "Cambia",
                text: "Si todavía tienes posibilidad de hacerlo y realmente quieres otra cosa, modifica tu elección."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en cómo te sientes al permitirte cambiar de opinión y qué pensamientos aparecen después."
            }
        ],

        question:
            "¿Qué ocurrió cuando te permitiste cambiar de opinión porque ya no querías lo mismo?"
    },

    {
        id: "limites-11",
        journey: "limites",
        day: 11,
        title: "DECIR LO QUE NO ME GUSTA",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que algo que hace o propone otra persona no te resulte agradable.",
        description:
            "Hoy vas a experimentar qué ocurre cuando expresas algo que no te gusta en lugar de adaptarte automáticamente.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Durante el día, presta atención a alguna situación sencilla en la que algo no te resulte agradable."
            },
            {
                emoji: "⏸️",
                title: "Reconoce",
                text: "Antes de responder, identifica qué es exactamente lo que no te gusta de esa situación."
            },
            {
                emoji: "🗣️",
                title: "Exprésalo",
                text: "Si es apropiado, comunícalo de manera clara y respetuosa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después, fíjate en cómo te sientes al haber expresado lo que no te gusta y qué pensamientos aparecen."
            }
        ],

        question:
            "¿Qué ocurrió cuando expresaste algo que no te gustaba?"
    },

    {
        id: "limites-12",
        journey: "limites",
        day: 12,
        title: "PEDIR QUE CAMBIEN ALGO",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que otra persona haga algo que podría modificar sin que ello implique un riesgo para nadie.",
        description:
            "Hoy vas a practicar pedir un cambio concreto cuando una situación no te resulta adecuada.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Identifica una situación sencilla en la que te gustaría que otra persona hiciera algo de una manera diferente."
            },
            {
                emoji: "💭",
                title: "Define",
                text: "Piensa qué cambio concreto quieres pedir, evitando convertirlo en una crítica general."
            },
            {
                emoji: "🗣️",
                title: "Pide",
                text: "Expresa de manera clara qué te gustaría que cambiara."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué ocurre después de hacer la petición y cómo te sientes al haberla expresado."
            }
        ],

        question:
            "¿Qué descubriste al pedir directamente un cambio que necesitabas?"
    },

    {
        id: "limites-13",
        journey: "limites",
        day: 13,
        title: "DECIR HASTA DÓNDE PUEDO LLEGAR",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que otra persona pueda pedirte más tiempo, esfuerzo o disponibilidad de la que quieres ofrecer.",
        description:
            "Hoy vas a experimentar qué ocurre cuando decides cuánto estás dispuesto a ofrecer y lo comunicas de manera clara.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Presta atención a una petición o situación en la que puedas elegir cuánto tiempo, esfuerzo o disponibilidad quieres dedicar."
            },
            {
                emoji: "🧭",
                title: "Decide",
                text: "Antes de responder, identifica qué estás dispuesto a ofrecer y qué prefieres dejar fuera."
            },
            {
                emoji: "🗣️",
                title: "Exprésalo",
                text: "Comunica con claridad hasta dónde quieres llegar en esa situación."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué aparece después de expresar tu límite: tranquilidad, incomodidad, culpa, duda u otra sensación."
            }
        ],

        question:
            "¿Qué notaste al decidir cuánto querías ofrecer y expresarlo?"
    },

    {
        id: "limites-14",
        journey: "limites",
        day: 14,
        title: "DEJAR DE JUSTIFICARME DE MÁS",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que tengas que rechazar algo o expresar que no puedes hacerlo.",
        description:
            "Hoy vas a observar qué ocurre cuando das una respuesta clara sin sentir que necesitas explicar cada detalle.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Cuando tengas que rechazar una petición o explicar que no puedes hacer algo, presta atención a las razones que empiezas a dar."
            },
            {
                emoji: "⏸️",
                title: "Pausa",
                text: "Pregúntate qué parte de tu explicación es realmente necesaria para comunicar tu respuesta."
            },
            {
                emoji: "🗣️",
                title: "Responde",
                text: "Da una respuesta clara y suficiente, evitando añadir explicaciones únicamente para conseguir que la otra persona la acepte."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en qué sientes después de responder de esta manera."
            }
        ],

        question:
            "¿Qué ocurrió cuando dejaste de explicar tu decisión más de lo necesario?"
    },

    {
        id: "limites-15",
        journey: "limites",
        day: 15,
        title: "NO RESPONDER ENSEGUIDA",
        duration: "10–20 min",
        moment: "Ante un mensaje, llamada o petición que no requiera una respuesta inmediata.",
        description:
            "Hoy vas a experimentar qué ocurre cuando dejas pasar un tiempo antes de responder a algo que podría esperar.",

        steps: [
            {
                emoji: "📱",
                title: "Detecta",
                text: "Cuando recibas un mensaje o petición, observa si aparece automáticamente la necesidad de responder."
            },
            {
                emoji: "⏸️",
                title: "Espera",
                text: "Si la situación lo permite, deja pasar un momento antes de contestar y continúa con lo que estabas haciendo."
            },
            {
                emoji: "🧭",
                title: "Elige",
                text: "Decide cuándo quieres responder, teniendo en cuenta tus actividades y disponibilidad."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué pensamientos o sensaciones aparecen durante ese intervalo."
            }
        ],

        question:
            "¿Qué notaste al permitirte responder en el momento que tú elegiste?"
    },

    {
        id: "limites-16",
        journey: "limites",
        day: 16,
        title: "PEDIR UN POCO DE ESPACIO",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que necesites disponer de un momento o lugar para ti.",
        description:
            "Hoy vas a experimentar qué ocurre cuando expresas que necesitas un poco de espacio antes de esperar a que la otra persona lo note.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Identifica un momento en el que prefieras tener un poco de espacio para ti."
            },
            {
                emoji: "💭",
                title: "Reconoce",
                text: "Observa qué necesitas concretamente: unos minutos a solas, tranquilidad, distancia o simplemente menos interacción."
            },
            {
                emoji: "🗣️",
                title: "Pide",
                text: "Si es apropiado, comunícalo de manera clara y respetuosa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después, fíjate en cómo te sientes al haber pedido ese espacio y qué ocurre mientras lo tienes."
            }
        ],

        question:
            "¿Qué ocurrió cuando pediste un poco de espacio antes de necesitar alejarte por completo?"
    },

    {
        id: "limites-17",
        journey: "limites",
        day: 17,
        title: "DECIR QUE NECESITO ESTAR SOLO",
        duration: "10–20 min",
        moment: "En un momento en el que necesites un tiempo personal y puedas tomarlo sin descuidar una responsabilidad necesaria.",
        description:
            "Hoy vas a experimentar qué ocurre cuando expresas directamente que necesitas pasar un momento a solas.",

        steps: [
            {
                emoji: "🔎",
                title: "Reconoce",
                text: "Identifica si durante el día aparece un momento en el que realmente quieras estar solo."
            },
            {
                emoji: "⏸️",
                title: "Comprueba",
                text: "Observa si puedes disponer de ese tiempo sin dejar de atender algo que requiera tu atención."
            },
            {
                emoji: "🗣️",
                title: "Exprésalo",
                text: "Si es apropiado, comunica a la otra persona que necesitas un momento a solas."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en cómo te sientes al pedir ese espacio y qué ocurre cuando finalmente dispones de él."
            }
        ],

        question:
            "¿Qué descubriste al expresar directamente que necesitabas estar solo?"
    },

    {
        id: "limites-18",
        journey: "limites",
        day: 18,
        title: "DEJAR QUE ME AYUDEN",
        duration: "10–20 min",
        moment: "Ante una tarea o situación cotidiana en la que otra persona pueda ayudarte.",
        description:
            "Hoy vas a experimentar qué ocurre cuando permites que otra persona se haga cargo de una parte, en lugar de asumir que tienes que hacerlo todo por tu cuenta.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Identifica una tarea concreta en la que otra persona pueda colaborar contigo."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Antes de hacerlo todo por tu cuenta, fíjate si aparece la idea de que deberías encargarte tú de todo."
            },
            {
                emoji: "🗣️",
                title: "Permite",
                text: "Si la situación lo permite, acepta la ayuda o deja que la otra persona se haga cargo de una parte."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué sientes al dejar de hacerte cargo de todo y permitir que otra persona participe."
            }
        ],

        question:
            "¿Qué descubriste al permitir que otra persona se hiciera cargo de una parte?"
    },

    {
        id: "limites-19",
        journey: "limites",
        day: 19,
        title: "DEJAR UNA CONVERSACIÓN PARA DESPUÉS",
        duration: "10–20 min",
        moment: "Durante una conversación que pueda continuar en otro momento sin dejar una situación urgente sin atender.",
        description:
            "Hoy vas a experimentar qué ocurre cuando reconoces que una conversación puede esperar y decides retomarla después.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Presta atención a una conversación en la que notes que necesitas parar, tomar distancia o disponer de más tiempo antes de continuar."
            },
            {
    emoji: "⏸️",
    title: "Reconoce",
    text: "Observa qué ocurre en ti antes de seguir hablando y pregúntate si realmente necesitas continuar en ese momento."
},
            {
                emoji: "🗣️",
                title: "Propón",
                text: "Si es apropiado, comunica que prefieres continuar la conversación en otro momento y, si es posible, acuerda cuándo retomarla."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en cómo te sientes después de haber puesto una pausa a la conversación."
            }
        ],

        question:
            "¿Qué cambió cuando te permitiste dejar una conversación para después?"
    },

    {
        id: "limites-20",
        journey: "limites",
        day: 20,
        title: "DECIRLO ANTES DE MOLESTARME",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que algo pueda empezar a incomodarte antes de convertirse en un conflicto.",
        description:
            "Hoy vas a experimentar qué ocurre cuando expresas una molestia mientras todavía puedes comunicarla con claridad.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Durante el día, presta atención a una situación que empiece a incomodarte."
            },
            {
                emoji: "⏸️",
                title: "Reconoce",
                text: "Antes de acumular más molestia, detente y observa qué está ocurriendo y qué necesitas que cambie."
            },
            {
                emoji: "🗣️",
                title: "Exprésalo",
                text: "Si la situación lo permite, comunica lo que te incomoda de manera clara y respetuosa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Después, fíjate en qué ocurre al haberlo expresado antes de que la molestia aumentara."
            }
        ],

        question:
            "¿Qué notaste al expresar una molestia antes de que se acumulara?"
    },

    {
        id: "limites-21",
        journey: "limites",
        day: 21,
        title: "REPETIR UN NO",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que alguien insista después de que ya hayas expresado que no quieres algo.",
        description:
            "Hoy vas a experimentar qué ocurre cuando mantienes una respuesta que ya has expresado, aunque la otra persona vuelva a preguntar o insistir.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Durante el día, presta atención a alguna situación en la que ya hayas dicho que no y aparezca nuevamente la petición o propuesta."
            },
            {
                emoji: "⏸️",
                title: "Recuerda",
                text: "Antes de cambiar tu respuesta, pregúntate si realmente has cambiado de opinión o si estás reaccionando a la insistencia."
            },
            {
                emoji: "🗣️",
                title: "Repite",
                text: "Si sigues sin quererlo y la situación lo permite, vuelve a expresar tu “no” de manera clara y respetuosa."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en qué ocurre dentro de ti al mantener tu respuesta: pensamientos, emociones, sensaciones o ganas de ceder."
            }
        ],

        question:
            "¿Qué notaste al mantener tu respuesta aunque la otra persona insistiera?"
    },

    {
        id: "limites-22",
        journey: "limites",
        day: 22,
        title: "MANTENER UN LÍMITE",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que hayas expresado un límite y tengas la posibilidad de mantenerlo.",
        description:
            "Hoy vas a observar qué ocurre cuando mantienes un límite que ya has expresado, incluso si después aparece la duda o la tentación de modificarlo.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Piensa en una situación reciente en la que hayas dicho qué quieres, qué no quieres o qué estás dispuesto a hacer."
            },
            {
                emoji: "💭",
                title: "Revisa",
                text: "Pregúntate si ese límite sigue teniendo sentido para ti en este momento."
            },
            {
                emoji: "🧭",
                title: "Mantén",
                text: "Si continúa siendo adecuado para ti, actúa de acuerdo con él cuando vuelva a presentarse una situación similar."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué aparece al mantenerlo: tranquilidad, incomodidad, culpa, duda, seguridad u otra sensación."
            }
        ],

        question:
            "¿Qué notaste al mantener un límite que seguía siendo importante para ti?"
    },

    {
        id: "limites-23",
        journey: "limites",
        day: 23,
        title: "NO CEDER POR PRESIÓN",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que puedas mantener una preferencia sin que hacerlo implique un riesgo para ti o para otra persona.",
        description:
            "Hoy vas a observar qué ocurre cuando reconoces una presión para cambiar de postura y decides si realmente quieres hacerlo.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Presta atención a una situación en la que alguien intente convencerte, insista o espere que aceptes algo."
            },
            {
                emoji: "⏸️",
                title: "Pausa",
                text: "Antes de responder, pregúntate si quieres cambiar de opinión o si estás pensando hacerlo solamente para dejar de sentir la presión."
            },
            {
                emoji: "🧭",
                title: "Decide",
                text: "Si sigues queriendo lo mismo y la situación lo permite, mantén tu postura."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué ocurre después: qué sientes, qué piensas y cómo respondes ante la presión."
            }
        ],

        question:
            "¿Qué descubriste sobre tu forma de responder cuando sentiste presión para ceder?"
    },

    {
        id: "limites-24",
        journey: "limites",
        day: 24,
        title: "TOLERAR LA REACCIÓN DE OTRA PERSONA",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que puedas expresar un límite y la otra persona pueda reaccionar de una manera que no controles.",
        description:
            "Hoy vas a experimentar qué ocurre cuando expresas un límite y permites que la otra persona tenga su propia reacción sin modificar inmediatamente lo que necesitas.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Identifica una situación sencilla en la que necesites expresar una preferencia, un límite o una negativa."
            },
            {
                emoji: "🗣️",
                title: "Exprésalo",
                text: "Comunica lo que necesitas de manera clara y respetuosa."
            },
            {
                emoji: "⏸️",
                title: "Permite",
                text: "Si la otra persona muestra molestia, desacuerdo o incomodidad, deja que esa reacción ocurra sin intentar resolverla inmediatamente."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en qué aparece en ti y si surge la necesidad de cambiar lo que dijiste para evitar la reacción de la otra persona."
            }
        ],

        question:
            "¿Qué descubriste al expresar un límite sin intentar controlar la reacción de la otra persona?"
    },

    {
        id: "limites-25",
        journey: "limites",
        day: 25,
        title: "ACEPTAR UN NO",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que otra persona pueda rechazar una propuesta, petición o invitación tuya.",
        description:
            "Hoy vas a experimentar qué ocurre cuando recibes un “no” y respetas la decisión de la otra persona.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Durante el día, identifica alguna situación en la que hagas una propuesta, petición o invitación y exista la posibilidad de recibir una respuesta negativa."
            },
            {
                emoji: "⏸️",
                title: "Escucha",
                text: "Cuando la otra persona responda, presta atención a su respuesta sin intentar anticiparla ni modificarla."
            },
            {
                emoji: "🧭",
                title: "Acepta",
                text: "Si responde que no, permite que esa respuesta sea suficiente sin insistir, presionar o buscar una explicación adicional."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué ocurre dentro de ti al recibir un “no” y respetarlo."
            }
        ],

        question:
            "¿Qué notaste al recibir un “no” y permitir que la otra persona mantuviera su decisión?"
    },

    {
        id: "limites-26",
        journey: "limites",
        day: 26,
        title: "RESPETAR EL ESPACIO DE OTRA PERSONA",
        duration: "10–20 min",
        moment: "Durante un momento en el que otra persona necesite tiempo, distancia o privacidad.",
        description:
            "Hoy vas a practicar reconocer el espacio que otra persona necesita y observar qué ocurre cuando decides respetarlo.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Presta atención a alguna situación en la que otra persona necesite estar sola, concentrarse, descansar o disponer de un momento propio."
            },
            {
                emoji: "⏸️",
                title: "Reconoce",
                text: "Observa si aparece la necesidad de acercarte, preguntar, insistir o intervenir."
            },
            {
                emoji: "🧭",
                title: "Respeta",
                text: "Si la situación lo permite, deja que la otra persona tenga ese espacio sin intentar ocuparlo inmediatamente."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en cómo te sientes al respetar el límite de otra persona y qué pensamientos aparecen."
            }
        ],

        question:
            "¿Qué descubriste al respetar el espacio que otra persona necesitaba?"
    },

    {
        id: "limites-27",
        journey: "limites",
        day: 27,
        title: "DEJAR DE HACER ALGO QUE YA NO QUIERO HACER",
        duration: "15–30 min",
        moment: "Ante una actividad, compromiso o hábito cotidiano que ya no quieras mantener y que puedas modificar sin consecuencias importantes.",
        description:
            "Hoy vas a explorar qué ocurre cuando reconoces que ya no quieres continuar con algo y te permites dejarlo.",

        steps: [
            {
                emoji: "👀",
                title: "Detecta",
                text: "Piensa en algo que continúas haciendo principalmente porque ya estás acostumbrado, porque lo asumiste como compromiso o porque te cuesta dejarlo."
            },
            {
                emoji: "💭",
                title: "Revisa",
                text: "Pregúntate si todavía quieres seguir haciéndolo y qué te lleva a mantenerlo."
            },
            {
                emoji: "🎯",
                title: "Decide",
                text: "Si puedes hacerlo sin perjudicarte ni perjudicar a otra persona, elige qué quieres dejar de hacer o reducir."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en qué aparece al tomar distancia de algo que ya no quieres mantener."
            }
        ],

        question:
            "¿Qué descubriste al reconocer que ya no querías seguir haciendo algo?"
    },

    {
        id: "limites-28",
        journey: "limites",
        day: 28,
        title: "CAMBIAR UN LÍMITE QUE YA NO ME SIRVE",
        duration: "15–30 min",
        moment: "En una situación cotidiana en la que exista una regla personal o límite que hayas establecido y que puedas revisar.",
        description:
            "Hoy vas a observar que tus límites también pueden cambiar cuando cambian tus necesidades o circunstancias.",

        steps: [
            {
                emoji: "🔎",
                title: "Identifica",
                text: "Piensa en un límite que hayas establecido para ti y que actualmente quizá ya no necesites mantener de la misma manera."
            },
            {
                emoji: "💭",
                title: "Revisa",
                text: "Observa qué ha cambiado desde que estableciste ese límite y cómo te relacionas actualmente con esa situación."
            },
            {
                emoji: "🔄",
                title: "Ajusta",
                text: "Si realmente ya no te resulta útil y puedes hacerlo de forma segura, modifica ese límite de una manera que se ajuste mejor a lo que necesitas ahora."
            },
            {
                emoji: "🧭",
                title: "Observa",
                text: "Fíjate en cómo te sientes al permitir que un límite también pueda cambiar."
            }
        ],

        question:
            "¿Qué descubriste al reconocer que un límite también puede cambiar?"
    },

    {
        id: "limites-29",
        journey: "limites",
        day: 29,
        title: "ACTUAR DE ACUERDO CON MI LÍMITE",
        duration: "10–20 min",
        moment: "En una situación cotidiana en la que necesites poner en práctica un límite que ya has reconocido.",
        description:
            "Hoy vas a llevar un límite de las palabras a una acción concreta, observando qué ocurre cuando actúas de acuerdo con lo que has decidido cuidar.",

        steps: [
            {
                emoji: "🔎",
                title: "Identifica",
                text: "Piensa en un límite que tengas claro y en una situación cotidiana en la que puedas ponerlo en práctica."
            },
            {
                emoji: "🧭",
                title: "Decide",
                text: "Reconoce qué necesitas hacer tú para actuar de acuerdo con ese límite."
            },
            {
                emoji: "🎯",
                title: "Hazlo",
                text: "Cuando se presente la situación, realiza esa acción de manera clara y respetuosa."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en cómo te sientes al actuar de acuerdo con tu límite y qué ocurre después."
            }
        ],

        question:
            "¿Qué cambió cuando llevaste un límite que tenías claro a una acción concreta?"
    },

    {
        id: "limites-30",
        journey: "limites",
        day: 30,
        title: "ELEGIR QUÉ QUIERO PERMITIR A PARTIR DE AHORA",
        duration: "20–30 min",
        moment: "En un momento tranquilo en el que puedas revisar algunas situaciones habituales de tu vida.",
        description:
            "Hoy vas a cerrar este recorrido observando qué quieres permitir, qué quieres limitar y qué quieres cuidar de una manera diferente a partir de ahora.",

        steps: [
            {
                emoji: "🪞",
                title: "Revisa",
                text: "Piensa en las experiencias de estos días y reconoce alguna situación en la que hayas descubierto algo importante sobre tus límites."
            },
            {
                emoji: "💭",
                title: "Pregúntate",
                text: "¿Qué quiero seguir permitiendo en mi vida? ¿Qué quiero limitar? ¿Qué quiero dejar de aceptar?"
            },
            {
                emoji: "🎯",
                title: "Elige",
                text: "Escoge un límite concreto que quieras empezar a expresar, mantener o cuidar de una manera diferente."
            },
            {
                emoji: "🌱",
                title: "Llévalo contigo",
                text: "Piensa en una situación cotidiana en la que puedas ponerlo en práctica y observa qué ocurre cuando llegue ese momento."
            }
        ],

        question:
            "¿Qué límite quieres cuidar de una manera diferente a partir de ahora?"
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

   {
    id: "elegir-3",
    journey: "elegir",
    day: 3,
    title: "ELEGIR QUÉ PRIORIZAR",
    duration: "10–20 minutos",
    moment: "En un momento del día en el que tengas varias cosas pendientes.",
    description:
        "Hoy vas a practicar elegir qué merece tu atención primero. No se trata de hacer más cosas, sino de observar qué decides colocar en primer lugar cuando no puedes atenderlo todo al mismo tiempo.",

    steps: [
        {
            emoji: "📋",
            title: "Observa",
            text: "Mira qué cosas tienes pendientes o disponibles para hacer."
        },
        {
            emoji: "🎯",
            title: "Elige",
            text: "Decide cuál quieres colocar primero y continúa con esa elección."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Nota qué aparece al dejar otras cosas para después."
        },
        {
            emoji: "🧭",
            title: "Revisa",
            text: "Pregúntate si elegiste por urgencia, costumbre, presión, importancia o porque realmente lo preferías."
        }
    ],

    question:
        "¿Qué descubriste sobre la manera en que decides qué merece tu atención primero?"
},

{
    id: "elegir-4",
    journey: "elegir",
    day: 4,
    title: "ELEGIR SIN BUSCAR LA OPCIÓN PERFECTA",
    duration: "10–20 minutos",
    moment: "Ante una decisión cotidiana que puedas resolver sin necesidad de encontrar la alternativa ideal.",
    description:
        "Algunas decisiones pueden alargarse cuando intentamos encontrar la mejor opción posible. Hoy vas a practicar una elección suficientemente adecuada, sin dedicar más tiempo del necesario a buscar una alternativa perfecta.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige",
            text: "Identifica una decisión cotidiana que estés postergando porque sigues comparando posibilidades."
        },
        {
            emoji: "⏳",
            title: "Pon un límite",
            text: "Date un tiempo breve para considerar las opciones disponibles."
        },
        {
            emoji: "🧭",
            title: "Decide",
            text: "Cuando termine ese tiempo, elige la alternativa que consideres suficientemente adecuada."
        },
        {
            emoji: "👀",
            title: "Continúa",
            text: "Después de decidir, sigue con tu día sin volver inmediatamente a comparar las opciones descartadas."
        }
    ],

    question:
        "¿Qué ocurrió cuando elegiste sin esperar encontrar la opción perfecta?"
},

{
    id: "elegir-5",
    journey: "elegir",
    day: 5,
    title: "ELEGIR QUÉ DEJAR PARA DESPUÉS",
    duration: "10–20 minutos",
    moment: "En un momento en el que tengas varias tareas, planes o cosas que podrías hacer.",
    description:
        "Elegir también implica decidir qué no vas a hacer ahora. Hoy vas a observar qué ocurre cuando conscientemente dejas algo para después, en lugar de intentar atender todo al mismo tiempo.",

    steps: [
        {
            emoji: "🔎",
            title: "Identifica",
            text: "Elige dos o más cosas que podrías hacer en este momento."
        },
        {
            emoji: "🧭",
            title: "Decide",
            text: "Escoge una para realizar ahora y otra para dejar para después."
        },
        {
            emoji: "⏸️",
            title: "Déjala",
            text: "Permite que la segunda permanezca pendiente sin intentar resolverla inmediatamente."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Nota qué aparece: tranquilidad, incomodidad, urgencia, culpa, alivio o cualquier otra reacción."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que ocurre cuando eliges no hacer algo todavía?"
},

{
    id: "elegir-6",
    journey: "elegir",
    day: 6,
    title: "ELEGIR CÓMO HACERLO",
    duration: "10–20 min",
    moment: "Durante una tarea cotidiana que pueda realizarse de diferentes maneras.",
    description:
        "Incluso cuando sabemos qué tenemos que hacer, todavía existen muchas decisiones sobre cómo hacerlo. Hoy vas a prestar atención a esas pequeñas elecciones que normalmente haces de manera automática.",

    steps: [
        {
            emoji: "🔎",
            title: "Elige una tarea",
            text: "Busca una actividad cotidiana que puedas realizar de varias maneras."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Antes de empezar, identifica algunas formas posibles de hacerla."
        },
        {
            emoji: "🎯",
            title: "Decide",
            text: "Escoge conscientemente una manera de realizarla, aunque no sea la que utilizas habitualmente."
        },
        {
            emoji: "🧭",
            title: "Experimenta",
            text: "Haz la actividad de esa manera y observa qué cambia en tu experiencia."
        }
    ],

    question:
        "¿Qué descubriste sobre tus preferencias al elegir conscientemente cómo hacer una tarea?"
},

{
    id: "elegir-7",
    journey: "elegir",
    day: 7,
    title: "PAUSAR ANTES DE ELEGIR",
    duration: "5–10 minutos",
    moment: "Antes de una elección cotidiana que suelas hacer rápidamente.",
    description:
        "Algunas elecciones aparecen tan rápido que apenas notamos que estamos decidiendo. Hoy vas a crear un pequeño espacio antes de responder para observar cómo eliges.",

    steps: [
        {
            emoji: "⏸️",
            title: "Detente",
            text: "Cuando aparezca una elección sencilla, evita responder inmediatamente."
        },
        {
            emoji: "🌿",
            title: "Espera",
            text: "Permanece unos segundos sin decidir."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Nota qué opciones aparecen, qué quieres hacer y qué pensamientos o sensaciones acompañan el momento."
        },
        {
            emoji: "🎯",
            title: "Elige",
            text: "Después de esa pausa, toma la decisión que consideres adecuada."
        }
    ],

    question:
        "¿Qué cambió en tu experiencia cuando dejaste un espacio antes de elegir?"
},

{
    id: "elegir-8",
    journey: "elegir",
    day: 8,
    title: "NOTAR QUÉ INFLUYE EN MI DECISIÓN",
    duration: "10–20 minutos",
    moment: "Durante una decisión cotidiana que tenga más de un factor en juego.",
    description:
        "Nuestras elecciones pueden estar influidas por muchas cosas: tiempo, comodidad, costumbre, opinión de otras personas, miedo a equivocarnos, necesidades del momento u otras circunstancias. Hoy vas a observar qué está presente cuando decides.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige una decisión",
            text: "Busca una elección cotidiana que tengas que realizar."
        },
        {
            emoji: "🔎",
            title: "Observa",
            text: "Antes de decidir, identifica qué factores están influyendo en tu elección."
        },
        {
            emoji: "🧭",
            title: "Decide",
            text: "Toma la decisión teniendo presentes esos factores, sin intentar eliminar ninguno."
        },
        {
            emoji: "👀",
            title: "Revisa",
            text: "Después, observa cuál de ellos tuvo mayor peso en tu decisión."
        }
    ],

    question:
        "¿Qué descubriste sobre aquello que suele influir en tus decisiones?"
},

{
    id: "elegir-9",
    journey: "elegir",
    day: 9,
    title: "DIFERENCIAR QUIERO DEBO",
    duration: "10–20 minutos",
    moment: "En una situación cotidiana en la que sientas que tienes que elegir entre lo que quieres y lo que consideras que deberías hacer.",
    description:
        "A veces una elección está acompañada por deseos y también por obligaciones, expectativas o reglas personales. Hoy vas a observar cómo se relacionan esas dos voces cuando decides.",

    steps: [
        {
            emoji: "🔎",
            title: "Identifica",
            text: "Encuentra una situación cotidiana en la que aparezca un “quiero” y un “debo”."
        },
        {
            emoji: "💭",
            title: "Escucha",
            text: "Reconoce qué te dice cada uno sin decidir todavía cuál debería ganar."
        },
        {
            emoji: "⚖️",
            title: "Compara",
            text: "Observa qué hay detrás de cada opción y qué consecuencias tendría elegirla."
        },
        {
            emoji: "🎯",
            title: "Decide",
            text: "Toma la decisión que corresponda a la situación y observa cómo te sientes al hacerlo."
        }
    ],

    question:
        "¿Qué descubriste sobre la diferencia entre lo que quieres y lo que sientes que debes hacer?"
},

{
    id: "elegir-10",
    journey: "elegir",
    day: 10,
    title: "ELEGIR AUN CON DUDAS",
    duration: "10–20 minutos",
    moment: "Ante una decisión cotidiana en la que no puedas tener certeza completa sobre el resultado.",
    description:
        "No todas las decisiones vienen acompañadas de seguridad. A veces podemos tener dudas y, aun así, necesitamos elegir. Hoy vas a experimentar cómo es tomar una decisión sin esperar a sentirte completamente seguro.",

    steps: [
        {
            emoji: "🎯",
            title: "Encuentra",
            text: "Identifica una decisión cotidiana que puedas tomar aunque no tengas toda la información."
        },
        {
            emoji: "👀",
            title: "Reconoce",
            text: "Observa qué dudas aparecen y qué te gustaría saber antes de decidir."
        },
        {
            emoji: "⏳",
            title: "Decide",
            text: "Cuando tengas información suficiente para actuar, toma una decisión sin esperar a eliminar todas las dudas."
        },
        {
            emoji: "🧭",
            title: "Continúa",
            text: "Sigue con lo que hayas elegido y observa qué ocurre después."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de elegir cuando no puedes tener certeza completa?"
},

{
    id: "elegir-11",
    journey: "elegir",
    day: 11,
    title: "CAMBIAR DE OPINIÓN",
    duration: "10–20 min",
    moment: "En un momento tranquilo en el que puedas recordar una opinión que hayas cambiado con el tiempo.",
    description:
        "Cambiar de opinión también forma parte de elegir. Hoy vas a explorar una idea sobre la que antes pensabas de una manera diferente y reconocer qué ocurrió entre aquella decisión y la que tienes actualmente.",

    steps: [
        {
            emoji: "🔎",
            title: "Recuerda",
            text: "Piensa en algo sobre lo que antes tenías una opinión diferente."
        },
        {
            emoji: "🧭",
            title: "Compara",
            text: "Observa qué pensabas entonces y qué piensas ahora."
        },
        {
            emoji: "💭",
            title: "Explora",
            text: "Reconoce qué experiencias, información o cambios influyeron en esa transformación."
        },
        {
            emoji: "🌱",
            title: "Reconoce",
            text: "Permite que ambas versiones formen parte de tu historia sin tener que decidir cuál era la “correcta”."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de elegir cuando reconoces que también puedes cambiar de opinión?"
},

{
    id: "elegir-12",
    journey: "elegir",
    day: 12,
    title: "DECIDIR SIN DAR EXPLICACIONES DE MÁS",
    duration: "10–20 min",
    moment: "En una situación cotidiana en la que tengas que comunicar una elección a otra persona.",
    description:
        "Algunas decisiones pueden sentirse más difíciles cuando pensamos que necesitamos justificarlas completamente. Hoy vas a practicar expresar una elección de manera clara, sin añadir explicaciones innecesarias para conseguir aprobación.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige",
            text: "Identifica una decisión sencilla que quieras tomar por ti."
        },
        {
            emoji: "💬",
            title: "Exprésala",
            text: "Comunica lo que has decidido de manera clara y respetuosa."
        },
        {
            emoji: "⏸️",
            title: "Detente",
            text: "Evita añadir explicaciones que no sean realmente necesarias."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Nota qué ocurre en ti cuando permites que tu elección se sostenga por sí misma."
        }
    ],

    question:
        "¿Qué descubriste sobre tu necesidad de explicar tus decisiones?"
},

{
    id: "elegir-13",
    journey: "elegir",
    day: 13,
    title: "ELEGIR AUNQUE NO TODOS ESTÉN DE ACUERDO",
    duration: "10–20 min",
    moment: "En una situación cotidiana en la que tu elección pueda ser diferente a la de otra persona.",
    description:
        "A veces sabemos qué queremos elegir, pero la posibilidad de que alguien no esté de acuerdo puede hacernos dudar. Hoy vas a practicar reconocer tu elección aunque otra persona pueda preferir algo diferente.",

    steps: [
        {
            emoji: "🔎",
            title: "Identifica",
            text: "Piensa en una situación sencilla en la que tú y otra persona tengan preferencias diferentes."
        },
        {
            emoji: "🎯",
            title: "Elige",
            text: "Reconoce qué prefieres tú y toma tu decisión desde esa elección."
        },
        {
            emoji: "💬",
            title: "Comunica",
            text: "Si es necesario, expresa tu decisión de manera clara y respetuosa."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Nota qué ocurre en ti al sostener una elección que no coincide con la de otra persona."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al sostener una elección aunque otra persona pudiera preferir algo diferente?"
},

{
    id: "elegir-14",
    journey: "elegir",
    day: 14,
    title: "DEJAR DE DELEGAR UNA DECISIÓN",
    duration: "10–20 min",
    moment: "Ante una decisión cotidiana que suelas dejar en manos de otra persona.",
    description:
        "Algunas decisiones pueden terminar en manos de otros porque resulta más fácil que elegir por nosotros mismos. Hoy vas a reconocer una decisión que normalmente delegas y darte la oportunidad de tomarla tú.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconoce",
            text: "Identifica una decisión sencilla que normalmente dejas que otra persona tome por ti."
        },
        {
            emoji: "⏸️",
            title: "Detente",
            text: "Antes de preguntar qué haría alguien más, observa qué piensas tú."
        },
        {
            emoji: "🎯",
            title: "Decide",
            text: "Elige una opción que consideres adecuada para ti."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Nota qué aparece al asumir directamente esa elección."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al tomar una decisión que normalmente dejabas en manos de otra persona?"
},

{
    id: "elegir-15",
    journey: "elegir",
    day: 15,
    title: "RECONOCER CUANDO YA NO QUIERO LO MISMO",
    duration: "15–30 min",
    moment: "En un momento tranquilo en el que puedas revisar una elección, preferencia o decisión que haya cambiado con el tiempo.",
    description:
        "Lo que queremos no permanece necesariamente igual. Hoy vas a explorar si existe algo que elegiste o quisiste durante un tiempo y que actualmente ya no representa lo mismo para ti.",

    steps: [
        {
            emoji: "🔎",
            title: "Recuerda",
            text: "Piensa en algo que durante un tiempo hayas elegido, querido o considerado importante."
        },
        {
            emoji: "🧭",
            title: "Compara",
            text: "Observa qué relación tienes actualmente con aquello."
        },
        {
            emoji: "💭",
            title: "Reconoce",
            text: "Pregúntate si todavía lo quieres, si ha cambiado o si ya no forma parte de lo que buscas."
        },
        {
            emoji: "🎯",
            title: "Elige",
            text: "Si corresponde, decide qué quieres hacer ahora con esa elección."
        }
    ],

    question:
        "¿Qué descubriste sobre tu capacidad de reconocer cuando algo que antes querías ya no representa lo que quieres hoy?"
},

{
    id: "elegir-16",
    journey: "elegir",
    day: 16,
    title: "DAR UN PASO DESPUÉS DE ELEGIR",
    duration: "15–30 min",
    moment: "Ante una decisión cotidiana que ya hayas tomado pero que todavía no hayas llevado a la práctica.",
    description:
        "Elegir y actuar no siempre ocurren al mismo tiempo. Hoy vas a tomar una decisión que ya tienes clara y convertirla en un paso concreto.",

    steps: [
        {
            emoji: "🔎",
            title: "Identifica",
            text: "Piensa en una elección que ya hayas tomado pero que todavía no hayas puesto en práctica."
        },
        {
            emoji: "🎯",
            title: "Elige",
            text: "Confirma qué quieres hacer."
        },
        {
            emoji: "👣",
            title: "Actúa",
            text: "Da un primer paso concreto que acerque esa decisión a la realidad."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Nota qué ocurre cuando dejas de pensar en la elección y comienzas a llevarla a cabo."
        }
    ],

    question:
        "¿Qué descubriste sobre ti al pasar de una elección a una acción concreta?"
},

{
    id: "elegir-17",
    journey: "elegir",
    day: 17,
    title: "ELEGIR CON MIS RECURSOS ACTUALES",
    duration: "15–30 min",
    moment: "Ante una decisión cotidiana que tengas pendiente.",
    description:
        "No siempre elegimos desde las condiciones ideales. A veces necesitamos decidir teniendo en cuenta el tiempo, dinero, energía, conocimientos o posibilidades que realmente tenemos disponibles.",

    steps: [
        {
            emoji: "🔎",
            title: "Identifica",
            text: "Elige una decisión cotidiana que tengas delante."
        },
        {
            emoji: "📦",
            title: "Observa",
            text: "Reconoce con qué recursos cuentas realmente en este momento."
        },
        {
            emoji: "🎯",
            title: "Ajusta",
            text: "Explora qué opciones son posibles teniendo en cuenta esas condiciones."
        },
        {
            emoji: "🧭",
            title: "Decide",
            text: "Elige una alternativa que sea coherente con lo que tienes disponible ahora."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de elegir cuando tienes en cuenta tus recursos reales?"
},

{
    id: "elegir-18",
    journey: "elegir",
    day: 18,
    title: "ELEGIR DESDE LO QUE NECESITO",
    duration: "10–20 min",
    moment: "En una situación cotidiana en la que tengas varias maneras posibles de responder.",
    description:
        "A veces elegimos guiándonos principalmente por lo que queremos en el momento. Hoy vas a explorar qué ocurre cuando también tienes en cuenta aquello que necesitas para estar bien o funcionar de una manera sostenible.",

    steps: [
        {
            emoji: "🔎",
            title: "Identifica",
            text: "Encuentra una situación en la que tengas más de una opción posible."
        },
        {
            emoji: "💭",
            title: "Pregúntate",
            text: "Observa qué quieres y qué necesitas en esa situación."
        },
        {
            emoji: "⚖️",
            title: "Compara",
            text: "Reconoce si ambas cosas coinciden o si existe alguna diferencia entre ellas."
        },
        {
            emoji: "🎯",
            title: "Elige",
            text: "Toma una decisión teniendo en cuenta aquello que necesitas actualmente."
        }
    ],

    question:
        "¿Qué descubriste sobre tus decisiones cuando tienes en cuenta no solo lo que quieres, sino también lo que necesitas?"
},

{
    id: "elegir-19",
    journey: "elegir",
    day: 19,
    title: "ELEGIR SIN CONTROLAR EL RESULTADO",
    duration: "15–30 min",
    moment: "Ante una elección cotidiana cuyo resultado no puedas conocer completamente de antemano.",
    description:
        "Podemos tomar una decisión sin poder controlar exactamente lo que ocurrirá después. Hoy vas a practicar elegir teniendo en cuenta lo que sabes ahora, sin intentar asegurar por completo el resultado.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige",
            text: "Encuentra una decisión cotidiana cuyo resultado no dependa completamente de ti."
        },
        {
            emoji: "🔎",
            title: "Observa",
            text: "Reconoce qué puedes considerar antes de decidir y qué queda fuera de tu control."
        },
        {
            emoji: "🧭",
            title: "Decide",
            text: "Haz tu elección con la información y los recursos que tienes actualmente."
        },
        {
            emoji: "👀",
            title: "Suelta",
            text: "Después de decidir, observa si aparece la necesidad de revisar, anticipar o controlar lo que ocurrirá."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de elegir cuando no puedes controlar completamente lo que sucederá?"
},

{
    id: "elegir-20",
    journey: "elegir",
    day: 20,
    title: "SOSTENER UNA ELECCIÓN",
    duration: "15–30 min",
    moment: "Después de haber tomado una decisión cotidiana.",
    description:
        "Tomar una decisión no siempre termina cuando elegimos. A veces aparecen dudas, opiniones externas o ganas de volver a revisar lo decidido. Hoy vas a observar qué ocurre cuando permaneces con una elección durante un tiempo antes de volver a cuestionarla.",

    steps: [
        {
            emoji: "🎯",
            title: "Elige",
            text: "Toma una decisión cotidiana que consideres suficientemente clara."
        },
        {
            emoji: "🧭",
            title: "Sostén",
            text: "Durante un periodo acordado contigo, evita volver a revisarla innecesariamente."
        },
        {
            emoji: "👀",
            title: "Observa",
            text: "Registra si aparecen dudas, ganas de cambiar, buscar confirmación o imaginar otras opciones."
        },
        {
            emoji: "🔎",
            title: "Revisa",
            text: "Al finalizar, observa cómo fue permanecer con tu elección y decide si quieres mantenerla o modificarla."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que ocurre después de tomar una decisión y permanecer con ella durante un tiempo?"
},

{
    id: "elegir-21",
    journey: "elegir",
    day: 21,
    title: "TOMAR UNA DECISIÓN QUE SIGO EVITANDO",
    duration: "15–30 min",
    moment: "En un momento tranquilo en el que puedas pensar sin interrupciones.",
    description:
        "Hay decisiones que no necesariamente son difíciles por sus opciones, sino porque llevamos tiempo evitando tomarlas. Hoy vas a acercarte a una decisión que sigue pendiente y observar qué ocurre cuando dejas de mantenerla en pausa.",

    steps: [
        {
            emoji: "🔎",
            title: "Identificar",
            text: "Piensa en una decisión cotidiana que lleves algún tiempo evitando. No tiene que ser una decisión importante ni definitiva."
        },
        {
            emoji: "🌿",
            title: "Acercarte",
            text: "Observa qué has estado evitando al no decidir: una conversación, un cambio, una respuesta, una acción o simplemente elegir entre alternativas."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Decide cuál sería el siguiente paso posible, aunque todavía no tengas resuelto todo lo demás."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Nota qué aparece al acercarte a esa decisión: dudas, alivio, resistencia, preocupación, claridad o cualquier otra experiencia."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que ocurre cuando te acercas a una decisión que llevabas tiempo evitando?"
},

{
    id: "elegir-22",
    journey: "elegir",
    day: 22,
    title: "ELEGIR AUNQUE PUEDA EQUIVOCARME",
    duration: "10–20 min",
    moment: "Ante una decisión cotidiana en la que ninguna opción pueda garantizarte un resultado completamente favorable.",
    description:
        "Algunas elecciones implican aceptar que podemos equivocarnos o que el resultado no sea el que esperábamos. Hoy vas a practicar tomar una decisión sin exigir que el resultado confirme que elegiste correctamente.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconocer",
            text: "Identifica una decisión sencilla en la que exista la posibilidad de que el resultado no sea como esperas."
        },
        {
            emoji: "💭",
            title: "Explorar",
            text: "Observa qué te hace difícil elegir cuando existe la posibilidad de equivocarte."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Toma una decisión utilizando la información y las posibilidades que tienes ahora."
        },
        {
            emoji: "🚶",
            title: "Continuar",
            text: "Después de elegir, continúa con lo que corresponda sin intentar comprobar inmediatamente si tomaste la decisión correcta."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de elegir cuando existe la posibilidad de equivocarte?"
},

{
    id: "elegir-23",
    journey: "elegir",
    day: 23,
    title: "ESCUCHAR UNA OPINIÓN DIFERENTE",
    duration: "15–30 min",
    moment: "En una conversación tranquila con alguien cuya manera de pensar sea diferente a la tuya.",
    description:
        "Escuchar una opinión diferente no significa tener que adoptarla. Hoy vas a observar qué ocurre cuando permites que otra perspectiva esté presente antes de decidir qué piensas tú.",

    steps: [
        {
            emoji: "💬",
            title: "Elegir",
            text: "Piensa en un tema cotidiano sobre el que tengas una opinión y conversa con alguien que piense diferente."
        },
        {
            emoji: "👂",
            title: "Escuchar",
            text: "Permite que la otra persona explique su punto de vista sin intentar convencerla ni preparar inmediatamente una respuesta."
        },
        {
            emoji: "🔎",
            title: "Explorar",
            text: "Observa qué parte de lo que escuchas comprendes, cuestionas o simplemente puedes considerar."
        },
        {
            emoji: "🧭",
            title: "Decidir",
            text: "Después de escuchar, decide qué quieres mantener de tu propia posición y qué podrías reconsiderar."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de decidir qué pensar cuando escuchas una perspectiva diferente?"
},

{
    id: "elegir-24",
    journey: "elegir",
    day: 24,
    title: "ELEGIR ENTRE LO QUE QUIERO AHORA Y LO QUE QUIERO DESPUÉS",
    duration: "10–20 min",
    moment: "Ante una situación cotidiana en la que una opción resulte atractiva ahora, pero otra pueda ser más importante para ti a más largo plazo.",
    description:
        "A veces lo que queremos en este momento no coincide con aquello que también queremos conseguir o cuidar después. Hoy vas a observar esa diferencia y decidir teniendo en cuenta ambas partes.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconocer",
            text: "Encuentra una situación en la que lo que quieres hacer ahora entre en conflicto con algo que también consideras importante para después."
        },
        {
            emoji: "⚖️",
            title: "Comparar",
            text: "Observa qué te ofrece cada opción y qué implica elegir cada una."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Decide cuál quieres priorizar esta vez, teniendo en cuenta tanto el momento actual como aquello que quieres cuidar después."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Nota qué ocurre cuando una elección implica dejar temporalmente en segundo plano algo que también deseas."
        }
    ],

    question:
        "¿Qué descubriste sobre tus decisiones cuando lo que quieres ahora y lo que quieres después no coinciden?"
},

{
    id: "elegir-25",
    journey: "elegir",
    day: 25,
    title: "ELEGIR QUÉ MERECE UNA RESPUESTA",
    duration: "10–20 min",
    moment: "Durante un momento del día en el que recibas mensajes, solicitudes o situaciones que reclamen tu atención.",
    description:
        "No todo lo que llega hasta ti necesita una respuesta inmediata. Hoy vas a practicar distinguir entre aquello que realmente quieres responder y aquello que puedes dejar pasar, responder después o no responder.",

    steps: [
        {
            emoji: "👀",
            title: "Observar",
            text: "Presta atención a las diferentes cosas que durante el día parecen pedir una respuesta de tu parte."
        },
        {
            emoji: "🔎",
            title: "Distinguir",
            text: "Pregúntate cuáles necesitan realmente una respuesta y cuáles simplemente generan la sensación de que deberías responder."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Decide conscientemente qué vas a responder, qué dejarás para después y qué no necesita una respuesta."
        },
        {
            emoji: "🌿",
            title: "Observar",
            text: "Nota qué ocurre cuando permites que algunas cosas no reciban tu respuesta inmediata."
        }
    ],

    question:
        "¿Qué descubriste sobre aquello que decides que merece una respuesta?"
},

{
    id: "elegir-26",
    journey: "elegir",
    day: 26,
    title: "HACERME CARGO DE UNA ELECCIÓN",
    duration: "15–30 min",
    moment: "Ante una decisión cotidiana que hayas tomado recientemente.",
    description:
        "Elegir también implica reconocer que nuestras decisiones tienen consecuencias. Hoy vas a observar una elección propia y qué significa hacerte cargo de ella sin convertirla en una evaluación sobre ti.",

    steps: [
        {
            emoji: "🔎",
            title: "Recordar",
            text: "Piensa en una decisión reciente que hayas tomado por ti."
        },
        {
            emoji: "👀",
            title: "Reconocer",
            text: "Observa qué ocurrió como consecuencia de esa elección, tanto si salió como esperabas como si no."
        },
        {
            emoji: "⚖️",
            title: "Distinguir",
            text: "Reconoce qué parte de lo ocurrido depende de tu decisión y qué parte estaba fuera de tu control."
        },
        {
            emoji: "🧭",
            title: "Continuar",
            text: "Decide qué quieres hacer ahora con aquello que ocurrió, sin necesidad de juzgarte por haber elegido."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que significa hacerte cargo de una elección?"
},

{
    id: "elegir-27",
    journey: "elegir",
    day: 27,
    title: "ELEGIR QUÉ HACER CON UNA OPORTUNIDAD",
    duration: "15–30 min",
    moment: "Ante una oportunidad cotidiana que aparezca y que tengas libertad para aceptar, rechazar o dejar para otro momento.",
    description:
        "No todas las oportunidades necesitan ser aprovechadas. Hoy vas a practicar elegir qué hacer cuando aparece una posibilidad que podría resultarte interesante, pero que no necesariamente necesitas aceptar.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconocer",
            text: "Identifica una oportunidad concreta que haya aparecido recientemente o que tengas disponible ahora."
        },
        {
            emoji: "⚖️",
            title: "Explorar",
            text: "Observa qué te atrae de ella y qué factores te hacen dudar o considerar otras opciones."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Decide si quieres aprovecharla, dejarla para otro momento o no tomarla."
        },
        {
            emoji: "🌿",
            title: "Sostener",
            text: "Permite que tu elección sea suficiente por ahora, sin necesidad de convertirla en una oportunidad perdida o en una obligación."
        }
    ],

    question:
        "¿Qué descubriste sobre tu manera de decidir qué oportunidades quieres aprovechar?"
},

{
    id: "elegir-28",
    journey: "elegir",
    day: 28,
    title: "ELEGIR Y ACEPTAR LO QUE QUEDA FUERA",
    duration: "15–30 min",
    moment: "Ante una situación en la que tengas varias opciones y no puedas elegirlas todas.",
    description:
        "Toda elección deja algo fuera. Hoy vas a experimentar qué ocurre cuando eliges una opción y permites que las demás no formen parte de esa decisión.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconocer",
            text: "Encuentra una situación en la que tengas varias opciones que te resulten interesantes."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Escoge una de ellas sabiendo que, por ahora, las demás quedarán fuera."
        },
        {
            emoji: "👀",
            title: "Observar",
            text: "Nota qué aparece al dejar las otras posibilidades: duda, curiosidad, tranquilidad, miedo a perderte algo o cualquier otra experiencia."
        },
        {
            emoji: "🚶",
            title: "Continuar",
            text: "Dedica un tiempo a la opción elegida sin intentar recuperar inmediatamente las que descartaste."
        }
    ],

    question:
        "¿Qué descubriste sobre lo que ocurre cuando elegir una cosa implica dejar otras fuera?"
},

{
    id: "elegir-29",
    journey: "elegir",
    day: 29,
    title: "ELEGIR QUÉ QUIERO CAMBIAR A PARTIR DE AHORA",
    duration: "15–30 min",
    moment: "En un momento tranquilo en el que puedas revisar algunas de las elecciones que haces actualmente.",
    description:
        "Conocer nuestra manera de elegir también puede llevarnos a reconocer que algunas elecciones ya no queremos mantenerlas de la misma forma. Hoy vas a identificar una elección cotidiana que quieras empezar a hacer de manera diferente.",

    steps: [
        {
            emoji: "🔎",
            title: "Reconocer",
            text: "Piensa en una elección que haces actualmente y que ya no quieres seguir realizando exactamente de la misma manera."
        },
        {
            emoji: "💭",
            title: "Explorar",
            text: "Observa qué te ha llevado a mantenerla hasta ahora y qué ha cambiado para ti."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Decide qué quieres hacer diferente a partir de ahora."
        },
        {
            emoji: "👣",
            title: "Empezar",
            text: "Realiza hoy una acción concreta que represente esa nueva elección."
        }
    ],

    question:
        "¿Qué descubriste sobre tu capacidad de cambiar una elección cuando reconoces que ya no quieres mantenerla igual?"
},

{
    id: "elegir-30",
    journey: "elegir",
    day: 30,
    title: "ELEGIR CON INTENCIÓN",
    duration: "20–30 min",
    moment: "Al finalizar estos 30 días, en un momento tranquilo y sin interrupciones.",
    description:
        "Durante estos días has explorado diferentes maneras de elegir. Hoy vas a llevar lo que descubriste a una decisión concreta de tu vida actual.",

    steps: [
        {
            emoji: "🧠",
            title: "Reconocer",
            text: "Piensa en algo que hayas descubierto sobre tu manera de elegir durante estos 30 días."
        },
        {
            emoji: "🔎",
            title: "Identificar",
            text: "Encuentra una situación real de tu vida actual en la que quieras tomar una decisión de manera diferente."
        },
        {
            emoji: "🎯",
            title: "Elegir",
            text: "Toma esa decisión teniendo en cuenta lo que ahora sabes sobre ti, tus necesidades, tus posibilidades y aquello que consideras importante."
        },
        {
            emoji: "👣",
            title: "Llevarlo",
            text: "Realiza hoy un primer paso relacionado con esa elección y observa qué ocurre al actuar desde una decisión tomada con intención."
        }
    ],

    question:
        "¿Qué quieres empezar a elegir de manera más consciente a partir de ahora?"
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
    },

       {
        id: "soltar-3",
        journey: "soltar",
        day: 3,
        title: "DESHACERME DE ALGO QUE YA NO USO",
        duration: "15–30 min",
        moment: "En casa o en un espacio donde tengas objetos que ya no utilizas.",
        description:
            "A veces seguimos conservando cosas que ya no forman parte de nuestra vida. Hoy vas a elegir algo que ya no utilizas y experimentar qué ocurre cuando decides dejarlo ir.",

        steps: [
            {
                emoji: "🔎",
                title: "Busca",
                text: "Recorre un espacio y encuentra un objeto que lleves tiempo sin utilizar y que puedas dejar ir sin necesitarlo después."
            },
            {
                emoji: "🧩",
                title: "Elige",
                text: "Tómalo durante unos momentos y observa qué aparece al pensar en desprenderte de él. Puede haber indiferencia, duda, recuerdos o ganas de conservarlo."
            },
            {
                emoji: "📦",
                title: "Suelta",
                text: "Si decides que ya no necesitas conservarlo, déjalo fuera de tu espacio habitual. Puedes donarlo, reciclarlo, desecharlo o entregarlo, según corresponda."
            },
            {
                emoji: "🌿",
                title: "Observa",
                text: "Vuelve a mirar el lugar que ocupaba y nota qué se siente tener ese espacio disponible."
            }
        ],

        question:
            "¿Qué notaste al dejar ir algo que ya no utilizabas?"
    },

    {
        id: "soltar-4",
        journey: "soltar",
        day: 4,
        title: "DEJAR DE HACERLO COMO SIEMPRE",
        duration: "15–30 min",
        moment: "En casa o durante una actividad cotidiana que realices habitualmente de una misma manera.",
        description:
            "Hay formas de hacer las cosas que repetimos casi sin pensarlo. Hoy vas a dejar de lado, por un momento, una manera habitual de hacer algo y permitirte probar otra.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Busca una actividad cotidiana que conozcas bien y que puedas realizar de diferentes maneras."
            },
            {
                emoji: "🔄",
                title: "Cambia",
                text: "Elige una parte concreta que normalmente haces de la misma forma y hazla de otra manera."
            },
            {
                emoji: "👀",
                title: "Experimenta",
                text: "Continúa con la actividad sin intentar volver inmediatamente a tu forma habitual de hacerlo."
            },
            {
                emoji: "🌿",
                title: "Observa",
                text: "Fíjate en qué apareció al hacerlo diferente: comodidad, resistencia, curiosidad, incomodidad, facilidad o cualquier otra experiencia."
            }
        ],

        question:
            "¿Qué ocurrió cuando dejaste de hacerlo como siempre?"
    },

    {
        id: "soltar-5",
        journey: "soltar",
        day: 5,
        title: "DEJAR DE INSISTIR",
        duration: "10–20 min",
        moment: "Durante un momento en el que estés intentando conseguir algo que puedas dejar temporalmente sin resolver.",
        description:
            "Hay situaciones en las que seguimos intentando conseguir una respuesta, cambiar algo o hacer que ocurra de determinada manera. Hoy vas a experimentar qué ocurre cuando dejas de insistir durante un tiempo.",

        steps: [
            {
                emoji: "🔎",
                title: "Reconoce",
                text: "Identifica algo pequeño en lo que hayas estado insistiendo y que puedas dejar en pausa sin perjudicarte ni perjudicar a otra persona."
            },
            {
                emoji: "⏸️",
                title: "Detén",
                text: "Durante este momento, deja de realizar la acción con la que normalmente intentas conseguir que aquello cambie."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Nota qué aparece al dejar de insistir: frustración, alivio, preocupación, ganas de volver a intentarlo o cualquier otra sensación."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Continúa con otra actividad y permite que aquello permanezca sin resolver durante un tiempo."
            }
        ],

        question:
            "¿Qué cambió en tu experiencia cuando dejaste de insistir?"
    },

    {
        id: "soltar-6",
        journey: "soltar",
        day: 6,
        title: "HACER ALGO SIN CONTROLAR CÓMO SALE",
        duration: "15–30 min",
        moment: "En casa o en un lugar donde puedas realizar una actividad sencilla cuyo resultado no dependa completamente de ti.",
        description:
            "Podemos dedicar mucha energía a intentar que las cosas ocurran exactamente como las imaginamos. Hoy vas a participar en una actividad dejando espacio para que el resultado se construya sin intentar controlarlo por completo.",

        steps: [
            {
                emoji: "🎯",
                title: "Elige",
                text: "Escoge una actividad cuyo resultado dependa al menos en parte de factores que no puedas controlar: cocinar algo sencillo, dibujar, crear algo o realizar una actividad compartida."
            },
            {
                emoji: "🚶",
                title: "Empieza",
                text: "Realiza la actividad prestando atención a lo que haces, sin intentar anticipar o corregir continuamente cómo debería terminar."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Cuando aparezca la necesidad de controlar, corregir o asegurar el resultado, reconoce ese impulso y vuelve a la actividad."
            },
            {
                emoji: "🌿",
                title: "Permite",
                text: "Deja que el resultado sea el que sea. Cuando termines, obsérvalo sin compararlo inmediatamente con lo que habías imaginado."
            }
        ],

        question:
            "¿Qué notaste al hacer algo sin intentar controlar completamente cómo terminaría?"
    },

    {
        id: "soltar-7",
        journey: "soltar",
        day: 7,
        title: "DEJAR UN ESPACIO SIN LLENAR",
        duration: "10–15 min",
        moment: "En casa, en una sala de espera o en cualquier lugar tranquilo donde puedas permanecer unos minutos sin otra actividad pendiente.",
        description:
            "No todos los espacios necesitan estar ocupados. Hoy vas a dejar deliberadamente unos minutos sin llenarlos con el teléfono, una tarea, entretenimiento o cualquier otra actividad.",

        steps: [
            {
                emoji: "⏸️",
                title: "Reserva",
                text: "Elige entre cinco y diez minutos en los que no tengas que hacer nada urgente."
            },
            {
                emoji: "📵",
                title: "Aparta",
                text: "Deja el teléfono y evita buscar inmediatamente otra actividad para ocupar ese momento."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué aparece cuando surge ese espacio: aburrimiento, inquietud, tranquilidad, ganas de hacer algo, pensamientos o cualquier otra experiencia."
            },
            {
                emoji: "🌿",
                title: "Permanece",
                text: "Permite que el espacio siga vacío durante esos minutos sin convertirlo en otra tarea que tengas que completar."
            }
        ],

        question:
            "¿Qué apareció cuando dejaste un espacio sin llenarlo?"
    },

    {
        id: "soltar-8",
        journey: "soltar",
        day: 8,
        title: "DEJAR PASAR ALGO",
        duration: "10–20 min",
        moment: "Durante una situación cotidiana pequeña que despierte en ti ganas de responder, corregir o intervenir.",
        description:
            "Hay momentos en los que sentimos que tenemos que decir algo, corregir lo ocurrido o hacer que una situación sea diferente. Hoy vas a experimentar qué ocurre cuando eliges dejar pasar una situación pequeña que no necesita de tu intervención.",

        steps: [
            {
                emoji: "🔎",
                title: "Detecta",
                text: "Durante el día, presta atención a una situación pequeña que despierte en ti ganas de intervenir y que puedas dejar pasar sin consecuencias importantes."
            },
            {
                emoji: "⏸️",
                title: "Espera",
                text: "Cuando aparezca el impulso de responder o intervenir, haz una pausa y observa qué ocurre antes de hacer algo."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Si sigue siendo apropiado no intervenir, permite que la situación continúe sin hacer nada al respecto."
            },
            {
                emoji: "👀",
                title: "Continúa",
                text: "Vuelve a lo que estabas haciendo y observa si la situación sigue ocupando tu atención o comienza a quedar atrás."
            }
        ],

        question:
            "¿Qué descubriste al permitir que una situación pequeña pasara sin intervenir?"
    },

    {
        id: "soltar-9",
        journey: "soltar",
        day: 9,
        title: "DEJAR QUE UN PLAN CAMBIE",
        duration: "15–30 min",
        moment: "Durante un día en el que tengas algún plan flexible que pueda modificarse sin generar un problema importante.",
        description:
            "Cuando imaginamos cómo debería desarrollarse un día, un cambio puede hacernos querer recuperar inmediatamente lo que habíamos previsto. Hoy vas a permitir una modificación pequeña y observar qué ocurre cuando dejas que el plan tome otra forma.",

        steps: [
            {
                emoji: "🎯",
                title: "Elige",
                text: "Piensa en un plan sencillo que tengas para hoy y que pueda modificarse sin afectar algo importante."
            },
            {
                emoji: "🔄",
                title: "Cambia",
                text: "Introduce una pequeña modificación en el orden, el momento, el lugar o la manera de realizarlo."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en tu reacción ante el cambio y en cualquier impulso de volver inmediatamente al plan original."
            },
            {
                emoji: "🌿",
                title: "Continúa",
                text: "Sigue con la nueva versión del plan sin dedicar el resto del momento a reconstruir cómo habría sido el anterior."
            }
        ],

        question:
            "¿Qué descubriste al permitir que un plan cambiara sin intentar recuperar inmediatamente lo que habías previsto?"
    },

    {
        id: "soltar-10",
        journey: "soltar",
        day: 10,
        title: "DEJAR DE ESPERAR LO MISMO",
        duration: "10–20 min",
        moment: "En un momento tranquilo, al pensar en una persona o situación de la que suelas esperar algo determinado.",
        description:
            "A veces seguimos esperando que alguien actúe de una manera concreta, que una situación cambie o que algo ocurra como imaginamos. Hoy vas a observar qué sucede cuando dejas de sostener por un momento esa expectativa.",

        steps: [
            {
                emoji: "🔎",
                title: "Reconoce",
                text: "Piensa en una situación cotidiana o en algo que esperas de otra persona."
            },
            {
                emoji: "💭",
                title: "Observa",
                text: "Identifica qué esperas que ocurra y qué has imaginado que debería pasar."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Durante unos minutos, deja de intentar anticipar o construir mentalmente ese resultado. Permite que la situación sea como es en este momento."
            },
            {
                emoji: "👀",
                title: "Vuelve",
                text: "Dirige nuevamente tu atención hacia lo que está ocurriendo ahora, sin buscar señales de que aquello que esperas vaya a suceder."
            }
        ],

        question:
            "¿Qué notaste cuando dejaste de sostener por un momento una expectativa?"
    },

    {
        id: "soltar-11",
        journey: "soltar",
        day: 11,
        title: "DEJAR QUE OTRA PERSONA LO HAGA A SU MANERA",
        duration: "15–30 min",
        moment: "En casa o durante una actividad compartida en la que otra persona pueda encargarse de algo.",
        description:
            "A veces sabemos cómo nos gustaría que otra persona hiciera algo y sentimos la necesidad de indicarle, corregirla o intervenir. Hoy vas a experimentar qué ocurre cuando dejas que alguien haga algo a su propia manera.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Identifica una tarea sencilla que otra persona pueda realizar sin que necesites supervisarla o corregirla."
            },
            {
                emoji: "🤲",
                title: "Suelta",
                text: "Permite que la otra persona se encargue de ella de la manera que considere adecuada."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué ocurre dentro de ti mientras no intervienes: ganas de corregir, preocupación, incomodidad, curiosidad, tranquilidad u otra experiencia."
            },
            {
                emoji: "🌿",
                title: "Permite",
                text: "Cuando termine, recibe el resultado sin compararlo inmediatamente con la forma en que tú lo habrías hecho."
            }
        ],

        question:
            "¿Qué notaste al dejar que otra persona hiciera algo a su manera?"
    },

    {
        id: "soltar-12",
        journey: "soltar",
        day: 12,
        title: "DEJAR UN PENDIENTE PEQUEÑO",
        duration: "10–20 min",
        moment: "En casa, en el trabajo o en otro espacio donde tengas varias tareas pendientes.",
        description:
            "No todo lo pendiente necesita resolverse en cuanto aparece. Hoy vas a elegir algo pequeño que pueda esperar y experimentar qué ocurre cuando permites que permanezca pendiente.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Busca una tarea sencilla que puedas realizar más adelante sin que genere un problema por esperar."
            },
            {
                emoji: "⏸️",
                title: "Deja",
                text: "Decide conscientemente no hacerla todavía, aunque tengas la posibilidad de resolverla ahora."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Presta atención a lo que aparece al verla pendiente: urgencia, incomodidad, alivio, pensamientos o ganas de terminarla."
            },
            {
                emoji: "🌿",
                title: "Continúa",
                text: "Haz otra actividad y permite que esa tarea permanezca pendiente hasta el momento que hayas elegido para retomarla."
            }
        ],

        question:
            "¿Qué ocurrió cuando permitiste que un pendiente pequeño esperara?"
    },

    {
        id: "soltar-13",
        journey: "soltar",
        day: 13,
        title: "DEJAR DE BUSCAR UNA EXPLICACIÓN",
        duration: "10–20 min",
        moment: "En un momento tranquilo, cuando estés pensando en una situación cotidiana que no comprendes completamente.",
        description:
            "Cuando algo no tiene una explicación clara, podemos seguir pensando, preguntando o buscando respuestas hasta sentir que todo encaja. Hoy vas a experimentar qué ocurre cuando dejas una situación sin encontrarle una explicación definitiva.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en una situación pequeña sobre la que todavía tengas preguntas, pero cuya explicación no necesites resolver ahora."
            },
            {
                emoji: "🧠",
                title: "Reconoce",
                text: "Observa qué explicación has intentado encontrar o qué preguntas siguen apareciendo."
            },
            {
                emoji: "⏸️",
                title: "Suelta",
                text: "Durante unos minutos, deja de buscar información, imaginar respuestas o reconstruir mentalmente lo ocurrido."
            },
            {
                emoji: "🌿",
                title: "Continúa",
                text: "Dirige tu atención hacia otra actividad y permite que esa situación permanezca sin una explicación completa por ahora."
            }
        ],

        question:
            "¿Qué notaste al permitir que algo quedara sin una explicación definitiva?"
    },

    {
        id: "soltar-14",
        journey: "soltar",
        day: 14,
        title: "DEJAR DE HACERLO PERFECTO",
        duration: "15–30 min",
        moment: "En casa, en el trabajo o durante una actividad cotidiana en la que puedas aceptar un resultado suficientemente bueno.",
        description:
            "A veces seguimos corrigiendo algo incluso cuando ya cumple su propósito. Hoy vas a experimentar qué ocurre cuando decides detenerte sin buscar que el resultado sea perfecto.",

        steps: [
            {
                emoji: "🎯",
                title: "Elige",
                text: "Busca una actividad sencilla en la que suelas dedicar tiempo a revisar, corregir o mejorar pequeños detalles."
            },
            {
                emoji: "🛑",
                title: "Detente",
                text: "Realiza la actividad hasta alcanzar un resultado adecuado y decide conscientemente no continuar perfeccionándolo."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué aparece cuando sabes que todavía podrías modificar algo: ganas de corregir, duda, incomodidad, alivio u otra experiencia."
            },
            {
                emoji: "🌿",
                title: "Déjalo así",
                text: "Continúa con tu día y permite que el resultado permanezca tal como quedó."
            }
        ],

        question:
            "¿Qué ocurrió cuando decidiste dejar algo suficientemente bien sin seguir perfeccionándolo?"
    },

    {
        id: "soltar-15",
        journey: "soltar",
        day: 15,
        title: "NO DARLE MÁS VUELTAS",
        duration: "10–20 min",
        moment: "En un momento tranquilo en el que notes que estás pensando repetidamente en una misma situación.",
        description:
            "Hay situaciones a las que volvemos mentalmente una y otra vez intentando resolverlas, entenderlas o encontrar una respuesta diferente. Hoy vas a experimentar qué ocurre cuando dejas de volver a ellas durante un tiempo.",

        steps: [
            {
                emoji: "🔎",
                title: "Detecta",
                text: "Cuando notes que estás repitiendo mentalmente una situación, reconoce que estás volviendo a ella."
            },
            {
                emoji: "⏸️",
                title: "Interrumpe",
                text: "En lugar de continuar reconstruyéndola, haz una pausa y deja la situación tal como está en tu mente."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Nota si aparecen ganas de seguir pensando, nuevas preguntas, incomodidad o cualquier otro impulso."
            },
            {
                emoji: "🌿",
                title: "Vuelve",
                text: "Dirige tu atención hacia algo que esté ocurriendo ahora y permite que la situación quede fuera de tu pensamiento durante unos minutos."
            }
        ],

        question:
            "¿Qué cambió cuando dejaste de darle vueltas a una situación durante un momento?"
    },

    {
        id: "soltar-16",
        journey: "soltar",
        day: 16,
        title: "DEJAR DE ANTICIPAR",
        duration: "10–20 min",
        moment: "Antes de una actividad cotidiana que todavía no haya comenzado.",
        description:
            "Podemos pasar tiempo imaginando cómo será algo antes de que ocurra: qué diremos, qué pasará o cómo nos sentiremos. Hoy vas a experimentar qué sucede cuando dejas de preparar mentalmente una situación que todavía no ha ocurrido.",

        steps: [
            {
                emoji: "🔎",
                title: "Detecta",
                text: "Piensa en una actividad próxima sobre la que ya estés imaginando diferentes posibilidades."
            },
            {
                emoji: "👀",
                title: "Reconoce",
                text: "Observa qué estás anticipando y cómo tu mente intenta adelantarse a lo que todavía no ha ocurrido."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Durante unos minutos, deja de construir escenarios sobre esa situación. No necesitas encontrar una forma correcta de prepararte."
            },
            {
                emoji: "📍",
                title: "Vuelve",
                text: "Dirige tu atención hacia lo que estás haciendo ahora y permite que la situación futura llegue cuando corresponda."
            }
        ],

        question:
            "¿Qué notaste al dejar de adelantarte mentalmente a algo que todavía no ocurría?"
    },

    {
        id: "soltar-17",
        journey: "soltar",
        day: 17,
        title: "DEJAR DE COMPARAR",
        duration: "10–20 min",
        moment: "Durante una actividad cotidiana en la que notes que estás comparando tu experiencia con la de otra persona o con una versión anterior de ti.",
        description:
            "Compararnos puede llevarnos a mirar constantemente lo que tenemos, hacemos o somos en relación con algo diferente. Hoy vas a experimentar qué ocurre cuando dejas esa comparación durante un momento.",

        steps: [
            {
                emoji: "🔎",
                title: "Detecta",
                text: "Presta atención a una situación cotidiana en la que aparezca una comparación espontánea."
            },
            {
                emoji: "👀",
                title: "Reconoce",
                text: "Observa qué estás comparando y hacia dónde dirige tu atención esa comparación."
            },
            {
                emoji: "⏸️",
                title: "Suelta",
                text: "Cuando aparezca nuevamente, reconoce que está ahí y deja de continuar con ella."
            },
            {
                emoji: "🌿",
                title: "Vuelve",
                text: "Regresa tu atención a tu propia experiencia: lo que estás haciendo, sintiendo o viviendo en ese momento."
            }
        ],

        question:
            "¿Qué cambió cuando dejaste de comparar por un momento?"
    },

    {
        id: "soltar-18",
        journey: "soltar",
        day: 18,
        title: "DEJAR DE BUSCAR EL MOMENTO PERFECTO",
        duration: "15–30 min",
        moment: "En un momento del día en el que tengas algo sencillo que quieras empezar, pero hayas estado esperando una ocasión ideal.",
        description:
            "A veces esperamos tener más tiempo, más energía, más motivación o mejores condiciones antes de empezar algo. Hoy vas a soltar la búsqueda del momento perfecto y comenzar con lo que tienes disponible.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en algo pequeño que llevas tiempo posponiendo porque estás esperando un momento mejor para hacerlo."
            },
            {
                emoji: "🎯",
                title: "Empieza",
                text: "Dedícale unos minutos utilizando las condiciones que tienes hoy, sin esperar a que sean ideales."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en qué aparece al empezar sin sentir que todo está preparado: resistencia, dudas, alivio, motivación, incomodidad u otra experiencia."
            },
            {
                emoji: "🌿",
                title: "Continúa",
                text: "Haz lo que puedas durante el tiempo disponible y permite que sea suficiente por hoy."
            }
        ],

        question:
            "¿Qué ocurrió cuando dejaste de esperar el momento perfecto y empezaste con lo que tenías?"
    },

    {
        id: "soltar-19",
        journey: "soltar",
        day: 19,
        title: "DEJAR UNA DECISIÓN ATRÁS",
        duration: "10–20 min",
        moment: "En un momento tranquilo, al recordar una decisión pasada sobre la que todavía vuelves a pensar.",
        description:
            "Algunas decisiones siguen ocupando espacio incluso después de haber sido tomadas. Hoy vas a experimentar qué ocurre cuando dejas de revisar una decisión pasada y permites que permanezca en el lugar de la historia en el que ocurrió.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en una decisión pasada que ya no necesites modificar y que todavía aparezca ocasionalmente en tus pensamientos."
            },
            {
                emoji: "🧠",
                title: "Reconoce",
                text: "Observa qué sueles pensar cuando vuelves a ella: qué habría ocurrido, qué habrías hecho diferente o qué resultado te habría gustado obtener."
            },
            {
                emoji: "⏸️",
                title: "Suelta",
                text: "Cuando aparezca nuevamente durante este momento, reconoce el pensamiento sin volver a reconstruir la decisión."
            },
            {
                emoji: "🌿",
                title: "Regresa",
                text: "Dirige tu atención hacia algo que forma parte de tu vida actual y permite que aquella decisión permanezca en el pasado."
            }
        ],

        question:
            "¿Qué notaste al dejar de revisar una decisión que ya forma parte de tu pasado?"
    },

    {
        id: "soltar-20",
        journey: "soltar",
        day: 20,
        title: "PERMITIR QUE ALGO TERMINE",
        duration: "15–30 min",
        moment: "En casa o en un lugar tranquilo, durante un momento en el que puedas cerrar una actividad, etapa o experiencia cotidiana que ya haya llegado a su final.",
        description:
            "A veces continuamos alargando algo incluso cuando ya terminó o cuando sabemos que ha llegado el momento de cerrarlo. Hoy vas a experimentar qué ocurre cuando reconoces un final y permites que algo termine.",

        steps: [
            {
                emoji: "🔎",
                title: "Reconoce",
                text: "Identifica algo pequeño que ya haya llegado a su final: una actividad, un proyecto, una etapa, una rutina o una experiencia."
            },
            {
                emoji: "🚪",
                title: "Cierra",
                text: "Realiza una acción concreta que marque su final: guardar lo necesario, retirar algo de tu espacio, cerrar una carpeta, terminar una actividad o dejar de dedicarle tiempo."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Después de cerrarlo, evita volver inmediatamente a revisarlo, modificarlo o prolongarlo."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Permanece unos momentos con la experiencia de haber terminado y nota qué aparece al dejar que ese final sea un final."
            }
        ],

        question:
            "¿Qué sentiste al permitir que algo terminara sin prolongarlo?"
    },

    {
        id: "soltar-21",
        journey: "soltar",
        day: 21,
        title: "ACEPTAR QUE YA CAMBIÓ",
        duration: "10–20 min",
        moment: "En un momento tranquilo, al pensar en una situación, etapa o relación que haya cambiado con el tiempo.",
        description:
            "A veces seguimos relacionándonos con algo desde la forma en que era antes, aunque las circunstancias hayan cambiado. Hoy vas a experimentar qué ocurre cuando dejas de intentar recuperar lo que ya cambió y te acercas a cómo es ahora.",

        steps: [
            {
                emoji: "🔎",
                title: "Reconoce",
                text: "Piensa en algo que haya cambiado con el tiempo y que todavía te cueste reconocer tal como es actualmente."
            },
            {
                emoji: "💭",
                title: "Observa",
                text: "Fíjate en qué parte de aquello anterior sigues esperando, buscando o intentando mantener."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Durante unos minutos, deja de comparar el presente con lo que era antes y permite que la situación sea como es ahora."
            },
            {
                emoji: "👀",
                title: "Mira",
                text: "Observa qué aparece cuando dejas de intentar recuperar aquello que cambió."
            }
        ],

        question:
            "¿Qué descubriste al permitir que algo fuera diferente de como era antes?"
    },

    {
        id: "soltar-22",
        journey: "soltar",
        day: 22,
        title: "DESPEDIRME DE UNA ETAPA",
        duration: "15–30 min",
        moment: "En un lugar tranquilo, al pensar en una etapa, experiencia, costumbre o situación que haya llegado a su fin.",
        description:
            "Hay etapas que terminan, pero seguimos llevándolas con nosotros de diferentes maneras. Hoy vas a realizar un pequeño gesto para reconocer que algo terminó y permitirte dejarlo atrás.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en una etapa, experiencia, costumbre o situación que haya tenido significado para ti y que ya no forme parte de tu vida de la misma manera."
            },
            {
                emoji: "💭",
                title: "Recuerda",
                text: "Dedica unos minutos a reconocer qué significó para ti y qué lugar ocupó en tu historia."
            },
            {
                emoji: "🤍",
                title: "Despídete",
                text: "Realiza un gesto que represente el cierre de esa etapa: guardar algo, escribir unas líneas, retirar un objeto de tu espacio o simplemente reconocer en voz alta que ha terminado."
            },
            {
                emoji: "🌿",
                title: "Continúa",
                text: "Después del gesto, vuelve a tu presente y permite que aquello quede como parte de tu historia sin necesidad de seguir sosteniéndolo de la misma manera."
            }
        ],

        question:
            "¿Qué significó para ti reconocer el final de una etapa y permitirte continuar?"
    },

    {
        id: "soltar-23",
        journey: "soltar",
        day: 23,
        title: "DEJAR ATRÁS UNA EXPECTATIVA",
        duration: "10–20 min",
        moment: "En un momento tranquilo, cuando puedas pensar en algo que esperabas que ocurriera de una manera determinada.",
        description:
            "Algunas expectativas nos acompañan durante mucho tiempo y pueden mantenernos pendientes de un resultado que quizá nunca llegue de la forma que imaginamos. Hoy vas a experimentar qué ocurre cuando dejas espacio para que esa expectativa cambie.",

        steps: [
            {
                emoji: "🔎",
                title: "Identifica",
                text: "Piensa en algo que esperabas que ocurriera de determinada manera y que no sucedió así."
            },
            {
                emoji: "🧠",
                title: "Reconoce",
                text: "Observa qué imaginabas que ocurriría y qué significado tenía para ti que sucediera de esa forma."
            },
            {
                emoji: "🌿",
                title: "Afloja",
                text: "Permítete reconocer que esa expectativa existió sin necesitar mantenerla como una condición para estar bien con lo que ocurre ahora."
            },
            {
                emoji: "📍",
                title: "Vuelve",
                text: "Dirige tu atención hacia aquello que sí forma parte de tu realidad actual y observa qué posibilidades aparecen cuando dejas de sostener aquella expectativa."
            }
        ],

        question:
            "¿Qué espacio apareció al dejar de sostener una expectativa que ya no corresponde a tu realidad?"
    },

    {
        id: "soltar-24",
        journey: "soltar",
        day: 24,
        title: "ACEPTAR QUE NO PUEDO CAMBIARLO",
        duration: "10–20 min",
        moment: "En un momento tranquilo, pensando en una situación pasada o presente sobre la que ya no tengas capacidad de intervenir.",
        description:
            "Hay situaciones sobre las que podemos seguir pensando aunque ya no exista una acción que pueda modificarlas. Hoy vas a practicar reconocer ese límite y dejar de dedicarle energía durante un momento.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en algo que haya ocurrido o esté ocurriendo y sobre lo que actualmente no puedas realizar una acción que lo cambie."
            },
            {
                emoji: "🧭",
                title: "Distingue",
                text: "Pregúntate qué parte está realmente bajo tu control y qué parte ya no depende de ti."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Durante unos minutos, deja de buscar mentalmente una manera de cambiar aquello que no puedes modificar."
            },
            {
                emoji: "🎯",
                title: "Vuelve",
                text: "Dirige tu atención hacia algo sobre lo que sí puedas actuar ahora y realiza una pequeña acción relacionada con ello."
            }
        ],

        question:
            "¿Qué notaste al distinguir entre aquello que puedes cambiar y aquello que no depende de ti?"
    },

    {
        id: "soltar-25",
        journey: "soltar",
        day: 25,
        title: "DEJAR DE SER QUIEN ERA",
        duration: "15–30 min",
        moment: "En un momento tranquilo, cuando puedas recordar una etapa anterior de tu vida.",
        description:
            "A veces seguimos midiéndonos con una versión anterior de nosotros mismos: cómo éramos, qué hacíamos, qué queríamos o cómo respondíamos. Hoy vas a experimentar qué ocurre cuando dejas de exigirte seguir siendo esa persona.",

        steps: [
            {
                emoji: "💭",
                title: "Recuerda",
                text: "Piensa en una versión anterior de ti que haya sido importante en alguna etapa de tu vida."
            },
            {
                emoji: "🔎",
                title: "Reconoce",
                text: "Observa qué características, hábitos, intereses o expectativas de aquella etapa ya no forman parte de quien eres actualmente."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Elige una de esas características que ya no necesitas mantener y permítete reconocer que puedes haber cambiado."
            },
            {
                emoji: "✨",
                title: "Continúa",
                text: "Piensa en algo que sí forma parte de quién eres hoy y dedica unos momentos a reconocerlo."
            }
        ],

        question:
            "¿Qué ocurrió cuando te permitiste dejar atrás una versión anterior de ti?"
    },

    {
        id: "soltar-26",
        journey: "soltar",
        day: 26,
        title: "SOLTAR LO QUE YA NO ME REPRESENTA",
        duration: "15–30 min",
        moment: "En casa o en un lugar donde puedas revisar algo que forme parte de tu vida cotidiana.",
        description:
            "Con el tiempo podemos mantener objetos, actividades, costumbres o formas de presentarnos que ya no reflejan quiénes somos. Hoy vas a identificar algo que ya no sientas propio.",

        steps: [
            {
                emoji: "🔎",
                title: "Busca",
                text: "Recorre un espacio o piensa en alguna parte de tu vida y encuentra algo que ya no sientas que te representa."
            },
            {
                emoji: "💭",
                title: "Reconoce",
                text: "Pregúntate qué significado tenía para ti antes y qué ha cambiado desde entonces."
            },
            {
                emoji: "🌿",
                title: "Suelta",
                text: "Elige qué hacer con ello: retirarlo de tu espacio, dejar de utilizarlo, modificarlo o simplemente reconocer que ya no necesitas mantenerlo de la misma manera."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Fíjate en cómo se siente dejar espacio para algo que representa mejor quién eres actualmente."
            }
        ],

        question:
            "¿Qué descubriste al dejar espacio para algo que representa mejor quién eres hoy?"
    },

    {
        id: "soltar-27",
        journey: "soltar",
        day: 27,
        title: "PERMITIRME NO TENER UNA RESPUESTA",
        duration: "10–20 min",
        moment: "En un momento tranquilo, cuando tengas alguna pregunta o situación que todavía no puedas resolver.",
        description:
            "No siempre podemos saber qué ocurrirá, por qué ocurrió algo o qué decisión será la correcta. Hoy vas a practicar dejar una pregunta abierta sin intentar resolverla inmediatamente.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en una pregunta que tengas actualmente y cuya respuesta no necesites encontrar hoy."
            },
            {
                emoji: "🧠",
                title: "Observa",
                text: "Fíjate en qué hace tu mente cuando intenta encontrar una respuesta: buscar posibilidades, imaginar escenarios, revisar información o repetir la pregunta."
            },
            {
                emoji: "🌿",
                title: "Permite",
                text: "Durante unos minutos, deja la pregunta abierta. No busques una respuesta nueva ni intentes llegar a una conclusión."
            },
            {
                emoji: "📍",
                title: "Continúa",
                text: "Haz algo que forme parte de tu día y permite que la pregunta permanezca sin resolver por ahora."
            }
        ],

        question:
            "¿Qué ocurrió cuando permitiste no tener una respuesta por un momento?"
    },

    {
        id: "soltar-28",
        journey: "soltar",
        day: 28,
        title: "LLEVARME LO QUE SÍ QUIERO CONSERVAR",
        duration: "15–30 min",
        moment: "En un momento tranquilo, al pensar en una experiencia, etapa o situación que estés dejando atrás.",
        description:
            "Soltar no significa perderlo todo. A veces podemos dejar atrás una etapa y conservar aquello que aprendimos, disfrutamos o queremos seguir llevando con nosotros.",

        steps: [
            {
                emoji: "🔎",
                title: "Elige",
                text: "Piensa en algo que estés dejando atrás o que ya haya cambiado y que haya tenido significado para ti."
            },
            {
                emoji: "🌿",
                title: "Separa",
                text: "Distingue entre aquello que quieres dejar en esa etapa y aquello que sí quieres conservar."
            },
            {
                emoji: "📝",
                title: "Nombra",
                text: "Escribe o expresa brevemente qué quieres llevarte contigo: un aprendizaje, una experiencia, una habilidad, un recuerdo, un valor o algo que haya sido importante."
            },
            {
                emoji: "🎒",
                title: "Continúa",
                text: "Después, piensa en una manera concreta de incorporar aquello que quieres conservar a tu vida actual."
            }
        ],

        question:
            "¿Qué elegiste conservar de aquello que estás dejando atrás?"
    },

    {
        id: "soltar-29",
        journey: "soltar",
        day: 29,
        title: "HACER ESPACIO PARA LO NUEVO",
        duration: "15–30 min",
        moment: "En casa o durante un momento en el que puedas liberar un pequeño espacio físico o de tiempo.",
        description:
            "Cuando dejamos algo atrás también podemos crear espacio para aquello que todavía no conocemos. Hoy vas a experimentar qué ocurre cuando liberas deliberadamente un pequeño espacio en tu vida.",

        steps: [
            {
                emoji: "🧹",
                title: "Libera",
                text: "Elige un pequeño espacio físico, de tiempo o de atención que actualmente esté ocupado y que puedas dejar disponible."
            },
            {
                emoji: "🌿",
                title: "Deja",
                text: "Retira, termina o aparta aquello que ya no necesites mantener allí, sin reemplazarlo inmediatamente por otra cosa."
            },
            {
                emoji: "👀",
                title: "Observa",
                text: "Permanece unos momentos con ese espacio disponible y fíjate en qué sensación produce no tener que llenarlo enseguida."
            },
            {
                emoji: "✨",
                title: "Imagina",
                text: "Piensa brevemente en qué te gustaría que pudiera ocupar ese espacio en el futuro, sin decidir todavía qué será."
            }
        ],

        question:
            "¿Qué sentiste al crear un espacio que todavía no necesitaba ser llenado?"
    },

    {
        id: "soltar-30",
        journey: "soltar",
        day: 30,
        title: "EMPEZAR CON MENOS",
        duration: "15–30 min",
        moment: "En un momento tranquilo, al cerrar este recorrido y pensar en lo que quieres llevar contigo hacia adelante.",
        description:
            "Soltar también puede significar continuar con menos peso, menos exigencias y menos cosas que ya no necesitas sostener. Hoy vas a cerrar este recorrido eligiendo conscientemente qué quieres dejar atrás y con qué quieres continuar.",

        steps: [
            {
                emoji: "🧭",
                title: "Revisar",
                text: "Piensa en las experiencias de estos días y reconoce qué cosas has experimentado que te gustaría dejar de sostener."
            },
            {
                emoji: "🔎",
                title: "Elegir",
                text: "Identifica una carga, expectativa, hábito, pensamiento o forma de hacer las cosas que ya no quieras llevar contigo de la misma manera."
            },
            {
                emoji: "🌿",
                title: "Soltar",
                text: "Formula una acción concreta que represente que estás dejando eso atrás y, si es posible, realízala hoy."
            },
            {
                emoji: "🎒",
                title: "Llevar",
                text: "Después, identifica algo que sí quieras conservar de este recorrido y piensa en cómo puedes incorporarlo a tu vida cotidiana."
            }
        ],

        question:
            "¿Qué quieres dejar atrás y qué eliges llevar contigo a partir de ahora?"
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
