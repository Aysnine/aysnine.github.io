(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{177:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("p",[t._v("但实际输出的结果为 "),a("code",[t._v("/index.js")]),t._v("、"),a("code",[t._v("/")]),t._v(" 之类的无关路径，看来有点问题。不过在 Webpack 的 issues 下找到了线索：\n"),a("a",{attrs:{href:"https://github.com/webpack/webpack/issues/1599#issuecomment-186841345",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack/webpack#1599"),a("OutboundLink")],1)]),a("p",[t._v("看来踩到这个坑的人不少，解决方法如下，摘自这个 issues 中一位老哥的代码，也就是修改 Webpack 配置，大概如下：")]),t._m(5),t._m(6)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"webpack-下，源码文件获取自身路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-下，源码文件获取自身路径","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack 下，源码文件获取自身路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("基于 Webpack 构建的项目中，如何在 "),s("code",[this._v(".vue")]),this._v("、"),s("code",[this._v(".js")]),this._v(" 等源码文件中，获取到其自身的源码文件路径？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("通常在编写用 NodeJS 运行的代码时，可以通过 "),a("code",[t._v("__filename")]),t._v("、"),a("code",[t._v("__dirname")]),t._v(" 等变量，获取到当前源码的路径信息。而在 Webpack 的眼中，每个 "),a("code",[t._v(".js")]),t._v("、"),a("code",[t._v(".ts")]),t._v("、"),a("code",[t._v(".vue")]),t._v(" 的源码文件可以看作一个 js 模块，那仍然有 "),a("code",[t._v("__filename")]),t._v("、"),a("code",[t._v("__dirname")]),t._v(" 这种东西吗？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在源码中试一试，如："),s("code",[this._v("src/pages/hello.vue")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 期望中应该得到 src/pages/hello.vue?xxx 这种格式的路径")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// the webpack config just works")]),t._v("\ntarget"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nnode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  __dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  __filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样一来，"),s("code",[this._v("__filename")]),this._v("、"),s("code",[this._v("__dirname")]),this._v(" 就能正常使用了，但由于各种 Webpack 集成化环境的配置方式有所不同，还需根据自己项目的情况进行以上配置。")])}],!1,null,null,null);s.default=e.exports}}]);