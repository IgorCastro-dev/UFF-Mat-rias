import{E as e,Ha as p,I as s,Ia as c,J as i,Ka as l,La as f,Ma as a,Sa as d,ja as m}from"./chunk-AJZ2QLGO.js";var y=[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",loadChildren:()=>import("./chunk-YJ7GNG62.js").then(o=>o.LoginModule)},{path:"area-logada-inicial",loadChildren:()=>import("./chunk-S7DNHSUK.js").then(o=>o.AreaLogadaInicialModule)}],h=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i({type:t}),t.\u0275inj=e({imports:[a.forRoot(y),a]});let o=t;return o})();var g=(()=>{let t=class t{constructor(){this.title="uff-materiais"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=s({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(r,C){r&1&&m(0,"router-outlet")},dependencies:[f]});let o=t;return o})();var M=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i({type:t,bootstrap:[g]}),t.\u0275inj=e({providers:[l()],imports:[c,h,d]});let o=t;return o})();p().bootstrapModule(M).catch(o=>console.error(o));