import{d as m,u as b,s as w,_ as h,r as a,o as n,c as g,f as v,a as t,h as r,v as l,e as c,w as $,g as y,F as M,i as V}from"./main-0FHCm1R5.js";import{_ as A,A as L,M as N,a as T}from"./OManual.vue_vue_type_style_index_0_lang-h75IVx3s.js";const B=m({name:"OManual",mixins:[A],components:{AMessage:L,MToolsNav:N,MGamepadList:T},setup(){const e=b(),{isActive:s,mode:i}=w(e),{vibrate:o,reset:d}=e;return{isActive:s,patternMode:i,vibrate:o,reset:d}},data:()=>({mode:0,lock:!1,startDelay:0,duration:260,weakMagnitude:0,strongMagnitude:0}),methods:{start:function(){const e={startDelay:this.startDelay,duration:this.duration,weakMagnitude:this.weakMagnitude,strongMagnitude:this.strongMagnitude};this.vibrate(e)},stop:function(){this.reset(),this.isActive=!1,this.patternMode=0},eventLoop:function(){this.updateComputed(),this.updateMode(),this.updatePattern(),this.handle()},updateMode:function(){this.gamepads.length&&(this.gamepads[0].device.buttons[1].pressed&&(this.lock=!this.lock),this.lock||(this.gamepads[0].device.buttons[0].pressed&&(this.mode=0),this.gamepads[0].device.buttons[2].pressed&&(this.mode=1),this.gamepads[0].device.buttons[3].pressed&&(this.mode=2)))},updatePattern:function(){this.gamepads.length&&(this.lock||(this.mode===0&&(this.weakMagnitude=this.gamepads[0].device.buttons[7].value,this.strongMagnitude=this.gamepads[0].device.buttons[7].value),this.mode===1&&(this.weakMagnitude=0,this.strongMagnitude=this.gamepads[0].device.buttons[7].value),this.mode===2&&(this.weakMagnitude=this.gamepads[0].device.buttons[7].value,this.strongMagnitude=0)))},handle:function(){this.gamepads.length&&this.gamepads.forEach(e=>{e.device.buttons[7].value||this.lock?this.start():this.stop()})}},mounted(){this.interval=window.setInterval(this.eventLoop,250)}}),C={class:"content-item app-manual"},x={class:"manual-form__input"},D=t("span",null,"Weak Magnitude",-1),G={class:"manual-form__input"},O=t("span",null,"Strong Magnitude",-1),P=V('<div class="manual-controls"><div><kbd>RT</kbd><span> — Vibrate</span></div><div><kbd>A</kbd><span> — Combined Mode</span></div><div><kbd>X</kbd><span> — Strong Mode</span></div><div><kbd>Y</kbd><span> — Light Mode</span></div><div><kbd>B</kbd><span> — Lock Intensity</span></div></div>',1);function S(e,s,i,o,d,f){const u=a("MToolsNav"),_=a("MGamepadList"),k=a("AMessage");return n(),g(M,null,[v(u),t("div",C,[t("label",x,[D,r(t("input",{"onUpdate:modelValue":s[0]||(s[0]=p=>e.weakMagnitude=p),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[l,e.weakMagnitude]])]),t("label",G,[O,r(t("input",{"onUpdate:modelValue":s[1]||(s[1]=p=>e.strongMagnitude=p),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[l,e.strongMagnitude]])]),P]),e.gamepads.length>0?(n(),c(_,{key:0,gamepads:e.gamepads},null,8,["gamepads"])):(n(),c(k,{key:1},{default:$(()=>[y("Press any gamepad button or connect a new gamepad to vibrate.")]),_:1}))],64)}const q=h(B,[["render",S]]),E=m({name:"ManualView",components:{OManual:q}}),F=t("h1",{class:"visually-hidden"},"Wavelovers — Manual",-1);function I(e,s,i,o,d,f){const u=a("OManual");return n(),g(M,null,[F,v(u)],64)}const W=h(E,[["render",I]]);export{W as default};
