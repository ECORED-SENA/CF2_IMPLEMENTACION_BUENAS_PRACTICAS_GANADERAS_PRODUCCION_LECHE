<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Auditoría de certificación 

    p.mb-5 A continuación, se presentan los requisitos exigidos por el ICA para solicitar la auditoría con fines de certificación en BPG: 

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img142.svg" style="max-width: 60px").m-auto
      .col
        h3 Requisitos para solicitar auditoría del ICA 

    p.mb-5 El predio debe cumplir con las siguientes condiciones previas: 

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Registro ante el ICA 
                p.mb-0 El predio debe estar registrado oficialmente como unidad pecuaria productora de leche. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img128.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Implementación de BPG 
                p.mb-0 Se deben aplicar las BPG en todas las áreas: sanidad, bienestar animal, higiene, bioseguridad, trazabilidad, manejo ambiental, etc. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img129.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Documentación y registros actualizados 
                p.mb-0 Mantener procedimientos escritos y registros completos que evidencien la implementación. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img130.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cumplimiento sanitario 
                p.mb-0 Tener plan sanitario vigente, esquemas de vacunación al día y resultados de pruebas diagnósticas. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img131.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sistema de trazabilidad 
                p.mb-0 Identificación individual de los animales y registros de ingresos, salidas y eventos productivos o sanitarios. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img132.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Infraestructura adecuada 
                p.mb-0 Contar con instalaciones apropiadas para ordeño, almacenamiento de leche, cuarentena, manejo ambiental, etc. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img133.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Personal capacitado
                p.mb-0 El personal debe haber recibido formación documentada en prácticas BPG. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img134.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Solicitud formal 
                p.mb-0 Presentar una comunicación escrita al ICA o utilizar los canales oficiales disponibles. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img135.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Documentación soporte 
                p.mb-0 Incluir formatos, protocolos, procedimientos operativos, registros y certificaciones sanitarias. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img136.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 1 -->
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Ruta hacia la certificación en BPG (producción de leche)

    p.mb-5  El proceso de certificación consta de varias etapas, que deben ser cumplidas de forma secuencial y documentada. A continuación, se describe el camino hacia la obtención del certificado: 

    .row.justify-content-center
      .col-xl-10
        .bg--img_03
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img137.png", alt="" style="width: 400px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Diagnóstico inicial del predio").ajuste-cajaAcordion
                  p.mb-0 Evaluación interna o externa del cumplimiento de la Resolución ICA 067449 de 2020. 
                .row(titulo="Implementación de las BPG").ajuste-cajaAcordion
                  p.mb-0 Adecuación de instalaciones, capacitación del personal y aplicación de los protocolos definidos. 
                .row(titulo="Documentación y registros").ajuste-cajaAcordion
                  p.mb-0 Redacción y organización de los procedimientos, protocolos y formatos requeridos. 
                .row(titulo="Solicitud formal al ICA").ajuste-cajaAcordion
                  p.mb-0 Envío de la solicitud oficial con toda la documentación soporte para la auditoría. 
        
        .bg--img_03.espacio___movil_3
          .row.h-100.align-items-center
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Auditoría técnica del ICA").ajuste-cajaAcordion
                  p.mb-0 Visita técnica de verificación del cumplimiento de los requisitos. Se revisan prácticas, registros e instalaciones. 
                .row(titulo="Informe técnico y plan de mejora").ajuste-cajaAcordion
                  p.mb-0 Si se detectan hallazgos, se entrega un informe con acciones correctivas y plazo para su ejecución. 
                .row(titulo="Revisión de cumplimiento").ajuste-cajaAcordion
                  p.mb-0 Evaluación de las acciones correctivas implementadas por el predio. 
                .row(titulo="Otorgamiento del certificado BPG - leche").ajuste-cajaAcordion
                  p.mb-0 Si se cumple con todos los requisitos, el ICA emite la certificación, válida por tres años.
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img138.png", alt="" style="width: 400px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Concepto de la certificación

    p.mb-4  Una vez realizado el diagnóstico inicial del predio, debe aplicarse la lista de chequeo oficial denominada “Predios productores de leche con destino al consumo humano - Forma 3-852 V.5”, diseñada por el Instituto Colombiano Agropecuario (ICA).

    p.mb-5 Esta herramienta evalúa el grado de cumplimiento de los criterios <strong>fundamentales (F), mayores (My) y menores (Mn)</strong>, con el fin de calcular los porcentajes alcanzados e identificar oportunidades de mejora.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_14(data-aos="zoom-in")
          .col-xl
            p.mb-3 Con base en los resultados obtenidos, se debe formular un <strong>plan de trabajo</strong> orientado a alcanzar: 
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span><strong>100 %</strong> de cumplimiento en los criterios <strong>fundamentales (F)</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Más del <strong>80 %</strong> en los criterios <strong>mayores (My)</strong>.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Al menos <strong>60 %</strong> en los criterios <strong>menores (Mn)</strong>.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img139.jpg', alt='' style="max-width: 500px").m-auto

    p.mb-5 Estos son los valores mínimos requeridos para que un predio sea considerado <strong>certificable</strong> en buenas prácticas ganaderas (BPG) para la producción de leche. Además del cumplimiento normativo, este proceso representa una oportunidad estratégica para mejorar el desempeño integral de la empresa ganadera, fortaleciendo la calidad del producto, la sostenibilidad ambiental, el bienestar animal y la competitividad comercial. 

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 17.
      span Totalización de criterios para certificación en BPG
    .tabla-a(data-aos="zoom-in").mb-5
      table.ajuste__tabla
        thead
          tr
            th.ajuste-border-tabla Tipo de criterio 
            th.ajuste-border-tabla Total de criterios 
            th.ajuste-border-tabla No. de criterios no aplica (NA) 
            th.ajuste-border-tabla No. de criterios a cumplir 
            th.ajuste-border-tabla % de cumplimiento requerido 
            th.ajuste-border-tabla Criterios cumplidos 
            th % de criterios cumplidos 
        tbody
          tr
            td.ajuste-border-tabla Fundamentales (F) 
            td.ajuste-border-tabla 23
            td.ajuste-border-tabla -
            td.ajuste-border-tabla 23
            td.ajuste-border-tabla 100 %
            td.ajuste-border-tabla -
            td -
          tr.ajuste-color-tabla
            td.ajuste-border-tabla Mayores (My) 
            td.ajuste-border-tabla 34
            td.ajuste-border-tabla -
            td.ajuste-border-tabla 34
            td.ajuste-border-tabla ≥ 80 % 
            td.ajuste-border-tabla -
            td -
          tr
            td.ajuste-border-tabla Menores (Mn) 
            td.ajuste-border-tabla 5
            td.ajuste-border-tabla -
            td.ajuste-border-tabla 5
            td.ajuste-border-tabla ≥ 60 % 
            td.ajuste-border-tabla -
            td -
    
    p.mb-5 Después de ejecutar las acciones correctivas y alcanzar los niveles mínimos exigidos, el productor deberá <strong>solicitar formalmente al ICA</strong> la auditoría de certificación en BPG. El ICA (o una entidad delegada) dispondrá de <strong>15 días calendario</strong> para realizar la visita. Durante la auditoría se diligencia nuevamente la lista de chequeo y se elabora un <strong>informe técnico</strong>, el cual derivará en uno de los siguientes conceptos: 

    TabsC.color-acento-contenido(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Concepto: Aplazado")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img140.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Concepto: Aplazado 
            p.mb-3 Se asigna cuando el predio no cumple con alguno de los siguientes requisitos: 
            <ul class="fa-ul mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Menos del <strong>100 %</strong> de los criterios fundamentales.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Menos del <strong>80 %</strong> de los criterios mayores.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Menos del <strong>60 %</strong> de los criterios menores.</li>
            </ul>
            p.mb-0 En este caso, el productor contará con <strong>tres (3) meses</strong> para subsanar las no conformidades. Una vez implementadas las mejoras, deberá notificar al ICA para que programe una nueva visita, la cual deberá realizarse en un plazo máximo de <strong>30 días hábiles</strong> a partir de la solicitud. 

      .py-3.py-md-4(titulo="Concepto: Certificable")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img141.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Concepto: Certificable 
            p.mb-3 Se otorga cuando el predio cumple con: 
            <ul class="fa-ul mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span><strong>100 %</strong> de los criterios fundamentales.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Al menos <strong>80 %</strong> de los criterios mayores.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy"></i></span>Al menos <strong>60 %</strong> de los criterios menores.</li>
            </ul>
            p.mb-0 Bajo este concepto, el ICA emite el <strong>Certificado de buenas prácticas ganaderas (BPG)</strong> en producción de leche, el cual es válido por <strong>tres años</strong> y respalda el cumplimiento de los estándares sanitarios, productivos, ambientales y de bienestar animal establecidos en la normativa nacional. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
