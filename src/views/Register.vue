<template> 
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="styled-card">
            <h1 class="custom-title">Registro de Usuario</h1>
            <v-card-subtitle class="subtitle-text">
              Completa los siguientes campos para iniciar el Test.
            </v-card-subtitle>
  
            <v-form v-model="formValid" ref="form">
              <v-text-field
                v-model="nombres"
                label="Nombres"
                :rules="[v => !!v || 'Este campo es obligatorio']"
                outlined
                background-color="white"
                class="input-field"
              ></v-text-field>
  
              <v-text-field
                v-model="apellidos"
                label="Apellidos"
                :rules="[v => !!v || 'Este campo es obligatorio']"
                outlined
                background-color="white"
                class="input-field"
              ></v-text-field>
  
              <v-text-field
                v-model="correo"
                label="Correo Electrónico"
                :rules="[v => !!v || 'Este campo es obligatorio', v => /.+@.+\..+/.test(v) || 'El correo no es válido']"
                outlined
                background-color="white"
                class="input-field"
              ></v-text-field>
  
              <v-row no-gutters align="center">
                <v-col>
                  <v-text-field
                    v-model="contrasena"
                    label="Contraseña"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="[v => !!v || 'Este campo es obligatorio', v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres']"
                    outlined
                    background-color="white"
                    class="input-field"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-btn
                    icon
                    @click="togglePasswordVisibility"
                    :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                    class="password-btn"
                    color="primary"
                  >
                    <v-icon>{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
  
              <v-btn
                :disabled="!formValid"
                :loading="loading"
                color="primary"
                @click="irABodyQuest"
                block
                class="submit-btn"
              >
                <span class="white--text">Siguiente</span>
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        nombres: '',
        apellidos: '',
        correo: '',
        contrasena: '',
        formValid: false,
        showPassword: false,
        loading: false,
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      irABodyQuest() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$router.push({ path: '/preguntas' });
        }, 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  .styled-card {
    max-width: 600px;
    margin: 0 auto;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1), 
                0 30px 60px rgba(0, 0, 0, 0.12),
                0 0 100px rgba(8, 58, 99, 0.1);
    background-color: white !important;
    backdrop-filter: blur(10px);
  }
  
  .custom-title {
    font-weight: 900 !important;
    color: #083a63 !important;
    margin-bottom: 16px;
    font-size: 2.5rem !important; /* Aumento de tamaño de fuente */
    text-align: center;
  }
  
  .subtitle-text {
    color: #083a63 !important;
    margin-bottom: 32px;
    font-style: italic;
    text-align: center;
    opacity: 0.8;
    font-size: 1.25rem !important; /* Aumento de tamaño de fuente */
  }
  
  .input-field {
    margin-bottom: 24px;
  }
  
  .input-field :deep(.v-input__slot) {
    background-color: white !important;
    border: none !important; /* Elimina el borde blanco */
  }
  
  .input-field :deep(input) {
    color: #083a63 !important;
  }
  
  .input-field :deep(.v-label) {
    color: rgba(8, 58, 99, 0.6) !important;
  }
  
  .password-btn {
    margin-left: 10px;
    color: #083a63;
    margin-top: -35px;
  }
  
  .submit-btn {
    margin-top: 24px;
    font-weight: bold;
    height: 48px;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #083a63 !important;
    box-shadow: 0 4px 15px rgba(8, 58, 99, 0.2);
  }
  
  .submit-btn:hover {
    opacity: 0.9;
    box-shadow: 0 6px 20px rgba(8, 58, 99, 0.3);
  }
  
  .submit-btn[disabled] {
    background-color: #a0c4ff !important; /* Azul claro */
    box-shadow: none;
    cursor: not-allowed;
  }
  
  .white-text {
    color: white !important;
  }

  body {
  background-image: url('../assets/home.png'); /* Reemplaza con la ruta de tu imagen */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin: 0;
  height: 100vh; /* Asegura que el fondo cubra toda la altura */
}

  </style>
  