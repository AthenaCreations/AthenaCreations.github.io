"use strict";var precacheConfig=[["/index.html","e4ac71c494770eb82de6d1421e9d9057"],["/static/css/main.e31439e2.css","090bcfaaa6aa769c7c7864c78e4e9bf6"],["/static/js/main.86fea59a.js","19f23808a1ae70235994eacf5323a6a0"],["/static/media/Cardinal.38c51607.ttf","38c516075c4966be487ed354a1a8f1f0"],["/static/media/TechDegree-Project-7-master.e2ef46cc.zip","e2ef46cca287588c59c8a651f3ecf660"],["/static/media/empDirect.4b2e3d02.png","4b2e3d024e1e17edcad32a32e591f5a8"],["/static/media/header.00e822a1.png","00e822a12e627944494be0d8fb82705f"],["/static/media/photoGallery.60b1b1ef.png","60b1b1ef50a34a79016d9477fd8c3d1c"],["/static/media/profile.d7034ee9.jpg","d7034ee91d78c1a4b896ebc2191f5cab"],["/static/media/purple-horizon.d031fad4.jpg","d031fad408141cdeaf0a6544d040b57d"],["/static/media/purple-horizonV2.c8c0ad2f.jpg","c8c0ad2ffbed0caf87d2f18e9b4aa31f"],["/static/media/purple-space.93c36561.jpg","93c365619e96a8779e0fc9f7fffcbb96"],["/static/media/regForm.a9aa6e7e.png","a9aa6e7e3b93e93cad57cbbadcf84fdb"],["/static/media/styleGuide.f3587b12.png","f3587b120333e0f01e5e41356cffbd5c"],["/static/media/webAppDash.92316b78.png","92316b7854fe9e55b87fa51d64a982a9"],["/static/media/wordGame.3c3eea37.png","3c3eea37c0fcc082966640da714d40d3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});