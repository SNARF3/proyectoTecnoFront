<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div v-for="pregunta in preguntas" :key="pregunta.id" class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">{{ pregunta.id }}. {{ pregunta.contenido }}</h5>
                        <div v-for="opcion in pregunta.opciones" :key="opcion.id" class="mb-2">
                            <label class="checkboxd" :class="{ clicked: isSelected(pregunta.id, opcion.id) }">
                                <input 
                                    type="checkbox" 
                                    :value="opcion.id"
                                    :checked="isSelected(pregunta.id, opcion.id)"
                                    @change="handleSelect(pregunta.id, opcion.id, $event)"
                                    hidden
                                />
                                {{ `${opcion.inciso}.${opcion.descripcion}` }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnxd">
            <pbutton name="Enviar" @click="enviarRespuestas" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import pbutton from "./pbutton.vue";

export default {
    name: "Tarjeta",
    components: {
        pbutton,
    },
    data() {
        return {
            preguntas: [],
            seleccionadas: {}  // Objeto para almacenar las respuestas seleccionadas
        };
    },
    mounted() {
        this.obtenerPreguntas();
    },
    methods: {
        async obtenerPreguntas() {
            try {
                const respuesta = await axios.get("http://localhost:8000/prueba/obtener/1");
                if (respuesta.data && respuesta.data.preguntas) {
                    this.preguntas = respuesta.data.preguntas;
                } else {
                    console.error("No se pudo obtener las preguntas correctamente.");
                }
            } catch (error) {
                console.error("Error al obtener las preguntas:", error);
            }
        },
        handleSelect(preguntaId, opcionId, event) {
            if (event.target.checked) {
                this.$set(this.seleccionadas, preguntaId, opcionId);
            } else {
                if (this.seleccionadas[preguntaId] === opcionId) {
                    this.$delete(this.seleccionadas, preguntaId);
                }
            }
        },
        isSelected(preguntaId, opcionId) {
            return this.seleccionadas[preguntaId] === opcionId;
        },
        async enviarRespuestas() {
            const respuestas = Object.values(this.seleccionadas);
            const data = {
                usuario: 8,  // Cambiar por el ID del usuario si lo tienes disponible
                respuestas: respuestas
            };

            try {
                const respuesta = await axios.post("http://localhost:8000/respuesta/ingresar", data);
                console.log("Respuestas enviadas:", respuesta.data);
                
                // Notificación de éxito con Swal
                Swal.fire({
                    icon: 'success',
                    title: 'Respuestas enviadas',
                    text: 'Las respuestas fueron enviadas correctamente.',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    // Redirigir al inicio
                    this.$router.push('/');
                });
            } catch (error) {
                console.error("Error al enviar las respuestas:", error);

                // Notificación de error con Swal
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al enviar las respuestas. Por favor, inténtalo de nuevo.',
                    confirmButtonText: 'Aceptar'
                });
            }
        }
    }
};
</script>

<style scoped>
.container {
    margin-top: 2rem; /* Espaciado superior */
}
.btnxd {
    width: 50%;
    margin-left: 25%;
}
.card {
    padding: 1rem;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    border-radius: 20px;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.checkboxd {
    color: rgb(0, 131, 213) !important;
    text-transform: uppercase !important;
    text-decoration: none !important;
    border: 2px solid rgb(0, 131, 213) !important;
    padding: 10px 20px !important;
    font-size: 17px !important;
    cursor: pointer !important;
    font-weight: bold !important;
    background: transparent !important;
    position: relative !important;
    transition: all 0.5s !important;
    overflow: hidden !important;
    align-items: center;
    width: 100%;
    display: inline-block; /* Asegura que el label se comporte como un bloque */
}

.checkboxd:hover {
    background-color: rgba(0, 131, 213, 0.1); /* Cambiar el color de fondo al pasar el mouse */
}

.checkboxd.clicked {
    background-color: rgb(1, 131, 53) !important;
    color: white !important;
    border-color: rgb(1, 131, 53) !important;
}
</style>
