<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-01.px-5.py-4
      img(src="@/assets/curso/intro/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La atención de requerimientos institucionales implica comprender las necesidades de las personas, interpretar la naturaleza de sus solicitudes y proporcionar respuestas pertinentes, claras y oportunas, de acuerdo con los procesos misionales, las rutas institucionales y la normativa vigente. En este contexto, la calidad de la respuesta no depende únicamente de la información suministrada, sino también de la manera como se analiza el requerimiento, se selecciona la ruta correspondiente y se comunica la respuesta.

    p.mb-4 Este componente formativo aborda los fundamentos necesarios para proporcionar respuestas institucionales en el SENA, mediante la aplicación de criterios de comunicación, normativa relacionada con la atención al ciudadano, mapas de procesos, atención diferencial y mecanismos para el tratamiento seguro de la información. Asimismo, incorpora enfoques de servicio público orientados al usuario y a la garantía de derechos, junto con los valores institucionales que orientan una actuación respetuosa, diligente, transparente y responsable.

    .container.mb-lg-4.mb-3
      .row.align-items-center.bg-fondo-02.p-lg-4.p-3.mb-0
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/intro/img02.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 A lo largo del componente, el aprendiz podrá fortalecer su capacidad para diagnosticar requerimientos y necesidades, construir respuestas institucionales, identificar rutas de atención, aplicar criterios de atención diferencial y utilizar los sistemas de información como apoyo a la gestión. De igual manera, reconocerá la importancia del seguimiento, la trazabilidad y la evaluación de la calidad como elementos que contribuyen al mejoramiento de la respuesta institucional y al cumplimiento de la misión del SENA. Estos aspectos corresponden directamente a los saberes de proceso establecidos para el resultado de aprendizaje.


    

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
