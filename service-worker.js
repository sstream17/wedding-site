!function(){"use strict";const e=1630811884326,t="cache"+e,n=["/client/client.43af217b.js","/client/inject_styles.5607aec6.js","/client/index.03d0f05e.js","/client/_layout.9e60b470.js","/client/index.6f7147ba.js","/client/SEO.49326ff6.js","/client/wedding_party.71501f7f.js","/client/registry.0d7036ea.js","/client/schedule.fc433e6c.js","/client/DividedCard.53ce0b13.js","/client/photos.18c7b4d7.js","/client/travel.033746cc.js","/client/rsvp.0a649699.js","/client/faq.d3b650e2.js"].concat(["/service-worker-index.html","/android-chrome-192x192.png","/android-chrome-256x256.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/global.css","/halloween.jpg","/home/hero3_3x2.jpg","/manifest.json","/mstile-150x150.png","/photos/katie+spencer1.jpg","/photos/katie+spencer2.jpg","/photos/katie+spencer3.jpg","/pink_flower_petals.png","/registry/bedbathandbeyond1.png","/registry/bedbathandbeyond2.png","/registry/bedbathandbeyond3.png","/registry/target1.png","/registry/target2.png","/registry/target3.png","/registry/wayfair1.jpg","/registry/wayfair2.jpg","/registry/wayfair3.jpg","/safari-pinned-tab.svg","/schedule/Cake.svg","/schedule/Cheers.svg","/schedule/Rings.svg","/travel/hampton_inn.jpg","/wedding_party/chase.jpg","/wedding_party/drew.jpg","/wedding_party/eden.jpg","/wedding_party/elissa.jpg","/wedding_party/emily.jpg","/wedding_party/lauren.jpg","/wedding_party/matthew.jpg","/wedding_party/molli.jpg","/wedding_party/nicholas.jpg","/wedding_party/sam.jpg","/wedding_party/syrus.jpg","/wedding_party/zak.jpg"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}})))))}))}();
