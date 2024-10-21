<template>
    <div class="containerxd">
        <v-layout justify-center class="layout-background">
            <v-flex class="containerxd"> 
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
                <pbutton name="Aceptar" @click="Volver"></pbutton>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import axios from 'axios';
import pbutton from '@/components/pbutton.vue';
export default {
    name: 'InfoModal',
    data() {
        return {
            usuario: {}
        };
    },
    async created() {
        const id = this.$route.params.id; 
        await this.obtenerUsuario(id); 
    },
    methods: {
        async obtenerUsuario(id) {
            try {
                const response = await axios.get(`http://localhost:8000/usuario/obtener/datos/${id}`);
                this.usuario = response.data; 
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        },
        Volver(){
            this.$router.push({name: 'Usuarios'});
        }
    },
    components:{
        pbutton,
    }
};
</script>

<style scoped>

.containerxd {
    max-width: 100%; 
    padding: 0 15px;
    text-align: center; 
}


.layout-background {
    background-color: #1a3c7d;
    color: white;
    padding: 20px 0;
    text-align: center; 
    border-radius: 20px;
}

.v-card {
    border-radius: 20px;
    background-color: #f4f4f4; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 30px; 
    width: 100% !important;
}

.v-card:hover {
    transform: translateY(-10px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h2 {
    color: #1a3c7d !important; 
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center; 
}

h3 {
    color: #1a3c7d !important; 
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center;
}

.section-title {
    color: #1a3c7d; 
    border-bottom: 2px solid #1a3c7d;
    padding-bottom: 5px;
    margin-bottom: 15px;
    text-align: center; 
}

.v-list-item {
    border-radius: 10px;
    padding: 15px;
    transition: background-color 0.3s ease;
    min-height: 80px;
}

.v-list-item:hover {
    background-color: #e9f1fa; 
}

.v-list-item-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a3c7d;
    text-align: left; 
    white-space: normal; 
}
.v-list-item-subtitle {
    font-size: 1rem;
    color: #6c757d; 
    text-align: left; 
    white-space: normal; 
}

.py-3 {
    padding-top: 15px;
    padding-bottom: 15px;
}

.v-list-item-content {
    word-wrap: break-word; 
    overflow-wrap: break-word; 
}
</style>
