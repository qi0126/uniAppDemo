(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["pages/componentsB/app-sub-service"],{

/***/ 1000:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/rate/index.vue?vue&type=template&id=73114722&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uRate: __webpack_require__(/*! @/uview-ui/components/u-rate/u-rate.vue */ 1001).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-rate", {
                attrs: {
                  count: _vm.count,
                  "active-color": _vm.activeColor,
                  "inaction-color": _vm.inactiveColor,
                  "active-icon": _vm.activeIcon,
                  "inactive-icon": _vm.inactiveIcon,
                  disabled: _vm.disabled,
                  colors: _vm.colors,
                  icons: _vm.icons,
                  _i: 4
                },
                on: { change: _vm.change },
                model: {
                  value: _vm._$s(4, "v-model", _vm.value),
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "u-config-wrap"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 6 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "u-config-item"),
              attrs: { _i: 7 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "u-item-title"),
                attrs: { _i: 8 }
              }),
              _c("u-subsection", {
                attrs: { list: [1, 2, 3, 4], _i: 9 },
                on: { change: _vm.currentChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 12 },
                on: { change: _vm.plainChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 15 },
                on: { change: _vm.styleChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 18 },
                on: { change: _vm.iconChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "u-config-item"),
              attrs: { _i: 19 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "u-item-title"),
                attrs: { _i: 20 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 21 },
                on: { change: _vm.decimalChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "u-config-item"),
              attrs: { _i: 22 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(23, "sc", "u-item-title"),
                attrs: { _i: 23 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 24 },
                on: { change: _vm.disabledChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(25, "sc", "u-config-item"),
              attrs: { _i: 25 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(26, "sc", "u-item-title"),
                attrs: { _i: 26 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: [4, 5, 6], _i: 27 },
                on: { change: _vm.countChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1006:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/rate/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 1007);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1007:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/rate/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      // 1.4.5后推荐使用v-model双向绑定，弃用current
      // current: 1,
      activeColor: '#FA3534',
      inactiveColor: '#b2b2b2',
      disabled: false,
      count: 5,
      customIcon: false,
      plain: false,
      value: 0,
      colors: [],
      icons: [] };

  },
  watch: {
    value: function value(n) {
      // console.log(n);
    } },

  computed: {
    activeIcon: function activeIcon() {
      var icon = this.customIcon ? 'heart' : 'star';
      return this.plain ? icon : icon + '-fill';
    },
    inactiveIcon: function inactiveIcon() {
      var icon = this.customIcon ? 'heart' : 'star';
      return this.plain ? icon : icon + '-fill';
    } },

  methods: {
    currentChange: function currentChange(index) {
      this.value = index == 0 ? 1 : index == 1 ? 2 : index == 2 ? 3 : 4;
    },
    plainChange: function plainChange(index) {
      this.plain = !index;
    },
    disabledChange: function disabledChange(index) {
      this.disabled = index == 0 ? true : false;
    },
    countChange: function countChange(index) {
      this.count = index == 0 ? 4 : index == 1 ? 5 : 6;
    },
    styleChange: function styleChange(index) {
      if (index == 0) {
        this.activeColor = this.$u.color['primary'];
        this.inactiveColor = this.$u.color['info'];
      } else {
        this.activeColor = '#FA3534';
        this.inactiveColor = '#b2b2b2';
      }
    },
    decimalChange: function decimalChange(index) {
      if (index == 0) {
        this.colors = ['#ffc454', '#ffb409', '#ff9500'];
        this.icons = ['thumb-down-fill', 'thumb-down-fill', 'thumb-up-fill', 'thumb-up-fill'];
      } else {
        this.colors = [];
        this.icons = [];
      }
    },
    iconChange: function iconChange(index) {
      this.customIcon = !index;
    },
    change: function change(val) {
      // console.log(val);
    } } };exports.default = _default;

/***/ }),

/***/ 1008:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/readMore/index.vue?mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=66fce95a&scoped=true&mpType=page */ 1009);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 1016);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66fce95a",
  null,
  false,
  _index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/readMore/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1009:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/readMore/index.vue?vue&type=template&id=66fce95a&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=66fce95a&scoped=true&mpType=page */ 1010);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66fce95a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1010:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/readMore/index.vue?vue&type=template&id=66fce95a&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uReadMore: __webpack_require__(/*! @/uview-ui/components/u-read-more/u-read-more.vue */ 1011)
      .default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c(
                "u-read-more",
                {
                  ref: "uReadMore",
                  attrs: {
                    toggle: _vm.toggle,
                    "show-height": _vm.showHeight,
                    _i: 4
                  },
                  on: { open: _vm.open, close: _vm.close }
                },
                [
                  _c("rich-text", {
                    attrs: { nodes: _vm._$s(5, "a-nodes", _vm.content), _i: 5 }
                  })
                ]
              )
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "u-config-wrap"), attrs: { _i: 6 } },
        [
          _c("view", {
            staticClass: _vm._$s(7, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 7 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "u-config-item"),
              attrs: { _i: 8 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(9, "sc", "u-item-title"),
                attrs: { _i: 9 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["100", "200", "400"], _i: 10 },
                on: { change: _vm.showHeightChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(11, "sc", "u-config-item"),
              attrs: { _i: 11 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(12, "sc", "u-item-title"),
                attrs: { _i: 12 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 13 },
                on: { change: _vm.toggleChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1016:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/readMore/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 1017);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1017:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/readMore/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      content: "\u6D54\u9633\u6C5F\u5934\u591C\u9001\u5BA2\uFF0C\u67AB\u53F6\u837B\u82B1\u79CB\u745F\u745F\u3002\u4E3B\u4EBA\u4E0B\u9A6C\u5BA2\u5728\u8239\uFF0C\u4E3E\u9152\u6B32\u996E\u65E0\u7BA1\u5F26\u3002\u9189\u4E0D\u6210\u6B22\u60E8\u5C06\u522B\uFF0C\u522B\u65F6\u832B\u832B\u6C5F\u6D78\u6708\u3002\n\t\t\t\t\u5FFD\u95FB\u6C34\u4E0A\u7435\u7436\u58F0\uFF0C\u4E3B\u4EBA\u5FD8\u5F52\u5BA2\u4E0D\u53D1\u3002\u5BFB\u58F0\u6697\u95EE\u5F39\u8005\u8C01\uFF0C\u7435\u7436\u58F0\u505C\u6B32\u8BED\u8FDF\u3002\u79FB\u8239\u76F8\u8FD1\u9080\u76F8\u89C1\uFF0C\u6DFB\u9152\u56DE\u706F\u91CD\u5F00\u5BB4\u3002\u5343\u547C\u4E07\u5524\u59CB\u51FA\u6765\uFF0C\u72B9\u62B1\u7435\u7436\u534A\u906E\u9762\u3002\u8F6C\u8F74\u62E8\u5F26\u4E09\u4E24\u58F0\uFF0C\u672A\u6210\u66F2\u8C03\u5148\u6709\u60C5\u3002\u5F26\u5F26\u63A9\u6291\u58F0\u58F0\u601D\uFF0C\u4F3C\u8BC9\u5E73\u751F\u4E0D\u5F97\u5FD7\u3002\u4F4E\u7709\u4FE1\u624B\u7EED\u7EED\u5F39\uFF0C\u8BF4\u5C3D\u5FC3\u4E2D\u65E0\u9650\u4E8B\u3002\u8F7B\u62E2\u6162\u637B\u62B9\u590D\u6311\uFF0C\u521D\u4E3A\u300A\u9713\u88F3\u300B\u540E\u300A\u516D\u5E7A\u300B\u3002\u5927\u5F26\u5608\u5608\u5982\u6025\u96E8\uFF0C\u5C0F\u5F26\u5207\u5207\u5982\u79C1\u8BED\u3002\u5608\u5608\u5207\u5207\u9519\u6742\u5F39\uFF0C\u5927\u73E0\u5C0F\u73E0\u843D\u7389\u76D8\u3002\u95F4\u5173\u83BA\u8BED\u82B1\u5E95\u6ED1\uFF0C\u5E7D\u54BD\u6CC9\u6D41\u51B0\u4E0B\u96BE\u3002\u51B0\u6CC9\u51B7\u6DA9\u5F26\u51DD\u7EDD\uFF0C\u51DD\u7EDD\u4E0D\u901A\u58F0\u6682\u6B47\u3002\u522B\u6709\u5E7D\u6101\u6697\u6068\u751F\uFF0C\u6B64\u65F6\u65E0\u58F0\u80DC\u6709\u58F0\u3002\u94F6\u74F6\u4E4D\u7834\u6C34\u6D46\u8FF8\uFF0C\u94C1\u9A91\u7A81\u51FA\u5200\u67AA\u9E23\u3002\u66F2\u7EC8\u6536\u62E8\u5F53\u5FC3\u753B\uFF0C\u56DB\u5F26\u4E00\u58F0\u5982\u88C2\u5E1B\u3002\u4E1C\u8239\u897F\u822B\u6084\u65E0\u8A00\uFF0C\u552F\u89C1\u6C5F\u5FC3\u79CB\u6708\u767D\u3002\n\t\t\t\t\u6C89\u541F\u653E\u62E8\u63D2\u5F26\u4E2D\uFF0C\u6574\u987F\u8863\u88F3\u8D77\u655B\u5BB9\u3002\u81EA\u8A00\u672C\u662F\u4EAC\u57CE\u5973\uFF0C\u5BB6\u5728\u867E\u87C6\u9675\u4E0B\u4F4F\u3002\u5341\u4E09\u5B66\u5F97\u7435\u7436\u6210\uFF0C\u540D\u5C5E\u6559\u574A\u7B2C\u4E00\u90E8\u3002\u66F2\u7F62\u66FE\u6559\u5584\u624D\u670D\uFF0C\u5986\u6210\u6BCF\u88AB\u79CB\u5A18\u5992\u3002\u4E94\u9675\u5E74\u5C11\u4E89\u7F20\u5934\uFF0C\u4E00\u66F2\u7EA2\u7EE1\u4E0D\u77E5\u6570\u3002\u94BF\u5934\u94F6\u7BE6\u51FB\u8282\u788E\uFF0C\u8840\u8272\u7F57\u88D9\u7FFB\u9152\u6C61\u3002\u4ECA\u5E74\u6B22\u7B11\u590D\u660E\u5E74\uFF0C\u79CB\u6708\u6625\u98CE\u7B49\u95F2\u5EA6\u3002\u5F1F\u8D70\u4ECE\u519B\u963F\u59E8\u6B7B\uFF0C\u66AE\u53BB\u671D\u6765\u989C\u8272\u6545\u3002\u95E8\u524D\u51B7\u843D\u978D\u9A6C\u7A00\uFF0C\u8001\u5927\u5AC1\u4F5C\u5546\u4EBA\u5987\u3002\u5546\u4EBA\u91CD\u5229\u8F7B\u522B\u79BB\uFF0C\u524D\u6708\u6D6E\u6881\u4E70\u8336\u53BB\u3002\u53BB\u6765\u6C5F\u53E3\u5B88\u7A7A\u8239\uFF0C\u7ED5\u8239\u6708\u660E\u6C5F\u6C34\u5BD2\u3002\u591C\u6DF1\u5FFD\u68A6\u5C11\u5E74\u4E8B\uFF0C\u68A6\u557C\u5986\u6CEA\u7EA2\u9611\u5E72\u3002\n\t\t\t\t\u6211\u95FB\u7435\u7436\u5DF2\u53F9\u606F\uFF0C\u53C8\u95FB\u6B64\u8BED\u91CD\u5527\u5527\u3002\u540C\u662F\u5929\u6DAF\u6CA6\u843D\u4EBA\uFF0C\u76F8\u9022\u4F55\u5FC5\u66FE\u76F8\u8BC6\uFF01\u6211\u4ECE\u53BB\u5E74\u8F9E\u5E1D\u4EAC\uFF0C\u8C2A\u5C45\u5367\u75C5\u6D54\u9633\u57CE\u3002\u6D54\u9633\u5730\u50FB\u65E0\u97F3\u4E50\uFF0C\u7EC8\u5C81\u4E0D\u95FB\u4E1D\u7AF9\u58F0\u3002\u4F4F\u8FD1\u6E53\u6C5F\u5730\u4F4E\u6E7F\uFF0C\u9EC4\u82A6\u82E6\u7AF9\u7ED5\u5B85\u751F\u3002\u5176\u95F4\u65E6\u66AE\u95FB\u4F55\u7269\uFF1F\u675C\u9E43\u557C\u8840\u733F\u54C0\u9E23\u3002\u6625\u6C5F\u82B1\u671D\u79CB\u6708\u591C\uFF0C\u5F80\u5F80\u53D6\u9152\u8FD8\u72EC\u503E\u3002\u5C82\u65E0\u5C71\u6B4C\u4E0E\u6751\u7B1B\uFF1F\u5455\u54D1\u5632\u54F3\u96BE\u4E3A\u542C\u3002\u4ECA\u591C\u95FB\u541B\u7435\u7436\u8BED\uFF0C\u5982\u542C\u4ED9\u4E50\u8033\u6682\u660E\u3002\u83AB\u8F9E\u66F4\u5750\u5F39\u4E00\u66F2\uFF0C\u4E3A\u541B\u7FFB\u4F5C\u300A\u7435\u7436\u884C\u300B\u3002\u611F\u6211\u6B64\u8A00\u826F\u4E45\u7ACB\uFF0C\u5374\u5750\u4FC3\u5F26\u5F26\u8F6C\u6025\u3002\u51C4\u51C4\u4E0D\u4F3C\u5411\u524D\u58F0\uFF0C\u6EE1\u5EA7\u91CD\u95FB\u7686\u63A9\u6CE3\u3002\u5EA7\u4E2D\u6CE3\u4E0B\u8C01\u6700\u591A\uFF1F\u6C5F\u5DDE\u53F8\u9A6C\u9752\u886B\u6E7F\u3002",



      showHeight: 200,
      toggle: false };

  },
  methods: {
    showHeightChange: function showHeightChange(index) {
      this.showHeight = index == 0 ? 100 : index == 1 ? 200 : 400;
    },
    toggleChange: function toggleChange(index) {
      this.toggle = index == 0 ? true : false;
    },
    open: function open() {
      // console.log('open');
    },
    close: function close() {
      // console.log('close');
    } } };exports.default = _default;

/***/ }),

/***/ 1018:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/search/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4ef85392&scoped=true&mpType=page */ 1019);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 1021);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ef85392",
  null,
  false,
  _index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/search/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1019:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/search/index.vue?vue&type=template&id=4ef85392&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4ef85392&scoped=true&mpType=page */ 1020);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4ef85392_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1020:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/search/index.vue?vue&type=template&id=4ef85392&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uSearch: __webpack_require__(/*! @/uview-ui/components/u-search/u-search.vue */ 733).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", { ref: "uToast", attrs: { _i: 4 } }),
              _c("u-search", {
                attrs: {
                  shape: _vm.shape,
                  clearabled: _vm.clearabled,
                  "show-action": _vm.showAction,
                  "input-align": _vm.inputAlign,
                  _i: 5
                },
                on: {
                  change: _vm.change,
                  custom: _vm.custom,
                  search: _vm.search,
                  clear: _vm.clear
                },
                model: {
                  value: _vm._$s(5, "v-model", _vm.value),
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "u-config-wrap"), attrs: { _i: 6 } },
        [
          _c("view", {
            staticClass: _vm._$s(7, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 7 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "u-config-item"),
              attrs: { _i: 8 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(9, "sc", "u-item-title"),
                attrs: { _i: 9 }
              }),
              _c("u-subsection", {
                attrs: { list: ["空", "天山雪莲"], _i: 10 },
                on: { change: _vm.valueChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(11, "sc", "u-config-item"),
              attrs: { _i: 11 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(12, "sc", "u-item-title"),
                attrs: { _i: 12 }
              }),
              _c("u-subsection", {
                attrs: { list: ["圆形", "方形"], _i: 13 },
                on: { change: _vm.shapeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "u-config-item"),
              attrs: { _i: 14 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(15, "sc", "u-item-title"),
                attrs: { _i: 15 }
              }),
              _c("u-subsection", {
                attrs: { list: ["启用", "关闭"], _i: 16 },
                on: { change: _vm.clearabledChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(17, "sc", "u-config-item"),
              attrs: { _i: 17 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(18, "sc", "u-item-title"),
                attrs: { _i: 18 }
              }),
              _c("u-subsection", {
                attrs: { list: ["启用", "关闭"], _i: 19 },
                on: { change: _vm.showActionChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(20, "sc", "u-config-item"),
              attrs: { _i: 20 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(21, "sc", "u-item-title"),
                attrs: { _i: 21 }
              }),
              _c("u-subsection", {
                attrs: { list: ["左", "中", "右"], _i: 22 },
                on: { change: _vm.inputAlignChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1021:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/search/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 1022);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1022:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/search/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      value: '',
      shape: 'round',
      clearabled: true,
      showAction: true,
      inputAlign: 'left' };

  },
  watch: {
    // 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
    // 也能知道value值当前的内容
    value: function value(val) {
      // console.log(val);
    } },

  methods: {
    valueChange: function valueChange(index) {
      this.value = index == 0 ? '' : '天山雪莲';
    },
    shapeChange: function shapeChange(index) {
      this.shape = index == 0 ? 'round' : 'square';
    },
    clearabledChange: function clearabledChange(index) {
      this.clearabled = index == 0 ? true : false;
    },
    showActionChange: function showActionChange(index) {
      this.showAction = index == 0 ? true : false;
    },
    inputAlignChange: function inputAlignChange(index) {
      this.inputAlign = index == 0 ? 'left' : index == 1 ? 'center' : 'right';
    },
    change: function change(value) {
      // 搜索框内容变化时，会触发此事件，value值为输入框的内容
      //console.log(value);
    },
    custom: function custom(value) {
      //console.log(value);
      this.$u.toast('输入值为：' + value);
    },
    search: function search(value) {
      this.$refs.uToast.show({
        title: '搜索内容为：' + value,
        type: 'success' });

    },
    clear: function clear() {
      // console.log(this.value);
    } } };exports.default = _default;

/***/ }),

/***/ 1023:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/steps/index.vue?mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=34ed30ae&scoped=true&mpType=page */ 1024);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 1031);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34ed30ae",
  null,
  false,
  _index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/steps/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1024:
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/steps/index.vue?vue&type=template&id=34ed30ae&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=34ed30ae&scoped=true&mpType=page */ 1025);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34ed30ae_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1025:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/steps/index.vue?vue&type=template&id=34ed30ae&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSteps: __webpack_require__(/*! @/uview-ui/components/u-steps/u-steps.vue */ 1026).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-steps", {
                attrs: {
                  direction: _vm.direction,
                  current: _vm.current,
                  list: _vm.steps,
                  mode: _vm.mode,
                  icon: _vm.icon,
                  _i: 4
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "u-config-wrap"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 6 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "u-config-item"),
              attrs: { _i: 7 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "u-item-title"),
                attrs: { _i: 8 }
              }),
              _c("u-subsection", {
                attrs: { list: ["number", "dot"], _i: 9 },
                on: { change: _vm.modeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: { list: ["横向", "竖向"], _i: 12 },
                on: { change: _vm.directionChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: { list: ["否", "是"], _i: 15 },
                on: { change: _vm.iconChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: { list: ["1", "2", "3", "4"], _i: 18 },
                on: { change: _vm.stepChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1031:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/steps/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 1032);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1032:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/steps/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      steps: [{
        name: '下单' },
      {
        name: '出库' },
      {
        name: '运输' },
      {
        name: '签收' }],

      current: 0,
      icon: 'checkmark',
      mode: 'number',
      direction: 'row' };

  },
  methods: {
    modeChange: function modeChange(index) {
      this.mode = index == 0 ? 'number' : 'dot';
    },
    stepChange: function stepChange(index) {
      this.current = [0, 1, 2, 3][index];
    },
    iconChange: function iconChange(index) {
      this.icon = index == 0 ? 'checkmark' : 'map-fill';
    },
    directionChange: function directionChange(index) {
      this.direction = index == 0 ? 'row' : 'column';
    } } };exports.default = _default;

/***/ }),

/***/ 1033:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/sticky/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=51918bb8&scoped=true&mpType=page */ 1034);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 1041);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51918bb8",
  null,
  false,
  _index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/sticky/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1034:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/sticky/index.vue?vue&type=template&id=51918bb8&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=51918bb8&scoped=true&mpType=page */ 1035);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51918bb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1035:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/sticky/index.vue?vue&type=template&id=51918bb8&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uSticky: __webpack_require__(/*! @/uview-ui/components/u-sticky/u-sticky.vue */ 1036).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", { ref: "uToast", attrs: { _i: 4 } }),
              _c(
                "u-sticky",
                {
                  attrs: {
                    "offset-top": _vm.offsetTop,
                    enable: _vm.enable,
                    _i: 5
                  },
                  on: { fixed: _vm.fixed, unfixed: _vm.unfixed }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(6, "sc", "sticky"),
                    attrs: { _i: 6 }
                  })
                ]
              )
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "u-config-wrap"), attrs: { _i: 7 } },
        [
          _c("view", {
            staticClass: _vm._$s(8, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 8 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(9, "sc", "u-config-item"),
              attrs: { _i: 9 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(10, "sc", "u-item-title"),
                attrs: { _i: 10 }
              }),
              _c("u-subsection", {
                attrs: { list: [0, 120, 200], _i: 11 },
                on: { change: _vm.offsetTopChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "u-config-item"),
              attrs: { _i: 12 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(13, "sc", "u-item-title"),
                attrs: { _i: 13 }
              }),
              _c("u-subsection", {
                attrs: { list: ["允许吸顶", "禁止吸顶"], _i: 14 },
                on: { change: _vm.enableChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1041:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/sticky/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 1042);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1042:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/sticky/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      offsetTop: 0,
      enable: true };

  },
  methods: {
    offsetTopChange: function offsetTopChange(index) {
      this.offsetTop = index == 0 ? 0 : index == 1 ? 120 : 200;
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 0 });

    },
    enableChange: function enableChange(index) {
      this.enable = index == 0 ? true : false;
    },
    fixed: function fixed() {
      this.$refs.uToast.show({
        type: 'warning',
        title: '触发吸顶' });

    },
    unfixed: function unfixed() {
      this.$refs.uToast.show({
        type: 'success',
        title: '取消吸顶' });

    } } };exports.default = _default;

/***/ }),

