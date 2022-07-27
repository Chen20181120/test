import{ag as bt,ah as yt,ai as gt,aj as U,d as pt,a2 as _t,P as p,G as ht,N as Ct,y as d,c as t,ak as _,al as s,am as xt,an as Tt,ao as Q,ap as St}from"./index.58c70948.js";var Pt=bt(Object.getPrototypeOf,Object),jt=Pt,mt="[object Object]",At=Function.prototype,Bt=Object.prototype,X=At.toString,Ot=Bt.hasOwnProperty,Et=X.call(Object);function $t(v){if(!yt(v)||gt(v)!=mt)return!1;var a=jt(v);if(a===null)return!0;var f=Ot.call(a,"constructor")&&a.constructor;return typeof f=="function"&&f instanceof f&&X.call(f)==Et}var kt=U.TabPane,Kt=function(){return{prefixCls:String,title:p.any,extra:p.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:p.any,tabList:{type:Array},tabBarExtraContent:p.any,activeTabKey:String,defaultActiveTabKey:String,cover:p.any,onTabChange:{type:Function}}},Gt=pt({name:"ACard",mixins:[_t],props:Kt(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(a,f){var r=f.slots,x=ht("card",a),Y=x.prefixCls,Z=x.direction,E=x.size,tt=function(l){var i=l.map(function(c,b){return Q(c)&&!St(c)||!Q(c)?t("li",{style:{width:"".concat(100/l.length,"%")},key:"action-".concat(b)},[t("span",null,[c])]):null});return i},at=function(l){var i;(i=a.onTabChange)===null||i===void 0||i.call(a,l)},et=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i;return l.forEach(function(c){c&&$t(c.type)&&c.type.__ANT_CARD_GRID&&(i=!0)}),i};return function(){var o,l,i,c,b,T,S,P,$=a.headStyle,nt=$===void 0?{}:$,k=a.bodyStyle,j=k===void 0?{}:k,K=a.loading,G=a.bordered,rt=G===void 0?!0:G,L=a.type,y=a.tabList,ot=a.hoverable,w=a.activeTabKey,lt=a.defaultActiveTabKey,z=a.tabBarExtraContent,D=z===void 0?(i=r.tabBarExtraContent)===null||i===void 0?void 0:i.call(r):z,N=a.title,m=N===void 0?(c=r.title)===null||c===void 0?void 0:c.call(r):N,I=a.extra,A=I===void 0?(b=r.extra)===null||b===void 0?void 0:b.call(r):I,R=a.actions,B=R===void 0?(T=r.actions)===null||T===void 0?void 0:T.call(r):R,F=a.cover,V=F===void 0?(S=r.cover)===null||S===void 0?void 0:S.call(r):F,h=Ct((P=r.default)===null||P===void 0?void 0:P.call(r)),e=Y.value,it=(o={},d(o,"".concat(e),!0),d(o,"".concat(e,"-loading"),K),d(o,"".concat(e,"-bordered"),rt),d(o,"".concat(e,"-hoverable"),!!ot),d(o,"".concat(e,"-contain-grid"),et(h)),d(o,"".concat(e,"-contain-tabs"),y&&y.length),d(o,"".concat(e,"-").concat(E.value),E.value),d(o,"".concat(e,"-type-").concat(L),!!L),d(o,"".concat(e,"-rtl"),Z.value==="rtl"),o),ct=j.padding===0||j.padding==="0px"?{padding:"24px"}:void 0,u=t("div",{class:"".concat(e,"-loading-block")},null),dt=t("div",{class:"".concat(e,"-loading-content"),style:ct},[t(_,{gutter:8},{default:function(){return[t(s,{span:22},{default:function(){return[u]}})]}}),t(_,{gutter:8},{default:function(){return[t(s,{span:8},{default:function(){return[u]}}),t(s,{span:15},{default:function(){return[u]}})]}}),t(_,{gutter:8},{default:function(){return[t(s,{span:6},{default:function(){return[u]}}),t(s,{span:18},{default:function(){return[u]}})]}}),t(_,{gutter:8},{default:function(){return[t(s,{span:13},{default:function(){return[u]}}),t(s,{span:9},{default:function(){return[u]}})]}}),t(_,{gutter:8},{default:function(){return[t(s,{span:4},{default:function(){return[u]}}),t(s,{span:3},{default:function(){return[u]}}),t(s,{span:16},{default:function(){return[u]}})]}})]),M=w!==void 0,ut=(l={size:"large"},d(l,M?"activeKey":"defaultActiveKey",M?w:lt),d(l,"onChange",at),d(l,"class","".concat(e,"-head-tabs")),l),W,q=y&&y.length?t(U,ut,{default:function(){return[y.map(function(n){var H=n.tab,C=n.slots,J=C==null?void 0:C.tab;xt(!C,"Card","tabList slots is deprecated, Please use `customTab` instead.");var O=H!==void 0?H:r[J]?r[J](n):null;return O=Tt(r,"customTab",n,function(){return[O]}),t(kt,{tab:O,key:n.key,disabled:n.disabled},null)})]},rightExtra:D?function(){return D}:null}):null;(m||A||q)&&(W=t("div",{class:"".concat(e,"-head"),style:nt},[t("div",{class:"".concat(e,"-head-wrapper")},[m&&t("div",{class:"".concat(e,"-head-title")},[m]),A&&t("div",{class:"".concat(e,"-extra")},[A])]),q]));var st=V?t("div",{class:"".concat(e,"-cover")},[V]):null,ft=t("div",{class:"".concat(e,"-body"),style:j},[K?dt:h]),vt=B&&B.length?t("ul",{class:"".concat(e,"-actions")},[tt(B)]):null;return t("div",{class:it,ref:"cardContainerRef"},[W,st,h&&h.length?ft:null,vt])}}}),wt=Gt;export{wt as C};
