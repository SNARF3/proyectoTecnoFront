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
                                <v-flex class="mb-4"> <!-- Añadir margen inferior -->
                                    <v-text-field v-model="email" name="email" label="Email" id="email" type="email"
                                        required :error-messages="emailError"></v-text-field>
                                </v-flex>
                                <v-flex class="mb-4"> <!-- Añadir margen inferior -->
                                    <v-text-field v-model="password" name="password" label="Password" id="password"
                                        type="password" required :error-messages="passwordError"></v-text-field>
                                </v-flex>
                                <v-flex class="text-xs-center mt-4"> <!-- Añadir margen superior -->
                                    <pbutton name="Sign In" />
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
        validateLogin() {
            // Reseteamos los errores
            this.emailError = "";
            this.passwordError = "";

            // Validamos correo y contraseña
            if (this.email !== "admin@gmail.com") {
                this.emailError = "Email incorrecto.";
            }
            if (this.password !== "admin") {
                this.passwordError = "Contraseña incorrecta.";
            }

            // Si ambos son correctos
            if (!this.emailError && !this.passwordError) {
                alert("Login correcto");
                // Aquí puedes redirigir a otra página o realizar alguna acción adicional
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
    /* Añadir más espacio entre campos */
}

.mt-4 {
    margin-top: 1.5rem;
    /* Añadir más espacio antes del botón */
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
