import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLaughBeam,
  faSadCry,
  faSadTear,
  faMeh,
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faLaughBeam,
  faSadCry,
  faMeh,
  faSadTear,
  faThumbsUp,
  faThumbsDown,
  faSlack
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
