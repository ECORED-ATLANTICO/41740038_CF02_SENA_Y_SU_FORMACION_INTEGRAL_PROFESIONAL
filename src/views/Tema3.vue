<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa aplicable a la atención y respuesta

    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La atención de un requerimiento institucional implica actuar dentro de un marco normativo que establece derechos, responsabilidades, procedimientos y condiciones para proporcionar información y responder a las solicitudes de la ciudadanía. Por esta razón, una respuesta institucional no debe sustentarse únicamente en el conocimiento del servicio o en la intención de orientar adecuadamente: también debe considerar las disposiciones aplicables a cada situación.

    p.mb-4 Entre los principales referentes se encuentran el derecho fundamental de petición, las disposiciones sobre transparencia y acceso a la información pública y las normas relacionadas con la protección de datos personales. Estos marcos se complementan con los lineamientos institucionales que permiten organizar la recepción, tratamiento, direccionamiento y respuesta de los requerimientos.

    
    .bg-full-width.bg-fondo-1
      .container
        .row.align-items-center.bg-fondo-04.p-4.mb-3.br-15
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema3/img02.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Conocer su finalidad y reconocer cuándo resultan aplicables permite tomar mejores decisiones durante la atención. El propósito de este capítulo, por tanto, no es memorizar normas, sino comprender cómo estas orientan la construcción de una respuesta institucional pertinente y fundamentada.
      
      separador
      
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Derecho de petición y función pública


      p.mb-4 El derecho de petición constituye uno de los principales mecanismos mediante los cuales las personas pueden relacionarse con las autoridades. La Constitución Política lo reconoce como un derecho fundamental y la Ley 1755 de 2015 regula su ejercicio, estableciendo las reglas generales para su presentación, trámite y respuesta.

      
      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
          .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
            p.mb-0(data-aos="fade-right") La ley dispone que toda persona puede presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y obtener una resolución pronta, completa y de fondo. Además, una actuación iniciada por una persona ante una autoridad puede constituir ejercicio del derecho de petición sin que sea necesario denominarla expresamente de esa manera. 



      .row.mb-lg-5.mb-5.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in").mx-auto
        .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-3(data-aos="fade-right") Este último aspecto es especialmente importante para la atención institucional. La persona que recibe una solicitud debe analizar su contenido y finalidad, y no limitarse al título o denominación utilizada por quien la presenta.

          p.mb-0 Mediante el derecho de petición pueden solicitarse, entre otras actuaciones, el reconocimiento de un derecho, la intervención de una entidad o funcionario, la prestación de un servicio, información o documentos; también pueden formularse consultas, quejas, denuncias y reclamos.

      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo_2
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
            h3.titulo-con-imagen__texto_2 ¿Qué puede solicitar una persona mediante el derecho de petición?


    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img05.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Información y documentos
              p.mb-0 La persona puede solicitar información, consultar o examinar documentos y requerir copias, considerando las restricciones constitucionales o legales aplicables.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img06.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Servicios y actuaciones
              p.mb-0 Puede solicitar la prestación de un servicio, la intervención de una entidad o funcionario, o el reconocimiento de un derecho, según corresponda.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img07.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Consultas
              p.mb-0 Puede formular consultas relacionadas con las materias, funciones o competencias a cargo de la autoridad, de acuerdo con el asunto planteado.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-10
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img08.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.text-bold.mb-2 Quejas, reclamos y denuncias
              p.mb-0 El derecho de petición también comprende estas manifestaciones, cuya naturaleza debe identificarse para establecer el tratamiento, trámite y orientación correspondientes.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 Términos generales de respuesta


    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema2/img07.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La Ley 1755 establece como regla general un término de 15 días para resolver las peticiones. Determina, además, términos especiales: las peticiones de documentos e información deben resolverse dentro de 10 días y las consultas a las autoridades sobre materias a su cargo dentro de 30 días, salvo que exista una norma legal especial. Si excepcionalmente no es posible resolver dentro del término aplicable, la autoridad debe informar la situación antes de su vencimiento, explicar los motivos y señalar el plazo razonable en que responderá, dentro de los límites establecidos por la propia ley.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 2.
          span Términos generales para resolver peticiones
        img.mb-0(data-aos="fade-right", src="@/assets/curso/tema3/img10.svg", alt="La figura 2 ilustra los términos generales para resolver peticiones en el SENA: 15 días para peticiones, 10 para información y documentos y 30 para consultas.").mx-auto.d-none.d-lg-block
        img.mb-0(data-aos="fade-right", src="@/assets/curso/tema3/img11.svg", alt="La figura 2 ilustra los términos generales para resolver peticiones en el SENA: 15 días para peticiones, 10 para información y documentos y 30 para consultas.").mx-auto.d-lg-none

    .row.mb-lg-5.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        .cajon.bg-color-10.p-4
          p.mb-0 Importante: estos términos corresponden a las reglas generales de la Ley 1755 de 2015. Para una situación concreta siempre debe verificarse si existe una disposición especial aplicable.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 ¿Qué sucede si quien recibe la petición no es competente?


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img12.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2(data-aos="fade-right") Este aspecto se relaciona directamente con las rutas institucionales que se estudiarán en el capítulo siguiente. La falta de competencia no significa que el requerimiento simplemente pueda descartarse.

        p.mb-3(data-aos="fade-right") Cuando la autoridad que recibe una petición no es competente, la Ley 1755 establece que debe informarlo inmediatamente si la petición es verbal o dentro de los cinco días siguientes a su recepción si fue presentada por escrito. Dentro de ese término debe remitirla a la autoridad competente y enviar copia del oficio remisorio al peticionario; si no existe funcionario competente, debe comunicarlo.
        
        .container
          .row.align-items-center.bg-fondo-03.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema3/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La naturaleza de una petición se determina por su contenido y finalidad, no únicamente por el nombre que la persona le asigne. Identificarla correctamente es el primer paso para establecer su tratamiento y ruta.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Transparencia y acceso a la información pública



    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img14.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-2(data-aos="fade-right") La transparencia permite que las personas conozcan información relacionada con la gestión y funcionamiento de las entidades públicas. En Colombia, la Ley 1712 de 2014 regula el derecho de acceso a la información pública, los procedimientos para garantizarlo y las excepciones a la publicidad.

        p.mb-2 Uno de sus fundamentos es el principio de máxima publicidad: como regla general, la información que se encuentra en posesión, bajo control o custodia de un sujeto obligado es pública y solo puede ser reservada o limitada cuando exista una disposición constitucional o legal que así lo establezca.

        p.mb-0 Esto implica que durante la atención institucional deben evitarse dos extremos: negar información pública sin fundamento y entregar información que tenga restricciones legales de acceso.



    .container
      .row.align-items-center.bg-fondo-02.p-4.mb-4.br-15
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema3/img15.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 La transparencia también tiene una dimensión activa. Las entidades no deben limitarse a responder cuando alguien solicita información; deben publicar proactivamente determinados contenidos relacionados con sus servicios, trámites, procedimientos, decisiones, informes y funcionamiento. La Ley 1712 establece obligaciones específicas en esta materia.

    p.mb-4 El SENA dispone de una sección institucional de Transparencia y acceso a la información pública, organizada en categorías como información de la entidad, normativa, contratación, planeación, presupuesto e informes, trámites, participación, datos abiertos e información para grupos de interés.



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 Acceso a la información pública


    .bg-full-width.bg-fondo-07.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img16.png", data-aos="zoom-in", alt="").mx-auto
        .col-lg-9.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 p-1 p-lg-3")
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Acceder
              p.mb-0 Las personas pueden solicitar información pública mediante los mecanismos establecidos.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Publicar
              p.mb-0 La entidad debe disponer proactivamente la información cuya publicación establece la normativa.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Actualizar
              p.mb-0 La información institucional debe mantenerse disponible y actualizada en los términos aplicables.
            .tarjeta.bg-white.p-4.h-100.br-15
              h4.text-bold.mb-2 Proteger
              p.mb-0 El acceso a la información debe armonizarse con las excepciones constitucionales y legales y con la protección de información que no puede divulgarse libremente.

    .bg-full-width.bg-fondo-1
      p.mb-4 La Ley 1712 establece, además, que la respuesta a una solicitud de acceso a información pública debe ser oportuna, veraz, completa, motivada y actualizada.



      .row.mb-lg-5.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-02.p-4.mb-4
            p.mb-0 Transparencia no significa divulgar toda la información sin restricciones. Significa favorecer el acceso a la información pública y aplicar únicamente las limitaciones establecidas constitucional o legalmente.
          
          p.mb-0 Esta distinción conduce directamente a otro aspecto fundamental: la protección de los datos personales.

    
      separador
      
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.3 Protección de datos personales


      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-02
          .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema3/img17.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
            p.mb-0(data-aos="fade-right") Durante la atención institucional pueden recopilarse, consultarse o utilizarse datos relacionados con las personas. Nombres, identificaciones, información de contacto y otros datos asociados con una persona determinada o determinable forman parte de un ámbito que requiere tratamiento responsable.

      p.mb-3 La Ley 1581 de 2012 desarrolla el derecho de las personas a conocer, actualizar y rectificar la información recogida sobre ellas en bases de datos o archivos y establece disposiciones generales para la protección de datos personales.

      p.mb-5 La norma define el tratamiento como las operaciones realizadas sobre datos personales, entre ellas la recolección, almacenamiento, uso, circulación o supresión. Por tanto, la protección de datos no se limita al momento en que se solicita información: comprende las diferentes actuaciones que pueden realizarse durante su gestión.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img18.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img19.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Legalidad
            p.text-center.mb-0 El tratamiento de los datos debe desarrollarse conforme con las disposiciones que regulan esta actividad.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img20.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Finalidad
            p.text-center.mb-0 Los datos deben tratarse con una finalidad legítima, que debe ser informada al titular.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img21.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Libertad
            p.text-center.mb-0 Como regla general, el tratamiento requiere consentimiento previo, expreso e informado del titular, salvo las excepciones previstas por la ley.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img22.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Veracidad o calidad
            p.text-center.mb-0 La información debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img23.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Transparencia
            p.text-center.mb-0 Debe garantizarse al titular la posibilidad de obtener información acerca de la existencia de datos que le conciernen.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img24.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Acceso y circulación restringida
            p.text-center.mb-0 Los datos personales no deben quedar disponibles indiscriminadamente y su circulación debe respetar las condiciones establecidas por la normativa.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img25.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Seguridad
            p.text-center.mb-0 La información debe manejarse mediante medidas que contribuyan a evitar adulteración, pérdida, consulta, uso o acceso no autorizado.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img26.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Confidencialidad
            p.text-center.mb-0 Quienes intervienen en el tratamiento deben garantizar la reserva de la información en los términos establecidos.



    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4.mb-0
          p.mb-0 Estos principios proceden del régimen general establecido por la Ley 1581 de 2012.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 ¿Cómo se aplica durante una respuesta?

    .bloque-texto-g.bg-color-00.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Suponga que una persona solicita información relacionada con un trámite realizado por otra persona. Antes de proporcionar datos no basta con comprobar que la información se encuentra disponible en un sistema institucional. Debe establecerse si quien solicita puede acceder a ella y bajo qué condiciones puede ser suministrada.

    .row.justify-content-center.mb-5
      .col-lg-10.col-md-12
        p.mb-3 La Ley 1581 establece, entre otros supuestos, que la información puede suministrarse al titular, sus causahabientes o representantes legales; a entidades públicas o administrativas en ejercicio de sus funciones legales o por orden judicial; y a terceros autorizados por el titular o por la ley.

        p.mb-0 El SENA cuenta, además, con una política institucional de protección de datos personales que contempla el tratamiento de información para finalidades relacionadas con sus funciones, entre ellas la gestión y respuesta de peticiones, quejas, reclamos, denuncias, sugerencias y felicitaciones.


    .row.mb-lg-5.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-02.p-4.mb-0
          p.mb-0 Tener acceso institucional a un dato no significa que pueda divulgarse libremente. Antes de suministrarlo deben considerarse la finalidad, el titular, la autorización o fundamento legal y las condiciones aplicables a su tratamiento.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Lineamientos institucionales aplicables

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img25.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Las normas generales requieren procedimientos y mecanismos institucionales que permitan aplicarlas en la atención cotidiana. Por esta razón, quien gestiona un requerimiento debe consultar no solamente la disposición jurídica correspondiente, sino también los lineamientos, procedimientos, canales y fuentes institucionales vigentes relacionados con la situación.

        .container
          .row.align-items-center.bg-fondo-03.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema3/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El SENA dispone de diferentes mecanismos para la recepción y gestión de solicitudes ciudadanas, entre ellos canales para la radicación de peticiones, quejas, reclamos, sugerencias, felicitaciones, agradecimientos, denuncias y acciones de tutela, además de mecanismos de atención presencial y virtual.

    p.mb-4(data-aos="fade-right") Sin embargo, para efectos de este componente, lo fundamental no es memorizar un listado de canales, pues estos pueden actualizarse. La competencia que debe fortalecerse consiste en saber localizar la información institucional vigente y utilizar el canal, procedimiento o ruta que corresponda.
      
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png", style="width: 50px")
          h3.titulo-con-imagen__texto_2 De la norma a la actuación institucional

    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure.mb-3
          img(src="@/assets/curso/tema3/img27.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificar la norma").align-content-center
            p.mb-0 Reconocer qué disposición normativa general puede resultar aplicable, de acuerdo con la naturaleza y características del requerimiento.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Consultar el lineamiento").align-content-center
            p.mb-0 Verificar los procedimientos, orientaciones y fuentes institucionales vigentes relacionados con la situación y su gestión.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reconocer la competencia").align-content-center
            p.mb-0 Determinar qué proceso, dependencia o instancia tiene responsabilidad y competencia frente al requerimiento presentado.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Utilizar el canal").align-content-center
            p.mb-0 Gestionar la solicitud mediante el canal o mecanismo institucional establecido, de acuerdo con el tipo de requerimiento.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Conservar la trazabilidad").align-content-center
            p.mb-0 Mantener la información y los registros necesarios para identificar las actuaciones realizadas durante la gestión del requerimiento.

    p.mb-5 Esta secuencia establece el puente con el capítulo siguiente, donde se estudiarán específicamente los mapas de procesos y las rutas de atención institucional.


    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Aplicación de la normativa según la naturaleza del requerimiento

    p.mb-4 Las disposiciones abordadas en este capítulo no deben aplicarse de manera aislada. Un mismo requerimiento puede involucrar simultáneamente diferentes obligaciones.

    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/tema3/img28.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Por ejemplo, una persona puede presentar una petición solicitando acceso a determinada información institucional. En este caso debe considerarse el derecho de petición para establecer el tratamiento de la solicitud; las disposiciones de transparencia y acceso a la información para determinar las condiciones de publicidad; y, si la información contiene datos personales, las normas de protección de datos para establecer qué información puede ser suministrada y bajo qué condiciones.

    p.mb-4 Por esta razón, la actuación debe comenzar con la identificación de la naturaleza del requerimiento.

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 3.
          span Rutas normativas para peticiones, acceso a información, datos personales y lineamientos institucionales
        img.mb-0(data-aos="fade-right", src="@/assets/curso/tema3/img29.svg", alt="La figura 3 describe la 4 rutas normativas para peticiones, acceso a información, datos personales y lineamientos institucionales.").mx-auto.d-none.d-lg-block
        img.mb-0(data-aos="fade-right", src="@/assets/curso/tema3/img30.svg", alt="La figura 3 describe la 4 rutas normativas para peticiones, acceso a información, datos personales y lineamientos institucionales.").mx-auto.d-lg-none




    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado

    p.mb-4 Una persona solicita por correo electrónico información relacionada con un trámite y pide además conocer datos asociados con otra persona.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-06.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La actuación no debería limitarse a localizar la información y enviarla. Primero debe identificarse la naturaleza de la petición y determinar el tratamiento que corresponde. Posteriormente debe establecerse qué información tiene carácter público y analizar si los datos relacionados con un tercero pueden ser suministrados. Finalmente, deben aplicarse el procedimiento y la ruta institucional correspondientes.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img32.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") El ejemplo demuestra que una respuesta institucional jurídicamente adecuada requiere relacionar la necesidad del usuario con la norma y el procedimiento aplicables, en lugar de utilizar una misma respuesta para todas las situaciones.

        p.mb-3(data-aos="fade-right") La norma orienta la decisión; el procedimiento institucional permite llevarla a la práctica. Por ello, antes de responder es necesario identificar qué se solicita, qué información está involucrada y cuál es la ruta aplicable.
        
        .container
          .row.align-items-center.bg-fondo-04.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema3/img33.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La normativa proporciona el marco dentro del cual se construyen y comunican las respuestas institucionales. El derecho de petición establece garantías para presentar solicitudes y obtener respuesta; la transparencia favorece el acceso a la información pública; la protección de datos establece condiciones para el tratamiento responsable de la información personal; y los lineamientos institucionales permiten traducir estas disposiciones en actuaciones concretas.




    .row.justify-content-center.align-items-center
      .col-lg-10.mb-4.mb-lg-0
        p.mb-4 Comprender este marco no implica memorizar normas y artículos, sino reconocer qué disposición resulta relevante ante una situación y utilizarla para orientar la actuación institucional. 
        .container
          .row.align-items-center.bg-fondo-08.p-lg-4.p-4.mb-0
            .col-lg-10.p-3
              p.mb-0 <b>Frase para reflexionar:</b> conocer la norma orienta la actuación; aplicarla de acuerdo con cada situación convierte ese conocimiento en un servicio responsable.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
