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
    "revision": "d6e777d0195f4e0b23253380c360f935"
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
    "url": "assets/js/1.0241f70f.js",
    "revision": "072e63766ccd9fe181ccc8e14d413986"
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
    "url": "assets/js/app.8c696c1f.js",
    "revision": "96c8b1aae441b87c43f734cf6441b3aa"
  },
  {
    "url": "buddy-logos/elementui.svg",
    "revision": "eb0435ede9e82d37927eca4146f30c3e"
  },
  {
    "url": "index.html",
    "revision": "e4b249cf6adf056918dfda9d4bc88aca"
  },
  {
    "url": "me.png",
    "revision": "c8afe0e13189c7d591dad21c78e77dab"
  },
  {
    "url": "note/Database/index.html",
    "revision": "34c0cf5745d59153bd8f0e35cfd8777b"
  },
  {
    "url": "note/Database/pipelinedb-demo.html",
    "revision": "d9f42de752e049f35b5ebef542f820e6"
  },
  {
    "url": "note/Explore/index.html",
    "revision": "40971e217c08e7a51e6dd24fa9eeee31"
  },
  {
    "url": "note/FrontEnd/index.html",
    "revision": "0d9955cab87d54008218318bc51fa7ea"
  },
  {
    "url": "note/index.html",
    "revision": "c74c3c224f59b5335bdd1650cb9ab9a2"
  },
  {
    "url": "note/Linux/centos7-ready.html",
    "revision": "f73831bef3f0c72750d19942aefc6cf9"
  },
  {
    "url": "note/Linux/index.html",
    "revision": "768be5bf1691aa9645783f0def7ef460"
  },
  {
    "url": "note/NodeJS/index.html",
    "revision": "e0c633221b66033445e3f76c025080e8"
  },
  {
    "url": "quick/index.html",
    "revision": "4ad76c928dfcca011597234994b83c2b"
  },
  {
    "url": "star/index.html",
    "revision": "fb228e409d51d57e8d7f156ba9b9e8ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
