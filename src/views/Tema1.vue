<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Implementación de Buenas Prácticas Ganaderas
    
    p.mb-5 La implementación hace referencia a los pasos que debe seguir un equipo dentro de una organización para alcanzar sus objetivos, a través de una estrategia organizada que incluye una línea de tiempo, actividades definidas y recursos asignados. Para lograr una ejecución exitosa, es fundamental considerar los siguientes aspectos clave:

    .fondo___img
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img2.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Definir los objetivos
            p.mb-0 Establecer metas claras y medibles para orientar el proceso de implementación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img3.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Realizar una investigación
            p.mb-0 Recopilar información técnica, normativa y contextual que fundamente las acciones.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Identificar todos los riesgos
            p.mb-0 Analizar y prever factores que puedan afectar el proceso.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Programar todos los hitos
            p.mb-0 Establecer una cronología con metas parciales y fechas clave.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img6.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Asignar tareas
            p.mb-0 Delegar responsabilidades específicas dentro del equipo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Asignar recursos útiles
            p.mb-0 Determinar y distribuir los recursos humanos, técnicos y financieros necesarios.
        
        p.mb-0.espacio___movil_1 La implementación de las Buenas Prácticas Ganaderas se aplica durante los procesos de producción pecuaria con el propósito de asegurar la sostenibilidad ambiental y económica en toda la cadena productiva. Para profundizar en estas prácticas.
    
        <!-- BLOQUE 1 -->
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Objetivos

        p.mb-5 El objetivo principal es <strong>implementar las BPG en la producción de leche bovina</strong>, con el fin de:

    .row.justify-content-center.mb-5.espacio___movil_1
      .col-xl-10
        .row.align-items-center.m-0.style___box_1_1(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2 mt-3"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Garantizar la inocuidad del producto.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Promover el bienestar animal.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Proteger el medio ambiente.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Cumplir la normatividad sanitaria vigente en Colombia.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Optimizar los procesos productivos, administrativos y de trazabilidad.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Obtener la certificación oficial del Instituto Colombiano Agropecuario (ICA).</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img8.jpg', alt='' style="max-width: 500px").m-auto
    
    p.mb-5 A continuación, se presenta la tabla, que resume las metas específicas para la implementación de las Buenas Prácticas Ganaderas. Cada meta cuenta con un plazo estimado que orienta las acciones a desarrollar.

    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Metas específicas
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Meta
                th Plazo estimado
            tbody
              tr
                td.ajuste-border-tabla.texto-left Cumplir el 100 % de los requisitos sanitarios de la Resolución ICA 000017 de 2023.
                td.texto-left  En un máximo de 12 meses.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Implementar prácticas de bienestar animal conforme a ICA y OMSA (mínimo 90 % de conformidad).
                td.texto-left Durante el proceso de implementación.
              tr
                td.ajuste-border-tabla.texto-left Establecer registros obligatorios en al menos el 95 % de los eventos productivos.
                td.texto-left Primeros 6 meses.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Capacitar al 100 % del personal en higiene, bioseguridad, manejo animal y normatividad en BPG.
                td.texto-left Primeros 3 meses.
              tr
                td.ajuste-border-tabla.texto-left Reducir en un 80 % los riesgos de contaminación física, química y biológica.
                td.texto-left  Evaluación mensual continua.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Mejorar la infraestructura y condiciones ambientales de la finca.
                td.texto-left En un plazo máximo de 8 meses.
              tr
                td.ajuste-border-tabla.texto-left Solicitar auditoría de certificación BPG (cumplimiento ≥ 90 %).
                td.texto-left Entre los 12 y 14 meses.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Elementos de la implementación

    p.mb-5 Los siguientes componentes constituyen la base del plan de implementación de las BPG, conforme a los lineamientos del ICA:

    .row.justify-content-center.mb-5.espacio___movil_1
      .col-xl-10
        .bg--img_03
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img9.png", alt="" style="width: 400px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Diagnóstico inicial del predio").ajuste-cajaAcordion
                  p.mb-0 Evaluación del estado actual de la finca en términos sanitarios, ambientales, infraestructura y manejo animal. Es el punto de partida para elaborar un plan de mejora.
                .row(titulo="Manejo sanitario del hato").ajuste-cajaAcordion
                  p.mb-0  Incluye vacunación, desparasitación, control de brucelosis y tuberculosis, con visitas periódicas del médico veterinario. Obligatorio según Art. 14, Resolución ICA 000145/2020.
                .row(titulo="Calidad del agua y alimentos").ajuste-cajaAcordion
                  p.mb-0 El agua debe ser potable o cumplir los estándares del INS; los alimentos deben almacenarse correctamente y estar libres de contaminantes. Regulación: Art. 15, Resolución ICA 000145/2020.
                .row(titulo="Bienestar animal").ajuste-cajaAcordion
                  p.mb-0 Aplicación de las cinco libertades y los cinco dominios del bienestar animal, según la OIE.
                .row(titulo="Manejo higiénico de la ordeña").ajuste-cajaAcordion
                  p.mb-0 Lavado de ubres, uso de implementos limpios, control de mastitis y enfriamiento inmediato de la leche. Normativa: Resolución 000017/2012 y Decreto 616/2006 (MinSalud).
        
        .bg--img_03.espacio___movil_3
          .row.h-100.align-items-center
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Uso responsable de medicamentos").ajuste-cajaAcordion
                  p.mb-0 Registro obligatorio, tiempos de retiro, prescripción veterinaria, prohibición de sustancias no autorizadas. Resolución ICA 1056/2020.
                .row(titulo="Registro y trazabilidad").ajuste-cajaAcordion
                  p.mb-0  Identificación individual del ganado y registros de producción, tratamientos y movimientos. Resolución ICA 20126/2016.
                .row(titulo="Gestión ambiental").ajuste-cajaAcordion
                  p.mb-0 Manejo de estiércol, aguas de lavado, conservación de suelos y disposición de envases, según el Decreto 1076/2015 y la Resolución 0371/2009 (MADS).
                .row(titulo="Capacitación del personal").ajuste-cajaAcordion
                  p.mb-0 Formación continua y registro de capacitación en higiene, manejo animal, bioseguridad y normatividad, con evidencia verificable ante el ICA.
                .row(titulo="Evaluación y mejora continua").ajuste-cajaAcordion
                  p.mb-0 Auditorías internas y actualizaciones periódicas del plan de acción para asegurar la sostenibilidad del sistema.
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img10.png", alt="" style="width: 400px").m-auto

    <!-- BLOQUE 3 -->
    Separador.espacio___movil_2
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Parámetros de complementación

    p.mb-5 Para garantizar el cumplimiento normativo y lograr la certificación en BPG, es imprescindible considerar los parámetros técnicos y administrativos definidos por el ICA, conforme al Decreto 616 de 2019 y la Resolución 67449 de 2022.

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sanidad animal y bioseguridad
                p.mb-0 Registro del predio, autorización del POT, plan sanitario integral (prevención, diagnóstico y tratamiento de enfermedades), control de mastitis mensual con test de California.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Infraestructura mínima
                p.mb-0 Corrales, bretes, sala de ordeño, embarcaderos con materiales lavables y desinfectables, que aseguren bienestar animal y seguridad del personal.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cuarto de tanque de frío
                p.mb-0 Espacio exclusivo, pisos y paredes lisos, buena ventilación y control de plagas, materiales inocuos. Punto crítico para la calidad de la leche.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sistema y sitio de ordeño
                p.mb-0 Sitio fijo o móvil con drenaje adecuado, protección contra animales, y superficies fáciles de limpiar.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Rutina de ordeño
                p.mb-0 Despunte, higiene del operario (guantes, lavado, gel), sellado pre y postordeño, procedimientos sin interrupción.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Calidad del agua
                p.mb-0 Análisis fisicoquímico y microbiológico anual, acceso continuo y limpio para el hato, ubicación estratégica de fuentes y reservorios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Control de medicamentos e insumos
                p.mb-0 Productos con registro ICA, almacenamiento separado según uso, prescripción veterinaria para medicamentos especiales (hormonas, anestésicos).
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Registro y documentación
                p.mb-0 Historial detallado de eventos productivos, con respaldo físico o digital para auditorías y toma de decisiones.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img19.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manejo de residuos y control de plagas
                p.mb-0 Protocolo para recolección, segregación y disposición final. Programa escrito de control de plagas, manejo adecuado de estiércol.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bienestar animal
                p.mb-0 Aplicación de las cinco libertades: acceso a alimento y agua, ambiente cómodo, atención médica y respeto por el comportamiento natural.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img21.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Condiciones del personal
                p.mb-0 Uso obligatorio de indumentaria adecuada, control sanitario del personal, registro de capacitaciones en temas de salud y manejo animal.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Recursos para la implementación

    p.mb-5 Se invita a revisar el video, el cual ofrece una visión general sobre las normas, acciones y herramientas necesarias para aplicar las Buenas Prácticas Ganaderas (BPG) en diferentes sistemas de producción: leche, carne o doble propósito. 

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6UQFcvwHz3w" title="Recursos para implementación BPG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Aunque las BPG pueden enfocarse específicamente en un tipo de producción, comparten una base común de principios y requisitos que deben cumplirse en cualquier sistema bovino.

    .row.mb-4
      .col-lg-4(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img23.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Manejo sanitario
          p.mb-0 Prevención, diagnóstico y control de enfermedades en el hato.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img24.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Buen uso de medicamentos veterinarios
          p.mb-0 Aplicación racional bajo supervisión técnica y con registros actualizados.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img25.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Bioseguridad
          p.mb-0 Medidas que previenen el ingreso y la diseminación de agentes patógenos.
      
    .row.mb-5
      .col-lg-4(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img26.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Almacenamiento de insumos
          p.mb-0 Conservación segura y organizada de productos veterinarios y agrícolas, conforme a la normatividad.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img27.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Buenas prácticas en la alimentación
          p.mb-0 Provisión de dieta balanceada y agua potable en cantidad y calidad adecuadas.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img28.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Seguridad y salud en el trabajo
          p.mb-0 Condiciones laborales seguras, dotación de elementos de protección personal (EPP) y capacitaciones permanentes.

    .fondo___color_1
      .px-5
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Uso y manejo de las Buenas Prácticas Ganaderas
        
        .row.justify-content-center.mb-5
          .col-xl-10
            .row
              .col-xl-6(data-aos="zoom-in")
                .style___box_2.h-100
                  .row.justify-content-center.mb-3
                    .col-xl
                      figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img30.png', alt="" ).m-auto
                    h3.mb-4 El uso y manejo de las BPG tiene como finalidad:
                    <ul class="fa-ul estilo___i">
                      <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Garantizar la producción de alimentos inocuos.</li>
                      <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Promover la seguridad y salud ocupacional de los trabajadores.</li>
                      <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Reducir el impacto ambiental derivado de la actividad ganadera.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Optimizar la rentabilidad y sostenibilidad del sistema productivo.</li>
                    </ul>
              .col-xl-6(data-aos="zoom-in").espacio___movil_3
                .style___box_3.h-100
                  .row.justify-content-center.mb-3
                    .col-xl
                      figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img31.png', alt="").m-auto
                    h3.mb-4 Para lograr estos objetivos, es fundamental:
                    <ul class="fa-ul estilo___i">
                      <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Establecer protocolos estandarizados para las actividades críticas.</li>
                      <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Implementar un sistema riguroso de registro y seguimiento.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Aplicar medidas correctivas oportunas y fomentar la mejora continua.</li>
                    </ul>

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Componentes para la implementación del uso y manejo de las BPG

    p.mb-5 A continuación se presentan los componentes fundamentales, organizados por dimensión:

    .row
      .col-xl-3(data-aos="zoom-in")
        .style___box_4.h-100
          h4 Las personas y la empresa
          p.mb-0 Organización de la empresa Personal.
      .col-xl-3(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          h4 El animal y su manejo
          p.mb-0 Manejo del hato Alimentación Salud animal Bienestar animal.
      .col-xl-3(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          h4 Infraestructura de producción
          p.mb-0 Establecimiento Instalaciones, equipos y herramientas.
      .col-xl-3(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          h4 El ambiente y la producción
          p.mb-0 Suelo, agua, forrajes gestión de estiércol y efluentes gestión de residuos adaptación y mitigación al cambio climático.

    <!-- BLOQUE 5 -->
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Metodologías de desarrollo y programación

    p.mb-5 La implementación de las Buenas Prácticas Ganaderas (BPG) en la producción de leche parte del interés del productor en consolidar una empresa sostenible, que:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_1_1.ajuste___color(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2 mt-3"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Aumente la productividad.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Sea amigable con el medio ambiente.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Preserve la integridad física y emocional de los trabajadores.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Garantice un trato digno a los animales.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Genere un impacto positivo en la comunidad.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Produzca leche inocua y de buena calidad, facilitando su aceptación en el mercado y mejorando la rentabilidad.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img32.jpg', alt='' style="max-width: 500px").m-auto

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Diagnóstico inicial y planificación

    p.mb-5 El proceso metodológico inicia con un <strong>diagnóstico del predio</strong>, el cual permite obtener una “fotografía” real de las condiciones de producción. Este diagnóstico considera diversos aspectos:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manejo de los animales
                p.mb-0 Evaluación del estado sanitario, alimentación, bienestar y comportamiento natural. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Condiciones laborales del personal
                p.mb-0 Verificación del uso de indumentaria adecuada, seguridad ocupacional y nivel de capacitación.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Riesgos laborales
                p.mb-0 Identificación de accidentes potenciales y exposición a agentes biológicos o químicos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img35.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Limpieza y orden de equipos
                p.mb-0 Estado de higiene de herramientas y equipos utilizados en producción y ordeño.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img36.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gestión de insumos
                p.mb-0 Control y almacenamiento adecuado de medicamentos veterinarios, alimentos balanceados e insumos agrícolas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img37.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estado del cuarto de tanque frío
                p.mb-0 Higiene, estructura, y condiciones de protección contra contaminantes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img38.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Condiciones de la sala de ordeño
                p.mb-0 Infraestructura, aplicación de protocolos, y medidas de bioseguridad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estado del establo
                p.mb-0 Evaluación de comodidad, ventilación, drenaje y limpieza.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img40.png', alt='' style="max-width: 500px").m-auto

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Ejecución y verificación

    p.mb-5 Junto con las actividades rutinarias que se desarrollan en la finca (ordeño, rotación de potreros, alimentación, crianza de terneras, entre otras), se debe:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_1_1(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Revisar la normatividad vigente establecida por el Instituto Colombiano Agropecuario (ICA).</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Aplicar la lista de chequeo titulada “Predios productores de leche con destino al consumo humano - Forma 3-852 V.5”. Esta herramienta permite identificar carencias frente a la normativa y establecer un plan de mejora.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Solicitar la visita de auditoría al ICA una vez implementadas las mejoras necesarias.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img41.jpg', alt='' style="max-width: 500px").m-auto

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Proceso de auditoría

    p.mb-5 Una vez solicitada la auditoría:
    
    .row.justify-content-center.mb-5.espacio___movil_1
      .col-xl-10
        .row.align-items-center.m-0.style___box_5(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img42.jpg', alt='' style="max-width: 500px").m-auto
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>El ICA o la entidad autorizada contará con un plazo máximo de quince (15) días para realizar la visita.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>urante esta, se diligenciará nuevamente la lista de chequeo, y se elaborará un informe de auditoría.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Este informe reflejará el concepto técnico, que podrá ser:</li>
              <ul class="fa-ul estilo___ul">
                <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Certificable, si se cumple con los requisitos.</li>
                <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Aplazado, si se requiere subsanar aspectos pendientes.</li>
              </ul>
            </ul>

    p.mb-0.espacio___movil_1 Este informe constituirá parte integral del soporte documental necesario para la expedición del certificado oficial de Buenas Prácticas Ganaderas.
          
    <!-- BLOQUE 6 -->
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Cronograma

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 Un cronograma es una herramienta de planificación que organiza las actividades del plan de implementación dentro de una línea de tiempo definida. Su función principal es permitir una visualización integral del plan, mostrando de manera clara la secuencia de acciones, la duración estimada de cada fase y cómo se interrelacionan entre sí.
        p.mb-0.style___box_6(data-aos="zoom-in") Esta estructura facilita la comprensión del proceso global, ayudando a identificar los momentos clave de ejecución, las prioridades y los plazos establecidos. Además, el cronograma permite prever cuellos de botella, asignar responsabilidades específicas y coordinar eficazmente al equipo humano involucrado. Al vincular tareas, tiempos y recursos, se convierte en una guía práctica para garantizar el cumplimiento de los objetivos propuestos en el marco de las Buenas Prácticas Ganaderas.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 500px").m-auto

    p.mb-5.espacio___movil_1 Para crear un cronograma efectivo dentro del plan de implementación de Buenas Prácticas Ganaderas, es fundamental considerar el tiempo total disponible para su ejecución, así como los objetivos o metas que se desean alcanzar. La planificación debe incluir todas las actividades necesarias, sin omitir aquellas que, aunque parezcan mínimas, son claves para el éxito del proceso.

    .fondo___color_1
      .px-5
        .row.justify-content-center
          .col-xl-8.mb-5
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Actividades necesarias para el cronograma
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Actividad
                    th Descripción
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Recopilación de información técnica y administrativa.
                    td.texto-left Organización de documentos y datos relevantes.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Inspección inicial de la unidad productiva.
                    td.texto-left Evaluación preliminar del estado del sistema productivo.
                  tr
                    td.ajuste-border-tabla.texto-left Diagnóstico integral del sistema de producción.
                    td.texto-left Análisis completo de las condiciones del predio.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Elaboración del plan de acción.
                    td.texto-left Diseño de estrategias para subsanar debilidades.
                  tr
                    td.ajuste-border-tabla.texto-left Realización de reuniones con los actores involucrados.
                    td.texto-left Coordinación y socialización del proceso.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Divulgación de los lineamientos del plan.
                    td.texto-left Comunicación clara al equipo de trabajo.
        
        p.mb-0.espacio___movil_1 Estas acciones deben organizarse de manera secuencial o paralela, según su naturaleza y dependencia, lo que permitirá optimizar recursos, establecer prioridades y garantizar un seguimiento riguroso en cada fase del proceso. Entre más específico mejor quedará el cronograma y, por tanto, las actividades serán mejor planeadas y ejecutadas en los tiempos requeridos.

        <!-- BLOQUE 7 -->
        Separador
        #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.7 Lista de chequeo
    
    p.mb-2 Las listas de chequeo son una herramienta técnica diseñada para evaluar, de forma organizada y sistemática, el cumplimiento de un conjunto de requisitos establecidos. Su función principal es verificar la ejecución de actividades específicas dentro del plan de implementación, facilitando el control y seguimiento de cada proceso. Para que su aplicación sea efectiva, es fundamental que la lista incluya de manera detallada los procesos, subprocesos o actividades que se desean comprobar, así como los criterios o estándares contra los cuales se evaluará su cumplimiento.

    .row.align-items-center.mb-5
      .col-xl
        .row.align-items-center.m-0
          .row.align-items-center.m-0.style___box_7.mb-3(data-aos="zoom-in").espacio___movil_3
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img44.jpg', alt='' style="max-width: 500px").m-auto
            .col-xl
              p.mb-0 Además, el juicio técnico del profesional que la aplica resulta clave, ya que debe interpretar con criterio objetivo si cada ítem evaluado cumple o no con lo exigido, según la normativa vigente y los principios de las Buenas Prácticas Ganaderas (BPG).
        p.mb-0.espacio___movil_3 En los planes de implementación de las BPG, estas listas son una herramienta ampliamente utilizada para realizar el seguimiento sistemático de cada uno de los componentes del plan. Permiten verificar la implementación de procedimientos y procesos dentro de la unidad productiva, orientados al cumplimiento de los estándares exigidos. También son fundamentales para diagnosticar, evaluar y monitorear de forma periódica el estado del predio, la producción y el avance en la adopción de las prácticas requeridas para la certificación en bovinos dedicados a la producción de leche.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 300px").m-auto
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img46.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los datos obtenidos a través de estas listas pueden organizarse y analizarse mediante reportes estadísticos representados en gráficas o diagramas, lo que facilita su interpretación y permite observar la evolución de las actividades implementadas, apoyando la toma de decisiones estratégicas en función del cumplimiento de los objetivos del plan de implementación.
        a.anexo.mt-3(:href="obtenerLink('/downloads/ANEXO_1.xls')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Lista de chequeo.

    <!-- BLOQUE 8 -->
    Separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.8 Criterios de cumplimiento

    p.mb-5 Los criterios de cumplimiento se derivan de los componentes que conforman las BPG. Se utilizan principalmente en las listas de chequeo para realizar diagnósticos, evaluaciones y monitoreos de la aplicación de dichas prácticas en las unidades productivas. Estas listas están diseñadas de forma específica según la especie y el tipo de producción, discriminando y detallando aspectos propios de cada labor especializada. El ente regulador es responsable de diseñar estos criterios y de verificar su cumplimiento. En Colombia, esta función está a cargo del Instituto Colombiano Agropecuario (ICA).

    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img143.svg' alt="" )
          .tarjeta.color-primario
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    h4 <em>Checklists</em> específicos
                    p.mb-0 Diseñados por especie y tipo de producción.
      
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img143.svg' alt="" )
          .tarjeta.color-primario
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    h4 Ente regulador
                    p.mb-0 Instituto Colombiano Agropecuario (ICA).
      
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img143.svg' alt="" )
          .tarjeta.color-primario
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    h4 Función principal
                    p.mb-0 Diagnóstico, evaluación y monitoreo de las BPG en campo.

    .row.espacio___movil_1
      .col-xl-4(data-aos="zoom-in")
        a.anexo.mb-4(:href="obtenerLink('/downloads/ANEXO_2.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Formato de criterios de cumplimiento.

    <!-- BLOQUE 9 -->
    Separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.9 Documentación

    p.mb-5 La toma y registro de información es fundamental para garantizar un historial completo de los eventos ocurridos en la finca. Esta documentación permite analizar los datos y tomar decisiones enfocadas al mejoramiento continuo en sanidad, inocuidad y productividad (Tafur & Nieto, 2011).

    .row.justify-content-center
      .col-xl-10
        .bg--img_03
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img47.png", alt="" style="width: 400px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Eventos que deben registrarse en la finca").ajuste-cajaAcordion
                  <ul class="fa-ul">
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Vacunación.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Desparasitación.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Lavado y desinfección del tanque frío.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Lavado y desinfección de utensilios de ordeño.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Rutina de ordeño.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Análisis y calidad del agua.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Utilización de medicamentos veterinarios e insumos agropecuarios.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Mantenimiento de los equipos de la granja.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Entrada y salida del personal a la finca.</li>
                  </ul>
                .row(titulo="Registro individual por animal").ajuste-cajaAcordion
                  <ul class="fa-ul">
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Eventos sanitarios.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Eventos reproductivos.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Desempeño productivo.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Procedimientos quirúrgicos y tratamientos.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Guía sanitaria de movilización (original y copia), expedida por el ICA.</li>
                  </ul>
    
    p.mb-5.espacio___movil_3 Además de los registros mencionados, el productor que desee obtener la certificación en Buenas Prácticas Ganaderas (BPG) debe contar con los siguientes documentos actualizados y disponibles al momento de la auditoría:

    .row.mb-3
      .col-xl-6(data-aos="zoom-in")
        .style___box_8.h-100
          .row.align-items-center
            .col-xl-9
              p.mb-0 Certificado de uso del suelo.
            .col-xl-3(data-aos="fade-left").espacio___movil_3
              a.boton.color-acento-botones(@click="abrirModal('ANEXO_3.jpg')")
                span Ver
                i.fas.fa-search

      .col-xl-6(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100
          .row.align-items-center
            .col-xl-9
              p.mb-0 Registro sanitario de predio.
            .col-xl-3(data-aos="fade-left").espacio___movil_3
              a.boton.color-acento-botones(@click="abrirModal('ANEXO_7.jpg')")
                span Ver
                i.fas.fa-search
    
    .row.mb-3
      .col-xl-6(data-aos="zoom-in")
        .style___box_9.h-100
          .row.align-items-center
            .col-xl-9
              p.mb-0 Certificado hato libre de tuberculosis.
            .col-xl-3(data-aos="fade-left").espacio___movil_3
              a.boton.color-acento-botones(@click="abrirModal('ANEXO_4.jpg')")
                span Ver
                i.fas.fa-search

      .col-xl-6(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100
          .row.align-items-center
            .col-xl-9
              p.mb-0 Certificado hato libre de brucelosis.
            .col-xl-3(data-aos="fade-left").espacio___movil_3
              a.boton.color-acento-botones(@click="abrirModal('ANEXO_8.jpg')")
                span Ver
                i.fas.fa-search

    .row.mb-3
      .col-xl-6(data-aos="zoom-in")
        .style___box_8.h-100
          .row.align-items-center
            .col-xl-9
              p.mb-0 Guía de movilización interna.
            .col-xl-3(data-aos="fade-left").espacio___movil_3
              a.boton.color-acento-botones(@click="abrirModal('ANEXO_5.png')")
                span Ver
                i.fas.fa-search

      .col-xl-6(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100
          .row.align-items-center
            .col-xl-9
              p.mb-0 Constancia expedida por el médico veterinario que le preste asistencia técnica a su finca.
            .col-xl-3(data-aos="fade-left").espacio___movil_3
              a.boton.color-acento-botones(@click="abrirModal('ANEXO_9.jpg')")
                span Ver
                i.fas.fa-search

    .row.mb-5
      .col-xl-12(data-aos="zoom-in")
        .style___box_9.h-100
          .row.align-items-center
            .col-xl-10
              p.mb-0 Constancia registro de predio ante el ICA.
            .col-xl-2(data-aos="fade-left").espacio___movil_3
              a.boton.color-acento-botones(@click="abrirModal('ANEXO_6.jpg')")
                span Ver
                i.fas.fa-search

    // Modal ÚNICO (fuera de los .col-xl)
    ModalA(:abrir-modal.sync="modalActivo")
      figure
        img(:src="imagenModal", alt="").m-auto

    .row.align-items-center.m-0.style___box_10(data-aos="zoom-in")
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 90px").m-auto 
      .col-xl
        p.mb-0 Junto con estos documentos, es indispensable consultar la normatividad vigente de BPG definida por el ICA y aplicar la lista de chequeo oficial. Esta herramienta, denominada “Predios productores de leche con destino al consumo humano - Forma 3-852 V. 5”, permite identificar posibles carencias frente a la normativa e implementar un plan de mejora antes de solicitar la visita de auditoría.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<script>
export default {
  data() {
    return {
      modalActivo: false,
      imagenModal: '',
    }
  },
  methods: {
    abrirModal(nombreImagen) {
      // Ruta relativa a la carpeta /assets
      this.imagenModal = require(`@/assets/curso/MODALES/${nombreImagen}`)
      this.modalActivo = true
    },
  },
}
</script>

<style lang="sass"></style>
