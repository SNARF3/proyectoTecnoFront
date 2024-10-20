<template>
    <body>
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center">
                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                        <div class="my-5 text-center text-lg-start">
                            <h1 class="display-5 fw-bolder text-white mb-2">Sistema de vocación estudiantil</h1>
                            <p class="lead fw-normal text-white-50 mb-4">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum minus sed
                                ducimus dolorem deleniti aliquid! Repellat doloribus quo totam delectus in sit odio
                                aliquid vitae accusantium. Minus, quasi a?
                            </p>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 text-center">
                        <img class="img-fluid img-responsive"
                            src="../assets/people.png"
                            alt="Estudiante" />
                    </div>
                </div>

                <div class="buttonxd text-center mt-4 mt-lg-5">
                    <pbutton class="btnxd" name="Hacer encuesta"/>
                </div>
            </div>
        </header>

        <section class="py-5" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h2 class="fw-bolder mb-0">A better way to start building.</h2>
                    </div>
                    <div class="col-lg-8">
                        <div class="row gx-5 row-cols-1 row-cols-md-2">
                            <div class="col mb-5 h-100">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-collection"></i>
                                </div>
                                <h2 class="h5">Featured title</h2>
                                <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is
                                    just a bit more
                                    text.</p>
                            </div>
                            <div class="col mb-5 h-100">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-building"></i>
                                </div>
                                <h2 class="h5">Featured title</h2>
                                <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is
                                    just a bit more
                                    text.</p>
                            </div>
                            <div class="col mb-5 mb-md-0 h-100">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-toggles2"></i>
                                </div>
                                <h2 class="h5">Featured title</h2>
                                <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is
                                    just a bit more
                                    text.</p>
                            </div>
                            <div class="col h-100">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-toggles2"></i>
                                </div>
                                <h2 class="h5">Featured title</h2>
                                <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is
                                    just a bit more
                                    text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</template>

<script>
import barInicio from '../components/barInicio.vue';
import pbutton from '@/components/pbutton.vue';

export default {
    name: 'HomeView',
    components: {
        barInicio,
        pbutton,
        
    },

}
</script>

<style>

</style>

    <header class="bg-customblue py-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <!-- Columna principal del texto -->
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-lg-start">
              <h1 class="display-5 fw-bolder text-white mb-3">
                Sistema de vocación estudiantil
              </h1>
              <p class="lead fw-normal text-white mb-4">
                Nuestro Test de Orientación Vocacional te ayuda a descubrir qué
                áreas profesionales se alinean con tus intereses y habilidades.
                Responde a unas simples preguntas y obtén una recomendación
                personalizada para guiarte en tu elección de carrera. ¡Encuentra el
                camino que más te apasiona y da el primer paso hacia tu futuro
                profesional!
              </p>
            </div>
          </div>
  
          <!-- Imagen, visible también en dispositivos móviles -->
          <div class="col-12 col-lg-4 text-center">
            <img
              class="img-fluid img-responsive"
              src="../assets/people.png"
              alt="Estudiante"
            />
          </div>
        </div>
  
        <!-- Botón centrado -->
        <div class="text-center mt-4 mt-lg-5">
          <button class="btn-start-test">Realizar test</button>
        </div>
  
        <!-- Título para posibles resultados -->
        <div class="text-center mt-5 mb-4">
          <h2 class="text-white">Posibles resultados</h2>
        </div>
  
        <!-- Contenedores de resultados -->
        <div class="row mt-5">
          <div class="col-md-4 mb-4">
            <div class="card shadow-custom">
              <img
                src="../assets/ciencias_tecnologia.png"
                class="card-img-top img-centered"
                alt="Ciencias y Tecnología"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Ciencias y Tecnología</h5>
                <p class="card-text text-white">
                  Carreras sugeridas: Ingeniería, Informática, Matemáticas, Física
                  <br />
                  Características: Pensamiento lógico, gusto por la resolución de
                  problemas, interés en tecnología.
                </p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 mb-4">
            <div class="card shadow-custom">
              <img
                src="../assets/humanidades_ciencias_sociales.png"
                class="card-img-top img-centered"
                alt="Humanidades y Ciencias Sociales"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Humanidades y Ciencias Sociales</h5>
                <p class="card-text text-white">
                  Carreras sugeridas: Psicología, Sociología, Historia, Comunicación
                  <br />
                  Características: Interés por las personas, habilidades
                  comunicativas, análisis social.
                </p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 mb-4">
            <div class="card shadow-custom">
              <img
                src="../assets/arte_creatividad.png"
                class="card-img-top img-centered"
                alt="Arte y Creatividad"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Arte y Creatividad</h5>
                <p class="card-text text-white">
                  Carreras sugeridas: Diseño, Artes Visuales, Música, Arquitectura
                  <br />
                  Características: Expresión creativa, sensibilidad estética,
                  originalidad.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Nueva fila centrada para las últimas dos tarjetas -->
        <div class="row justify-content-center mt-4">
          <div class="col-md-4 mb-4">
            <div class="card shadow-custom">
              <img
                src="../assets/negocios_administracion.png"
                class="card-img-top img-centered"
                alt="Negocios y Administración"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Negocios y Administración</h5>
                <p class="card-text text-white">
                  Carreras sugeridas: Administración, Economía, Marketing,
                  Contabilidad
                  <br />
                  Características: Liderazgo, organización, visión estratégica.
                </p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 mb-4">
            <div class="card shadow-custom">
              <img
                src="../assets/ciencias_salud.png"
                class="card-img-top img-centered"
                alt="Ciencias de la Salud"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Ciencias de la Salud</h5>
                <p class="card-text text-white">
                  Carreras sugeridas: Medicina, Enfermería, Nutrición, Fisioterapia
                  <br />
                  Características: Vocación de servicio, interés por el bienestar,
                  atención al detalle.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Nuevo texto de preguntas frecuentes -->
        <div class="text-center mt-5">
          <h3 class="text-white title-custom">Preguntas y respuestas frecuentes</h3>
        </div>
      </div>

      <!-- Preguntas Frecuentes (FAQ) -->
