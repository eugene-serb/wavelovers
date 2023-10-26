"use strict";(self["webpackChunkwavelovers"]=self["webpackChunkwavelovers"]||[]).push([[736],{3913:function(t,n,a){var e=a(7327);class s{constructor(t,n,a,s){(0,e.Z)(this,"startDelay",void 0),(0,e.Z)(this,"duration",void 0),(0,e.Z)(this,"weakMagnitude",void 0),(0,e.Z)(this,"strongMagnitude",void 0),this.startDelay=t,this.duration=n,this.weakMagnitude=a,this.strongMagnitude=s}}n.Z=s},4524:function(t,n,a){a.d(n,{Z:function(){return _}});var e=a(3396),s=a(7139);const i={class:"content-item device-list"};function o(t,n,a,o,u,r){const l=(0,e.up)("GamepadItem");return(0,e.wg)(),(0,e.iD)("div",i,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.gamepads,(t=>((0,e.wg)(),(0,e.j4)(l,{key:t.id,textContent:(0,s.zw)(t.unit.id)},null,8,["textContent"])))),128))])}const u={class:"list-item"};function r(t,n,a,s,i,o){return(0,e.wg)(),(0,e.iD)("div",u)}var l=(0,e.aZ)({name:"GamepadItem"}),m=a(89);const d=(0,m.Z)(l,[["render",r]]);var c=d,p=(0,e.aZ)({name:"GamepadList",props:{gamepads:{type:Array}},components:{GamepadItem:c}});const g=(0,m.Z)(p,[["render",o]]);var _=g},6078:function(t,n,a){a.d(n,{Z:function(){return l}});var e=a(3396);const s={class:"content-item message"};function i(t,n,a,i,o,u){return(0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("span",null,[(0,e.WI)(t.$slots,"default")])])}var o=(0,e.aZ)({name:"MessageItem"}),u=a(89);const r=(0,u.Z)(o,[["render",i]]);var l=r},1709:function(t,n,a){a.d(n,{Z:function(){return l}});var e=a(3396);const s={class:"content-item navigation-list"};function i(t,n,a,i,o,u){const r=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",s,[(0,e.Wm)(r,{to:"/",class:"navigation-list__item"},{default:(0,e.w5)((()=>[(0,e.Uk)("Patterns")])),_:1}),(0,e.Wm)(r,{to:"/custom",class:"navigation-list__item"},{default:(0,e.w5)((()=>[(0,e.Uk)("Custom")])),_:1}),(0,e.Wm)(r,{to:"/manual",class:"navigation-list__item"},{default:(0,e.w5)((()=>[(0,e.Uk)("Manual")])),_:1}),(0,e.Wm)(r,{to:"/diagnostic",class:"navigation-list__item"},{default:(0,e.w5)((()=>[(0,e.Uk)("Diagnostic")])),_:1})])}var o=(0,e.aZ)({name:"NavigationList"}),u=a(89);const r=(0,u.Z)(o,[["render",i]]);var l=r},3736:function(t,n,a){a.r(n),a.d(n,{default:function(){return x}});var e=a(3396);const s=(0,e._)("h1",{class:"visually-hidden"},"Wavelovers � Custom",-1);function i(t,n,a,i,o,u){const r=(0,e.up)("AppCustom");return(0,e.wg)(),(0,e.iD)(e.HY,null,[s,(0,e.Wm)(r)],64)}var o=a(9242);const u={class:"content-item app-custom"},r={class:"custom-form"},l={class:"custom-form__input"},m=(0,e._)("span",null,"Start Delay (ms)",-1),d={class:"custom-form__input"},c=(0,e._)("span",null,"Duration (ms)",-1),p={class:"custom-form__input"},g=(0,e._)("span",null,"Weak Magnitude",-1),_={class:"custom-form__input"},v=(0,e._)("span",null,"Strong Magnitude",-1),f={class:"custom-form__buttons"};function w(t,n,a,s,i,w){const Z=(0,e.up)("NavigationList"),h=(0,e.up)("GamepadList"),y=(0,e.up)("MessageItem");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(Z),(0,e._)("div",u,[(0,e._)("fieldset",r,[(0,e._)("label",l,[m,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[0]||(n[0]=n=>t.startDelay=n),type:"number",placeholder:"Start Delay",min:"0",max:"1000",step:"25",required:""},null,512),[[o.nr,t.startDelay]])]),(0,e._)("label",d,[c,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[1]||(n[1]=n=>t.duration=n),type:"number",placeholder:"Duration",min:"0",max:"1000",step:"25",required:""},null,512),[[o.nr,t.duration]])]),(0,e._)("label",p,[g,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[2]||(n[2]=n=>t.weakMagnitude=n),type:"range",required:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[o.nr,t.weakMagnitude]])]),(0,e._)("label",_,[v,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[3]||(n[3]=n=>t.strongMagnitude=n),type:"range",required:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[o.nr,t.strongMagnitude]])]),(0,e._)("div",f,[(0,e._)("button",{onClick:n[4]||(n[4]=(...n)=>t.start&&t.start(...n)),class:"custom-form__button"},"Start"),(0,e._)("button",{onClick:n[5]||(n[5]=(...n)=>t.stop&&t.stop(...n)),class:"custom-form__button"},"Stop")])])]),t.gamepads.length>0?((0,e.wg)(),(0,e.j4)(h,{key:0,gamepads:t.gamepads},null,8,["gamepads"])):((0,e.wg)(),(0,e.j4)(y,{key:1},{default:(0,e.w5)((()=>[(0,e.Uk)("Press any gamepad button or connect a new gamepad to vibrate.")])),_:1}))],64)}var Z=a(1746),h=a(1709),y=a(4524),k=a(6078),D=a(3913),M=(0,e.aZ)({name:"AppCustom",components:{NavigationList:h.Z,GamepadList:y.Z,MessageItem:k.Z},data:()=>({startDelay:250,duration:250,weakMagnitude:1,strongMagnitude:1}),computed:{gamepads:function(){return Z.Z.getters.gamepads}},methods:{start:function(){const t=[new D.Z(this.startDelay,this.duration,this.weakMagnitude,this.strongMagnitude)];Z.Z.dispatch("startCustom",t)},stop:function(){Z.Z.dispatch("reset")}}}),b=a(89);const C=(0,b.Z)(M,[["render",w]]);var U=C,W=(0,e.aZ)({name:"CustomView",components:{AppCustom:U}});const I=(0,b.Z)(W,[["render",i]]);var x=I}}]);
//# sourceMappingURL=736.630c07ee.js.map