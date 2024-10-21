<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div v-if="loading" class="text-center">Cargando intereses...</div>
        <div v-if="error" class="alert alert-danger text-center">{{ error }}</div>
        <div v-if="!loading && !error" class="d-flex flex-column align-items-center">
          <div v-for="interes in intereses" :key="interes.id" class="card mb-4 w-100">
            <div class="card-body text-center">
              <label class="checkboxd" :class="{ clicked: isSelected(interes.descripcion) }">
                <input 
                  type="checkbox" 
                  :value="interes.descripcion" 
                  :checked="isSelected(interes.descripcion)"
                  @change="handleSelect(interes.descripcion, $event)" 
                  style="display: none;"
                />
                {{ interes.descripcion }}
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
  name: 'interes',
  components: {
    pbutton,
  },
  data() {
    return {
      intereses: [],
      seleccionados: [],
      loading: true,
      error: null,
      usuario: this.$route.params.id, // Obtener el id de la ruta
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
          this.error = respuesta.data.mensaje || "Error desconocido";
        }
      } catch (error) {
        this.error = "Error al obtener los intereses: " + error.message;
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
          usuario: this.usuario, // Usar el id del usuario
          intereses: this.seleccionados,
        };

        const respuesta = await axios.post("http://localhost:8000/interes/usuario/ingresar", payload);

        if (respuesta.status === 200) {
          alert("Intereses enviados con éxito");
          // Redirigir a BodyQuest con el id del usuario
          this.$router.push({ path: `/preguntas/${this.usuario}` });
        } else {
          this.error = "Error al enviar los intereses: " + respuesta.data.mensaje;
          console.error("Error al enviar los intereses:", respuesta.data);
        }
      } catch (error) {
        this.error = "Error al enviar los intereses: " + error.message;
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
