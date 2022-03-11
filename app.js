const contenedor = document.getElementById("test")
const btn = document.getElementById("btnResultado")
const resultadoTest = document.getElementById("resultado")

const preguntas = [
    {
        pregunta : "1. What's the cat doing . . . the table?",
        respuestas : {
            a : "upper",
            b : "jumping",
            c : "under", 
            d : "under the"
        },
        respuestaCorrecta : "c"
    },
    {
      pregunta: "2. Can i park here?",
      respuestas: {
        a: "Sorry, I am not",
        b: "It's the same place",
        c: "Only for half an hour",
        d: "No, she can't"

      },
      respuestaCorrecta: "c"
    },
    {
      pregunta: "3. What colour will you paint the Children's bedroom?",
      respuestas: {
        a: "Someday, maybe",
        b: "We don't know the whereabouts yet",
        c: "It wasn't very dificult",
        d: "We cant decide"
      },
      respuestaCorrecta: "d"
    },
    {
        pregunta: "4. I can't understand this email",
        respuestas: {
          a: "Far away",
          b: "Would you like some help?",
          c: "I suppose you can",
          d: "Don't you know?"
        },
        respuestaCorrecta: "b"
      },
      {
        pregunta: "5. I'd like two tickets for tomorrow night",
        respuestas: {
          a: "Thank you",
          b: "I'll just check for you",
          c: "Afternoon and evening",
          d: "Jason?"
        },
        respuestaCorrecta: "b"
      },
      {
        pregunta: "6. Shall we go to the gym now?",
        respuestas: {
          a: "FUCK YEAH!",
          b: "It's very good",
          c: "Natural",
          d: "someday we'll find out"
        },
        respuestaCorrecta: "a"
      },
      {
        pregunta: "7. His eyes were . . . bad that he couldn't read the number plate of the car in front of him",
        respuestas: {
          a: "Such",
          b: "Too",
          c: "So",
          d: "Very"
        },
        respuestaCorrecta: "c"
      },
      {
        pregunta: "9. The company needs to decide . . . and for all what its position is on this point",
        respuestas: {
          a: "Here",
          b: "Finally",
          c: "First",
          d: "Once"
        },
        respuestaCorrecta: "d"
      },
      {
        pregunta: "10 . I'm sorry, I didn't . . . to disturb you",
        respuestas: {
          a: "With",
          b: "Mean",
          c: "Ask",
          d: "Think"
        },
        respuestaCorrecta: "b"
      },
      {
        pregunta: "11 . I was looking forward . . . at the new restaurant",
        respuestas: {
          a: "To have eaten",
          b: "To eat",
          c: "To eating",
          d: "Eating"
        },
        respuestaCorrecta: "c"
      },
]

function mostrarTest() {
    const preguntasYrespuestas = []

    preguntas.forEach((preguntaActual, numeroPregunta) => {
        const respuestas = []

        for (letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `
                <label>
                    <input type="radio" name="${numeroPregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>
                `
            )
        }
        preguntasYrespuestas.push(
            `
            <div class="question"> ${preguntaActual.pregunta}</div>
            <div class="respuestas"> ${respuestas.join('')}</div>
            `
        )
    })

    contenedor.innerHTML = preguntasYrespuestas.join('')
}

mostrarTest()

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas")
    let respuestasCorrectas = 0

    preguntas.forEach((preguntaActual, numeroPregunta) => {
        const todasLasRespuestas = respuestas[numeroPregunta]
        const checkBoxRespuestas = `input[name="${numeroPregunta}"]:checked`
        const respuestaElegida = (todasLasRespuestas.querySelector(checkBoxRespuestas) || {}).value

        if (respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++

            respuestas[numeroPregunta].style.color = "blue"
        } else {
            respuestas[numeroPregunta].style.color = "red"
        }
    });

    resultadoTest.innerHTML = `Hay ${respuestasCorrectas} Respuestas correctas de ${preguntas.length}`

}



btn.addEventListener("click", () => {mostrarResultado()})