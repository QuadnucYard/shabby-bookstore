import{s as a}from"./index-cd39f23f.js";async function r(t,o,n,s){const e={page:t,pageSize:o,...n,category:s};return(await a.get("/book/list",{params:e})).data.data}async function i(t){return(await a.get(`/book/b${t}`)).data.data}async function g(t){return(await a.get(`/book/comments/c${t}`)).data.data}async function m(){return(await a.get("/category")).data.data}async function u(t,o,n){return(await a.post("/book/comments/post",{bid:t,star:o,content:n})).data}export{r as a,i as b,g as c,m as g,u as p};