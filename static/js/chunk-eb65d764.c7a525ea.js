(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb65d764"],{1516:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"empty-content"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:t.src}})]),e("div",{staticClass:"text",domProps:{textContent:t._s(t.text)}})])},i=[],n={name:"Empty",props:{text:{type:String,default:"数据为空..."},src:{type:String,default:s("783d")}},data(){return{}},created(){},methods:{}},r=n,o=(s("7105"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,"22c60752",null);e["a"]=c.exports},"52c1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel"},[e("el-container",{staticClass:"full-height"},[e("el-header",{staticClass:"header no-select",attrs:{height:"60px"}},[e("p",[t._v("我的群组")])]),e("el-header",{staticClass:"no-select subheader",attrs:{height:"40px"}},[e("p",{class:{active:0==t.tabIndex},on:{click:function(e){t.tabIndex=0}}},[t._v(" 全部群组("+t._s(t.items.length)+") ")]),e("el-divider",{attrs:{direction:"vertical"}}),e("p",{class:{active:1==t.tabIndex},on:{click:function(e){t.tabIndex=1}}},[t._v(" 我的创建("+t._s(t.counts[1])+") ")]),e("el-divider",{attrs:{direction:"vertical"}}),e("p",{class:{active:2==t.tabIndex},on:{click:function(e){t.tabIndex=2}}},[t._v(" 我的管理("+t._s(t.counts[2])+") ")]),e("el-divider",{attrs:{direction:"vertical"}}),e("p",{class:{active:3==t.tabIndex},on:{click:function(e){t.tabIndex=3}}},[t._v(" 我的加入("+t._s(t.counts[3])+") ")])],1),e("el-main",{staticClass:"panel-body no-padding lum-scrollbar"},[0==t.status?[e("Loading")]:1==t.status&&0==t.items.length?[e("Empty",{attrs:{text:"暂未加入群聊"}})]:t._e(),1==t.status?t._l(t.filterGroups,(function(s,a){return e("div",{key:s.id,staticClass:"data-item",on:{click:function(e){t.groupDetailId=s.id}}},[e("el-avatar",{staticClass:"avatar",attrs:{shape:"square",size:35,src:s.avatar}},[t._v(" "+t._s(s.group_name.substr(0,1))+" ")]),e("div",{staticClass:"card"},[e("div",{staticClass:"title"},[e("span",{staticClass:"name"},[t._v(t._s(s.group_name))]),e("div",{directives:[{name:"show",rawName:"v-show",value:1==s.is_disturb,expression:"item.is_disturb == 1"}],staticClass:"larkc-tag"},[e("i",{staticClass:"iconfont icon-xiaoximiandarao",staticStyle:{"font-size":"10px",color:"#7d7a7a"}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:2==s.leader,expression:"item.leader == 2"}],staticClass:"larkc-tag wait"},[t._v(" 群主 ")])]),e("div",{staticClass:"content"},[t._v(" [群介绍] ~ 「"+t._s(s.group_profile?s.group_profile:"未设置")+"」 ")])]),e("div",{staticClass:"apply-from",on:{click:function(t){t.preventDefault(),t.stopPropagation()}}},[e("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-s-promotion"},on:{click:function(e){return t.toTalkPage(2,s.id)}}},[t._v("发送消息 ")]),e("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.deleteGroup(s,a)}}},[t._v("退出群聊 ")])],1)],1)})):t._e()],2)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.groupDetailId,expression:"groupDetailId"}],staticClass:"broadside-box"},[e("group-panel",{attrs:{"group-id":t.groupDetailId},on:{close:function(e){t.groupDetailId=0},"send-group":t.sendMessage,"disturb-change":t.disturbChange,"quit-group":t.quitGroupSuccess}})],1)],1)},i=[],n=s("3618"),r=s("23ba"),o=s("1516"),c=s("97b0"),l=s("0e77"),u={components:{GroupPanel:n["a"],Empty:o["a"],Loading:c["a"]},data(){return{tabIndex:0,items:[],status:0,counts:{1:0,2:0,3:0},groupDetailId:0}},watch:{items(){this.items.forEach(t=>{0==t.leader?this.counts[3]++:1==t.leader?this.counts[2]++:2==t.leader&&this.counts[1]++})}},computed:{filterGroups(){return this.items.filter(t=>1==this.tabIndex?2==t.leader:2==this.tabIndex?1==t.leader:3!=this.tabIndex||0==t.leader)}},created(){this.loadUserGroups()},methods:{loadUserGroups(){Object(r["f"])().then(t=>{200==t.code&&(this.status=1,this.items=t.data.rows)})},getGroupIndex(t){return this.items.findIndex(e=>e.id==t)},deleteGroup(t,e){this.$alert(`您确定要退出【${t.group_name}】群聊吗？`,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",showCancelButton:!0,customClass:"border-radius0",closeOnClickModal:!0,callback:s=>{if("confirm"!=s)return!1;let a=t.id;Object(r["k"])({group_id:a}).then(s=>{200==s.code?(this.$delete(this.items,e),this.$message({message:`您已成功退出【${t.group_name}】群聊 ...`,type:"success"})):this.$message({message:`退出 【${t.group_name}】】群聊失败 ...`,type:"info"})})}})},toTalkPage(t,e){Object(l["e"])(t,e)},sendMessage(t){this.toTalkPage(2,t)},quitGroupSuccess(){this.$delete(this.items,this.getGroupIndex(this.groupDetailId)),this.groupDetailId=0},groupChatSuccess(t){this.launchGroupShow=!1,this.loadUserGroups()},disturbChange(t){let e=this.getGroupIndex(t.group_id);this.items[e].is_disturb=t.status}}},d=u,p=(s("5b9e"),s("2877")),h=Object(p["a"])(d,a,i,!1,null,"e77ce2ca",null);e["default"]=h.exports},"5b9e":function(t,e,s){"use strict";s("c41b")},"653b":function(t,e,s){},7105:function(t,e,s){"use strict";s("653b")},"783d":function(t,e,s){t.exports=s.p+"static/img/no-oncall.6b776fcf.6b776fcf.png"},c41b:function(t,e,s){}}]);