<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Respuesta institucional y rutas de atención',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conocimientos relacionados con la atención institucional, la comunicación, la normativa aplicable, los mapas de procesos, las rutas de atención, los sistemas de información, el seguimiento y la calidad, mediante el análisis de situaciones asociadas con la gestión de requerimientos institucionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Felicitaciones! Usted alcanzó al menos el 70 % de respuestas correctas. Demuestra comprensión de los criterios para gestionar requerimientos, construir rutas de atención y valorar la calidad de las respuestas institucionales. Revise las retroalimentaciones y repita la actividad si desea afianzar sus aprendizajes.',
      mensaje_reprobado:
        'Usted aún no alcanza el 70 % de respuestas correctas. Revise las retroalimentaciones y retome los temas que necesita fortalecer. Recuerde que esta actividad no es calificable y puede repetirla cuantas veces desee.',
      preguntas: [
        {
          id: 1,
          texto:
            'Una persona presenta una solicitud extensa y poco precisa. Antes de orientarla, ¿qué debe hacer para iniciar una atención pertinente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Remitirla de inmediato a la dependencia que reciba más solicitudes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Responder únicamente la parte que resulte más fácil de identificar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar quién presenta el requerimiento, qué necesita y qué actuación puede requerirse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solicitar que la persona formule nuevamente toda la petición con lenguaje técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted inicia la atención comprendiendo la necesidad antes de definir la actuación o la ruta institucional.',
          mensaje_incorrecto:
            'Revise el diagnóstico de requerimientos del capítulo 1. Primero comprenda quién solicita, qué necesita y qué actuación puede corresponder.',
        },
        {
          id: 2,
          texto:
            'Una persona requiere orientación sobre un servicio institucional. ¿Qué actuación refleja una atención centrada en el ciudadano?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprender su necesidad y orientarla de acuerdo con las competencias y lineamientos institucionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Entregar toda la información disponible, aunque no se relacione con su solicitud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Indicar que consulte diferentes dependencias hasta encontrar una respuesta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar la misma respuesta a cualquier solicitud para asegurar uniformidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted centra la atención en comprender la necesidad y relacionarla con la actuación institucional pertinente.',
          mensaje_incorrecto:
            'Repase servicio público y atención centrada en el ciudadano en el capítulo 1. La orientación debe partir de la necesidad concreta de la persona.',
        },
        {
          id: 3,
          texto:
            'Una respuesta puede ser legalmente procedente, pero llega cuando ya no resulta útil para la persona. ¿Qué atributo de calidad se encuentra principalmente afectado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La fundamentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La responsabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La claridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La oportunidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que una respuesta de calidad debe proporcionarse en un momento que permita atender efectivamente la necesidad.',
          mensaje_incorrecto:
            'Revise los atributos de una respuesta institucional de calidad en el capítulo 1. Distinga la oportunidad de la claridad, pertinencia y fundamentación.',
        },
        {
          id: 4,
          texto:
            'Dos personas requieren el mismo servicio, pero una enfrenta una barrera que dificulta su acceso. ¿Qué criterio debe orientar la atención?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aplicar exactamente el mismo mecanismo sin considerar las condiciones de acceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocer la situación particular y adecuar la orientación dentro de los lineamientos aplicables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Modificar libremente el procedimiento para garantizar un resultado favorable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trasladar el requerimiento a otra dependencia sin analizar la barrera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que la atención puede considerar condiciones particulares sin apartarse de los lineamientos institucionales.',
          mensaje_incorrecto:
            'Revise atención centrada en el ciudadano y respuesta diferencial. Igualdad no significa ignorar barreras que afectan el acceso al servicio.',
        },
        {
          id: 5,
          texto:
            'Debe redactar una respuesta institucional sobre un procedimiento técnico. ¿Qué decisión favorece el lenguaje claro?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conservar todos los tecnicismos sin explicación para demostrar precisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar la información y explicar los conceptos necesarios para que la persona comprenda qué se responde y cómo continuar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir la respuesta a una frase, aunque omita información necesaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reproducir literalmente la norma sin relacionarla con el requerimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted utiliza lenguaje claro al organizar y explicar la información de manera comprensible y útil para la persona.',
          mensaje_incorrecto:
            'Revise lenguaje claro en el capítulo 2. Una respuesta clara permite comprender qué se responde, por qué y qué debe hacerse después, cuando corresponda.',
        },
        {
          id: 6,
          texto:
            'Una persona manifiesta inconformidad y eleva el tono durante la atención. ¿Qué actuación es más adecuada?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responder con el mismo tono para establecer límites.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Interrumpir la atención antes de precisar el motivo de la inconformidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar explicar las competencias institucionales para no aumentar el conflicto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Escuchar, precisar la situación, verificar la información y orientar con respeto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted aplica una comunicación asertiva al reconocer la situación, verificarla y orientar sin escalar el conflicto.',
          mensaje_incorrecto:
            'Repase manejo de situaciones de conflicto en el capítulo 2. Separe a la persona del problema y oriente la conversación hacia la necesidad y la información verificable.',
        },
        {
          id: 7,
          texto:
            'Antes de enviar una comunicación institucional, ¿qué revisión contribuye a una producción escrita adecuada?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprobar propósito, pertinencia, organización, precisión, corrección y tono institucional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumentar la extensión para que la respuesta parezca más completa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar expresiones técnicas aunque la persona no pueda comprenderlas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la orientación posterior para reducir el contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce los criterios que permiten revisar la calidad formal y comunicativa de una respuesta escrita.',
          mensaje_incorrecto:
            'Revise las normas de producción escrita del capítulo 2. Valore el propósito, la organización, la precisión, la corrección y el tono de la comunicación.',
        },
        {
          id: 8,
          texto:
            '¿Cuál secuencia representa mejor la construcción de una respuesta institucional?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Redactar, enviar, identificar la necesidad y verificar después.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comunicar una respuesta general y luego determinar la competencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Diagnosticar el requerimiento, verificar información, determinar la actuación, construir y comunicar la respuesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Seleccionar primero una dependencia y adaptar posteriormente el requerimiento a sus funciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que la respuesta se construye a partir de la comprensión y verificación del requerimiento antes de comunicarla.',
          mensaje_incorrecto:
            'Repase construcción y comunicación de respuestas en el capítulo 2. La redacción no es el punto de partida; primero se comprende y verifica la situación.',
        },
        {
          id: 9,
          texto:
            'Una comunicación solicita información y una actuación concreta, aunque no utiliza la expresión “derecho de petición”. ¿Cómo debe analizarla?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Descartarla como petición porque no emplea esa denominación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tratarla únicamente como una consulta informal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solicitar que la persona cambie el título antes de tramitarla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar su naturaleza por el contenido y la finalidad de lo solicitado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que la naturaleza de una petición depende de su contenido y finalidad, no únicamente del nombre utilizado.',
          mensaje_incorrecto:
            'Revise derecho de petición en el capítulo 3. Analice qué solicita realmente la persona antes de definir el tratamiento correspondiente.',
        },
        {
          id: 10,
          texto:
            'Una persona solicita información institucional que incluye datos personales de terceros. ¿Qué debe hacer antes de suministrarla?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Entregar toda la información porque se encuentra en poder de una entidad pública.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Negar automáticamente cualquier documento que contenga datos personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar el acceso a la información y las condiciones legales aplicables al tratamiento de los datos involucrados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Publicar el documento completo y permitir que la persona seleccione lo que necesita.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted articula transparencia y protección de datos al analizar qué información puede suministrarse y bajo qué condiciones.',
          mensaje_incorrecto:
            'Repase transparencia y protección de datos en el capítulo 3. El acceso a información pública no implica divulgar libremente datos sometidos a protección.',
        },
        {
          id: 11,
          texto:
            'Al gestionar datos personales en una respuesta, ¿qué actuación es coherente con su tratamiento responsable?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizarlos para cualquier finalidad institucional una vez han sido recopilados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usarlos únicamente conforme con la finalidad, autorización o fundamento aplicable y las condiciones de seguridad correspondientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Compartirlos entre todas las dependencias para facilitar futuras consultas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conservar copias personales para agilizar solicitudes posteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted relaciona el tratamiento de datos con la finalidad, el fundamento aplicable y las condiciones de seguridad.',
          mensaje_incorrecto:
            'Revise protección de datos personales en el capítulo 3. Tener acceso a un dato no autoriza su utilización o divulgación para cualquier finalidad.',
        },
        {
          id: 12,
          texto:
            'Identifica la norma aplicable a un requerimiento. ¿Qué debe hacer para convertir ese referente en una actuación institucional adecuada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Relacionarla con el procedimiento, la competencia y la ruta institucional correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Citarla textualmente y dar por terminada la atención.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicarla sin revisar la naturaleza de la solicitud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los lineamientos institucionales por una interpretación personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted comprende que la norma orienta la decisión y que el procedimiento institucional permite llevarla a la práctica.',
          mensaje_incorrecto:
            'Revise aplicación de la normativa en el capítulo 3. Relacione la norma con el requerimiento, el procedimiento y la competencia institucional.',
        },
        {
          id: 13,
          texto:
            'Recibe un requerimiento y necesita establecer por dónde debe gestionarse. ¿Para qué le resulta útil interpretar el mapa de procesos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para identificar el proceso relacionado y comprender posibles articulaciones con otras actuaciones institucionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para seleccionar siempre el proceso con mayor número de dependencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reemplazar la consulta de normas y procedimientos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para asignar el requerimiento al proceso más cercano físicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted utiliza el mapa de procesos para relacionar la necesidad con los procesos y sus interrelaciones.',
          mensaje_incorrecto:
            'Repase mapas de procesos en el capítulo 4. Su utilidad está en comprender cómo una necesidad se relaciona con las actuaciones de la entidad.',
        },
        {
          id: 14,
          texto:
            'Un requerimiento necesita información de más de un proceso institucional. ¿Cómo debe interpretarse esta situación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como un error, porque cada requerimiento solo puede relacionarse con un proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como una posible articulación entre un proceso principal y otros que aportan información, recursos o actuaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como una razón para responder sin identificar competencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como una autorización para remitir simultáneamente a todas las dependencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que un requerimiento puede involucrar un proceso relacionado y otros procesos articulados.',
          mensaje_incorrecto:
            'Revise interrelación de procesos en el capítulo 4. Identifique el proceso principal y determine qué otros pueden aportar a la gestión.',
        },
        {
          id: 15,
          texto:
            '¿Qué secuencia permite construir una ruta de atención institucional de manera sustentada?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elegir un canal, enviar la solicitud y revisar después la competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar una dependencia conocida y adaptar la solicitud a sus funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar el requerimiento, clasificar su naturaleza, verificar el marco aplicable, reconocer el proceso y determinar la competencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Responder primero y registrar posteriormente el proceso que pudo intervenir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted construye la ruta a partir de la necesidad, el marco aplicable, el proceso y la competencia institucional.',
          mensaje_incorrecto:
            'Repase construcción de rutas en el capítulo 4. Direccionar no consiste en escoger rápidamente una dependencia, sino en sustentar la ruta.',
        },
        {
          id: 16,
          texto:
            'Una persona ubicada en un territorio con limitaciones de conectividad necesita continuar una gestión. ¿Qué actuación refleja el enfoque territorial?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exigir el mismo canal digital sin considerar las condiciones del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Suspender la orientación hasta que la persona disponga de mejor conectividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificar las competencias institucionales para resolver el caso directamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Considerar ubicación, conectividad y canales disponibles para orientar una alternativa institucional pertinente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted aplica el enfoque territorial al considerar condiciones del entorno que pueden afectar el acceso a la atención.',
          mensaje_incorrecto:
            'Revise enfoque territorial en el capítulo 4. Considere ubicación, conectividad y canales disponibles sin alterar arbitrariamente las competencias o procedimientos.',
        },
        {
          id: 17,
          texto:
            'Durante la gestión de un requerimiento, ¿qué uso de un sistema de información contribuye a la continuidad de la atención?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar únicamente el resultado final y omitir las actuaciones intermedias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Consultar datos sin considerar su relación con la gestión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar, consultar y actualizar la información pertinente de acuerdo con las actuaciones realizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Conservar la información fuera de los mecanismos institucionales para acceder más rápido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que los sistemas de información apoyan el registro, consulta y actualización de datos necesarios para la gestión.',
          mensaje_incorrecto:
            'Repase sistemas de información institucional en el capítulo 5. Su uso debe apoyar la gestión mediante información pertinente y responsable.',
        },
        {
          id: 18,
          texto:
            '¿Cuál afirmación diferencia correctamente seguimiento y trazabilidad?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El seguimiento registra datos personales y la trazabilidad autoriza su divulgación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El seguimiento reemplaza el registro y la trazabilidad elimina antecedentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ambos conceptos significan exactamente lo mismo y pueden utilizarse indistintamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El seguimiento permite conocer el estado de una gestión y la trazabilidad reconstruir su recorrido mediante registros y evidencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted distingue el estado actual de una gestión de la posibilidad de reconstruir las actuaciones realizadas.',
          mensaje_incorrecto:
            'Revise seguimiento y trazabilidad en el capítulo 5. Pregúntese: seguimiento, ¿en qué estado está?; trazabilidad, ¿qué recorrido tuvo?',
        },
        {
          id: 19,
          texto:
            'Antes de finalizar una atención, detecta que la respuesta es correcta pero no quedó registro de una actuación necesaria. ¿Qué debe hacer?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Completar el registro correspondiente conforme con el procedimiento antes de considerar cerrada la gestión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cerrar la atención porque el contenido de la respuesta es suficiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conservar una nota personal como único respaldo de la actuación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solicitar a la persona usuaria que documente internamente el trámite.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que el registro de las actuaciones contribuye al seguimiento, la trazabilidad y la calidad de la gestión.',
          mensaje_incorrecto:
            'Repase seguimiento y calidad en el capítulo 5. Una respuesta no se completa únicamente con su comunicación; las actuaciones requeridas deben quedar registradas.',
        },
        {
          id: 20,
          texto:
            'Al evaluar la calidad de una respuesta institucional, ¿qué conjunto de criterios ofrece una revisión más completa?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Extensión, cantidad de anexos y número de personas que intervinieron.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pertinencia, claridad, fundamentación, oportunidad, integralidad, trazabilidad y seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Rapidez, brevedad y uso de lenguaje técnico, sin considerar el requerimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Número de sistemas consultados y cantidad de remisiones realizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted integra criterios que permiten valorar tanto el contenido de la respuesta como la gestión que la sustenta.',
          mensaje_incorrecto:
            'Repase evaluación de la calidad en el capítulo 5. Considere la pertinencia, claridad, fundamento, oportunidad, integralidad, trazabilidad y seguridad de la respuesta.',
        },
      ],
    },
  }),
}
</script>
