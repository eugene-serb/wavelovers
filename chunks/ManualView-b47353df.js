import{d as l,s as a,_ as m,r as n,o as i,c as h,f as c,a as e,h as u,v as p,e as r,w,g as $,F as g,i as y}from"./main-9dff85e3.js";import{A as V,M as L,a as N}from"./OManual.vue_vue_type_style_index_0_lang-b3555778.js";import{_ as A}from"./ComputedGamepads.vue_vue_type_script_lang-6bd8d557.js";import{P as T}from"./PatternUnit-cfcc5827.js";const B=l({name:"OManual",mixins:[A],components:{AMessage:V,MToolsNav:L,MGamepadList:N},data:()=>({mode:0,lock:!1,startDelay:0,duration:260,weakMagnitude:0,strongMagnitude:0}),methods:{start:function(){const t=new T(this.startDelay,this.duration,this.weakMagnitude,this.strongMagnitude);a.dispatch("vibrate",t)},stop:function(){a.dispatch("setIsActive",!1),a.dispatch("setMode",0),a.dispatch("reset")},eventLoop:function(){this.updateComputed(),this.updateMode(),this.updatePattern(),this.handle()},updateMode:function(){this.gamepads.length>0&&(this.gamepads[0].unit.buttons[1].pressed===!0&&(this.lock=!this.lock),this.lock===!1&&(this.gamepads[0].unit.buttons[0].pressed===!0&&(this.mode=0),this.gamepads[0].unit.buttons[2].pressed===!0&&(this.mode=1),this.gamepads[0].unit.buttons[3].pressed===!0&&(this.mode=2)))},updatePattern:function(){this.gamepads.length>0&&this.lock===!1&&(this.mode===0&&(this.weakMagnitude=this.gamepads[0].unit.buttons[7].value,this.strongMagnitude=this.gamepads[0].unit.buttons[7].value),this.mode===1&&(this.weakMagnitude=0,this.strongMagnitude=this.gamepads[0].unit.buttons[7].value),this.mode===2&&(this.weakMagnitude=this.gamepads[0].unit.buttons[7].value,this.strongMagnitude=0))},handle:function(){this.gamepads.length>0&&this.gamepads.forEach(t=>{t.unit.buttons[7].value>0||this.lock===!0?this.start():this.stop()})}},mounted(){this.interval=window.setInterval(this.eventLoop,250)}}),C={class:"content-item app-manual"},P={class:"manual-form__input"},x=e("span",null,"Weak Magnitude",-1),O={class:"manual-form__input"},D=e("span",null,"Strong Magnitude",-1),G=y('<div class="manual-controls"><div><kbd>RT</kbd><span> — Vibrate</span></div><div><kbd>A</kbd><span> — Combined Mode</span></div><div><kbd>X</kbd><span> — Strong Mode</span></div><div><kbd>Y</kbd><span> — Light Mode</span></div><div><kbd>B</kbd><span> — Lock Intensity</span></div></div>',1);function I(t,s,f,M,v,_){const o=n("MToolsNav"),k=n("MGamepadList"),b=n("AMessage");return i(),h(g,null,[c(o),e("div",C,[e("label",P,[x,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>t.weakMagnitude=d),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[p,t.weakMagnitude]])]),e("label",O,[D,u(e("input",{"onUpdate:modelValue":s[1]||(s[1]=d=>t.strongMagnitude=d),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[p,t.strongMagnitude]])]),G]),t.gamepads.length>0?(i(),r(k,{key:0,gamepads:t.gamepads},null,8,["gamepads"])):(i(),r(b,{key:1},{default:w(()=>[$("Press any gamepad button or connect a new gamepad to vibrate.")]),_:1}))],64)}const S=m(B,[["render",I]]),U=l({name:"ManualView",components:{OManual:S}}),q=e("h1",{class:"visually-hidden"},"Wavelovers — Manual",-1);function E(t,s,f,M,v,_){const o=n("OManual");return i(),h(g,null,[q,c(o)],64)}const Y=m(U,[["render",E]]);export{Y as default};