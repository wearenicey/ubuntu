// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import Vuelidate from 'vuelidate'



export default function (Vue, { router, head, isClient }) {
	router.options.scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            behavior: 'smooth'
          })
        }, 0)
      })
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
	head.htmlAttrs = { lang: 'sr' }

	Vue.use(Vuelidate)


	if (process.isClient) {
		Vue.use(require("vue-backtotop").default, {
			text: "top",
			visibleoffset: "600",
			visibleoffsetbottom: "0",
			bottom: "30px",
			right: "30px",



		});
	}

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
}
