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
                                    <!-- Usa v-btn y aplica tu clase personalizada "btn" -->
                                    <v-btn class="btn" type="submit" block>Sign In</v-btn>
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
export default {
    name: "signin",
    data() {
        return {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
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
        },
    },
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

.btn {
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
    transition: all 1s !important;
    overflow: hidden !important;
}

.btn:hover {
    color: white;
}

.btn::before {
    content: "" !important;
    position: absolute !important;
    height: 100% !important;
    width: 0% !important;
    top: 0 !important;
    left: -40px !important;
    transform: skewX(45deg) !important;
    background-color: rgb(0, 131, 213)!important;
    z-index: -1 !important;
    transition: all 1s !important;
}

.btn:hover::before {
    width: 160% !important;
}

</style>