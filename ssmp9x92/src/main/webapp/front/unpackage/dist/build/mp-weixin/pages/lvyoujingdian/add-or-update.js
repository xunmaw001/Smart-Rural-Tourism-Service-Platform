(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/lvyoujingdian/add-or-update"],{"07ef":function(n,e,i){"use strict";i.r(e);var t=i("3ce3"),r=i("86c5");for(var a in r)"default"!==a&&function(n){i.d(e,n,(function(){return r[n]}))}(a);i("0e4f");var u,o=i("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"3a9f843d",null,!1,t["a"],u);e["default"]=c.exports},"0e4f":function(n,e,i){"use strict";var t=i("3cc9"),r=i.n(t);r.a},"3cc9":function(n,e,i){},"3ce3":function(n,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e9be"))}},r=function(){var n=this,e=n.$createElement;n._self._c},a=[]},"86c5":function(n,e,i){"use strict";i.r(e);var t=i("9386"),r=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=r.a},9386:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,i,t,r,a,u){try{var o=n[a](u),c=o.value}catch(s){return void i(s)}o.done?e(c):Promise.resolve(c).then(t,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var u=n.apply(e,i);function o(n){a(u,t,r,o,c,"next",n)}function c(n){a(u,t,r,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("e9be"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{ruleForm:{jingdianmingcheng:"",jingdianleixing:"",jingdiandizhi:"",jingdiantupian:"",yingyeshijian:"",jingdianjieshao:"",zhuyishixiang:"",price:""},jingdianleixingOptions:[],jingdianleixingIndex:0,user:{},ro:{jingdianmingcheng:!1,jingdianleixing:!1,jingdiandizhi:!1,jingdiantupian:!1,yingyeshijian:!1,jingdianjieshao:!1,zhuyishixiang:!1,clicknum:!1,price:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return u(t.default.mark((function r(){var a,u,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n.getStorageSync("nowTable"),r.next=3,i.$api.session(a);case 3:return u=r.sent,i.user=u.data,r.next=7,i.$api.option("jingdianleixing","leixing",{});case 7:if(u=r.sent,i.jingdianleixingOptions=u.data,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=17;break}return i.ruleForm.id=e.id,r.next=15,i.$api.info("lvyoujingdian",i.ruleForm.id);case 15:u=r.sent,i.ruleForm=u.data;case 17:if(!e.cross){r.next=60;break}o=n.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 20:if((r.t1=r.t0()).done){r.next=60;break}if(c=r.t1.value,"jingdianmingcheng"!=c){r.next=26;break}return i.ruleForm.jingdianmingcheng=o[c],i.ro.jingdianmingcheng=!0,r.abrupt("continue",20);case 26:if("jingdianleixing"!=c){r.next=30;break}return i.ruleForm.jingdianleixing=o[c],i.ro.jingdianleixing=!0,r.abrupt("continue",20);case 30:if("jingdiandizhi"!=c){r.next=34;break}return i.ruleForm.jingdiandizhi=o[c],i.ro.jingdiandizhi=!0,r.abrupt("continue",20);case 34:if("jingdiantupian"!=c){r.next=38;break}return i.ruleForm.jingdiantupian=o[c],i.ro.jingdiantupian=!0,r.abrupt("continue",20);case 38:if("yingyeshijian"!=c){r.next=42;break}return i.ruleForm.yingyeshijian=o[c],i.ro.yingyeshijian=!0,r.abrupt("continue",20);case 42:if("jingdianjieshao"!=c){r.next=46;break}return i.ruleForm.jingdianjieshao=o[c],i.ro.jingdianjieshao=!0,r.abrupt("continue",20);case 46:if("zhuyishixiang"!=c){r.next=50;break}return i.ruleForm.zhuyishixiang=o[c],i.ro.zhuyishixiang=!0,r.abrupt("continue",20);case 50:if("clicknum"!=c){r.next=54;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,r.abrupt("continue",20);case 54:if("price"!=c){r.next=58;break}return i.ruleForm.price=o[c],i.ro.price=!0,r.abrupt("continue",20);case 58:r.next=20;break;case 60:i.styleChange();case 61:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},yingyeshijianConfirm:function(n){console.log(n),this.ruleForm.yingyeshijian=n.result,this.$forceUpdate()},jingdianleixingChange:function(n){this.jingdianleixingIndex=n.target.value,this.ruleForm.jingdianleixing=this.jingdianleixingOptions[this.jingdianleixingIndex]},jingdiantupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.jingdiantupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){e.next=3;break}return n.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 3:if(n.ruleForm.price){e.next=6;break}return n.$utils.msg("价格不能为空"),e.abrupt("return");case 6:if(!n.ruleForm.price||n.$validate.isNumber(n.ruleForm.price)){e.next=9;break}return n.$utils.msg("价格应输入数字"),e.abrupt("return");case 9:if(!n.ruleForm.id){e.next=14;break}return e.next=12,n.$api.update("lvyoujingdian",n.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,n.$api.add("lvyoujingdian",n.ruleForm);case 16:n.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,i("543d")["default"])},f033:function(n,e,i){"use strict";(function(n){i("29b3");t(i("66fd"));var e=t(i("07ef"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])}},[["f033","common/runtime","common/vendor"]]]);