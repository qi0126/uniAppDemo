(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-nav/page-nav"],{"258e":function(t,n,e){"use strict";e.r(n);var i=e("f9bd"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"3e0b":function(t,n,e){},8820:function(t,n,e){"use strict";e.r(n);var i=e("b4dc"),a=e("258e");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("c850");var c,o=e("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"449e695f",null,!1,i["a"],c);n["default"]=r.exports},b4dc:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"2026"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("common.title")),i=t.$t("common.intro");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i}})},u=[]},c850:function(t,n,e){"use strict";var i=e("3e0b"),a=e.n(i);a.a},f9bd:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{desc:String,title:String},computed:{lang:function(){return"zh"==this.$i18n.locale?"zh":"en"}},methods:{switchLang:function(){this.$i18n.locale="en"==this.$i18n.locale?"zh":"en",this.vuex_tabbar[0].text=this.$t("nav.components"),this.vuex_tabbar[1].text=this.$t("nav.js"),this.vuex_tabbar[2].text=this.$t("nav.template"),t.setNavigationBarTitle({title:this.$t(this.title)})}}};n.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-nav/page-nav-create-component',
    {
        'components/page-nav/page-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8820"))
        })
    },
    [['components/page-nav/page-nav-create-component']]
]);
