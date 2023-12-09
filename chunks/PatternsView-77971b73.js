import{d as m,_ as u,o as t,c,a,t as $,n as P,r as o,F as f,b as k,e as i,s,f as M,w as v,g as y}from"./main-9dff85e3.js";import{A as C,M as L,a as N}from"./OManual.vue_vue_type_style_index_0_lang-b3555778.js";const b=m({name:"MPattern",props:{pattern:{type:Object,required:!0},index:{type:Number,required:!0},mode:{type:Number,required:!0},isActive:{type:Boolean,required:!0}},emits:{change(e){return e>=0}},methods:{change:function(e){this.$emit("change",e)}}}),q={class:"pattern-item__icon"},B={class:"pattern-item__info-container"},w={class:"pattern-item__name"},O={class:"pattern-item__type"};function V(e,r,l,_,g,h){return t(),c("div",{onClick:r[0]||(r[0]=n=>e.change(e.index)),class:P(["pattern-item",e.index===e.mode&&e.isActive===!0?"pattern-item_selected":""])},[a("span",q,$(e.pattern.icon),1),a("div",B,[a("span",w,$(e.pattern.name),1),a("span",O,$(e.pattern.type),1)])],2)}const T=u(b,[["render",V]]),G=m({name:"MPatternList",components:{MPattern:T},props:{patterns:{type:Array,required:!0},mode:{type:Number,required:!0},isActive:{type:Boolean,required:!0}},emits:{change(e){return e>=0}},methods:{change:function(e){this.$emit("change",e)}}}),F={class:"content-item pattern-list"};function j(e,r,l,_,g,h){const n=o("MPattern");return t(),c("div",F,[(t(!0),c(f,null,k(e.patterns,(p,d)=>(t(),i(n,{key:p.name,pattern:p,index:d,mode:e.mode,isActive:e.isActive,onChange:e.change},null,8,["pattern","index","mode","isActive","onChange"]))),128))])}const z=u(G,[["render",j]]),D=m({name:"OPatterns",components:{AMessage:C,MToolsNav:L,MPatternList:z,MGamepadList:N},computed:{gamepads:function(){return s.getters.gamepads},patterns:function(){return s.getters.patterns},mode:function(){return s.getters.mode},isActive:function(){return s.getters.isActive}},methods:{change(e){s.dispatch("change",e)}},mounted(){s.dispatch("loadPatterns")}}),E={class:"app-patterns"};function S(e,r,l,_,g,h){const n=o("MToolsNav"),p=o("MPatternList"),d=o("AMessage"),A=o("MGamepadList");return t(),c(f,null,[M(n),a("div",E,[e.patterns.length>0?(t(),i(p,{key:0,patterns:e.patterns,mode:e.mode,isActive:e.isActive,onChange:e.change},null,8,["patterns","mode","isActive","onChange"])):(t(),i(d,{key:1},{default:v(()=>[y("Loading...")]),_:1}))]),e.gamepads.length>0?(t(),i(A,{key:0,gamepads:e.gamepads},null,8,["gamepads"])):(t(),i(d,{key:1},{default:v(()=>[y("Press any gamepad button or connect a new gamepad to vibrate.")]),_:1}))],64)}const W=u(D,[["render",S]]),H=m({name:"PatternsView",components:{OPatterns:W}}),I=a("h1",{class:"visually-hidden"},"Wavelovers",-1);function J(e,r,l,_,g,h){const n=o("OPatterns");return t(),c(f,null,[I,M(n)],64)}const R=u(H,[["render",J]]);export{R as default};