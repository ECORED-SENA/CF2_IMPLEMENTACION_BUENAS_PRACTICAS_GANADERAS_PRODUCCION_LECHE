export default {
  global: {
    Name:
      'Principios de la buenas prácticas ganaderas en la producción de leche',
    Description:
      'El componente formativo aborda la implementación de Buenas Prácticas Ganaderas en la producción de leche bovina, enfocándose en la inocuidad, bienestar animal, sostenibilidad y trazabilidad. Describe protocolos, procesos, registros, requisitos normativos y criterios para la certificación ICA. También incluye metodologías, cronograma, evaluación, manejo ambiental y control sanitario, promoviendo una producción responsable y competitiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Implementación de Buenas Prácticas Ganaderas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos de la implementación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Parámetros de complementación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Recursos para la implementación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Metodologías de desarrollo y programación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Cronograma',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Lista de chequeo',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Criterios de cumplimiento',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Documentación',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de procedimientos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Concepto',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Características de los registros en BPG',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Tipos de registros',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Auditoría de certificación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ruta hacia la certificación en BPG (producción de leche)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Concepto de la certificación',
            hash: 't_3_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72312159_CF02_DU.zip',
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
  complementario: [
    {
      tema: 'Implementación de Buenas Prácticas Ganaderas',
      referencia:
        'Reyes Jiménez, J. E., Hernández Espinal, L. A., García Camarena, M. G., & Lares Ballesteros, C. A. (2011). Control de la mastitis en ganado bovino.',
      tipo: 'Documento',
      link:
        'https://www.fps.org.mx/portal/index.php/component/phocadownload/category/32-pecuaria?download=130:control-de-la-mastitis-en-ganado-bovino ',
    },
    {
      tema: 'Implementación de Buenas Prácticas Ganaderas',
      referencia:
        'Strappini A. C., Gallo, C., Bustamante, H., Werner, M., Sepúlveda, Pilar. & Valenzuela, R. (2018). Manual de Manejo y Bienestar de la Vaca Lechera.',
      tipo: 'Manual',
      link:
        'https://www.supervivencia-y-desastres.cl/wp-content/uploads/simple-file-list/Animales-Ganaderia-Apicultura-Acuaponia/Bovinos/Manual_de_manejo_y_bienestar_de_la_vaca_lechera.pdf ',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas',
      referencia:
        'TvAgro. (2016). Buenas prácticas lecheras - TvAgro por Juan Gonzalo Ángel. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rZxC_xEoazg',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas',
      referencia:
        'Italcol. (2024). Buenas prácticas en rutina de ordeño, [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=B3x-Blzwu_I',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas',
      referencia:
        'TvAgro. (2015). Certificación de Buenas Prácticas Ganaderas para la Producción de Leche [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Du8EuciueAo',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas',
      referencia:
        'TVAgro. (2016). Implementación de Buenas Prácticas Lecheras [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fn06Uia3JSQ',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'es el estado físico y mental de los animales con relación a las condiciones en las que vive y muere (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'son todas aquellas medidas sanitarias, procedimientos técnicos y normas de manejo que se aplican de forma permanente, con el propósito de prevenir la entrada y salida de agentes infectocontagiosos en la unidad de producción primaria (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Buenas Prácticas en el Uso de Medicamentos Veterinarios (BPMV)',
      significado:
        'se define como el cumplimiento de los métodos de empleo oficialmente recomendados para los medicamentos de uso veterinario, de conformidad con la información consignada en el rotulado de los productos aprobados, incluido el tiempo de retiro, cuando los mismos se utilizan bajo condiciones prácticas.',
    },
    {
      termino: 'Condiciones laborales',
      significado:
        'capacitación del personal, seguridad e higiene del personal y los animales que se manejan.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'característica o atributo de un alimento, que determina que el consumo del mismo no causa riesgo para la salud del consumidor.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina.',
    },
    {
      termino: 'Manejo',
      significado:
        'considera todas aquellas prácticas que promueven la productividad, bienestar general y salud de los animales e incluye el manejo de subproductos y residuos.',
    },
    {
      termino: 'Registro',
      significado:
        'documento que presenta los resultados obtenidos o proporciona evidencia de actividades desempeñadas.',
    },
    {
      termino: 'Leche anormal',
      significado:
        'corresponde al producto que presenta alteraciones de diferente naturaleza en los componentes y las propiedades físico-químicas de la leche, que desencadenan problemas en la elaboración de derivados o en la calidad de los mismos (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Riesgo',
      significado: 'es la probabilidad de que un peligro se presente.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'es el conjunto de acciones y procedimientos que permiten la identificación, registro y seguimiento a todos los eventos de la vida del animal, desde su nacimiento hasta el consumidor final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centro Agroindustrial SENA Regional Quindío. (s.f.). Prueba de mastitis (CMT) [Formato]. Finca La Sirenita.',
      link: '',
    },
    {
      referencia:
        'Clínica Santa María LTDA. (s.f.). Formato de asistencia a entrenamiento y capacitación (Versión 1, Código SGS1-01-F1) [Formato]. Sistema de Gestión de Calidad.',
      link: '',
    },
    {
      referencia:
        'Colanta. (s.f.). Registro control de temperaturas: equipo de ordeño y tanque de frío [Formato]. Colanta.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (s.f.). Lista de chequeo de predios productores de leche. [Hoja de cálculo].',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2016). Resolución 20126 de 2016: Por la cual se establece el sistema de trazabilidad para bovinos en Colombia. ICA. ',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2016, octubre 7). Certificado de registro sanitario de predio pecuario / avícola [Certificado]. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020a). Resolución 067449 de 2020: Por la cual se establecen los requisitos para la certificación en Buenas Prácticas Ganaderas en producción de leche bovina. ICA. ',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020b). Resolución 1056 de 2020: Uso responsable de medicamentos veterinarios en la producción ganadera. ICA. ',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023). Resolución 000017 de 2023: Por la cual se establecen los requisitos sanitarios para la producción primaria de leche destinada al consumo humano. ICA. ',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, agosto 1). Certificación de predio libre de brucelosis [Certificado]. ICA - Subgerencia de Protección Animal.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2024). Certificación de predio libre de tuberculosis bovina [Certificado]. ICA - Subgerencia de Protección Animal.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2024, diciembre 11). Certificado de registro sanitario de predio pecuario - RSPP [Certificado]. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). Certificación sanitaria de vacunación y control parasitario [Formulario]. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). Guía sanitaria de movilización interna de animales [Formulario]. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). Registro oficial de tratamientos (Anexo 2) [Formato]. Ministerio de Agricultura y Desarrollo Rural, ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (s.f.). Normas microbiológicas del agua para consumo humano. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (s.f.). Registro ingreso de personas y vehículos [Formato]. Alianzas Productivas.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2009). Resolución 0371 de 2009: Por la cual se reglamenta el manejo de residuos peligrosos. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Decreto 1076 de 2015: Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2006). Decreto 616 de 2006: Por el cual se establecen los requisitos sanitarios de la leche y productos lácteos destinados al consumo humano. ',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (s.f.). Código sanitario para los animales terrestres. OMSA (antes OIE). ',
      link: '',
    },
    {
      referencia:
        'Politécnico Colombiano. (s.f.). Puntos de control críticos (PCC) en sanidad animal: Certificación para producción lechera [Hoja de cálculo].',
      link: '',
    },
    {
      referencia:
        'Secretaría de Planeación de Cartagena. (s.f.). Solicitud de certificado de uso del suelo [Formato]. Alcaldía de Cartagena.',
      link: '',
    },
    {
      referencia:
        'SENA. (s.f.). Formatos para el control del programa de limpieza y desinfección (Versión 001, Ref01) [Formato]. Programa de L & D.',
      link: '',
    },
    {
      referencia:
        'SENA. (s.f.). Manejo de potreros [Formato]. Documento interno.',
      link: '',
    },
    {
      referencia:
        'Tafur, J., & Nieto, M. (2011). Buenas prácticas ganaderas y trazabilidad [Documento técnico]. Universidad Nacional de Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picon RIncon',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