/***/ 1043:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swiper/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=76d7c5f2&scoped=true&mpType=page */ 1044);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 1046);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "76d7c5f2",
  null,
  false,
  _index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/swiper/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1044:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swiper/index.vue?vue&type=template&id=76d7c5f2&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=76d7c5f2&scoped=true&mpType=page */ 1045);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76d7c5f2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1045:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swiper/index.vue?vue&type=template&id=76d7c5f2&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uSwiper: __webpack_require__(/*! @/uview-ui/components/u-swiper/u-swiper.vue */ 134).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", { ref: "uToast", attrs: { _i: 4 } }),
              _c("u-swiper", {
                attrs: {
                  height: 250,
                  list: _vm.list,
                  title: _vm.title,
                  effect3d: _vm.effect3d,
                  "indicator-pos": _vm.indicatorPos,
                  mode: _vm.mode,
                  interval: 3000,
                  _i: 5
                },
                on: { change: _vm.change, click: _vm.click }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "u-config-wrap"), attrs: { _i: 6 } },
        [
          _c("view", {
            staticClass: _vm._$s(7, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 7 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "u-config-item"),
              attrs: { _i: 8 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(9, "sc", "u-item-title"),
                attrs: { _i: 9 }
              }),
              _c("u-subsection", {
                attrs: { list: ["round", "rect", "number", "none"], _i: 10 },
                on: { change: _vm.modeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(11, "sc", "u-config-item"),
              attrs: { _i: 11 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(12, "sc", "u-item-title"),
                attrs: { _i: 12 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["显示", "隐藏"], _i: 13 },
                on: { change: _vm.titleChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "u-config-item"),
              attrs: { _i: 14 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(15, "sc", "u-item-title"),
                attrs: { _i: 15 }
              }),
              _c("u-subsection", {
                attrs: {
                  current: "3",
                  list: ["上左", "上右", "下左", "下中", "下右"],
                  _i: 16
                },
                on: { change: _vm.indicatorPosChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(17, "sc", "u-config-item"),
              attrs: { _i: 17 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(18, "sc", "u-item-title"),
                attrs: { _i: 18 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["开启", "关闭"], _i: 19 },
                on: { change: _vm.effect3dChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1046:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swiper/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 1047);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1047:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swiper/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      list: [{
        image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
        title: '昨夜星辰昨夜风，画楼西畔桂堂东' },

      {
        image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
        title: '身无彩凤双飞翼，心有灵犀一点通' },

      {
        image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳' }],


      title: false,
      mode: 'round',
      indicatorPos: 'bottomCenter',
      effect3d: false };


  },
  methods: {
    titleChange: function titleChange(index) {
      this.title = index == 0 ? true : false;
    },
    modeChange: function modeChange(index) {
      this.mode = index == 0 ? 'round' : index == 1 ? 'rect' : index == 2 ? 'number' : 'none';
    },
    indicatorPosChange: function indicatorPosChange(index) {
      this.indicatorPos = index == 0 ? 'topLeft' : index == 1 ? 'topRight' : index == 2 ? 'bottomLeft' : index == 3 ? 'bottomCenter' : 'bottomRight';
    },
    effect3dChange: function effect3dChange(index) {
      this.effect3d = index == 0 ? true : false;
    },
    click: function click(index) {
      this.$refs.uToast.show({
        title: "\u70B9\u51FB\u4E86\u7B2C".concat(index + 1, "\u5F20\u56FE\u7247"),
        type: 'success' });

    },
    change: function change(index) {
      // console.log(index);
    } } };exports.default = _default;

/***/ }),

/***/ 1048:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swipeAction/index.vue?mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2d69cc52&scoped=true&mpType=page */ 1049);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 1056);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d69cc52",
  null,
  false,
  _index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/swipeAction/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1049:
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swipeAction/index.vue?vue&type=template&id=2d69cc52&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2d69cc52&scoped=true&mpType=page */ 1050);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d69cc52_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1050:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swipeAction/index.vue?vue&type=template&id=2d69cc52&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uSwipeAction: __webpack_require__(/*! @/uview-ui/components/u-swipe-action/u-swipe-action.vue */ 1051)
      .default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", { ref: "uToast", attrs: { _i: 4 } }),
              _vm._l(_vm._$s(5, "f", { forItems: _vm.list }), function(
                item,
                index,
                $20,
                $30
              ) {
                return _c(
                  "u-swipe-action",
                  {
                    key: _vm._$s(5, "f", { forIndex: $20, key: item.id }),
                    attrs: {
                      "bg-color": "rgb(250, 250, 250)",
                      disabled: _vm.disabled,
                      index: index,
                      show: item.show,
                      "btn-width": _vm.btnWidth,
                      options: _vm.options,
                      _i: "5-" + $30
                    },
                    on: {
                      open: _vm.open,
                      click: _vm.click,
                      close: _vm.close,
                      "content-click": _vm.contentClick
                    }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          "6-" + $30,
                          "sc",
                          "item u-border-bottom"
                        ),
                        attrs: { _i: "6-" + $30 }
                      },
                      [
                        _c("image", {
                          attrs: {
                            src: _vm._$s("7-" + $30, "a-src", item.images),
                            _i: "7-" + $30
                          }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              "8-" + $30,
                              "sc",
                              "title-wrap"
                            ),
                            attrs: { _i: "8-" + $30 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(
                                  "9-" + $30,
                                  "sc",
                                  "title u-line-2"
                                ),
                                attrs: { _i: "9-" + $30 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "9-" + $30,
                                    "t0-0",
                                    _vm._s(item.title)
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              })
            ],
            2
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(10, "sc", "u-config-wrap"), attrs: { _i: 10 } },
        [
          _c("view", {
            staticClass: _vm._$s(11, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 11 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "u-config-item"),
              attrs: { _i: 12 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(13, "sc", "u-item-title"),
                attrs: { _i: 13 }
              }),
              _c("u-subsection", {
                attrs: { current: 1, list: ["打开", "关闭"], _i: 14 },
                on: { change: _vm.showChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(15, "sc", "u-config-item"),
              attrs: { _i: 15 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(16, "sc", "u-item-title"),
                attrs: { _i: 16 }
              }),
              _c("u-subsection", {
                attrs: { current: 1, list: ["是", "否"], _i: 17 },
                on: { change: _vm.disabledChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1056:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swipeAction/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 1057);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1057:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/swipeAction/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      list1: [
      {
        id: 1,
        title: '长安回望绣成堆，山顶千门次第开，一骑红尘妃子笑，无人知是荔枝来',
        images: 'https://cdn.uviewui.com/uview/common/logo.png',
        show: false },

      {
        id: 2,
        title: '新丰绿树起黄埃，数骑渔阳探使回，霓裳一曲千峰上，舞破中原始下来',
        images: 'https://cdn.uviewui.com/uview/common/logo.png',
        show: false },

      {
        id: 3,
        title: '登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇',
        images: 'https://cdn.uviewui.com/uview/common/logo.png',
        show: false }],


      list: [],
      disabled: false,
      btnWidth: 180,
      show: false,
      options: [
      {
        text: '收藏',
        style: {
          backgroundColor: '#007aff' } },


      {
        text: '删除',
        style: {
          backgroundColor: '#dd524d' } }] };




  },
  onLoad: function onLoad() {var _this = this;
    setTimeout(function () {
      _this.list = _this.list1;
    }, 0);
  },
  methods: {
    disabledChange: function disabledChange(index) {
      this.disabled = index == 0 ? true : false;
    },
    showChange: function showChange(index) {
      if (index == 0) {
        this.list.map(function (val, ids) {
          if (ids != 0) val.show = false;else
          val.show = true;
        });
      } else {
        this.list[0].show = false;
      }
    },
    click: function click(index, index1) {
      if (index1 == 1) {
        this.list.splice(index, 1);
        this.$u.toast("\u5220\u9664\u4E86\u7B2C".concat(index, "\u4E2Acell"));
      } else {
        this.list[index].show = false;
        this.$u.toast("\u6536\u85CF\u6210\u529F");
      }
    },
    open: function open(index) {var _this2 = this;
      this.list[index].show = true;
      this.list.map(function (val, idx) {
        if (index != idx) _this2.list[idx].show = false;
      });
    },
    close: function close(index) {
      this.list[index].show = false;
    },
    contentClick: function contentClick(index) {
      // console.log(index);
    } } };exports.default = _default;

/***/ }),

/***/ 863:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/dropdown/index.vue?mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0421f6e0&scoped=true&mpType=page */ 864);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 876);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0421f6e0",
  null,
  false,
  _index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/dropdown/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 864:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/dropdown/index.vue?vue&type=template&id=0421f6e0&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0421f6e0&scoped=true&mpType=page */ 865);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0421f6e0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 865:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/dropdown/index.vue?vue&type=template&id=0421f6e0&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uDropdown: __webpack_require__(/*! @/uview-ui/components/u-dropdown/u-dropdown.vue */ 866)
      .default,
    uDropdownItem: __webpack_require__(/*! @/uview-ui/components/u-dropdown-item/u-dropdown-item.vue */ 871)
      .default,
    uButton: __webpack_require__(/*! @/uview-ui/components/u-button/u-button.vue */ 86).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      { staticClass: _vm._$s(1, "sc", "u-m-p-50"), attrs: { _i: 1 } },
      [
        _c(
          "view",
          {
            staticClass: _vm._$s(2, "sc", "u-demo-area u-flex u-row-center"),
            attrs: { _i: 2 }
          },
          [
            _c(
              "u-dropdown",
              {
                ref: "uDropdown",
                attrs: {
                  "close-on-click-mask": _vm.mask,
                  activeColor: _vm.activeColor,
                  borderBottom: _vm.borderBottom,
                  _i: 3
                }
              },
              [
                _c("u-dropdown-item", {
                  attrs: { title: "距离", options: _vm.options1, _i: 4 },
                  on: { change: _vm.change },
                  model: {
                    value: _vm._$s(4, "v-model", _vm.value1),
                    callback: function($$v) {
                      _vm.value1 = $$v
                    },
                    expression: "value1"
                  }
                }),
                _c("u-dropdown-item", {
                  attrs: { title: "温度", options: _vm.options2, _i: 5 },
                  on: { change: _vm.change },
                  model: {
                    value: _vm._$s(5, "v-model", _vm.value2),
                    callback: function($$v) {
                      _vm.value2 = $$v
                    },
                    expression: "value2"
                  }
                }),
                _c("u-dropdown-item", { attrs: { title: "属性", _i: 6 } }, [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(7, "sc", "slot-content"),
                      attrs: { _i: 7 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(8, "sc", "item-box"),
                          attrs: { _i: 8 }
                        },
                        _vm._l(
                          _vm._$s(9, "f", { forItems: _vm.list }),
                          function(item, index, $20, $30) {
                            return _c(
                              "view",
                              {
                                key: _vm._$s(9, "f", {
                                  forIndex: $20,
                                  key: index
                                }),
                                staticClass: _vm._$s("9-" + $30, "sc", "item"),
                                class: _vm._$s("9-" + $30, "c", [
                                  item.active ? "active" : ""
                                ]),
                                attrs: { _i: "9-" + $30 },
                                on: {
                                  click: function($event) {
                                    return _vm.tagClick(index)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "9-" + $30,
                                    "t0-0",
                                    _vm._s(item.label)
                                  )
                                )
                              ]
                            )
                          }
                        ),
                        0
                      ),
                      _c(
                        "u-button",
                        {
                          attrs: { type: "primary", _i: 10 },
                          on: { click: _vm.closeDropdown }
                        },
                        [_vm._v("")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ]
    ),
    _c(
      "view",
      { staticClass: _vm._$s(11, "sc", "u-config-wrap"), attrs: { _i: 11 } },
      [
        _c("view", {
          staticClass: _vm._$s(12, "sc", "u-config-title u-border-bottom"),
          attrs: { _i: 12 }
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(13, "sc", "u-config-item"),
            attrs: { _i: 13 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(14, "sc", "u-item-title"),
              attrs: { _i: 14 }
            }),
            _c("u-subsection", {
              attrs: { current: "1", list: ["有", "无"], _i: 15 },
              on: { change: _vm.borderChange }
            })
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(16, "sc", "u-config-item"),
            attrs: { _i: 16 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(17, "sc", "u-item-title"),
              attrs: { _i: 17 }
            }),
            _c("u-subsection", {
              attrs: { list: ["#2979ff", "#ff9900", "#19be6b"], _i: 18 },
              on: { change: _vm.activeColorChange }
            })
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(19, "sc", "u-config-item"),
            attrs: { _i: 19 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(20, "sc", "u-item-title"),
              attrs: { _i: 20 }
            }),
            _c("u-subsection", {
              attrs: { list: ["是", "否"], _i: 21 },
              on: { change: _vm.maskChange }
            })
          ],
          1
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 876:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/dropdown/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 877);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 877:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/dropdown/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      value1: '',
      value2: '2',
      mask: true,
      options1: [{
        label: '默认排序',
        value: 1 },

      {
        label: '距离优先',
        value: 2 },

      {
        label: '价格优先',
        value: 3 }],


      options2: [{
        label: '去冰',
        value: 1 },

      {
        label: '加冰',
        value: 2 },

      {
        label: '正常温',
        value: 3 },

      {
        label: '加热',
        value: 4 },

      {
        label: '极寒风暴',
        value: 5 }],


      list: [{
        label: '琪花瑶草',
        active: true },

      {
        label: '清词丽句',
        active: false },

      {
        label: '宛转蛾眉',
        active: false },

      {
        label: '煦色韶光',
        active: false },

      {
        label: '鱼沉雁落',
        active: false },

      {
        label: '章台杨柳',
        active: false },

      {
        label: '霞光万道',
        active: false }],


      borderBottom: false,
      activeColor: '#2979ff' };

  },
  methods: {
    borderChange: function borderChange(index) {
      this.borderBottom = !index;
    },
    activeColorChange: function activeColorChange(index) {
      this.activeColor = ['#2979ff', '#ff9900', '#19be6b'][index];
    },
    change: function change(index) {
      this.$u.toast("\u70B9\u51FB\u4E86\u7B2C".concat(index, "\u9879"));
    },
    closeDropdown: function closeDropdown() {
      this.$refs.uDropdown.close();
    },
    tagClick: function tagClick(index) {
      this.list[index].active = !this.list[index].active;
    },
    maskChange: function maskChange(index) {
      this.mask = !index;
    } } };exports.default = _default;

/***/ }),

/***/ 878:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/tabbar/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=de5c0726&scoped=true&mpType=page */ 879);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 886);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "de5c0726",
  null,
  false,
  _index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/tabbar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 879:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/tabbar/index.vue?vue&type=template&id=de5c0726&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=de5c0726&scoped=true&mpType=page */ 880);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_de5c0726_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 880:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/tabbar/index.vue?vue&type=template&id=de5c0726&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default,
    uTabbar: __webpack_require__(/*! @/uview-ui/components/u-tabbar/u-tabbar.vue */ 881).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "u-config-wrap"),
              attrs: { _i: 2 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(3, "sc", "u-config-title u-border-bottom"),
                attrs: { _i: 3 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(4, "sc", "u-config-item"),
                  attrs: { _i: 4 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(5, "sc", "u-item-title"),
                    attrs: { _i: 5 }
                  }),
                  _c("u-subsection", {
                    attrs: { list: ["显示", "隐藏"], _i: 6 },
                    on: { change: _vm.showChange }
                  })
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(7, "sc", "u-config-item"),
                  attrs: { _i: 7 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(8, "sc", "u-item-title"),
                    attrs: { _i: 8 }
                  }),
                  _c("u-subsection", {
                    attrs: { list: ["显示", "隐藏"], _i: 9 },
                    on: { change: _vm.minButtonChange }
                  })
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "u-config-item"),
                  attrs: { _i: 10 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(11, "sc", "u-item-title"),
                    attrs: { _i: 11 }
                  }),
                  _c("u-subsection", {
                    attrs: { list: ["#ffffff", "#1f1f1d"], _i: 12 },
                    on: { change: _vm.bgColorChange }
                  })
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(13, "sc", "u-config-item"),
                  attrs: { _i: 13 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(14, "sc", "u-item-title"),
                    attrs: { _i: 14 }
                  }),
                  _c("u-subsection", {
                    attrs: { list: ["显示", "隐藏"], _i: 15 },
                    on: { change: _vm.borderTopChange }
                  })
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(16, "sc", "u-config-item"),
                  attrs: { _i: 16 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(17, "sc", "u-item-title"),
                    attrs: { _i: 17 }
                  }),
                  _c("u-subsection", {
                    attrs: { list: ["显示", "隐藏"], _i: 18 },
                    on: { change: _vm.badgeChange }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _c("u-tabbar", {
        attrs: {
          show: _vm.show,
          "bg-color": _vm.bgColor,
          "border-top": _vm.borderTop,
          list: _vm.list,
          "mid-button": _vm.midButton,
          "inactive-color": _vm.inactiveColor,
          activeColor: _vm.activeColor,
          _i: 19
        },
        model: {
          value: _vm._$s(19, "v-model", _vm.current),
          callback: function($$v) {
            _vm.current = $$v
          },
          expression: "current"
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 886:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/tabbar/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 887);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 887:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/tabbar/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      current: 0,
      show: true,
      bgColor: '#ffffff',
      borderTop: true,
      list: [{
        iconPath: "home",
        selectedIconPath: "home-fill",
        text: '首页',
        count: 2,
        isDot: true,
        customIcon: false },

      {
        iconPath: "photo",
        selectedIconPath: "photo-fill",
        text: '放映厅',
        customIcon: false },

      {
        iconPath: "/static/uview/example/min_button.png",
        selectedIconPath: "/static/uview/example/min_button_select.png",
        text: '发布',
        midButton: true,
        customIcon: false },

      {
        iconPath: "play-right",
        selectedIconPath: "play-right-fill",
        text: '直播',
        customIcon: false },

      {
        iconPath: "account",
        selectedIconPath: "account-fill",
        text: '我的',
        count: 23,
        isDot: false,
        customIcon: false }],


      midButton: true,
      inactiveColor: '#909399',
      activeColor: '#5098FF' };

  },
  methods: {
    beforeSwitch: function beforeSwitch(index) {
      return true;
    },
    showChange: function showChange(index) {
      this.show = !index;
    },
    bgColorChange: function bgColorChange(index) {
      if (index == 0) {
        this.activeColor = '#5098FF';
        this.inactiveColor = '#909399';
      }
      if (index == 1) {
        this.activeColor = '#D0D0D0';
        this.inactiveColor = '#5A5A5A';
      }
      this.bgColor = ['#ffffff', '#1f1f1d'][index];
    },
    borderTopChange: function borderTopChange(index) {
      this.borderTop = !index;
    },
    badgeChange: function badgeChange(index) {
      if (index == 1) {
        this.list[0].count = 0;
        this.list[4].count = 0;
      } else {
        this.list[0].count = 2;
        this.list[4].count = 23;
      }
    },
    minButtonChange: function minButtonChange(index) {
      this.midButton = !index;
    } } };exports.default = _default;

/***/ }),

