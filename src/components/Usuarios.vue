<template>
    <div class="usuarios">
        <v-container fluid>
            <v-layout row justify-center>
                <v-flex xs12 sm10 md8>
                    <v-card elevation="5" class="pa-5">
                        <v-flex class="text-xs-center mb-4">
                            <h1 class="xd">Usuarios que Respondieron la Encuesta</h1>
                        </v-flex>
                        <v-data-table
                            :headers="headers"
                            :items="usuarios"
                            :loading="loading"
                            class="elevation-1"
                            hide-default-footer
                            :style="{ maxHeight: '400px', overflowY: 'auto' }"
                        >
                            <template v-slot:item.accion="{ item }">
                                <v-btn color="primary" @click="verMas(item.id)">
                                    Más
                                </v-btn>
                            </template>

                            <template v-slot:no-data>
                                <v-alert type="info">
                                    No se encontraron usuarios.
                                </v-alert>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Usuarios",
    data() {
        return {
            loading: true,
            usuarios: [],
            headers: [
                { text: 'Nombre', value: 'nombre' },
                { text: 'Email', value: 'email' },
                { text: 'Acción', value: 'accion', sortable: false }
            ]
        };
    },
    created() {
        this.obtenerUsuarios();
    },
    methods: {
        async obtenerUsuarios() {
            try {
                const response = await axios.get('http://localhost:8000/usuario/obtener');
                this.usuarios = response.data.map(usuario => ({
                    id: usuario.id,
                    nombre: `${usuario.nombres} ${usuario.apellidos}`,
                    email: usuario.email
                }));
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            } finally {
                this.loading = false;
            }
        },
        verMas(id) {
            this.$router.push(`/usuarios/datos/${id}`);
        }
    }
};
</script>

<style scoped>
.usuarios {
    margin-top: 50px;
}

.xd {
    color: #083a63 !important;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 30px;
}
</style>
