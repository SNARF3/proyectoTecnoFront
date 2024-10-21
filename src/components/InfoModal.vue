<template>
    <div class="container mt-5">
        <v-layout justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="pa-5 shadow-sm">
                    <h2 class="text-center mb-4">{{ usuario.nombres }} {{ usuario.apellidos }}</h2>
                    <p class="text-center"><strong>Email:</strong> {{ usuario.email }}</p>

                    <h3 class="mt-4">Intereses</h3>
                    <v-list>
                        <v-list-item v-for="interes in usuario.intereses" :key="interes.id">
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold">{{ interes.descripcion }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <h3 class="mt-4">Respuestas</h3>
                    <v-list>
                        <v-list-item v-for="pregunta in usuario.prueba.preguntas" :key="pregunta.id" class="border-bottom py-2">
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold">{{ pregunta.contenido }}</v-list-item-title>
                                <v-list-item-subtitle>{{ pregunta.respuesta.descripcion }}</v-list-item-subtitle>
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
.container {
    max-width: 100%;
    margin: auto; /* Centra el contenedor */
}

.v-card {
    border-radius: 15px; /* Bordes redondeados para el card */
    background-color: #f8f9fa; /* Fondo claro */
}

h2 {
    color: #0056b3; /* Color azul para el título */
}

h3 {
    color: #343a40; /* Color gris oscuro para subtítulos */
}

.border-bottom {
    border-bottom: 1px solid #dee2e6; /* Línea debajo de las respuestas */
}
</style>