/***/ 888:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/line/index.vue?mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=164f0efa&scoped=true&mpType=page */ 889);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 891);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "164f0efa",
  null,
  false,
  _index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/line/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 889:
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/line/index.vue?vue&type=template&id=164f0efa&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=164f0efa&scoped=true&mpType=page */ 890);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_164f0efa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 890:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/line/index.vue?vue&type=template&id=164f0efa&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uLine: __webpack_require__(/*! @/uview-ui/components/u-line/u-line.vue */ 157).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "u-demo-area u-flex u-row-center"),
              attrs: { _i: 3 }
            },
            [
              _c("u-line", {
                staticClass: _vm._$s(4, "sc", "u-line"),
                attrs: {
                  "border-style": _vm.borderStyle,
                  color: "red",
                  color: _vm.color,
                  length: _vm.length,
                  direction: _vm.direction,
                  "hair-line": _vm.hairLine,
                  _i: 4
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "u-config-wrap"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 6 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "u-config-item"),
              attrs: { _i: 7 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "u-item-title"),
                attrs: { _i: 8 }
              }),
              _c("u-subsection", {
                attrs: {
                  list: ["primary", "success", "warning", "error", "info"],
                  _i: 9
                },
                on: { change: _vm.colorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: { list: ["实线", "方形虚线", "圆点虚线"], _i: 12 },
                on: { change: _vm.borderStyleChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: { list: ["是", "否"], _i: 15 },
                on: { change: _vm.hairLineChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: { list: ["水平", "垂直"], _i: 18 },
                on: { change: _vm.directionChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 891:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/line/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 892);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 892:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/line/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      direction: 'row',
      hairLine: true,
      length: '100%',
      color: this.$u.color['primary'],
      borderStyle: 'solid' };

  },
  methods: {
    colorChange: function colorChange(index) {
      this.color = this.$u.color[['primary', 'success', 'warning', 'error', 'info'][index]];
    },
    hairLineChange: function hairLineChange(index) {
      this.hairLine = !index;
    },
    directionChange: function directionChange(index) {
      this.direction = index == 0 ? 'row' : 'col';
      if (index == 0) this.length = '100%';else
      this.length = '50rpx';
    },
    borderStyleChange: function borderStyleChange(index) {
      this.borderStyle = ['solid', 'dashed', 'dotted'][index];
    } } };exports.default = _default;

/***/ }),

/***/ 893:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/image/index.vue?mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2168b03c&scoped=true&mpType=page */ 894);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 901);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2168b03c",
  null,
  false,
  _index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/image/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 894:
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/image/index.vue?vue&type=template&id=2168b03c&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2168b03c&scoped=true&mpType=page */ 895);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2168b03c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 895:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/image/index.vue?vue&type=template&id=2168b03c&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uImage: __webpack_require__(/*! @/uview-ui/components/u-image/u-image.vue */ 896).default,
    uLoading: __webpack_require__(/*! @/uview-ui/components/u-loading/u-loading.vue */ 104).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "u-demo-area u-flex u-row-center"),
              attrs: { _i: 3 }
            },
            [
              _c(
                "u-image",
                {
                  ref: "uImage",
                  attrs: {
                    shape: _vm.shape,
                    width: _vm.width,
                    height: _vm.height,
                    src: _vm.src,
                    mode: "aspectFill",
                    _i: 4
                  }
                },
                [
                  _vm._$s(5, "i", _vm.loadingSlot)
                    ? _c("u-loading", {
                        attrs: {
                          slot: "loading",
                          size: "44",
                          mode: "flower",
                          _i: 5
                        },
                        slot: "loading"
                      })
                    : _vm._e(),
                  _vm._$s(6, "i", _vm.errorSlot)
                    ? _c("view", { slot: "error" })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "u-config-wrap"), attrs: { _i: 7 } },
        [
          _c("view", {
            staticClass: _vm._$s(8, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 8 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(9, "sc", "u-config-item"),
              attrs: { _i: 9 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(10, "sc", "u-item-title"),
                attrs: { _i: 10 }
              }),
              _c("u-subsection", {
                attrs: {
                  current: _vm.statusCurrent,
                  list: ["加载成功", "加载中", "加载失败"],
                  _i: 11
                },
                on: { change: _vm.statusChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "u-config-item"),
              attrs: { _i: 12 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(13, "sc", "u-item-title"),
                attrs: { _i: 13 }
              }),
              _c("u-subsection", {
                attrs: { list: ["默认", "自定义"], _i: 14 },
                on: { change: _vm.loadingChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(15, "sc", "u-config-item"),
              attrs: { _i: 15 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(16, "sc", "u-item-title"),
                attrs: { _i: 16 }
              }),
              _c("u-subsection", {
                attrs: { list: ["默认", "自定义"], _i: 17 },
                on: { change: _vm.errorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(18, "sc", "u-config-item"),
              attrs: { _i: 18 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(19, "sc", "u-item-title"),
                attrs: { _i: 19 }
              }),
              _c("u-subsection", {
                attrs: { list: ["方形", "圆形"], _i: 20 },
                on: { change: _vm.shapeChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 901:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/image/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 902);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 902:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/image/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
      width: '200',
      height: '200',
      loadingSlot: false,
      statusCurrent: 0,
      errorSlot: false,
      shape: 'square' };

  },
  computed: {
    // statusCurrent() {
    // }
  },
  methods: {
    statusChange: function statusChange(index) {
      // 此处通过ref操作组件内部状态，仅是为了演示使用，实际中无需这些操作，由内部的图片加载事件自动完成
      if (index == 0) {
        this.src = 'http://img5.imgtn.bdimg.com/it/u=2438062088,2808868405&fm=26&gp=0.jpg';
        this.$refs.uImage.loading = false;
        this.$refs.uImage.isError = false;
      } else if (index == 1) {
        this.$refs.uImage.loading = true;
      } else {
        this.$refs.uImage.loading = false;
        this.$refs.uImage.isError = true;
      }
    },
    loadingChange: function loadingChange(index) {
      this.statusCurrent = 1;
      this.statusChange(1);
      if (index == 0) {
        this.loadingSlot = false;
      } else {
        this.loadingSlot = true;
      }
    },
    errorChange: function errorChange(index) {
      this.statusCurrent = 2;
      this.statusChange(2);
      if (index == 0) {
        this.errorSlot = false;
      } else {
        this.errorSlot = true;
      }
    },
    shapeChange: function shapeChange(index) {
      this.shape = index == 0 ? 'square' : 'circle';
    } } };exports.default = _default;

/***/ }),

/***/ 903:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/card/index.vue?mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6886c69f&scoped=true&mpType=page */ 904);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 911);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6886c69f",
  null,
  false,
  _index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/card/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 904:
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/card/index.vue?vue&type=template&id=6886c69f&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6886c69f&scoped=true&mpType=page */ 905);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6886c69f_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 905:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/card/index.vue?vue&type=template&id=6886c69f&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uCard: __webpack_require__(/*! @/uview-ui/components/u-card/u-card.vue */ 906).default,
    uIcon: __webpack_require__(/*! @/uview-ui/components/u-icon/u-icon.vue */ 8).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      { staticClass: _vm._$s(1, "sc", "u-card-wrap"), attrs: { _i: 1 } },
      [
        _c(
          "u-card",
          {
            attrs: {
              title: _vm.title,
              "sub-title": _vm.subTitle,
              thumb: _vm.thumb,
              padding: _vm.padding,
              border: _vm.border,
              _i: 2
            },
            on: { click: _vm.click, "head-click": _vm.headClick }
          },
          [
            _c("view", { slot: "body" }, [
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    4,
                    "sc",
                    "u-body-item u-flex u-border-bottom u-col-between u-p-t-0"
                  ),
                  attrs: { _i: 4 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(5, "sc", "u-body-item-title u-line-2"),
                    attrs: { _i: 5 }
                  }),
                  _c("image", { attrs: { _i: 6 } })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    7,
                    "sc",
                    "u-body-item u-flex u-row-between u-p-b-0"
                  ),
                  attrs: { _i: 7 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(8, "sc", "u-body-item-title u-line-2"),
                    attrs: { _i: 8 }
                  }),
                  _c("image", { attrs: { _i: 9 } })
                ]
              )
            ]),
            _c(
              "view",
              { slot: "foot" },
              [
                _vm._$s(11, "i", _vm.bottomSlot)
                  ? _c("u-icon", {
                      attrs: {
                        name: "chat-fill",
                        size: "34",
                        label: "30评论",
                        _i: 11
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(12, "sc", "u-config-wrap u-demo"),
        attrs: { _i: 12 }
      },
      [
        _c("view", {
          staticClass: _vm._$s(13, "sc", "u-config-title u-border-bottom"),
          attrs: { _i: 13 }
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(14, "sc", "u-config-item"),
            attrs: { _i: 14 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(15, "sc", "u-item-title"),
              attrs: { _i: 15 }
            }),
            _c("u-subsection", {
              attrs: { list: ["显示", "隐藏"], _i: 16 },
              on: { change: _vm.thumbChange }
            })
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(17, "sc", "u-config-item"),
            attrs: { _i: 17 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(18, "sc", "u-item-title"),
              attrs: { _i: 18 }
            }),
            _c("u-subsection", {
              attrs: { current: "1", list: ["20", "30", "40"], _i: 19 },
              on: { change: _vm.paddingChange }
            })
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(20, "sc", "u-config-item"),
            attrs: { _i: 20 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(21, "sc", "u-item-title"),
              attrs: { _i: 21 }
            }),
            _c("u-subsection", {
              attrs: { list: ["显示", "隐藏"], _i: 22 },
              on: { change: _vm.bottomChange }
            })
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(23, "sc", "u-config-item"),
            attrs: { _i: 23 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(24, "sc", "u-item-title"),
              attrs: { _i: 24 }
            }),
            _c("u-subsection", {
              attrs: { list: ["显示", "隐藏"], _i: 25 },
              on: { change: _vm.borderChange }
            })
          ],
          1
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 911:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/card/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 912);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 912:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/card/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      title: '素胚勾勒出青花，笔锋浓转淡',
      subTitle: '2020-05-15',
      thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
      padding: 20,
      bottomSlot: true,
      border: true };

  },
  methods: {
    thumbChange: function thumbChange(index) {
      this.thumb = index == 0 ? 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg' : '';
    },
    paddingChange: function paddingChange(index) {
      this.padding = [20, 30, 40][index];
    },
    bottomChange: function bottomChange(index) {
      this.bottomSlot = !index;
    },
    borderChange: function borderChange(index) {
      this.border = !index;
    },
    click: function click(index) {
      __f__("log", index, " at pages/componentsB/card/index.vue:74");
    },
    headClick: function headClick(index) {
      __f__("log", index, " at pages/componentsB/card/index.vue:77");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 40)["default"]))

