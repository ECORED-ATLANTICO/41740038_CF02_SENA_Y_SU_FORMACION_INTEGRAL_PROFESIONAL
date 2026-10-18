<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comunicación institucional

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-2.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-10.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La comunicación institucional es fundamental para transformar el análisis de una necesidad o requerimiento en una respuesta comprensible y útil para su destinatario. No basta con disponer de información correcta; también es necesario seleccionarla, organizarla y comunicarla de manera que facilite su comprensión y permita orientar adecuadamente a la persona sobre la actuación, el trámite o la ruta que corresponda.
        
        .container
          .row.align-items-center.bg-fondo-09.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img03.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este contexto, la comunicación requiere considerar tanto el contenido del mensaje como la forma en que se establece la interacción. El lenguaje claro, la comunicación asertiva, el manejo adecuado de situaciones de conflicto y la aplicación de criterios de producción escrita contribuyen a construir respuestas pertinentes y coherentes con los principios del servicio público.

    p.mb-4 Este capítulo aborda estos elementos desde una perspectiva aplicada, con el propósito de fortalecer la capacidad para construir y comunicar respuestas institucionales de acuerdo con las necesidades identificadas, los procesos correspondientes y los lineamientos que orientan la actuación institucional.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Lenguaje claro en la respuesta institucional


    .bloque-texto-g.bg-color-00.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El lenguaje claro busca que las personas puedan comprender y utilizar la información que reciben. En la comunicación institucional este criterio adquiere especial importancia, pues una respuesta puede contener información técnicamente correcta y, aun así, resultar poco útil cuando emplea expresiones excesivamente especializadas, presenta información desorganizada o no precisa la orientación que necesita su destinatario.

    p.mb-4 Utilizar lenguaje claro no significa eliminar los términos técnicos necesarios ni simplificar excesivamente la información. Consiste en adecuar el mensaje al destinatario, explicar los conceptos especializados cuando sea necesario y organizar las ideas siguiendo una secuencia comprensible.

   
    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0 
        .container
          .row.align-items-center.bg-fondo-02.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img05.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por esta razón, antes de elaborar una respuesta resulta pertinente preguntarse: ¿qué necesita comprender la persona después de recibir esta información? 

      .col-lg-6
        p.mb-0 La tabla que se presenta a continuación, da respuesta a esta pregunta, permite establecer prioridades y seleccionar los contenidos que realmente contribuyen a atender el requerimiento.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span De una comunicación compleja a una comunicación clara
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 50%") Comunicación que dificulta la comprensión
                th Comunicación clara
            tbody
              tr
                td Presenta información sin establecer prioridades.
                td Organiza primero la información que responde directamente a la necesidad.
              tr
                td Utiliza términos técnicos sin explicación.
                td Explica los términos especializados cuando son necesarios.
              tr
                td Emplea oraciones demasiado extensas o complejas.
                td Presenta ideas concretas y relacionadas entre sí.
              tr
                td Incluye información que no contribuye a resolver el requerimiento.
                td Selecciona información pertinente para el propósito de la respuesta.
              tr
                td No precisa la actuación posterior.
                td Indica los pasos siguientes cuando estos sean necesarios.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4
          p.mb-0 Una respuesta institucional no es clara únicamente porque esté bien redactada. Es clara cuando la persona puede comprender qué se responde, por qué y qué debe hacer posteriormente, cuando corresponda.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado

    p.mb-4 Una persona solicita orientación sobre un trámite institucional. Como respuesta recibe únicamente el nombre de una dependencia y la referencia de un procedimiento.

    
    .container
      .row.align-items-center.bg-fondo-03.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema2/img06.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Aunque la información suministrada pueda ser correcta, podría resultar insuficiente si la persona no comprende por qué debe dirigirse a esa dependencia ni qué actuación debe realizar.

    p.mb-4 Una comunicación más clara identifica primero la necesidad, proporciona la información pertinente y explica, cuando corresponda, cuál es la ruta o actuación que debe seguir. De esta manera, la finalidad de la comunicación no se limita a transmitir información, sino que busca facilitar su comprensión y utilización.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Comunicación asertiva


 
    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema2/img07.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La comunicación asertiva permite expresar información, orientaciones, decisiones y límites de manera clara y respetuosa, reconociendo las necesidades de la persona y las condiciones establecidas por la normativa, las competencias y los procedimientos institucionales.

    p.mb-5 Ser asertivo no significa acceder a todas las solicitudes. En determinadas situaciones puede ser necesario informar que una petición no corresponde a la competencia de quien la recibe, solicitar información adicional o explicar que existen condiciones que deben cumplirse antes de continuar con una actuación.


    .container
      .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-5
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema2/img08.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 La diferencia se encuentra en cómo se comunica esta información. Una respuesta asertiva evita tanto la ambigüedad como las expresiones que puedan generar confrontación y procura que la persona comprenda las razones y la orientación proporcionada.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 Formas de comunicación frente a un requerimiento


  
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img09.png", alt="Comunicación pasiva")
          .crd_hover_txt--body
            h4.mb-3.text-center Comunicación pasiva
            p.mb-2 Se presenta cuando se evita expresar con precisión una información, orientación o límite. Puede generar incertidumbre, interpretaciones equivocadas o dificultades para determinar qué actuación corresponde.
            p.mb-0 <b>Ejemplo:</b> proporcionar una respuesta general para evitar explicar que se requiere información adicional.

      .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img10.png", alt="Comunicación agresiva")
          .crd_hover_txt--body
            h4.mb-3.text-center Comunicación agresiva
            p.mb-2 Se caracteriza por transmitir la información de manera impositiva, descalificadora o poco respetuosa. Puede intensificar el desacuerdo y afectar la relación entre la persona y la entidad.
            p.mb-0 <b>Ejemplo:</b> responsabilizar al usuario por desconocer un procedimiento en lugar de orientarlo.

      .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img11.png", alt="Comunicación asertiva")
          .crd_hover_txt--body
            h4.mb-3.text-center Comunicación asertiva
            p.mb-2 Expresa la información, orientación o límite de manera clara y respetuosa. Reconoce la situación de la persona y explica las condiciones institucionales que deben considerarse.
            p.mb-0 <b>Ejemplo:</b> indicar que se requiere información adicional, explicar su finalidad y orientar sobre la forma de aportarla.



    .row.mb-lg-5.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-4
        .cajon.bg-color-04.p-4
          p.mb-0 La comunicación asertiva no modifica las normas ni las competencias institucionales; permite comunicarlas de manera clara, respetuosa y orientadora.

      .col-lg-10.col-md-12
        p.mb-0 La asertividad se relaciona directamente con el diagnóstico del requerimiento desarrollado en el capítulo anterior. Para comunicar una orientación pertinente es necesario comprender previamente qué necesita la persona y cuáles son las condiciones de su solicitud.


    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Manejo de situaciones de conflicto

    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Durante la atención pueden presentarse situaciones en las que una persona manifieste inconformidad, desacuerdo, preocupación o insatisfacción frente a una información, un procedimiento o una respuesta institucional. Estas situaciones requieren una comunicación especialmente cuidadosa.

    p.mb-4 El propósito no consiste en evitar cualquier desacuerdo, sino en gestionar la interacción de manera que sea posible comprender la situación, mantener un trato respetuoso y orientar la actuación dentro del marco institucional.

    .container
      .row.align-items-center.bg-fondo-09.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema2/img14.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Para ello es importante diferenciar a la persona del problema que plantea. Una inconformidad puede estar relacionada con una demora, una expectativa no satisfecha, información insuficiente, desconocimiento de un procedimiento o una decisión institucional. Reconocer su origen contribuye a evitar respuestas defensivas y permite concentrar la atención en la situación que debe gestionarse.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in").mx-auto.w-md-75

      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Reconocer la situación")
            p.mb-0 Identificar la inconformidad, dificultad o desacuerdo expresado por la persona.
          .tarjeta(titulo="Escuchar y precisar")
            p.mb-0 Recopilar la información necesaria para comprender qué originó la situación.
          .tarjeta(titulo="Verificar")
            p.mb-0 Contrastar la información disponible antes de proporcionar explicaciones o establecer conclusiones.
          .tarjeta(titulo="Explicar")
            p.mb-0 Comunicar de manera clara la información, el procedimiento o las condiciones aplicables.
          .tarjeta(titulo="Orientar")
            p.mb-0 Indicar la alternativa, ruta o actuación que corresponda, cuando sea procedente.
          .tarjeta(titulo="Registrar o escalar")
            p.mb-0 Gestionar la situación mediante los mecanismos institucionales correspondientes cuando exceda el alcance o competencia de quien realiza la atención.

    

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Una persona manifiesta inconformidad porque considera que su solicitud no ha recibido respuesta. Ante esta situación, no resulta adecuado confirmar inmediatamente que existe una demora ni atribuir responsabilidades sin verificar la información.
        
        .container
          .row.align-items-center.bg-fondo-03.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Primero es necesario identificar la solicitud y revisar la información disponible. Si se establece que el requerimiento continúa en trámite, debe explicarse la situación y proporcionar la orientación que corresponda. Si se identifica una situación que requiere la actuación de otra instancia, debe seguirse la ruta institucional establecida.

    p.mb-3 El ejemplo permite reconocer que la comunicación asertiva debe estar acompañada por la verificación de la información y el respeto por las competencias institucionales.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Normas de producción escrita

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-06.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una parte importante de las respuestas institucionales se comunica por medios escritos. Por esta razón, su elaboración requiere criterios que favorezcan la precisión, la coherencia y la comprensión del mensaje.


    p.mb-3 Para los propósitos de este componente, interesa reconocer aquellos criterios que intervienen directamente en la construcción de una respuesta institucional, sin convertir el contenido en un manual general de redacción.

    p.mb-4 Una comunicación escrita debe responder a un propósito definido, conservar unidad temática, presentar las ideas en un orden comprensible y emplear un lenguaje acorde con su destinatario y con la naturaleza de la comunicación.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 Criterios para construir una respuesta escrita

    .bg-full-width.bg-fondo-07.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img19.png", data-aos="zoom-in", alt="").mx-auto
        .col-lg-9.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 p-1 p-lg-3")
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Propósito
              p.mb-0 Antes de redactar, determine qué debe comunicar la respuesta y qué necesita comprender su destinatario. Un propósito definido permite seleccionar la información necesaria y evitar contenidos que desvíen la atención.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Pertinencia
              p.mb-0 Incluya la información relacionada directamente con el requerimiento. Los datos complementarios deben incorporarse únicamente cuando contribuyan a comprender la respuesta o la actuación que corresponde.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Organización
              p.mb-0 Presente las ideas siguiendo una secuencia lógica. Cuando resulte necesario, contextualice brevemente la situación, exponga la respuesta principal, proporcione su fundamento y finalice con la orientación correspondiente.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Precisión
              p.mb-0 Utilice términos adecuados y evite expresiones ambiguas. Las afirmaciones relacionadas con procedimientos, requisitos, competencias o actuaciones deben sustentarse en información previamente verificada.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Corrección
              p.mb-0 Revise ortografía, puntuación, sintaxis y coherencia. Los errores de escritura pueden modificar el sentido de una información o afectar la comprensión y credibilidad del mensaje.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Tono institucional
              p.mb-0 Utilice un lenguaje respetuoso, objetivo y acorde con el carácter institucional de la comunicación. El tono debe mantenerse incluso cuando la respuesta comunique una limitación, una negativa debidamente sustentada o la necesidad de realizar una actuación adicional.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 1.
          span Clasificación de los canales de distribución
        img.mb-0(data-aos="fade-up", src="@/assets/curso/tema2/img20.svg", alt="La figura 1 describe cinco preguntas para revisar pertinencia, veracidad, claridad, precisión y tono de una respuesta. ¿Responde al requerimiento? → ¿La información está verificada? → ¿Se comprende con facilidad? → ¿La orientación es precisa? → ¿El tono es adecuado?").mx-auto

    p.mb-3 Esta revisión permite detectar información incompleta, ambigua o innecesaria antes de comunicar la respuesta y contribuye a disminuir nuevas consultas originadas por dificultades de comprensión.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Construcción y comunicación de respuestas institucionales

    .container
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema2/img21.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Los elementos desarrollados anteriormente convergen en la construcción de la respuesta institucional. Para hacerlo adecuadamente es necesario integrar la comprensión del requerimiento con la información disponible, la actuación que corresponde y una comunicación adecuada a las necesidades del destinatario.

    p.mb-4 Por esta razón, construir una respuesta no debe entenderse únicamente como una actividad de redacción. La escritura constituye uno de los momentos finales de un proceso que comienza con el análisis del requerimiento.

    
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 ¿Cómo se construye una respuesta institucional?

    //- .bg-full-width.bg-fondo-05.px-5.py-4.mb-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img22.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img23.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Diagnosticar
            p.text-center.mb-0 Comprender el requerimiento y determinar cuál es la necesidad que debe atenderse. Esto evita responder a partir de interpretaciones incompletas de la solicitud.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img24.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Verificar
            p.text-center.mb-0 Consultar la información necesaria y comprobar su pertinencia y vigencia antes de utilizarla para orientar o sustentar la respuesta.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img25.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Determinar
            p.text-center.mb-0 Identificar el proceso, la competencia o la ruta institucional relacionada con el requerimiento. Este momento conecta la necesidad de la persona con la capacidad institucional para atenderla.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img26.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Construir
            p.text-center.mb-0 Organizar una respuesta clara, pertinente y fundamentada, considerando las características del destinatario y la naturaleza del requerimiento.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img27.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Comunicar
            p.text-center.mb-0 Proporcionar la respuesta mediante el canal correspondiente y orientar sobre las actuaciones posteriores cuando resulte necesario.




    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4
          p.mb-0 Construir una respuesta institucional no comienza con la redacción. Comienza con la comprensión del requerimiento y la verificación de la información necesaria para atenderlo.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo integrador

    p.mb-4 Una persona solicita información relacionada con un servicio del SENA, pero dirige su requerimiento a una instancia que no corresponde con la naturaleza de la solicitud.

    .container
      .row.align-items-center.bg-fondo-03.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema2/img28.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El primer momento consiste en diagnosticar qué necesita realmente la persona. Posteriormente, se debe verificar la información disponible y determinar qué proceso, dependencia o ruta institucional se relaciona con el requerimiento. A partir de estos elementos puede construirse una orientación clara y finalmente comunicarse la respuesta por el canal correspondiente.
    

    p.mb-4 En este escenario, limitarse a señalar que la instancia receptora no es competente podría no resolver la necesidad de orientación. La respuesta debe construirse de acuerdo con el procedimiento aplicable y con las posibilidades institucionales para encauzar adecuadamente el requerimiento.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comunicación institucional permite convertir el análisis de un requerimiento en una respuesta que pueda ser comprendida y utilizada por su destinatario. El lenguaje claro facilita la comprensión; la comunicación asertiva permite expresar información y límites con respeto; el manejo adecuado de situaciones de conflicto contribuye a orientar interacciones complejas; y los criterios de producción escrita favorecen respuestas organizadas, precisas y coherentes.


    p.mb-4 Estos elementos deben integrarse desde el momento en que se diagnostica la necesidad hasta la comunicación final de la respuesta. Sin embargo, una respuesta clara y bien estructurada también debe estar sustentada en la normativa que corresponda a la situación atendida. Por esta razón, el siguiente capítulo aborda el derecho de petición, la transparencia y el acceso a la información pública, la protección de datos personales y los lineamientos institucionales aplicables a la atención y respuesta.

    .row.justify-content-center.align-items-center
      .col-lg-10.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-fondo-08.p-lg-4.p-4.mb-0
            .col-lg-10.p-3
              p.mb-0 <b>Frase para reflexionar:</b> una respuesta cumple su propósito cuando, además de ser correcta, permite a la persona comprender qué debe hacer y cómo continuar.





  //
    .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la gestión moderna de la distribución, los procesos no finalizan con la entrega del producto al cliente. La necesidad de gestionar devoluciones, productos defectuosos o excedentes ha llevado a las empresas a incorporar flujos de retorno dentro de sus operaciones. En este contexto, la logística inversa se convierte en un elemento clave para optimizar recursos, mejorar el servicio al cliente y fortalecer la gestión comercial.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
  
  
  
    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La logística inversa se define como el conjunto de actividades orientadas a gestionar el flujo de productos desde el consumidor final hacia la empresa, con el propósito de recuperar valor o realizar su adecuada disposición.
        
        .bg-fondo-01.br-15.mb-3.p-4
          p.mb-0 Este proceso incluye devoluciones, reciclaje, reutilización, reparación y manejo de residuos. A diferencia de la logística tradicional, que se enfoca en el flujo directo, la logística inversa gestiona el retorno de productos dentro de la cadena de suministro.

        p.mb-0 En el contexto real, empresas como Amazon permiten devoluciones ágiles de productos comprados en línea, mientras que Falabella gestiona cambios y devoluciones como parte de su servicio al cliente.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Funciones
  
    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img03.svg").mx-auto
      .col-lg
        p.mb-0 La logística inversa comprende el conjunto de actividades orientadas a gestionar el retorno de productos desde el cliente hacia la organización. Su propósito es recuperar valor mediante la reutilización, reparación o reciclaje de los productos, o garantizar su disposición final de forma responsable cuando ya no pueden ser aprovechados. Estas funciones contribuyen a optimizar recursos, reducir el impacto ambiental y fortalecer la sostenibilidad empresarial.
  
    p.mb-4 Entre las principales funciones de la logística inversa se encuentran:
  
    .bg-full-width.bg-fondo-1
      .row.mb-5.g-4.justify-content-center.align-items-stretch
        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #3FA8FE;")
              h5.text-center.mb-2 Recolección
              p.mb-0.text-center Recibe los productos devueltos por los clientes y los traslada para su procesamiento.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #3FA8FE; margin-left: -5px;") 1

        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #83DFE0;")
              h5.text-center.mb-2 Clasificación
              p.mb-0.text-center Evalúa el estado de los productos retornados para definir su destino.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #83DFE0; margin-left: -5px;") 2

        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #D7D7D8;")
              h5.text-center.mb-2 Recuperación
              p.mb-0.text-center Reincorpora los productos o sus componentes al ciclo comercial mediante reparación o reutilización.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #D7D7D8; margin-left: -5px;") 3

        .col-lg-3.col-md-6
          .position-relative.h-100.pt-2.ps-3
            .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.align-items-center.justify-content-center(style="border: 2px solid #FFA85B;")
              h5.text-center.mb-2 Disposición final
              p.mb-0.text-center Trata los productos que no pueden recuperarse mediante reciclaje o eliminación conforme a la normatividad vigente.
            .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.fw-bold(style="width: 45px; height: 45px; background-color: #FFA85B; margin-left: -5px;") 4
    
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En la práctica, Mercado Libre gestiona devoluciones mediante centros logísticos, mientras que IKEA implementa programas de recuperación de productos para su reutilización.

    
      separador
      
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 Actores

      
      .bg-full-width.bg-fondo-02.px-5.py-4
        img(src="@/assets/curso/tema2/img04.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text Los actores de la logística inversa participan en el proceso de devolución, recuperación y disposición de los productos retornados. Cada uno cumple una función específica que contribuye a optimizar el aprovechamiento de los recursos y fortalecer la sostenibilidad de la cadena de suministro. Los principales actores de la logística inversa son:
    
    .bg-full-width.bg-fondo-1
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in").mx-auto.w-md-75

        .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1" data-aos="zoom-in").mb-0
            .tarjeta(titulo="Cliente")
              p.mb-0 Inicia el flujo inverso al devolver productos, empaques o materiales por motivos como defectos, garantías, inconformidades, finalización de su vida útil o programas de recuperación establecidos por la empresa.

            .tarjeta(titulo="Empresa")
              p.mb-0 Planifica y coordina las condiciones para recibir, controlar y gestionar los productos retornados, definiendo políticas, responsables y alternativas de recuperación que permitan reducir pérdidas, aprovechar recursos y responder adecuadamente a los requerimientos del cliente.

            .tarjeta(titulo="Operador logístico")
              p.mb-0 Ejecuta actividades especializadas relacionadas con la recolección, transporte, almacenamiento y manejo de productos retornados, facilitando su traslado desde los puntos de origen hasta los lugares establecidos para su evaluación, recuperación o tratamiento.

            .tarjeta(titulo="Centro de procesamiento")
              p.mb-0 Recibe y evalúa los productos, materiales o empaques retornados para determinar y ejecutar el tratamiento correspondiente, como reparación, reacondicionamiento, reutilización, reciclaje, aprovechamiento de componentes o disposición final.


      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-04.p-4
              .col-lg-auto.order-1
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
              .col-lg.order-2
                p.mb-0 En el contexto actual, empresas como DHL participan en procesos de logística inversa transportando productos devueltos, mientras que plataformas como Rappi facilitan la gestión de devoluciones en entregas.

      separador
      
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4 Beneficios

      .bloque-texto-g.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img06.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La logística inversa aporta beneficios que favorecen la eficiencia operativa, la sostenibilidad y la satisfacción del cliente. Su adecuada implementación permite aprovechar mejor los recursos, reducir pérdidas y fortalecer la imagen de la organización frente al mercado.

    p.mb-4 Entre los principales beneficios de la logística inversa se destacan:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Beneficios de la logística inversa
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Beneficio
                th Descripción
                th Ejemplo
            tbody
              tr
                td Recuperación de valor
                td Permite aprovechar productos retornados mediante su reutilización, reparación, reacondicionamiento o nueva comercialización, disminuyendo pérdidas y recuperando parte de su valor económico.
                td Una empresa repara muebles devueltos en buen estado y los comercializa nuevamente a un precio diferenciado.
              tr
                td Mejora del servicio
                td Facilita la gestión eficiente de devoluciones, cambios y garantías, proporcionando respuestas oportunas ante las necesidades del consumidor y contribuyendo a fortalecer su confianza y satisfacción.
                td Una tienda recoge un producto defectuoso y gestiona rápidamente su cambio sin exigir al cliente desplazamientos adicionales.
              tr
                td Optimización de recursos
                td Favorece el aprovechamiento de productos, componentes, materiales y empaques recuperables, disminuyendo desperdicios y reduciendo el uso innecesario de nuevos recursos en las operaciones de la organización.
                td Una empresa recupera cajas y empaques retornados para reutilizarlos en nuevos procesos de distribución.
              tr
                td Imagen empresarial
                td Fortalece la percepción de la organización mediante prácticas orientadas al aprovechamiento responsable de recursos y la adecuada gestión de retornos, contribuyendo a su reputación y posicionamiento frente al mercado.
                td Una empresa implementa puntos de devolución de envases para recuperarlos y reincorporarlos a sus procesos productivos.


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 Empresas como Amazon han fortalecido la confianza del cliente mediante políticas de devolución eficientes, mientras que Nike ha implementado programas de reciclaje de productos para optimizar recursos.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start Logística inversa
              p.mb-0 Para comprender la logística inversa en la práctica, incluyendo su aplicación en devoluciones, recuperación de productos y reutilización dentro de la cadena de suministro, se recomienda ir al siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=qwZg7zLS_Ms'" target="_blank")
                span Ir al recurso

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-09.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-6.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema2/img07.png", data-aos="fade-right").w-50.mx-auto
            .col-lg-6.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Ir al pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="La logística y la distribución hoy"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
