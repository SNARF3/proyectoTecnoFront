<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div v-if="loading" class="text-center">Cargando intereses...</div>
                <div v-if="error" class="alert alert-danger text-center">{{ error }}</div>
                <div class="d-flex flex-column align-items-center">
                    <div v-for="interes in intereses" :key="interes.id" class="card mb-4 w-100">
                        <div class="card-body text-center">
                            <label class="checkboxd" :class="{ clicked: isSelected(interes.descripcion) }">
                                <input 
                                    type="checkbox" 
                                    :value="interes.descripcion"
                                    :checked="isSelected(interes.descripcion)"
                                    @change="handleSelect(interes.descripcion, $event)"
                                    hidden="true" <!-- Atributo corregido -->
                                />
                                {{ interes.descripcion }} <!-- Solo se imprime la descripción -->
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnxd text-center">
            <pbutton name="Enviar" @click="enviarSeleccionados" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import pbutton from "./pbutton.vue";

export default {
    name: "InteresForm",
    components: {
        pbutton,
    },
    data() {
        return {
            intereses: [],
            seleccionados: [],
            loading: true,
            error: null,
            usuario: "user123", // Usuario predefinido, puedes modificarlo
        };
    },
    mounted() {
        this.obtenerIntereses();
    },
    methods: {
        async obtenerIntereses() {
            try {
                const respuesta = await axios.get("http://localhost:8000/interes/obtener");
                if (respuesta.status === 200) {
                    this.intereses = respuesta.data;
                } else {
                    this.error = respuesta.data.mensaje;
                }
            } catch (error) {
                this.error = "Error al obtener los intereses";
                console.error("Error al obtener los intereses:", error);
            } finally {
                this.loading = false;
            }
        },
        handleSelect(descripcion, event) {
            if (event.target.checked) {
                this.seleccionados.push(descripcion);
            } else {
                this.seleccionados = this.seleccionados.filter(desc => desc !== descripcion);
            }
        },
        isSelected(descripcion) {
            return this.seleccionados.includes(descripcion);
        },
        async enviarSeleccionados() {
            try {
                const payload = {
                    usuario: this.usuario,
                    intereses: this.seleccionados,
                };

                const respuesta = await axios.post("http://localhost:8000/interes/usuario/ingresar", payload);

                if (respuesta.status === 200) {
                    console.log(respuesta.data.mensaje);
                    alert("Intereses enviados con éxito");
                } else {
                    console.error("Error al enviar los intereses:", respuesta.data);
                }
            } catch (error) {
                console.error("Error al enviar los intereses:", error);
            }
        }
    }
};
</script>

<style scoped>
.container {
    margin-top: 2rem;
}
.btnxd {
    width: 50%;
    margin-left: 25%;
}
.card {

      <div class="row justify-content-center">
        <div class="col-md-8">
          <!-- Estado de carga y error -->
          <div v-if="loading" class="text-center">Cargando intereses...</div>
          <div v-if="error" class="alert alert-danger text-center">{{ error }}</div>
  
          <!-- Listado de intereses con checkboxes -->
          <div v-if="intereses.length" class="d-flex flex-column align-items-center">
            <div v-for="interes in intereses" :key="interes.id" class="card mb-4 w-100">
              <div class="card-body text-center">
                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    :value="interes.descripcion"
                    v-model="seleccionados" 
                  />
                  {{ interes.descripcion }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Botón de envío de intereses seleccionados -->
      <div class="btnxd text-center">
        <pbutton name="Enviar" @click="enviarSeleccionados" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import pbutton from "./pbutton.vue";
  
  export default {
    name: "InteresForm",
    components: {
      pbutton,
    },
    data() {
      return {
        intereses: [], // Almacena los intereses que se obtienen desde la API
        seleccionados: [], // Aquí se almacenan las descripciones de los intereses seleccionados
        loading: true,
        error: null,
        usuario: 8, // Usuario predefinido (puedes reemplazarlo con una variable dinámica si es necesario)
      };
    },
    mounted() {
      this.obtenerIntereses();
    },
    methods: {
      // Método para obtener la lista de intereses desde la API
      async obtenerIntereses() {
        try {
          const respuesta = await axios.get("http://localhost:8000/interes/obtener");
          if (respuesta.status === 200) {
            this.intereses = respuesta.data;
          } else {
            this.error = "No se pudieron cargar los intereses";
          }
        } catch (error) {
          this.error = "Error al obtener los intereses";
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
      
      // Método para enviar los intereses seleccionados al backend
      async enviarSeleccionados() {
        if (this.seleccionados.length === 0) {
          alert("Debe seleccionar al menos un interés.");
          return;
        }
  
        try {
          const payload = {
            usuario: this.usuario,
            intereses: this.seleccionados, // Enviamos las descripciones seleccionadas
          };
  
          const respuesta = await axios.post("http://localhost:8000/interes/usuario/ingresar", payload);
  
          if (respuesta.status === 200) {
            alert("Intereses enviados con éxito.");
            console.log(respuesta.data.mensaje);
          } else {
            alert("Error: " + (respuesta.data.mensaje || "No se pudo enviar."));
            console.error("Error al enviar los intereses:", respuesta.data);
          }
        } catch (error) {
          console.error("Error al enviar los intereses:", error);
          if (error.response) {
            alert("Hubo un problema al enviar los intereses: " + (error.response.data.message || error.message));
          } else {
            alert("Hubo un problema al enviar los intereses.");
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 2rem;
  }
  .btnxd {
    width: 50%;
    margin-left: 25%;
  }
  .card {
    padding: 1rem;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    border-radius: 20px;

}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.checkboxd {
    color: rgb(0, 131, 213);
    text-transform: uppercase;
    border: 2px solid rgb(0, 131, 213);
    padding: 10px 20px;
    font-size: 17px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    transition: all 0.5s;
    display: inline-block;
}

.checkboxd:hover {
    background-color: rgba(0, 131, 213, 0.1);
}

.checkboxd.clicked {
    background-color: rgb(1, 131, 53);
    color: white;
    border-color: rgb(1, 131, 53);
}
</style>
=======
  }
  
  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    color: rgb(0, 131, 213);
    padding: 10px 20px;
    font-size: 17px;
    border: 2px solid rgb(0, 131, 213);
    transition: background-color 0.3s;
  }
  
  .checkbox-label input {
    margin-right: 10px;
  }
  
  .checkbox-label:hover {
    background-color: rgba(0, 131, 213, 0.1);
  }
  
  .checkbox-label input:checked + label {
    background-color: rgb(1, 131, 53);
    color: white;
    border-color: rgb(1, 131, 53);
  }
  </style>
  

