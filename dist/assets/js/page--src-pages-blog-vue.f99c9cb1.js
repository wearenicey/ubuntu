(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"14N+":function(t,e,n){},"8tYL":function(t,e,n){"use strict";n.r(e);function i(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(i,r)}var r=n("a3WO");var o=n("BsWD");function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n("ls82");var s={metaInfo:function(){return{title:"Blogovi o psihoterapiji | Ubuntu Centar",titleTemplate:"Blogovi o psihoterapiji | Ubuntu Centar",meta:[{name:"description",content:"Zanimljivi i jednostavni tekstovi o psihoterapiji, psihoanalizi, emocijama i međuljudskim odnosima."},{key:"og:title",name:"og:title",content:"Blogovi o psihoterapiji | Ubuntu Centar"},{key:"og:description",name:"og:description",content:"Zanimljivi i jednostavni tekstovi o psihoterapiji, psihoanalizi, emocijama i međuljudskim odnosima."},{key:"twitter:title",name:"twitter:title",content:"Blogovi o psihoterapiji | Ubuntu Centar"},{key:"twitter:description",name:"twitter:description",content:"Zanimljivi i jednostavni tekstovi o psihoterapiji, psihoanalizi, emocijama i međuljudskim odnosima."}]}},components:{Scroll:n("Tht+").a},data:function(){return{loadedPosts:[],currentPage:1}},created:function(){var t;(t=this.loadedPosts).push.apply(t,a(this.$page.sviPostovi.edges))},methods:{infiniteHandler:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var i,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.currentPage+1>n.$page.sviPostovi.pageInfo.totalPages)){e.next=4;break}t.complete(),e.next=9;break;case 4:return e.next=6,n.$fetch("/blog/".concat(n.currentPage+1));case 6:i=e.sent,(r=i.data).sviPostovi.edges.length?(n.currentPage=r.sviPostovi.pageInfo.currentPage,(o=n.loadedPosts).push.apply(o,a(r.sviPostovi.edges)),t.loaded()):t.complete();case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(t){i(a,r,o,s,l,"next",t)}function l(t){i(a,r,o,s,l,"throw",t)}s(void 0)}))})()}}},l=(n("NW/i"),n("KHd+")),c=null,u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",[i("div",{staticClass:"relative max-w-7xl mx-auto px-6 mt-20 sm:px-0"},[i("div",{staticClass:"text-center"},[i("h1",{staticClass:"text-3xl text-gray-800 sm:text-4xl"},[t._v("Blogovi o pshoterapiji, psihoanalizi i psihologiji")]),i("p",{staticClass:"mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"},[t._v("Terapeuti pišu za vas")]),i("div",{staticClass:"mt-10"})]),i("div",{staticClass:"relative max-w-7xl mx-auto"},[i("Scroll")],1),i("div",{staticClass:"posts"},[i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"},t._l(t.loadedPosts,(function(e){return i("div",{key:e.node.id,staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden tst"},[i("div",{staticClass:"flex-shrink-0"},[i("a",{attrs:{href:e.node.path}},[i("g-image",{staticClass:"h-48 w-full object-cover",attrs:{src:n("AH3y")("./"+e.node.image),alt:""}})],1)]),i("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[i("div",{staticClass:"flex-1"},[i("p",{staticClass:"text-sm font-medium text-indigo-600"},[i("a",{staticClass:"hover:underline",attrs:{href:e.node.path}})]),i("a",{staticClass:"block mt-2",attrs:{href:e.node.path}},[i("p",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.node.title)+"\n\t\t\t\t\t\t\t\t\t\t")]),i("p",{staticClass:"mt-3 text-base text-gray-500"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.node.excerpt)+"\n\t\t\t\t\t\t\t\t\t\t")])])]),i("div",{staticClass:"mt-6 flex items-center"},[i("div",{},[i("div",{staticClass:"flex space-x-1 text-sm text-gray-500"},[i("time",{attrs:{datetime:e.node.datetime}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.node.humanTime)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),i("span",{attrs:{"aria-hidden":"true"}},[t._v(" · ")]),i("span",[t._v(" "+t._s(e.node.timeToRead)+" minuta čitanja ")])])])])])])})),0)]),i("ClientOnly",[i("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteHandler}},[i("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("Došli ste do kraja")]),i("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v("Sorry, no posts yet :(")])])],1)],1)])])])}),[],!1,null,"772aa470",null);"function"==typeof c&&c(u);e.default=u.exports},K5eK:function(t,e,n){"use strict";n("14N+")},"NW/i":function(t,e,n){"use strict";n("rLnx")},"Tht+":function(t,e,n){"use strict";var i={data:function(){return{items:[1,2,3]}}},r=(n("K5eK"),n("KHd+")),o=n("Kw5r"),a=o.a.config.optionMergeStrategies.computed,s={allCategory:{edges:[{node:{path:"/blog/snovi/",id:"snovi",title:"Snovi"}},{node:{path:"/blog/stres/",id:"stres",title:"Stres"}},{node:{path:"/blog/roditeljstvo/",id:"roditeljstvo",title:"Roditeljstvo"}},{node:{path:"/blog/psihoterapijski-koncepti/",id:"psihoterapijski-koncepti",title:"Psihoterapijski koncepti"}},{node:{path:"/blog/psihoterapijski-pravci/",id:"psihoterapijski-pravci",title:"Psihoterapijski pravci"}},{node:{path:"/blog/nasilje/",id:"nasilje",title:"Nasilje"}},{node:{path:"/blog/preporuke-za-citanje-i-gledanje/",id:"preporuke-za-citanje-i-gledanje",title:"Preporuke za čitanje i gledanje"}},{node:{path:"/blog/psihoterapija/",id:"psihoterapija",title:"Psihoterapija"}},{node:{path:"/blog/nefunkcionalna-ponasanja/",id:"nefunkcionalna-ponasanja",title:"Nefunkcionalna ponašanja"}},{node:{path:"/blog/ljubav-i-medjuljudski-odnosi/",id:"ljubav-i-medjuljudski-odnosi",title:"Ljubav i međuljudski odnosi"}},{node:{path:"/blog/panicni-napadi/",id:"panicni-napadi",title:"Panični napadi"}},{node:{path:"/blog/gubitak-i-tugovanje/",id:"gubitak-i-tugovanje",title:"Gubitak i tugovanje"}},{node:{path:"/blog/depresija/",id:"depresija",title:"Depresija"}},{node:{path:"/blog/anksioznost-i-anksiozni-poremecaji/",id:"anksioznost-i-anksiozni-poremecaji",title:"Anksioznost i anksiozni poremećaji"}},{node:{path:"/blog/emocije/",id:"emocije",title:"Emocije"}},{node:{path:"/blog/briga-o-sebi/",id:"briga-o-sebi",title:"Briga o sebi"}}]}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=s:(e.__staticData=o.a.observable({data:s}),e.computed=a({$static:function(){return e.__staticData.data}},e.computed))},c=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("vue-horizontal",{staticClass:"this"},t._l(t.$static.allCategory.edges,(function(e){return n("section",{key:e.node.id,staticClass:"py-6 first mr-3"},[n("g-link",{staticClass:"px-5 rounded-md py-3  bg-gray-100 ",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1)})),0)],1)}),[],!1,null,"7f467ce4",null);"function"==typeof l&&l(c);e.a=c.exports},ls82:function(t,e,n){var i=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,i){var r=e&&e.prototype instanceof d?e:d,o=Object.create(r.prototype),a=new k(i||[]);return o._invoke=function(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var l=c(t,e,n);if("normal"===l.type){if(i=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),o}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function d(){}function p(){}function h(){}var f={};s(f,r,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(_([])));m&&m!==e&&n.call(m,r)&&(f=m);var g=h.prototype=d.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){var i;this._invoke=function(r,o){function a(){return new e((function(i,a){!function i(r,o,a,s){var l=c(t[r],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,s)}))}s(l.arg)}(r,o,i,a)}))}return i=i?i.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var i=c(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,u;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,s(g,"constructor",h),s(h,"constructor",p),p.displayName=s(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(j.prototype),s(j.prototype,o,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new j(l(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),s(g,a,"Generator"),s(g,r,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},rLnx:function(t,e,n){}}]);