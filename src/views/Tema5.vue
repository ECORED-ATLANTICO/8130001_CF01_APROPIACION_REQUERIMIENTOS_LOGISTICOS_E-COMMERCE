<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Logística inversa y bioseguridad

    img(src="@/assets/curso/tema5/1.png", alt="", data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 La logística inversa y la bioseguridad forman parte de los procesos de control y sostenibilidad en operaciones de e-commerce. Estas actividades permiten gestionar devoluciones, garantizar condiciones seguras de manipulación y fortalecer la continuidad operativa dentro de la cadena logística.
    
    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 En el comercio electrónico, las devoluciones de productos representan uno de los principales desafíos logísticos debido a costos de transporte, reprocesos y afectaciones en inventarios. Además, las organizaciones deben implementar protocolos de bioseguridad para proteger trabajadores, mercancías y consumidores.
        p.mb-0 Empresas como UPS y Amazon han desarrollado políticas de devolución y control sanitario que fortalecen la experiencia del cliente y mejoran la eficiencia operativa

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Logística inversa

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La logística inversa corresponde al conjunto de actividades destinadas a gestionar el retorno de productos, materiales o empaques desde el cliente hasta la organización, con el propósito de inspeccionarlos, reutilizarlos, repararlos, reciclarlos o disponerlos adecuadamente, según las condiciones de cada caso. Entre los elementos más importantes se encuentran:

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
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/4.png", alt="")

    .bg-secundario-s10.p-4.py-3.rounded-4
      p.mb-0.text-center Las organizaciones deben establecer procedimientos claros para devoluciones y atención de reclamaciones, garantizando trazabilidad y control documental.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Técnicas y procedimientos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Las técnicas de logística inversa incluyen los métodos utilizados para gestionar el retorno y aprovechamiento de los productos. Estas actividades permiten determinar si la mercancía puede reintegrarse al inventario o requiere eliminación. Las técnicas son las siguientes:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Técnicas de logística inversa
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/6-mob.png", alt="La figura muestra las técnicas de la logística inversa mediante cuatro etapas conectadas: clasificación de devoluciones, inspección de mercancías, reacondicionamiento y disposición final del producto. Además, representa un flujo continuo de las devoluciones, desde la evaluación de su estado y definición del tratamiento correspondiente hasta su recuperación, reutilización, reciclaje o disposición segura, de acuerdo con las condiciones del producto y la normativa vigente.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/6.png", alt="La figura muestra las técnicas de la logística inversa mediante cuatro etapas conectadas: clasificación de devoluciones, inspección de mercancías, reacondicionamiento y disposición final del producto. Además, representa un flujo continuo de las devoluciones, desde la evaluación de su estado y definición del tratamiento correspondiente hasta su recuperación, reutilización, reciclaje o disposición segura, de acuerdo con las condiciones del producto y la normativa vigente.")
        figcaption Nota. SENA, (2026).

    .bg-terciario-t5.p-4.py-3.rounded-4.mb-4.mb-lg-5
      p.mb-0.text-center Los procedimientos representan la secuencia de actividades necesarias para ejecutar ese proceso de forma organizada. Por otro lado, deben definir tiempos de respuesta, responsables, registros y mecanismos de seguimiento para garantizar eficiencia en el proceso. El procedimiento de atención de una devolución es el siguiente

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/7.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        SlyderF.circl-arrow(columnas="col-sm-12 col-lg-6")
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-5
                img.mb-4(src='@/assets/curso/tema5/8.svg' alt='')
            h4.text-center.mb-4 Recepción de la devolución
            p.text-center.mb-0 Recibir el producto devuelto y registrar la información básica (número de pedido, cliente y motivo de la devolución).
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-5
                img.mb-4(src='@/assets/curso/tema5/9.svg' alt='')
            h4.text-center.mb-4 Verificación de la información
            p.text-center.mb-0 Validar documentos, motivo de la devolución y condiciones establecidas por la empresa para continuar el proceso.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-5
                img.mb-4(src='@/assets/curso/tema5/10.svg' alt='')
            h4.text-center.mb-4 Inspección del producto
            p.text-center.mb-0 Revisar el estado físico, funcional y estético del producto para identificar daños, accesorios completos o fallas.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-5
                img.mb-4(src='@/assets/curso/tema5/11.svg' alt='')
            h4.text-center.mb-4 Clasificación del retorno
            p.text-center.mb-0 Asignar el producto al destino correspondiente según el resultado de la inspección y las políticas de la empresa.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-5
                img.mb-4(src='@/assets/curso/tema5/12.svg' alt='')
            h4.text-center.mb-4 Procesamiento del producto
            p.text-center.mb-0 Ejecutar la acción definida: reparar, reacondicionar, cambiar, reutilizar, reciclar o preparar para disposición final.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-3
              .col-5
                img.mb-4(src='@/assets/curso/tema5/13.svg' alt='')
            h4.text-center.mb-4 Registro y cierre del proceso
            p.text-center.mb-0 Registrar la gestión realizada, actualizar el sistema y cerrar la devolución para garantizar la trazabilidad y el control.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Normativas y políticas

    img(data-aos="fade-up", src="@/assets/curso/tema5/14.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--terciario
          p.mb-0 Las operaciones de logística inversa deben cumplir disposiciones legales, reglamentos internos y lineamientos organizacionales que regulan la gestión de las devoluciones, las garantías, la recuperación de productos y la disposición final de las mercancías, garantizando el cumplimiento de los requisitos legales, operativos y ambientales aplicables. Las normativas y políticas aplicables a la logística inversa son:

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 4.
      span Aspectos fundamentales de la gestión documental y el control de procesos
    .tabla-b.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #B5D0DB")
            th Política
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

    separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Bioseguridad y protocolos logísticos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3.d-block La bioseguridad comprende medidas orientadas a prevenir riesgos físicos, biológicos y sanitarios dentro de operaciones logísticas. Estas acciones buscan proteger trabajadores, mercancías y espacios de almacenamiento. Las empresas deben capacitar al personal y establecer procedimientos de prevención para garantizar continuidad operativa y cumplimiento de condiciones de seguridad en la cadena logística.
        p.mb-0 Los protocolos logísticos incluyen: 

    TabsB.color-acento-botones.mb-4.mb-lg-5
      .py-4.py-md-5(titulo="Elementos de protección personal (EPP)" :icono="require_src('@/assets/curso/tema5/16.svg')")
        .row.justify-content-center.align-items-center.px-4.px-lg-0
          .col-lg-7.col-xl-6
            h4 Elementos de protección personal (EPP)
            p El uso de guantes, gafas, mascarillas, casco y calzado de seguridad protege al personal frente a riesgos físicos, químicos o biológicos. 
            p.mb-4.mb-lg-0 Ejemplo: utilizar guantes y gafas durante la inspección de productos devueltos con daños visibles.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema5/17.png', alt='')
      .py-4.py-md-5(titulo="Limpieza de superficies" :icono="require_src('@/assets/curso/tema5/16.svg')")
        .row.justify-content-center.align-items-center.px-4.px-lg-0
          .col-lg-7.col-xl-6
            h4 Limpieza de superficies
            p La limpieza y desinfección periódica de mesas, equipos, herramientas y áreas de trabajo reducen la contaminación y mantienen condiciones seguras. 
            p.mb-4.mb-lg-0 Ejemplo: desinfectar la zona de inspección al finalizar cada jornada o después de manipular productos contaminados.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema5/18.png', alt='')
      .py-4.py-md-5(titulo="Manipulación segura de mercancías" :icono="require_src('@/assets/curso/tema5/16.svg')")
        .row.justify-content-center.align-items-center.px-4.px-lg-0
          .col-lg-7.col-xl-6
            h4 Manipulación segura de mercancías
            p La aplicación de técnicas adecuadas de levantamiento, movilización y almacenamiento disminuye accidentes y evita daños en los productos. 
            p.mb-4.mb-lg-0 Ejemplo: trasladar una carga pesada con una transpaleta en lugar de hacerlo manualmente.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema5/19.png', alt='')
      .py-4.py-md-5(titulo="Control sanitario en transporte y almacenamiento" :icono="require_src('@/assets/curso/tema5/16.svg')")
        .row.justify-content-center.align-items-center.px-4.px-lg-0
          .col-lg-7.col-xl-6
            h4 Control sanitario en transporte y almacenamiento
            p La verificación de las condiciones de higiene, temperatura, ventilación y conservación protege la calidad de los productos durante su movilización y permanencia en bodega. 
            p.mb-4.mb-lg-0 Ejemplo: mantener medicamentos o alimentos retornados en áreas con temperatura controlada hasta definir su destino.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema5/20.png', alt='')

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/21.png", alt="" data-aos="zoom-in-down")
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
                  a.boton.color-acento-botones.d-block(href="https://www.youtube.com/watch?v=n7Oaourq7cM"  target="_blank" no-referrer)
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
                  a.boton.color-acento-botones.d-block(href="https://ecommerce.institute/wp-content/uploads/lb-logistica-2016.pdf" type="application/pdf" target="_blank" no-referrer)
                    span Enlace web
                    i.fas.fa-file-pdf

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
