<template>
    <div class="signin">
        <v-container fluid>
            <v-layout row justify-center>
                <v-flex xs12 sm6 md4>
                    <v-card elevation="5" class="pa-5">
                        <v-flex class="text-xs-center mb-3">
                            <h1 class="xd">Iniciar Sesión</h1>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <form @submit.prevent="validateLogin">
                            <v-layout column>
                                <v-flex class="mb-4">
                                    <v-text-field
                                        v-model="email"
                                        name="email"
                                        label="Email"
                                        id="email"
                                        type="email"
                                        required
                                        :error-messages="emailError"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex class="mb-4">
                                    <v-text-field
                                        v-model="password"
                                        name="password"
                                        label="Contraseña"
                                        id="password"
                                        type="password"
                                        required
                                        :error-messages="passwordError"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex class="text-xs-center mt-4">
                                    <pbutton name="Iniciar Sesión" />
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import pbutton from '@/components/pbutton.vue';
import axios from 'axios';

export default {
    name: "signin",
    components: {
        pbutton
    },
    data() {
        return {
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        };
    },
    methods: {
        async validateLogin() {
            // Reseteamos los errores
            this.emailError = "";
            this.passwordError = "";

            // Validamos que el correo tenga un formato correcto y que la contraseña no esté vacía
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.email)) {
                this.emailError = "Por favor ingrese un email válido.";
            }
            if (this.password.trim() === "") {
                this.passwordError = "La contraseña no puede estar vacía.";
            }

            // Si ambos son correctos
            if (!this.emailError && !this.passwordError) {
                try {
                    // Enviamos la solicitud a la nueva API con el correo y la contraseña
                    const response = await axios.post('http://localhost:8000/usuario/validar', {
                        email: this.email,
                        contrasena: this.password
                    });
                    
                    // Procesamos la respuesta
                    if (response.data.salida) {
                        alert("Login correcto");
                        // Redirigir a Usuarios.vue
                        this.$router.push('/usuarios'); // Asegúrate de que '/usuarios' sea la ruta correcta
                    } else {
                        this.emailError = response.data.mensaje;
                    }
                } catch (error) {
                    console.error("Error al validar usuario:", error);
                    if (error.response) {
                        // Mostrar mensaje de error específico si existe
                        this.emailError = error.response.data.mensaje || "Error al verificar el usuario.";
                    } else {
                        this.emailError = "Error al verificar el usuario.";
                    }
                }
            }
        }
    }
};
</script>

<style scoped>
.signin {
    margin-top: 250px;
    border-radius: 20px;
}

.mb-4 {
    margin-bottom: 1.5rem;
}

.mt-4 {
    margin-top: 1.5rem;
}

.v-card {
    max-width: 200%;
    border-radius: 20px !important;
}

.xd {
    color: #083a63 !important;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 50px;
}
</style>
