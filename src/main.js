// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/index.scss';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInfo, faTractor, faChartLine, faSchool, faLightbulb, faSeedling, faFileMedical, faGlobe, faSection, faPeopleGroup, faLandmark, 
  faTreeCity, faAtom, faBus, faBook, faMagnifyingGlass, faCircleInfo, faShield } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faGithub, faTwitter);
library.add(faInfo, faTractor, faChartLine, faSchool, faLightbulb, faSeedling, faFileMedical, faGlobe, faSection, faPeopleGroup, faLandmark, 
  faTreeCity, faAtom, faBus, faBook, faMagnifyingGlass, faCircleInfo, faShield);

require('typeface-ibm-plex-sans');

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(BootstrapVue);
  Vue.component('font-awesome-icon', FontAwesomeIcon);
}