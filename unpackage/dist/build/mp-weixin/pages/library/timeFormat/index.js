require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/library/timeFormat/index"],{1388:function(t,n,e){"use strict";e.r(n);var u=e("c23c"),i=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=i.a},"3e5d":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var u={uSubsection:function(){return e.e("uview-ui/components/u-subsection/u-subsection").then(e.bind(null,"db2c"))}},i=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"72a6":function(t,n,e){"use strict";(function(t){e("e376");u(e("66fd"));var n=u(e("b900"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"8d00":function(t,n,e){"use strict";var u=e("d116"),i=e.n(u);i.a},b900:function(t,n,e){"use strict";e.r(n);var u=e("3e5d"),i=e("1388");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("8d00");var c,o=e("f0c5"),a=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"3b975369",null,!1,u["a"],c);n["default"]=a.exports},c23c:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{timestamp:"2020-11-02T02:59:24.732Z",result:null}},onLoad:function(){this.getResult("yyyy-mm-dd")},methods:{format1Change:function(t){var n=0==t?"yyyy-mm-dd":"yyyy年-mm月-dd日";this.getResult(n)},format2Change:function(t){var n=0==t?"mm-dd":"yyyy-mm-dd hh:MM";this.getResult(n)},getResult:function(t){this.result=this.$u.timeFormat(this.timestamp,t)}}};n.default=u},d116:function(t,n,e){}},[["72a6","common/runtime","common/vendor"]]]);