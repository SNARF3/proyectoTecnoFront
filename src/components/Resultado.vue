<template>
    <div class="resultado">
      <v-container fluid>
        <v-layout column align-center>
          <v-card elevation="10" class="pa-5 mt-5 animated-card" style="text-align: center;">
            <v-flex class="mb-3">
              <h1 class="titulo">¡Tú Deberías Estudiar!</h1>
              <h2 class="carrera">Ingeniería de Sistemas</h2>
              <p class="introduccion">
                La Ingeniería de Sistemas es una carrera que te prepara para desarrollar soluciones tecnológicas innovadoras,
                gestionando sistemas de información, optimizando procesos y garantizando la calidad en la entrega de
                servicios.
              </p>
              <p class="acreditaciones">
                Acreditada por el Sistema de la Universidad Boliviana SUB<br />
                Acreditada por el Instituto Internacional para el Aseguramiento de la Calidad IAC CINDA
              </p>
            </v-flex>
  
            <v-divider></v-divider>
  
            <v-flex class="mb-4">
              <h3 class="subtitulo">Malla Curricular - 9 Semestres</h3>
              <img src="@/assets/sis.jpg" alt="Malla Curricular" class="malla-curricular" />
            </v-flex>
  

            <v-flex class="mb-4">
              <h3 class="subtitulo">Áreas de Estudio</h3>
              <v-list>
                <v-list-item v-for="area in areasEstudio" :key="area.nombre">
                  <v-list-item-content>
                    <v-list-item-title>{{ area.nombre }}</v-list-item-title>
                    <v-list-item-subtitle>{{ area.descripcion }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
  
            <v-flex class="mb-4">
              <h3 class="subtitulo">Modalidades de Graduación</h3>
              <v-list>
                <v-list-item v-for="modalidad in modalidades" :key="modalidad.nombre">
                  <v-list-item-content>
                    <v-list-item-title>{{ modalidad.nombre }}</v-list-item-title>
                    <v-list-item-subtitle>{{ modalidad.descripcion }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
  
            <v-flex class="mb-4">
              <h3 class="subtitulo">Beneficios de Estudiar esta Carrera en la U.C.B.</h3>
              <v-list>
                <v-list-item v-for="beneficio in beneficios" :key="beneficio.nombre">
                  <v-list-item-content>
                    <v-list-item-title>{{ beneficio.nombre }}</v-list-item-title>
                    <v-list-item-subtitle>{{ beneficio.descripcion }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
  
            <v-flex class="mb-4">
              <h3 class="subtitulo">¿Dónde Podrás Trabajar?</h3>
              <v-list>
                <v-list-item v-for="trabajo in trabajos" :key="trabajo">
                  <v-list-item-content>
                    <v-list-item-title>{{ trabajo }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
  
            <v-flex class="mb-4">
              <h3 class="subtitulo">Directores y Docentes</h3>
              <div v-for="docente in docentes" :key="docente.nombre" class="docente-info">
                <p><strong>{{ docente.nombre }}</strong><br />{{ docente.titulo }}<br />{{ docente.correo }}</p>
              </div>
            </v-flex>
  
            <v-flex class="mb-4">
              <h3 class="subtitulo">Atención de Dirección de Carrera</h3>
              <p>
                Av. 14 de Septiembre N°4807, Obrajes.<br />
                Facultad de Ingeniería, Bloque G.<br />
                Horarios de atención: de miércoles a viernes de 8:30 a 16:00<br />
                Contactos: 2782222<br />
                2812 Secretaria | 2811 Dirección
              </p>
            </v-flex>
  
            <v-flex class="mb-4">
              <h3 class="subtitulo">Descarga Información Adicional</h3>
              <img src="@/assets/images.png" alt="Información Adicional" class="informacion-adicional" />
            </v-flex>
  
            <v-flex>
              <v-btn color="primary" @click="volver" class="animated-button">Volver a la Página Principal</v-btn>
            </v-flex>
          </v-card>
        </v-layout>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "Resultado",
    data() {
      return {
        areasEstudio: [
          { nombre: "Tecnologías de la Información y Comunicación", descripcion: "Estudia la gestión y desarrollo de tecnologías aplicadas." },
          { nombre: "Optimización de Sistemas de Información", descripcion: "Mejora el rendimiento de sistemas para eficientizar procesos." },
          { nombre: "Inteligencia Artificial y Ramas Afines", descripcion: "Desarrolla algoritmos y aplicaciones inteligentes." },
          { nombre: "Redes de Computadores", descripcion: "Gestiona y establece redes para la comunicación efectiva." },
        ],
        modalidades: [
          { nombre: "Graduación por Excelencia", descripcion: "Reconocimiento por el alto rendimiento académico." },
          { nombre: "Tesis de Grado", descripcion: "Investigación y defensa de un proyecto final." },
          { nombre: "Trabajo Dirigido", descripcion: "Desarrollo de un proyecto bajo supervisión." },
          { nombre: "Proyecto de Grado", descripcion: "Ejercicio práctico aplicando los conocimientos adquiridos." },
          { nombre: "Graduación por Diplomado", descripcion: "Formación especializada complementaria." },
        ],
        beneficios: [
          { nombre: "Carrera Acreditada", descripcion: "Certificación de calidad en la educación." },
          { nombre: "Mercado Laboral Creciente", descripcion: "Alta demanda de profesionales en el campo." },
          { nombre: "Demanda de TICs Creciente en un Mercado Globalizado", descripcion: "Oportunidades a nivel internacional." },
          { nombre: "Laboratorios Especializados", descripcion: "Instalaciones modernas para la práctica profesional." },
          { nombre: "200 Horas de Prácticas Guiadas", descripcion: "Experiencia real en el campo laboral." },
          { nombre: "Práctica Profesional Garantizada", descripcion: "Asistencia para encontrar una práctica adecuada." },
        ],
        trabajos: [
          "Empresas públicas y privadas con sistemas de información computacional.",
          "Empresas de producción de software.",
          "Emprendimientos propios en el desarrollo de software.",
          "Consultorías como programador, analista de sistemas, entre otros.",
        ],
        docentes: [
          { nombre: "Msc. Orlando Rivera Jurado", titulo: "Director de Carrera", correo: "orivera@ucb.edu.bo" },
          { nombre: "Msc. Oswaldo Figueroa Domejean", titulo: "Docente Tiempo Completo", correo: "ofigueroa@ucb.edu.bo" },
          { nombre: "Mgr. Lourdes Eulalia Peredo Quiroga", titulo: "Docente Tiempo Completo", correo: "lperedo.q@ucb.edu.bo" },
          { nombre: "MSc. Ángel Ávila Maceda", titulo: "Docente Tiempo Completo", correo: "aavila@ucb.edu.bo" },
        ],
      };
    },
    methods: {
      volver() {
        this.$router.push('/'); // Cambia a la ruta de la página principal
      }
    }
  };
  </script>
  
  <style scoped>
  .resultado {
    margin-top: 50px;
    transition: transform 0.3s ease-in-out;
  }
  
  .animated-card {
    transform: translateY(10px);
    animation: fadeIn 0.5s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .titulo {
    font-weight: bold;
    font-size: 40px; /* Aumentado tamaño del título */
    color: #fff; /* Cambiado a blanco */
    background-color: #083a63; /* Fondo oscuro para resaltar */
    padding: 10px; /* Espaciado interior */
    border-radius: 5px; /* Bordes redondeados */
  }
  
  .carrera {
    font-size: 36px; /* Aumentado tamaño del subtítulo */
    color: #fff; /* Cambiado a blanco */
    background-color: #083a63; /* Fondo oscuro para resaltar */
    padding: 10px; /* Espaciado interior */
    border-radius: 5px; /* Bordes redondeados */
  }
  
  .introduccion {
    font-size: 20px; /* Tamaño del texto de introducción */
    color: #333; /* Color oscuro */
    margin: 10px 0;
  }
  
  .acreditaciones {
    font-size: 16px;
    color: #333; /* Color oscuro */
  }
  
  .subtitulo {
    font-size: 28px; /* Tamaño de los subtítulos */
    color: #fff; /* Cambiado a blanco */
    background-color: #083a63; /* Fondo oscuro para resaltar */
    padding: 10px; /* Espaciado interior */
    border-radius: 5px; /* Bordes redondeados */
    margin-top: 20px;
  }
  
  .duracion {
    font-size: 20px;
    color: #333; /* Color oscuro */
  }
  
  .docente-info {
    margin: 10px 0;
  }
  
  .malla-curricular {
    max-width: 80%; /* Asegura que la imagen no exceda el ancho de su contenedor */
    height: auto; /* Mantiene la proporción de la imagen */
    margin-top: 20px; /* Espaciado superior si es necesario */
  }
  
  .informacion-adicional {
    margin-top: 15px;
    width: 200px; /* Ajustar el tamaño según tus necesidades */
  }
  
  /* Centrar el contenido */
  .text-center {
    text-align: center;
  }
  </style>
  