/***/ }),

/***/ 913:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/divider/index.vue?mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=33534820&scoped=true&mpType=page */ 914);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 921);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33534820",
  null,
  false,
  _index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/divider/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 914:
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/divider/index.vue?vue&type=template&id=33534820&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=33534820&scoped=true&mpType=page */ 915);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_33534820_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 915:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/divider/index.vue?vue&type=template&id=33534820&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uDivider: __webpack_require__(/*! @/uview-ui/components/u-divider/u-divider.vue */ 916).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c(
                "u-divider",
                {
                  attrs: {
                    type: _vm.type,
                    borderColor: _vm.borderColor,
                    "bg-color": _vm.bgColor,
                    "half-width": _vm.halfWidth,
                    color: _vm.color,
                    "font-size": _vm.fontSize,
                    _i: 4
                  },
                  on: { click: _vm.click }
                },
                [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.text)))]
              )
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "u-config-wrap"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 6 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "u-config-item"),
              attrs: { _i: 7 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "u-item-title"),
                attrs: { _i: 8 }
              }),
              _c("u-subsection", {
                attrs: { list: ["没有更多了", "到底了"], _i: 9 },
                on: { change: _vm.textChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["50", "150", "250"], _i: 12 },
                on: { change: _vm.halfWidthChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: {
                  list: ["#dcdfe6", "primary", "error", "warning", "success"],
                  _i: 15
                },
                on: { change: _vm.borderColorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: { list: ["默认", "自定义"], _i: 18 },
                on: { change: _vm.contentChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 921:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/divider/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 922);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 922:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/divider/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      text: '没有更多了',
      bgColor: '#fafafa',
      halfWidth: 150,
      borderColor: '#dcdfe6',
      type: 'primary',
      color: '#909399',
      fontSize: '26' };

  },
  methods: {
    textChange: function textChange(index) {
      this.text = index == 0 ? '没有更多了' : '到底了';
    },
    halfWidthChange: function halfWidthChange(index) {
      this.halfWidth = index == 0 ? 50 : index == 1 ? 150 : 250;
    },
    borderColorChange: function borderColorChange(index) {
      if (index == 0) {
        this.borderColor = '#dcdfe6';
      } else {
        // 因为border-color参数优先级高于type，要让type起作用，就需要设置border-color为空
        this.borderColor = '';
        this.type = index == 1 ? 'primary' : index == 2 ? 'error' : index == 3 ? 'warning' : 'success';
      }
    },
    contentChange: function contentChange(index) {
      if (index == 0) {
        this.color = '#909399';
        this.fontSize = 26;
      } else {
        this.color = this.$u.color['primary'];
        this.fontSize = 30;
      }
    },
    click: function click() {
      __f__("log", 'click', " at pages/componentsB/divider/index.vue:73");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 40)["default"]))

/***/ }),

