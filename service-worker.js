/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f0b6d054e01bfcaacb4b82290319a295"
  },
  {
    "url": "assets/css/0.styles.688e0e57.css",
    "revision": "baeac5150cd0fc48a7f8e025ec17b091"
  },
  {
    "url": "assets/img/htop.87e6c840.png",
    "revision": "87e6c8406cfa9f040772fe424c3ed182"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zsh-after.53be29d3.png",
    "revision": "53be29d35dede83b9b94397b7571ae71"
  },
  {
    "url": "assets/img/zsh-before.21757f06.png",
    "revision": "21757f06a8faa44a824aa2e1cff4849e"
  },
  {
    "url": "assets/img/zsh-plugins.d2f0e132.png",
    "revision": "d2f0e1320da0d642504fae1e08b1784e"
  },
  {
    "url": "assets/img/zsh-theme.626e5ad4.png",
    "revision": "626e5ad42177fd63db0c1957c74b5d8e"
  },
  {
    "url": "assets/js/1.bff528b5.js",
    "revision": "0bfc18fe29b96f08c69d388b62722dca"
  },
  {
    "url": "assets/js/10.7d217208.js",
    "revision": "e365fdc5883383fe908205ee228c730f"
  },
  {
    "url": "assets/js/11.de1d07ea.js",
    "revision": "20c100a5429b26c5336a7522bba41149"
  },
  {
    "url": "assets/js/12.5d488a7b.js",
    "revision": "4f86b51a98695227b0b7aa263a87bf45"
  },
  {
    "url": "assets/js/13.ab05cb9b.js",
    "revision": "639edf290528d069ee191ecd1ea9874b"
  },
  {
    "url": "assets/js/14.d9a076af.js",
    "revision": "0eb8a50c06d1192a8f5c3bc883960ca3"
  },
  {
    "url": "assets/js/2.7033bbc1.js",
    "revision": "c7c9da7dbce1d6c1bb88d3468a879b2f"
  },
  {
    "url": "assets/js/3.6274702c.js",
    "revision": "95c58feb1373e5e8d8b7103f8c19523b"
  },
  {
    "url": "assets/js/4.ee4e391f.js",
    "revision": "00ee1cceedd12d024ebca6392dfc53d0"
  },
  {
    "url": "assets/js/5.401d604d.js",
    "revision": "63d5e5cd93c4f044bb2c0da81006be22"
  },
  {
    "url": "assets/js/6.f2c44802.js",
    "revision": "704c150a522ece5f5e5f7cfb7cde3839"
  },
  {
    "url": "assets/js/7.c35cd962.js",
    "revision": "afcb748e33892b78cad57c2915ef8c37"
  },
  {
    "url": "assets/js/8.68a91185.js",
    "revision": "0eba35930a534881da0a3e1a4332ad3e"
  },
  {
    "url": "assets/js/9.7ef428c0.js",
    "revision": "0890edf1ea8b36c1de76a413a242516a"
  },
  {
    "url": "assets/js/app.efe29bd9.js",
    "revision": "430db3e761bf70cf8c705ee593992db2"
  },
  {
    "url": "buddy-logos/elementui.svg",
    "revision": "eb0435ede9e82d37927eca4146f30c3e"
  },
  {
    "url": "index.html",
    "revision": "8db409c763b2db95ea415ce97c22f37a"
  },
  {
    "url": "me.png",
    "revision": "c8afe0e13189c7d591dad21c78e77dab"
  },
  {
    "url": "note/Database/index.html",
    "revision": "544caf45bafa72725ac9ffbc56a24cff"
  },
  {
    "url": "note/Database/pipelinedb-demo.html",
    "revision": "474d69c55a55fbcce31b0d2633a8d171"
  },
  {
    "url": "note/Explore/index.html",
    "revision": "bc2309373e25cde45131ad725fe61aba"
  },
  {
    "url": "note/FrontEnd/index.html",
    "revision": "c374db057cbf64b27b899d8c13a53e11"
  },
  {
    "url": "note/index.html",
    "revision": "50736eb8eab5622f828aedc688ef331c"
  },
  {
    "url": "note/Linux/centos7-ready.html",
    "revision": "51258bd7a6e6d6223daef35cfa000ee0"
  },
  {
    "url": "note/Linux/index.html",
    "revision": "598aca4161e5eb2132c2501d4ba4d6e0"
  },
  {
    "url": "note/NodeJS/index.html",
    "revision": "0379c602d84c9fc7e04d2d8173f9f74d"
  },
  {
    "url": "quick/index.html",
    "revision": "373d39ac753a854616f85b20b2979abf"
  },
  {
    "url": "star/index.html",
    "revision": "ef8e2c8c1b7222b848700a68634a5c12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
