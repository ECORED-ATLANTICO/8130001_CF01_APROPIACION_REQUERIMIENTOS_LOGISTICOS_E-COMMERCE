<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planeación y control logístico

    img(src="@/assets/curso/tema4/1.png", alt="", data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 La planeación y control logístico comprende los procesos orientados a organizar, supervisar y optimizar operaciones de distribución, almacenamiento y transporte en entornos de e-commerce. Estas actividades permiten mejorar el uso de recursos, reducir costos y garantizar cumplimiento en las entregas.

    .bg-primario-p5.p-4.py-3.rounded-4.mb-3
      .row.justify-content-center.align-items-center
        .col-4.col-sm-2.col-lg-1
          img.mb-4.mb-sm-0(src="@/assets/curso/tema4/2.svg", alt="", data-aos="zoom-in-down")
        .col-sm-10.col-lg-11
          p.mb-0 Las organizaciones requieren herramientas de análisis y seguimiento para controlar inventarios, tiempos de despacho y desempeño de la operación logística. La falta de planeación puede generar retrasos, pérdidas de mercancía y afectaciones en el servicio al cliente.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Instrumentos de diagnóstico

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los instrumentos de diagnóstico permiten recopilar, organizar y analizar información relevante sobre los procesos logísticos de una organización. Su aplicación facilita la identificación de fortalezas, oportunidades de mejora, riesgos y necesidades operativas en actividades relacionadas con el almacenamiento, el transporte, la distribución y el servicio al cliente. Entre los instrumentos más importantes se encuentran:

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 3.
      span Instrumentos de diagnostico
    .tabla-b.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #B5D0DB")
            th Instrumento
            th(colspan="2") Descripción
            th(colspan="2") Ejemplo de aplicación
        tbody
          tr
            td #[strong Política de devoluciones]
            td(colspan="2") Establece los plazos, condiciones, documentos y canales autorizados para solicitar el retorno de un producto adquirido.
            td(colspan="2") La empresa acepta devoluciones dentro de los 30 días siguientes a la entrega, siempre que el producto conserve sus accesorios y empaque.
          tr(style="background-color: #F6F6F6")
            td #[strong Política de garantías]
            td(colspan="2") Define el procedimiento para reparar, cambiar o reembolsar productos que presenten fallas de fabricación o incumplan las condiciones ofrecidas.
            td(colspan="2") Un electrodoméstico defectuoso es revisado por el servicio técnico y, cuando la falla no puede corregirse, es reemplazado por otro.
          tr
            td #[strong Política de protección al consumidor]
            td(colspan="2") Garantiza información clara, atención oportuna y respeto por los derechos del comprador durante los procesos de reclamación, cambio o devolución. 
            td(colspan="2") La tienda virtual informa antes de la compra las condiciones de retracto, los costos asociados y el procedimiento para presentar una solicitud. 
          tr(style="background-color: #F6F6F6")
            td #[strong Política de protección de datos]
            td(colspan="2") Regula la recopilación, consulta, almacenamiento y uso de la información personal suministrada durante la gestión de devoluciones y garantías. 
            td(colspan="2") Los datos del cliente y la información bancaria del reembolso únicamente pueden consultarse por personal autorizado. 
          tr
            td #[strong Política ambiental]
            td(colspan="2") Orienta la reutilización, el reciclaje y la disposición responsable de productos, empaques y materiales que retornan a la organización. 
            td(colspan="2") Las baterías y los equipos electrónicos devueltos son entregados a un gestor autorizado para su tratamiento ambiental. 
          tr(style="background-color: #F6F6F6")
            td #[strong Política de procedimientos internos]
            td(colspan="2") Determina las responsabilidades, actividades, registros y controles que deben aplicar las áreas involucradas en la logística inversa. 
            td(colspan="2") El área de servicio registra la solicitud, la bodega inspecciona el producto y contabilidad procesa el reembolso aprobado. 

    .bg-secundario-s10.p-4.py-3.rounded-4
      p.mb-0.text-center El análisis permanente de la operación logística fortalece la eficiencia y continuidad de los procesos empresariales.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Planeación logística

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0.imgw-54(src="@/assets/curso/tema4/4.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 La planeación logística consiste en analizar, organizar y coordinar los recursos, las actividades y los procesos involucrados en el abastecimiento, almacenamiento, preparación de pedidos, transporte y distribución de mercancías, con el propósito de garantizar operaciones eficientes, optimizar recursos y satisfacer los requerimientos del cliente. Los aspectos más importantes de la planeación logística son:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-6
        LineaTiempoD.color-primario.mb-4.mb-lg-0
          div(numero="1" titulo="Políticas de devolución")
            p Establecen las condiciones, plazos y requisitos para aceptar el retorno de los productos, garantizando transparencia durante el proceso. 
            p.mb-0 Ejemplo: permitir devoluciones dentro de los 30 días posteriores a la compra.
          div(numero="2" titulo="Recolección del producto")
            p Organiza el retiro de la mercancía desde la ubicación del cliente hasta el centro logístico o punto autorizado.
            p.mb-0 Ejemplo: un transportista recoge un producto defectuoso en el domicilio del comprador.
          div(numero="3" titulo="Inspección y clasificación")
            p Evalúa el estado del producto para definir si puede reutilizarse, repararse, cambiarse, reciclarse o desecharse. 
            p.mb-0 Ejemplo: clasificar una prenda como apta para cambio o liquidación.
          div(numero="4" titulo="Recuperación del valor")
            p Aprovecha los productos retornados mediante reparación, reacondicionamiento o reutilización, reduciendo pérdidas económicas.
            p.mb-0 Ejemplo: reemplazar un accesorio dañado y comercializar nuevamente el producto.
          div(numero="5" titulo="Gestión de la información")
            p Registra y controla cada etapa del proceso para garantizar trazabilidad y facilitar la toma de decisiones. 
            p.mb-0 Ejemplo: consultar el estado de una devolución desde el sistema logístico.
          div(numero="6" titulo="Disposición final")
            p Gestiona responsablemente los productos que no pueden recuperarse, priorizando el reciclaje o la eliminación conforme a la normativa vigente. 
            p.mb-0 Ejemplo: enviar baterías usadas a un gestor autorizado de residuos.
      .col-lg-6
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/5.png", alt="")

    p.mb-4.mb-lg-5 Una adecuada planeación permite optimizar costos operativos y mejorar la capacidad de respuesta frente a la demanda del mercado. Las organizaciones deben proyectar escenarios de crecimiento, comportamiento del consumidor y necesidades logísticas para mantener competitividad en operaciones de e-commerce.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-azul.p-4.py-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4.mb-lg-0 #[strong Ejemplo:] Servientrega implementa la planeación logística para organizar sus recursos, procedimientos y actividades para garantizar el cumplimiento en sus operaciones de e-commerce.
            .col-lg-4
              figure
                img.imgw-105(data-aos="fade-down-right", src="@/assets/curso/tema4/6.png", alt="")

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Indicadores KPI

    p.mb-4.mb-lg-5 Los indicadores Key Performance Indicator (KPI) corresponden a métricas utilizadas para evaluar desempeño y cumplimiento de objetivos logísticos. Estos indicadores permiten medir productividad, eficiencia y calidad del servicio. Entre los KPI más utilizados en logística se encuentran:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.p-xl-5.bg-slider
          SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
            div
              h4.mb-4 Tiempo de entrega
              p Mide el tiempo transcurrido desde la confirmación del pedido hasta la entrega al cliente. 
              p.mb-0 Ejemplo: el 95 % de los pedidos se entrega en un plazo máximo de 24 horas.
            div
              h4.mb-4 Nivel de cumplimiento
              p Evalúa el porcentaje de pedidos entregados completos, correctos y dentro del tiempo acordado. 
              p.mb-0 Ejemplo: 98 de cada 100 pedidos cumplen las condiciones establecidas.
            div
              h4.mb-4 Rotación de inventarios
              p Determina la frecuencia con la que el inventario se renueva durante un período específico. 
              p.mb-0 Ejemplo: un producto registra seis rotaciones al año.
            div
              h4.mb-4 Exactitud del inventario
              p Compara las existencias registradas en el sistema con las disponibles físicamente en la bodega. 
              p.mb-0 Ejemplo: el inventario presenta una precisión del 99 %.
            div
              h4.mb-4 Costo logístico
              p Analiza los costos asociados al almacenamiento, transporte, distribución y demás actividades logísticas. 
              p.mb-0 Ejemplo: el costo logístico representa el 12 % del valor de las ventas.
            div
              h4.mb-4 Tasa de devoluciones
              p Mide el porcentaje de pedidos devueltos respecto al total de entregas realizadas. 
              p.mb-0 Ejemplo: tres de cada cien pedidos son devueltos por diferentes causas.

    .bg-secundario-s10.p-4.py-3.rounded-4
      p.mb-0.text-center El análisis de indicadores facilita la toma de decisiones y permite establecer estrategias de mejora continua dentro de las operaciones logísticas.


















</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
