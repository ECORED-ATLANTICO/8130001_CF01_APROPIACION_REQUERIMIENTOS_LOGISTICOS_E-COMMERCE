<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del #[em e-commerce] y modelos de negociación

    img(src="@/assets/curso/tema1/1.png", data-aos="fade-up", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Las operaciones de e-commerce han transformado la gestión comercial y logística de las organizaciones. Actualmente, las empresas requieren integrar procesos de distribución, almacenamiento y control de pedidos para responder a las exigencias del consumidor digital. En este contexto, la logística se convierte en un elemento estratégico para garantizar eficiencia operativa y competitividad empresarial.  
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3.d-block El e-commerce corresponde a las actividades de compra y venta de productos o servicios mediante plataformas digitales. Desde el enfoque logístico, integra procesos de almacenamiento, preparación de pedidos, distribución y trazabilidad para garantizar cumplimiento en las entregas y satisfacción del cliente.
        p.mb-0 La logística en el comercio electrónico permite coordinar inventarios, transporte y servicio posventa. Esto facilita que las organizaciones mantengan control sobre tiempos de entrega, disponibilidad de productos y seguimiento de pedidos.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .p-4.py-sm-4.rounded-4.bg-azul
          .row.justify-content-center.align-items-center
            .col-sm-9
              p.mb-4.mb-sm-0 #[strong Ejemplo]: empresas como Mercado Libre y Amazon utilizan sistemas logísticos automatizados para optimizar la preparación de pedidos y reducir tiempos de distribución. Estas estrategias fortalecen la experiencia del consumidor y mejoran la competitividad empresarial.
            .col-6.col-sm-3
              img(src="@/assets/curso/tema1/3.png", alt="")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Modelos y componentes logísticos

    p Los modelos logísticos en e-commerce dependen del tipo de operación comercial, cobertura de mercado y capacidad de distribución de la empresa. Cada organización estructura sus procesos logísticos según volumen de pedidos, tipo de producto y requerimientos del consumidor.
    p.mb-4 Dentro de los principales componentes logísticos se encuentran: 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        SlyderF.circl-arrow(columnas="col-sm-12 col-lg-6")
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-4
                img.mb-4(src='@/assets/curso/tema1/5.svg' alt='')
            h4.text-center.mb-4 Almacenamiento
            p.text-center.mb-0 Comprende la custodia y organización de los productos de forma estratégica para facilitar su conservación, control, preparación de pedidos y disponibilidad oportuna durante la operación logística.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-4
                img.mb-4(src='@/assets/curso/tema1/6.svg' alt='')
            h4.text-center.mb-4 Transporte
            p.text-center.mb-0 Proceso orientado a trasladar mercancías entre los diferentes eslabones de la cadena de suministro, asegurando entregas oportunas, condiciones adecuadas de movilización y cumplimiento de los tiempos establecidos.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-4
                img.mb-4(src='@/assets/curso/tema1/7.svg' alt='')
            h4.text-center.mb-4 Distribución
            p.text-center.mb-0 Actividad responsable de coordinar la entrega de productos hacia los destinos definidos, optimizando rutas, recursos y tiempos para atender de manera eficiente los requerimientos del cliente final.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-4
                img.mb-4(src='@/assets/curso/tema1/8.svg' alt='')
            h4.text-center.mb-4 Trazabilidad
            p.text-center.mb-0 Herramienta destinada a registrar y consultar el recorrido, estado y movimientos de los productos durante la operación, fortaleciendo el control, el seguimiento y la toma de decisiones.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-4
                img.mb-4(src='@/assets/curso/tema1/9.svg' alt='')
            h4.text-center.mb-4 Gestión documental
            p.text-center.mb-0 Corresponde a la administración de la información y los documentos asociados a las operaciones, garantizando registros organizados, disponibilidad de la información y soporte para los procesos logísticos.

    .p-4.py-3.rounded-4.bg-terciario-t20.mb-4
      p.mb-0.text-center Estos elementos permiten coordinar la operación y garantizar continuidad en la cadena de suministro.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .p-4.py-sm-2.rounded-4.bg-terciario-t5
          .row.justify-content-center.align-items-center
            .col-sm-9
              p.mb-4.mb-sm-0 #[strong Ejemplo]: empresas como Falabella integran centros de distribución, operadores logísticos y plataformas tecnológicas para controlar inventarios y monitorear entregas en tiempo real.
            .col-6.col-sm-3
              img(src="@/assets/curso/tema1/10.png", alt="")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Modelos de negociación B2B, B2C y B2G

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block.mb-3 Los modelos de negociación en el comercio electrónico establecen la forma en que las organizaciones interactúan con diferentes tipos de clientes y entidades para desarrollar procesos comerciales. Su conocimiento permite comprender las características de cada relación de negocio, identificar sus particularidades y seleccionar estrategias logísticas acordes con las necesidades de cada operación.
        p.mb-0 A continuación, se presentan los principales modelos de negociación utilizados en el e-commerce:

    .row.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 B2B (#[em eBusiness to Business])
            p Corresponde a transacciones comerciales entre empresas, donde una organización suministra productos o servicios a otra para apoyar su operación o comercialización. 
            p.mb-0 #[em Ejemplos]: un fabricante vende a un distribuidor, un proveedor de software atiende una cadena de supermercados.

      .col-sm-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/13.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 B2C (#[em Business to Consumer])
            p Comprende las ventas realizadas por una empresa directamente al consumidor final mediante canales físicos o digitales, priorizando una experiencia de compra ágil y personalizada.
            p.mb-0 #[em Ejemplos]: adquirir un celular en Mercado Libre, comprar ropa en la tienda virtual de Adidas.

      .col-sm-8.col-lg-6.col-xl-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/14.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 B2G (#[em Business to Government])
            p Reúne las operaciones comerciales entre empresas y entidades públicas para suministrar bienes o prestar servicios, generalmente mediante procesos de contratación. 
            p.mb-0 #[em Ejemplos]: una empresa entrega equipos de cómputo a una alcaldía, un operador logístico distribuye medicamentos para un hospital público.

    .bg-secundario-s20.p-4.py-3.rounded-4.mb-4
      p.mb-0.text-center Empresas distribuidoras, plataformas digitales y operadores logísticos adaptan sus procesos según el tipo de negociación y mercado objetivo.      

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Normativa aplicable al #[em e-commerce]

    img(src="@/assets/curso/tema1/15.png", data-aos="fade-up", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El desarrollo del comercio electrónico requiere el cumplimiento de disposiciones legales que regulan las transacciones digitales, protegen los derechos de las partes involucradas y brindan seguridad a las operaciones comerciales. Conocer este marco normativo facilita la implementación de procesos logísticos confiables, fortalece la relación con clientes y proveedores, y favorece el desarrollo de actividades alineadas con la legislación vigente en los ámbitos nacional e internacional

    p En Colombia, entidades como la Superintendencia de Industria y Comercio y el Ministerio TIC establecen disposiciones sobre manejo de datos, comercio electrónico y servicios digitales.   El incumplimiento normativo puede generar sanciones económicas, pérdida de confianza y afectaciones operativas para las organizaciones. 
    p.mb-4 Entre la normatividad que rige en Colombia tenemos:

    TabsB.color-acento-botones.mb-4.mb-lg-5
      .py-4.py-md-5(titulo="Ley 527 de 1999 Congreso de la Republica" :icono="require_src('@/assets/curso/tema1/16.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Ley 527 de 1999 Congreso de la Republica
            p.mb-4.mb-lg-0 Regula y reconoce el uso de mensajes de datos, comercio electrónico y firmas digitales en Colombia. Establece validez jurídica para las transacciones electrónicas.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/22.png', alt='')
      .py-4.py-md-5(titulo="Ley 1581 de 2012 Congreso de la Republica" :icono="require_src('@/assets/curso/tema1/17.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Ley 1581 de 2012 Congreso de la Republica
            p.mb-4.mb-lg-0 Regula la protección de datos personales y establece lineamientos para el tratamiento, almacenamiento y manejo de información de usuarios y clientes.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/23.png', alt='')
      .py-4.py-md-5(titulo="Ley 1480 de 2011 Estatuto del Consumidor" :icono="require_src('@/assets/curso/tema1/18.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Ley 1480 de 2011 Estatuto del Consumidor
            p.mb-4.mb-lg-0 Protege los derechos de los consumidores, establece garantías en la compraventa, promueve la transparencia y la诚信 en las relaciones comerciales.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/24.png', alt='')
      .py-4.py-md-5(titulo="Facturación electrónica DIAN" :icono="require_src('@/assets/curso/tema1/19.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Ley 1581 de 2012 Congreso de la Republica
            p.mb-4.mb-lg-0 Regula la protección de datos personales y establece lineamientos para el tratamiento, almacenamiento y manejo de información de usuarios y clientes.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/25.png', alt='')
      .py-4.py-md-5(titulo="Normativa de seguridad informática ISO 27000" :icono="require_src('@/assets/curso/tema1/20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Normativa de seguridad informática ISO 27000
            p.mb-4.mb-lg-0 Contempla medidas para protección de información, prevención de fraudes electrónicos y seguridad en transacciones digitales
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/26.png', alt='')
      .py-4.py-md-5(titulo="Resolución 202 de 2010 Ministerio TIC" :icono="require_src('@/assets/curso/tema1/21.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Resolución 202 de 2010 Ministerio TIC
            p.mb-4.mb-lg-0 Contempla medidas para protección de información, prevención de fraudes electrónicos y seguridad en transacciones digitales
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/27.png', alt='')

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-terciario-t70.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/28.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white Que es E Commerce: Concepto, antecedentes, Tipos, Características
                  p.mb-0.text-white A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con fundamentos del e-commerce y modelos de negociación: 

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://www.youtube.com/watch?v=BEbIe52iJ70"  target="_blank" no-referrer)
                    span Enlace
                    i.fas.fa-file-video

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7.bg-audio.rounded-4.mb-4.mb-lg-0
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.imgw-185.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="alt")
          .col-sm-8.col-lg-8
            p.text-white A continuación, se invita a escuchar el siguiente pódcast:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="“La logística detrás del pedido: carga, preparación y distribución.”"
              :audio="require_src('@/assets/curso/actividad/audio/fail.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-lg-5
        p.mb-4 El e‑commerce es la compra y venta de productos o servicios a través de medios digitales, con antecedentes en la evolución de internet y modelos de negocio como B2B, B2C y C2C. Sus características principales son la accesibilidad global, la rapidez en las transacciones y la personalización de la experiencia del cliente. Para fortalecer estos conocimientos, se invita al aprendiz a dar clic en el video sobre fundamentos y modelos de negociación, consultar el anexo en PDF y a escuchar el pódcast sobre la logística detrás del pedido.

        a.anexo(href="https://www.centro-virtual.com/recursos/biblioteca/pdf/e-commerce/unidad1_pdf2.pdf" target="_blank" no-referrer)
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo]. Se invita al aprendiz a profundizar en modelos de negocio en e-commerce 



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
