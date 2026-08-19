export default {
  global: {
    Name: 'Planeación logística en <em>e-commerce</em>',
    Description:
      'El componente formativo desarrolla capacidades técnicas para analizar, organizar y controlar operaciones logísticas aplicadas al comercio electrónico. El contenido integra distribución, almacenamiento, gestión de carga, trazabilidad, logística inversa y control operativo, considerando requerimientos normativos y tecnológicos del sector productivo. Además, fortalece la toma de decisiones mediante herramientas de planeación logística y estrategias orientadas a mejorar la eficiencia, continuidad operativa y servicio al cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo: 'Fundamentos del <em>e-commerce</em> y modelos de negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto logístico del <em>e-commerce</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelos y componentes logísticos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Modelos de negociación B2B, B2C y B2G',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normativa aplicable al <em>e-commerce</em>',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Logística de distribución y almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Logística nacional e internacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Primera y última milla',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Operadores logísticos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Almacenamiento y tiempos de entrega',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de carga y preparación de pedidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos y naturaleza de productos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de carga',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Marcado, empacado y rotulado',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Cubicaje, <em>picking</em>, <em>packaging</em> y <em>dropshipping</em>',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planeación y control logístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Instrumento de diagnóstico',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Planeación logística',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores KPI',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Trazabilidad y gestión de la información',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Logística inversa y bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Logística inversa',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas y procedimientos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Normativas y políticas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Bioseguridad y protocolos logísticos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Soporte tecnológico y cumplimiento normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Herramientas tecnológicas aplicadas a la logística',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Gestión documental y control de procesos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Seguridad de la información',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Cumplimiento normativo en operaciones logísticas',
            hash: 't_6_4',
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
        download: 'downloads/8130001_CF01_DU.pdf',
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
      termino: 'Almacenamiento',
      significado:
        'Proceso de conservación y organización de mercancías en espacios logísticos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Medidas de prevención aplicadas para proteger personas, productos y operaciones logísticas.',
    },
    {
      termino: 'B2B',
      significado: 'Modelo de negociación comercial entre empresas.',
    },
    {
      termino: 'B2C',
      significado:
        'Modelo de negociación comercial entre empresa y consumidor final.',
    },
    {
      termino: 'B2G',
      significado: 'Modelo de negociación comercial entre empresa y gobierno.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Conjunto de procesos relacionados con producción, almacenamiento y distribución de productos.',
    },
    {
      termino: 'Cubicaje',
      significado:
        'Cálculo del volumen ocupado por una mercancía en almacenamiento o transporte.',
    },
    {
      termino: 'Distribución logística',
      significado:
        'Proceso de traslado y entrega de productos al cliente final.',
    },
    {
      termino: '<em>Dropshipping</em>',
      significado:
        'Modelo de negocio donde el proveedor despacha directamente al cliente final.',
    },
    {
      termino: 'Empacado',
      significado:
        'Protección física del producto para almacenamiento y transporte.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'Organización y control de documentos relacionados con operaciones logísticas.',
    },
    {
      termino: 'Gestión de carga',
      significado:
        'Administración y control de mercancías dentro de procesos logísticos.',
    },
    {
      termino: 'Indicadores KPI',
      significado:
        'Métricas utilizadas para evaluar desempeño y eficiencia logística.',
    },
    {
      termino: 'Inventario',
      significado:
        'Registro y control de productos disponibles para comercialización.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'Proceso de devolución y recuperación de productos dentro de la cadena logística.',
    },
    {
      termino: 'Marcado',
      significado:
        'Identificación visual de mercancías mediante símbolos o códigos.',
    },
    {
      termino: 'Operador logístico',
      significado:
        'Empresa especializada en almacenamiento, transporte y distribución.',
    },
    {
      termino: '<em>Packaging</em>',
      significado:
        'Diseño y acondicionamiento final del empaque de un producto.',
    },
    {
      termino: '<em>Picking</em>',
      significado:
        'Selección y recolección de productos para preparación de pedidos.',
    },
    {
      termino: 'Planeación logística',
      significado:
        'Organización de recursos y procesos para optimizar operaciones logísticas.',
    },
    {
      termino: 'Primera milla',
      significado:
        'Traslado inicial de productos desde proveedor a centro logístico.',
    },
    {
      termino: 'Rotulado',
      significado:
        'Información colocada en empaques para identificación y manejo de productos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Seguimiento y control de mercancías durante la cadena logística.',
    },
    {
      termino: 'Última milla',
      significado: 'Etapa final de entrega del pedido al consumidor.',
    },
  ],
  referencias: [
    {
      referencia:
        'hopra, S., & Meindl, P. (2008). Administración de la cadena de suministro: estrategia, planeación y operación (3.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'García Olivares, A. A. (2004). Recomendaciones táctico-operativas para implementar un programa de logística inversa. eumed.net.',
      link: '',
    },
    {
      referencia:
        'Meléndez, M. (2018). El <em>marketing</em> digital transforma la gestión de pymes en Colombia. Recuperado de:',
      link: 'https://www.redalyc.org/jatsRepo/4096/409658132001/html/index.html',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Resolución 202 de 2010.',
      link: '',
    },
    {
      referencia:
        'Monroy, N., & Ahumada, C. (2006). Logística reversa: retos para la ingeniería industrial. Revista de Ingeniería, 23.',
      link: '',
    },
    {
      referencia:
        'Banco de la República. (2021). Pasarelas de pago. Recuperado de:',
      link: 'https://www.banrep.gov.co/es/node/40991',
    },
    {
      referencia:
        'Betancur, C. (2021). Comparación de pasarelas de pago en Colombia. BTODigital. Recuperado de:',
      link: 'https://btodigital.com/comparacion-de-pasarelas-de-pago-encolombia/',
    },
    {
      referencia:
        'Herradón, A. (2009). <em>Marketing</em> electrónico para pymes. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Observatorio <em>e-commerce</em>. (2018). Manual de buenas prácticas de las pasarelas de pago en Colombia.',
      link: '',
    },
    {
      referencia: 'Ortega, L. (2015). E-commerce y pago seguro.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Andrés Quintero Guzmán',
          cargo: 'Experto Temático Logística',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan ',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
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
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
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
