import{S as s,i as e,s as t,B as i,e as l,c as a,b as c,d as r,g as n,h as o,a as d,f as h,j as u,C as v,x as f,y as $}from"./client.09b05152.js";const p=s=>({}),j=s=>({class:"right svelte-1yqja5u"}),m=s=>({}),D=s=>({class:"left svelte-1yqja5u"});function y(s){let e;return{c(){e=l("div"),this.h()},l(s){e=a(s,"DIV",{class:!0}),c(e).forEach(r),this.h()},h(){n(e,"class","divider-h svelte-1yqja5u")},m(s,t){o(s,e,t)},d(s){s&&r(e)}}}function q(s){let e,t,q,g,z,H;const x=s[2].left,E=i(x,s,s[1],D),I=s[2].right,V=i(I,s,s[1],j);let b=!s[0]&&y();return{c(){e=l("div"),E&&E.c(),t=d(),q=l("div"),g=d(),V&&V.c(),z=d(),b&&b.c(),this.h()},l(s){e=a(s,"DIV",{class:!0});var i=c(e);E&&E.l(i),t=h(i),q=a(i,"DIV",{class:!0}),c(q).forEach(r),g=h(i),V&&V.l(i),z=h(i),b&&b.l(i),i.forEach(r),this.h()},h(){n(q,"class","divider-v svelte-1yqja5u"),n(e,"class","grid justify-content-center svelte-1yqja5u")},m(s,i){o(s,e,i),E&&E.m(e,null),u(e,t),u(e,q),u(e,g),V&&V.m(e,null),u(e,z),b&&b.m(e,null),H=!0},p(s,[t]){E&&E.p&&2&t&&v(E,x,s,s[1],t,m,D),V&&V.p&&2&t&&v(V,I,s,s[1],t,p,j),s[0]?b&&(b.d(1),b=null):b||(b=y(),b.c(),b.m(e,null))},i(s){H||(f(E,s),f(V,s),H=!0)},o(s){$(E,s),$(V,s),H=!1},d(s){s&&r(e),E&&E.d(s),V&&V.d(s),b&&b.d()}}}function g(s,e,t){let{$$slots:i={},$$scope:l}=e,{hideHorizontalDivider:a=!1}=e;return s.$$set=s=>{"hideHorizontalDivider"in s&&t(0,a=s.hideHorizontalDivider),"$$scope"in s&&t(1,l=s.$$scope)},[a,l,i]}class z extends s{constructor(s){super(),e(this,s,g,q,t,{hideHorizontalDivider:0})}}export{z as D};
