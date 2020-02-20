import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaughBeam, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLaughBeam, faSadCry);
Vue.component('font-awesome-icon', FontAwesomeIcon);
