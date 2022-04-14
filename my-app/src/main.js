import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { SiEmojiPopover } from "si-grenoble";

import App from './App.vue'
import router from './routes.js'

library.add ( fab, far, fas, );

createApp(App)
.component ('fa', FontAwesomeIcon, SiEmojiPopover)
.use(router)
.mount('#app')
