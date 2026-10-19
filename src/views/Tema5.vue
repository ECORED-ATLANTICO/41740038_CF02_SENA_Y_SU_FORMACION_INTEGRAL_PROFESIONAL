<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Información, seguimiento y calidad de la respuesta

    .bloque-texto-g.bg-color-00.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de un requerimiento institucional no finaliza cuando se identifica una ruta o se comunica una respuesta. Durante su atención se genera y utiliza información que debe ser registrada, tratada y consultada de acuerdo con los mecanismos institucionales establecidos. Además, resulta necesario conservar elementos que permitan conocer qué actuaciones se realizaron y evaluar si la respuesta proporcionada cumplió su propósito.

    p.mb-4 Los sistemas de información, los canales institucionales y los mecanismos de seguimiento contribuyen a este proceso. Su utilización permite organizar la información, apoyar la gestión de los requerimientos y mantener la trazabilidad de las actuaciones realizadas.
    

    .bg-full-width.bg-fondo-1
      .container
        .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-3
          .col-lg-auto.d-none.d-lg-block.order-1
            img(src="@/assets/curso/tema5/img02.svg", style="max-width: 90px").mx-auto
          .col-lg.order-2
            p.mb-0 A su vez, evaluar la calidad de una respuesta permite reconocer si esta fue pertinente frente a la necesidad identificada, si utilizó información adecuada y si se gestionó de acuerdo con los procedimientos y lineamientos aplicables.

      p.mb-3 En este capítulo se integran estos elementos para comprender que responder también implica registrar, hacer seguimiento y evaluar.

      separador
      
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Sistemas de información institucional


      p.mb-4 Los sistemas de información permiten registrar, organizar, consultar, procesar y recuperar datos necesarios para apoyar diferentes actuaciones institucionales. En la atención de requerimientos, su utilización facilita el acceso a información relacionada con servicios, procesos, usuarios y actuaciones realizadas.

      
      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
          .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema5/img03.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
            p.mb-0(data-aos="fade-right") Sin embargo, disponer de un sistema no garantiza por sí mismo una gestión adecuada. La información debe utilizarse de acuerdo con la finalidad para la cual se requiere, las responsabilidades asociadas al rol de quien la consulta y las condiciones institucionales para su tratamiento.

      p.mb-4 Por esta razón, el aprendiz no necesita memorizar una lista extensa de aplicativos. Lo fundamental es comprender para qué se utiliza un sistema de información dentro de una ruta de atención y qué responsabilidad implica su uso.

      
      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo_2
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
            h3.titulo-con-imagen__texto_2 ¿Cómo apoyan los sistemas de información la atención institucional?


      .row.align-items-center.mb-4.mb-lg-5
        .col-lg-auto.d-none.d-lg-block.order-1
          img(src="@/assets/curso/tema5/img04.svg", style="max-width: 90px").mx-auto
        .col-lg.order-2
          p.mb-0 Los sistemas de información apoyan diferentes momentos de la atención institucional. Permiten registrar los datos necesarios, consultar información para gestionar los requerimientos, mantener actualizados los registros y facilitar el seguimiento de las actuaciones. A continuación, se presentan cinco funciones que contribuyen a este proceso.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img05.png", data-aos="zoom-in").mx-auto.w-md-75

      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Registrar")
            p.mb-0 Permite incorporar la información necesaria sobre el requerimiento y las actuaciones realizadas durante su gestión. Un registro adecuado facilita la continuidad de la atención y contribuye a conservar evidencia de las acciones efectuadas.
          .tarjeta(titulo="Consultar")
            p.mb-0 Facilita el acceso a la información necesaria para comprender, gestionar o responder un requerimiento. La consulta debe realizarse de acuerdo con las responsabilidades asignadas y utilizar únicamente la información pertinente para la actuación.
          .tarjeta(titulo="Actualizar")
            p.mb-0 Permite mantener los registros de acuerdo con las actuaciones realizadas y los cambios producidos durante la gestión. La actualización contribuye a disponer de información pertinente para orientar las decisiones posteriores.
          .tarjeta(titulo="Hacer seguimiento")
            p.mb-0 Facilita la consulta del estado o avance de una gestión cuando el procedimiento y el sistema correspondiente lo permiten. De esta manera, es posible reconocer las actuaciones desarrolladas y aquellas que aún están pendientes.
          .tarjeta(titulo="Recuperar información")
            p.mb-0 Permite localizar antecedentes, registros o actuaciones previas necesarios para comprender el recorrido de un requerimiento y apoyar su gestión. Esta función favorece la continuidad y la trazabilidad de la atención.


    .row.mb-lg-5.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        p.mb-3 Estas funciones se complementan entre sí. Registrar, consultar, actualizar, hacer seguimiento y recuperar información permite que los sistemas institucionales apoyen la gestión de los requerimientos y contribuyan a mantener la trazabilidad de las actuaciones.

        .cajon.bg-color-02.p-4.mb-0
          p.mb-0 Un sistema de información es una herramienta para apoyar la gestión; la pertinencia de la respuesta depende de cómo se utiliza la información disponible.
        
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Canales y tratamiento de la información
        

    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema5/img06.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Los requerimientos institucionales pueden recibirse y gestionarse mediante diferentes canales. La selección o utilización del canal debe guardar relación con la naturaleza de la actuación, los mecanismos dispuestos por la entidad y las condiciones de acceso de las personas.

    .row.mb-lg-5.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-3
        p.mb-0 El canal cumple una función más amplia que permitir el contacto con la entidad. Dependiendo del procedimiento, puede facilitar la recepción del requerimiento, el registro de información, la comunicación de la respuesta y la conservación de elementos necesarios para su seguimiento.
      
      .col-lg-12.col-md-12
        p.mb-0 Por esta razón, durante la atención resulta necesario diferenciar entre canal de comunicación y tratamiento de la información. El primero permite establecer la interacción; el segundo comprende las actuaciones realizadas con la información durante su gestión.
        
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 5.
          span Canal de comunicación y tratamiento de la información
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 50%") Canal de comunicación
                th(style="width: 50%") Tratamiento de la información
            tbody
              tr
                td Permite establecer interacción entre la persona y la entidad.
                td Comprende las actuaciones realizadas con la información durante su gestión.
              tr
                td Facilita la recepción o comunicación de información.
                td Puede involucrar registro, consulta, actualización, almacenamiento o circulación.
              tr
                td Puede variar según el servicio o procedimiento.
                td Debe responder a una finalidad institucional y a las condiciones aplicables.
              tr
                td Constituye un medio para la atención.
                td Forma parte de la gestión responsable de la información.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        p.mb-3 Una misma atención puede involucrar varios momentos y herramientas. Por ejemplo, un requerimiento puede recibirse mediante un canal determinado, registrarse en un sistema institucional y posteriormente comunicarse la respuesta por el mecanismo establecido.

        .cajon.bg-color-02.p-4.mb-0
          p.mb-0 Lo importante es conservar coherencia entre el requerimiento, el canal, el procedimiento y la información gestionada.
        

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado

    p.mb-4 Una persona realiza una consulta mediante un canal institucional. Para atenderla, quien recibe el requerimiento necesita consultar información registrada en un sistema.

    .row.align-items-center.mb-4.mb-lg-4
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema5/img07.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-0 La posibilidad de acceder al sistema no significa que toda la información encontrada deba incorporarse a la respuesta. Es necesario seleccionar únicamente aquella que resulte pertinente y pueda utilizarse de acuerdo con las condiciones aplicables.

    p.mb-3 Así, el tratamiento responsable de la información acompaña toda la ruta de atención.


    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Seguridad de la información

    .bg-full-width.bg-fondo-1
      .bloque-texto-g.bg-color-06.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La información utilizada durante la atención institucional puede incluir datos públicos, información de uso interno o datos sujetos a condiciones particulares de acceso y tratamiento. Por esta razón, su gestión requiere criterios de seguridad que permitan reducir riesgos relacionados con el acceso, modificación, pérdida o divulgación no autorizada.


      .row.align-items-center.mb-4.mb-lg-5
        .col-lg-auto.d-none.d-lg-block.order-1
          img(src="@/assets/curso/tema5/img09.png", style="max-width: 90px").mx-auto
        .col-lg.order-2
          p.mb-2 La seguridad de la información no corresponde exclusivamente a las áreas tecnológicas. Cada persona que consulta, registra, utiliza o comunica información tiene responsabilidades asociadas con su manejo.
          p.mb-0 Este contenido se relaciona con la protección de datos personales abordada en el capítulo 3, pero no la repite. Allí se analizó el marco normativo para proteger los datos; aquí interesa comprender cómo el manejo cotidiano de la información debe contribuir a preservar su seguridad durante la atención.

      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo_2
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
            h3.titulo-con-imagen__texto_2 Criterios para un manejo seguro de la información

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema5/img10.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.bg-fondo-05.p-4.h-100.br-15
              img(src='@/assets/curso/tema5/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Acceso
              p.text-center.mb-0 Consultar únicamente la información necesaria, de acuerdo con las autorizaciones y responsabilidades asignadas para cada actuación.
            .tarjeta.bg-fondo-05.p-4.h-100.br-15
              img(src='@/assets/curso/tema5/img12.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Uso
              p.text-center.mb-0 Utilizar la información exclusivamente para la finalidad institucional relacionada con la gestión o actuación que se desarrolla.
            .tarjeta.bg-fondo-05.p-4.h-100.br-15
              img(src='@/assets/curso/tema5/img13.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Registro
              p.text-center.mb-0 Incorporar información pertinente, precisa y suficiente que permita documentar adecuadamente la gestión realizada.
            .tarjeta.bg-fondo-05.p-4.h-100.br-15
              img(src='@/assets/curso/tema5/img14.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Comunicación
              p.text-center.mb-0 Verificar el destinatario, el propósito y las condiciones aplicables antes de suministrar o compartir cualquier información.
            .tarjeta.bg-fondo-05.p-4.h-100.br-15
              img(src='@/assets/curso/tema5/img15.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Conservación
              p.text-center.mb-0 Utilizar los mecanismos institucionales establecidos para conservar los registros y evidencias relacionados con la actuación.



    
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .titulo-con-imagen.mb-4(data-aos="fade-right")
            .titulo-con-imagen__fondo_2
              img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
              h3.titulo-con-imagen__texto Caso breve


        .col-lg-10.col-md-12
          p.mb-3 Durante la atención de un requerimiento, una persona servidora pública encuentra en un sistema información adicional que no es necesaria para resolver la solicitud.
          p.mb-3 Aunque tenga acceso al registro, la información que no resulte pertinente para la finalidad de la atención no debe utilizarse o divulgarse de manera injustificada. El acceso constituye una responsabilidad y no una autorización general para utilizar cualquier información disponible.

          .cajon.bg-color-02.p-4.mb-0
            p.mb-0 Acceder a información institucional implica responsabilidad: debe consultarse, utilizarse y comunicarse únicamente de acuerdo con la finalidad y las condiciones aplicables.

    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Seguimiento y trazabilidad de la respuesta        


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img16.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Algunos requerimientos pueden resolverse en una sola interacción, mientras que otros requieren diferentes actuaciones antes de generar una respuesta. En estos casos, resulta especialmente importante poder establecer qué ocurrió, qué se hizo, quién intervino y cuál es el estado de la gestión.
        p.mb-3 El seguimiento permite consultar y reconocer el desarrollo de una actuación.

        
        .container
          .row.align-items-center.bg-fondo-03.p-lg-4.p-3.mb-3
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema5/img17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La trazabilidad, por su parte, permite reconstruir la secuencia de actuaciones relacionadas con el requerimiento a partir de los registros o evidencias disponibles.

        p.mb-0 Ambos conceptos están relacionados, pero no son idénticos: mientras el seguimiento se orienta a conocer el avance de la gestión, la trazabilidad permite identificar el recorrido realizado.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 La trazabilidad de un requerimiento

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema5/img18.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Recepción").align-content-center
            p.mb-0 Permite identificar cuándo, cómo y por qué mecanismo ingresó el requerimiento, así como los datos iniciales necesarios para su gestión.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Registro").align-content-center
            p.mb-0 Documenta la información necesaria para identificar la solicitud, facilitar su seguimiento y gestionar adecuadamente su atención.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Direccionamiento").align-content-center
            p.mb-0 Permite establecer hacia qué proceso, instancia o ruta debe ser conducido el requerimiento, según su naturaleza y características.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Actuaciones").align-content-center
            p.mb-0 Registra las acciones relevantes desarrolladas durante la gestión, dejando evidencia de las actividades realizadas para atender el requerimiento.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Respuesta").align-content-center
            p.mb-0 Permite identificar la actuación realizada y la información comunicada al destinatario, de acuerdo con el requerimiento y las condiciones aplicables.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cierre").align-content-center
            p.mb-0 Documenta la finalización de la gestión cuando el procedimiento correspondiente así lo establece, dejando constancia de las actuaciones realizadas.



    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado


    .row.mb-lg-5.mb-3.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-4
        p.mb-3 Una persona consulta por el estado de un requerimiento presentado previamente. Para proporcionar una orientación confiable no debería dependerse únicamente del recuerdo de quien participó en la atención.

        p.mb-0 Los registros disponibles permiten establecer cuándo se recibió la solicitud, qué actuaciones se realizaron, cuál fue su direccionamiento y cuál es su estado. La trazabilidad contribuye así a la continuidad de la atención y facilita el seguimiento de la gestión.
      
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4.mb-0
          p.mb-0 Lo que no queda adecuadamente registrado resulta más difícil de seguir, verificar y mejorar. La trazabilidad convierte las actuaciones realizadas en información útil para la gestión.

    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10.order-lg-2.order-2
          .row.bg-fondo-11.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-4.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1
              figure
                img(src="@/assets/curso/tema5/img19.png", data-aos="fade-right").w-md-75.mx-auto
            .col-lg-8.order-1.order-md-1.order-lg-2.p-4.p-lg-3
              p(data-aos="fade-left").mb-4 Consulte el pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Una respuesta no termina al enviarla: información, trazabilidad y calidad"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )
              p.mb-0 A partir de su contenido, reflexione sobre la importancia de registrar las actuaciones, hacer seguimiento a la gestión y conservar información que permita posteriormente valorar la calidad de la respuesta institucional.

    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Evaluación de la calidad de la respuesta

    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-block.order-1
        img(src="@/assets/curso/tema5/img21.svg", style="max-width: 90px").mx-auto
      .col-lg.order-2
        p.mb-2 Emitir una respuesta no garantiza que el requerimiento haya sido atendido adecuadamente. Por esta razón, la última etapa consiste en valorar si la respuesta cumple las condiciones necesarias para atender la situación identificada.
        p.mb-0 La evaluación puede realizarse mediante criterios sencillos que permitan revisar el resultado antes de considerar finalizada la atención.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 ¿Qué caracteriza una respuesta institucional de calidad?


    .bg-full-width.bg-fondo-07.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema5/img22.png", data-aos="zoom-in", alt="").mx-auto
        .col-lg-9.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0.p-3
          SlyderF.bg-white(columnas="col-lg-12 p-1 p-lg-3").br-15
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Pertinencia
              p.mb-0 La respuesta guarda relación con la necesidad y naturaleza del requerimiento, atendiendo los aspectos directamente relacionados con la solicitud presentada.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Claridad
              p.mb-0 La información se organiza y comunica de manera clara, comprensible y adecuada para que pueda ser entendida por su destinatario.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Fundamentación
              p.mb-0 La orientación se sustenta en información, normativa, procedimientos y fuentes institucionales aplicables al requerimiento.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Oportunidad
              p.mb-0 La gestión se desarrolla dentro de los términos y condiciones correspondientes, procurando atender el requerimiento de manera adecuada y oportuna.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Integralidad
              p.mb-0 La respuesta aborda los aspectos necesarios del requerimiento y proporciona la orientación adicional que resulte pertinente para facilitar su gestión.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Trazabilidad
              p.mb-0 Las actuaciones relevantes pueden identificarse mediante los registros, soportes o mecanismos institucionales establecidos para realizar su seguimiento.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Seguridad
              p.mb-0 La información utilizada y comunicada se gestiona respetando las condiciones de acceso, tratamiento, confidencialidad y protección aplicables.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 Revisión final de la respuesta institucional


    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema5/img23.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Antes de finalizar la atención, es importante revisar que la respuesta corresponda a la necesidad identificada, se sustente en información verificada y considere la normativa y los procedimientos aplicables. También debe comprobarse que su contenido sea claro y comprensible, que la información haya sido tratada de manera segura y que las actuaciones realizadas queden registradas cuando corresponda. Finalmente, si la gestión requiere continuidad, la persona debe recibir una orientación precisa sobre los pasos que debe seguir. Esta revisión contribuye a fortalecer la calidad, coherencia y trazabilidad de la respuesta institucional. 

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 5.
          span Elementos para revisar la respuesta institucional
        img.mb-0(data-aos="fade-right", src="@/assets/curso/tema5/img24.svg", alt="La figura 5 ilustra los elementos para revisar una respuesta: pertinencia, información, fundamentación, claridad, seguridad, registro y orientación.").mx-auto.d-none.d-lg-block
        img.mb-0(data-aos="fade-right", src="@/assets/curso/tema5/img25.svg", alt="La figura 5 ilustra los elementos para revisar una respuesta: pertinencia, información, fundamentación, claridad, seguridad, registro y orientación.").mx-auto.d-lg-none


    .row.mb-5.justify-content-center
      .col-lg-10
        .bg-fondo-12.p-4.br-15
          .row.align-items-center.justify-content-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/tema5/img27.svg", style="max-width: 90px;").mx-auto
            .col-lg
              h4.text-bold Caso integrador
              p.mb-0 Lo invitamos a consultar el Anexo1_Caso_Integrador, a través del cual podrá aplicar todos los conocimientos adquiridos en el componente formativo Respuesta institucional y rutas de atención.
            .col-lg-auto.mt-3.mt-lg-0
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1_Caso_Integrador.pdf')", target="_blank")
                span Ir al recurso

    .row.justify-content-center.align-items-center
      .col-lg-10.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-fondo-08.p-lg-4.p-4.mb-0
            .col-lg-10.p-3
              p.mb-0 <b>Frase para reflexionar:</b> una respuesta institucional de calidad no termina cuando se comunica; se completa cuando puede seguirse, verificarse y valorar si realmente atendió la necesidad que le dio origen.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
