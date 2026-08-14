<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de carga y preparación de pedidos

    .row.justify-content-center.align-items-center
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La gestión de carga y preparación de pedidos comprende los procesos relacionados con clasificación, acondicionamiento, manipulación y despacho de mercancías dentro de operaciones de e-commerce. Estas actividades permiten garantizar organización, protección de productos y cumplimiento en las entregas.
        .bg-terciario-t5.p-4.py-3.rounded-4
          p.mb-0 En las operaciones logísticas actuales, las empresas deben optimizar tiempos de preparación, reducir errores y asegurar trazabilidad durante el proceso de distribución. Una gestión inadecuada puede generar devoluciones, pérdidas económicas y afectaciones en la experiencia del cliente.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Tipos y naturaleza de productos

    p Los tipos de productos corresponden a la clasificación de las mercancías según sus características físicas, condiciones de conservación, nivel de riesgo o requerimientos logísticos. Esta clasificación permite definir el tratamiento más apropiado durante cada etapa de la cadena de suministro.
    p.mb-4 De acuerdo con lo anterior; los tipos de productos en logística se clasifican en:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-6
        LineaTiempoD.color-primario.mb-4.mb-lg-0
          div(numero="1" titulo="Perecederos")
            p Productos cuya calidad disminuye con el paso del tiempo y requieren condiciones especiales de conservación para mantener sus propiedades. 
            p.mb-0 Ejemplos: frutas, verduras, carnes y productos lácteos.
          div(numero="2" titulo="No perecederos")
            p Productos con mayor vida útil que pueden almacenarse durante períodos prolongados sin perder sus características esenciales. 
            p.mb-0 Ejemplos: alimentos enlatados, arroz, detergentes y artículos de aseo.
          div(numero="3" titulo="Frágiles")
            p Mercancías susceptibles a golpes, vibraciones o caídas, por lo que demandan protección adicional durante la manipulación y el transporte. 
            p.mb-0 Ejemplos: vidrio, porcelana, televisores y computadores.
          div(numero="4" titulo="Peligrosos")
            p Productos que representan riesgos para las personas, las instalaciones o el medio ambiente debido a sus propiedades físicas o químicas.
            p.mb-0 Ejemplos: pinturas, combustibles, baterías de litio y productos químicos.
          div(numero="5" titulo="Alto valor")
            p Mercancías con elevado costo económico que requieren mayores controles de seguridad y trazabilidad.
            p.mb-0 Ejemplos: joyas, teléfonos móviles, equipos médicos y dispositivos electrónicos.
          div(numero="6" titulo="Gran volumen")
            p Productos de dimensiones considerables que ocupan un espacio importante durante el almacenamiento y el transporte. 
            p.mb-0 Ejemplos: muebles, colchones, refrigeradores y maquinaria.
      .col-lg-6
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/2.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/3.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p La naturaleza de los productos hace referencia al conjunto de propiedades y condiciones que determinan los cuidados, recursos y procedimientos requeridos para su conservación, manipulación y distribución a lo largo de la operación logística. 
        p.mb-0 Entre las propiedades más comunes tenemos: 
    
    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema3/4.svg", alt="")
          h4.mb-4.text-center Peso
          p.mb-0.text-center Influye en la selección de equipos de manipulación, medios de transporte y capacidad de almacenamiento.
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-72.mb-4(src="@/assets/curso/tema3/5.svg", alt="")
          h4.mb-4.text-center Dimensiones
          p.mb-0.text-center Determinan el espacio requerido para almacenar, movilizar y transportar las mercancías de forma segura.
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-60.mb-4(src="@/assets/curso/tema3/6.svg", alt="")
          h4.mb-4.text-center Fragilidad
          p.mb-0.text-center Indica el nivel de protección necesario para evitar daños durante la manipulación y el transporte.
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema3/7.svg", alt="")
          h4.mb-4.text-center Condiciones de conservación
          p.mb-0.text-center Establecen los requisitos de temperatura, humedad, ventilación o iluminación para preservar la calidad del producto.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema3/8.svg", alt="")
          h4.mb-4.text-center Nivel de riesgo
          p.mb-0.text-center Define las medidas de seguridad necesarias durante el almacenamiento, transporte y distribución.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-54.mb-4(src="@/assets/curso/tema3/9.svg", alt="")
          h4.mb-4.text-center Vida útil
          p.mb-0.text-center Determina el tiempo disponible para comercializar el producto antes de que pierda sus condiciones de uso o consumo.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-54.mb-4(src="@/assets/curso/tema3/10.svg", alt="")
          h4.mb-4.text-center Valor comercial
          p.mb-0.text-center Influye en los controles de seguridad, trazabilidad y custodia implementados durante la operación logística.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-54.mb-4(src="@/assets/curso/tema3/11.svg", alt="")
          h4.mb-4.text-center Requerimientos de manipulación
          p.mb-0.text-center Establecen las prácticas, equipos y procedimientos necesarios para garantizar la integridad del producto durante toda la cadena logística.

    .p-4.bg-secundario-s20.rounded-4
      p.mb-0.text-center Las empresas deben identificar características de los productos para establecer procesos logísticos adecuados y reducir riesgos operativos.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos de carga

    p La carga corresponde al conjunto de mercancías transportadas o almacenadas dentro de una operación logística.  De acuerdo con esto, los tipos de carga hacen referencia a la clasificación de las mercancías según sus características físicas, forma de presentación y requerimientos de manipulación durante las operaciones logísticas

    p.mb-4 Pueden clasificarse de la siguiente manera:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a10").mb-5
      .row.align-items-center.justify-content-center(titulo="Carga general")
        .col-lg-6.mb-4.mb-lg-0
          p Comprende mercancías individuales o agrupadas que pueden manipularse como unidades independientes mediante cajas, sacos, tambores o estibas. 
          p.mb-4.mb-lg-0 Ejemplos: electrodomésticos, ropa, calzado y alimentos empacados.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/12.png', alt='')
      .row.align-items-center.justify-content-center(titulo="Carga a granel")
        .col-lg-6.mb-4.mb-lg-0
          p Corresponde a productos transportados sin empaque individual, almacenados directamente en recipientes, silos o contenedores especializados. 
          p.mb-4.mb-lg-0 Ejemplos: cereales, arena, cemento, carbón y fertilizantes.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/13.png', alt='')
      .row.align-items-center.justify-content-center(titulo="Carga contenerizada")
        .col-lg-6.mb-4.mb-lg-0
          p Reúne mercancías consolidadas dentro de contenedores para facilitar su manipulación, proteger la carga y optimizar el transporte multimodal.
          p.mb-4.mb-lg-0 Ejemplos: muebles, equipos electrónicos, textiles y repuestos industriales.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/14.png', alt='')
      .row.align-items-center.justify-content-center(titulo="Carga refrigerada")
        .col-lg-6.mb-4.mb-lg-0
          p Incluye productos que requieren temperatura controlada para conservar su calidad durante el almacenamiento y el transporte. 
          p.mb-4.mb-lg-0 Ejemplos: carnes, lácteos, vacunas y frutas frescas.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/15.png', alt='')
      .row.align-items-center.justify-content-center(titulo="Carga peligrosa")
        .col-lg-6.mb-4.mb-lg-0
          p Agrupa mercancías que presentan riesgos químicos, biológicos o físicos y requieren protocolos especiales de manipulación, almacenamiento y transporte. 
          p.mb-4.mb-lg-0 Ejemplos: combustibles, pinturas, gases comprimidos y baterías de litio.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/16.png', alt='')
      .row.align-items-center.justify-content-center(titulo="Carga sobredimensionada")
        .col-lg-6.mb-4.mb-lg-0
          p Comprende mercancías cuyo peso o dimensiones superan los límites convencionales, requiriendo equipos y permisos especiales para su movilización. 
          p.mb-4.mb-lg-0 Ejemplos: maquinaria industrial, transformadores eléctricos y estructuras metálicas.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/17.png', alt='')
      .row.align-items-center.justify-content-center(titulo="Carga frágil")
        .col-lg-6.mb-4.mb-lg-0
          p Corresponde a productos sensibles a impactos, vibraciones o presión, por lo que demandan mayor protección durante toda la operación logística. 
          p.mb-4.mb-lg-0 Ejemplos: vidrio, porcelana, pantallas y equipos de laboratorio.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/18.png', alt='')
      .row.align-items-center.justify-content-center(titulo="Carga de alto valor")
        .col-lg-6.mb-4.mb-lg-0
          p Incluye mercancías que requieren mayores medidas de seguridad, control y trazabilidad debido a su elevado valor económico. 
          p.mb-4.mb-lg-0 Ejemplos: joyas, teléfonos móviles, computadores y equipos médicos.
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema3/19.png', alt='')

    .bg-primario-p10.p-4.py-3.rounded-4
      p.mb-0.text-center La correcta clasificación de la carga permite optimizar recursos logísticos y garantizar seguridad durante el transporte.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Procesos logísticos

    p El marcado, el empacado y el rotulado constituyen actividades esenciales dentro de la operación logística, ya que favorecen la identificación, protección y manipulación adecuada de las mercancías durante su almacenamiento, transporte y distribución. La correcta aplicación de estos procesos contribuye a disminuir errores operativos, preservar la integridad de los productos, facilitar la trazabilidad y garantizar que cada envío llegue al destino en las condiciones previstas. 

    p.mb-4 A continuación, se muestra un análisis comparativo sobre los tres procesos: 

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 3.
      span Instrumentos de diagnostico
    .tabla-b.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #B5D0DB")
            th Proceso 
            th(colspan="2") Propósito principal 
            th(colspan="2") Información o elementos principales 
            th(colspan="2") Ejemplo 
        tbody
          tr
            td #[strong Marcado]
            td(colspan="2") Facilitar la manipulación, identificación y almacenamiento de la mercancía. 
            td(colspan="2") Símbolos internacionales de manipulación, códigos de barras, códigos QR, flechas de orientación, indicaciones de fragilidad, centro de gravedad y límites de apilamiento. 
            td(colspan="2") Una caja de vidrio presenta los símbolos "Frágil", "Este lado arriba" y "Mantener seco" impresos sobre el embalaje. 
          tr(style="background-color: #F6F6F6")
            td #[strong Empacado]
            td(colspan="2") Proteger el producto durante las operaciones logísticas y conservar sus condiciones hasta la entrega. 
            td(colspan="2") Cajas de cartón, bolsas, espuma protectora, plástico burbuja, separadores internos, materiales amortiguadores y cintas de seguridad. 
            td(colspan="2") Un computador portátil se empaca en una caja con espuma de protección y plástico burbuja para evitar daños durante el transporte. 
          tr
            td #[strong Rotulado]
            td(colspan="2") Identificar el producto y suministrar información para su control, trazabilidad y distribución. 
            td(colspan="2") Nombre del producto, referencia, código de barras, lote, peso, dimensiones, dirección de entrega, datos del remitente y destinatario. 
            td(colspan="2") Una etiqueta adherida al paquete incluye el código de barras, la guía de transporte, la dirección del cliente y el número de seguimiento. 

    .bg-secundario-s10.p-4.py-3.rounded-4
      p.mb-0.text-center El análisis permanente de la operación logística fortalece la eficiencia y continuidad de los procesos empresariales.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Cubicaje, #[em picking], #[em packaging] y #[em dropshipping]  

    p.mb-4 Las operaciones logísticas en el comercio electrónico requieren procesos que optimicen el uso de los recursos, agilicen la preparación de los pedidos y respondan a las expectativas del cliente. En este contexto, el cubicaje, el picking, el packaging y el dropshipping desempeñan un papel fundamental, ya que contribuyen a mejorar el almacenamiento, la gestión de inventarios, la preparación de los envíos y la coordinación entre los diferentes actores de la cadena de suministro. 

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.py-3.rounded-4.mb-4.mb-lg-5
          p.mb-0.text-center El cubicaje: corresponde al cálculo del volumen ocupado por la mercancía dentro de procesos de almacenamiento y transporte. Este procedimiento permite optimizar espacios y costos logísticos. 

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Proceso de cubicaje
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/20-mob.png", alt="La figura presenta un esquema del proceso de cubicaje aplicado a las operaciones logísticas. Integra el cálculo del volumen de una mercancía a partir de sus dimensiones, su análisis frente al espacio disponible para almacenamiento o transporte y un ejemplo práctico que ilustra la aplicación de la fórmula de volumen para optimizar la distribución de la carga. El contenido se acompaña de ilustraciones que representan las etapas del proceso, los elementos utilizados y una situación aplicada al aprovechamiento eficiente del espacio logístico.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/20.png", alt="La figura presenta un esquema del proceso de cubicaje aplicado a las operaciones logísticas. Integra el cálculo del volumen de una mercancía a partir de sus dimensiones, su análisis frente al espacio disponible para almacenamiento o transporte y un ejemplo práctico que ilustra la aplicación de la fórmula de volumen para optimizar la distribución de la carga. El contenido se acompaña de ilustraciones que representan las etapas del proceso, los elementos utilizados y una situación aplicada al aprovechamiento eficiente del espacio logístico.")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.py-3.rounded-4.mb-4.mb-lg-5
          p.mb-0.text-center El #[em picking]: es el proceso de selección y recolección de productos dentro de una bodega para preparar pedidos. Su eficiencia impacta directamente tiempos de despacho y productividad operativa.

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Proceso de #[em picking]
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/21-mob.png", alt="Proceso de picking")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/21.png", alt="Proceso de picking")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.py-3.rounded-4.mb-4.mb-lg-5
          p.mb-0.text-center El #[em packaging]: comprende el diseño y acondicionamiento final del empaque utilizado para entrega al cliente. Además de proteger el producto, fortalece la imagen de marca y la experiencia de compra. 

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Proceso de #[em packaging]
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/22-mob.png", alt="La figura presenta un esquema del proceso de Packaging dentro de las operaciones logísticas. Integra las principales actividades relacionadas con la preparación y protección de los productos para su distribución, resaltando el uso de materiales de empaque, el acondicionamiento de la mercancía y la verificación previa al despacho. Además, incorpora un ejemplo aplicado que ilustra el embalaje seguro de un producto frágil mediante materiales de protección, con el fin de preservar su integridad durante el transporte y la entrega al cliente.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/22.png", alt="La figura presenta un esquema del proceso de Packaging dentro de las operaciones logísticas. Integra las principales actividades relacionadas con la preparación y protección de los productos para su distribución, resaltando el uso de materiales de empaque, el acondicionamiento de la mercancía y la verificación previa al despacho. Además, incorpora un ejemplo aplicado que ilustra el embalaje seguro de un producto frágil mediante materiales de protección, con el fin de preservar su integridad durante el transporte y la entrega al cliente.")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center
      .bg-terciario-t5.p-4.py-3.rounded-4.mb-4.mb-lg-5
        p.mb-0.text-center El #[em dropshipping]: corresponde a un modelo de negocio donde el vendedor comercializa productos sin almacenarlos físicamente. En este esquema, el proveedor realiza directamente el despacho al consumidor final.

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Proceso de #[em dropshipping]  
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/23-mob.png", alt="la figura presenta el proceso de Dropshipping mediante una secuencia gráfica de las actividades involucradas desde la compra realizada en una tienda virtual hasta la entrega del producto al cliente. La figura incorpora ilustraciones representativas de los participantes y recursos utilizados durante el proceso, además de un ejemplo práctico que muestra la comercialización de accesorios para celulares, enviados directamente por el proveedor al comprador con la marca de la tienda.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/23.png", alt="la figura presenta el proceso de Dropshipping mediante una secuencia gráfica de las actividades involucradas desde la compra realizada en una tienda virtual hasta la entrega del producto al cliente. La figura incorpora ilustraciones representativas de los participantes y recursos utilizados durante el proceso, además de un ejemplo práctico que muestra la comercialización de accesorios para celulares, enviados directamente por el proveedor al comprador con la marca de la tienda.")
        figcaption Nota. SENA, (2026).
    
    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8
        .bg-azul.p-4.py-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4.mb-lg-0 #[strong Ejemplo:] empresas como Amazon, Shopify, cuentan con el modelo de #[em dropshopping] que permite a los vendedores comercializar productos sin que estos sean almacenamos físicamente.
            .col-lg-4
              figure
                img.imgw-105(data-aos="fade-down-right", src="@/assets/curso/tema3/24.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/25.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .tarjeta.bg-terciario-t70.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/28.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white ¿Qué es la logística inversa?
                  p.mb-0.text-white A continuación, se invita al siguiente video para fortalecer los conocimientos relacionados con logística inversa y bioseguridad:

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://www.youtube.com/watch?v=b3xWXgVw5cI"  target="_blank" no-referrer)
                    span Abrir video
                    i.fas.fa-file-video
        .tarjeta.bg-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema6/12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white Libro blanco de logística para comercio electrónico
                  p.mb-0.text-white Se invita al aprendiz a profundizar en logística inversa y bioseguridad, a través del siguiente libro (página 98-109):

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://ccas.org.co/wp-content/uploads/Logistica-para-Ecommerce-2.pdf" type="application/pdf" target="_blank" no-referrer)
                    span Enlace web
                    i.fas.fa-file-code

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
