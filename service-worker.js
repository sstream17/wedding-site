!function(){"use strict";const e=1602001512965,t="cache"+e,s=["/client/client.01b26183.js","/client/inject_styles.5607aec6.js","/client/index.78bb3638.js","/client/_layout.cdde0343.js","/client/index.c63aa4e5.js","/client/wedding_party.0d642e9d.js","/client/registry.e1ce8c5b.js","/client/schedule.7b0fb7ea.js","/client/photos.50084864.js","/client/travel.76ecf5e7.js","/client/rsvp.8ec9457e.js","/client/faq.416b18a4.js","/client/about.b0c60c48.js","/client/index.134bcfcf.js","/client/[slug].d9077ded.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/successkid.jpg"]),c=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&c.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const c=await e.match(t.request);if(c)return c;throw s}})))))}))}();
