(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsB/checkbox/index"],{1494:function(e,n,t){"use strict";(function(e){t("e376");c(t("66fd"));var n=c(t("22f4"));function c(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"22f4":function(e,n,t){"use strict";t.r(n);var c=t("5cf6"),i=t("9325");for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("7ff1");var o,s=t("f0c5"),a=Object(s["a"])(i["default"],c["b"],c["c"],!1,null,"7a2897c5",null,!1,c["a"],o);n["default"]=a.exports},"436c":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={data:function(){return{list:[{name:"荔枝",checked:!1,disabled:!1},{name:"香蕉",checked:!1,disabled:!1},{name:"橙子",checked:!1,disabled:!1},{name:"草莓",checked:!1,disabled:!1}],disabled:!1,checked:!0,result:[],shape:"square",max:3,activeColor:"#2979ff",size:34,wrap:!1,width:"auto"}},computed:{getResult:function(){return this.result.join(",")}},methods:{shapeChange:function(e){this.shape=0==e?"square":"circle"},sizeChange:function(e){this.size=0==e?30:1==e?40:50},defaultChooseChange:function(e){0==e?(this.list[0].checked=!0,this.result=[this.list[0].name]):(this.list[0].checked=!1,this.result.splice(this.result.indexOf(this.list[0].name),1))},maxChange:function(e){this.max=e+1},disabledChange:function(e){this.list[0].disabled=0==e},activeColorChange:function(e){this.result.length||(this.list[0].checked=!0);var n=0==e?"primary":1==e?"error":2==e?"warning":3==e?"success":"info";this.activeColor=this.$u.color[n]},checkboxChange:function(e){},checkboxGroupChange:function(e){this.result=e},widthChange:function(e){this.width=0==e?"50%":""},wrapChange:function(e){this.wrap=!e}}};n.default=c},"5cf6":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return c}));var c={uCheckboxGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(t.bind(null,"1b9c"))},uCheckbox:function(){return t.e("uview-ui/components/u-checkbox/u-checkbox").then(t.bind(null,"08b4"))},uSubsection:function(){return t.e("uview-ui/components/u-subsection/u-subsection").then(t.bind(null,"db2c"))}},i=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"7ff1":function(e,n,t){"use strict";var c=t("86d9"),i=t.n(c);i.a},"86d9":function(e,n,t){},9325:function(e,n,t){"use strict";t.r(n);var c=t("436c"),i=t.n(c);for(var u in c)"default"!==u&&function(e){t.d(n,e,(function(){return c[e]}))}(u);n["default"]=i.a}},[["1494","common/runtime","common/vendor"]]]);