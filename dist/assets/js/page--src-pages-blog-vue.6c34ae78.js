(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0qaq":function(t,e,i){"use strict";i("8LZx")},"14N+":function(t,e,i){},"8LZx":function(t,e,i){},"8tYL":function(t,e,i){"use strict";i.r(e);function n(t,e,i,n,r,o,a){try{var s=t[o](a),l=s.value}catch(t){return void i(t)}s.done?e(l):Promise.resolve(l).then(n,r)}var r=i("a3WO");var o=i("BsWD");function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i("ls82");var s={metaInfo:function(){return{title:"Blogovi o psihoterapiji | Ubuntu Centar",titleTemplate:"Blogovi o psihoterapiji | Ubuntu Centar",meta:[{name:"description",content:"Zanimljivi i jednostavni tekstovi o psihoterapiji, psihoanalizi, emocijama i međuljudskim odnosima."},{key:"og:title",name:"og:title",content:"Tekstovi | Ubuntu blog"},{key:"og:description",name:"og:description",content:"Zanimljivi i jednostavni tekstovi o psihoterapiji, psihoanalizi, emocijama i međuljudskim odnosima."},{key:"twitter:title",name:"twitter:title",content:"Blogovi o psihoterapiji | Ubuntu Centar"},{key:"twitter:description",name:"twitter:description",content:"Zanimljivi i jednostavni tekstovi o psihoterapiji, psihoanalizi, emocijama i međuljudskim odnosima."}]}},components:{Scroll:i("Tht+").a},data:function(){return{loadedPosts:[],currentPage:1}},created:function(){var t;(t=this.loadedPosts).push.apply(t,a(this.$page.sviPostovi.edges))},methods:{infiniteHandler:function(t){var e,i=this;return(e=regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.currentPage+1>i.$page.sviPostovi.pageInfo.totalPages)){e.next=4;break}t.complete(),e.next=9;break;case 4:return e.next=6,i.$fetch("/blog/".concat(i.currentPage+1));case 6:n=e.sent,(r=n.data).sviPostovi.edges.length?(i.currentPage=r.sviPostovi.pageInfo.currentPage,(o=i.loadedPosts).push.apply(o,a(r.sviPostovi.edges)),t.loaded()):t.complete();case 9:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(r,o){var a=e.apply(t,i);function s(t){n(a,r,o,s,l,"next",t)}function l(t){n(a,r,o,s,l,"throw",t)}s(void 0)}))})()}}},l=(i("0qaq"),i("KHd+")),c=null,u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",[n("div",{staticClass:"relative max-w-7xl mx-auto px-6 mt-20"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"text-3xl text-primary sm:text-4xl"},[t._v("Blogovi o psihoterapiji, psihoanalizi i psihologiji")]),n("p",{staticClass:"mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"},[t._v("Terapeuti pišu za vas")]),n("div",{staticClass:"mt-10"})]),n("div",{staticClass:"relative max-w-7xl mx-auto"},[n("Scroll")],1),n("div",{staticClass:"posts"},[n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"mt-4 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none"},t._l(t.loadedPosts,(function(e){return n("div",{key:e.node.id,staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden tst"},[n("div",{staticClass:"flex-shrink-0"},[n("a",{attrs:{href:e.node.path}},[n("g-image",{staticClass:"h-48 w-full object-cover",attrs:{src:i("AH3y")("./"+e.node.image),alt:""}})],1)]),n("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[n("div",{staticClass:"flex-1"},[n("p",{staticClass:"text-sm font-medium text-indigo-600"},[n("a",{staticClass:"hover:underline",attrs:{href:e.node.path}})]),n("a",{staticClass:"block mt-2",attrs:{href:e.node.path}},[n("p",{staticClass:"text-xl font-medium text-primary"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.node.title)+"\n\t\t\t\t\t\t\t\t\t\t")]),n("p",{staticClass:"mt-3 text-base text-gray-500"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.node.excerpt)+"\n\t\t\t\t\t\t\t\t\t\t")])])]),n("div",{staticClass:"mt-6 flex items-center"},[n("div",{},[n("div",{staticClass:"flex space-x-1 text-sm text-gray-500"},[n("time",{attrs:{datetime:e.node.datetime}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.node.humanTime)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),n("span",{attrs:{"aria-hidden":"true"}},[t._v(" · ")]),n("span",[t._v(" "+t._s(e.node.timeToRead)+" minuta čitanja ")])])])])])])})),0)]),n("ClientOnly",[n("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteHandler}},[n("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("Došli ste do kraja")]),n("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v("Sorry, no posts yet :(")])])],1)],1)])])])}),[],!1,null,"6bb49692",null);"function"==typeof c&&c(u);e.default=u.exports},K5eK:function(t,e,i){"use strict";i("14N+")},"Tht+":function(t,e,i){"use strict";var n={data:function(){return{items:[1,2,3]}}},r=(i("K5eK"),i("KHd+")),o=i("Kw5r"),a=o.a.config.optionMergeStrategies.computed,s={allCategory:{edges:[{node:{path:"/blog/stres/",id:"stres",title:"Stres"}},{node:{path:"/blog/snovi/",id:"snovi",title:"Snovi"}},{node:{path:"/blog/roditeljstvo/",id:"roditeljstvo",title:"Roditeljstvo"}},{node:{path:"/blog/psihoterapijski-koncepti/",id:"psihoterapijski-koncepti",title:"Psihoterapijski koncepti"}},{node:{path:"/blog/psihoterapijski-pravci/",id:"psihoterapijski-pravci",title:"Psihoterapijski pravci"}},{node:{path:"/blog/psihoterapija/",id:"psihoterapija",title:"Psihoterapija"}},{node:{path:"/blog/preporuke-za-citanje-i-gledanje/",id:"preporuke-za-citanje-i-gledanje",title:"Preporuke za čitanje i gledanje"}},{node:{path:"/blog/nefunkcionalna-ponasanja/",id:"nefunkcionalna-ponasanja",title:"Nefunkcionalna ponašanja"}},{node:{path:"/blog/nasilje/",id:"nasilje",title:"Nasilje"}},{node:{path:"/blog/panicni-napadi/",id:"panicni-napadi",title:"Panični napadi"}},{node:{path:"/blog/gubitak-i-tugovanje/",id:"gubitak-i-tugovanje",title:"Gubitak i tugovanje"}},{node:{path:"/blog/ljubav-i-medjuljudski-odnosi/",id:"ljubav-i-medjuljudski-odnosi",title:"Ljubav i međuljudski odnosi"}},{node:{path:"/blog/depresija/",id:"depresija",title:"Depresija"}},{node:{path:"/blog/emocije/",id:"emocije",title:"Emocije"}},{node:{path:"/blog/briga-o-sebi/",id:"briga-o-sebi",title:"Briga o sebi"}},{node:{path:"/blog/anksioznost-i-anksiozni-poremecaji/",id:"anksioznost-i-anksiozni-poremecaji",title:"Anksioznost i anksiozni poremećaji"}}]}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=s:(e.__staticData=o.a.observable({data:s}),e.computed=a({$static:function(){return e.__staticData.data}},e.computed))},c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("client-only",[i("vue-horizontal",{staticClass:"this"},t._l(t.$static.allCategory.edges,(function(e){return i("section",{key:e.node.id,staticClass:"py-6 first mr-3"},[i("g-link",{staticClass:"px-5 rounded-md py-3  bg-gray-100 ",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1)})),0)],1)}),[],!1,null,"7f467ce4",null);"function"==typeof l&&l(c);e.a=c.exports},ls82:function(t,e,i){var n=function(t){"use strict";var e=Object.prototype,i=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,i){return t[e]=i}}function l(t,e,i,n){var r=e&&e.prototype instanceof d?e:d,o=Object.create(r.prototype),a=new k(n||[]);return o._invoke=function(t,e,i){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return L()}for(i.method=r,i.arg=o;;){var a=i.delegate;if(a){var s=b(a,i);if(s){if(s===u)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===n)throw n="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n="executing";var l=c(t,e,i);if("normal"===l.type){if(n=i.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(n="completed",i.method="throw",i.arg=l.arg)}}}(t,i,a),o}function c(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function d(){}function p(){}function h(){}var f={};s(f,r,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(_([])));m&&m!==e&&i.call(m,r)&&(f=m);var g=h.prototype=d.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){var n;this._invoke=function(r,o){function a(){return new e((function(n,a){!function n(r,o,a,s){var l=c(t[r],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(l.arg)}(r,o,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var i=t.iterator[e.method];if(void 0===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,s(g,"constructor",h),s(h,"constructor",p),p.displayName=s(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(j.prototype),s(j.prototype,o,(function(){return this})),t.AsyncIterator=j,t.async=function(e,i,n,r,o){void 0===o&&(o=Promise);var a=new j(l(e,i,n,r),o);return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),s(g,a,"Generator"),s(g,r,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(i,n){return a.type="throw",a.arg=t,e.next=i,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),w(i),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;w(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:_(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);