<!-- Preguntas Frecuentes (FAQ) -->
<div class="container mt-5">
  <div class="accordion" id="faqAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          ¿Qué es el test de vocación profesional?
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          Es una herramienta diseñada para ayudarte a descubrir qué áreas profesionales se alinean con tus intereses y habilidades. Solo tienes que responder unas simples preguntas.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          ¿Cuánto tiempo toma realizar el test?
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          El test toma aproximadamente 10 a 15 minutos. Es rápido y te proporciona una orientación precisa para tu futuro profesional.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          ¿Cómo se recomienda un área profesional?
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          El sistema analiza tus respuestas y te sugiere áreas profesionales basadas en tus intereses y habilidades. Cada recomendación está acompañada de las carreras relacionadas.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          ¿Puedo hacer el test varias veces?
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          Sí, puedes realizar el test cuantas veces desees. Sin embargo, se recomienda hacerlo solo cuando sientas que tus intereses han cambiado o si necesitas una nueva orientación.
        </div>
      </div>
    </div>

    <!-- Nueva sección con las preguntas y respuestas que solicitaste -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          ¿Cómo funciona el Test de Orientación Vocacional?
        </button>
      </h2>
      <div
        id="collapseFive"
        class="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          El test consiste en una serie de preguntas de opción múltiple que evaluarán tus intereses y aptitudes. Al final, recibirás una recomendación de áreas profesionales que podrían ser adecuadas para ti.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix"
        >
          ¿Es el test completamente gratuito?
        </button>
      </h2>
      <div
        id="collapseSix"
        class="accordion-collapse collapse"
        aria-labelledby="headingSix"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          Sí, el test es totalmente gratuito. Puedes tomarlo tantas veces como desees sin ningún costo.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSeven">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSeven"
          aria-expanded="false"
          aria-controls="collapseSeven"
        >
          ¿Cuánto tiempo lleva completar el test?
        </button>
      </h2>
      <div
        id="collapseSeven"
        class="accordion-collapse collapse"
        aria-labelledby="headingSeven"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          El test puede completarse en unos 10-15 minutos. Es rápido, pero te da resultados precisos y útiles.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingEight">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEight"
          aria-expanded="false"
          aria-controls="collapseEight"
        >
          ¿Los resultados son 100% precisos?
        </button>
      </h2>
      <div
        id="collapseEight"
        class="accordion-collapse collapse"
        aria-labelledby="headingEight"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          Los resultados del test se basan en tus respuestas y te ofrecen una orientación general. Sin embargo, siempre es recomendable complementar el test con otros factores como tu experiencia personal y preferencias.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingNine">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNine"
          aria-expanded="false"
          aria-controls="collapseNine"
        >
          ¿Puedo compartir los resultados con alguien?
        </button>
      </h2>
      <div
        id="collapseNine"
        class="accordion-collapse collapse"
        aria-labelledby="headingNine"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          Sí, puedes compartir los resultados con tus amigos, familiares o asesores vocacionales para recibir más orientación sobre tus opciones profesionales.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTen">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTen"
          aria-expanded="false"
          aria-controls="collapseTen"
        >
          ¿Qué debo hacer con los resultados del test?
        </button>
      </h2>
      <div
        id="collapseTen"
        class="accordion-collapse collapse"
        aria-labelledby="headingTen"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          Los resultados te darán una lista de áreas profesionales recomendadas. Puedes investigar más sobre esas áreas, hablar con profesionales del sector o realizar prácticas para obtener una mejor perspectiva.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingEleven">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEleven"
          aria-expanded="false"
          aria-controls="collapseEleven"
        >
          ¿Puedo tomar el test si ya he elegido una carrera?
        </button>
      </h2>
      <div
        id="collapseEleven"
        class="accordion-collapse collapse"
        aria-labelledby="headingEleven"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          ¡Claro! Incluso si ya tienes una idea de tu carrera, el test puede ayudarte a confirmar si realmente estás eligiendo lo que más te apasiona o si hay otras áreas de interés que te gustaría explorar.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwelve">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwelve"
          aria-expanded="false"
          aria-controls="collapseTwelve"
        >
          ¿Puedo hacer el test si no tengo idea de qué quiero estudiar?
        </button>
      </h2>
      <div
        id="collapseTwelve"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwelve"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          Sí, el test está diseñado justamente para ayudarte a identificar áreas profesionales que coinciden con tus intereses y habilidades, lo que puede orientarte incluso si no tienes claro lo que quieres estudiar.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Sección de contacto de la empresa -->
