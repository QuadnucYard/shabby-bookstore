import{q as I,G as N,g as A,d as D,B as M,H as S,m as G,z as L,E as p}from"./element-plus-d03682ba.js";import{u as O}from"./vue-router-cfababd1.js";import{g as j,r as q,m as H,c as J}from"./order-d14e2f84.js";import{_ as P}from"./lodash-86c374ca.js";import"./array-extensions-336e79e9.js";import{J as Q,e as f,j as V,i as W,o as x,c as X,a as s,S as K,u as m,Q as Y,R as l,X as a,G as E,V as i,W as _}from"./@vue-7143f52f.js";import"./lodash-es-6689e95d.js";import"./@vueuse-71394f68.js";import"./@element-plus-b2faaa35.js";import"./@popperjs-c75af06c.js";import"./@ctrl-43a4208a.js";import"./dayjs-904a9561.js";import"./@kangc-6605a7f7.js";import"./vue-58b885c9.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-b3b4f581.js";import"./index-bec14a8b.js";import"./vuex-af3025ab.js";import"./axios-6667cfca.js";import"./form-data-d2a9677b.js";const Z={class:"cart-wrap"},ee={class:"cart"},oe={class:"shopping-list"},te={class:"blue"},ae={class:"shopping-total"},le={class:"left"},ne={class:"right"},se=s("span",null,"总计(不含运费)：",-1),ce={class:"price"},$e=Q({__name:"shopping_cart",setup(ie){const y=O(),k=f(!0),r=f(!0),n=f([]),B=V(()=>P.sumBy(n.value,e=>e.checked?e.price*e.count:0));W(async()=>{const e=await j();n.value=e.map(o=>({bid:o.book.bid,checked:!0,name:o.book.name,cover:o.book.cover,price:o.book.price,count:o.count})),k.value=!1});const v=V(()=>n.value.filter(e=>e.checked).map(e=>e.bid)),g=e=>{n.value.forEach(o=>o.checked=e)},w=e=>{console.log("smartRemove",e,n.value.findIndex(o=>o.bid==e)),e?n.value.removeAt(n.value.findIndex(o=>o.bid==e)):n.value=n.value.filter(o=>!o.checked)},b=async e=>{const o=await q(e??v.value);p.success(o.message),w(e)},C=async e=>{await H(e??v.value),p.success("成功移入收藏夹"),w(e)},F=async()=>{const e=await J(v.value);if(e.code!=200){p.warning(e.message);return}n.value=n.value.filter(o=>!o.checked),p.success(e.message),setTimeout(()=>y.push({name:"checkout"}),1e3)};return(e,o)=>{const h=I,c=N,R=A,d=D,T=M,U=S,$=G,z=L;return x(),X("div",Z,[s("div",ee,[s("div",oe,[K((x(),Y(U,{data:m(n)},{default:l(()=>[a(c,{width:"60",align:"center"},{header:l(()=>[a(h,{modelValue:m(r),"onUpdate:modelValue":o[0]||(o[0]=t=>E(r)?r.value=t:null),label:"全选",size:"small",onChange:g},null,8,["modelValue"])]),default:l(t=>[a(h,{modelValue:t.row.checked,"onUpdate:modelValue":u=>t.row.checked=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(c,{width:"80",align:"center"},{default:l(t=>[a(R,{src:t.row.cover,style:{width:"80px",height:"80px"},fit:"contain"},null,8,["src"])]),_:1}),a(c,{width:"380",label:"商品信息"},{default:l(t=>[a(d,null,{default:l(()=>[i(_(t.row.name),1)]),_:2},1024)]),_:1}),a(c,{width:"120",label:"单价（元）",align:"center"},{default:l(t=>[i(" ￥"+_(t.row.price.toFixed(2)),1)]),_:1}),a(c,{width:"120",label:"数量",align:"center"},{default:l(t=>[a(T,{modelValue:t.row.count,"onUpdate:modelValue":u=>t.row.count=u,min:1,size:"small"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(c,{width:"120",label:"金额（元）",align:"center"},{default:l(t=>[s("span",te,_((t.row.checked?t.row.count*t.row.price:0).toFixed(2)),1)]),_:1}),a(c,{width:"80",label:"操作",align:"center"},{default:l(t=>[a(d,{onClick:u=>b(t.row.bid)},{default:l(()=>[i("删除")]),_:2},1032,["onClick"]),a(d,{onClick:u=>C(t.row.bid)},{default:l(()=>[i("移入收藏")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[z,m(k)]])])]),s("div",ae,[s("div",le,[a(h,{modelValue:m(r),"onUpdate:modelValue":o[1]||(o[1]=t=>E(r)?r.value=t:null),label:"全选",size:"small",onChange:g},null,8,["modelValue"]),a(d,{class:"fn-batch-remove",onClick:o[2]||(o[2]=t=>b())},{default:l(()=>[i("批量删除")]),_:1}),a(d,{class:"fn-batch-move",onClick:o[3]||(o[3]=t=>C())},{default:l(()=>[i("批量移入收藏")]),_:1})]),s("div",ne,[se,s("span",ce,"￥"+_(m(B).toFixed(2)),1),a($,{type:"primary",class:"fn-checkout",color:"#E65100",onClick:F},{default:l(()=>[i("结算")]),_:1})])])])}}});export{$e as default};
