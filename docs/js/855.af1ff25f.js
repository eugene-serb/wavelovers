"use strict";(self["webpackChunkwavelovers"]=self["webpackChunkwavelovers"]||[]).push([[855],{3913:function(t,a,e){var s=e(2482);class n{constructor(t,a,e,n){(0,s.Z)(this,"startDelay",void 0),(0,s.Z)(this,"duration",void 0),(0,s.Z)(this,"weakMagnitude",void 0),(0,s.Z)(this,"strongMagnitude",void 0),this.startDelay=t,this.duration=a,this.weakMagnitude=e,this.strongMagnitude=n}}a["Z"]=n},7855:function(t,a,e){e.r(a),e.d(a,{default:function(){return D}});var s=e(3396);const n=(0,s._)("h1",{class:"visually-hidden"},"Wavelovers � Manual",-1);function i(t,a,e,i,d,u){const o=(0,s.up)("AppManual");return(0,s.wg)(),(0,s.iD)(s.HY,null,[n,(0,s.Wm)(o)],64)}var d=e(9242);const u={class:"content-item app-manual"},o={class:"manual-form__input"},p=(0,s._)("span",null,"Weak Magnitude",-1),r={class:"manual-form__input"},l=(0,s._)("span",null,"Strong Magnitude",-1),h=(0,s.uE)('<div class="manual-controls"><div><kbd>RT</kbd><span> – Vibrate</span></div><div><kbd>A</kbd><span> – Light Mode</span></div><div><kbd>X</kbd><span> – Heavy Mode</span></div><div><kbd>Y</kbd><span> – Combined Mode</span></div><div><kbd>B</kbd><span> – Lock</span></div></div>',1),g=(0,s.Uk)("Press any gamepad button or connect a new gamepad to vibrate.");function m(t,a,e,n,i,m){const c=(0,s.up)("NavigationList"),v=(0,s.up)("GamepadList"),k=(0,s.up)("MessageItem");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c),(0,s._)("div",u,[(0,s._)("label",o,[p,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a[0]||(a[0]=a=>t.weakMagnitude=a),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[d.nr,t.weakMagnitude]])]),(0,s._)("label",r,[l,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>t.strongMagnitude=a),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[d.nr,t.strongMagnitude]])]),h]),t.gamepads.length>0?((0,s.wg)(),(0,s.j4)(v,{key:0,gamepads:t.gamepads},null,8,["gamepads"])):((0,s.wg)(),(0,s.j4)(k,{key:1},{default:(0,s.w5)((()=>[g])),_:1}))],64)}var c=e(1746),v=e(81),k=e(1850),M=e(2347),b=e(3913),w=(0,s.aZ)({name:"AppCustom",components:{NavigationList:v.Z,GamepadList:k.Z,MessageItem:M.Z},data:()=>({timestamp:0,interval:0,mode:0,lock:!1,startDelay:0,duration:260,weakMagnitude:0,strongMagnitude:0}),computed:{gamepads:function(){const t=this.timestamp,a=c.Z.getters.gamepads;return a.forEach((a=>{a.interval=t})),a}},methods:{start:function(){const t=new b.Z(this.startDelay,this.duration,this.weakMagnitude,this.strongMagnitude);c.Z.dispatch("vibrate",t)},stop:function(){c.Z.dispatch("setIsActive",!1),c.Z.dispatch("setMode",0),c.Z.dispatch("reset")},eventLoop:function(){this.updateComputed(),this.updateMode(),this.updatePattern(),this.handle()},updateComputed:function(){this.timestamp=Date.now()},updateMode:function(){this.gamepads.length>0&&(!0===this.gamepads[0].unit.buttons[1].pressed&&(this.lock=!this.lock),!1===this.lock&&(!0===this.gamepads[0].unit.buttons[0].pressed&&(this.mode=0),!0===this.gamepads[0].unit.buttons[2].pressed&&(this.mode=1),!0===this.gamepads[0].unit.buttons[3].pressed&&(this.mode=2)))},updatePattern:function(){this.gamepads.length>0&&!1===this.lock&&(0===this.mode&&(this.weakMagnitude=this.gamepads[0].unit.buttons[7].value,this.strongMagnitude=this.gamepads[0].unit.buttons[7].value),1===this.mode&&(this.weakMagnitude=0,this.strongMagnitude=this.gamepads[0].unit.buttons[7].value),2===this.mode&&(this.weakMagnitude=this.gamepads[0].unit.buttons[7].value,this.strongMagnitude=0))},handle:function(){this.gamepads.length>0&&this.gamepads.forEach((t=>{t.unit.buttons[7].value>0||!0===this.lock?this.start():this.stop()}))}},mounted(){this.interval=setInterval(this.eventLoop,250)},unmounted(){clearInterval(this.interval)}}),f=e(89);const Z=(0,f.Z)(w,[["render",m]]);var y=Z,_=(0,s.aZ)({name:"ManualView",components:{AppManual:y}});const L=(0,f.Z)(_,[["render",i]]);var D=L}}]);
//# sourceMappingURL=855.af1ff25f.js.map