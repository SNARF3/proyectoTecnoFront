<template>
  <v-app>
    <v-toolbar app fixed class="toolbar">
      <!-- Imagen a la izquierda en la barra -->
      <a href="https://lpz.ucb.edu.bo" target="_blank" class="logo-link">
        <v-img src="@/assets/UCB.jpg" alt="UCB" class="logo"></v-img>
      </a>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="title-link">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <span v-for="item in menuItems" :key="item.title" class="btn-toolbar" @click="goTo(item.path)">
          <v-icon left dark>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </span>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: '', // Título del sistema (opcional)
      menuItems: [
        { title: 'Inicio', path: '/', icon: 'home' },
        { title: 'Inicio de sesión', path: '/signin', icon: 'lock_open' },
      ]
    };
  },
  methods: {
    goTo(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style scoped>
.toolbar {
  background-color: #083a63 !important; /* Color medio azul */
  padding-left: 0; /* Eliminamos el padding izquierdo de la barra */
  height: 56px; /* Altura de la barra */
}

.logo-link {
  display: flex;
  align-items: center;
  margin-left: 0; /* Imagen completamente a la izquierda */
  padding: 0;
}

.logo {
  max-height: 120px; /* Reducir la altura de la imagen */
  max-width: 120px; /* Ajustar el ancho de la imagen */
  height: auto; /* Mantener proporción de la imagen */
}

.title-link {
  color: white; /* Color blanco para el título */
  font-weight: bold; /* Negrita */
}

.btn-toolbar {
  color: white; /* Color del texto */
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s;
}

.btn-toolbar:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Efecto hover */
}

.v-toolbar-items {
  display: flex;
}

.v-content {
  padding-top: 56px; /* Espacio para evitar solapamiento con la barra */
  min-height: calc(100vh - 56px); /* Asegura que el contenido no se superponga a la barra */
}
</style>
