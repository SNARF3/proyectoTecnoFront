<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div v-for="pregunta in preguntas" :key="pregunta.id" class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">{{ pregunta.contenido }}</h5>
                        <p class="card-text">Tipo: {{ pregunta.tipo }}</p>
                        <div v-for="opcion in pregunta.opciones" :key="opcion.id" class="mb-2">
                            <pbuttonquest :name="opcion.descripcion"></pbuttonquest>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import pbuttonquest from "./pbuttonquest.vue";

export default {
    name: "Tarjeta",
    components: {
        pbuttonquest
    },
    data() {
        return {
            preguntas: [] // Aquí se almacenarán las preguntas recibidas de la API
        };
    },
    mounted() {
        this.obtenerPreguntas();
    },
    methods: {
        async obtenerPreguntas() {
            try {
                const respuesta = await axios.get("http://localhost:8000/prueba/obtener/1");
                if (respuesta.data && respuesta.data.salida) {
                    this.preguntas = respuesta.data.preguntas;
                } else {
                    console.error("No se pudo obtener las preguntas correctamente.");
                }
            } catch (error) {
                console.error("Error al obtener las preguntas:", error);
            }
        }
    }
};
</script>

<style scoped>
.container {
    margin-top: 2rem; /* Espaciado superior */
}

.card {
    padding: 1rem;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
