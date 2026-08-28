<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Logística de distribución y almacenamiento

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La logística de distribución y almacenamiento comprende las actividades relacionadas con movilización, organización y entrega de productos dentro de operaciones de e-commerce. Estos procesos permiten garantizar disponibilidad de mercancías, cumplimiento en tiempos de entrega y continuidad en la cadena de suministro.
        .bg-terciario-t5.p-4.py-3.rounded-4
          p.mb-0 Por lo anterior, el presente componente formativo desarrolla fundamentos técnicos y aplicados para la planeación logística en entornos de #[em e-commerce], permitiendo al aprendiz analizar, estructurar y evaluar operaciones logísticas alineadas con requerimientos empresariales y condiciones reales del mercado.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-azul.p-4.py-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4.mb-lg-0 #[strong Ejemplo:] empresas como Mercado Libre han implementado centros de distribución, alianzas con operadores logísticos y sistemas automatizados para optimizar tiempos de despacho y mejorar la experiencia del cliente.
            .col-lg-4
              figure
                img.imgw-130(data-aos="fade-down-right", src="@/assets/curso/tema2/11.png", alt="")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Logística nacional e internacional

    img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in-down")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--terciario
          p.mb-0 Las operaciones logísticas pueden ejecutarse dentro del territorio nacional o involucrar el intercambio de mercancías entre diferentes países, según el alcance de la cadena de suministro y los mercados atendidos. Cada ámbito requiere procesos de planificación, coordinación y control acordes con las características de la operación, las condiciones de transporte, la documentación exigida y el cumplimiento de la normativa aplicable. Comprender estas diferencias facilita la toma de decisiones y contribuye al desarrollo de operaciones logísticas eficientes y seguras.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1.
      span Definiciones de logística nacional e internacional
    .tabla-b.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #B5D0DB")
            th Tipo de logística
            th(colspan="2") Concepto
            th(colspan="2") Aspectos o elementos por considerar
        tbody
          tr
            td #[strong Logística nacional]
            td(colspan="2") Gestiona el abastecimiento, almacenamiento, transporte y distribución de mercancías dentro del territorio de un mismo país, garantizando el cumplimiento de la normativa nacional y la eficiencia de las operaciones.
            td(colspan="2") 
              p.mb-0 Cobertura geográfica nacional
              p.mb-0 Infraestructura vial y centros logísticos
              p.mb-0 Costos de transporte y distribución
              p.mb-0 Cumplimiento de la normativa nacional
              p.mb-0 Tiempos de entrega
              p.mb-0 Coordinación entre proveedores, operadores y clientes
          tr(style="background-color: #F6F6F6")
            td #[strong Logística internacional]
            td(colspan="2") Administra el flujo de mercancías entre dos o más países mediante procesos de comercio exterior, transporte internacional y coordinación logística, asegurando el cumplimiento de los requisitos legales y comerciales establecidos.
            td(colspan="2")
              p.mb-0 Trámites aduaneros
              p.mb-0 Documentación para importación y exportación
              p.mb-0 Selección del modo de transporte internacional
              p.mb-0 Acuerdos comerciales e Incoterms.
              p.mb-0 Regulaciones del país de origen y destino
              p.mb-0 Gestión de riesgos y seguros de la carga

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Primera y última milla
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La eficiencia de una operación logística depende de la adecuada coordinación de cada etapa del recorrido de las mercancías, desde su punto de origen hasta la entrega al destinatario final. Dentro de este proceso, la primera y la última milla representan fases estratégicas que influyen en los tiempos de entrega, los costos operativos, la trazabilidad y la experiencia del cliente, especialmente en las operaciones de comercio.
        .bg-primario-p5.p-4.py-3.rounded-4
          p.mb-0 La primera milla corresponde al traslado inicial de productos desde fabricantes o proveedores hacia centros de distribución o almacenamiento. Esta etapa permite organizar inventarios y garantizar disponibilidad de mercancías. Entre sus aspectos más importantes, tenemos:
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .p-4.p-xl-5.bg-slider.mb-4.mb-lg-0
          SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
            div
              h4.mb-4 Recolección de mercancías
              p Inicia con la recepción de los productos en las instalaciones del proveedor o vendedor para incorporarlos a la operación logística.
              p.mb-0 Ejemplo: recoger cajas en la bodega de un fabricante.
            div
              h4.mb-4 Programación de rutas de recogida
              p Organiza los recorridos de los vehículos para optimizar tiempos, reducir costos y aprovechar la capacidad de carga.
              p.mb-0 Ejemplo: planificar una ruta para visitar varios proveedores en una misma jornada.
            div
              h4.mb-4 Embalaje y rotulado adecuados
              p Verifica que los productos cuenten con protección y etiquetado apropiados antes del traslado, disminuyendo riesgos durante la manipulación.
              p.mb-0 Ejemplo: embalar un televisor y colocar su etiqueta de despacho.
            div
              h4.mb-4 Verificación de cantidades y condiciones
              p Confirma que la mercancía coincida con la orden y presente condiciones adecuadas antes del transporte.
              p.mb-0 Ejemplo: revisar que un pedido incluya las diez unidades solicitadas.
            div
              h4.mb-4 Registro inicial para la trazabilidad
              p Registra la información del envío desde el inicio para facilitar su seguimiento durante toda la operación.
              p.mb-0 Ejemplo: escanear el código de barras al momento de la recolección.
            div
              h4.mb-4 Coordinación con proveedores o vendedores
              p Mantiene comunicación permanente para programar horarios, resolver novedades y asegurar la disponibilidad de la mercancía.
              p.mb-0 Ejemplo: confirmar la hora de recogida con un proveedor mediante correo electrónico.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")
    
    p La última milla comprende la fase final de la distribución; donde se procede a trasladar los productos desde el centro de distribución hasta el cliente final, garantizando entregas oportunas, seguras y acordes con los compromisos establecidos. Es una de las etapas más críticas del #[em e-commerce], debido a que impacta directamente la percepción del cliente frente al servicio. 
    p.mb-4 Entre los aspectos más importantes tenemos:

    .p-4.p-xl-5.bg-slider.mb-5
      SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
        .row.justify-content-center.align-items-center.py-4.pt-lg-5
          .col-lg-6
            h4.mb-4 Planificación de rutas de entrega
            p Define el recorrido más eficiente para distribuir los pedidos, considerando distancia, tráfico y prioridades. 
            p.mb-4.mb-lg-0 Ejemplo: asignar una ruta que permita entregar veinte pedidos en un mismo sector.
          .col-lg-5
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/5.png", alt="")
        .row.justify-content-center.align-items-center.py-4.pt-lg-5
          .col-lg-6
            h4.mb-4 Confirmación de dirección y datos del cliente
            p Verifica la información del destinatario para evitar retrasos o entregas fallidas. 
            p.mb-4.mb-lg-0 Ejemplo: validar el número del apartamento antes de despachar un pedido.
          .col-lg-5
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/6.png", alt="")
        .row.justify-content-center.align-items-center.py-4.pt-lg-5
          .col-lg-6
            h4.mb-4 Seguimiento en tiempo real del pedido
            p Permite conocer la ubicación del envío durante el recorrido y mantener informado al cliente. 
            p.mb-4.mb-lg-0 Ejemplo: consultar el estado del paquete desde una aplicación móvil.
          .col-lg-5
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/7.png", alt="")
        .row.justify-content-center.align-items-center.py-4.pt-lg-5
          .col-lg-6
            h4.mb-4 Cumplimiento de los tiempos de entrega
            p Controla que los pedidos lleguen dentro del plazo comprometido, fortaleciendo la satisfacción del cliente. 
            p.mb-4.mb-lg-0 Ejemplo: entregar una compra realizada en la mañana durante la misma tarde.
          .col-lg-5
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/8.png", alt="")
        .row.justify-content-center.align-items-center.py-4.pt-lg-5
          .col-lg-6
            h4.mb-4 Evidencia de entrega o devolución
            p Registra el resultado de la entrega mediante soportes físicos o digitales que respaldan la operación. 
            p.mb-4.mb-lg-0 Ejemplo: capturar la firma o una fotografía al entregar el paquete.
          .col-lg-5
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/9.png", alt="")
        .row.justify-content-center.align-items-center.py-4.pt-lg-5
          .col-lg-6
            h4.mb-4 Atención al cliente durante la entrega
            p Brinda información y solución a inquietudes relacionadas con el pedido, fortaleciendo la experiencia de compra. 
            p.mb-4.mb-lg-0 Ejemplo: informar al cliente sobre un cambio en el horario de entrega.
          .col-lg-5
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/10.png", alt="")

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-azul.p-4.py-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4.mb-lg-0 #[strong Ejemplo:] empresas de mensajería y plataformas digitales utilizan sistemas de rastreo y geolocalización para optimizar rutas y reducir tiempos de entrega.
            .col-lg-4
              figure
                img.imgw-130(data-aos="fade-down-right", src="@/assets/curso/tema2/11.png", alt="")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Operadores logísticos

    img(src="@/assets/curso/tema2/12.png", alt="", data-aos="fade-up")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--terciario
          p.mb-0 Los operadores logísticos desempeñan un papel fundamental en la cadena de suministro; dado que se especializan en almacenamiento, transporte, distribución y control de mercancías; contribuyendo al flujo eficiente de mercancías e información. Estas organizaciones apoyan a las empresas de #[em e-commerce] en la gestión de procesos logísticos y cumplimiento de entregas, mediante soluciones adaptadas a las necesidades de cada operación. Existen operadores especializados en transporte urbano, carga nacional, distribución internacional y logística de última milla. La selección del operador depende del tipo de producto, cobertura y requerimientos del servicio.

    .bg-secundario-s20.p-4.py-3.rounded-4.mb-3
      p.mb-0.text-center A continuación, se muestra como es el proceso a nivel general de un operador logístico: 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/36.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        SlyderF.circl-arrow(columnas="col-sm-12 col-lg-6")
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-4
              .col-6.col-sm-4.col-lg-6
                img(src='@/assets/curso/tema2/14.png' alt='')
            h4.text-center.mb-4 Recepción
            p.text-center.mb-0 Recibir los productos del proveedor y verificar cantidad y condiciones.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-4
              .col-6.col-sm-4.col-lg-6
                img(src='@/assets/curso/tema2/15.png' alt='')
            h4.text-center.mb-4 Custodia
            p.text-center.mb-0 Mantener los productos bajo custodia en un lugar seguro mientras se procesan.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-4
              .col-6.col-sm-4.col-lg-6
                img(src='@/assets/curso/tema2/16.png' alt='')
            h4.text-center.mb-4 Almacenamiento
            p.text-center.mb-0 Ubicar los productos en zonas específicas para su control y conservación.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-4
              .col-6.col-sm-4.col-lg-6
                img(src='@/assets/curso/tema2/17.png' alt='')
            h4.text-center.mb-4 Alistamiento
            p.text-center.mb-0 Preparar los pedidos según los requerimientos del cliente: selección, empacar y etiquetar.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-4
              .col-6.col-sm-4.col-lg-6
                img(src='@/assets/curso/tema2/18.png' alt='')
            h4.text-center.mb-4 Transporte
            p.text-center.mb-0 Cargar los pedidos y transportarlos de forma segura hasta su destino.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-4
              .col-6.col-sm-4.col-lg-6
                img(src='@/assets/curso/tema2/19.png' alt='')
            h4.text-center.mb-4 Distribución y entrega
            p.text-center.mb-0 Entregar los productos al cliente final en el lugar y tiempo acordado.
          .tarjeta.tarjeta--blanca.p-4.py-5.shadow.m-3.mx-2
            .row.justify-content-center.mb-4
              .col-6.col-sm-4.col-lg-6
                img(src='@/assets/curso/tema2/20.png' alt='')
            h4.text-center.mb-4 Devoluciones (si aplica)
            p.text-center.mb-0 Gestionar las devoluciones o cambios de productos según las políticas establecidas.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-azul.p-4.py-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4.mb-lg-0 #[strong Ejemplo:] las empresas como Servientrega, Coordinadora y DHL ofrecen soluciones logísticas para operaciones de comercio electrónico en diferentes sectores productivos.
            .col-lg-4
              figure
                img.imgw-110(data-aos="fade-down-right", src="@/assets/curso/tema2/21.png", alt="")

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Almacenamiento y tiempos de entrega 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/22.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El almacenamiento y los tiempos de entrega constituyen factores determinantes para el desempeño de las operaciones logísticas en el comercio electrónico. Una adecuada planificación de estos procesos favorece la disponibilidad de los productos, optimiza el flujo de mercancías y contribuye al cumplimiento de los compromisos adquiridos con el cliente. Su gestión integrada permite mejorar la eficiencia operativa, reducir costos, fortalecer la coordinación entre los diferentes actores de la cadena de suministro y ofrecer una experiencia de compra más confiable y oportuna.
        .bg-terciario-t5.p-4.py-3.rounded-4
          p.mb-0 El almacenamiento comprende el conjunto de actividades destinadas a recibir, ubicar, conservar, controlar y administrar las mercancías dentro de un centro logístico o bodega, garantizando su disponibilidad, integridad y rápida localización para atender oportunamente los procesos de alistamiento, despacho y distribución en la cadena de suministro.

    .bg-primario-p10.p-4.py-3.rounded-4.mb-5
      p.mb-0.text-center Entre los aspectos más importantes a considerar, se encuentran:

    .row.justify-content-center.align-items-center.mb-3
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/23.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-gris-oscuro")
          div(titulo="Posiciones de almacenamiento")
            p.ms-lg-5.ps-lg-2 Definir posiciones de almacenamiento facilita la ubicación rápida de las mercancías, optimiza el aprovechamiento del espacio y reduce el tiempo requerido para las actividades de búsqueda, alistamiento y despacho.
          div(titulo="Clasificación de productos")
            p.ms-lg-5.ps-lg-2 Agrupar los productos según sus características físicas, condiciones de conservación o nivel de rotación favorece el orden, simplifica la manipulación y disminuye el riesgo de errores operativos.
          div(titulo="Rotación de inventarios")
            p.ms-lg-5.ps-lg-2 Aplicar métodos de rotación adecuados permite controlar la salida de los productos según su ingreso o vencimiento, evitando pérdidas, obsolescencia y acumulación innecesaria de existencias.
          div(titulo="Condiciones de conservación")
            p.ms-lg-5.ps-lg-2 Mantener condiciones apropiadas de temperatura, humedad, iluminación y seguridad preserva la calidad de las mercancías y minimiza el riesgo de deterioro durante el almacenamiento.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-7.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-gris-oscuro")
          div(titulo="Aprovechamiento del espacio")
            p.ms-lg-5.ps-lg-2 Organizar eficientemente las áreas de almacenamiento incrementa la capacidad disponible, mejora la circulación del personal y los equipos, y favorece operaciones más ágiles y seguras.
          div(titulo="Sistemas de gestión")
            p.ms-lg-5.ps-lg-2 Utilizar herramientas tecnológicas para administrar el almacén permite controlar inventarios, registrar movimientos, asignar posiciones y consultar información en tiempo real.
          div(titulo="Identificación de mercancías")
            p.ms-lg-5.ps-lg-2 Implementar códigos, etiquetas o tecnologías de identificación facilita la localización de los productos, fortalece la trazabilidad y mejora la precisión de las operaciones logísticas.
          div(titulo="Preparación de pedidos")
            p.ms-lg-5.ps-lg-2 Organizar el alistamiento de los pedidos garantiza que cada producto corresponda a la solicitud del cliente, reduciendo errores y favoreciendo entregas oportunas y completas.
      .col-sm-8.col-lg-5
        figure
          img(src="@/assets/curso/tema2/24.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/25.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Lo tiempos de entrega corresponden al período comprendido entre la confirmación de un pedido y su recepción por parte del cliente. Su cumplimiento depende de la adecuada coordinación entre el almacenamiento, la disponibilidad de inventario, el alistamiento, el transporte, la distribución, el seguimiento del envío y la gestión oportuna de las novedades que puedan presentarse durante la operación logística.
        .bg-terciario-t5.p-4.py-3.rounded-4
          p.mb-0 los principales aspectos que influyen en su cumplimiento dentro de las operaciones logísticas y el #[em e-commerce], son los siguientes:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema2/26.svg", alt="")
          h4.mb-4.text-center Planificación de rutas
          p.mb-0.text-center Diseñar recorridos eficientes reduce los tiempos de desplazamiento, optimiza el uso de los vehículos y favorece el cumplimiento de las entregas programadas.
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-72.mb-4(src="@/assets/curso/tema2/27.svg", alt="")
          h4.mb-4.text-center Priorización de pedidos
          p.mb-0.text-center Establecer criterios para atender los pedidos según su urgencia, destino o compromiso comercial permite organizar las entregas de manera más eficiente.
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-60.mb-4(src="@/assets/curso/tema2/28.svg", alt="")
          h4.mb-4.text-center Disponibilidad de inventario
          p.mb-0.text-center Contar con existencias suficientes evita retrasos ocasionados por faltantes y permite iniciar oportunamente el proceso de alistamiento y despacho.
      .col-lg-4.col-xl-3.mb-3
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema2/29.svg", alt="")
          h4.mb-4.text-center Capacidad de transporte
          p.mb-0.text-center Disponer de vehículos y recursos adecuados garantiza el traslado oportuno de las mercancías, especialmente durante períodos de alta demanda.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-46.mb-4(src="@/assets/curso/tema2/30.svg", alt="")
          h4.mb-4.text-center Seguimiento del pedido
          p.mb-0.text-center Monitorear el estado del envío durante el recorrido facilita identificar novedades, informar al cliente y adoptar acciones correctivas cuando sea necesario.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-54.mb-4(src="@/assets/curso/tema2/31.svg", alt="")
          h4.mb-4.text-center Coordinación operativa
          p.mb-0.text-center Integrar las actividades entre almacenamiento, transporte y distribución reduce tiempos de espera y mejora la continuidad de la operación logística.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-54.mb-4(src="@/assets/curso/tema2/32.svg", alt="")
          h4.mb-4.text-center Gestión de incidencias
          p.mb-0.text-center Atender oportunamente novedades como retrasos, cambios de dirección o condiciones climáticas minimiza su impacto sobre los tiempos de entrega.
      .col-lg-4.col-xl-3.mb-3.mb-xl-0
        .tarjeta.bg-primario-p10.p-4.rounded-4.h-100
          img.imgw-54.mb-4(src="@/assets/curso/tema2/33.svg", alt="")
          h4.mb-4.text-center Comunicación con clientes
          p.mb-0.text-center Informar el estado del pedido y las fechas estimadas de entrega fortalece la confianza del cliente y mejora su experiencia durante la compra.

    .bg-secundario-s20.p-4.py-3.rounded-4.mb-5
      p.mb-0 Los tiempos de entrega representan uno de los principales indicadores de desempeño logístico en #[em e-commerce]. Las organizaciones deben establecer estrategias de almacenamiento y distribución que permitan responder oportunamente a la demanda.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        .bg-azul.p-4.py-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4.mb-lg-0 #[strong Ejemplo:] el crecimiento del comercio electrónico ha impulsado el uso de bodegas inteligentes, sistemas automatizados y centros de distribución regionales para mejorar eficiencia y competitividad empresarial.
            .col-lg-4
              figure
                img.imgw-100(data-aos="fade-down-right", src="@/assets/curso/tema2/34.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/35.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .tarjeta.bg-terciario-t70.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/28.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white ¿Cómo Funciona una Tienda Online?
                  p.mb-0.text-white A continuación, consulte el siguiente video para fortalecer los conocimientos relacionados con logística de distribución y almacenamiento: 

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://www.youtube.com/watch?v=Fxz8Ka7ny3M"  target="_blank" no-referrer)
                    span Abrir video
                    i.fas.fa-file-video
        .tarjeta.bg-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema6/12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white Logística de distribución y almacenamiento.
                  p.mb-0.text-white Se invita al aprendiz a profundizar en lo relacionado a logística de distribución y almacenamiento, a través del siguiente libro (página 155-162). 

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://www.fesc.edu.co/portal/archivos/e_libros/logistica/gestion_logistica.pdf" type="application/pdf" target="_blank" no-referrer)
                    span Enlace web
                    i.fas.fa-file-pdf

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
