(this["webpackJsonpcontext-tutorial"]=this["webpackJsonpcontext-tutorial"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o),r=n(3),a=n.n(r),c=n(1),i=Object(o.createContext)({state:{color:"black",subColor:"red"},actions:{setColor:function(){},setSubColor:function(){}}}),u=function(e){var t=e.children,n=Object(o.useState)("black"),r=Object(c.a)(n,2),a=r[0],u=r[1],s=Object(o.useState)("red"),d=Object(c.a)(s,2),m={state:{color:a,subColor:d[0]},actions:{setColor:u,setSubColor:d[1]}};return l.a.createElement(i.Provider,{value:m},t)},s=i.Consumer,d=i,m=function(){var e=Object(o.useContext)(d).state,t={display:"flex",flexDirection:"column",alignItems:"center"};return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",paddingBottom:"21.280px",borderBottom:"1px solid lightgray"}},l.a.createElement("div",{style:t},l.a.createElement("h4",null,"\ub9c8\uc6b0\uc2a4 \uc88c\ud074\ub9ad"),l.a.createElement("div",{style:{width:"64px",height:"64px",background:e.color}})),l.a.createElement("div",{style:t},l.a.createElement("h4",null,"\ub9c8\uc6b0\uc2a4 \uc6b0\ud074\ub9ad"),l.a.createElement("div",{style:{width:"64px",height:"64px",background:e.subColor}})))},p=["red","orange","yellow","green","blue","indigo","violet"],f=function(e){var t=e.color,n=e.onClick,o=e.onContextMenu;return l.a.createElement("div",{style:{width:"24px",height:"24px",cursor:"pointer",background:t},onClick:function(){return n(t)},onContextMenu:function(e){e.preventDefault(),o(t)}})},x=function(e){var t=e.actions,n=function(e){return t.setColor(e)},o=function(e){return t.setSubColor(e)};return l.a.createElement("div",{style:{display:"flex"}},p.map((function(e){return l.a.createElement(f,{key:e,color:e,onClick:n,onContextMenu:o})})))},b=function(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",borderBottom:"1px solid lightgray",paddingBottom:"19.920px"}},l.a.createElement("h2",null,"\uc0c9\uc0c1\uc744 \uc120\ud0dd\ud558\uc138\uc694."),l.a.createElement(s,null,x))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(m,null))};n(9);a.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null,l.a.createElement(E,null))),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.1735658d.chunk.js.map