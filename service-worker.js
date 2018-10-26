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
    "revision": "afe6093996710f7a4738bcda9feb7f64"
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
    "url": "assets/js/8.0d3a102d.js",
    "revision": "c37c550b824d08e9407abc9bf3bfa272"
  },
  {
    "url": "assets/js/9.7ef428c0.js",
    "revision": "0890edf1ea8b36c1de76a413a242516a"
  },
  {
    "url": "assets/js/app.f07a21c4.js",
    "revision": "217f7cac87ba18be36c06939cdf3af42"
  },
  {
    "url": "buddy-logos/elementui.svg",
    "revision": "eb0435ede9e82d37927eca4146f30c3e"
  },
  {
    "url": "index.html",
    "revision": "ee0a7cbe4e486921c101f274ad122c01"
  },
  {
    "url": "me.png",
    "revision": "c8afe0e13189c7d591dad21c78e77dab"
  },
  {
    "url": "note/Database/index.html",
    "revision": "9ca7ee8a6bdf9ab44b30bc50a2bd7f1f"
  },
  {
    "url": "note/Database/pipelinedb-demo.html",
    "revision": "9f0e8ef32932775c244e83b0c0ae36e2"
  },
  {
    "url": "note/Explore/index.html",
    "revision": "ea4603143a59b47fcb162940d37d6bae"
  },
  {
    "url": "note/FrontEnd/index.html",
    "revision": "72b272d130d9d238f589f4d303634bbc"
  },
  {
    "url": "note/index.html",
    "revision": "e7d0ffb0e0076c704700d0c72978d5ba"
  },
  {
    "url": "note/Linux/centos7-ready.html",
    "revision": "b2bafc0d6aea78e3b809132bf572acfa"
  },
  {
    "url": "note/Linux/index.html",
    "revision": "b8438000a661d2e346e6b47cfa1fc823"
  },
  {
    "url": "note/NodeJS/index.html",
    "revision": "e72c78e22260224bcd614b5f926dc028"
  },
  {
    "url": "quick/index.html",
    "revision": "d67d06f2ed4dd568dcdb4c8b078acc69"
  },
  {
    "url": "star/index.html",
    "revision": "fe7ec35dd176c5545d021c184ed5215d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
