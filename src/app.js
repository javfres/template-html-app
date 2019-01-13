

import jQuery from "jquery";
window.$ = jQuery;

import lodash from "lodash";
window._ = lodash;

import Vue from 'vue'
import App from './vue/App.vue'

// The components
//import Compoment from './vue/components/Component.vue'
//Vue.component('Component', Component);

new Vue({
	el: '#vue-app',
	render: h => h(App),
})


require('./imgs/boat.jpg');