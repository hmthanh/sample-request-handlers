(this["webpackJsonpsample-request-handlers"]=this["webpackJsonpsample-request-handlers"]||[]).push([[0],{130:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return r}));var n=a(17),r=e.browser&&window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25})||n.d}).call(this,a(53))},131:function(e,t,a){e.exports={brandName:"Header_brandName__1w0Qo"}},151:function(e,t,a){e.exports={container:"Home_container__1YJz0"}},159:function(e,t,a){e.exports=a(297)},294:function(e,t,a){},295:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(50),s=a(301),u=a(17),l=a(129),m=a(65),d={data:[],isLoading:!1,isFailed:!1},E=Object(u.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"users/GET_REQUESTED":return Object(m.a)({},e,{isLoading:!0,isFailed:!1});case"users/GET_SUCCESS":return Object(m.a)({},e,{data:n,isLoading:!1,isFailed:!1});case"users/GET_FAILED":return Object(m.a)({},e,{isLoading:!1,isFailed:!0});default:return e}}}),f=a(130);var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(f.a)(Object(u.a)(l.a)),a=Object(u.e)(E,e,t);return a},b=a(131),p=a.n(b),O=function(){var e=s.a.Header;return r.a.createElement(e,null,r.a.createElement("div",{className:p.a.brandName},"Sample"))},_=a(300),h=a(51),w=a(149),g=a(94),j=a.n(g),k=a(134),S=a(135),y=a.n(S),C=a(154),T=function(e){var t=Object(n.useState)(void 0!==e&&e),a=Object(C.a)(t,2),r=a[0],c=a[1],i=Object(n.useCallback)((function(){c(!0)}),[]),o=Object(n.useCallback)((function(){c(!1)}),[]),s=Object(n.useCallback)((function(e){c("boolean"===typeof e?e:!r)}),[r]);return Object(n.useMemo)((function(){return{active:r,setActive:i,setInActive:o,toggle:s}}),[r,i,o,s])},L=a(299),I=a(298),N=a(60),D=a.n(N),F=function(e){var t=e.isOpen,a=e.onOk,n=e.data;return r.a.createElement(D.a,{title:"Users",visible:t,onOk:a,footer:[r.a.createElement(h.a,{key:"submit",type:"primary",onClick:a},"OK")]},r.a.createElement(L.a,{itemLayout:"horizontal",dataSource:n,renderItem:function(e){var t="".concat(e.first_name," ").concat(e.last_name);return r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Item.Meta,{avatar:r.a.createElement(I.a,{src:e.avatar}),title:t,description:e.email}))}}),",")},U=a(151),x=a.n(U),A=function(){var e=Object(o.b)(),t=T(),a=Object(o.c)((function(e){return e.users})),c=Object(n.useCallback)((function(){_.a.error({title:"This is an error message",content:"some messages...some messages..."})}),[]),i=Object(n.useCallback)((function(){e((function(e){return new Promise(function(){var t=Object(k.a)(j.a.mark((function t(a,n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:"users/GET_REQUESTED"}),t.next=4,y.a.get("https://reqres.in/api/users");case 4:r=t.sent,e({type:"users/GET_SUCCESS",payload:r.data.data}),a(r.data),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),n(t.t0),e({type:"users/GET_FAILED"});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}())})).then((function(){t.setActive()})).catch((function(){c()}))}),[e,t,c]);return r.a.createElement("div",{className:x.a.container},r.a.createElement(h.a,{type:"primary",onClick:i},a.isLoading?r.a.createElement(w.a,null):"Click me!"),r.a.createElement(F,{isOpen:t.active,onOk:function(){return t.setInActive()},data:a.data}))};a(294);var G=function(){var e=s.a.Footer,t=s.a.Content;return r.a.createElement(o.a,{store:v()},r.a.createElement(s.a,null,r.a.createElement(O,null),r.a.createElement(t,null,r.a.createElement(A,null)),r.a.createElement(e,null)))};a(295);i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[159,1,2]]]);
//# sourceMappingURL=main.c3fc9b82.chunk.js.map