<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title>
                        <span class="headline">Lista de Usuarios</span>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="usuarios" class="elevation-1" :items-per-page="5">
                        <template v-slot:item.nombres="{ item }">
                            <strong>{{ item.nombres }}</strong>
                        </template>
                        <template v-slot:item.apellidos="{ item }">
                            <strong>{{ item.apellidos }}</strong>
                        </template>
                        <template v-slot:item.email="{ item }">
                            {{ item.email }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: 'tableusers',
    data() {
        return {
            usuarios: [],
            headers: [
                { text: "ID", value: "id" },
                { text: "Nombres", value: "nombres" },
                { text: "Apellidos", value: "apellidos" },
                { text: "Email", value: "email" },
            ],
        };
    },
    mounted() {
        this.obtenerUsuarios();
    },
    methods: {
        async obtenerUsuarios() {
            try {
                const response = await axios.get("http://localhost:8000/usuario/obtener");
                this.usuarios = response.data;
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        },
    },
};
</script>

<style scoped>
.headline {
    font-weight: bold;
    color: #0083d5;
}
</style>