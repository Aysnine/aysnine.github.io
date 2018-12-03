(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{183:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),a("p",[t._v("同步一个数据库：")]),t._m(4),a("p",[t._v("只同步几张表：")]),t._m(5),t._m(6),a("p",[t._v("参考："),a("a",{attrs:{href:"https://stackoverflow.com/questions/12404634/mysql-sync-two-tables-from-2-databases",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql sync two tables from 2 databases - Stack Overflow"),a("OutboundLink")],1)]),a("p",[t._v("配合 "),a("a",{attrs:{href:"http://man.linuxde.net/crontab",target:"_blank",rel:"noopener noreferrer"}},[t._v("crontab"),a("OutboundLink")],1),t._v(" 就可以完成自动同步：")]),t._m(7),t._m(8),t._m(9),a("p",[t._v("如果 linux 有 8 小时时差，改一下就是这样的：")]),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mysql-跨主机单向同步库与表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-跨主机单向同步库与表","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL 跨主机单向同步库与表")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("两个不同主机上的 MySQL，进行单向的数据同步，对实时性要求不高的情况下，\n最简单的方式是使用 MySQL 自带的 "),s("code",[this._v("mysqldump")]),this._v("、"),s("code",[this._v("mysql")]),this._v(" 命令。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("以下命令在 linux 环境下使用，并且是明文密码，会出现以下警告，这里暂时忽略这个问题：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mysql: [Warning] Using a password on the command line interface can be insecure.\nmysqldump: [Warning] Using a password on the command line interface can be insecure.\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mysqldump -h "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源host"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -u "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源user"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -P "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源port"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源用户密码"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \\\n\t--opt "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源数据库名"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \\\n\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql -h "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标host"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -u "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标user"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -P "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标port"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标用户密码"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -C "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标数据库名"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mysqldump -h "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源host"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -u "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源user"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -P "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源port"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源用户密码"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \\\n\t--opt "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源数据库名"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("表A"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("表B"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("表N"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \\\n\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql -h "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标host"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -u "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标user"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -P "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标port"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标用户密码"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -C "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标数据库名"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("注意，首先源表和目标表，表名要一样，如果目标数据库里不存在该表，那么将会被自动创建，因为这里的同步是强制的，将源表的数据和结构，强制同步给目标数据库。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# ~/sync.sh")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("/bin/bash\n\nmysqldump -h "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源host"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -u "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源user"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -P "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源port"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源用户密码"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \\\n\t--opt "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("源数据库名"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("表A"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("表B"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("表N"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \\\n\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql -h "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标host"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -u "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标user"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -P "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标port"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标用户密码"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -C "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标数据库名"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Run at'")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("`")]),a("span",{attrs:{class:"token function"}},[t._v("date")]),t._v(" +"),a("span",{attrs:{class:"token string"}},[t._v('"%Y-%m-%d %H:%M:%S"')]),a("span",{attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如，每天凌晨4点运行一次，并输出到日志 "),s("code",[this._v("sync.log")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("0 4 * * * ~/sync.sh >> ~/sync.log\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("0 20 * * * ~/sync.sh >> ~/sync.log\n")])])])}],!1,null,null,null);s.default=e.exports}}]);