import{w as t,_ as n,a as e,b as r,c as a,i as s,d as c,S as o,s as u,e as i,f,t as l,q as h,g as p,h as v,j as m,k as d,l as y,m as x,n as w,o as g,u as R,r as b,p as j}from"./client.522eaac6.js";function k(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function D(t){var n,e,r,a,s,c,o=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=i(),r=f("h1"),a=l(o),s=i(),c=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(p),e=v(t),r=m(t,"H1",{});var n=d(r);a=y(n,o),n.forEach(p),s=v(t),c=m(t,"DIV",{class:!0}),d(c).forEach(p),this.h()},h:function(){x(c,"class","content svelte-emm3f3")},m:function(t,n){w(t,e,n),w(t,r,n),g(r,a),w(t,s,n),w(t,c,n),c.innerHTML=u},p:function(t,e){var r=R(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&o!==(o=t[0].title+"")&&b(a,o),1&r&&u!==(u=t[0].html+"")&&(c.innerHTML=u)},i:j,o:j,d:function(t){t&&p(e),t&&p(r),t&&p(s),t&&p(c)}}}var E=function(t,n,e,r){return new(e||(e=Promise))((function(a,s){function c(t){try{u(r.next(t))}catch(t){s(t)}}function o(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,o)}u((r=r.apply(t,n||[])).next())}))};function H(n){var e=n.params;return E(this,void 0,void 0,t.mark((function n(){var r,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("blog/".concat(e.slug,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,200!==r.status){t.next=10;break}return t.abrupt("return",{post:a});case 10:this.error(r.status,a.message);case 11:case"end":return t.stop()}}),n,this)})))}function L(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var M=function(t){n(r,o);var e=k(r);function r(t){var n;return a(this,r),n=e.call(this),s(c(n),t,L,D,u,{post:0}),n}return r}();export default M;export{H as preload};
