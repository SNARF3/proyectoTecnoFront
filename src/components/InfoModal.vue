<template>
    <div class="container mt-5">
        <v-layout justify-center class="layout-background">
            <v-flex xs12 sm10 md8 lg6 xl5> <!-- Cambié sm8 a sm10, md6 a md8, etc. para hacer el contenedor más ancho -->
                <v-card class="pa-5 shadow-lg card-container">
                    <h2 class="text-center mb-4">{{ usuario.nombres }} {{ usuario.apellidos }}</h2>
                    <p class="text-center"><strong>Email:</strong> {{ usuario.email }}</p>

                    <h3 class="mt-4 section-title text-center">Intereses</h3>
                    <v-list>
                        <v-list-item v-for="interes in usuario.intereses" :key="interes.id">
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold text-center">{{ interes.descripcion }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <h3 class="mt-4 section-title text-center">Respuestas</h3>
                    <v-list>
                        <v-list-item v-for="pregunta in usuario.prueba.preguntas" :key="pregunta.id" class="border-bottom py-3">
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold text-center">{{ pregunta.contenido }}</v-list-item-title>
                                <v-list-item-subtitle class="text-center">{{ pregunta.respuesta.descripcion }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'InfoModal',
    data() {
        return {
            usuario: {} // Inicializamos el objeto usuario
        };
    },
    async created() {
        const id = this.$route.params.id; // Obtenemos el ID de los parámetros de la ruta
        await this.obtenerUsuario(id); // Llamamos a la función para obtener los datos
    },
    methods: {
        async obtenerUsuario(id) {
            try {
                const response = await axios.get(`http://localhost:8000/usuario/obtener/datos/${id}`);
                this.usuario = response.data; // Asignamos los datos a la propiedad usuario
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        }
    }
};
</script>

<style scoped>
/* Estilo general del contenedor */
.container {
    max-width: 100%; /* Ancho total */
    margin: auto;
    padding: 0 15px;
    text-align: center; /* Centrar todos los textos */
}

/* Fondo del layout */
.layout-background {
    background-color: #1a3c7d; /* Fondo azul */
    color: white; /* Texto blanco */
    padding: 20px 0;
    text-align: center; /* Centrar todo dentro del layout */
}

/* Estilo de la tarjeta */
.v-card {
    border-radius: 20px;
    background-color: #f4f4f4; /* Fondo suave */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 30px; /* Ajuste del padding para un mejor espaciado */
    width: 100% !important;
}

/* Efecto al pasar el mouse sobre la tarjeta */
.v-card:hover {
    transform: translateY(-10px); /* Levantar un poco la tarjeta */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
}

/* Títulos principales */
h2 {
    color: #1a3c7d !important; /* Azul oscuro */
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center; /* Centrar texto */
}

/* Títulos de secciones */
h3 {
    color: #1a3c7d !important; /* Azul oscuro */
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center; /* Centrar texto */
}

/* Títulos de las secciones (con borde en la parte inferior) */
.section-title {
    color: #1a3c7d; /* Azul oscuro */
    border-bottom: 2px solid #1a3c7d;
    padding-bottom: 5px;
    margin-bottom: 15px;
    text-align: center; /* Centrar título */
}

/* Estilo de las listas */
.v-list-item {
    border-radius: 10px;
    padding: 15px; /* Ajuste del padding para mayor espacio */
    transition: background-color 0.3s ease;
    min-height: 80px; /* Asegurar que haya suficiente espacio para los textos */
}

/* Efecto al pasar el mouse sobre los ítems de la lista */
.v-list-item:hover {
    background-color: #e9f1fa; /* Fondo azul claro al hacer hover */
}

/* Títulos dentro de la lista */
.v-list-item-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a3c7d; /* Azul oscuro */
    text-align: left; /* Alineación izquierda para el contenido de la pregunta */
    white-space: normal; /* Permitir que el texto se ajuste dentro del contenedor */
}

/* Subtítulos dentro de la lista */
.v-list-item-subtitle {
    font-size: 1rem;
    color: #6c757d; /* Gris claro */
    text-align: left; /* Alineación izquierda para la respuesta */
    white-space: normal; /* Permitir que el texto se ajuste dentro del contenedor */
}

/* Ajuste de padding para los ítems de la lista */
.py-3 {
    padding-top: 15px;
    padding-bottom: 15px;
}

/* Añadir espacio adicional para las respuestas */
.v-list-item-content {
    word-wrap: break-word; /* Evitar que las respuestas se corten */
    overflow-wrap: break-word; /* Romper las palabras largas que no caben en el contenedor */
}
</style>
