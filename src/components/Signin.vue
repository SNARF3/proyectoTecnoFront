<template>
    <div class="signin">
        <v-container fluid>
            <v-layout row justify-center>
                <v-flex xs12 sm6 md4>
                    <v-card elevation="5" class="pa-5">
                        <v-flex class="text-xs-center" mb-3>
                            <h1>Sign In</h1>
                        </v-flex>
                        <form @submit.prevent="validateLogin">
                            <v-layout column>
                                <v-flex>
                                    <v-text-field v-model="email" name="email" label="Email" id="email" type="email"
                                        required :error-messages="emailError"></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field v-model="password" name="password" label="Password" id="password"
                                        type="password" required :error-messages="passwordError"></v-text-field>
                                </v-flex>
                                <v-flex class="text-xs-center" mt-4>
                                    <!-- Usamos el componente pbutton -->
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
}

.v-card {
    max-width: 200%;
    border-radius: 10px;
}
</style>
