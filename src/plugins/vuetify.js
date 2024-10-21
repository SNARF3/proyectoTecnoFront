import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import es from 'vuetify/lib/locale/es';
import '@mdi/font/css/materialdesignicons.css'; // Asegúrate de que esto esté importado

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true, // Esto permite personalizar propiedades CSS, como los colores
    },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#FF5722', // Aquí defines los colores del tema oscuro
        secondary: '#212121',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
  icons: {
    iconfont: 'mdi', // Asegúrate de estar usando 'mdi'
  },
});
