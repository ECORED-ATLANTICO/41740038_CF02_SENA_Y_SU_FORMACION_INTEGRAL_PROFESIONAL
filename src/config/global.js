export default {
  global: {
    Name: 'Respuesta institucional y rutas de atención',
    Description:
      'Este componente formativo desarrolla fundamentos y herramientas para interpretar requerimientos, construir y comunicar respuestas institucionales y establecer rutas de atención de acuerdo con los procesos misionales y la normativa vigente. Integra criterios de comunicación, atención diferencial, mapas de procesos, sistemas de información, seguimiento, trazabilidad y evaluación de la calidad de la respuesta, con un enfoque de servicio orientado al ciudadano.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Atención y respuesta institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Servicio público y atención centrada en el ciudadano',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Gestión pública orientada al usuario y garantía de derechos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Principios de la función administrativa y calidad del servicio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Diagnóstico de requerimientos y necesidades',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Principios y valores que orientan la respuesta institucional',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lenguaje claro en la respuesta institucional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Comunicación asertiva',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manejo de situaciones de conflicto',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Normas de producción escrita',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Construcción y comunicación de respuestas institucionales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normativa aplicable a la atención y respuesta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Derecho de petición y función pública',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Transparencia y acceso a la información pública',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protección de datos personales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Lineamientos institucionales aplicables',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Aplicación de la normativa según la naturaleza del requerimiento',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procesos, rutas y atención diferencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Mapas de procesos: definición y componentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Interrelación de procesos y normativa aplicable',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Construcción de rutas de atención institucional',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Atención prioritaria y poblaciones vulnerables',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Enfoque territorial y respuesta diferencial',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Información, seguimiento y calidad de la respuesta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Sistemas de información institucional',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Canales y tratamiento de la información',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Seguridad de la información',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Seguimiento y trazabilidad de la respuesta',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Evaluación de la calidad de la respuesta',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/41740038_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Atención diferencial',
      significado:
        'Enfoque de atención que reconoce características, condiciones y necesidades particulares de las personas para facilitar su acceso efectivo a los servicios y respuestas institucionales.',
    },
    {
      termino: 'Atención institucional',
      significado:
        'Conjunto de actuaciones mediante las cuales una entidad recibe, analiza, orienta y gestiona las necesidades, solicitudes o requerimientos de sus usuarios o ciudadanos.',
    },
    {
      termino: 'Atención prioritaria',
      significado:
        'Tratamiento preferente que se brinda a determinadas personas o grupos de acuerdo con sus condiciones particulares y con la normativa y los lineamientos aplicables.',
    },
    {
      termino: 'Canal de atención',
      significado:
        'Medio presencial, telefónico, escrito o digital dispuesto por la entidad para facilitar la interacción, recepción de requerimientos y comunicación con las personas.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Forma de expresar información, orientaciones, decisiones o límites de manera clara, respetuosa y adecuada a la situación y al destinatario.',
    },
    {
      termino: 'Derecho de petición',
      significado:
        'Derecho fundamental que permite a toda persona presentar peticiones respetuosas a las autoridades, por motivos de interés general o particular, y obtener una respuesta en los términos establecidos por la normativa.',
    },
    {
      termino: 'Enfoque territorial',
      significado:
        'Perspectiva que considera las características y condiciones particulares de los territorios para orientar la prestación de servicios y facilitar el acceso a la atención institucional.',
    },
    {
      termino: 'Lenguaje claro',
      significado:
        'Forma de comunicación que organiza y presenta la información para facilitar que las personas encuentren, comprendan y utilicen el contenido que necesitan.',
    },
    {
      termino: 'Mapa de procesos',
      significado:
        'Representación organizada de los procesos de una entidad y de las relaciones existentes entre ellos para el cumplimiento de sus objetivos y funciones.',
    },
    {
      termino: 'Proceso institucional',
      significado:
        'Conjunto de actividades relacionadas que transforman entradas en resultados y contribuyen al cumplimiento de las funciones y objetivos de una entidad.',
    },
    {
      termino: 'Protección de datos personales',
      significado:
        'Conjunto de principios, derechos y disposiciones que regulan la recolección, almacenamiento, uso, circulación y demás formas de tratamiento de información asociada con personas determinadas o determinables.',
    },
    {
      termino: 'Requerimiento institucional',
      significado:
        'Solicitud, necesidad o situación presentada ante la entidad que requiere información, orientación, gestión o una actuación dentro de sus competencias.',
    },
    {
      termino: 'Respuesta institucional',
      significado:
        'Información, orientación o actuación que una entidad proporciona frente a un requerimiento, de acuerdo con sus competencias, procesos, procedimientos y normativa aplicable.',
    },
    {
      termino: 'Ruta de atención institucional',
      significado:
        'Secuencia de actuaciones mediante la cual un requerimiento se recibe, analiza, direcciona, gestiona y responde de acuerdo con el proceso y las competencias correspondientes.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'Proceso mediante el cual se consulta y verifica el avance o estado de las actuaciones realizadas para gestionar un requerimiento institucional.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Aplicación de medidas y criterios orientados a proteger la información frente a riesgos de acceso, uso, modificación, pérdida o divulgación no autorizada.',
    },
    {
      termino: 'Sistema de información institucional',
      significado:
        'Conjunto organizado de recursos, datos y herramientas que permite registrar, procesar, consultar, actualizar y recuperar información necesaria para apoyar la gestión institucional.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Principio que orienta la actuación pública hacia el acceso, disponibilidad y divulgación de la información institucional, de acuerdo con las condiciones y excepciones establecidas por la normativa.',
    },
    {
      termino: 'Tratamiento de la información',
      significado:
        'Conjunto de operaciones realizadas sobre la información durante su gestión, como recolección, registro, consulta, organización, almacenamiento, actualización, uso o circulación.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de reconstruir el recorrido de un requerimiento mediante los registros y evidencias de las actuaciones realizadas durante su gestión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2014). Ley 1712 de 2014. Por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). Ley 1755 de 2015. Por medio de la cual se regula el derecho fundamental de petición y se sustituye un título del Código de Procedimiento Administrativo y de lo Contencioso Administrativo. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334',
    },
    {
      referencia:
        'Congreso de la República. (2020). Ley 2016 de 2020. Por la cual se adopta el Código de Integridad del Servicio Público Colombiano y se dictan otras disposiciones. Servicio Nacional de Aprendizaje [SENA], Normograma.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=107254',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 103 de 2015. Por el cual se reglamenta parcialmente la Ley 1712 de 2014 y se dictan otras disposiciones. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60556',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2018). Acuerdo 005 de 2018: Por el cual se emiten disposiciones sobre la Política de Integridad y el Código de Integridad para el SENA y se deroga el Acuerdo número 002 de 2017. Normograma SENA.',
      link: 'https://normograma.sena.edu.co/compilacion/docs/acuerdo_sena_0005_2018.htm',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2024). Código de integridad. SENA.',
      link: 'https://www.sena.edu.co/es-co/sena/codigoeticabuengobierno/codigo_integridad_sena_2024.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (s. f.). Política de integridad: Código de integridad y conflicto de intereses. SENA.',
      link: 'https://centrodeserviciosygestionempresarial.blogspot.com/2026/04/sabes-que-es-el-codigo-de-integridad.html',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (s. f.). Protocolo de atención y servicio a la ciudadanía desde un enfoque diferencial. SENA.',
      link: 'https://www.sena.edu.co/es-co/ciudadano/Documents/Protocolo%20Atencio%CC%81n%20al%20Ciudadano.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (s. f.). Protocolo de atención de servicio al ciudadano y Carta de trato digno. SENA.',
      link: 'https://comunidadsenaguajira.blogspot.com/2025/05/carta-de-trato-digno-la-ciudadania-sena.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Rosmery Conde',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
