(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{236:function(e,t,o){"use strict";o.r(t);var c=o(87),n=o(26),r=o(21),a=o(35);const s=n.$ecomConfig.get("currency")||"BRL",u=e=>{const t={name:Object(r.a)(e),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t};var d=o(122);t.default=(e={})=>{const{dataLayerVar:t,parseDomMsDelay:o}=e,n=window[t]||window.dataLayer;n&&((e=>{const t=window.storefront&&window.storefront.context;if(t&&"products"===t.resource){const{body:o}=t,n=u(o),r={event:"eec.detail",ecommerce:{currencyCode:s,detail:{products:[n]}}},a=Object(c.a)(o);a.length&&(n.category=o.category_tree?o.category_tree.replace(/\s>\s/g,"/"):a[0],r.ecommerce.detail.actionField={list:a[0]}),o.brands&&o.brands.length&&(n.brand=o.brands[0].name),e.push(r)}})(n),(e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let o=!1;const c=()=>{const e=[];return d.default.data&&Array.isArray(d.default.data.items)&&d.default.data.items.forEach(t=>{e.push(u(t))}),e},n=(t,n)=>{const r={step:t,option:n};t<=1||!o?(e.push({event:"eec.checkout",ecommerce:{currencyCode:s,checkout:{actionField:r,products:c()}}}),e.push({event:"checkout"}),o=!0):(e.push({event:"eec.checkout_option",ecommerce:{currencyCode:s,checkout_option:{actionField:r}}}),e.push({event:"checkoutOption"}))},r=t=>{const{amount:o}=window.storefrontApp,n=(o&&o.total||d.default.data&&d.default.data.subtotal||0).toFixed(2);e.push({event:"eec.purchase",ecommerce:{currencyCode:s,purchase:{actionField:{id:t,revenue:n},products:c()}}})},a=({name:e,params:t})=>{switch(e){case"cart":n(1,"Review Cart");break;case"checkout":n(2,"Confirm Purchase");break;case"confirmation":r(t.id)}};t.currentRoute&&a(t.currentRoute),t.afterEach(a)}})(n),(e=>{const t={},o=o=>{const c=u(o);e.push({event:"eec.add",ecommerce:{currencyCode:s,add:{products:[c]}}}),e.push({event:"addToCart"}),t[o.sku]=c},c=o=>{const c=t[o.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:s,remove:{products:[c?Object.assign({},c):u(o)]}}}),e.push({event:"removeFromCart"}),delete t[o.sku]};d.default.on("addItem",({item:e})=>o(e)),d.default.on("increaseItemQnt",({item:e})=>{const n=t[e.sku];if(n){const t=e.quantity-n.quantity;t>0?o({...e,quantity:t}):c({...e,quantity:-t})}else o(e)}),d.default.on("removeItem",({item:e})=>c(e)),d.default.on("clear",()=>{for(const e in t)t[e]&&c(t[e])})})(n),setTimeout(()=>{(e=>{const t=document.querySelectorAll("[data-sku]");if(t.length){const o=[],c={},n="/search"===window.location.pathname;for(let e=0;e<t.length;e++){const r=t[e],{sku:a}=r.dataset;if(-1===o.indexOf(a)&&(o.push(a),r.closest)){const e=r.closest(".products-carousel");!n&&e&&(c[a]=e.dataset.title)}}e.push({event:"eec.impressions",ecommerce:{currencyCode:s,impressions:o.map(e=>{const t=n?"Search results":c[e],o={id:e};return t&&(o.list=t),o})}})}})(n)},o>=0?o:300))}}}]);
//# sourceMappingURL=8be48107553d587c3eea.js.map