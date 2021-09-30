// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import Vuelidate from 'vuelidate'
import BackToTop from 'vue-backtotop'

export default function (Vue, { router, head, isClient }) {
	Vue.use(Vuelidate)
	Vue.use(BackToTop)


	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
}
