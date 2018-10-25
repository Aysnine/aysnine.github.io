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
    "revision": "8e2a66864210e3a4adabecc9cd557858"
  },
  {
    "url": "assets/css/0.styles.242fc66c.css",
    "revision": "39338b347b0f3b43e3cb9e566bd51677"
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
    "url": "assets/js/1.2764e25f.js",
    "revision": "02cca82f8655a7208ef4b0d908710d36"
  },
  {
    "url": "assets/js/10.52c4d1e0.js",
    "revision": "9dfbc20519b4b9e2fba58a642926c7de"
  },
  {
    "url": "assets/js/11.2ff72b0e.js",
    "revision": "3323e881c051f7c6b73b35f1f31180f7"
  },
  {
    "url": "assets/js/12.a112165a.js",
    "revision": "48c4c8f78a2011e0f2222c4457ceb89d"
  },
  {
    "url": "assets/js/13.e58aa3dd.js",
    "revision": "23abd912353e16121928785517a169c3"
  },
  {
    "url": "assets/js/14.f9b0f117.js",
    "revision": "0eb8a50c06d1192a8f5c3bc883960ca3"
  },
  {
    "url": "assets/js/2.3c2850b4.js",
    "revision": "1c494fe68d9313622e7687f4954d6486"
  },
  {
    "url": "assets/js/3.18bb06a9.js",
    "revision": "a1a2a4a309ef4f274c599ce03bd85810"
  },
  {
    "url": "assets/js/4.35f0d1c9.js",
    "revision": "0023dcc4fa8588bd2828a858138fca0a"
  },
  {
    "url": "assets/js/5.4ad33705.js",
    "revision": "f317984dcf3ecf5cebd9bd7fa0f53e1a"
  },
  {
    "url": "assets/js/6.c6eac44b.js",
    "revision": "1dec910db23d81fdbed5e8ccbcf0950c"
  },
  {
    "url": "assets/js/7.3eed38dd.js",
    "revision": "8664ad7a3e4946e264acff5c66d5946c"
  },
  {
    "url": "assets/js/8.7d8b3b07.js",
    "revision": "39dbac2f527a9cf153fae2ec73c052fc"
  },
  {
    "url": "assets/js/9.f6ed2ab6.js",
    "revision": "74e8ffb757b14756f50447427e926b01"
  },
  {
    "url": "assets/js/app.4a818b93.js",
    "revision": "2fa619a4b9296f801e24df9f15183bca"
  },
  {
    "url": "buddy-logos/elementui.svg",
    "revision": "eb0435ede9e82d37927eca4146f30c3e"
  },
  {
    "url": "index.html",
    "revision": "db8ed694933f705d97066a46bf0ca360"
  },
  {
    "url": "me.png",
    "revision": "c8afe0e13189c7d591dad21c78e77dab"
  },
  {
    "url": "note/Database/index.html",
    "revision": "2af86803b634b0fbfcbb8ab152cc44b9"
  },
  {
    "url": "note/Database/pipelinedb-demo.html",
    "revision": "7d055ea97a0f821400bc0a85585900f7"
  },
  {
    "url": "note/Explore/index.html",
    "revision": "f5ae669af90729a7bb759ba20578cd2f"
  },
  {
    "url": "note/FrontEnd/index.html",
    "revision": "bc7718d9f86f11ea4ed8aebd192ab8b3"
  },
  {
    "url": "note/index.html",
    "revision": "eaf4f018ebab08dc40484252fb9225fa"
  },
  {
    "url": "note/Linux/centos7-ready.html",
    "revision": "543fc7d3b718bd46379c099950bc5348"
  },
  {
    "url": "note/Linux/index.html",
    "revision": "ff020113ed3135512475f88c6364287d"
  },
  {
    "url": "note/NodeJS/index.html",
    "revision": "ca1da2d6db2593ed6a3f8d77f38645c1"
  },
  {
    "url": "quick/index.html",
    "revision": "11595e209f0f04f85f8603f9764de23a"
  },
  {
    "url": "star/index.html",
    "revision": "60f275e1f1d83709aaa4fb604c9d58f7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
