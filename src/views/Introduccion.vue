<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        .row.align-items-center.justify-content-center.mb-3
          .col-sm-8.col-lg-4.d-none.d-xl-block
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/introduccion/1.png", alt="" data-aos="zoom-in-down")
          .col-xl-8
            .p-4.py-3.rounded-4.bg-primario-p10
              p.mb-0 La evolución de los modelos digitales de comercialización ha transformado los procesos logísticos empresariales. Actualmente, las organizaciones enfrentan desafíos asociados con la rapidez en las entregas, control de inventarios, trazabilidad de productos y administración eficiente de operaciones de distribución. En este contexto, la logística deja de ser únicamente un proceso operativo para convertirse en un factor estratégico de competitividad.
        p.mb-lg-0 El crecimiento del <em>e-commerce</em> en mercados nacionales e internacionales ha incrementado la necesidad de integrar tecnologías, modelos de distribución y mecanismos de control que permitan responder a consumidores más informados y exigentes. Empresas como Mercado Libre, Amazon, Falabella, Éxito, entre otras, han fortalecido sus procesos logísticos mediante sistemas de almacenamiento inteligente, automatización de pedidos y monitoreo de entregas en tiempo real.
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/introduccion/2.png", alt="" data-aos="zoom-in-down")

    .p-4.py-3.rounded-4.bg-secundario-s5.mb-4
      p.mb-0 Las operaciones logísticas aplicadas al comercio electrónico requieren comprender variables relacionadas con gestión de carga, distribución, operadores logísticos, bioseguridad, logística inversa y control de información. Además, la planeación logística exige interpretar indicadores de desempeño y aplicar criterios normativos para garantizar continuidad operativa y cumplimiento legal.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p Desde el sector productivo, uno de los principales problemas se relaciona con la falta de integración entre procesos comerciales y logísticos. Muchas organizaciones implementan plataformas digitales de venta sin fortalecer sus capacidades de almacenamiento, trazabilidad y distribución, generando incumplimientos en tiempos de entrega, devoluciones y pérdida de confianza por parte del consumidor.
        .p-4.py-3.rounded-4.bg-terciario-t5.mb-4.mb-lg-0
          p.mb-0 Por lo anterior, el presente componente formativo desarrolla fundamentos técnicos y aplicados para la planeación logística en entornos de <em>e-commerce</em>, permitiendo al aprendiz analizar, estructurar y evaluar operaciones logísticas alineadas con requerimientos empresariales y condiciones reales del mercado.
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/introduccion/3.png", alt="")
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