<section class="company-contact py-5">
  <div class="container text-center">
    <h3>Acerca de nosotros</h3>
    <p>Este sitio web fue desarrollado por <strong>Birbudevelopers S.A.</strong></p>
    <p>Nos especializamos en soluciones digitales para todos los ambitos.</p>

    <!-- Dirección de la empresa -->
    <div class="mb-3">
      <h5>Dirección de nuestras oficinas:</h5>
      <p>Av. Ballivian 1087, Green Tower, Piso 46, La Paz, Bolivia</p>
    </div>

    <!-- Número de contacto -->
    <div class="mb-3">
      <h5>Contáctanos:</h5>
      <p>Teléfono: <a href="tel:+59172036743">+591 72036743</a></p>
      <p>Email: <a href="mailto:sebastian.birbuet@ucb.edu.bo">sebastian.birbuet@ucb.edu.bo</a></p>
    </div>
  </div>
</section>


    </header>
  </template>
  
  <script>
  export default {
    name: "HomeView",
  };
  </script>
  
  <style scoped>
  /* Ajustes generales */
  .bg-customblue {
    background-color: #004173 !important; /* Azul oscuro */
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  
  .text-center {
    text-align: center;
  }
  
  /* Estilos del botón */
  .btn-start-test {
    background-color: #64b5f6;
    border: none;
    padding: 20px 60px;
    font-size: 1.25rem;
    font-weight: bold;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.2s;
    display: inline-block;
    text-align: center;
  }
  
  .btn-start-test:hover {
    background-color: #42a5f5;
    transform: scale(1.05);
  }
  
  /* Estilos específicos */
  header {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  
  h1 {
    font-size: calc(1.375rem + 1.5vw);
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    color: #ffffff;
  }
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: #ffffff;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  
/* Estilos para las tarjetas */
.card {
  border: none;
  border-radius: 1rem;
  background-color: #004173; /* Color azul del fondo */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

/* Estilos para el hover de las tarjetas */
.card:hover {
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.5); /* Resplandor suave al pasar el mouse */
}

  
  .card-body {
    text-align: center;
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #ffffff; /* Título en blanco */
  }
  
  .card-text {
    font-size: 1rem;
    color: #ffffff; /* Descripción en blanco */
  }
  
  .card:hover {
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.5); /* Resplandor suave al pasar el mouse */
  }
  
  /* Centrado de imágenes */
  .img-centered {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Título de Posibles Resultados */
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  }
  
  /* Estilo específico para "Preguntas y respuestas frecuentes" */
  .title-custom {
    text-transform: capitalize; /* Solo la primera letra en mayúsculas */
    font-size: 1.75rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
  
  /* Media Queries */
  @media (min-width: 1200px) {
    h1 {
      font-size: 3rem;
    }
  }

  .company-contact {
  background-color: #03203e; /* Ajusta este color si es diferente */
  color: white;
}

  </style>
  

