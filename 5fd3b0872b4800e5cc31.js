/*! For license information please see 5fd3b0872b4800e5cc31.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{123:function(t,e,r){"use strict";r.r(e);const n="undefined"!=typeof document&&document.documentMode,i={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){const e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let r;for(let t=0;t<=e.length-1;t++)r=e[t].getAttribute("data-src"),r&&(e[t].src=r);t.load()}if(t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(",").join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const e=t.getAttribute("data-background-image-set").split(",");let r=e[0].substr(0,e[0].indexOf(" "))||e[0];r=-1===r.indexOf("url(")?`url(${r})`:r,1===e.length?t.style.backgroundImage=r:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${r}; background-image: -webkit-image-set(${e}); background-image: image-set(${e})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function o(t){t.setAttribute("data-loaded",!0)}const s=t=>"true"===t.getAttribute("data-loaded");e.default=function(t=".lozad",e={}){const{root:r,rootMargin:n,threshold:a,load:c,loaded:u}=Object.assign({},i,e);let l;return"undefined"!=typeof window&&window.IntersectionObserver&&(l=new IntersectionObserver(((t,e)=>(r,n)=>{r.forEach(r=>{(r.intersectionRatio>0||r.isIntersecting)&&(n.unobserve(r.target),s(r.target)||(t(r.target),o(r.target),e(r.target)))})})(c,u),{root:r,rootMargin:n,threshold:a})),{observe(){const e=((t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t))(t,r);for(let t=0;t<e.length;t++)s(e[t])||(l?l.observe(e[t]):(c(e[t]),o(e[t]),u(e[t])))},triggerLoad(t){s(t)||(c(t),o(t),u(t))},observer:l}}},167:function(t,e,r){"use strict";r.r(e);var n=r(26),i=r(9),o={query:{bool:{filter:[{term:{visible:!0}}]}},sort:[{available:{order:"desc"}},{ad_relevance:{order:"desc"}},"_score"],aggs:{brands:{terms:{field:"brands.name"}},categories:{terms:{field:"categories.name"}},specs:{nested:{path:"specs"},aggs:{grid:{terms:{field:"specs.grid",size:30},aggs:{text:{terms:{field:"specs.text"}}}}}},min_price:{min:{field:"price"}},max_price:{max:{field:"price"}},avg_price:{avg:{field:"price"}}}},s=r(121),a=r.n(s),c=t=>(t.dsl=a()(o),t.result=void 0,t.setPageSize().setSortOrder()),u=r(68),l=r.n(u);const d=t=>{const e=t&&t.nested&&t.nested.query;if(e&&e.bool&&Array.isArray(e.bool.filter))return e.bool.filter.find(t=>t.term)};var p=(t,e,r,n)=>{const i=null!==e?`${e}.${r}`:r;if(Array.isArray(n)){const o={terms:{}};let s;return o.terms[i]=n,s=null!==e?`${e}.${"_id"===r?"name":"_id"}`:"_id"===r?"sku":"_id",t.removeFilter(s).mergeFilter(o)}return null===n?t.removeFilter(i):t},f=r(86),h=({aggregations:t},e)=>{let r;return t&&t[e]&&(r=t[e].buckets),Array.isArray(r)&&r||[]};const g="object"==typeof window&&window.localStorage;e.default=function(t,e="ecomSeachHistory",r=g){const s=this;if(this.storeId=t||n.$ecomConfig.get("store_id"),this.storageKey=e,this.localStorage=r,this.history=[],this.dsl={},this.result=void 0,this.fetch=()=>((t,e)=>Object(i.search)({url:"/items.json",method:"post",data:t.dsl,axiosConfig:e}).then(({data:e})=>{t.result=e;const{dsl:r,history:n,localStorage:i,storageKey:o}=t;if(e.hits.total&&r&&r.suggest){const{text:t}=r.suggest;if(t){const e=n.indexOf(t);e>-1&&n.splice(e,1),n.unshift(t),i&&o&&i.setItem(o,n.slice(0,20).join("||"))}}return e}))(s),this.reset=()=>c(s),this.setSearchTerm=t=>((t,e)=>(l()(t.dsl,{query:{bool:{must:{multi_match:{query:e,fields:["name","keywords"]}}}},suggest:{text:e,words:{term:{field:"name"}}}}),t))(s,t),this.setPageNumber=t=>((t,e=1)=>(t.dsl.from=t.dsl.size*(e-1),t))(s,t),this.setPageSize=t=>((t,e=24)=>(t.dsl.size=e,t))(s,t),this.setSortOrder=t=>((t,e)=>{const r=o.sort.slice();switch(e){case"sales":r.splice(2,0,{sales:{order:"desc"}});break;case"lowest_price":r.splice(1,0,{price:{order:"asc"}});break;case"highest_price":r.splice(1,0,{price:{order:"desc"}});break;default:r.push({views:{order:"desc"}})}return t.dsl.sort=r,t})(s,t),this.mergeFilter=t=>((t,e)=>{const r=Object.keys(e)[0];l()(t.dsl,{query:{bool:{filter:[]}}});const n=t.dsl.query.bool.filter;switch(r){case"terms":case"term":case"range":if("object"==typeof e[r]&&null!==e[r]){const i=Object.keys(e[r])[0];for(let r=0;r<n.length;r++){const o=n[r][Object.keys(n[r])[0]];if("object"==typeof o&&null!==o&&Object.keys(o)[0]===i)return n[r]=e,t}}break;case"nested":const i=d(e);if(i){const r=Object.keys(i.term)[0],o=i.term[r];for(let i=0;i<n.length;i++){const s=d(n[i]);if(s&&s.term[r]===o)return n[i]=e,t}}}return n.push(e),t})(s,t),this.removeFilter=t=>((t,e)=>{const r=t.dsl.query&&t.dsl.query.bool&&t.dsl.query.bool.filter;if(Array.isArray(r))for(let t=0;t<r.length;t++){const n=r[t];if(n.nested&&n.nested.path===e||n[Object.keys(n)[0]][e]){r.splice(t,1);break}}return t})(s,t),this.setSpec=(t,e)=>((t,e,r)=>{if(Array.isArray(r))return t.mergeFilter({nested:{path:"specs",query:{bool:{filter:[{term:{"specs.grid":e}},{terms:{"specs.text":r}}]}}}});if(null===r){const r=t.dsl.query&&t.dsl.query.bool&&t.dsl.query.bool.filter;if(Array.isArray(r))for(let n=0;n<r.length;n++)if(r[n]&&r[n].nested){const{path:i,query:o}=r[n].nested;if("specs"===i&&o&&o.bool){const i=o.bool.filter;if(Array.isArray(i)&&i.find(({term:t})=>t&&t["specs.grid"]===e))return r.splice(n,1),t}}}return t})(s,t,e),this.setCategoryNames=t=>((t,e)=>p(t,"categories","name",e))(s,t),this.setCategoryIds=t=>((t,e)=>p(t,"categories","_id",e))(s,t),this.setBrandNames=t=>((t,e)=>p(t,"brands","name",e))(s,t),this.setBrandIds=t=>((t,e)=>p(t,"brands","_id",e))(s,t),this.setSkus=t=>((t,e)=>p(t,null,"sku",e))(s,t),this.setProductIds=t=>((t,e)=>p(t,null,"_id",e))(s,t),this.setPriceRange=(t,e)=>((t,e,r)=>{const n={};return"number"!=typeof e||isNaN(e)||(n.gte=e),"number"!=typeof r||isNaN(r)||(n.lte=r),t.mergeFilter({range:{price:n}})})(s,t,e),this.getItems=t=>((t,e)=>(e||(e=t.result),Object(f.a)(e)))(s,t),this.getTotalCount=t=>((t,e)=>(e||(e=t.result||{}),e.hits?e.hits.total:void 0))(s,t),this.getTermSuggestions=t=>((t,e)=>(e||(e=t.result||{}),e.suggest&&e.suggest.words||[]))(s,t),this.getBrands=t=>((t,e)=>h(e||t.result||{},"brands"))(s,t),this.getCategories=t=>((t,e)=>h(e||t.result||{},"categories"))(s,t),this.getPriceRange=t=>((t,e)=>{e||(e=t.result||{});const{aggregations:r}=e;return r?{min:r.min_price&&r.min_price.value||0,avg:r.avg_price&&r.avg_price.value||0,max:r.max_price&&r.max_price.value||0}:{min:0,avg:0,max:0}})(s,t),this.getSpecs=t=>((t,e)=>{if(e||(e=t.result||{}),e.aggregations){const{specs:t}=e.aggregations;if(t&&t.grid&&Array.isArray(t.grid.buckets))return t.grid.buckets.map(t=>({key:t.key,doc_count:t.doc_count,options:t.text&&t.text.buckets||[]}))}return[]})(s,t),c(s),r&&e){const t=r.getItem(e);"string"==typeof t&&(s.history=t.split("||"))}}},183:function(t,e,r){var n;window,n=function(t,e,r,n,i,o,s){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/assets/vendor/",r(r.s=18)}([function(e,r){e.exports=t},function(t,e,r){var n=r(13);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(6).default)("36d272bd",n,!0,{})},function(t,e,r){var n=r(15);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(6).default)("05bb3383",n,!0,{})},function(t,e,r){var n=r(17);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(6).default)("8924c98c",n,!0,{})},function(t,r){t.exports=e},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r,n,i,o=t[1]||"",s=t[3];if(!s)return o;if(e&&"function"==typeof btoa){var a=(r=s,n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(i," */")),c=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[o].concat(c).concat([a]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n=0;n<t.length;n++){var i=[].concat(t[n]);r&&(i[2]?i[2]="".concat(r," and ").concat(i[2]):i[2]=r),e.push(i)}},e}},function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],s=o[0],a={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}r.r(e),r.d(e,"default",(function(){return f}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,l=function(){},d=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,r,i){u=r,d=i||{};var s=n(t,e);return h(s),function(e){for(var r=[],i=0;i<s.length;i++){var a=s[i];(c=o[a.id]).refs--,r.push(c)}for(e?h(s=n(t,e)):s=[],i=0;i<r.length;i++){var c;if(0===(c=r[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function h(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(_(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(_(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:s}}}}function g(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function _(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(u)return l;n.parentNode.removeChild(n)}if(p){var i=c++;n=a||(a=g()),e=y.bind(null,n,i,!1),r=y.bind(null,n,i,!0)}else n=g(),e=v.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var b,m=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function y(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function v(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),d.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e){t.exports=i},function(t,e){t.exports=o},function(t,e){t.exports=s},function(t,e,r){"use strict";var n=r(1);r.n(n).a},function(t,e,r){(e=r(5)(!1)).push([t.i,".ec-image img{max-width:100%;height:auto}",""]),t.exports=e},function(t,e,r){"use strict";var n=r(2);r.n(n).a},function(t,e,r){(e=r(5)(!1)).push([t.i,".ec-prices{line-height:1.2}.ec-prices:not(.ec-prices--big){font-size:.95rem}.ec-prices:not(.ec-prices--big) .ec-prices__installments{font-weight:300}.ec-prices__value{display:block;font-size:1.25rem}.ec-prices--big .ec-prices__value{font-size:250%;margin-bottom:.25rem}.ec-prices--literal .ec-prices__discount span,.ec-prices--literal .ec-prices__installments span{font-weight:700}.ec-prices--literal small{font-size:100%}.ec-prices:not(.ec-prices--literal) .ec-prices__compare{color:var(--gray)}",""]),t.exports=e},function(t,e,r){"use strict";var n=r(3);r.n(n).a},function(t,e,r){(e=r(5)(!1)).push([t.i,".ec-product-card{position:relative;padding-bottom:.1rem;margin-bottom:0}.ec-product-card--inactive,.ec-product-card--inactive img{opacity:.7}.ec-product-card__offer-stamp{background-color:var(--success);color:var(--success-yiq);min-width:40px;font-size:.78rem;line-height:1.8;text-align:center;position:absolute;z-index:9;top:.35rem;right:.35rem;border-radius:.125rem;opacity:.9}.ec-product-card__link:hover h3{text-decoration:underline}.ec-product-card__name{margin-top:.5rem;font-size:.88rem;line-height:1.2;height:3.168rem;overflow:hidden;font-weight:400;display:block;z-index:1}.ec-product-card__pictures{display:-webkit-box;display:flex;background-color:var(--body-bg);-webkit-box-align:center;align-items:center;text-align:center;overflow:hidden}@media (max-width:575.98px){.ec-product-card__pictures{height:180px}}@media (min-width:576px) and (max-width:991.98px){.ec-product-card__pictures{height:200px}}@media (min-width:992px){.ec-product-card__pictures{height:250px}}.ec-product-card__picture{display:block;-webkit-box-flex:0;flex:0 0 100%;opacity:0;-webkit-transition:opacity .25s;transition:opacity .25s}.ec-product-card__picture:first-child{opacity:1}@media (max-width:300px){.ec-product-card__picture{max-width:100px}}@media (max-width:575.98px){.ec-product-card__picture img{max-height:180px}}@media (min-width:576px) and (max-width:991.98px){.ec-product-card__picture img{max-height:200px}}@media (min-width:992px){.ec-product-card__picture img{max-height:250px}}.ec-product-card__prices{margin-bottom:.15rem;height:4.95rem;overflow:hidden;white-space:nowrap}.ec-product-card__prices .ec-prices__value:first-child{margin-top:1.14rem}.ec-product-card:hover .ec-product-card__picture{display:none}.ec-product-card:hover .ec-product-card__picture:last-child{display:block;opacity:1}.ec-product-card:hover .ec-product-card__buy{opacity:1}",""]),t.exports=e},function(t,e,r){"use strict";r.r(e);var n=r(7),i=r.n(n),o=r(4),s=r.n(o),a=(r(11),r(0)),c=r(8),u=r(9),l=r.n(u);const d={from:{en_us:"from",pt_br:"de"},to:{en_us:"to",pt_br:"por"},unavailable:{en_us:"Unavailable",pt_br:"Indisponível"},out_of_stock:{en_us:"Out of stock",pt_br:"Sem estoque"},buy:{en_us:"Buy",pt_br:"Comprar"},up_to:{en_us:"up to",pt_br:"até"},zip:{en_us:"Zip code",pt_br:"CEP"},calculate_shipping:{en_us:"Calculate shipping",pt_br:"Calcular frete e prazo"},days:{en_us:"days",pt_br:"dias"},working_days:{en_us:"working days",pt_br:"dias úteis"},free_shipping:{en_us:"free shipping",pt_br:"frete grátis"},interest_free:{en_us:"interest free",pt_br:"sem juros"},discount_of:{en_us:"discount of",pt_br:"desconto de"}};var p=function(t,e){return e||(e=this&&this.lang||"en_us"),d[t]&&d[t][e]||""},f={name:"EcImage",props:{src:{type:[String,Object]},alt:{type:String,default:""},fade:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},pictureBreakpoint:{type:Number,default:576}},data(){return{imgClasses:`lozad ${this.fade?"fade":"show"}`}},computed:{imgObj(){return Object(a.img)(this.src)}},mounted(){const t=this.$refs.lazyImg;t&&s()(t,{loaded(t){t.classList.add("show")}}).observe()}};function h(t,e,r,n,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}r(12);var g=h(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ec-image"},["string"==typeof t.src?r("img",{ref:"lazyImg",class:t.imgClasses,attrs:{alt:t.alt,"data-src":t.src}}):t.src&&t.imgObj?r("picture",{ref:"lazyImg",class:t.imgClasses,attrs:{"data-iesrc":t.imgObj.url,"data-alt":t.imgObj.alt}},[t.src.small?r("source",{attrs:{srcset:t.src.small.url,media:"(max-width: "+(t.pictureBreakpoint-.02)+"px)"}}):t._e(),r("source",{attrs:{srcset:t.imgObj.url,media:"(min-width: "+t.pictureBreakpoint+"px)"}})]):r("img",{attrs:{src:t.placeholder,alt:"No image"}})])}),[],!1,null,null,null).exports,_={name:"EcPrices",props:{lang:{type:String,default:a.$ecomConfig.get("lang")},product:{type:Object,required:!0},literal:{type:Boolean},big:{type:Boolean},installmentsOption:{type:Object},discountOption:{type:Object},discountText:{type:[String,Boolean],default:""}},data(){return{interestFreeInstallments:0,discount:{type:null,value:0},discountLabel:this.discountText}},methods:{dictionary:p,onPromotion:a.onPromotion,formatMoney:a.formatMoney,updateInstallments(t){if(t&&!t.monthly_interest){const e=t.min_installment||5,r=parseInt(this.price/e,10);this.interestFreeInstallments=Math.min(r,t.max_number)}},updateDiscount(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},computed:{price(){return Object(a.price)(this.product)},priceWithDiscount(){const{type:t,value:e}=this.discount;if(e)return"percentage"===t?this.price*(100-e)/100:this.price-e}},created(){if(this.installmentsOption||this.discountOption)this.updateInstallments(this.installmentsOption),this.updateDiscount(this.discountOption);else{const{storefront:t}=window;if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}}},b=(r(14),{name:"EcProductCard",components:{EcImage:g,EcPrices:h(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ec-prices",class:{"ec-prices--literal":t.literal,"ec-prices--big":t.big}},[t.onPromotion(t.product)?r("span",{staticClass:"ec-prices__compare"},[t.literal?[t._v(" "+t._s(t.dictionary("from"))+" "),r("s",[t._v(t._s(t.formatMoney(t.product.base_price)))]),t._v(" "+t._s(t.dictionary("to"))+" ")]:r("s",[t._v(t._s(t.formatMoney(t.product.base_price)))])],2):t._e(),r("strong",{staticClass:"ec-prices__value"},[t._v(" "+t._s(t.formatMoney(t.price))+" ")]),r("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.interestFreeInstallments>1?r("div",{key:"installments",staticClass:"ec-prices__installments"},[t._v(" "+t._s(t.interestFreeInstallments)+"x "),r("span",[t._v(" "+t._s(t.formatMoney(t.price/t.interestFreeInstallments))+" ")]),t.literal?r("small",[t._v(" "+t._s(t.dictionary("interest_free"))+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?r("div",{key:"discount",staticClass:"ec-prices__discount"},[r("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),"string"==typeof t.discountLabel?r("small",[t._v(" "+t._s(t.discountLabel)+" ")]):t._e()]):t._e()])],1)}),[],!1,null,null,null).exports},props:{lang:{type:String,default:a.$ecomConfig.get("lang")},storeId:{type:Number,default:a.$ecomConfig.get("store_id")},productId:String,product:Object,buyText:String,canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,prerenderedHTML:String},data:()=>({body:{},isLoading:!1,error:""}),computed:{strBuy(){return this.buyText||this.dictionary("buy")},isActive(){const{body:t}=this;return t.available&&t.visible&&Object(a.inStock)(t)},discount(){const{body:t}=this;return Object(a.onPromotion)(t)?Math.round(100*(t.base_price-Object(a.price)(t))/t.base_price):0}},methods:{dictionary:p,name:a.name,inStock:a.inStock,setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text},fetchItem(){if(this.productId){this.isLoading=!0;const{storeId:t,productId:e}=this;Object(c.store)({url:`/products/${e}.json`,storeId:t}).then(({data:t})=>{this.$emit("update:product",t),this.setBody(t),this.$emit("update:is-loaded",!0)}).catch(t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error="pt_br"===this.lang?"Erro de conexão, clique no produto para tentar novamente":"Connection error, click product to try again")}).finally(()=>{this.isLoading=!1})}},buy(){const t=this.body;if(this.$emit("buy",{product:t}),this.canAddToCart){const{variations:e,slug:r}=t;e&&e.length?window.location=`/${r}`:l.a.addProduct(t)}}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}}),m=(r(16),h(b,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ec-product-card",class:t.body._id&&!t.isActive?"ec-product-card--inactive":null},[r("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isLoading?t._e():r("section",[t.isActive&&t.discount>0?r("span",{staticClass:"ec-product-card__offer-stamp"},[t._v(" -"),r("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e(),r("a",{staticClass:"ec-product-card__link",attrs:{href:"/"+t.body.slug,title:t.name(t.body)}},[r("div",{staticClass:"ec-product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2),(function(t,e){return r("ec-image",{key:e,staticClass:"ec-product-card__picture",attrs:{src:t,pictureBreakpoint:300}})})):r("ec-image",{staticClass:"ec-product-card__picture"})],2),r("h3",{staticClass:"ec-product-card__name"},[t._v(" "+t._s(t.name(t.body))+" ")])]),t.body.available&&t.body.visible?t.inStock(t.body)?[r("ec-prices",{staticClass:"ec-product-card__prices",attrs:{lang:t.lang,product:t.body}}),r("div",{staticClass:"ec-product-card__buy fade",on:{click:t.buy}},[t._t("buy",[r("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])])],2)]:r("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.dictionary("out_of_stock"))+" ")]):r("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.dictionary("unavailable"))+" ")])],2)]),t.isLoading?[t._t("default",[r("div",{domProps:{innerHTML:t._s(t.prerenderedHTML)}})]),t.error?r("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e()],2)}),[],!1,null,null,null).exports),y=r(10),v=r.n(y);e.default=(t={},e="product-card")=>{const r=document.querySelectorAll(`.${e}`),n=[];for(let t=0;t<r.length;t++)if(r[t]){const{productId:e}=r[t].dataset;-1===n.indexOf(e)&&n.push(e)}let o;if(n.length>=6&&n.length<=70&&!t.skipSearchApi){const t=new v.a;delete t.dsl.aggs,delete t.dsl.sort,t.setPageSize(n.length).setProductIds(n),o=t.fetch({timeout:5e3}).then(()=>{const e=t.getItems();for(let t=0;t<2;t++)a(r[t]);return e}).catch(t=>{console.error(t)})}else o=Promise.resolve();const a=r=>{if(r){const{productId:n,sku:s,toRender:a}=r.dataset;if(a){let a;o.then(t=>{Array.isArray(t)&&(a=t.find(({_id:t})=>t===n))}).finally(()=>{let o;if(a)o=!0;else{const t=r.parentNode;if(t&&(a=t.dataset.product,"string"==typeof a))try{a=JSON.parse(a)}catch(t){a=void 0}}((r,n,o,s,a)=>{new i.a({render:i=>i(m,{class:e,attrs:{"data-product-id":n,"data-sku":o},props:{...t.props,prerenderedHTML:r.outerHTML,productId:n,product:s,isLoaded:a}})}).$mount(r)})(r,n,s,a,o)})}}};s()(r,{load:a}).observe()}}]).default},t.exports=n(r(4),r(123),r(70),r(9),r(122),r(167),r(162))},188:function(t,e,r){"use strict";var n,i=r(11),o=r(28).f,s=r(29),a=r(189),c=r(40),u=r(191),l=r(22),d="".startsWith,p=Math.min,f=u("startsWith");i({target:"String",proto:!0,forced:!!(l||f||(n=o(String.prototype,"startsWith"),!n||n.writable))&&!f},{startsWith:function(t){var e=String(c(this));a(t);var r=s(p(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return d?d.call(e,n,r):e.slice(r,r+n.length)===n}})},189:function(t,e,r){var n=r(190);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},190:function(t,e,r){var n=r(10),i=r(18),o=r(3)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},191:function(t,e,r){var n=r(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},194:function(t,e,r){"use strict";r.r(e);r(58),r(47),r(48),r(168),r(101),r(188),r(102);var n=r(64),i=r(9),o=r(167),s=r(163),a=r(122),c=r(183),u=r.n(c);window.ecomClient=i.default,window.EcomSearch=o.default,window.ecomPassport=s.default,window.ecomCart=a.default,n.a.emit("ecom:ready");var l=window.location.pathname.startsWith("/app/"),d=window.screen.width<768,p=[],f="localhost"===window.location.hostname?50:1,h=function(t,e){var r=new Promise((function(r){setTimeout((function(){var i=window._widgets&&window._widgets[t];if(i){var o=i.active,s=i.options,a=i.desktopOnly,c=i.enableCheckout,u=i.disablePages;if(o&&(!a||!d)&&(l?c:!u))return e().then((function(e){"function"==typeof e.default&&e.default(s),n.a.emit("widget:".concat(t)),console.log("Widget loaded: ".concat(t))})).catch(console.error).finally(r)}r()}),f)}));p.push(r)};if(!l){var g=document.body.dataset.resource;g&&g.startsWith("product")?h("@ecomplus/widget-product",(function(){return r.e(4).then(r.t.bind(null,231,7))})):document.getElementById("search")&&h("@ecomplus/widget-search-engine",(function(){return r.e(7).then(r.t.bind(null,232,7))}))}Promise.all(p).then((function(){h("@ecomplus/widget-product-card",(function(){return Promise.resolve({default:u.a})})),l||(h("@ecomplus/widget-user",(function(){return r.e(11).then(r.t.bind(null,233,7))})),h("@ecomplus/widget-search",(function(){return r.e(8).then(r.t.bind(null,234,7))})),h("@ecomplus/widget-minicart",(function(){return r.e(6).then(r.t.bind(null,235,7))}))),Promise.all(p).then((function(){h("@ecomplus/widget-tag-manager",(function(){return r.e(9).then(r.bind(null,236))})),h("@ecomplus/widget-trustvox",(function(){return r.e(10).then(r.bind(null,237))}))}))}))},68:function(t,e,r){(function(t,r){var n=/^\[object .+?Constructor\]$/,i=/^(?:0|[1-9]\d*)$/,o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1;var s="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=s||a||Function("return this")(),u=e&&!e.nodeType&&e,l=u&&"object"==typeof r&&r&&!r.nodeType&&r,d=l&&l.exports===u,p=d&&s.process,f=function(){try{var t=l&&l.require&&l.require("util").types;return t||p&&p.binding&&p.binding("util")}catch(t){}}(),h=f&&f.isTypedArray;function g(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var _,b,m,y=Array.prototype,v=Function.prototype,w=Object.prototype,x=c["__core-js_shared__"],j=v.toString,O=w.hasOwnProperty,k=(_=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",A=w.toString,C=j.call(Object),S=RegExp("^"+j.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),I=d?c.Buffer:void 0,z=c.Symbol,$=c.Uint8Array,P=I?I.allocUnsafe:void 0,T=(b=Object.getPrototypeOf,m=Object,function(t){return b(m(t))}),M=Object.create,E=w.propertyIsEnumerable,L=y.splice,B=z?z.toStringTag:void 0,N=function(){try{var t=ut(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),q=I?I.isBuffer:void 0,F=Math.max,R=Date.now,U=ut(c,"Map"),D=ut(Object,"create"),W=function(){function t(){}return function(e){if(!wt(e))return{};if(M)return M(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function H(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function J(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function G(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function V(t){var e=this.__data__=new J(t);this.size=e.size}function K(t,e){var r=_t(t),n=!r&&gt(t),i=!r&&!n&&mt(t),o=!r&&!n&&!i&&jt(t),s=r||n||i||o,a=s?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var u in t)!e&&!O.call(t,u)||s&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||lt(u,c))||a.push(u);return a}function X(t,e,r){(void 0===r||ht(t[e],r))&&(void 0!==r||e in t)||Y(t,e,r)}function Z(t,e,r){var n=t[e];O.call(t,e)&&ht(n,r)&&(void 0!==r||e in t)||Y(t,e,r)}function Q(t,e){for(var r=t.length;r--;)if(ht(t[r][0],e))return r;return-1}function Y(t,e,r){"__proto__"==e&&N?N(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}H.prototype.clear=function(){this.__data__=D?D(null):{},this.size=0},H.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},H.prototype.get=function(t){var e=this.__data__;if(D){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return O.call(e,t)?e[t]:void 0},H.prototype.has=function(t){var e=this.__data__;return D?void 0!==e[t]:O.call(e,t)},H.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=D&&void 0===e?"__lodash_hash_undefined__":e,this},J.prototype.clear=function(){this.__data__=[],this.size=0},J.prototype.delete=function(t){var e=this.__data__,r=Q(e,t);return!(r<0)&&(r==e.length-1?e.pop():L.call(e,r,1),--this.size,!0)},J.prototype.get=function(t){var e=this.__data__,r=Q(e,t);return r<0?void 0:e[r][1]},J.prototype.has=function(t){return Q(this.__data__,t)>-1},J.prototype.set=function(t,e){var r=this.__data__,n=Q(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},G.prototype.clear=function(){this.size=0,this.__data__={hash:new H,map:new(U||J),string:new H}},G.prototype.delete=function(t){var e=ct(this,t).delete(t);return this.size-=e?1:0,e},G.prototype.get=function(t){return ct(this,t).get(t)},G.prototype.has=function(t){return ct(this,t).has(t)},G.prototype.set=function(t,e){var r=ct(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},V.prototype.clear=function(){this.__data__=new J,this.size=0},V.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},V.prototype.get=function(t){return this.__data__.get(t)},V.prototype.has=function(t){return this.__data__.has(t)},V.prototype.set=function(t,e){var r=this.__data__;if(r instanceof J){var n=r.__data__;if(!U||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new G(n)}return r.set(t,e),this.size=r.size,this};var tt,et=function(t,e,r){for(var n=-1,i=Object(t),o=r(t),s=o.length;s--;){var a=o[tt?s:++n];if(!1===e(i[a],a,i))break}return t};function rt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?function(t){var e=O.call(t,B),r=t[B];try{t[B]=void 0;var n=!0}catch(t){}var i=A.call(t);n&&(e?t[B]=r:delete t[B]);return i}(t):function(t){return A.call(t)}(t)}function nt(t){return xt(t)&&"[object Arguments]"==rt(t)}function it(t){return!(!wt(t)||function(t){return!!k&&k in t}(t))&&(yt(t)?S:n).test(function(t){if(null!=t){try{return j.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ot(t){if(!wt(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=dt(t),r=[];for(var n in t)("constructor"!=n||!e&&O.call(t,n))&&r.push(n);return r}function st(t,e,r,n,i){t!==e&&et(e,(function(o,s){if(i||(i=new V),wt(o))!function(t,e,r,n,i,o,s){var a=pt(t,r),c=pt(e,r),u=s.get(c);if(u)return void X(t,r,u);var l=o?o(a,c,r+"",t,e,s):void 0,d=void 0===l;if(d){var p=_t(c),f=!p&&mt(c),h=!p&&!f&&jt(c);l=c,p||f||h?_t(a)?l=a:xt(y=a)&&bt(y)?l=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(a):f?(d=!1,l=function(t,e){if(e)return t.slice();var r=t.length,n=P?P(r):new t.constructor(r);return t.copy(n),n}(c,!0)):h?(d=!1,g=c,_=!0?(b=g.buffer,m=new b.constructor(b.byteLength),new $(m).set(new $(b)),m):g.buffer,l=new g.constructor(_,g.byteOffset,g.length)):l=[]:function(t){if(!xt(t)||"[object Object]"!=rt(t))return!1;var e=T(t);if(null===e)return!0;var r=O.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&j.call(r)==C}(c)||gt(c)?(l=a,gt(a)?l=function(t){return function(t,e,r,n){var i=!r;r||(r={});var o=-1,s=e.length;for(;++o<s;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),i?Y(r,a,c):Z(r,a,c)}return r}(t,Ot(t))}(a):wt(a)&&!yt(a)||(l=function(t){return"function"!=typeof t.constructor||dt(t)?{}:W(T(t))}(c))):d=!1}var g,_,b,m;var y;d&&(s.set(c,l),i(l,c,n,o,s),s.delete(c));X(t,r,l)}(t,e,s,r,st,n,i);else{var a=n?n(pt(t,s),o,s+"",t,e,i):void 0;void 0===a&&(a=o),X(t,s,a)}}),Ot)}function at(t,e){return ft(function(t,e,r){return e=F(void 0===e?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=F(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),g(t,this,a)}}(t,e,Ct),t+"")}function ct(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return it(r)?r:void 0}function lt(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&i.test(t))&&t>-1&&t%1==0&&t<e}function dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||w)}function pt(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var ft=function(t){var e=0,r=0;return function(){var n=R(),i=16-(n-r);if(r=n,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(N?function(t,e){return N(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:Ct);function ht(t,e){return t===e||t!=t&&e!=e}var gt=nt(function(){return arguments}())?nt:function(t){return xt(t)&&O.call(t,"callee")&&!E.call(t,"callee")},_t=Array.isArray;function bt(t){return null!=t&&vt(t.length)&&!yt(t)}var mt=q||function(){return!1};function yt(t){if(!wt(t))return!1;var e=rt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function vt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function wt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function xt(t){return null!=t&&"object"==typeof t}var jt=h?function(t){return function(e){return t(e)}}(h):function(t){return xt(t)&&vt(t.length)&&!!o[rt(t)]};function Ot(t){return bt(t)?K(t,!0):ot(t)}var kt,At=(kt=function(t,e,r){st(t,e,r)},at((function(t,e){var r=-1,n=e.length,i=n>1?e[n-1]:void 0,o=n>2?e[2]:void 0;for(i=kt.length>3&&"function"==typeof i?(n--,i):void 0,o&&function(t,e,r){if(!wt(r))return!1;var n=typeof e;return!!("number"==n?bt(r)&&lt(e,r.length):"string"==n&&e in r)&&ht(r[e],t)}(e[0],e[1],o)&&(i=n<3?void 0:i,n=1),t=Object(t);++r<n;){var s=e[r];s&&kt(t,s,r,i)}return t})));function Ct(t){return t}r.exports=At}).call(this,r(24),r(116)(t))}},0,[4,7]]);
//# sourceMappingURL=5fd3b0872b4800e5cc31.js.map