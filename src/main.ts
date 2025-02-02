import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import './assets/base.css';

// Detect user's system language or use persisted locale
const userLanguage = navigator.language.split('-')[0]; // Get language code (e.g., 'en' from 'en-US')
const savedLocale = localStorage.getItem('locale') || userLanguage || 'en';

const i18n = createI18n({
  locale: savedLocale,
  messages: {
    en,
    ru,
  },
});

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      rounded: 'lg',
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#5a8bbf',
          secondary: '#678fbe',
        },
      },
    },
  }
});

createApp(App).use(router).use(vuetify).use(i18n).mount('#app');
