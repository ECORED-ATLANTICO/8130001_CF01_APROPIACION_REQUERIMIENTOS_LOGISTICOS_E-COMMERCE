<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico logístico en operaciones de <em>e-commerce</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Verificar la apropiación de conceptos y procesos relacionados con planeación logística, distribución, gestión de carga y control operativo en operaciones de <em>e-commerce</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad de la logística dentro del <em>e-commerce</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar almacenamiento, distribución y entrega de productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación con clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir las plataformas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La logística en <em>e-commerce</em> permite gestionar almacenamiento, distribución y entrega de productos para satisfacer al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué modelo de negociación se caracteriza por las relaciones entre empresas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'B2C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'B2G.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'B2B.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'C2C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El modelo B2B corresponde a transacciones comerciales realizadas entre empresas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué ley regula el uso de mensajes de datos y comercio electrónico en Colombia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1581 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 527 de 1999.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ley 1480 de 2011.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 1273 de 2009.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La Ley 527 de 1999 reconoce la validez jurídica de los mensajes de datos y las transacciones electrónicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué proceso corresponde a la entrega final del pedido al consumidor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Primera milla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cross docking.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Última milla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Picking.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La última milla corresponde a la etapa final de entrega del producto al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función principal de un operador logístico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar almacenamiento y distribución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los operadores logísticos apoyan procesos de almacenamiento, transporte y distribución de mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de producto requiere condiciones especiales de conservación debido a su vida útil limitada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tecnológico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frágil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Perecedero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Textil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los productos perecederos requieren condiciones especiales para conservar su calidad y seguridad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué proceso permite identificar mercancías mediante códigos o símbolos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Picking</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cubicaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Marcado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dropshipping.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El marcado facilita la identificación y control de las mercancías durante la operación logística.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué proceso consiste en seleccionar productos dentro de una bodega para preparar pedidos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Picking.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Packaging</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rotulado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cubicaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El picking corresponde a la selección y recolección de productos para preparar pedidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es la finalidad de los indicadores KPI en logística?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar empaques.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir desempeño y cumplimiento de objetivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar operadores logísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los KPI permiten evaluar el desempeño y apoyar la toma de decisiones en las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué permite la trazabilidad dentro de la cadena logística?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar devoluciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir el transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar seguimiento a productos y operaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir inventarios automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La trazabilidad permite conocer la ubicación y estado de los productos durante la operación logística.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué proceso corresponde al retorno de productos desde el cliente hacia la empresa?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribución directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Logística inversa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Picking</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cubicaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La logística inversa gestiona devoluciones, cambios y recuperación de productos dentro de la cadena logística.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es uno de los beneficios de aplicar protocolos de bioseguridad en logística?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar riesgos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el control de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proteger personas, productos y operaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar procesos de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los protocolos de bioseguridad ayudan a proteger trabajadores, mercancías y procesos logísticos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué herramienta tecnológica se utiliza para integrar y gestionar información empresarial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ERP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Empaque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rotulado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cubicaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los sistemas ERP permiten integrar y administrar información relacionada con inventarios, pedidos y operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué documento permite identificar y controlar el transporte de mercancías?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guía de transporte.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Nómina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La guía de transporte facilita el control y seguimiento de las mercancías durante su movilización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es el propósito principal de la planeación logística?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar recursos y optimizar operaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la distribución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la trazabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La planeación logística permite organizar recursos y actividades para mejorar la eficiencia operativa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué modelo de negocio permite comercializar productos sin almacenarlos físicamente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Packaging</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'B2G.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Dropshipping</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Picking</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El dropshipping permite vender productos sin mantener inventarios propios, ya que el proveedor realiza el despacho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué actividad permite calcular el volumen ocupado por una mercancía?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rotulado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cubicaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Picking</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El cubicaje permite calcular el volumen de la mercancía para optimizar espacios de almacenamiento y transporte.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué entidad colombiana ejerce funciones de protección al consumidor en comercio electrónico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Superintendencia de Industria y Comercio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registraduría Nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fiscalía General de la Nación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contraloría General de la República.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La Superintendencia de Industria y Comercio protege los derechos de los consumidores y supervisa prácticas comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cuál es una característica de la logística internacional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo opera dentro de una ciudad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No requiere documentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incluye procesos de importación y exportación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina el uso de operadores logísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La logística internacional involucra operaciones de importación, exportación y cumplimiento de requisitos aduaneros.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante el cumplimiento normativo en las operaciones logísticas de <em>e-commerce</em>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reemplaza los sistemas tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque evita la necesidad de almacenar productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque elimina los costos de transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque contribuye a la legalidad, seguridad y confianza en las operaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El cumplimiento normativo fortalece la legalidad, reduce riesgos y genera confianza en las operaciones de comercio electrónico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
