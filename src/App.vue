<template>
  <v-app>
    <v-toolbar app fixed class="toolbar">
      <a href="https://lpz.ucb.edu.bo" target="_blank" class="logo-link">
        <v-img src="@/assets/UCB.svg" alt="UCB" class="logo"></v-img>
      </a>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="title-link">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
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
      ],
    };
  },
  methods: {
    goTo(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style scoped>
.toolbar {
  background-color: #083a63 !important; /* Color medio azul */
  padding-left: 0; /* Eliminamos el padding izquierdo de la barra */
  height: 70px; /* Altura de la barra */
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

/* Media query para pantallas pequeñas */
@media (max-width: 600px) {
  .logo {
    max-height: 50px; /* Ajustar la altura de la imagen en pantallas pequeñas */
  }

  .btn-toolbar {
    padding: 5px; /* Reducir el padding en pantallas pequeñas */
  }

  .v-toolbar-items {
    display: flex; /* Mantener en flex para que los botones se alineen correctamente */
    flex-wrap: wrap; /* Permitir que los botones se ajusten en múltiples líneas si es necesario */
    justify-content: flex-end; /* Alinear a la derecha */
  }
}
</style>
