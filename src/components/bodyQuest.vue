<template>
    <div class="container1">
        <h1>Prueba {{ info.id }}</h1>
        <h3>{{ info.instrucciones }}</h3>
        <div>
            <Tarjeta/>
        </div>
    </div>
    
</template>

<script >
import Tarjeta from './Tarjeta.vue';
import axios from 'axios';

export default{
    name:'bodyQuest',
    components:{
        Tarjeta,
    },
    data(){
        return {
            info: {}
        }
    },
    mounted() {
        this.obtenerDatos();
    },
    methods: {
        async obtenerDatos() {
            try {
                const respuesta = await axios.get("http://localhost:8000/prueba/obtener/1");
                if (respuesta.data && respuesta.data.salida) {
                    this.info = {
                        id: respuesta.data.id,
                        instrucciones: respuesta.data.instrucciones
                    };
                } else {
                    console.error("No se pudo obtener los datos correctamente.");
                }
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
    }

    
}
</script>

<style>
.container1 {
    margin-top: 2rem; 
    padding: 2rem; 
    border: 1px solid #ddd;
    border-radius: 20px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    background-color: #0f3552; 
}

h1, h3 {
    text-align: center; 
    margin-bottom: 1rem;
    color: white !important; 
}
</style>