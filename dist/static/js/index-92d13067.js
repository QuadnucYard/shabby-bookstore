import{ag as y,o as A,c as P,X as O,as as L}from"./@vue-7143f52f.js";import{c as b,a as w,u as R}from"./vue-router-cfababd1.js";import{c as I,u as V}from"./vuex-af3025ab.js";import{E as p,i as S}from"./element-plus-d03682ba.js";import{Q as T}from"./@element-plus-b2faaa35.js";import{V as d,a as h,b as g}from"./@kangc-6605a7f7.js";import{a as D}from"./axios-6667cfca.js";import"./lodash-es-6689e95d.js";import"./@vueuse-71394f68.js";import"./@popperjs-c75af06c.js";import"./@ctrl-43a4208a.js";import"./dayjs-904a9561.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-b3b4f581.js";import"./vue-58b885c9.js";import"./form-data-d2a9677b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const q=(e,t)=>{const r=e.__vccOpts||e;for(const[a,s]of t)r[a]=s;return r},M={},N={id:"app"};function $(e,t){const r=y("router-view");return A(),P("div",N,[O(r)])}const C=q(M,[["render",$]]),j="modulepreload",x=function(e){return"/shabby-bookstore/"+e},_={},n=function(t,r,a){if(!r||r.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=x(o),o in _)return;_[o]=!0;const i=o.endsWith(".css"),k=i?'[rel="stylesheet"]':"";if(!!a)for(let l=s.length-1;l>=0;l--){const m=s[l];if(m.href===o&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${k}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":j,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((l,m)=>{c.addEventListener("load",l),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},B=[{path:"/",component:()=>n(()=>import("./index-6ec89884.js"),["static/js/index-6ec89884.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/vue-router-cfababd1.js","static/js/vuex-af3025ab.js","static/js/auth-7bd062c3.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/index-543b7da2.css"]),meta:{keepalive:!1},children:[{path:"/",name:"home",component:()=>n(()=>import("./home-72dc5357.js"),["static/js/home-72dc5357.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/SearchBox.vue_vue_type_style_index_0_lang-a5948eb2.js","static/js/vue-router-cfababd1.js","static/js/lodash-86c374ca.js","static/css/SearchBox-6f7e87e0.css","static/css/home-cdec3643.css"]),meta:{keepalive:!1}},{path:"/auth/login",name:"login",component:()=>n(()=>import("./login-d2134506.js"),["static/js/login-d2134506.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/vue-router-cfababd1.js","static/js/vuex-af3025ab.js","static/js/auth-7bd062c3.js","static/js/rsaEncrypt-33a8859d.js","static/js/jsencrypt-a25df808.js","static/js/js-cookie-cf83ad76.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/login-8ea7b434.css"]),meta:{keepalive:!1}},{path:"/auth/register",name:"register",component:()=>n(()=>import("./register-55624d88.js"),["static/js/register-55624d88.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/vue-router-cfababd1.js","static/js/vuex-af3025ab.js","static/js/auth-7bd062c3.js","static/js/rsaEncrypt-33a8859d.js","static/js/jsencrypt-a25df808.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/register-001df9ce.css"]),meta:{keepalive:!1}},{path:"/book/list",name:"booklist",component:()=>n(()=>import("./booklist-fba6d146.js"),["static/js/booklist-fba6d146.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/vue-router-cfababd1.js","static/js/lodash-86c374ca.js","static/js/SearchBox.vue_vue_type_style_index_0_lang-a5948eb2.js","static/css/SearchBox-6f7e87e0.css","static/js/book-abeb84e2.js","static/js/order-5e247692.js","static/js/favorites-ca9d7093.js","static/js/vuex-af3025ab.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/booklist-e8d76dfc.css"]),meta:{keepalive:!1}},{path:"/book/:bid(\\d+)",name:"bookdetail",component:()=>n(()=>import("./bookdetail-e9d8e5d5.js"),["static/js/bookdetail-e9d8e5d5.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/SearchBox.vue_vue_type_style_index_0_lang-a5948eb2.js","static/js/vue-router-cfababd1.js","static/js/lodash-86c374ca.js","static/css/SearchBox-6f7e87e0.css","static/js/vuex-af3025ab.js","static/js/book-abeb84e2.js","static/js/order-5e247692.js","static/js/favorites-ca9d7093.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/bookdetail-c52d5069.css"]),meta:{keepalive:!1}},{path:"/favorites",name:"favorites",component:()=>n(()=>import("./favorites-45156908.js"),["static/js/favorites-45156908.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/favorites-ca9d7093.js","static/js/array-extensions-336e79e9.js","static/js/vue-router-cfababd1.js","static/js/vuex-af3025ab.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/favorites-b964599a.css"]),meta:{keepalive:!1,requireAuth:!0}},{path:"/shopping_cart",name:"shopping_cart",component:()=>n(()=>import("./shopping_cart-bf800af7.js"),["static/js/shopping_cart-bf800af7.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/vue-router-cfababd1.js","static/js/order-5e247692.js","static/js/lodash-86c374ca.js","static/js/array-extensions-336e79e9.js","static/js/vuex-af3025ab.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/shopping_cart-6c942f74.css"]),meta:{keepalive:!1,requireAuth:!0}},{path:"/shopping/checkout",name:"checkout",component:()=>n(()=>import("./checkout-11bb6360.js"),["static/js/checkout-11bb6360.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vue-7143f52f.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/vue-router-cfababd1.js","static/js/vuex-af3025ab.js","static/js/order-5e247692.js","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/checkout-a998454c.css"]),meta:{keepalive:!1,requireAuth:!0}},{path:"/:pathMatch(.*)",name:"error",component:()=>n(()=>import("./Error404-601d99a1.js"),["static/js/Error404-601d99a1.js","static/js/@vue-7143f52f.js","static/js/vue-router-cfababd1.js","static/js/vuex-af3025ab.js","static/js/element-plus-d03682ba.js","static/js/lodash-es-6689e95d.js","static/js/@vueuse-71394f68.js","static/js/@element-plus-b2faaa35.js","static/js/@popperjs-c75af06c.js","static/js/@ctrl-43a4208a.js","static/js/dayjs-904a9561.js","static/js/@kangc-6605a7f7.js","static/js/vue-58b885c9.js","static/css/@kangc-b28cd10e.css","static/js/async-validator-dee29e8b.js","static/js/memoize-one-297ddbcb.js","static/js/escape-html-1d60d822.js","static/js/normalize-wheel-es-ed76fb12.js","static/js/@floating-ui-b3b4f581.js","static/css/element-plus-be17b3d6.css","static/js/axios-6667cfca.js","static/js/form-data-d2a9677b.js","static/css/Error404-8ae16572.css"])}]}],v=b({history:w(),routes:B}),E=I({state:{user:window.localStorage.getItem("user")?JSON.parse(window.localStorage.getItem("user")):null,adminMenus:[]},mutations:{initAdminMenu(e,t){e.adminMenus=t},login(e,t){e.user=t,window.localStorage.setItem("user",JSON.stringify(t))},logout(e){e.user=null,window.localStorage.removeItem("user"),e.adminMenus=[]}},actions:{}});const f=D.create({baseURL:"http://127.0.0.1:5000/api",timeout:5e3,withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*"}});f.interceptors.request.use(e=>e,e=>{console.log(e),Promise.reject(e)});f.interceptors.response.use(e=>{const t=e.status;return t<200||t>300?Promise.reject("error"):e},e=>{let t=0;try{t=e.response.status}catch{if(e.toString().indexOf("Error: timeout")!==-1)return p.error("网络请求超时"),Promise.reject(e)}if(t)if(t===401)V().dispatch("logout").then(()=>{location.reload()});else if(t===403)R().push({path:"/401"});else{const r=e.response.data.message;r!==void 0?p.error(r):p.error("Unknown error")}else p.error("接口请求失败");return Promise.reject(e)});d.use(h);g.use(h);const u=L(C);u.use(v).use(S).use(E);u.use(d).use(g);console.log(u);for(const[e,t]of Object.entries(T))u.component(e,t);u.mount("#app");v.beforeEach((e,t,r)=>{console.log("beforeEach",e.meta.requireAuth),e.meta.requireAuth?E.state.user?f.get("/auth").then(a=>{a&&r()}):r({name:"login",query:{redirect:e.fullPath}}):r()});export{q as _,f as s};
