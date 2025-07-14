<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Conocimientos sobre la aplicación de las buenas prácticas ganaderas en producción de leche bovina',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Este cuestionario tiene como finalidad evaluar y fortalecer los conocimientos sobre las buenas prácticas ganaderas (BPG) aplicadas en la producción de leche bovina. Abarca aspectos clave como sanidad, bienestar animal, trazabilidad, sostenibilidad y normativas vigentes, con el propósito de garantizar la producción de carne segura, eficiente y sostenible.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la Resolución 67449 de 2022 del ICA?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular la exportación de ganado vacuno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer requisitos para el sacrificio de animales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer los requisitos para la certificación en Buenas Prácticas Ganaderas en producción de leche.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promover el uso de biotecnología en fincas ganaderas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad es la encargada de certificar las BPG en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Agricultura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'INVIMA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Federación Colombiana de Ganaderos (FEDEGAN).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Instituto Colombiano Agropecuario (ICA).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Según la Resolución 67449 de 2022, ¿cada cuánto se debe renovar la certificación BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cada año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cada tres años.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cada cinco años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cada seis meses.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Uno de los principios de las BPG es garantizar la inocuidad de la leche. Esto se refiere a: ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro de tratamientos y productos veterinarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Control de gastos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bitácora de producción mensual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventario de insumos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En cuanto a la infraestructura de ordeño, la resolución exige qué:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No tenga contacto directo con la vivienda del productor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tenga acceso restringido solo al veterinario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sea construida en madera para facilitar la limpieza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permita el lavado fácil y evite la contaminación de la leche.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de agua debe utilizarse en las labores de limpieza y ordeño según la resolución?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agua de río sin tratar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agua potable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Agua de lluvia sin tratamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agua reciclada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una condición sanitaria exigida para la certificación BPG es que los animales estén libres de: ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Parasitosis externa leve.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Leptospira.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Brucelosis y tuberculosis bovina.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mastitis subclínica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes aspectos también es evaluado para la certificación BPG?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trazabilidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calidad del pasto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción diaria mínima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Según la Resolución 67449 de 2022, la certificación en BPG puede ser revocada si: ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El productor cambia de veterinario tratante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se disminuye la producción de leche por vaca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se presentan inconsistencias en los registros y no se corrigen.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se adquiere ganado de otro departamento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Para obtener la certificación en BPG, el predio debe demostrar qué:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exporta leche a países de la CAN.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realiza pruebas genéticas mensuales al hato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiene acceso exclusivo a mercados orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cumple con las condiciones de bioseguridad establecidas por el ICA.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
