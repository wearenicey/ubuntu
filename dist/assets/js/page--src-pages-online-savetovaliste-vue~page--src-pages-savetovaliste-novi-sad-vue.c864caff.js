(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0pQ5":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,a)}),!1)}))}},"1PTn":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T"),n=(0,a.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,a.req)(e.trim()):(0,a.req)(e)}));t.default=n},"5lKX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)}))}},"62b2":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"minValue",min:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},"7BF0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},(function(r){return!(0,a.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},EzHr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r("eO9T").regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},KhKh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"maxLength",max:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e}))}},M2AK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,a)}),!0)}))}},OlTG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r("eO9T").regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},RbiO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r("eO9T").regex)("numeric",/^[0-9]*$/);t.default=a},RryX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"maxValue",max:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},XXVU:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r("eO9T").regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=a},XbO3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"minLength",min:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e}))}},YjXl:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r("eO9T").regex)("alpha",/^[a-zA-Z]*$/);t.default=a},ZBfT:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"not"},(function(t,r){return!(0,a.req)(t)||!e.call(this,t,r)}))}},cusB:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/novi-sad-1.0b1c2c4.328e67065f6c746cd54e4378a8eaf4c6.jpg",size:{width:490,height:465},sizes:"(max-width: 490px) 100vw, 490px",srcset:["/assets/static/novi-sad-1.0b1c2c4.328e67065f6c746cd54e4378a8eaf4c6.jpg 490w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 490 465' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-630aadf7a93a59c09d52ab4d6ac1dc12'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-630aadf7a93a59c09d52ab4d6ac1dc12)' width='490' height='465' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA9AEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABQYCBAcDAAj/xAA2EAABAwIFAQYEBQMFAAAAAAABAgMEBREABhIhMUEHEyJRYXEygZGhFCNCscEVFiQzUnKC8P/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACYRAAEEAQQBAwUAAAAAAAAAAAEAAgMRIQQSMUETMoGRImGx0fH/2gAMAwEAAhEDEQA/AAnaDlVldZZmS1d9F8JAdXe%2bkaleLm69ySeu%2bE2qUFMZUKMiT30J5BdYQrholRBT8iLexxp7TTOYspiO%2byr8TEK4zjbi7qbWjYpJAG4BBHocZm0ZVPkMJlRlvaHNA1i6VdNz0NvniRjawvdcWuYHgYIVidlw0mBFfkJCe9c0p03ta9h78/bCBGnugVSjhpLsac6CC4PG2pCjpUCPS4I9ca%2b1W4dfzJRqcpxDTDCkNtIXuXVbWsPv8sI%2bZ8sJm5rMWlLLUmVKWw1r8O91HxHobEfXGh/TknURCri6WfOsguBMfUsHjbc4IVVhcGnRY6RcOp71xYGyieB8h98aZmzIDVCypl8uqSxLKl9/JSNJ33T%2bwt74vSIKahlNtb1Mkuy2kanA42FLJ0gFew%2bE7m/1xz9RsxVqWPSCTN0sLBKSCNiMPGVc5T2CpmXJQtoISElw2KdI8JuP9tgRijlPJVRzbU0x6QplbZXZxxSrBpPJUR1Htzh6rnY8zTKa6sT5CZSDZIUEqSq3UgcX99sPLGyiiEiOd%2bmcHNNfg/tO/ZpGeYVMqdRecjtVCQXFx1t20uX3cKj8QN7bbWPpjhnqmLalJYe73%2bkvEyB3YJLqgnTpTbe/Bv5DEc7ZiRSmGYAdU6W2ggqUo3Nh5492Y5i/u%2bnT8uS1pTLhgPwpCgLC5sE262P2JGCfHsqT5QwTlzDp7weCkKloh5RzJOrkiGqN3LChCjqVrUl1QtqVfg2vsL2vix2OUpzMeb11yXJcDcBwynk8Xcv%2bWL9bnUT/AMfXADOkKcutNUuZrFSMnuloVwVqIAV6jfD1Qlryzl2JQobD7D9ReUt2cpBBcA2Kkp8gLAfMnCXHdkclUBhYKPpbk/crdnIlOzBS478liPJSncBVlgKHS38YVZdEkR0vop5AUGlIaDguhO4IuOouOOuAOS466fTmm2VuQ4cd119b0glOoE/GVbX5NzwfLB%2bFnFVVzNT6Vlxh2S2XAuXUVtlLKG07q0n9SjwLbb3xkjAMclDDI426qCKdmmTYWVqEoRViTIfUVqfsPFc329ONvTFfMEYTZbkQgpCzosT5mx/jDfSY/wCGZUy2lPhdUAlPA6/zhXqbrSanTpIAShxp1autiADv8x9sVDHChdkZXy9mec9XsyKaYVqDjmlBIIABPJ9sPPZBS26VKrin3kiew93AI2KdBJ1fM2%2bmFXKhjUlAemIT3z4BIUPEhHQehO5wwUqRTX8%2bTZ6ZLkdqcVNnV8NykAajwPEOfXAea5M8I/CRHjlaN2lGM9TotYZjRTLLJH4osgut3R8STz4b3I6p1W4wHpcdL0uNIShUhLWzbzgU53abbhFiNj5Xti3nl5cXJzLMjxBlhAXdOoXQBuRcXFxuAeCbcYnkyBLzLlCiiBNEKG5GK33E7r1glJSOid%2bvPtbCnRuaCGgEqpmobIRuJAHNdlBa7X6GirLRLld/Kbslaf8AUKbcDSPAn7nF%2bm1iuVJ5kZUoj7TeredMHdtpHU2O6vbBCPlWj5IlpksNsSkuNlIC1IcWHDxYdTfe9vPjDO/WlljU2hQSNta/Cn6n%2bMK2R%2bqQ8e3wAm%2bSY/TC0Z75PuT/ABH8rvzEU5tVSVHEll0lRZQW0KHsTzuD5eWFap1BcfK0moKbQGYofbUs8hX5ybD6Jxwp2cZDtTiUyL/kockIDqmWtWhJUL79Nr7nCf2ySawqDCiiU8qny5r0WTHZAHeLQoaCB6jp1Iw%2bN4ly1SzROgw%2brWVKkLkJWpdi5fYaQLD/AN0xwZqLb1YgRE6G0qebQ44oXCRqF8cM0JXR6zUILa9ZYfWyHLWvpURe3rbEKKhMZbUrSHHQtLl1dd72wG0DJW2TgLdu1l5UTKNUdcDRTbu0hLiSQsmwFgbgi/GAXYhLkwcvSIDkkFBIeSj9TaVfEPqPvhP7Taia5OblqZbjl0KkENjjwghN%2btj1xS7H50iRnltDi7pcjOpUOhATf9xg7Moq6QgNhN1a1jOVQl0aIqVBobsqSoXSVAFKR623PtbEsk5azFVloqudnlx4ugFqnDwqUTYhS7fCm36b3338sPrlHjyKXARIK1uIutLiVFJHh425FiRvgLUa09TqoYCUJcZbihabkggh0It7WV9sCzTRscG17psmslkYXl1V0EWXIZgoSYzLTCEHUlKAEgC9xe3W2EHtQLs6J%2bKUklgV1TrKEqKVqQWdlAjcbpUcKHaJn2oU2UY8RloPEqT3y/FaxI2Tx%2b%2bBOVKxPqnahQS9JcSiU9HbcbCiUn8q17f9lfU4oe/bx0o2ML%2be1//Z' /%3e%3c/svg%3e"}},dy1E:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r("eO9T").regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=a},eO9T:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var a,n=(a=r("h1BH"))&&a.__esModule?a:{default:a};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=s;t.len=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,n.default)({type:e},(function(e){return!s(e)||t.test(e)}))}},h1BH:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="web"===e.env.BUILD?r("y2mG").withParams:r("AjSV").withParams;t.default=a}).call(this,r("8oxB"))},kdPC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},(function(t){if(!(0,a.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(n)}))};var n=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},qoKy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)}))}},ta7f:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return C.default}}),t.helpers=void 0;var a=K(r("YjXl")),n=K(r("OlTG")),i=K(r("RbiO")),s=K(r("7BF0")),o=K(r("XXVU")),l=K(r("yZ1b")),u=K(r("kdPC")),c=K(r("KhKh")),f=K(r("XbO3")),d=K(r("1PTn")),b=K(r("qoKy")),g=K(r("5lKX")),A=K(r("tsu9")),p=K(r("dy1E")),v=K(r("0pQ5")),h=K(r("M2AK")),y=K(r("ZBfT")),m=K(r("62b2")),x=K(r("RryX")),w=K(r("EzHr")),C=K(r("wwGG")),j=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r("eO9T"));function K(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},tkto:function(e,t,r){var a=r("I+eb"),n=r("ewvW"),i=r("33Wh");a({target:"Object",stat:!0,forced:r("0Dky")((function(){i(1)}))},{keys:function(e){return i(n(e))}})},tsu9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T");t.default=function(e){return(0,a.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,a.ref)(e,this,r)}))}},wwGG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r("eO9T").regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},y2mG:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var a="undefined"!=typeof window?window:void 0!==e?e:{},n=a.vuelidate?a.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=n}).call(this,r("yLpj"))},yJ0U:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/novi-sad-2.0b1c2c4.a734a898ff82da945879a72636a7fbdc.jpg",size:{width:490,height:446},sizes:"(max-width: 490px) 100vw, 490px",srcset:["/assets/static/novi-sad-2.0b1c2c4.a734a898ff82da945879a72636a7fbdc.jpg 490w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 490 446' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e993bc97c843a3a5e48c471ef13de2fc'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e993bc97c843a3a5e48c471ef13de2fc)' width='490' height='446' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA6AEADASIAAhEBAxEB/8QAHAAAAgMAAwEAAAAAAAAAAAAABQYCBAcBAwgA/8QANhAAAQMCBQIDBwMCBwAAAAAAAQIDBAURAAYSIVExQSJhcRMUI0JSYpEHMoEzoRUkcoKxwcL/xAAaAQACAgMAAAAAAAAAAAAAAAAEBQADAQIG/8QAKhEAAQIEAwcFAQAAAAAAAAAAAQIDAAQRIRIxUQUiQWGBkdETcaHh8MH/2gAMAwEAAhEDEQA/ANAzZmxqBLNKoXvVTrzl/gNkEN/cpQJtjmlZbmTHGZOa3WZtTj2Uj4KSlkm2yeSNtz/GOclQKdR6KlcKK4HpILjrqW1KUskHqSCbeWLFTzK2w88iGj2j67AEgbbDy8sPsKqltodeP0I58uIwh1458P2ZgJ%2boeWVVSu5elFuK87FW%2bHHn9SC02Qf2pSrxEm/XYY78o5Xo%2bVYRiUWGWUueJatWt57i6j2HPQdhibJcePvEp0J1EqK1dSeAO%2bKVdzXFozS227rdUkfDB3J5Ue3pixEsRRKbmKlTQO8qwg3Wq1GpMNC5KkaUX9m0n9qT5fUfM4RmDVc81NQSox6e143XVGwCebnqdvTnEqdTV1RxusZseKYqiPdoqPEXTfZOkG%2b/A3Pew3w3MyIcCXKczJFiU%2bmxWG3UNJWFi1yEpWEqAURbZAvbz64IqlgHBdWvjWBlJXMqAXZOnnT2g5lymRYUER6KPdIFvizlFKX5HmnVaw%2b8/wC0d8J%2bd/1LFOZap%2bVA0zDCil6eVFA73DIBOtRPVfrbnCjnn9Q8wZllOxKXHahUHTYGW4oe1N/3OJuSR0sgbc3wn0mmplVllLKJNfrSzZtbo0to/wBKOgA87j0wOhgk43h3/upgh2ZS2PTZPbPpp1PeNdiT50mnx4EBS0Mtp0LdSo%2bLmwxCVJg0lu7y0Le22JvvyT3wJruZm6cyqPB0jbSVd7j/AIxn82VUKpHnyora3m4zZccIPW3yp%2bpXkMMg2lIK17qc%2bZhWFqWQhveVlyHtDHUc0zJs9LEMqdlPENspR2UeB%2bcMOVMrQ5UxTcyW8/WEj2xW00p1ptP3bXG/c2vba%2bMj/SKFLzRnRyU682yxBb1FSlpT7IqOkaQsgFdr9fXGt5tzxR8lxDSMvRGZlWKgXnHUNuhF%2bq3FpJ1r%2b2/4G2FsxMJmmi00CAbWtbn4hvJS65F9LyiCpN73vyrbr2h0biuZdhP1Rmnu1GRGaIQYj5uUd0oTayOSTufPpjz3mnPNczFNefmRWzL1FLJJKksIubBI2uqx3Ud/TByk1dhapMh6rVNK5BKnlF0N6ubi2kDBmFlHL1QiCS87VWYzhGhxDqLvE/K3ZNzfkYzLyhl0VKqnIa00iTm0UTbpojDW5zpXXzGaZQy7mnNNcdbiyg0wwD7zMeGppn7TyvhI35tj0DkHLrOW4biGQtbrgs7Me/rSD/4RwkfzghSadGgwmIsaI3Dgs/0YjQ8KPuV9Sz3J/vgkXSO9iep5xoEm9bxklJIIFKcowyj0R6qt/wCIVd0x6am6ggkpW4OQbbJvtf8AgXOHlNFrRpvvVLhKgw4txHadJYcQD841WsD6lR6m2wxOEKbBpMer166WAECPFDCXm2yf22AcCluHttt2A64Ts7OZhzDK93VCTCgFzQiGlel1652Lu5HHhB288WTgVPBTAJocz%2b%2bYmzn07McRNECouAcvuCcGnZoeXJSy3OYfkJKFSIklpayD3NlXPr132thTzBk6dliGiRNDTbKl6fjGy1k%2bVyca1RMuRqRCjxEMsqUygJUoJF1LO6jf1wOzJHpiH21qabdfTcoNgdJ5GBNnSTko5gaWSk8CPxhltvazc6z6r7aUrHEVHfh8QkZSy1HnyGHswIK2leNmmJv4rdFvH6eEfnjGxRmklSXHUpLqdk7ABsW6J4FuMJVFdaZe8BspfiWpW5PqcO0BYXGSL%2bLqQcMphrAa8YQSM0XUFIy5RYPH4tjgpvi3oFrAWx9oTgXFBxRGM0SJNDserVdu89CAmM1oCUxUW4%2bsjqo7/wDTVlj/ADlUdqU9QDEEWST8zh6fgb/jFesAIceCBpHtl9NvmVjuT4Mqx9Hh1Bajba5ud8HZimsJ8RUrEeF%2b0RrWajqcZiJIJ2Kld8Ky31urKnVErPc4qpJIUSd8ST0w0aZQ2N0QmeeW8d8xdYeKFXTxY4cKDVD7JKVKO22%2b%2bEVvtg7RuivXFcw2FJvG8k6pp2iY0FuaHAATfFhL1%2bptheik6cE4260A9CoD%2b%2bE62wMo6ZDxVnH/2Q==' /%3e%3c/svg%3e"}},yZ1b:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("eO9T"),n=(0,a.withParams)({type:"ipAddress"},(function(e){if(!(0,a.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=n;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},zKZK:function(e,t,r){"use strict";var a=r("KHd+"),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"bg-white",attrs:{"aria-labelledby":"footer-heading"}},[r("div",{staticClass:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},[r("div",{staticClass:"xl:grid xl:grid-cols-3 xl:gap-8"},[r("div",{staticClass:"space-y-8 xl:col-span-1"},[r("img",{attrs:{src:"/logo.svg",alt:"Company name"}}),r("p",{staticClass:"text-gray-500 text-base"},[e._v("Ubuntu se bavi psihološkim savetovanjem, psihoterapijom i neformalnim obrazovanjem sa ciljem unapređenja kvaliteta života ljudi.")]),r("div",{staticClass:"flex space-x-6"},[r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:"https://sr-rs.facebook.com/UBUNTUcentar/"}},[r("span",{staticClass:"sr-only"},[e._v("Facebook")]),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"}})])]),r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:"https://www.instagram.com/ubuntu_centar/?hl=en"}},[r("span",{staticClass:"sr-only"},[e._v("Instagram")]),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"}})])]),r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:"https://www.linkedin.com/company/ubuntu-centar/",target:"_blank"}},[r("span",{staticClass:"sr-only"},[e._v("Linkedin")]),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}})])])])]),r("div",{staticClass:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},[r("div",{staticClass:"md:grid md:grid-cols-2 md:gap-8"},[r("div",[r("h3",{staticClass:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},[e._v("Naše lokacije")]),r("ul",{staticClass:"mt-4 space-y-4",attrs:{role:"list"}},[r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/savetovaliste-novi-sad/"}},[e._v(" Novi Sad ")])],1),r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/savetovaliste-beograd/"}},[e._v(" Beograd ")])],1),r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/online-savetovaliste/"}},[e._v(" Online ")])],1)])]),r("div",{staticClass:"mt-12 md:mt-0"},[r("h3",{staticClass:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},[e._v("O nama")]),r("ul",{staticClass:"mt-4 space-y-4",attrs:{role:"list"}},[r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/zasto-ubuntu/"}},[e._v(" Zašto Ubuntu ")])],1),r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/karijera/"}},[e._v(" Karijera ")])],1)])])]),r("div",{staticClass:"md:grid md:grid-cols-2 md:gap-8"},[r("div",[r("h3",{staticClass:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},[e._v("Blog")]),r("ul",{staticClass:"mt-4 space-y-4",attrs:{role:"list"}},[r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/blog/stres/"}},[e._v("Stres")])],1),r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/blog/anksioznost-i-anksiozni-poremecaji/"}},[e._v(" Anksioznost ")])],1),r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/blog/psihoterapija/"}},[e._v(" Psihoterapija")])],1)])]),r("div",{staticClass:"mt-12 md:mt-0"},[r("h3",{staticClass:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},[e._v("Info")]),r("ul",{staticClass:"mt-4 space-y-4",attrs:{role:"list"}},[r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/donacije/"}},[e._v(" Donacije ")])],1),r("li",[r("g-link",{staticClass:"text-base text-gray-500 hover:text-gray-900",attrs:{to:"/kontakt/"}},[e._v(" Kontakt ")])],1)])])])])]),e._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-12 border-t border-gray-200 pt-8"},[t("p",{staticClass:"text-base text-gray-400 xl:text-center"},[this._v("© 2021, "),t("a",{attrs:{href:"https://nicey.rs/"}},[this._v("Nicey Consulting")])])])}],!1,null,null,null);t.a=n.exports}}]);