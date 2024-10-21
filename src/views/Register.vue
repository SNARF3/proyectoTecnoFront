<template>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" lg="4">
          <v-card>
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
                :rules="[
                  v => !!v || 'Este campo es obligatorio',
                  v => /.+@.+\..+/.test(v) || 'El correo no es válido'
                ]"
                outlined
              ></v-text-field>
  
              <v-text-field
                v-model="contrasena"
                label="Contraseña"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :rules="[v => !!v || 'Este campo es obligatorio']"
                outlined
              ></v-text-field>
  
              <v-btn
                :disabled="!formValid"
                color="primary"
                @click="registrar"
                block
              >
                Registrarse
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombres: '',
        apellidos: '',
        correo: '',
        contrasena: '',
        formValid: false,
        showPassword: false,
      };
    },
    methods: {
      registrar() {
        // Aquí iría la lógica para enviar el formulario a tu backend
        console.log({
          nombres: this.nombres,
          apellidos: this.apellidos,
          correo: this.correo,
          contrasena: this.contrasena,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>