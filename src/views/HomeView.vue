<template>
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
  
        <!-- Botón -->
        <div class="text-center mt-4 mt-lg-5">
          <pbutton class="btnxd" name="Empezar el test" />
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import pbutton from '@/components/pbutton.vue';
  export default {
    name: 'HomeView',
    components: {
      pbutton,
    },
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
  
  .btnxd {
    width: 100%;
  }
  
  /* Estilos específicos */
  header {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  
  h1 {
    font-size: calc(1.375rem + 1.5vw);
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    color: #ffffff; /* Título en blanco */
  }
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: #ffffff; /* Texto blanco */
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
  
  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
  
  @media (max-width: 991px) {
    .col-lg-4 {
      display: none;
    }
  }
  </style>
  