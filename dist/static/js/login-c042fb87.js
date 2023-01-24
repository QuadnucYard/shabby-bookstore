import{E as u,k as R,l as $,q,m as B,n as S,r as F}from"./element-plus-d03682ba.js";import{b as K,u as L}from"./vue-router-cfababd1.js";import{u as N}from"./vuex-af3025ab.js";import{J as U,e as g,a0 as w,i as j,ag as J,o as O,c as T,X as r,R as n,u as m,a7 as X,V as d,$ as z,ba as A,b8 as D,a as G}from"./@vue-7143f52f.js";import{b as H}from"./auth-6d84af4a.js";import{e as P}from"./rsaEncrypt-33a8859d.js";import{a}from"./js-cookie-cf83ad76.js";import{_ as Q}from"./index-bec14a8b.js";import"./lodash-es-6689e95d.js";import"./@vueuse-71394f68.js";import"./@element-plus-b2faaa35.js";import"./@popperjs-c75af06c.js";import"./@ctrl-43a4208a.js";import"./dayjs-904a9561.js";import"./@kangc-6605a7f7.js";import"./vue-58b885c9.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-b3b4f581.js";import"./jsencrypt-a25df808.js";import"./axios-6667cfca.js";import"./form-data-d2a9677b.js";const W=i=>(A("data-v-41f0d2d9"),i=i(),D(),i),Y={class:"center-form-wrapper"},Z=W(()=>G("h1",{class:"title"},"欢迎使用",-1)),ee=U({__name:"login",setup(i){const b=K(),v=L(),c=N();g("");const e=w({username:"",password:"",rememberMe:!1,code:""}),y=w({username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}],code:[{required:!0,trigger:"change",message:"验证码不能为空"}]}),f=g(),M=console.log;j(()=>{x(),V()});function x(){const p=a.get("username"),o=a.get("password"),t=a.get("rememberMe");Object.assign(e,{username:p??e.username,password:o??e.password,rememberMe:t!==void 0,code:""})}async function _(p){await p.validate(async o=>{console.log("handleLogin valid ?",o);const t={username:e.username,password:e.password,rememberMe:e.rememberMe,code:e.code};if(!o){u.error("登录信息不合法");return}t.rememberMe?(a.set("username",t.username,{expires:7}),a.set("password",t.password,{expires:7}),a.set("rememberMe","true",{expires:7})):(a.remove("username"),a.remove("password"),a.remove("rememberMe")),t.password=P(t.password);const s=await H(t);return console.log("reLogin",s.data),s.code!=200?(u.error(s.message),!1):(c.commit("login",s.data),M(c.state),v.replace({path:b.query.redirect??"/"}),u.success(s.message),!0)})}function V(){a.get("point")&&(u.warning("当前登录状态已过期，请重新登录！"),a.remove("point"))}return(p,o)=>{const t=R,s=$,h=q,k=B,E=J("router-link"),C=S,I=F;return O(),T("div",Y,[r(I,{class:"center-form"},{default:n(()=>[r(C,{ref_key:"formRef",ref:f,model:m(e),rules:m(y),"label-width":"80px"},{default:n(()=>[Z,r(s,{label:"用户名",prop:"username"},{default:n(()=>[r(t,{modelValue:m(e).username,"onUpdate:modelValue":o[0]||(o[0]=l=>m(e).username=l),type:"text","auto-complete":"off",placeholder:"用户名、手机号或电子邮箱"},null,8,["modelValue"])]),_:1}),r(s,{label:"密码",prop:"password"},{default:n(()=>[r(t,{modelValue:m(e).password,"onUpdate:modelValue":o[1]||(o[1]=l=>m(e).password=l),type:"password","auto-complete":"off",placeholder:"密码",onKeyup:X(_,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),r(s,null,{default:n(()=>[r(h,{modelValue:m(e).rememberMe,"onUpdate:modelValue":o[2]||(o[2]=l=>m(e).rememberMe=l)},{default:n(()=>[d(" 记住我 ")]),_:1},8,["modelValue"])]),_:1}),r(s,null,{default:n(()=>[r(k,{type:"primary",onClick:o[3]||(o[3]=z(l=>_(m(f)),["prevent"]))},{default:n(()=>[d("登录")]),_:1})]),_:1}),r(s,null,{default:n(()=>[r(E,{underline:!1,to:{name:"register"}},{default:n(()=>[d("注册")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const ke=Q(ee,[["__scopeId","data-v-41f0d2d9"]]);export{ke as default};
