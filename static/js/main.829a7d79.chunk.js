(this["webpackJsonpnomad-challenge"]=this["webpackJsonpnomad-challenge"]||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var c,r=n(0),o=n.n(r),i=n(28),a=n.n(i),s=n(29),l=n(11),d=n(7),b=n(6),j=Object(l.b)({key:"darkMode",default:!1}),u=Object(l.b)({key:"coinsState",default:[]}),h=(Object(l.b)({key:"aCoinState",default:[]}),Object(l.b)({key:"category",default:[]}),Object(l.b)({key:"todoDAta",default:{}})),x=Object(l.b)({key:"todoLoaded",default:!1}),O=n(20),p=n(14),f=n(1),m=b.c.div(c||(c=Object(d.a)([""])));var g,v,w,y,k=function(){return Object(f.jsx)(m,{})},C={bgColor:"black",textColor:"white",accentColor:"#9b59b6"},D={bgColor:"white",textColor:"black",accentColor:"#9b59b6"},S=n(3),z=b.c.div(g||(g=Object(d.a)(["\n  width: 80%;\n  height: 100px;\n  margin: 20px auto;\n"]))),q=b.c.div(v||(v=Object(d.a)(["\n  display: flex;\n  box-shadow: 0px 2px 5px ",";\n  padding: 20px;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"])),(function(e){return e.theme.textColor})),L=b.c.div(w||(w=Object(d.a)(["\n  background-color: ",";\n  position: absolute;\n  right: 10px;\n"])),(function(e){return e.theme.bgColor})),I=b.c.svg(y||(y=Object(d.a)(["\n  color: ",";\n  width: 1rem;\n  height: 1rem;\n"])),(function(e){return e.theme.textColor})),N={borderBottom:"5px solid blue"};var M,E=function(){var e=Object(l.c)(j),t=Object(S.a)(e,2),n=t[0],c=t[1],r=function(){c((function(e){return!e}))},o=Object(p.h)("/"),i=Object(p.h)("/coinlist"),a=Object(p.h)("/todolist");return Object(f.jsx)(z,{children:Object(f.jsxs)(q,{children:[Object(f.jsx)(O.b,{style:(null===o||void 0===o?void 0:o.isExact)?N:{},to:"/",children:"Home"}),Object(f.jsx)("span",{children:" \xa0 | \xa0"}),Object(f.jsx)(O.b,{style:(null===i||void 0===i?void 0:i.isExact)?N:{},to:"/coinlist",children:"Coin List"}),Object(f.jsx)("span",{children:" \xa0 | \xa0"}),Object(f.jsx)(O.b,{style:(null===a||void 0===a?void 0:a.isExact)?N:{},to:"/todolist",children:"ToDo List"}),n?Object(f.jsx)(L,{as:"button",onClick:r,children:Object(f.jsx)(I,{style:{color:"rgb(224, 214, 73)"},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})})}):Object(f.jsx)(L,{as:"button",onClick:r,children:Object(f.jsx)(I,{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"})})})]})})},P=n(9),T=n.n(P),A=n(16),B=b.c.li(M||(M=Object(d.a)(["\n  background-color: ",";\n  color: ",";\n  margin-bottom: 20px;\n  box-shadow: 0px 5px 10px #49a9e0;\n  transition: 0.5s;\n  a {\n    padding: 20px;\n    display: flex;\n    align-items: center;\n  }\n  &:hover {\n    color: #f1c40f;\n    transform: rotateX(360deg);\n  }\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.bgColor}));var J,Q=function(e){var t=e.coin;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(B,{children:Object(f.jsxs)(O.b,{to:{pathname:"/coin/".concat(t.id),state:{id:t.id,name:t.name,symbol:t.symbol}},children:[Object(f.jsx)("img",{style:{width:"1.5rem",height:"1.5rem"},src:"https://cryptoicon-api.vercel.app/api/icon/".concat(t.symbol.toLowerCase())}),"\xa0\xa0\xa0",t.name]})},t.id)})},R=b.c.span(J||(J=Object(d.a)(["\n  color: ",";\n  font-size: 1rem;\n  place-self: center;\n"])),(function(e){return e.theme.accentColor}));function F(){var e=Object(r.useState)(!0),t=Object(S.a)(e,2),n=t[0],c=t[1],o=Object(l.c)(u),i=Object(S.a)(o,2),a=i[0],s=i[1],d=function(){var e=Object(A.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.coinpaprika.com/v1/coins");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,s(t),c(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[]),Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:n?Object(f.jsx)(R,{children:"Loading..."}):a.slice(0,100).map((function(e){return Object(f.jsx)(Q,{coin:e},e.id)}))})})}var H,U=o.a.memo(F),V=b.c.div(H||(H=Object(d.a)(["\n  width: 650px;\n  margin: 0 auto;\n"])));var W,X,G=function(){return Object(f.jsxs)(V,{children:[Object(f.jsx)("h1",{children:"Today's Coins"}),Object(f.jsx)("hr",{}),Object(f.jsx)(U,{})]})},K=n(58),Y=n.n(K),Z=b.c.div(W||(W=Object(d.a)(["\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid ",";\n  border-top: 0;\n  font-size: 3rem;\n"])),(function(e){return e.theme.textColor})),$=b.c.span(X||(X=Object(d.a)(["\n  font-size: 2rem;\n  color: tomato;\n"])));var _,ee=function(){var e=Object(l.d)(j),t=Object(p.g)().coinId,n=Object(p.f)().state,c=function(){var e=Math.floor(Date.now()/1e3),n=e-604800;return fetch("https://api.coinpaprika.com/v1/coins/".concat(t,"/ohlcv/historical?start=").concat(n,"&end=").concat(e)).then((function(e){return e.json()}))};console.log(Object(s.useQuery)("callAPI",(function(){return c()})));var r=Object(s.useQuery)("callAPI",(function(){return c()}));r.isLoading,r.data,console.log("coinId",t),console.log("state",null===n||void 0===n?void 0:n.data);var o={series:[{name:"Changing Rate",data:Object.values(null===n||void 0===n?void 0:n.data.quotes.USD)}]};return Object(f.jsxs)(Z,{children:[Object(f.jsx)($,{children:"Change Rates"}),Object(f.jsx)(Y.a,{options:{chart:{toolbar:{show:!1},background:"transparent",width:"100%"},xaxis:{categories:Object.keys(null===n||void 0===n?void 0:n.data.quotes.USD),labels:{rotate:-90}},yaxis:{show:!1},theme:{mode:e?"dark":"light",palette:"pallete1"},tooltip:{y:{formatter:function(e){return e.toFixed(2)}}}},series:o.series,type:"line",width:"500"})]})},te=b.c.div(_||(_=Object(d.a)(["\n  display: flex;\n  height: 500px;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid ",";\n  border-top: 0;\n  font-size: 3rem;\n"])),(function(e){return e.theme.textColor}));var ne,ce,re,oe,ie,ae=function(){return Object(f.jsx)(te,{children:"Price"})},se=b.c.div(ne||(ne=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),le=b.c.div(ce||(ce=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n  p {\n    margin: 20px auto;\n  }\n"]))),de=b.c.span(re||(re=Object(d.a)(["\n  border-radius: 5px;\n  width: 45%;\n  padding: 10px;\n  background-color: rgba(52, 73, 94, 0.5);\n"]))),be=b.c.div(oe||(oe=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  height: 60px;\n  background-color: rgba(186, 235, 198, 0.4);\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid ",";\n  padding: 10px;\n"])),(function(e){return e.theme.textColor})),je=b.c.div(ie||(ie=Object(d.a)(["\n  color: ",";\n  text-align: center;\n  border-radius: 5px;\n  width: 45%;\n  background-color: rgba(52, 73, 94, 0.5);\n  padding: 10px;\n  a {\n    display: block;\n  }\n"])),(function(e){return e.theme.textColor}));var ue=function(){var e=Object(p.g)().coinId,t=Object(r.useState)(),n=Object(S.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)(!0),a=Object(S.a)(i,2),s=(a[0],a[1]),l=function(){var t=Object(A.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.coinpaprika.com/v1/tickers/".concat(e));case 3:return t.next=5,t.sent.json();case 5:n=t.sent,o(n),s(!1),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){l()}),[]),Object(f.jsxs)(se,{children:[Object(f.jsxs)(le,{children:[Object(f.jsxs)(de,{children:["ID: ",null===c||void 0===c?void 0:c.id]}),Object(f.jsxs)(de,{children:["Name: ",null===c||void 0===c?void 0:c.name]})]}),Object(f.jsx)(le,{children:Object(f.jsxs)("p",{children:[null===c||void 0===c?void 0:c.name," :",null===c||void 0===c?void 0:c.symbol]})}),Object(f.jsxs)(be,{children:[Object(f.jsx)(je,{children:Object(f.jsx)(O.b,{to:{pathname:"/coin/".concat(e,"/chart"),state:{data:c}},children:"Chart"})}),Object(f.jsx)(je,{children:Object(f.jsx)(O.b,{to:"/coin/".concat(e,"/price"),children:"Price"})})]}),Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"/coin/:coinId/chart",children:Object(f.jsx)(ee,{})}),Object(f.jsx)(p.a,{path:"/coin/:coinId/price",children:Object(f.jsx)(ae,{})})]})]})};var he,xe,Oe,pe,fe,me=function(e){0!==Object.keys(e).length&&window.localStorage.setItem("todo",JSON.stringify(e))},ge=n(8),ve=n(15),we=n(12),ye=n(41),ke=b.c.div(he||(he=Object(d.a)(["\n  width: 100%;\n"]))),Ce=b.c.div(xe||(xe=Object(d.a)([""]))),De=b.c.input(Oe||(Oe=Object(d.a)([""]))),Se=b.c.button(pe||(pe=Object(d.a)([""]))),ze=b.c.form(fe||(fe=Object(d.a)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n  p {\n    font-size: 12px;\n    color: red;\n  }\n"])));var qe,Le,Ie,Ne=function(e){var t,n,c,r=e.cateName,o=Object(ye.a)(),i=o.register,a=o.handleSubmit,s=o.setValue,d=o.formState,b=Object(l.c)(h),j=Object(S.a)(b,2),u=j[0],x=j[1];return me(u),Object(f.jsx)(ke,{children:Object(f.jsx)(Ce,{children:Object(f.jsxs)(ze,{onSubmit:a((function(e){var t=e.toDoCnts,n=e.startDt,c=e.endDt,o={id:Date.now(),toDoCnts:t,startDt:n,endDt:c};x((function(e){return Object(ge.a)(Object(ge.a)({},e),{},Object(ve.a)({},r,[].concat(Object(we.a)(e[r]),[o])))})),s("toDoCnts",""),s("startDt",""),s("endDt","")})),children:[Object(f.jsx)(De,Object(ge.a)(Object(ge.a)({},i("toDoCnts",{required:"\ud560\uc77c\uc740 \ud544\uc218 \uc785\ub825\uac12\uc785\ub2c8\ub2e4. ",minLength:{value:2,message:"2\uc790\uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694."}})),{},{placeholder:"Regist your Todo..."})),Object(f.jsx)("p",{children:null===(t=d.errors.toDoCnts)||void 0===t?void 0:t.message}),Object(f.jsx)(De,Object(ge.a)(Object(ge.a)({},i("startDt",{required:"\uc2dc\uc791\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694."})),{},{placeholder:"Write start date..."})),Object(f.jsx)("p",{children:null===(n=d.errors.startDt)||void 0===n?void 0:n.message}),Object(f.jsx)(De,Object(ge.a)(Object(ge.a)({},i("endDt",{required:"\ubaa9\ud45c\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694."})),{},{placeholder:"Write end date..."})),Object(f.jsx)("p",{children:null===(c=d.errors.endDt)||void 0===c?void 0:c.message}),Object(f.jsx)(Se,{children:"Add"})]})})})},Me=b.c.div(qe||(qe=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 10px;\n  margin-bottom: 5px;\n"]))),Ee=b.c.div(Le||(Le=Object(d.a)(["\n  display: flex;\n  width: 100%;\n\n  span {\n    flex: 1;\n    min-width: 50px;\n  }\n  p {\n    flex: 3;\n    font-weight: bold;\n    min-width: 100px;\n  }\n"]))),Pe=b.c.svg(Ie||(Ie=Object(d.a)(["\n  align-self: end;\n  width: 15px;\n  cursor: pointer;\n"])));var Te,Ae,Be,Je,Qe=function(e){var t=e.id,n=e.startDt,c=e.endDt,r=e.cnts,o=e.cateName,i=Object(l.c)(h),a=Object(S.a)(i,2),s=(a[0],a[1]);return Object(f.jsxs)(Me,{children:[Object(f.jsx)(Pe,{onClick:function(){return function(e,t){s((function(n){var c=n[e].findIndex((function(e){return e.id===t}));return Object(ge.a)(Object(ge.a)({},n),{},Object(ve.a)({},e,[].concat(Object(we.a)(n[e].slice(0,c)),Object(we.a)(n[e].slice(c+1)))))}))}(o,t)},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"})}),Object(f.jsxs)(Ee,{children:[Object(f.jsx)("span",{children:"\ud560\uc77c:"}),Object(f.jsx)("p",{children:r})]}),Object(f.jsxs)(Ee,{children:[Object(f.jsx)("span",{children:"\uae30\uac04:"}),Object(f.jsxs)("p",{children:[n," ~ ",c]})]})]})},Re=b.c.li(Te||(Te=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  background-color: rgba(200, 214, 229, 0.5);\n  margin: 0 5px;\n"]))),Fe=b.c.h1(Ae||(Ae=Object(d.a)(["\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n  text-decoration: underline;\n"]))),He=b.c.ul(Be||(Be=Object(d.a)(["\n  width: 100%;\n  min-height: 300px;\n  padding: 10px;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n"]))),Ue=b.c.svg(Je||(Je=Object(d.a)(["\n  align-self: end;\n  width: 15px;\n  cursor: pointer;\n"])));var Ve,We,Xe,Ge,Ke=function(e){var t=e.dataObj,n=e.cateName,c=Object(l.c)(h),r=Object(S.a)(c,2),o=r[0],i=r[1],a=Object(l.d)(x),s=function(e){var t=Object(ge.a)({},o);delete t[e],i(t),function(e,t){t&&window.localStorage.setItem("todo",JSON.stringify(e))}(t,a)};return Object(f.jsxs)(Re,{children:[Object(f.jsx)(Ue,{onClick:function(){return s(n)},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"})}),Object(f.jsx)(Fe,{children:n.toUpperCase()}),Object(f.jsx)(Ne,{cateName:n}),Object(f.jsx)(He,{children:t.map((function(e,t){return Object(f.jsx)(Qe,{id:e.id,startDt:e.startDt,endDt:e.endDt,cnts:e.toDoCnts,cateName:n},t)}))})]})},Ye=b.c.div(Ve||(Ve=Object(d.a)(["\n  width: 100%;\n  padding: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n"]))),Ze=b.c.form(We||(We=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 8 2 auto;\n  flex-wrap: wrap;\n\n  input {\n    flex: 1 1 80%;\n  }\n  button {\n    flex: 1 1 15%;\n  }\n\n  p {\n    flex: 1 1 80%;\n    color: red;\n    font-size: 12px;\n  }\n"]))),$e=b.c.input(Xe||(Xe=Object(d.a)(["\n  width: 70%;\n"]))),_e=b.c.button(Ge||(Ge=Object(d.a)(["\n  margin: 0 10px;\n"])));var et,tt,nt,ct=function(){var e,t=Object(ye.a)(),n=t.register,c=t.handleSubmit,r=t.formState,o=t.setValue,i=Object(l.c)(h),a=Object(S.a)(i,2),s=a[0],d=a[1];return me(s),Object(f.jsx)(Ye,{children:Object(f.jsxs)(Ze,{onSubmit:c((function(e){var t=e.cate;d((function(e){var n=Object(ve.a)({},t,[]);return Object(ge.a)(Object(ge.a)({},e),n)})),o("cate","")})),children:[Object(f.jsx)($e,Object(ge.a)(Object(ge.a)({},n("cate",{required:"\uac12\uc744 \uc785\ub825\ud558\uc138\uc694."})),{},{placeholder:"Regist your Todo categories ..."})),Object(f.jsx)(_e,{children:"Add"}),Object(f.jsx)("p",{children:null===(e=r.errors.cate)||void 0===e?void 0:e.message})]})})},rt=b.c.div(et||(et=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 20px;\n  color: ",";\n  background-color: rgba(84, 160, 255, 1);\n"])),(function(e){return e.theme.textColor})),ot=b.c.h1(tt||(tt=Object(d.a)(["\n  color: white;\n  font-weight: 400;\n  font-size: 3rem;\n  margin-bottom: 20px;\n"]))),it=b.c.ul(nt||(nt=Object(d.a)(["\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n"])));var at,st=function(){var e=Object(l.c)(h),t=Object(S.a)(e,2),n=t[0],c=t[1],o=Object(l.e)(x);return me(n),Object(r.useEffect)((function(){var e=window.localStorage.getItem("todo");e&&(c(JSON.parse(e)),o(!0))}),[]),Object(f.jsxs)(rt,{children:[Object(f.jsx)(ot,{children:"To Do List"}),Object(f.jsx)(ct,{}),Object(f.jsx)(it,{children:Object.keys(n).map((function(e,t){return Object(f.jsx)(Ke,{cateName:e,dataObj:n[e]},t)}))})]})},lt=Object(b.b)(at||(at=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color: ","\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.bgColor}));var dt=function(){var e=Object(l.d)(j);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(b.a,{theme:e?C:D,children:[Object(f.jsx)(lt,{}),Object(f.jsxs)(O.a,{children:[Object(f.jsx)(E,{}),Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"/coinlist",children:Object(f.jsx)(G,{})}),Object(f.jsx)(p.a,{path:"/coin/:coinId",children:Object(f.jsx)(ue,{})}),Object(f.jsx)(p.a,{path:"/todolist",children:Object(f.jsx)(st,{})}),Object(f.jsx)(p.a,{path:"/",children:Object(f.jsx)(k,{})})]})]})]})})},bt=new s.QueryClient;a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(s.QueryClientProvider,{client:bt,children:Object(f.jsx)(dt,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.829a7d79.chunk.js.map