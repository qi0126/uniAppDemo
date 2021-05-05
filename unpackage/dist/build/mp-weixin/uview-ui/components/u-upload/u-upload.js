(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-upload/u-upload"],{"178f":function(e,t,n){"use strict";n.r(t);var i=n("7265"),s=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=s.a},"2b6c":function(e,t,n){"use strict";var i=n("3305"),s=n.n(i);s.a},3305:function(e,t,n){},7265:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("a34a"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,i,s,o,r){try{var a=e[o](r),u=a.value}catch(l){return void n(l)}a.done?t(u):Promise.resolve(u).then(i,s)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function a(e){o(r,i,s,a,u,"next",e)}function u(e){o(r,i,s,a,u,"throw",e)}a(void 0)}))}}var a={name:"u-upload",props:{showUploadList:{type:Boolean,default:!0},action:{type:String,default:""},maxCount:{type:[String,Number],default:52},showProgress:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},name:{type:String,default:"file"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},previewFullImage:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:function(){return[]}},uploadText:{type:String,default:"选择图片"},autoUpload:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:200},height:{type:[String,Number],default:200},delBgColor:{type:String,default:"#fa3534"},delColor:{type:String,default:"#ffffff"},delIcon:{type:String,default:"close"},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},index:{type:[Number,String],default:""}},mounted:function(){},data:function(){return{lists:[],isInCount:!0,uploading:!1}},watch:{fileList:{immediate:!0,handler:function(e){var t=this;e.map((function(e){var n=t.lists.some((function(t){return t.url==e.url}));!n&&t.lists.push({url:e.url,error:!1,progress:100})}))}},lists:function(e){this.$emit("on-list-change",e,this.index)}},methods:{clear:function(){this.lists=[]},reUpload:function(){this.uploadFile()},selectFile:function(){var t=this;if(!this.disabled){this.name;var n=this.maxCount,i=this.multiple,s=this.maxSize,o=this.sizeType,r=this.lists,a=(this.camera,this.compressed,this.maxDuration,this.sourceType),u=null,l=n-r.length;u=new Promise((function(t,n){e.chooseImage({count:i?l>9?9:l:1,sourceType:a,sizeType:o,success:t,fail:n})})),u.then((function(e){var o=t.lists.length;e.tempFiles.map((function(e,o){if(t.checkFileExt(e)&&(i||!(o>=1)))if(e.size>s)t.$emit("on-oversize",e,t.lists,t.index),t.showToast("超出允许的文件大小");else{if(n<=r.length)return t.$emit("on-exceed",e,t.lists,t.index),void t.showToast("超出最大允许的文件个数");r.push({url:e.path,progress:0,error:!1,file:e})}})),t.$emit("on-choose-complete",t.lists,t.index),t.autoUpload&&t.uploadFile(o)})).catch((function(e){t.$emit("on-choose-fail",e)}))}},showToast:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||n)&&e.showToast({title:t,icon:"none"})},upload:function(){this.uploadFile()},retry:function(t){this.lists[t].progress=0,this.lists[t].error=!1,this.lists[t].response=null,e.showLoading({title:"重新上传"}),this.uploadFile(t)},uploadFile:function(){var t=arguments,n=this;return r(i.default.mark((function s(){var o,r,a;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(o=t.length>0&&void 0!==t[0]?t[0]:0,!n.disabled){i.next=3;break}return i.abrupt("return");case 3:if(!n.uploading){i.next=5;break}return i.abrupt("return");case 5:if(!(o>=n.lists.length)){i.next=8;break}return n.$emit("on-uploaded",n.lists,n.index),i.abrupt("return");case 8:if(100!=n.lists[o].progress){i.next=11;break}return 0==n.autoUpload&&n.uploadFile(o+1),i.abrupt("return");case 11:if(!n.beforeUpload||"function"!==typeof n.beforeUpload){i.next=22;break}if(r=n.beforeUpload.bind(n.$u.$parent.call(n))(o,n.lists),!r||"function"!==typeof r.then){i.next=18;break}return i.next=16,r.then((function(e){})).catch((function(e){return n.uploadFile(o+1)}));case 16:i.next=22;break;case 18:if(!1!==r){i.next=22;break}return i.abrupt("return",n.uploadFile(o+1));case 22:if(n.action){i.next=25;break}return n.showToast("请配置上传地址",!0),i.abrupt("return");case 25:n.lists[o].error=!1,n.uploading=!0,a=e.uploadFile({url:n.action,filePath:n.lists[o].url,name:n.name,formData:n.formData,header:n.header,success:function(e){var t=n.toJson&&n.$u.test.jsonString(e.data)?JSON.parse(e.data):e.data;[200,201,204].includes(e.statusCode)?(n.lists[o].response=t,n.lists[o].progress=100,n.lists[o].error=!1,n.$emit("on-success",t,o,n.lists,n.index)):n.uploadError(o,t)},fail:function(e){n.uploadError(o,e)},complete:function(t){e.hideLoading(),n.uploading=!1,n.uploadFile(o+1),n.$emit("on-change",t,o,n.lists,n.index)}}),a.onProgressUpdate((function(e){e.progress>0&&(n.lists[o].progress=e.progress,n.$emit("on-progress",e,o,n.lists,n.index))}));case 29:case"end":return i.stop()}}),s)})))()},uploadError:function(e,t){this.lists[e].progress=0,this.lists[e].error=!0,this.lists[e].response=null,this.$emit("on-error",t,e,this.lists,this.index),this.showToast("上传失败，请重试")},deleteItem:function(t){var n=this;e.showModal({title:"提示",content:"您确定要删除此项吗？",success:function(){var e=r(i.default.mark((function e(s){var o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!s.confirm){e.next=12;break}if(!n.beforeRemove||"function"!==typeof n.beforeRemove){e.next=11;break}if(o=n.beforeRemove.bind(n.$u.$parent.call(n))(t,n.lists),!o||"function"!==typeof o.then){e.next=8;break}return e.next=6,o.then((function(e){n.handlerDeleteItem(t)})).catch((function(e){n.showToast("已终止移除")}));case 6:e.next=9;break;case 8:!1===o?n.showToast("已终止移除"):n.handlerDeleteItem(t);case 9:e.next=12;break;case 11:n.handlerDeleteItem(t);case 12:case"end":return e.stop()}}),e)})));function s(t){return e.apply(this,arguments)}return s}()})},handlerDeleteItem:function(e){this.lists[e].process<100&&this.lists[e].process>0&&"undefined"!=typeof this.lists[e].uploadTask&&this.lists[e].uploadTask.abort(),this.lists.splice(e,1),this.$forceUpdate(),this.$emit("on-remove",e,this.lists,this.index),this.showToast("移除成功")},remove:function(e){e>=0&&e<this.lists.length&&(this.lists.splice(e,1),this.$emit("on-list-change",this.lists,this.index))},doPreviewImage:function(t,n){var i=this;if(this.previewFullImage){var s=this.lists.map((function(e){return e.url||e.path}));e.previewImage({urls:s,current:t,success:function(){i.$emit("on-preview",t,i.lists,i.index)},fail:function(){e.showToast({title:"预览图片失败",icon:"none"})}})}},checkFileExt:function(e){var t=!1,n="",i=/.+\./;return n=e.path.replace(i,"").toLowerCase(),t=this.limitType.some((function(e){return e.toLowerCase()===n})),t||this.showToast("不允许选择".concat(n,"格式的文件")),t}}};t.default=a}).call(this,n("543d")["default"])},"85a1":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"2026"))},uLineProgress:function(){return n.e("uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null,"1cd3"))}},s=function(){var e=this,t=e.$createElement,n=(e._self._c,e.showUploadList?e.$u.addUnit(e.width):null),i=e.showUploadList?e.$u.addUnit(e.height):null,s=!e.disabled&&e.maxCount>e.lists.length&&!e.customBtn?e.$u.addUnit(e.width):null,o=!e.disabled&&e.maxCount>e.lists.length&&!e.customBtn?e.$u.addUnit(e.height):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:s,g3:o}})},o=[]},dde3:function(e,t,n){"use strict";n.r(t);var i=n("85a1"),s=n("178f");for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o);n("2b6c");var r,a=n("f0c5"),u=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"2f010004",null,!1,i["a"],r);t["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-upload/u-upload-create-component',
    {
        'uview-ui/components/u-upload/u-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dde3"))
        })
    },
    [['uview-ui/components/u-upload/u-upload-create-component']]
]);
