<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color
      .px-5
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
                  img(src='@/assets/curso/intro/img1.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 La implementación de las Buenas Prácticas Ganaderas (BPG) en la producción de leche bovina representa una estrategia esencial para garantizar la inocuidad del producto, el bienestar animal, la sostenibilidad ambiental y la trazabilidad en toda la cadena productiva. Este componente formativo se enfoca en fortalecer las capacidades técnicas del personal vinculado a la actividad pecuaria, promoviendo una gestión integral y responsable de los procesos, conforme con la normativa vigente en Colombia.
        
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el contexto actual, caracterizado por una creciente exigencia de los mercados nacionales e internacionales, resulta prioritario adoptar protocolos técnicos y sanitarios que aseguren la calidad del producto lácteo. Las BPG no solo permiten estandarizar procesos, sino también evidenciar su cumplimiento mediante registros verificables, facilitando así la obtención de certificaciones oficiales y el acceso a canales comerciales más competitivos. Esta práctica, además, aporta significativamente al desarrollo rural y al posicionamiento de la ganadería colombiana como una actividad moderna, rentable y sostenible.
        
        p.mb-0.style___box_1(data-aos="zoom-in") Este componente ofrece una guía completa para la comprensión y aplicación de los principios de las BPG en unidades productivas dedicadas a la leche bovina. A lo largo del documento se abordan los elementos clave para la implementación, como el manejo sanitario del hato, la bioseguridad, la rutina de ordeño, el uso responsable de medicamentos veterinarios, la documentación técnica y la preparación para auditorías de certificación. Se invita al lector a asumir un rol activo en la transformación de sus prácticas productivas, con el objetivo de elevar los estándares de calidad y contribuir a una producción ganadera alineada con los desafíos del siglo XXI.

</template>

<script>
export default {
  name: 'Introduccion',
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
