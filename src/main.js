import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css' 
import App from './App.vue'
import router from './routes'
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import './assets/sass/style.scss';
import { aliases, mdi } from 'vuetify/iconsets/mdi' 
import './axios'


const app = createApp(App);
const vuetify = createVuetify({

    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    components,
    directives,
});

app.use(router);
app.use(vuetify);
app.mount("#app");