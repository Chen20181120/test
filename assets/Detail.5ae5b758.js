import{d as T,G as D,L as x,T as L,y as f,c as l,aX as q,aY as z,P as E,r as H,a5 as J,F as y,aZ as M,aK as Q,h as ee,j as ne,k as p,l as ae,w as s,a_ as h,a$ as V,m as te,n as k,p as I,ae as R}from"./index.58c70948.js";import{C as oe}from"./Card.bca24556.js";var le=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},ce=T({name:"ACheckableTag",props:le(),setup:function(e,u){var a=u.slots,i=u.emit,_=D("tag",e),c=_.prefixCls,o=function(C){var v=e.checked;i("update:checked",!v),i("change",!v),i("click",C)},m=x(function(){var t;return L(c.value,(t={},f(t,"".concat(c.value,"-checkable"),!0),f(t,"".concat(c.value,"-checkable-checked"),e.checked),t))});return function(){var t;return l("span",{class:m.value,onClick:o},[(t=a.default)===null||t===void 0?void 0:t.call(a)])}}}),P=ce,se=new RegExp("^(".concat(q.join("|"),")(-inverse)?$")),re=new RegExp("^(".concat(z.join("|"),")$")),ie=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:E.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:E.any}},g=T({name:"ATag",props:ie(),slots:["closeIcon","icon"],setup:function(e,u){var a=u.slots,i=u.emit,_=u.attrs,c=D("tag",e),o=c.prefixCls,m=c.direction,t=H(!0);J(function(){e.visible!==void 0&&(t.value=e.visible)});var C=function(d){d.stopPropagation(),i("update:visible",!1),i("close",d),!d.defaultPrevented&&e.visible===void 0&&(t.value=!1)},v=x(function(){var n=e.color;return n?se.test(n)||re.test(n):!1}),U=x(function(){var n;return L(o.value,(n={},f(n,"".concat(o.value,"-").concat(e.color),v.value),f(n,"".concat(o.value,"-has-color"),e.color&&!v.value),f(n,"".concat(o.value,"-hidden"),!t.value),f(n,"".concat(o.value,"-rtl"),m.value==="rtl"),n))});return function(){var n,d,b,N=e.icon,W=N===void 0?(n=a.icon)===null||n===void 0?void 0:n.call(a):N,w=e.color,j=e.closeIcon,B=j===void 0?(d=a.closeIcon)===null||d===void 0?void 0:d.call(a):j,F=e.closable,G=F===void 0?!1:F,K=function(){return G?B?l("div",{class:"".concat(o.value,"-close-icon"),onClick:C},[B]):l(Q,{class:"".concat(o.value,"-close-icon"),onClick:C},null):null},O={backgroundColor:w&&!v.value?w:void 0},S=W||null,$=(b=a.default)===null||b===void 0?void 0:b.call(a),X=S?l(y,null,[S,l("span",null,[$])]):$,Y="onClick"in _,A=l("span",{class:U.value,style:O},[X,K()]);return Y?l(M,null,{default:function(){return[A]}}):A}}});g.CheckableTag=P;g.install=function(r){return r.component(g.name,g),r.component(P.name,P),r};var ue=g;const de={"@ant-design-vue/pro-layout":"^3.2.1","@ant-design/icons-vue":"^6.1.0","ant-design-vue":"^3.2.0",vue:"^3.2.33","vue-router":"^4.0.14"},ve=k("strong",null,"Content Area",-1),fe=k("strong",null,"Extra Area",-1),_e=k("strong",null,"ExtraContent Area",-1),pe=I("Tag1"),ge=I("Tag2"),Ce={style:{"margin-right":"12px"}},he=T({setup(r){return(e,u)=>{const a=ue,i=oe,_=ne("page-container");return p(),ae(_,{title:"Version","sub-title":"show current project dependencies"},{content:s(()=>[ve]),extra:s(()=>[fe]),extraContent:s(()=>[_e]),tags:s(()=>[l(a,null,{default:s(()=>[pe]),_:1}),l(a,{color:"pink"},{default:s(()=>[ge]),_:1})]),default:s(()=>[l(i,{title:"Project Version"},{default:s(()=>[(p(!0),h(y,null,V(te(de),(c,o)=>(p(),h("p",{key:o},[k("strong",Ce,R(o)+":",1),l(a,null,{default:s(()=>[I(R(c),1)]),_:2},1024)]))),128)),(p(!0),h(y,null,V(new Array(50),c=>(p(),h("p",{key:c},"text block..."))),128))]),_:1})]),_:1})}}});var be=ee(he,[["__file","/home/runner/work/test/test/src/views/Detail.vue"]]);export{be as default};
