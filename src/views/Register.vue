<template>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" lg="4">
          <v-card class="styled-card">
            <v-card-title class="text-h5">Registro de Usuario</v-card-title>
            <v-card-subtitle>
              Completa los siguientes campos para iniciar el Test.
            </v-card-subtitle>
  
            <v-form v-model="formValid" ref="form">
              <v-text-field
                v-model="nombres"
                label="Nombres"
                :rules="[v => !!v || 'Este campo es obligatorio']"
                outlined
              ></v-text-field>
  
              <v-text-field
                v-model="apellidos"
                label="Apellidos"
                :rules="[v => !!v || 'Este campo es obligatorio']"
                outlined
              ></v-text-field>
  
              <v-text-field
                v-model="correo"
                label="Correo Electrónico"
                :rules="[v => !!v || 'Este campo es obligatorio', v => /.+@.+\..+/.test(v) || 'El correo no es válido']"
                outlined
              ></v-text-field>
  
              <v-text-field
                v-model="contrasena"
                label="Contraseña"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="showPassword = !showPassword"
                :rules="[
                  v => !!v || 'Este campo es obligatorio', 
                  v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
                ]"
                outlined
              >
                <!-- Botón para alternar la visibilidad de la contraseña -->
                <template v-slot:append>
                  <v-btn
                    icon
                    @click="togglePasswordVisibility"
                    :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                  >
                    <v-icon>{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
  
              <v-btn
                :disabled="!formValid"
                :loading="loading"
                color="primary"
                @click="irABodyQuest"
                block
              >
                Siguiente
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
        loading: false, // Estado para indicador de carga
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword; // Alterna la visibilidad de la contraseña
      },
      irABodyQuest() {
        this.loading = true; // Mostrar indicador de carga
        setTimeout(() => {
          this.loading = false; // Ocultar indicador de carga
          this.$router.push({ path: '/preguntas' });
        }, 1000); // Simulación de espera
      },
    },
  };
  </script>
  
  <style scoped>
  .styled-card {
    max-width: 400px;
    margin: 0 auto;
    background-color: #e3f2fd; /* Azul claro */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .v-card-title {
    font-weight: bold;
    color: #0d47a1; /* Azul oscuro */
  }
  
  .v-card-subtitle {
    margin-bottom: 20px;
    color: #1976d2; /* Azul intermedio */
  }
  
  .v-btn {
    margin-top: 20px;
    font-weight: bold;
    background-color: #1976d2; /* Azul primario */
  }
  
  .v-btn:hover {
    background-color: #1565c0; /* Azul más oscuro al pasar el mouse */
  }
  
  .v-text-field input {
    background-color: white;
    border-radius: 8px;
  }
  </style>
  