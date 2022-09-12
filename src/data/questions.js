const questions = [
  {
    id: 1,
    question:
      'Se presentan diferentes plantillas en las que se observan disposiciones de cuadrados unidos por algunos de sus lados. Sólo con algunas de esas plantillas podrán formarse cubos, sin cambiar de lugar las bisagras con las que están unidas, pues de lo contrario se modificaría la disposición original. Manipulando las poliformas deberán descubrir con cuántas de estas plantillas efectivamente pueden formarse cubos e indicar la cantidad correcta en el visor.',
    answer: '4',
  },
  {
    id: 2,
    question:
      'Ordenando correctamente los 6 cubos de este rompecabezas encontrarán formado un número en la cara superior, y también en la cara inferior. Además, podrán leer un mensaje lateralmente que les dará una instrucción sobre qué hacer con los números hallados. Por último, deberán ingresar ese resultado en el siguiente visor. ',
    answer: '19',
  },
  {
    id: 3,
    question: `Dos compañeros distanciados exactamente a 2,4 metros deberán sostener una soga de 260 cm al ras del piso. Otro compañero se situará en el punto medio de tal distancia y con su dedo elevará la soga verticalmente, sin dejar de sostenerse tensa desde sus extremos.
Indicar cuántos centímetros se puede elevar. La prueba será empírica, pero en caso de ser necesario, podrán hacer cálculos (hay fórmulas útiles en el aula). El número a ingresar es redondo.`,
    answer: '50',
  },
  {
    id: 4,
    question:
      'Utilizando las cámaras de uno de sus celulares deberán fotografiarse de la siguiente manera: 4 compañeros en fila, uno al lado del otro. Deberán descubrir todas las posibilidades distintas en las que aparezca siempre el mismo en el último lugar. Con esta cantidad de fotos mostrarán al jurado un collage de las mismas; si el mismo los aprueba, insertarán en el visor el número que se corresponde con la cantidad de fotos posibles con los requerimientos presentados.',
    answer: '6',
  },
  {
    id: 5,
    question: `Una guía telefónica era un libro o revista ofrecida por las empresas telefónicas en los cuales figuraban los números de los abonados en un área o región geográfica determinada. Cada ciudad está ordenada alfabéticamente y dentro de ella los usuarios de números telefónicos se encuentran ordenados de la misma forma. Buscar y tomar nota de los siguientes datos: 
    ⦁	el número de teléfono de la persona cuyo apellido empieza con “Y” y es par, perteneciente a San Genaro Oeste.
    ⦁	el último número de teléfono de la ciudad de Armstrong.
    ⦁	el número de teléfono de la farmacia de la localidad de Los Quirquinchos.
    ⦁	el único número de teléfono del pueblo de Las Bandurrias.
Sumar los 4 números hallados (todos sin prefijo). Tomando sólo 3 de sus dígitos (del 0 al 9, sin repetir) formar el mayor número impar posible. `,
    answer: '861',
  },
  {
    id: 6,
    question:
      'La tabla periódica de los elementos es una disposición de los elementos químicos en forma de tabla, publicada por primera vez en 1869 por Dmitri Mendeléyev. Los elementos están ordenados por su número atómico (número de protones), ubicado en el extremo superior izquierdo de cada casilla. Cada elemento tiene un símbolo químico utilizando las letras del alfabeto. Hay 13 símbolos químicos que son de una sola letra: H, B, C, N, O, F, P, S, K, V, I, Y, W, U. El resto de símbolos (105 por hoy) tienen dos letras. Hay una analogía entre el alfabeto y el lenguaje químico. Muchas personas se distraen resolviendo sopas de letras con los símbolos de la tabla periódica, o escribiendo palabras y frases con ellos. Éste es nuestro desafío para ustedes:',
    answer: '615',
    periodicTableWords: [
      [
        {
          symbol: 'P',
          color: 'gray',
        },
        {
          symbol: 'Ar',
          color: 'blue',
        },
        {
          symbol: 'As',
          color: 'lightgreen',
        },
        {
          symbol: 'Al',
          color: 'green',
        },
        {
          symbol: 'Ir',
          color: 'purple',
        },
      ],
      [
        {
          symbol: 'Ne',
          color: 'blue',
        },
        {
          symbol: 'Ce',
          color: 'red',
        },
        {
          symbol: 'Si',
          color: 'lightgreen',
        },
        {
          symbol: 'Ta',
          color: 'purple',
        },
        {
          symbol: 'N',
          color: 'gray',
        },
      ],
      [
        {
          symbol: 'S',
          color: 'gray',
        },
        {
          symbol: 'Er',
          color: 'red',
        },
      ],
      [
        {
          symbol: 'P',
          color: 'gray',
        },
        {
          symbol: 'O',
          color: 'gray',
        },
        {
          symbol: 'S',
          color: 'gray',
        },
        {
          symbol: 'I',
          color: 'lightblue',
        },
        {
          symbol: 'Ti',
          color: 'purple',
        },
        {
          symbol: 'V',
          color: 'purple',
        },
        {
          symbol: 'Os',
          color: 'purple',
        },
      ],
    ],
  },
  {
    id: 7,
    question:
      'Si llegaron hasta acá hicieron un trabajo increíble, felicitaciones. La clave final es la suma de las claves anteriores.',
    answer: '1555',
  },
]

export default questions
