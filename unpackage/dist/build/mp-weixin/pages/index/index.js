(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1d3a":function(t,e,n){},6511:function(t,e,n){"use strict";(function(t){n("e376");a(n("66fd"));var e=a(n("afa4"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"667c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{loadStatus:"loadmore",flowList:[],list:[]}},onLoad:function(){this.created()},onReachBottom:function(){var t=this;this.loadStatus="loading",setTimeout((function(){t.created(),t.loadStatus="loadmore"}),1e3)},methods:{created:function(){var t=this;this.$u.get("/home").then((function(e){t.flowList=e}))},remove:function(t){this.$refs.uWaterfall.remove(t)},clear:function(){this.$refs.uWaterfall.clear()},toDetail:function(t){this.$u.route({type:"navigateTo",params:{mId:t.product_id},url:"/pages/index/proDetail",animationType:"slide-in-bottom"})}}};e.default=a},"8ee6":function(t,e,n){},a3dc:function(t,e,n){"use strict";var a=n("1d3a"),o=n.n(a);o.a},aa7d:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={uWaterfall:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-waterfall/u-waterfall")]).then(n.bind(null,"2eef"))},uLazyLoad:function(){return n.e("uview-ui/components/u-lazy-load/u-lazy-load").then(n.bind(null,"c42a"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"0c32"))}},o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},afa4:function(t,e,n){"use strict";n.r(e);var a=n("aa7d"),o=n("fc6e");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("a3dc"),n("ff80");var i,r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"47f43708",null,!1,a["a"],i);e["default"]=c.exports},fc6e:function(t,e,n){"use strict";n.r(e);var a=n("667c"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=o.a},ff80:function(t,e,n){"use strict";var a=n("8ee6"),o=n.n(a);o.a}},[["6511","common/runtime","common/vendor"]]]);