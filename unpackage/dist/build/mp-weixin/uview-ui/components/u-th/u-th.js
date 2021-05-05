(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-th/u-th"],{"040a":function(t,e,n){"use strict";n.r(e);var r=n("e106"),a=n("88e0");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("a911");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"c491c436",null,!1,r["a"],u);e["default"]=c.exports},"0e59":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-th",props:{width:{type:[Number,String],default:""}},data:function(){return{thStyle:{}}},created:function(){this.parent=!1},mounted:function(){if(this.parent=this.$u.$parent.call(this,"u-table"),this.parent){var t={};this.width&&(t.flex="0 0 ".concat(this.width)),t.textAlign=this.parent.align,t.padding=this.parent.padding,t.borderBottom="solid 1px ".concat(this.parent.borderColor),t.borderRight="solid 1px ".concat(this.parent.borderColor),Object.assign(t,this.parent.style),this.thStyle=t}}};e.default=r},"88e0":function(t,e,n){"use strict";n.r(e);var r=n("0e59"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},a911:function(t,e,n){"use strict";var r=n("c714"),a=n.n(r);a.a},c714:function(t,e,n){},e106:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.thStyle]));t.$mp.data=Object.assign({},{$root:{s0:n}})},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-th/u-th-create-component',
    {
        'uview-ui/components/u-th/u-th-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("040a"))
        })
    },
    [['uview-ui/components/u-th/u-th-create-component']]
]);
