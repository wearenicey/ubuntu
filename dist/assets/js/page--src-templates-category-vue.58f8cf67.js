(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"14N+":function(t,e,a){},K5eK:function(t,e,a){"use strict";a("14N+")},"Tht+":function(t,e,a){"use strict";var i={data:function(){return{items:[1,2,3]}}},o=(a("K5eK"),a("KHd+")),n=a("Kw5r"),s=n.a.config.optionMergeStrategies.computed,l={allCategory:{edges:[{node:{path:"/blog/nefunkcionalna-ponasanja/",id:"nefunkcionalna-ponasanja",title:"Nefunkcionalna ponašanja"}},{node:{path:"/blog/panicni-napadi/",id:"panicni-napadi",title:"Panični napadi"}},{node:{path:"/blog/stres/",id:"stres",title:"Stres"}},{node:{path:"/blog/psihoterapijski-pravci/",id:"psihoterapijski-pravci",title:"Psihoterapijski pravci"}},{node:{path:"/blog/roditeljstvo/",id:"roditeljstvo",title:"Roditeljstvo"}},{node:{path:"/blog/snovi/",id:"snovi",title:"Snovi"}},{node:{path:"/blog/emocije/",id:"emocije",title:"Emocije"}},{node:{path:"/blog/depresija/",id:"depresija",title:"Depresija"}},{node:{path:"/blog/ljubav-i-medjuljudski-odnosi/",id:"ljubav-i-medjuljudski-odnosi",title:"Ljubav i međuljudski odnosi"}},{node:{path:"/blog/psihoterapijski-koncepti/",id:"psihoterapijski-koncepti",title:"Psihoterapijski koncepti"}},{node:{path:"/blog/psihoterapija/",id:"psihoterapija",title:"Psihoterapija"}},{node:{path:"/blog/preporuke-za-citanje-i-gledanje/",id:"preporuke-za-citanje-i-gledanje",title:"Preporuke za čitanje i gledanje"}},{node:{path:"/blog/nasilje/",id:"nasilje",title:"Nasilje"}},{node:{path:"/blog/gubitak-i-tugovanje/",id:"gubitak-i-tugovanje",title:"Gubitak i tugovanje"}},{node:{path:"/blog/anksioznost-i-anksiozni-poremecaji/",id:"anksioznost-i-anksiozni-poremecaji",title:"Anksioznost i anksiozni poremećaji"}},{node:{path:"/blog/briga-o-sebi/",id:"briga-o-sebi",title:"Briga o sebi"}}]}},r=function(t){var e=t.options;e.__staticData?e.__staticData.data=l:(e.__staticData=n.a.observable({data:l}),e.computed=s({$static:function(){return e.__staticData.data}},e.computed))},c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("client-only",[a("vue-horizontal",{staticClass:"this"},t._l(t.$static.allCategory.edges,(function(e){return a("section",{key:e.node.id,staticClass:"py-6 first mr-3"},[a("g-link",{staticClass:"px-5 rounded-md py-3  bg-gray-100 ",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1)})),0)],1)}),[],!1,null,"7f467ce4",null);"function"==typeof r&&r(c);e.a=c.exports},nldV:function(t,e,a){"use strict";a.r(e);var i={components:{Scroll:a("Tht+").a},metaInfo:function(){return{title:this.$page.category.title+" | Ubuntu Blog",titleTemplate:this.$page.category.title+" | Ubuntu Blog",meta:[{name:"description",content:this.$page.category.metaDesc},{key:"og:image",property:"og:image",content:"https://ubuntucentar.com"+this.$page.category.imageCategory.path},{key:"og:title",name:"og:title",content:this.$page.category.title+" | Ubuntu Blog"},{key:"og:type",name:"og:type",content:"article"},{key:"og:description",name:"og:description",content:this.$page.category.metaDesc},{key:"twitter:title",name:"twitter:title",content:this.$page.category.title+" | Ubuntu Blog"},{key:"twitter:description",name:"twitter:description",content:this.$page.category.metaDesc},{key:"twitter:image",property:"twitter:image",content:"https://ubuntucentar.com"+this.$page.category.imageCategory.path}]}},data:function(){return{}}},o=a("KHd+"),n=null,s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",[i("div",{staticClass:"relative max-w-7xl mx-auto px-6 mt-20 sm:px-0"},[i("div",{staticClass:"text-center"},[i("h1",{staticClass:"text-3xl text-gray-800 sm:text-4xl"},[t._v(t._s(t.$page.category.title))]),i("p",{staticClass:"mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"},[t._v(t._s(t.$page.category.desc))]),i("div",{staticClass:"mt-10"})]),i("div",{staticClass:"relative max-w-7xl mx-auto"},[i("Scroll")],1),i("div",{staticClass:"mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"},t._l(t.$page.category.belongsTo.edges,(function(e){return i("div",{key:e.node.id,staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[i("div",{staticClass:"flex-shrink-0"},[i("a",{attrs:{href:e.node.path}},[i("g-image",{staticClass:"h-48 w-full object-cover",attrs:{src:a("AH3y")("./"+e.node.image),alt:""}})],1)]),i("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[i("div",{staticClass:"flex-1"},[i("p",{staticClass:"text-sm font-medium text-indigo-600"},[i("a",{staticClass:"hover:underline",attrs:{href:e.node.path}})]),i("a",{staticClass:"block mt-2",attrs:{href:e.node.path}},[i("p",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.node.title)+"\n\t\t\t\t\t\t\t\t")]),i("p",{staticClass:"mt-3 text-base text-gray-500"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.node.excerpt)+"\n\t\t\t\t\t\t\t\t")])])]),i("div",{staticClass:"mt-6 flex items-center"},[i("div",{},[i("div",{staticClass:"flex space-x-1 text-sm text-gray-500"},[i("time",{attrs:{datetime:e.node.datetime}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.node.humanTime)+"\n\t\t\t\t\t\t\t\t\t")]),i("span",{attrs:{"aria-hidden":"true"}},[t._v(" · ")]),i("span",[t._v(" "+t._s(e.node.timeToRead)+" minuta čitanja ")])])])])])])})),0)])])])}),[],!1,null,null,null);"function"==typeof n&&n(s);e.default=s.exports}}]);