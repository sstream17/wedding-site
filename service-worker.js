!function(){"use strict";const e=1627755422652,t="cache"+e,n=["/client/client.9ce90a8e.js","/client/inject_styles.5607aec6.js","/client/index.10d92e10.js","/client/_layout.b48b0840.js","/client/index.20cb27a8.js","/client/SEO.3d4812d8.js","/client/wedding_party.a2b18d1b.js","/client/registry.aa796cc6.js","/client/schedule.1bd4780b.js","/client/photos.0b794e9e.js","/client/travel.38ca3365.js","/client/rsvp.414c6d4e.js","/client/faq.b1e4d5a5.js"].concat(["/service-worker-index.html","/android-chrome-192x192.png","/android-chrome-256x256.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/global.css","/halloween.jpg","/home/hero3_3x2.jpg","/manifest.json","/mstile-150x150.png","/photos/katie+spencer1.jpg","/photos/katie+spencer2.jpg","/photos/katie+spencer3.jpg","/pink_flower_petals.png","/registry/bedbathandbeyond1.png","/registry/bedbathandbeyond2.png","/registry/bedbathandbeyond3.png","/registry/target1.png","/registry/target2.png","/registry/target3.png","/registry/wayfair1.jpg","/registry/wayfair2.jpg","/registry/wayfair3.jpg","/safari-pinned-tab.svg","/travel/hampton_inn.jpg","/wedding_party/chase.jpg","/wedding_party/drew.jpg","/wedding_party/eden.jpg","/wedding_party/elissa.jpg","/wedding_party/emily.jpg","/wedding_party/lauren.jpg","/wedding_party/matthew.jpg","/wedding_party/molli.jpg","/wedding_party/nicholas.jpg","/wedding_party/sam.jpg","/wedding_party/syrus.jpg","/wedding_party/zak.jpg"]),a=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&a.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const a=await e.match(t.request);if(a)return a;throw n}})))))}))}();
