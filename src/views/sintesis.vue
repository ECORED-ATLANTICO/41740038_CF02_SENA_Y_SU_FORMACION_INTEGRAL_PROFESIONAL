<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") El componente formativo Respuesta institucional y rutas de atención desarrolla los fundamentos necesarios para comprender, gestionar y orientar requerimientos de acuerdo con los procesos misionales, la normativa vigente y los lineamientos institucionales. Integra principios de servicio público y atención centrada en el ciudadano, comunicación institucional, lenguaje claro, normativa aplicable y atención diferencial. 
        
        .container
          .row.align-items-center.bg-fondo-03.p-lg-4.p-3.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/intro/img03.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Asimismo, aborda los mapas de procesos y la construcción de rutas de atención, junto con el uso responsable de los sistemas de información. Finalmente, incorpora el seguimiento, la trazabilidad y la evaluación de la calidad como elementos que permiten verificar las actuaciones realizadas, fortalecer la respuesta institucional e identificar oportunidades de mejora.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente formativo Respuesta institucional y rutas de atención aborda la atención y respuesta institucional desde la comprensión de las necesidades del ciudadano, la comunicación clara y la aplicación de la normativa vigente. Explica la relación entre los procesos institucionales, los mapas de procesos y la construcción de rutas de atención, considerando criterios de atención diferencial y enfoque territorial. También desarrolla el uso responsable y seguro de los sistemas de información para registrar, consultar y gestionar datos. Finalmente, integra el seguimiento, la trazabilidad y la evaluación de la calidad como elementos necesarios para verificar las actuaciones y fortalecer la gestión de las respuestas institucionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
