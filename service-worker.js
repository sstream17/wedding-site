!function(){"use strict";const e=1602098031226,t="cache"+e,s=["/client/client.63d31300.js","/client/inject_styles.5607aec6.js","/client/index.63c5c50b.js","/client/_layout.c624a3ab.js","/client/index.8991274d.js","/client/wedding_party.1fc9472a.js","/client/registry.0cd3c8e7.js","/client/schedule.5b68e74a.js","/client/photos.c3f22320.js","/client/travel.4165d6f9.js","/client/rsvp.9e6daf93.js","/client/faq.46c09219.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/halloween.jpg","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();
