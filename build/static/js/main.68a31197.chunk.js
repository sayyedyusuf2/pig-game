(this["webpackJsonppig-game"]=this["webpackJsonppig-game"]||[]).push([[0],[,,,,,,,,,,function(e,n,c){},function(e,n,c){},,function(e,n,c){},function(e,n,c){},function(e,n,c){"use strict";c.r(n);var t=c(1),r=c.n(t),a=c(5),i=c.n(a),s=(c(10),c(2)),u=c(3),o=(c(11),c(0)),l=function(e){var n=e.active,c=e.score,t=e.name,r=e.winner,a=e.current,i="player-container";return n?i+=" active":r&&(i+=" winner"),Object(o.jsxs)("div",{className:i,children:[Object(o.jsx)("div",{className:"player-header",children:t}),Object(o.jsx)("div",{className:"player-score",children:c}),Object(o.jsxs)("div",{className:"player-current-container",children:[Object(o.jsx)("div",{className:"current-score-header",children:"CURRENT"}),Object(o.jsx)("div",{className:"current-score",children:a})]})]})},j=(c(13),{players:[{name:"player 1",winner:!1,score:0,active:!0,current:0},{name:"player 2",winner:!1,active:!1,score:0,current:0}]}),b=function(){var e=Object(t.useState)(j),n=Object(u.a)(e,2),c=n[0],r=n[1],a=Object(t.useState)(0),i=Object(u.a)(a,2),b=i[0],d=i[1],f=Object(t.useState)(!0),O=Object(u.a)(f,2),m=O[0],p=O[1],v=Object(t.useRef)(!0),h=c.players[0].current,g=c.players[1].current,y=function(){r((function(e){return{players:e.players.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{active:!e.active,score:0})}))}})),d(0)};Object(t.useEffect)((function(){if(v.current)v.current=!1;else if(c.players.find((function(e){return e.current>=20}))){var e=c.players.map((function(e){return e.active?Object(s.a)(Object(s.a)({},e),{},{name:"Winner",winner:!0}):e}));r({players:e}),p(!1),d(0)}else y()}),[g,h]);return Object(o.jsxs)("div",{className:"container",children:[c.players.map((function(e,n){return Object(o.jsx)(l,{score:e.score,current:e.current,active:e.active,winner:e.winner,name:e.name},n)})),b?Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{src:"/images/dice-".concat(b,".png"),alt:"dice"})}):"",Object(o.jsx)("button",{className:"btn-roll",onClick:function(){return function(e){if(m){var n=Math.floor(6*Math.random())+1;1!==n?(d(n),r((function(e){return{players:e.players.map((function(e){return e.active?Object(s.a)(Object(s.a)({},e),{},{score:e.score+n}):Object(s.a)({},e)}))}}))):y()}}()},children:"Roll"}),Object(o.jsx)("button",{className:"btn-hold",onClick:function(){return function(e){if(m){var n=c.players.map((function(e){return e.active?Object(s.a)(Object(s.a)({},e),{},{current:e.current+e.score}):e}));r({players:n})}}()},children:"Hold"}),Object(o.jsx)("button",{className:"btn-new",onClick:function(){return r(j),v.current=!0,d(0),void p(!0)},children:"New Game"})]})};c(14);var d=function(){return Object(o.jsx)("div",{className:"background",style:{background:"linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)),url(/images/back.jpg)"},children:Object(o.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(n){var c=n.getCLS,t=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;c(e),t(e),r(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),f()}],[[15,1,2]]]);
//# sourceMappingURL=main.68a31197.chunk.js.map