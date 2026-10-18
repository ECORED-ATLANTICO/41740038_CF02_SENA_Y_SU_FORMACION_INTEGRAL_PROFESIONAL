<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Atención y respuesta institucional

    .bloque-texto-g.bg-color-00.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La atención institucional constituye un punto de encuentro entre las personas y la entidad. Cada solicitud, consulta o requerimiento expresa una necesidad que debe ser comprendida antes de determinar la respuesta o la ruta institucional correspondiente. Por ello, atender no consiste únicamente en suministrar información, sino en interpretar la situación planteada, reconocer las necesidades del usuario o ciudadano y actuar de acuerdo con las competencias, los procesos y los lineamientos establecidos.    

    p.mb-4 En el SENA, esta actuación adquiere especial relevancia porque la relación con los diferentes grupos de valor e interés se desarrolla en el marco de una entidad pública cuya gestión debe orientarse al cumplimiento de su misión y a la garantía de los derechos de las personas. El Protocolo de Atención de Servicio al Ciudadano del SENA establece lineamientos para la atención desde los diferentes canales de la entidad y adopta un enfoque diferencial.

    .container
      .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-0
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img02.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 En este capítulo se abordan los fundamentos del servicio público y de la atención centrada en el ciudadano, la gestión orientada al usuario, los principios que rigen la función administrativa, el diagnóstico de requerimientos y los principios y valores que deben orientar la respuesta institucional. Estos elementos permiten comprender que una respuesta de calidad comienza con la adecuada identificación de la necesidad.



    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Servicio público y atención centrada en el ciudadano


    p.mb-5 La atención al ciudadano puede entenderse como una relación en la que la entidad dispone capacidades, información, canales y procedimientos para facilitar el acceso de las personas a sus servicios y orientar la atención de sus requerimientos. Desde esta perspectiva, el ciudadano no constituye únicamente el destinatario final de una respuesta: es el centro de una interacción que debe desarrollarse con respeto, claridad, oportunidad y orientación hacia la solución.


    .container
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Una atención centrada en el ciudadano requiere reconocer que las personas pueden presentar necesidades, características y contextos diferentes. Por esta razón, antes de responder es necesario comprender qué solicita la persona, qué información aporta, cuál es el alcance del requerimiento y qué actuación institucional puede corresponder.

    p.mb-4 En la práctica, este enfoque puede representarse mediante una secuencia sencilla:


    .container
      .row.align-items-center.bg-color-04.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img05.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0.text-bold Escuchar y comprender → identificar la necesidad → analizar el requerimiento → orientar la actuación → comunicar la respuesta.


    //- .bg-full-width.bg-fondo-05.px-5.py-4.mb-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img06.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Comprender
            p.text-center.mb-0 Reconocer la solicitud y el contexto en el que se presenta.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Identificar
            p.p-2.text-center.mb-0 Precisar la necesidad o el requerimiento que debe ser atendido.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Analizar
            p.p-2.text-center.mb-0 Determinar qué información, proceso o dependencia se relaciona con la solicitud.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img12.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Orientar
            p.p-2.text-center.mb-0 Establecer la actuación o ruta institucional que corresponde.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img13.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Responder
            p.p-2.text-center.mb-0 Comunicar de manera clara y pertinente la información o actuación institucional.

    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4
          p.mb-0 La secuencia permite comprender una idea fundamental: responder es el resultado de un proceso previo de análisis. Una respuesta inmediata, pero basada en una interpretación incorrecta de la necesidad, puede conducir a información imprecisa o a un direccionamiento inadecuado.


    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Gestión pública orientada al usuario y garantía de derechos


    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img14.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La gestión pública orientada al usuario sitúa las necesidades de las personas como referente para organizar la prestación del servicio. Esto implica que los procedimientos institucionales no deben entenderse solamente como operaciones internas, sino como mecanismos que permiten materializar la actuación de la entidad frente a las solicitudes y necesidades de la ciudadanía. 
        
        .container
          .row.align-items-center.bg-fondo-03.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este enfoque se complementa con la garantía de derechos. En consecuencia, la atención institucional requiere reconocer a las personas como titulares de derechos y actuar dentro del marco de las responsabilidades que corresponden a la entidad. 

    p.mb-3 En el caso del SENA, la Carta de Trato Digno señala, entre otros aspectos, el derecho a presentar peticiones, obtener información y orientación, conocer el estado de actuaciones cuando proceda y recibir respuesta oportuna y eficaz en los términos aplicables.

    p.mb-4 Por esta razón, una adecuada atención institucional articula tres elementos:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Elementos para la adecuada atención institucional
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 30%") Elemento
                th Aplicación en la atención
            tbody
              tr
                td Necesidad del usuario
                td Permite establecer qué requiere la persona y cuál es el propósito de su solicitud.
              tr
                td Derechos y normativa
                td Determinan las condiciones dentro de las cuales debe gestionarse y responderse el requerimiento.
              tr
                td Capacidad institucional
                td Permite identificar el proceso, la ruta o la instancia competente para atenderlo.

    p.mb-4 Estos elementos no operan de manera aislada. Una respuesta puede ser técnicamente correcta, pero resultar insuficiente si no corresponde a la necesidad planteada; de igual forma, comprender adecuadamente la necesidad no autoriza a actuar por fuera de las competencias y procedimientos institucionales.

  
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Caso breve


    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Una persona solicita información sobre un trámite institucional, pero su comunicación no identifica con precisión el procedimiento al que hace referencia. En este caso, la actuación adecuada no consiste en seleccionar de manera inmediata una respuesta predeterminada. Primero debe precisarse la necesidad, revisar la información disponible e identificar la ruta institucional que permita proporcionar una orientación pertinente.
        p.mb-0 El ejemplo evidencia que la atención centrada en el ciudadano no significa acceder automáticamente a todo lo solicitado, sino comprender el requerimiento y gestionarlo dentro del marco institucional y normativo aplicable.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Principios de la función administrativa y calidad del servicio

    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema1/img18.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La atención institucional forma parte de una actuación pública y, por tanto, debe guardar coherencia con los principios que orientan la función administrativa. 


    p.mb-4(data-aos="fade-right") El artículo 209 de la Constitución Política establece que esta función se encuentra al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad. 

    p.mb-4(data-aos="fade-right") La Ley 489 de 1998 complementa este marco al incorporar, entre otros, principios como buena fe, eficiencia, participación, responsabilidad y transparencia.

    p.mb-4(data-aos="fade-right") Para efectos formativos, estos principios pueden relacionarse con situaciones concretas de atención:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Ejemplos de principios aplicados a la respuesta institucional
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 30%") Principio
                th Aplicación en la respuesta institucional
            tbody
              tr
                td Igualdad
                td Brindar atención sin discriminación y reconocer las condiciones que requieren atención diferencial.
              tr
                td Eficacia
                td Orientar la actuación hacia la atención efectiva del requerimiento.
              tr
                td Economía
                td Utilizar de manera racional los recursos y evitar actuaciones innecesarias.
              tr
                td Celeridad
                td Gestionar el requerimiento con oportunidad, de acuerdo con los términos aplicables.
              tr
                td Imparcialidad
                td Actuar objetivamente, sin favorecer intereses particulares.
              tr
                td Publicidad
                td Facilitar el acceso a la información pública en las condiciones establecidas por la normativa.
              tr
                td Responsabilidad
                td Asumir las actuaciones propias del rol y de las competencias institucionales.




    p.mb-4(data-aos="fade-right") La calidad del servicio se relaciona, entonces, con la capacidad de articular estos principios con una actuación institucional pertinente. No basta con emitir una respuesta: es necesario procurar que esta corresponda al requerimiento, utilice información adecuada y se tramite por la ruta que resulte procedente.

    p.mb-4(data-aos="fade-right") Una respuesta institucional de calidad debe ser:


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure.mb-3
          img(src="@/assets/curso/tema1/img19.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Pertinente").align-content-center
            p.mb-0 Responde a la necesidad identificada y guarda relación directa con el requerimiento, considerando su naturaleza y contexto.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Clara").align-content-center
            p.mb-0 Presenta la información de manera comprensible, ordenada y precisa, evitando ambigüedades o interpretaciones innecesarias.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Oportuna").align-content-center
            p.mb-0 Se gestiona y comunica dentro de los tiempos, términos y condiciones establecidos para la atención del requerimiento.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Fundamentada").align-content-center
            p.mb-0 Se sustenta en información institucional, normativa, procedimientos y fuentes aplicables que respaldan la orientación proporcionada.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Responsable").align-content-center
            p.mb-0 Respeta las competencias institucionales, los canales establecidos y las condiciones aplicables para el manejo y protección de la información.


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Diagnóstico de requerimientos y necesidades

    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Antes de construir una respuesta institucional es necesario realizar un diagnóstico del requerimiento. Este proceso permite pasar de una solicitud expresada por la persona a una comprensión suficientemente precisa de lo que debe ser atendido.

    p.mb-4(data-aos="fade-right") Diagnosticar implica examinar la información disponible, reconocer la necesidad y determinar los elementos necesarios para orientar la actuación institucional. 

    p.mb-4(data-aos="fade-right") Para realizar este análisis pueden considerarse cinco preguntas orientadoras:

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img21.png", data-aos="zoom-in").mx-auto.w-md-75

      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03" data-aos="zoom-in").mb-0
          .tarjeta(titulo="¿Quién presenta el requerimiento?")
            p.mb-0 Permite reconocer las características de la persona o grupo que solicita la atención y establecer si existen condiciones particulares que deban considerarse.

          .tarjeta(titulo="¿Qué necesita?")
            p.mb-0 Busca identificar el propósito central de la solicitud, diferenciándolo de información secundaria.

          .tarjeta(titulo="¿Qué información aporta?")
            p.mb-0 Permite establecer si existen datos suficientes para comprender y gestionar la situación.

          .tarjeta(titulo="¿Qué actuación puede requerirse?")
            p.mb-0 Orienta la identificación preliminar del tipo de trámite, información, servicio o gestión relacionada.

          .tarjeta(titulo="¿Quién tiene competencia para atenderlo?")
            p.mb-0 Permite relacionar el requerimiento con el proceso, dependencia o ruta institucional correspondiente.



    p.mb-4 Un diagnóstico adecuado también evita dos errores frecuentes: responder sin contar con información suficiente y direccionar el requerimiento sin haber identificado previamente su naturaleza. En ambos casos, la atención puede generar reprocesos, demoras o respuestas que no solucionen la necesidad planteada.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado

    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img(style="align-items: center")
            img(src="@/assets/curso/tema1/img22.png", alt="")
          .tarjeta.bg-color-04.h-100.d-flex.align-items-center
            .p-4
              p.mb-0 Una persona manifiesta: “Necesito solucionar un problema con mi formación”. La expresión permite reconocer una necesidad general, pero todavía no aporta información suficiente para establecer la ruta de atención.

      .col-lg-6
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img(style="align-items: center")
            img(src="@/assets/curso/tema1/img23.png", alt="")
          .tarjeta.bg-color-04.h-100.d-flex.align-items-center
            .p-4
              p.mb-0 Antes de direccionarla, sería necesario precisar aspectos como el tipo de situación presentada, el servicio o proceso con el que se relaciona y la información disponible. Solo después de este diagnóstico inicial podrá identificarse la ruta institucional pertinente.


    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Principios y valores que orientan la respuesta institucional


    p.mb-3(data-aos="fade-right") La respuesta institucional no se limita al cumplimiento de un procedimiento. También expresa la forma en que las personas que representan a la entidad actúan frente a la ciudadanía y a los demás grupos de interés.

    p.mb-4(data-aos="fade-right") Referentes para este resultado son los principios de trabajo productivo, equidad social, integralidad y formación permanente, así como los valores del Código de Integridad del SENA: respeto, honestidad, compromiso, diligencia, justicia, solidaridad y lealtad.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 Valores aplicados a la respuesta institucional

    .bg-full-width.bg-fondo-07.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema1/img25.png", data-aos="zoom-in", alt="")
        .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 p-1 p-lg-3")
            .tarjeta.bg-white.p-4.h-100.br-15
              p.mb-0 <b>Respeto.</b> Implica reconocer la dignidad de las personas y mantener un trato adecuado, cordial y considerado durante la atención, independientemente de sus características o de la naturaleza del requerimiento.
            .tarjeta.bg-white.p-4.h-100.br-15
              p.mb-0 <b>Honestidad.</b> Orienta el manejo transparente de la información y exige comunicar datos verificables, evitando proporcionar información no comprobada o que pueda generar confusión o inducir a error.
            .tarjeta.bg-white.p-4.h-100.br-15
              p.mb-0 <b>Compromiso.</b> Se refleja en la disposición para comprender las necesidades de las personas y orientar la atención hacia respuestas pertinentes, procurando facilitar la gestión de sus requerimientos.
            .tarjeta.bg-white.p-4.h-100.br-15
              p.mb-0 <b>Diligencia.</b> Supone atender las responsabilidades con oportunidad, cuidado y eficiencia, realizando las actuaciones necesarias y evitando demoras o gestiones que no aporten a la atención.
            .tarjeta.bg-white.p-4.h-100.br-15
              p.mb-0 <b>Justicia.</b> Promueve una actuación imparcial, equitativa y respetuosa de los derechos de las personas, procurando que la atención se desarrolle bajo criterios objetivos y aplicables.
            .tarjeta.bg-white.p-4.h-100.br-15
              p.mb-0 <b>Solidaridad.</b> Favorece una actitud de colaboración, empatía y apoyo frente a quienes requieren orientación o presentan condiciones particulares que puedan generar barreras en la atención.
            .tarjeta.bg-white.p-4.h-100.br-15
              p.mb-0 <b>Lealtad.</b> Orienta una actuación coherente con la misión, los principios y los intereses institucionales, promoviendo el cumplimiento responsable de las funciones y compromisos asignados.
            
    p.mb-5 El Código de Integridad del SENA concibe estos valores como referentes del comportamiento de la comunidad institucional y vincula la integridad con un servicio transparente, eficiente y orientado a las personas. 

    .bloque-texto-g.bg-color-06.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Proporcionar una respuesta institucional adecuada comienza mucho antes de redactarla. Requiere comprender a la persona y su necesidad, reconocer los principios que orientan la función administrativa, diagnosticar el requerimiento y actuar con integridad. Esta base permite avanzar hacia un segundo momento: comunicar la respuesta de manera clara, asertiva y adecuada a la situación, aspecto que se desarrolla en el siguiente capítulo.

    .row.justify-content-center.align-items-center
      .col-lg-10.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-fondo-08.p-lg-4.p-4.mb-0
            .col-lg-10.p-3
              p.mb-0 <b>Frase para reflexionar:</b> comprender una necesidad antes de responder es el primer paso para brindar una atención institucional pertinente.


  //
    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text En la gestión de la distribución comercial, la logística cumple un papel fundamental al coordinar los procesos que permiten el flujo eficiente de productos desde el origen hasta el cliente. Su adecuada planificación y ejecución impacta directamente en los costos, tiempos de entrega y nivel de servicio, convirtiéndose en un factor clave de competitividad empresarial.


    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-7.mb-4.mb-lg-0
        .bg-fondo-03.br-15.mb-0.h-100.align-content-center.p-2
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema1/img02.svg").mx-auto
            .col-lg
              p.mb-0 La logística se entiende como el conjunto de actividades encargadas de planificar, implementar y controlar el flujo eficiente de productos, información y recursos desde el punto de origen hasta el consumidor final.
      
      .col-lg-5
        p.mb-0 Este proceso integra funciones como transporte, almacenamiento, gestión de inventarios, manejo de pedidos y distribución física. Su propósito es garantizar que el producto llegue en las condiciones adecuadas, en el lugar y momento requeridos, optimizando costos y niveles de servicio.
       
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 En el contexto empresarial, Amazon ha desarrollado sistemas logísticos avanzados con centros de distribución automatizados y entregas rápidas, mientras que Servientrega gestiona procesos logísticos que permiten la distribución de productos a nivel nacional.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Funciones


    p.mb-2 La logística cumple diversas funciones que permiten coordinar el proceso de distribución y garantizar que los productos lleguen al cliente en el momento oportuno, con la calidad esperada y al menor costo posible. Estas funciones integran actividades relacionadas con el transporte, el almacenamiento, el control de inventarios y el manejo de la información, favoreciendo la eficiencia de la cadena de suministro.
    p.mb-4 Entre las principales funciones de la logística se encuentran:

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Transporte").align-content-center
            p.mb-0 Comprende el traslado de los productos desde el lugar de origen hasta el punto de entrega, asegurando que lleguen de manera oportuna a los clientes, distribuidores o puntos de venta.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Almacenamiento").align-content-center
            p.mb-0 Consiste en conservar los productos en condiciones adecuadas mientras son requeridos para su comercialización, utilizando bodegas o centros de distribución que faciliten su organización y protección.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión de inventarios").align-content-center
            p.mb-0 Permite controlar las existencias disponibles, planificar la reposición de mercancías y evitar tanto el desabastecimiento como el exceso de inventario.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Procesamiento de pedidos").align-content-center
            p.mb-0 Incluye la recepción, preparación, verificación y despacho de los pedidos, garantizando que cada solicitud sea atendida de manera correcta y dentro de los tiempos establecidos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Manejo de la información").align-content-center
            p.mb-0 Comprende el registro, seguimiento y análisis de los datos relacionados con las operaciones logísticas mediante sistemas de información, como los ERP y otras plataformas digitales, facilitando la toma de decisiones.

  
    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En la práctica, Mercado Libre gestiona funciones logísticas mediante centros de fulfillment, mientras que Éxito coordina almacenamiento, inventarios y distribución para abastecer sus puntos de venta.

      separador

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Actores


      .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los actores de la logística desempeñan funciones específicas que permiten coordinar el flujo de bienes, información y recursos a lo largo de la cadena de distribución. La participación articulada de cada uno garantiza que los productos lleguen al consumidor final de manera eficiente, oportuna y con el nivel de servicio esperado.
      
      p.mb-4 Los principales actores de la logística son:

      

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 1.
            span Actores de la logística
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Actor
                  th Concepto
                  th Ejemplo
              tbody
                tr
                  td Proveedor
                  td Suministra materias primas, productos, insumos o servicios requeridos por una organización para desarrollar sus actividades. Su desempeño influye en aspectos como disponibilidad, calidad, costos y cumplimiento de los tiempos establecidos para el abastecimiento.
                  td Un proveedor entrega semanalmente frutas y verduras a una cadena de supermercados según las cantidades solicitadas.
                tr
                  td Operador logístico
                  td Gestiona por encargo de otra empresa una o varias actividades logísticas, como transporte, almacenamiento, preparación de pedidos, manejo de inventarios o distribución, utilizando recursos especializados para facilitar el flujo eficiente de los productos.
                  td Una empresa contrata un operador logístico para almacenar sus productos, preparar los pedidos y distribuirlos entre diferentes ciudades.
                tr
                  td Distribuidor
                  td Facilita la llegada de los productos desde fabricantes o proveedores hasta diferentes mercados y puntos de venta. Puede encargarse de comprar, almacenar, transportar y comercializar mercancías, contribuyendo a ampliar la cobertura y disponibilidad de la oferta.
                  td Un distribuidor recibe bebidas del fabricante y abastece supermercados, restaurantes y tiendas ubicadas en diferentes municipios.
                tr
                  td Minorista
                  td Comercializa productos directamente al consumidor final, generalmente en cantidades adecuadas para el consumo individual o familiar. Constituye uno de los últimos eslabones de la cadena y facilita el acceso mediante establecimientos físicos o canales digitales.
                  td Un supermercado adquiere productos de diferentes distribuidores y los ofrece en sus puntos de venta directamente a los consumidores.
                tr
                  td Cliente
                  td Adquiere productos o servicios para satisfacer una necesidad y constituye el destinatario de las actividades desarrolladas a lo largo de la cadena. Sus requerimientos de disponibilidad, calidad, precio, entrega y servicio orientan las decisiones del plan de distribución.
                  td Un consumidor realiza una compra en línea y espera recibir el producto solicitado, en buenas condiciones, dentro del plazo establecido.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 En el contexto actual, empresas como DHL y FedEx actúan como operadores logísticos globales, mientras que plataformas como Rappi integran actores logísticos en servicios de última milla.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Beneficios
    

    .container
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema1/img06.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La logística genera beneficios que fortalecen el desempeño de las organizaciones al optimizar los procesos relacionados con el almacenamiento, el transporte y la distribución de productos. Una adecuada gestión logística no solo contribuye a reducir costos, sino que también mejora el nivel de servicio, incrementa la competitividad y facilita la toma de decisiones estratégicas.

    p.mb-4 Entre los principales beneficios de la logística se destacan:

    .bg-full-width.bg-fondo-05.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Reducción de costos
              p.text-center.mb-0 Optimiza el uso de los recursos humanos, tecnológicos y financieros mediante una mejor planificación y ejecución de las operaciones logísticas, favoreciendo la rentabilidad de la organización.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Mejora del servicio
              p.text-center.mb-0 Garantiza que los productos lleguen al cliente en el momento, lugar y condiciones requeridas, incrementando la satisfacción y fortaleciendo la relación con los consumidores.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Mayor competitividad
              p.text-center.mb-0 Permite responder con rapidez a las necesidades del mercado, adaptarse a los cambios del entorno y ofrecer un servicio más eficiente frente a la competencia.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Control de las operaciones
              p.text-center.mb-0 Facilita el seguimiento de las actividades logísticas mediante indicadores y sistemas de información, apoyando la toma de decisiones y la mejora continua de los procesos.
     
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 Empresas como Zara han logrado ventajas competitivas mediante sistemas logísticos eficientes que permiten rápida reposición de productos, mientras que Amazon ha consolidado su liderazgo gracias a su capacidad logística y tiempos de entrega reducidos.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start ¿Qué es la Gestión Logística? Significado, Importancia y Estrategias / Tendencia Logística
              p.mb-0 Para comprender la logística aplicada en empresas reales ir al siguiente enlace:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=SCK26hVa1AM'" target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
