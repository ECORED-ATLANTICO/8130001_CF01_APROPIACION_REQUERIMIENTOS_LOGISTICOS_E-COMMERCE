<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Soporte tecnológico y cumplimiento normativo 
    
    img(src="@/assets/curso/tema6/1.png", alt="", data-aos="fade-up")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 El soporte tecnológico y el cumplimiento normativo permiten fortalecer el control, seguridad y continuidad de las operaciones logísticas en entornos de e-commerce. Las organizaciones requieren herramientas digitales que faciliten seguimiento de pedidos, gestión documental y administración de información logística.

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-primario-p5.p-4.py-3.rounded-4
          p.mb-0 La transformación digital ha impulsado el uso de plataformas tecnológicas para optimizar procesos de almacenamiento, distribución y atención al cliente. Además, las empresas deben cumplir lineamientos legales relacionados con protección de datos, seguridad informática y control de operaciones comerciales. Organizaciones como Amazon, Mercado Libre y DHL utilizan sistemas tecnológicos integrados para mejorar trazabilidad, monitoreo y control de sus operaciones logísticas.

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Herramientas tecnológicas aplicadas a la logística

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las herramientas tecnológicas comprenden los sistemas, plataformas y dispositivos digitales utilizados para planificar, controlar, monitorear y optimizar las operaciones de almacenamiento, inventarios, transporte, distribución y logística inversa; favoreciendo la toma de decisiones y la eficiencia de la cadena de suministro. Entre las más utilizadas se encuentran:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-6
        LineaTiempoD.color-primario.mb-4.mb-lg-0
          div(numero="1" titulo="Sistema de gestión de almacenes (WMS)")
            p.mb-0 Administra las operaciones de recepción, almacenamiento, ubicación, inventario y despacho de mercancías, optimizando el uso del espacio y los recursos.
          div(numero="2" titulo="Sistema de gestión de transporte (TMS)")
            p.mb-0 Planifica rutas, controla vehículos, monitorea entregas y optimiza los costos asociados al transporte de mercancías.
          div(numero="3" titulo="Sistema de planificación de recursos empresariales (ERP)")
            p.mb-0 Integra información de producción, inventario, compras y ventas, optimizando la gestión de recursos humanos, financieros y materiales.
          div(numero="4" titulo="Tecnologías de identificación (Código de barras y QR)")
            p.mb-0 Facilitan la identificación, captura y consulta rápida de información sobre productos durante las operaciones logísticas. 
          div(numero="5" titulo="GPS y sistemas de rastreo")
            p.mb-0 Permiten conocer la ubicación de vehículos y mercancías en tiempo real, fortaleciendo la trazabilidad y el control del transporte. 
          div(numero="6" titulo="Computación en la nube (<em>Cloud Computing</em>)")
            p.mb-0 Centraliza la información logística en plataformas digitales accesibles desde diferentes dispositivos y ubicaciones autorizadas. 
      .col-lg-6
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/4.png", alt="")

    .bg-terciario-t5.p-4.py-3.rounded-4
      p.mb-0.text-center El uso de tecnologías contribuye a reducir errores operativos y optimizar tiempos de respuesta en operaciones de #[em e-commerce].

    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Gestión documental y control de procesos

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 5.
      span Aspectos fundamentales de la gestión documental y el control de procesos
    .tabla-b.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #B5D0DB")
            th Aspecto
            th(colspan="2") Descripción
            th(colspan="2") Ejemplo de aplicación
        tbody
          tr
            td #[strong Registro documental]
            td(colspan="2") Documenta las operaciones mediante formatos físicos o digitales que respaldan cada actividad logística.
            td(colspan="2") Registrar electrónicamente la recepción de una mercancía en el sistema de información.
          tr(style="background-color: #F6F6F6")
            td #[strong Organización de la información]
            td(colspan="2") Clasifica y almacena los documentos para facilitar su consulta, actualización y conservación.
            td(colspan="2") Organizar las órdenes de despacho por fecha y número de pedido en una plataforma digital.

    .bg-secundario-s5.p-4.py-3.rounded-4
      p.mb-0.text-center El control de procesos permite supervisar cumplimiento de actividades logísticas y detectar fallas operativas. Las organizaciones implementan sistemas digitales para garantizar disponibilidad y seguridad de la información.

    separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Seguridad de la información

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La seguridad de la información corresponde al conjunto de medidas utilizadas para proteger datos comerciales, financieros y logísticos frente a pérdidas, accesos no autorizados o ataques informáticos. Las empresas de e-commerce manejan información relacionada con clientes, pagos y operaciones logísticas, por lo que deben implementar controles de acceso, copias de seguridad y mecanismos de protección digital.
        .bg-secundario-s5.p-4.py-3.rounded-4
          p.mb-0 El fortalecimiento de la seguridad informática permite reducir riesgos y garantizar confiabilidad en las operaciones comerciales. Empresas como Servientrega, Amazon, Shopify, implementan políticas de seguridad de la información para la protección de los datos de sus clientes.    

    separador 

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Cumplimiento normativo en el <em>e-commerce</em>

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/6.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Las operaciones logísticas deben cumplir normativas relacionadas con comercio electrónico, protección de datos, transporte y seguridad de la información. El cumplimiento normativo garantiza transparencia y legalidad en las actividades empresariales. Las organizaciones deben aplicar procedimientos de control y actualización frente a cambios regulatorios para evitar sanciones y afectaciones operativas.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-terciario-t5.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema6/7.svg", alt="")
          h4.mb-4.text-center Normatividad legal
          p.mb-0.text-center Cumplir leyes y normas aplicables para operar de forma legal, segura y responsable.
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-terciario-t5.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema6/8.svg", alt="")
          h4.mb-4.text-center Gestión documental
          p.mb-0.text-center Organizar, registrar y conservar documentos claves para garantizar trazabilidad y respaldo de las operaciones.
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-terciario-t5.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema6/9.svg", alt="")
          h4.mb-4.text-center Control de procesos
          p.mb-0.text-center Supervisar cada etapa logística para asegurar calidad, eficiencia y cumplimiento de los procedimientos.
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-terciario-t5.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema6/10.svg", alt="")
          h4.mb-4.text-center Seguridad de la información
          p.mb-0.text-center Proteger datos comerciales, financieros y logísticos contra pérdidas, accesos no autorizados o ataques informáticos.

    .bg-primario-p10.p-4.py-3.rounded-4.mb-4.mb-lg-5
      p.mb-0.text-center El cumplimiento de la normativa fortalece la confianza del consumidor y mejora la sostenibilidad de las operaciones de e-commerce.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .tarjeta.bg-terciario-t70.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/28.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white Tecnologías para operaciones logísticas e.commerce
                  p.mb-0.text-white A continuación, se invita al siguiente video para fortalecer los conocimientos relacionados con soporte tecnológico y cumplimiento normativo:

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://www.youtube.com/watch?v=_CoLhDHy7AU"  target="_blank" no-referrer)
                    span Abrir video
                    i.fas.fa-file-video
        .tarjeta.bg-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema6/12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white Gerencia de la cadena de abastecimientos
                  p.mb-0.text-white Se invita al aprendiz a profundizar en soporte tecnológico y cumplimiento normativo, a través del siguiente libro (página 497 – 525):

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://www.fesc.edu.co/portal/archivos/e_libros/logistica/gestion_logistica.pdf" type="application/pdf" target="_blank" no-referrer)
                    span Enlace web
                    i.fas.fa-file-code

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
