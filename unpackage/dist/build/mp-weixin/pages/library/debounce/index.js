require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/library/debounce/index"],{"0fe2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{result:[],timeout:1e3,immediate:!0,mode:"throttle"}},methods:{modeChange:function(t){this.mode=t?"debouncd":"throttle"},timeoutChange:function(t){this.timeout=[500,1e3,2e3][t]},immediateChange:function(t){this.immediate=!t},getResult:function(){this.result.length>=6&&(this.result=[]),this.result.push(0)},btnClick:function(){"throttle"==this.mode?this.$u.throttle(this.getResult,this.timeout,this.immediate):this.$u.debounce(this.getResult,this.timeout,this.immediate)}}};e.default=u},1253:function(t,e,n){"use strict";(function(t){n("e376");u(n("66fd"));var e=u(n("9384"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},1853:function(t,e,n){},"49c7":function(t,e,n){"use strict";n.r(e);var u=n("0fe2"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},9384:function(t,e,n){"use strict";n.r(e);var u=n("967b"),i=n("49c7");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("f9ff");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"58c34eb6",null,!1,u["a"],c);e["default"]=s.exports},"967b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var u={uSubsection:function(){return n.e("uview-ui/components/u-subsection/u-subsection").then(n.bind(null,"db2c"))}},i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},f9ff:function(t,e,n){"use strict";var u=n("1853"),i=n.n(u);i.a}},[["1253","common/runtime","common/vendor"]]]);