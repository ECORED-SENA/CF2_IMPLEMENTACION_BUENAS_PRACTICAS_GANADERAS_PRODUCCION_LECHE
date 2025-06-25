<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas


    

    
    <!-- BLOQUE 1 -->
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos de procedimientos



      
    <!-- BLOQUE 2 -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Modelos




    <!-- BLOQUE 3 -->
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Características




    <!-- BLOQUE 4 -->
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Concepto




    <!-- BLOQUE 5 -->
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Características de los registros en BPG




    <!-- BLOQUE 6 -->
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Tipos de registros




</template>

<script>
export default {
  name: 'Tema2',
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
