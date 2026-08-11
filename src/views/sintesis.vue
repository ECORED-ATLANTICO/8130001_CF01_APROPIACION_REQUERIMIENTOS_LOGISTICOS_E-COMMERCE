<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo Análisis y evaluación de negocio aborda el estudio de los mercados, incluyendo su concepto, clasificación y beneficios; continúa con la segmentación del mercado, considerando su definición, tipologías, características y metodología; analiza el entorno, abarcando su concepto y clasificación; y profundiza en la dinámica del mercado, incluyendo el comportamiento de la oferta y la demanda. Asimismo, desarrolla el análisis estratégico mediante el uso de herramientas como la matriz DOFA, orientadas a la identificación de factores internos y externos; y finaliza con la información para la toma de decisiones, integrando fuentes de información, técnicas de recolección de datos, aplicativos de gestión y procesamiento de la información, con el propósito de analizar y evaluar ideas de negocio en contextos reales.

    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="")
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