/***/ 923:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/picker/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2fa8a89d&scoped=true&mpType=page */ 924);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 926);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fa8a89d",
  null,
  false,
  _index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/picker/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 924:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/picker/index.vue?vue&type=template&id=2fa8a89d&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2fa8a89d&scoped=true&mpType=page */ 925);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2fa8a89d_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 925:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/picker/index.vue?vue&type=template&id=2fa8a89d&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uPicker: __webpack_require__(/*! @/uview-ui/components/u-picker/u-picker.vue */ 492).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(4, "sc", "u-demo-result-line"),
                  attrs: { _i: 4 }
                },
                [
                  _vm._v(
                    _vm._$s(
                      4,
                      "t0-0",
                      _vm._s(_vm.input ? _vm.input : "Picker值")
                    )
                  )
                ]
              ),
              _c("u-picker", {
                attrs: {
                  mode: _vm.mode,
                  defaultTime: _vm.defaultTime,
                  defaultRegion: _vm.defaultRegion,
                  params: _vm.params,
                  "end-year": "2030",
                  defaultSelector: _vm.defaultSelector,
                  range: _vm.range,
                  "range-key": _vm.rangKey,
                  _i: 5
                },
                on: { confirm: _vm.confirm, columnchange: _vm.columnchange },
                model: {
                  value: _vm._$s(5, "v-model", _vm.show),
                  callback: function($$v) {
                    _vm.show = $$v
                  },
                  expression: "show"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "u-config-wrap"), attrs: { _i: 6 } },
        [
          _c("view", {
            staticClass: _vm._$s(7, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 7 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "u-config-item"),
              attrs: { _i: 8 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(9, "sc", "u-item-title"),
                attrs: { _i: 9 }
              }),
              _c("u-subsection", {
                attrs: { current: _vm.status, list: ["显示", "隐藏"], _i: 10 },
                on: { change: _vm.statusChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(11, "sc", "u-config-item"),
              attrs: { _i: 11 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(12, "sc", "u-item-title"),
                attrs: { _i: 12 }
              }),
              _c("u-subsection", {
                attrs: { list: ["单列", "多列", "时间", "地区"], _i: 13 },
                on: { change: _vm.modeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "u-config-item"),
              attrs: { _i: 14 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(15, "sc", "u-item-title"),
                attrs: { _i: 15 }
              }),
              _c("u-subsection", {
                attrs: {
                  list: ["2019-12-11 20:15:35", "2020-02-05 13:09:42"],
                  _i: 16
                },
                on: { change: _vm.defaultTimeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(17, "sc", "u-config-item"),
              attrs: { _i: 17 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(18, "sc", "u-item-title"),
                attrs: { _i: 18 }
              }),
              _c("u-subsection", {
                attrs: { list: ["显示", "隐藏"], _i: 19 },
                on: { change: _vm.minSecChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(20, "sc", "u-config-item"),
              attrs: { _i: 20 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(21, "sc", "u-item-title"),
                attrs: { _i: 21 }
              }),
              _c("u-subsection", {
                attrs: { list: ["广东-深圳-宝安", "海南-三亚-海棠"], _i: 22 },
                on: { change: _vm.defaultRegionChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 926:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/picker/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 927);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 927:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/picker/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      show: false,
      input: '',
      rangKey: 'name',
      mode: 'selector',
      range: ['一', '片', '冰', '心', '在', '玉', '壶'],
      defaultTime: '2019-12-11 20:15:35',
      defaultSelector: [0],
      defaultRegion: ['广东省', '深圳市', '宝安区'],
      params: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true,
        province: true,
        city: true,
        area: true,
        timestamp: true } };


  },
  computed: {
    status: function status() {
      return this.show == true ? 0 : 1;
    } },

  methods: {
    statusChange: function statusChange(index) {
      this.show = index == 0 ? true : false;
    },
    modeChange: function modeChange(index) {
      this.mode = ['selector', 'multiSelector', 'time', 'region'][index];
      if (this.mode == 'selector') {
        this.range = ['一', '片', '冰', '心', '在', '玉', '壶'];
        this.defaultSelector = [0];
      }
      if (this.mode == 'multiSelector') {
        this.range = [['亚洲', '欧洲'], ['中国', '日本'], ['北京', '上海', '广州']];
        this.defaultSelector = [0, 0, 0];
      }
      this.show = true;
    },
    defaultTimeChange: function defaultTimeChange(index) {
      this.defaultTime = index == 0 ? '2019-12-11 20:15:35' : '2020-02-05 13:09:42';
      this.mode = 'time';
      this.show = true;
    },
    defaultRegionChange: function defaultRegionChange(index) {
      this.defaultRegion = index == 0 ? ['广东省', '深圳市', '宝安区'] : ['海南省', '三亚市', '海棠区'];
      this.mode = 'region';
      this.show = true;
    },
    minSecChange: function minSecChange(index) {
      if (index == 0) {
        this.params.hour = true;
        this.params.minute = true;
        this.params.second = true;
      }
      if (index == 1) {
        this.params.hour = false;
        this.params.minute = false;
        this.params.second = false;
      }
      this.mode = 'time';
      this.show = true;
    },
    confirm: function confirm(e) {
      // console.log(e);
      this.input = '';
      if (this.mode == 'time') {
        if (this.params.year) this.input += e.year;
        if (this.params.month) this.input += '-' + e.month;
        if (this.params.day) this.input += '-' + e.day;
        if (this.params.hour) this.input += ' ' + e.hour;
        if (this.params.minute) this.input += ':' + e.minute;
        if (this.params.second) this.input += ':' + e.second;
      } else if (this.mode == 'region') {
        this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
      } else if (this.mode == 'selector') {
        this.input = this.range[e[0]];
      } else if (this.mode == 'multiSelector') {
        this.input = this.range[0][e[0]] + '-' + this.range[1][e[1]] + '-' + this.range[2][e[2]];
      }
    },
    columnchange: function columnchange(e) {
      var column = e.column,index = e.index;
      this.defaultSelector[column] = index;
      switch (column) {
        case 0:
          switch (index) {
            case 0:
              this.range[1] = ['中国', '日本'];
              this.range[2] = ['北京', '上海', '广州'];
              break;
            case 1:
              this.range[1] = ['英国', '法国'];
              this.range[2] = ['伦敦', '曼彻斯特'];
              break;}

          this.defaultSelector.splice(1, 1, 0);
          this.defaultSelector.splice(2, 1, 0);
          break;
        case 1: //拖动第2列
          switch (this.defaultSelector[0]) {//判断第一列是什么
            case 0:
              switch (this.defaultSelector[1]) {
                case 0:
                  this.range[2] = ['北京', '上海', '广州'];
                  break;
                case 1:
                  this.range[2] = ['东京', '北海道'];
                  break;}

              break;
            case 1:
              switch (this.defaultSelector[1]) {
                case 0:
                  this.range[2] = ['伦敦', '曼彻斯特'];
                  break;
                case 1:
                  this.range[2] = ['巴黎', '马赛'];
                  break;}

              break;}

          this.defaultSelector.splice(2, 1, 0);
          break;}

    } } };exports.default = _default;

/***/ }),

/***/ 928:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/noticeBar/index.vue?mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=fa8602bc&scoped=true&mpType=page */ 929);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 946);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa8602bc",
  null,
  false,
  _index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/noticeBar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 929:
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/noticeBar/index.vue?vue&type=template&id=fa8602bc&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=fa8602bc&scoped=true&mpType=page */ 930);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa8602bc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 930:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/noticeBar/index.vue?vue&type=template&id=fa8602bc&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uNoticeBar: __webpack_require__(/*! @/uview-ui/components/u-notice-bar/u-notice-bar.vue */ 931)
      .default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", {
                ref: "uToast",
                attrs: { type: _vm.type, _i: 4 }
              }),
              _c("u-notice-bar", {
                attrs: {
                  autoplay: _vm.autoplay,
                  playState: _vm.playState,
                  speed: _vm.speed,
                  mode: _vm.mode,
                  show: _vm.show,
                  type: _vm.type,
                  list: _vm.list,
                  moreIcon: _vm.moreIcon,
                  volumeIcon: _vm.volumeIcon,
                  duration: _vm.duration,
                  isCircular: _vm.isCircular,
                  _i: 5
                },
                on: {
                  getMore: _vm.getMore,
                  end: _vm.end,
                  close: _vm.close,
                  click: _vm.click
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "u-config-wrap"), attrs: { _i: 6 } },
        [
          _c("view", {
            staticClass: _vm._$s(7, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 7 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "u-config-item"),
              attrs: { _i: 8 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(9, "sc", "u-item-title"),
                attrs: { _i: 9 }
              }),
              _c("u-subsection", {
                attrs: {
                  current: 3,
                  list: ["primary", "success", "error", "warning", "none"],
                  _i: 10
                },
                on: { change: _vm.typeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(11, "sc", "u-config-item"),
              attrs: { _i: 11 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(12, "sc", "u-item-title"),
                attrs: { _i: 12 }
              }),
              _c("u-subsection", {
                attrs: { current: _vm.current, list: ["水平", "垂直"], _i: 13 },
                on: { change: _vm.modeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "u-config-item"),
              attrs: { _i: 14 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(15, "sc", "u-item-title"),
                attrs: { _i: 15 }
              }),
              _c("u-subsection", {
                attrs: { list: ["是", "否"], _i: 16 },
                on: { change: _vm.isCircularChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(17, "sc", "u-config-item"),
              attrs: { _i: 17 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(18, "sc", "u-item-title"),
                attrs: { _i: 18 }
              }),
              _c("u-subsection", {
                attrs: { list: ["播放", "暂停"], _i: 19 },
                on: { change: _vm.playStateChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(20, "sc", "u-config-item"),
              attrs: { _i: 20 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(21, "sc", "u-item-title"),
                attrs: { _i: 21 }
              }),
              _c("u-subsection", {
                attrs: { current: 1, list: ["慢", "正常", "快"], _i: 22 },
                on: { change: _vm.speedChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(23, "sc", "u-config-item"),
              attrs: { _i: 23 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(24, "sc", "u-item-title"),
                attrs: { _i: 24 }
              }),
              _c("u-subsection", {
                attrs: { list: ["显示", "隐藏"], _i: 25 },
                on: { change: _vm.iconChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 946:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/noticeBar/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 947);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 947:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/noticeBar/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      show: true,
      autoplay: false,
      type: 'warning',
      list: [
      '锦瑟无端五十弦，一弦一柱思华年',
      '庄生晓梦迷蝴蝶，望帝春心托杜鹃',
      '沧海月明珠有泪，蓝田日暖玉生烟'],

      mode: 'horizontal',
      playState: 'play',
      speed: 160,
      duration: 2000,
      moreIcon: true,
      volumeIcon: true,
      isCircular: true,
      current: 0 };

  },
  onLoad: function onLoad() {

  },
  methods: {
    typeChange: function typeChange(index) {
      var type = ['primary', 'success', 'error', 'warning', 'none'];
      this.type = type[index];
    },
    modeChange: function modeChange(index) {
      this.current = index;
      this.mode = index == 0 ? 'horizontal' : 'vertical';
    },
    playStateChange: function playStateChange(index) {
      this.playState = index == 0 ? 'play' : 'paused';
    },
    speedChange: function speedChange(index) {var _this = this;
      if (index == 0) {
        this.$nextTick(function () {
          _this.speed = 50;
          _this.duration = 6000;
        });
      } else if (index == 1) {
        this.$nextTick(function () {
          _this.speed = 160;
          _this.duration = 2000;
        });
      } else {
        this.$nextTick(function () {
          _this.speed = 350;
          _this.duration = 400;
        });
      }
    },
    iconChange: function iconChange(index) {
      if (index == 0) {
        this.moreIcon = true;
        this.volumeIcon = true;
      } else {
        this.moreIcon = false;
        this.volumeIcon = false;
      }
    },
    isCircularChange: function isCircularChange(index) {
      this.isCircular = index == 0 ? true : false;
      this.current = 0;
      this.mode = 'horizontal';
    },
    close: function close() {
      this.toast("\u70B9\u51FB\u4E86\u5173\u95ED\u56FE\u6807");
    },
    click: function click(index) {
      if (this.mode == 'horizontal' && this.isCircular) {
        this.toast('此模式无法获取Index值');
      } else {
        this.toast("\u70B9\u51FB\u4E86\u7B2C".concat(index + 1, "\u6761\u6D88\u606F"));
      }

    },
    getMore: function getMore() {
      this.toast("\u70B9\u51FB\u4E86\u66F4\u591A\u56FE\u6807");
    },
    toast: function toast(title) {
      this.$refs.uToast.show({
        title: title,
        type: 'warning' });

    },
    end: function end() {
      // console.log('end');
    } } };exports.default = _default;

/***/ }),

/***/ 948:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/checkbox/index.vue?mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=716f1d12&scoped=true&mpType=page */ 949);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 951);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "716f1d12",
  null,
  false,
  _index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/checkbox/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 949:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/checkbox/index.vue?vue&type=template&id=716f1d12&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=716f1d12&scoped=true&mpType=page */ 950);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_716f1d12_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 950:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/checkbox/index.vue?vue&type=template&id=716f1d12&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uCheckboxGroup: __webpack_require__(/*! @/uview-ui/components/u-checkbox-group/u-checkbox-group.vue */ 678)
      .default,
    uCheckbox: __webpack_require__(/*! @/uview-ui/components/u-checkbox/u-checkbox.vue */ 149)
      .default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c(
                "view",
                [
                  _c(
                    "u-checkbox-group",
                    {
                      attrs: {
                        size: _vm.size,
                        width: _vm.width,
                        wrap: _vm.wrap,
                        max: _vm.max,
                        activeColor: _vm.activeColor,
                        _i: 5
                      },
                      on: { change: _vm.checkboxGroupChange }
                    },
                    _vm._l(_vm._$s(6, "f", { forItems: _vm.list }), function(
                      item,
                      index,
                      $20,
                      $30
                    ) {
                      return _c(
                        "u-checkbox",
                        {
                          key: _vm._$s(6, "f", { forIndex: $20, key: index }),
                          attrs: {
                            name: item.name,
                            shape: _vm.shape,
                            disabled: item.disabled,
                            _i: "6-" + $30
                          },
                          on: { change: _vm.checkboxChange },
                          model: {
                            value: _vm._$s("6-" + $30, "v-model", item.checked),
                            callback: function($$v) {
                              _vm.$set(item, "checked", $$v)
                            },
                            expression: "item.checked"
                          }
                        },
                        [_vm._v(_vm._$s("6-" + $30, "t0-0", _vm._s(item.name)))]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(7, "sc", "u-demo-result-line"),
                  attrs: { _i: 7 }
                },
                [
                  _vm._v(
                    _vm._$s(
                      7,
                      "t0-0",
                      _vm._s(
                        _vm.result.length
                          ? '选中了"' + _vm.getResult + '"'
                          : "请选择"
                      )
                    )
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "u-config-wrap"), attrs: { _i: 8 } },
        [
          _c("view", {
            staticClass: _vm._$s(9, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 9 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: { list: ["方形", "圆形"], _i: 12 },
                on: { change: _vm.shapeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["30", "40", "50"], _i: 15 },
                on: { change: _vm.sizeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: {
                  list: ["primary", "error", "warning", "success", "info"],
                  _i: 18
                },
                on: { change: _vm.activeColorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "u-config-item"),
              attrs: { _i: 19 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "u-item-title"),
                attrs: { _i: 20 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 21 },
                on: { change: _vm.defaultChooseChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "u-config-item"),
              attrs: { _i: 22 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(23, "sc", "u-item-title"),
                attrs: { _i: 23 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 24 },
                on: { change: _vm.wrapChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(25, "sc", "u-config-item"),
              attrs: { _i: 25 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(26, "sc", "u-item-title"),
                attrs: { _i: 26 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 27 },
                on: { change: _vm.widthChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(28, "sc", "u-config-item"),
              attrs: { _i: 28 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(29, "sc", "u-item-title"),
                attrs: { _i: 29 }
              }),
              _c("u-subsection", {
                attrs: { current: "2", list: ["1", "2", "3"], _i: 30 },
                on: { change: _vm.maxChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(31, "sc", "u-config-item"),
              attrs: { _i: 31 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(32, "sc", "u-item-title"),
                attrs: { _i: 32 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 33 },
                on: { change: _vm.disabledChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 951:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/checkbox/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 952);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 952:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/checkbox/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      list: [
      {
        name: '荔枝',
        checked: false,
        disabled: false },

      {
        name: '香蕉',
        checked: false,
        disabled: false },

      {
        name: '橙子',
        checked: false,
        disabled: false },

      {
        name: '草莓',
        checked: false,
        disabled: false }],


      disabled: false,
      checked: true,
      result: [],
      shape: 'square',
      max: 3,
      activeColor: '#2979ff',
      size: 34,
      wrap: false,
      width: 'auto' };

  },
  computed: {
    getResult: function getResult() {
      return this.result.join(",");
    } },

  methods: {
    shapeChange: function shapeChange(index) {
      this.shape = index == 0 ? 'square' : 'circle';
    },
    sizeChange: function sizeChange(index) {
      this.size = index == 0 ? 30 : index == 1 ? 40 : 50;
    },
    defaultChooseChange: function defaultChooseChange(index) {
      // 特别处理对第一个选的选中的情况，涉及到提示语，选中状态等
      // 实际开发中不会存在这些情况，只是演示用
      if (index == 0) {
        this.list[0].checked = true;
        this.result = [this.list[0].name];
      } else {
        this.list[0].checked = false;
        this.result.splice(this.result.indexOf(this.list[0].name), 1);
      }
    },
    maxChange: function maxChange(index) {
      this.max = index + 1;
    },
    disabledChange: function disabledChange(index) {
      if (index == 0) {
        this.list[0].disabled = true;
      } else {
        this.list[0].disabled = false;
      }
    },
    activeColorChange: function activeColorChange(index) {
      // 如果用户尚未勾选任何checkbox，切换颜色时，默认选中第一个让用户看到效果，因为勾选了才有效果
      if (!this.result.length) this.list[0].checked = true;
      var theme = index == 0 ? 'primary' : index == 1 ? 'error' : index == 2 ? 'warning' : index == 3 ? 'success' : 'info';
      this.activeColor = this.$u.color[theme];
      // console.log("着色:",this.activeColor)
    },
    // 选中某个复选框时，由checkbox时触发
    checkboxChange: function checkboxChange(e) {
      // console.log(e);
    },
    // 选中任一checkbox时，由checkbox-group触发
    checkboxGroupChange: function checkboxGroupChange(e) {
      this.result = e;
    },
    widthChange: function widthChange(index) {
      this.width = index == 0 ? '50%' : '';
    },
    wrapChange: function wrapChange(index) {
      this.wrap = !index;
    } } };exports.default = _default;

/***/ }),

/***/ 953:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/radio/index.vue?mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=47795a82&scoped=true&mpType=page */ 954);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 956);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47795a82",
  null,
  false,
  _index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/radio/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 954:
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/radio/index.vue?vue&type=template&id=47795a82&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=47795a82&scoped=true&mpType=page */ 955);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47795a82_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 955:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/radio/index.vue?vue&type=template&id=47795a82&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uRadioGroup: __webpack_require__(/*! @/uview-ui/components/u-radio-group/u-radio-group.vue */ 683)
      .default,
    uRadio: __webpack_require__(/*! @/uview-ui/components/u-radio/u-radio.vue */ 688).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c(
                "view",
                [
                  _c(
                    "u-radio-group",
                    {
                      attrs: {
                        shape: _vm.shape,
                        size: _vm.size,
                        width: _vm.width,
                        wrap: _vm.wrap,
                        activeColor: _vm.activeColor,
                        _i: 5
                      },
                      on: { change: _vm.radioGroupChange },
                      model: {
                        value: _vm._$s(5, "v-model", _vm.value),
                        callback: function($$v) {
                          _vm.value = $$v
                        },
                        expression: "value"
                      }
                    },
                    _vm._l(_vm._$s(6, "f", { forItems: _vm.list }), function(
                      item,
                      index,
                      $20,
                      $30
                    ) {
                      return _c(
                        "u-radio",
                        {
                          key: _vm._$s(6, "f", { forIndex: $20, key: index }),
                          attrs: {
                            disabled: item.disabled,
                            name: item.name,
                            _i: "6-" + $30
                          },
                          on: { change: _vm.radioChange }
                        },
                        [_vm._v(_vm._$s("6-" + $30, "t0-0", _vm._s(item.name)))]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(7, "sc", "u-demo-result-line"),
                  attrs: { _i: 7 }
                },
                [
                  _vm._v(
                    _vm._$s(
                      7,
                      "t0-0",
                      _vm._s(
                        _vm.value ? '选中了"' + _vm.result + '"' : "请选择"
                      )
                    )
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "u-config-wrap"), attrs: { _i: 8 } },
        [
          _c("view", {
            staticClass: _vm._$s(9, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 9 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["方形", "圆形"], _i: 12 },
                on: { change: _vm.shapeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["30", "40", "50"], _i: 15 },
                on: { change: _vm.sizeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: {
                  list: ["primary", "error", "warning", "success", "info"],
                  _i: 18
                },
                on: { change: _vm.activeColorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "u-config-item"),
              attrs: { _i: 19 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "u-item-title"),
                attrs: { _i: 20 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 21 },
                on: { change: _vm.wrapChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "u-config-item"),
              attrs: { _i: 22 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(23, "sc", "u-item-title"),
                attrs: { _i: 23 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 24 },
                on: { change: _vm.widthChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(25, "sc", "u-config-item"),
              attrs: { _i: 25 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(26, "sc", "u-item-title"),
                attrs: { _i: 26 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 27 },
                on: { change: _vm.defaultChooseChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(28, "sc", "u-config-item"),
              attrs: { _i: 28 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(29, "sc", "u-item-title"),
                attrs: { _i: 29 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 30 },
                on: { change: _vm.disabledChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 956:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/radio/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 957);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 957:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/radio/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      list: [
      {
        name: '荔枝',
        checked: true,
        disabled: false },

      {
        name: '香蕉',
        checked: false,
        disabled: false },

      {
        name: '橙子',
        checked: false,
        disabled: false },

      {
        name: '草莓',
        checked: false,
        disabled: false }],


      disabled: false,
      result: '荔枝',
      shape: 'circle',
      value: '荔枝',
      activeColor: '#2979ff',
      size: 34,
      wrap: false,
      width: 'auto' };

  },
  methods: {
    shapeChange: function shapeChange(index) {
      this.shape = index == 0 ? 'square' : 'circle';
    },
    sizeChange: function sizeChange(index) {
      this.size = index == 0 ? 30 : index == 1 ? 40 : 50;
    },
    defaultChooseChange: function defaultChooseChange(index) {
      // 特别处理对第一个选的选中的情况，涉及到提示语，选中状态等
      // 实际开发中不会存在这些情况，只是演示用
      if (index == 0) {
        this.result = this.value = this.list[0].name;
      } else {
        if (this.value == this.list[0].name) {
          this.result = this.value = '';
        }
      }
    },
    activeColorChange: function activeColorChange(index) {
      // 如果用户尚未勾选任何radio，切换颜色时，默认选中第一个让用户看到效果，因为勾选了才有效果
      if (!this.result) this.result = this.value = this.list[0].name;
      var theme = index == 0 ? 'primary' : index == 1 ? 'error' : index == 2 ? 'warning' : index == 3 ? 'success' : 'info';
      this.activeColor = this.$u.color[theme];
    },
    disabledChange: function disabledChange(index) {
      if (index == 0) {
        this.list[0].disabled = true;
      } else {
        this.list[0].disabled = false;
      }
    },
    // 选中某个单选框时，由radio时触发
    radioChange: function radioChange(e) {
      //console.log(e);
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange: function radioGroupChange(e) {
      this.result = e;
      //console.log(e);
    },
    widthChange: function widthChange(index) {
      this.width = index == 0 ? '50%' : '';
    },
    wrapChange: function wrapChange(index) {
      this.wrap = !index;
    } } };exports.default = _default;

/***/ }),

/***/ 958:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/loading/index.vue?mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b29cebfa&scoped=true&mpType=page */ 959);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 961);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b29cebfa",
  null,
  false,
  _index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/loading/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 959:
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/loading/index.vue?vue&type=template&id=b29cebfa&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b29cebfa&scoped=true&mpType=page */ 960);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b29cebfa_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 960:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/loading/index.vue?vue&type=template&id=b29cebfa&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uLoading: __webpack_require__(/*! @/uview-ui/components/u-loading/u-loading.vue */ 104).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-loading", {
                attrs: {
                  mode: _vm.mode,
                  show: _vm.show,
                  color: _vm.color,
                  size: _vm.size,
                  _i: 4
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "u-config-wrap"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 6 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "u-config-item"),
              attrs: { _i: 7 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "u-item-title"),
                attrs: { _i: 8 }
              }),
              _c("u-subsection", {
                attrs: { list: ["圆圈", "花朵"], _i: 9 },
                on: { change: _vm.modeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: {
                  list: ["default", "primary", "error", "warning", "success"],
                  _i: 12
                },
                on: { change: _vm.colorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["28", "34", "40"], _i: 15 },
                on: { change: _vm.sizeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["否", "是"], _i: 18 },
                on: { change: _vm.showChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 961:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/loading/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 962);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 962:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/loading/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      mode: 'circle',
      color: '#c7c7c7',
      size: '34',
      show: true };

  },
  methods: {
    modeChange: function modeChange(index) {
      this.mode = index == 0 ? 'circle' : 'flower';
    },
    colorChange: function colorChange(index) {
      if (index == 0) {
        this.color = '#c7c7c7';
      } else {
        var color = index == 1 ? 'primary' : index == 2 ? 'error' : index == 3 ? 'warning' : 'success';
        this.color = this.$u.color[color];
      }
    },
    sizeChange: function sizeChange(index) {
      this.size = index == 0 ? '28' : index == 1 ? '34' : '40';
    },
    showChange: function showChange(index) {
      // 两个!!可以把0变成false，1变成true
      this.show = !!index;
    },
    // 选中某个复选框时，由checkbox时触发
    checkboxChange: function checkboxChange(e) {
      //console.log(e);
    },
    // 选中任一checkbox时，由checkbox-group触发
    checkboxGroupChange: function checkboxGroupChange(e) {
      this.result = e;
      // console.log(this.result);
    } } };exports.default = _default;

/***/ }),

/***/ 963:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/switch/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=113b927a&scoped=true&mpType=page */ 964);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 966);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "113b927a",
  null,
  false,
  _index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/switch/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 964:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/switch/index.vue?vue&type=template&id=113b927a&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=113b927a&scoped=true&mpType=page */ 965);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_113b927a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 965:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/switch/index.vue?vue&type=template&id=113b927a&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSwitch: __webpack_require__(/*! @/uview-ui/components/u-switch/u-switch.vue */ 327).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-switch", {
                attrs: {
                  loading: _vm.loading,
                  size: _vm.size,
                  "active-color": _vm.activeColor,
                  disabled: _vm.disabled,
                  activeValue: 100,
                  inactiveValue: 1,
                  _i: 4
                },
                on: { change: _vm.change },
                model: {
                  value: _vm._$s(4, "v-model", _vm.checked),
                  callback: function($$v) {
                    _vm.checked = $$v
                  },
                  expression: "checked"
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "u-config-wrap"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 6 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "u-config-item"),
              attrs: { _i: 7 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "u-item-title"),
                attrs: { _i: 8 }
              }),
              _c("u-subsection", {
                attrs: { list: ["关闭", "打开"], _i: 9 },
                on: { change: _vm.modelChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "u-config-item"),
              attrs: { _i: 10 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "u-item-title"),
                attrs: { _i: 11 }
              }),
              _c("u-subsection", {
                attrs: {
                  list: ["primary", "error", "warning", "success"],
                  _i: 12
                },
                on: { change: _vm.colorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-config-item"),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "u-item-title"),
                attrs: { _i: 14 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["40", "60", "80"], _i: 15 },
                on: { change: _vm.sizeChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: { list: ["否", "是"], _i: 18 },
                on: { change: _vm.loadingChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "u-config-item"),
              attrs: { _i: 19 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "u-item-title"),
                attrs: { _i: 20 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 21 },
                on: { change: _vm.disabledChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "u-config-item"),
              attrs: { _i: 22 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(23, "sc", "u-item-title"),
                attrs: { _i: 23 }
              }),
              _c("u-subsection", {
                attrs: { list: ["关闭", "打开"], _i: 24 },
                on: { change: _vm.asyncChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 966:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/switch/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 967);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 967:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/switch/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      checked: false,
      activeColor: '#2979ff',
      size: 50,
      loading: false,
      disabled: false };

  },
  methods: {
    modelChange: function modelChange(index) {
      // 两个!!可以把0变成false，1变成true
      this.checked = !!index;
    },
    colorChange: function colorChange(index) {
      var color = index == 0 ? 'primary' : index == 1 ? 'error' : index == 2 ? 'warning' : 'success';
      this.activeColor = this.$u.color[color];
    },
    sizeChange: function sizeChange(index) {
      this.size = index == 0 ? '40' : index == 1 ? '60' : '80';
    },
    loadingChange: function loadingChange(index) {
      this.loading = !!index;
    },
    disabledChange: function disabledChange(index) {
      this.disabled = index == 0 ? true : false;
    },
    asyncChange: function asyncChange(index) {var _this = this;
      if (this.checked && index == 1) {
        this.$u.toast('请先关闭选择器');
        return;
      }
      if (!this.checked && index == 0) {
        this.$u.toast('请先打开选择器');
        return;
      }
      var str = index == 0 ? '是否要关闭？' : '是否要打开？';
      this.loading = true;
      var oldStatus = this.checked;
      this.checked = true;
      uni.showModal({
        title: '提示',
        content: str,
        complete: function complete(res) {
          _this.loading = false;
          if (res.confirm) {
            if (oldStatus) _this.checked = false;else
            _this.checked = true;
          } else {
            if (!oldStatus) _this.checked = false;else
            _this.checked = true;
          }
        } });

    },
    change: function change(value) {
      // console.log(value);
    } } };exports.default = _default;

/***/ }),

/***/ 968:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/skeleton/index.vue?mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5660961c&scoped=true&mpType=page */ 969);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 976);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5660961c",
  null,
  false,
  _index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/skeleton/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 969:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/skeleton/index.vue?vue&type=template&id=5660961c&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5660961c&scoped=true&mpType=page */ 970);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5660961c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 970:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/skeleton/index.vue?vue&type=template&id=5660961c&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uSkeleton: __webpack_require__(/*! @/uview-ui/components/u-skeleton/u-skeleton.vue */ 971)
      .default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", { ref: "uToast", attrs: { _i: 4 } }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "container u-skeleton"),
                  attrs: { _i: 5 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(6, "sc", "userinfo"),
                      attrs: { _i: 6 }
                    },
                    [
                      [
                        _c("image", {
                          staticClass: _vm._$s(
                            8,
                            "sc",
                            "userinfo-avatar u-skeleton-circle"
                          ),
                          attrs: {
                            src: _vm._$s(8, "a-src", _vm.userInfo.avatarUrl),
                            _i: 8
                          }
                        }),
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(9, "sc", "u-skeleton-fillet"),
                            attrs: { _i: 9 }
                          },
                          [
                            _vm._v(
                              _vm._$s(9, "t0-0", _vm._s(_vm.userInfo.nickName))
                            )
                          ]
                        )
                      ]
                    ],
                    2
                  ),
                  _c(
                    "view",
                    _vm._l(_vm._$s(11, "f", { forItems: _vm.lists }), function(
                      item,
                      index,
                      $20,
                      $30
                    ) {
                      return _c(
                        "view",
                        {
                          key: _vm._$s(11, "f", { forIndex: $20, key: index }),
                          staticClass: _vm._$s(
                            "11-" + $30,
                            "sc",
                            "u-skeleton-rect lists"
                          ),
                          attrs: { _i: "11-" + $30 }
                        },
                        [
                          _c("text", [
                            _vm._v(_vm._$s("12-" + $30, "t0-0", _vm._s(item)))
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ]
              ),
              _c("u-skeleton", {
                attrs: {
                  "bg-color": "rgb(250, 250, 250)",
                  loading: _vm.loading,
                  animation: _vm.animation,
                  "el-color": _vm.elColor,
                  "border-radius": _vm.borderRadius,
                  _i: 13
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(14, "sc", "u-config-wrap"), attrs: { _i: 14 } },
        [
          _c("view", {
            staticClass: _vm._$s(15, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 15 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "u-config-item"),
              attrs: { _i: 16 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "u-item-title"),
                attrs: { _i: 17 }
              }),
              _c("u-subsection", {
                attrs: {
                  current: _vm.current,
                  list: ["请求中", "请求结束"],
                  _i: 18
                },
                on: { change: _vm.loadingChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "u-config-item"),
              attrs: { _i: 19 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "u-item-title"),
                attrs: { _i: 20 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 21 },
                on: { change: _vm.animationChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "u-config-item"),
              attrs: { _i: 22 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(23, "sc", "u-item-title"),
                attrs: { _i: 23 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 24 },
                on: { change: _vm.styleChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 976:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/skeleton/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 977);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 977:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/skeleton/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      userInfo: {
        avatarUrl: 'https://cdn.uviewui.com/uview/common/logo.png',
        nickName: 'uView' },

      lists: [
      '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
      '人生得意须尽欢，莫使金樽空对月',
      '天生我材必有用，千金散尽还复来'],

      loading: true, // 是否显示骨架屏组件
      animation: false,
      elColor: '#e5e5e5',
      borderRadius: 10 };

  },
  computed: {
    current: function current() {
      return this.loading ? 0 : 1;
    } },

  onLoad: function onLoad() {
    this.getData();
  },
  methods: {
    animationChange: function animationChange(index) {
      this.animation = index == 0 ? true : false;
      this.getData();
    },
    loadingChange: function loadingChange(index) {
      this.loading = index == 0 ? true : false;
      if (index == 0) this.getData();
    },
    styleChange: function styleChange(index) {
      if (index == 0) {
        this.elColor = this.$u.color['primary'];
        this.borderRadius = 14;
      } else {
        this.elColor = '#e5e5e5';
        this.borderRadius = 10;
      }
      this.getData();
    },
    getData: function getData() {var _this = this;
      this.loading = true;
      // 通过延时模拟向后端请求数据，调隐藏骨架屏
      setTimeout(function () {
        _this.loading = false;
      }, 3000);
    } } };exports.default = _default;

/***/ }),

/***/ 978:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/upload/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d0c47460&mpType=page */ 979);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 981);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/upload/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 979:
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/upload/index.vue?vue&type=template&id=d0c47460&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d0c47460&mpType=page */ 980);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0c47460_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 980:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/upload/index.vue?vue&type=template&id=d0c47460&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uIcon: __webpack_require__(/*! @/uview-ui/components/u-icon/u-icon.vue */ 8).default,
    uLineProgress: __webpack_require__(/*! @/uview-ui/components/u-line-progress/u-line-progress.vue */ 252)
      .default,
    uUpload: __webpack_require__(/*! @/uview-ui/components/u-upload/u-upload.vue */ 693).default,
    uButton: __webpack_require__(/*! @/uview-ui/components/u-button/u-button.vue */ 86).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", { ref: "uToast", attrs: { _i: 4 } }),
              _vm._$s(5, "i", !_vm.showUploadList)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(5, "sc", "pre-box"),
                      attrs: { _i: 5 }
                    },
                    _vm._l(_vm._$s(6, "f", { forItems: _vm.lists }), function(
                      item,
                      index,
                      $20,
                      $30
                    ) {
                      return _c(
                        "view",
                        {
                          key: _vm._$s(6, "f", { forIndex: $20, key: index }),
                          staticClass: _vm._$s("6-" + $30, "sc", "pre-item"),
                          attrs: { _i: "6-" + $30 }
                        },
                        [
                          _c("image", {
                            staticClass: _vm._$s(
                              "7-" + $30,
                              "sc",
                              "pre-item-image"
                            ),
                            attrs: {
                              src: _vm._$s("7-" + $30, "a-src", item.url),
                              _i: "7-" + $30
                            }
                          }),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "8-" + $30,
                                "sc",
                                "u-delete-icon"
                              ),
                              attrs: { _i: "8-" + $30 },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.deleteItem(index)
                                }
                              }
                            },
                            [
                              _c("u-icon", {
                                attrs: {
                                  name: "close",
                                  size: "20",
                                  color: "#ffffff",
                                  _i: "9-" + $30
                                }
                              })
                            ],
                            1
                          ),
                          _vm._$s(
                            "10-" + $30,
                            "i",
                            item.progress > 0 && !item.error
                          )
                            ? _c("u-line-progress", {
                                staticClass: _vm._$s(
                                  "10-" + $30,
                                  "sc",
                                  "u-progress"
                                ),
                                attrs: {
                                  "show-percent": false,
                                  height: "16",
                                  percent: item.progress,
                                  _i: "10-" + $30
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c(
                "u-upload",
                {
                  ref: "uUpload",
                  attrs: {
                    "before-remove": _vm.beforeRemove,
                    "custom-btn": _vm.customBtn,
                    "show-upload-list": _vm.showUploadList,
                    action: _vm.action,
                    "auto-upload": _vm.autoUpload,
                    "file-list": _vm.fileList,
                    "show-progress": _vm.showProgress,
                    deletable: _vm.deletable,
                    "max-count": _vm.maxCount,
                    _i: 11
                  },
                  on: {
                    "on-choose-fail": _vm.onChooseFail,
                    "on-list-change": _vm.onListChange
                  }
                },
                [
                  _vm._$s(12, "i", _vm.customBtn)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(12, "sc", "slot-btn"),
                          attrs: { _i: 12 },
                          slot: "addBtn"
                        },
                        [
                          _c("u-icon", {
                            attrs: {
                              name: "photo",
                              size: "60",
                              color: _vm.$u.color["lightColor"],
                              _i: 13
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
              ),
              _c(
                "u-button",
                {
                  attrs: { "custom-style": { marginTop: "20rpx" }, _i: 14 },
                  on: { click: _vm.upload }
                },
                [_vm._v("")]
              ),
              _c(
                "u-button",
                {
                  attrs: { "custom-style": { marginTop: "40rpx" }, _i: 15 },
                  on: { click: _vm.clear }
                },
                [_vm._v("")]
              )
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(16, "sc", "u-config-wrap"), attrs: { _i: 16 } },
        [
          _c("view", {
            staticClass: _vm._$s(17, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 17 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(18, "sc", "u-config-item"),
              attrs: { _i: 18 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(19, "sc", "u-item-title"),
                attrs: { _i: 19 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["自动上传", "手动上传"], _i: 20 },
                on: { change: _vm.autoUploadChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(21, "sc", "u-config-item"),
              attrs: { _i: 21 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(22, "sc", "u-item-title"),
                attrs: { _i: 22 }
              }),
              _c("u-subsection", {
                attrs: { list: ["显示", "隐藏"], _i: 23 },
                on: { change: _vm.controlChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(24, "sc", "u-config-item"),
              attrs: { _i: 24 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(25, "sc", "u-item-title"),
                attrs: { _i: 25 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["1", "2", "4"], _i: 26 },
                on: { change: _vm.maxCountChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(27, "sc", "u-config-item"),
              attrs: { _i: 27 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(28, "sc", "u-item-title"),
                attrs: { _i: 28 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["是", "否"], _i: 29 },
                on: { change: _vm.customStyleChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 981:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/upload/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 982);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 982:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/upload/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      action: 'http://127.0.0.1:7001/upload',
      // 预置上传列表
      fileList: [],
      // fileList: [{
      // 	url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
      // 	error: false,
      // 	progress: 100
      // }],
      showUploadList: true,
      customBtn: false,
      autoUpload: false,
      showProgress: true,
      deletable: true,
      customStyle: false,
      maxCount: 2,
      lists: [] // 组件内部的文件列表
    };
  },
  onLoad: function onLoad() {

  },
  methods: {
    reUpload: function reUpload() {
      this.$refs.uUpload.reUpload();
    },
    clear: function clear() {
      this.$refs.uUpload.clear();
    },
    autoUploadChange: function autoUploadChange(index) {
      this.autoUpload = index == 0 ? true : false;
    },
    controlChange: function controlChange(index) {
      if (index == 0) {
        this.showProgress = true;
        this.deletable = true;
      } else {
        this.showProgress = false;
        this.deletable = false;
      }
    },
    maxCountChange: function maxCountChange(index) {
      this.maxCount = index == 0 ? 1 : index == 1 ? 2 : 4;
    },
    customStyleChange: function customStyleChange(index) {
      if (index == 0) {
        this.showUploadList = false;
        this.customBtn = true;

      } else {
        this.showUploadList = true;
        this.customBtn = false;
      }
    },
    upload: function upload() {
      this.$refs.uUpload.upload();
    },
    deleteItem: function deleteItem(index) {
      this.$refs.uUpload.remove(index);
    },
    onOversize: function onOversize(file, lists) {
      // console.log('onOversize', file, lists);
    },
    onPreview: function onPreview(url, lists) {
      // console.log('onPreview', url, lists);
    },
    onRemove: function onRemove(index, lists) {
      // console.log('onRemove', index, lists);
    },
    onSuccess: function onSuccess(data, index, lists) {
      // console.log('onSuccess', data, index, lists);
    },
    onChange: function onChange(res, index, lists) {
      // console.log('onChange', res, index, lists);
    },
    error: function error(res, index, lists) {
      // console.log('onError', res, index, lists);
    },
    onProgress: function onProgress(res, index, lists) {
      // console.log('onProgress', res, index, lists);
    },
    onUploaded: function onUploaded(lists) {
      // console.log('onUploaded', lists);
    },
    onListChange: function onListChange(lists) {
      // console.log('onListChange', lists);
      this.lists = lists;
    },
    beforeRemove: function beforeRemove(index, lists) {
      return true;
    },
    onChooseFail: function onChooseFail(e) {
      // console.log(e);
    } } };exports.default = _default;

/***/ }),

/***/ 983:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/waterfall/index.vue?mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2ede934e&scoped=true&mpType=page */ 984);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 986);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ede934e",
  null,
  false,
  _index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/waterfall/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 984:
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/waterfall/index.vue?vue&type=template&id=2ede934e&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2ede934e&scoped=true&mpType=page */ 985);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ede934e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 985:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/waterfall/index.vue?vue&type=template&id=2ede934e&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uWaterfall: __webpack_require__(/*! @/uview-ui/components/u-waterfall/u-waterfall.vue */ 116)
      .default,
    uLazyLoad: __webpack_require__(/*! @/uview-ui/components/u-lazy-load/u-lazy-load.vue */ 124)
      .default,
    uIcon: __webpack_require__(/*! @/uview-ui/components/u-icon/u-icon.vue */ 8).default,
    uLoadmore: __webpack_require__(/*! @/uview-ui/components/u-loadmore/u-loadmore.vue */ 154)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "wrap"), attrs: { _i: 0 } },
    [
      _c("u-waterfall", {
        ref: "uWaterfall",
        attrs: { _i: 1 },
        scopedSlots: _vm._u([
          {
            key: "left",
            fn: function(ref, _svm, _si) {
              var leftList = ref.leftList
              return _vm._l(
                _svm._$s("3-" + _si, "f", { forItems: leftList }),
                function(item, index, $20, $30) {
                  return _c(
                    "view",
                    {
                      key: _svm._$s("3-" + _si, "f", {
                        forIndex: $20,
                        key: index
                      }),
                      staticClass: _svm._$s(
                        "3-" + _si + $30,
                        "sc",
                        "demo-warter"
                      ),
                      attrs: { _i: "3-" + _si + $30 }
                    },
                    [
                      _c("u-lazy-load", {
                        attrs: {
                          threshold: "-450",
                          "border-radius": "10",
                          image: item.image,
                          index: index,
                          _i: "4-" + _si + $30
                        }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "5-" + _si + $30,
                            "sc",
                            "demo-title"
                          ),
                          attrs: { _i: "5-" + _si + $30 }
                        },
                        [
                          _vm._v(
                            _svm._$s(
                              "5-" + _si + $30,
                              "t0-0",
                              _vm._s(item.title)
                            )
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "6-" + _si + $30,
                            "sc",
                            "demo-price"
                          ),
                          attrs: { _i: "6-" + _si + $30 }
                        },
                        [
                          _vm._v(
                            _svm._$s(
                              "6-" + _si + $30,
                              "t0-0",
                              _vm._s(item.price)
                            )
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "7-" + _si + $30,
                            "sc",
                            "demo-tag"
                          ),
                          attrs: { _i: "7-" + _si + $30 }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _svm._$s(
                                "8-" + _si + $30,
                                "sc",
                                "demo-tag-owner"
                              ),
                              attrs: { _i: "8-" + _si + $30 }
                            },
                            [_vm._v("自营")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _svm._$s(
                                "9-" + _si + $30,
                                "sc",
                                "demo-tag-text"
                              ),
                              attrs: { _i: "9-" + _si + $30 }
                            },
                            [_vm._v("放心购")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "10-" + _si + $30,
                            "sc",
                            "demo-shop"
                          ),
                          attrs: { _i: "10-" + _si + $30 }
                        },
                        [
                          _vm._v(
                            _svm._$s(
                              "10-" + _si + $30,
                              "t0-0",
                              _vm._s(item.shop)
                            )
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "11-" + _si + $30,
                            "sc",
                            "u-close"
                          ),
                          attrs: { _i: "11-" + _si + $30 }
                        },
                        [
                          _c("u-icon", {
                            attrs: {
                              name: "close-circle-fill",
                              color: "#fa3534",
                              size: "34",
                              _i: "12-" + _si + $30
                            },
                            on: {
                              click: function($event) {
                                return _vm.remove(item.id)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }
              )
            }
          },
          {
            key: "right",
            fn: function(ref, _svm, _si) {
              var rightList = ref.rightList
              return _vm._l(
                _svm._$s("14-" + _si, "f", { forItems: rightList }),
                function(item, index, $21, $31) {
                  return _c(
                    "view",
                    {
                      key: _svm._$s("14-" + _si, "f", {
                        forIndex: $21,
                        key: index
                      }),
                      staticClass: _svm._$s(
                        "14-" + _si + $31,
                        "sc",
                        "demo-warter"
                      ),
                      attrs: { _i: "14-" + _si + $31 }
                    },
                    [
                      _c("u-lazy-load", {
                        attrs: {
                          threshold: "-450",
                          "border-radius": "10",
                          image: item.image,
                          index: index,
                          _i: "15-" + _si + $31
                        }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "16-" + _si + $31,
                            "sc",
                            "demo-title"
                          ),
                          attrs: { _i: "16-" + _si + $31 }
                        },
                        [
                          _vm._v(
                            _svm._$s(
                              "16-" + _si + $31,
                              "t0-0",
                              _vm._s(item.title)
                            )
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "17-" + _si + $31,
                            "sc",
                            "demo-price"
                          ),
                          attrs: { _i: "17-" + _si + $31 }
                        },
                        [
                          _vm._v(
                            _svm._$s(
                              "17-" + _si + $31,
                              "t0-0",
                              _vm._s(item.price)
                            )
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "18-" + _si + $31,
                            "sc",
                            "demo-tag"
                          ),
                          attrs: { _i: "18-" + _si + $31 }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _svm._$s(
                                "19-" + _si + $31,
                                "sc",
                                "demo-tag-owner"
                              ),
                              attrs: { _i: "19-" + _si + $31 }
                            },
                            [_vm._v("自营")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _svm._$s(
                                "20-" + _si + $31,
                                "sc",
                                "demo-tag-text"
                              ),
                              attrs: { _i: "20-" + _si + $31 }
                            },
                            [_vm._v("放心购")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "21-" + _si + $31,
                            "sc",
                            "demo-shop"
                          ),
                          attrs: { _i: "21-" + _si + $31 }
                        },
                        [
                          _vm._v(
                            _svm._$s(
                              "21-" + _si + $31,
                              "t0-0",
                              _vm._s(item.shop)
                            )
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _svm._$s(
                            "22-" + _si + $31,
                            "sc",
                            "u-close"
                          ),
                          attrs: { _i: "22-" + _si + $31 }
                        },
                        [
                          _c("u-icon", {
                            attrs: {
                              name: "close-circle-fill",
                              color: "#fa3534",
                              size: "34",
                              _i: "23-" + _si + $31
                            },
                            on: {
                              click: function($event) {
                                return _vm.remove(item.id)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }
              )
            }
          }
        ]),
        model: {
          value: _vm._$s(1, "v-model", _vm.flowList),
          callback: function($$v) {
            _vm.flowList = $$v
          },
          expression: "flowList"
        }
      }),
      _c("u-loadmore", {
        attrs: {
          "bg-color": "rgb(240, 240, 240)",
          status: _vm.loadStatus,
          _i: 24
        },
        on: { loadmore: _vm.created }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 986:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/waterfall/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 987);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 987:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/waterfall/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      loadStatus: 'loadmore',
      flowList: [],
      list: [
      {
        price: 35,
        title: '北国风光，千里冰封，万里雪飘',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg' },

      {
        price: 75,
        title: '望长城内外，惟余莽莽',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg' },

      {
        price: 385,
        title: '大河上下，顿失滔滔',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg' },

      {
        price: 784,
        title: '欲与天公试比高',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg' },

      {
        price: 7891,
        title: '须晴日，看红装素裹，分外妖娆',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg' },

      {
        price: 2341,
        shop: '李白杜甫白居易旗舰店',
        title: '江山如此多娇，引无数英雄竞折腰',
        image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg' },

      {
        price: 661,
        shop: '李白杜甫白居易旗舰店',
        title: '惜秦皇汉武，略输文采',
        image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg' },

      {
        price: 1654,
        title: '唐宗宋祖，稍逊风骚',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg' },

      {
        price: 1678,
        title: '一代天骄，成吉思汗',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg' },

      {
        price: 924,
        title: '只识弯弓射大雕',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg' },

      {
        price: 8243,
        title: '俱往矣，数风流人物，还看今朝',
        shop: '李白杜甫白居易旗舰店',
        image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg' }] };



  },
  onLoad: function onLoad() {
    this.created();
  },
  onReachBottom: function onReachBottom() {var _this = this;
    this.loadStatus = 'loading';
    // 模拟数据加载
    setTimeout(function () {
      _this.created();
      _this.loadStatus = 'loadmore';
    }, 1000);
  },
  methods: {
    created: function created() {
      for (var i = 0; i < 10; i++) {
        var index = this.$u.random(0, this.list.length - 1);
        // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
        var item = JSON.parse(JSON.stringify(this.list[index]));
        item.id = this.$u.guid();
        this.flowList.push(item);
      }
    },
    remove: function remove(id) {
      this.$refs.uWaterfall.remove(id);
    },
    clear: function clear() {
      this.$refs.uWaterfall.clear();
    } } };exports.default = _default;

/***/ }),

/***/ 988:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/table/index.vue?mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8060dbd6&scoped=true&mpType=page */ 989);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 996);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8060dbd6",
  null,
  false,
  _index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/table/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 989:
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/table/index.vue?vue&type=template&id=8060dbd6&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8060dbd6&scoped=true&mpType=page */ 990);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8060dbd6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 990:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/table/index.vue?vue&type=template&id=8060dbd6&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uToast: __webpack_require__(/*! @/uview-ui/components/u-toast/u-toast.vue */ 71).default,
    uTable: __webpack_require__(/*! @/uview-ui/components/u-table/u-table.vue */ 552).default,
    uTr: __webpack_require__(/*! @/uview-ui/components/u-tr/u-tr.vue */ 557).default,
    uTh: __webpack_require__(/*! @/uview-ui/components/u-th/u-th.vue */ 991).default,
    uTd: __webpack_require__(/*! @/uview-ui/components/u-td/u-td.vue */ 562).default,
    uSubsection: __webpack_require__(/*! @/uview-ui/components/u-subsection/u-subsection.vue */ 187)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-demo"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-demo-wrap"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "u-demo-title"),
            attrs: { _i: 2 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "u-demo-area"), attrs: { _i: 3 } },
            [
              _c("u-toast", { ref: "uToast", attrs: { _i: 4 } }),
              _c(
                "u-table",
                {
                  attrs: {
                    align: _vm.align,
                    borderColor: _vm.borderColor,
                    _i: 5
                  }
                },
                [
                  _c(
                    "u-tr",
                    { staticClass: _vm._$s(6, "sc", "u-tr"), attrs: { _i: 6 } },
                    [
                      _c(
                        "u-th",
                        {
                          staticClass: _vm._$s(7, "sc", "u-th"),
                          attrs: { _i: 7 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-th",
                        {
                          staticClass: _vm._$s(8, "sc", "u-th"),
                          attrs: { _i: 8 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-th",
                        {
                          staticClass: _vm._$s(9, "sc", "u-th"),
                          attrs: { _i: 9 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-th",
                        {
                          staticClass: _vm._$s(10, "sc", "u-th"),
                          attrs: { _i: 10 }
                        },
                        [_vm._v("")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "u-tr",
                    {
                      staticClass: _vm._$s(11, "sc", "u-tr"),
                      attrs: { _i: 11 }
                    },
                    [
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(12, "sc", "u-td"),
                          attrs: { _i: 12 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(13, "sc", "u-td"),
                          attrs: { _i: 13 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(14, "sc", "u-td"),
                          attrs: { _i: 14 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(15, "sc", "u-td"),
                          attrs: { _i: 15 }
                        },
                        [_vm._v("")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "u-tr",
                    {
                      staticClass: _vm._$s(16, "sc", "u-tr"),
                      attrs: { _i: 16 }
                    },
                    [
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(17, "sc", "u-td"),
                          attrs: { _i: 17 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(18, "sc", "u-td"),
                          attrs: { _i: 18 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(19, "sc", "u-td"),
                          attrs: { _i: 19 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(20, "sc", "u-td"),
                          attrs: { _i: 20 }
                        },
                        [_vm._v("")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "u-tr",
                    {
                      staticClass: _vm._$s(21, "sc", "u-tr"),
                      attrs: { _i: 21 }
                    },
                    [
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(22, "sc", "u-td"),
                          attrs: { _i: 22 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(23, "sc", "u-td"),
                          attrs: { _i: 23 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(24, "sc", "u-td"),
                          attrs: { _i: 24 }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-td",
                        {
                          staticClass: _vm._$s(25, "sc", "u-td"),
                          attrs: { _i: 25 }
                        },
                        [_vm._v("")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(26, "sc", "u-config-wrap"), attrs: { _i: 26 } },
        [
          _c("view", {
            staticClass: _vm._$s(27, "sc", "u-config-title u-border-bottom"),
            attrs: { _i: 27 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(28, "sc", "u-config-item"),
              attrs: { _i: 28 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(29, "sc", "u-item-title"),
                attrs: { _i: 29 }
              }),
              _c("u-subsection", {
                attrs: { list: ["gray", "primary", "warning"], _i: 30 },
                on: { change: _vm.borderColorChange }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(31, "sc", "u-config-item"),
              attrs: { _i: 31 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(32, "sc", "u-item-title"),
                attrs: { _i: 32 }
              }),
              _c("u-subsection", {
                attrs: { current: "1", list: ["左", "中", "右"], _i: 33 },
                on: { change: _vm.alignChange }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 996:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/table/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 997);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 997:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/table/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      mode: false,
      borderColor: '#e4e7ed',
      align: 'center',
      index: 0 };

  },
  methods: {
    modeChange: function modeChange(index) {



      this.mode = index == 0 ? true : false;
      this.key++;
    },
    borderColorChange: function borderColorChange(index) {
      this.borderColor = index == 0 ? '#e4e7ed' : index == 1 ? '#2979ff' : '#ff9900';
    },
    alignChange: function alignChange(index) {
      this.align = index == 0 ? 'left' : index == 1 ? 'center' : 'right';
    } } };exports.default = _default;

/***/ }),

/***/ 998:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/rate/index.vue?mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=73114722&scoped=true&mpType=page */ 999);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 1006);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs




/* normalize component */

var component = Object(_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73114722",
  null,
  false,
  _index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/componentsB/rate/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 999:
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (2)/新建文件夹/uniAppDemo/pages/componentsB/rate/index.vue?vue&type=template&id=73114722&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=73114722&scoped=true&mpType=page */ 1000);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBuilderAPP_HBuilderX_3_1_9_20210413_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73114722_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ })

}]);