(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd55f63e"],{"7ee3":function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"lum-dialog-mask"},[t("el-container",{directives:[{name:"outside",rawName:"v-outside",value:e.close,expression:"close"}],staticClass:"lum-dialog-box"},[t("el-header",{staticClass:"no-padding header no-select",attrs:{height:"60px"}},[t("p",[e._v(" "+e._s(0==e.from.groupId?"创建群组":"请选择需要邀请的好友")+" ")]),t("p",{staticClass:"tools"},[t("i",{staticClass:"el-icon-close",on:{click:e.close}})])]),t("el-main",{staticClass:"main no-padding"},[t("el-container",{staticClass:"full-height"},[t("el-aside",{staticClass:"aside-border",attrs:{width:"250px"}},[t("el-container",{staticClass:"full-height no-select"},[t("el-header",{staticClass:"no-padding search-header",class:{shadow:e.searchHeaderShadow},attrs:{height:"50px"}},[t("el-input",{attrs:{placeholder:"搜索 | 好友 or 群组","prefix-icon":"el-icon-search",clearable:"",size:"small"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),t("el-main",{staticClass:"no-padding"},[t("el-scrollbar",{ref:"scrollbar",staticClass:"full-height",attrs:{tag:"section",native:!1}},[t("ul",{staticClass:"friend-items no-select"},e._l(e.search,(function(a){return t("li",{key:a.id,on:{click:function(t){return e.triggerContacts(a)}}},[t("div",{staticClass:"avatar"},[t("el-avatar",{attrs:{size:25,src:a.avatar,shape:"square"}},[t("img",{attrs:{src:s("e366")}})])],1),t("div",{staticClass:"content"},[t("span",{staticClass:"lum-text-ellipsis"},[e._v(e._s(a.nickname))])]),t("div",{staticClass:"checkbox"},[t("i",{staticClass:"el-icon-success",class:{"icon-active":a.checked}})])])})),0)])],1)],1)],1),t("el-main",{staticClass:"no-padding"},[t("el-container",{staticClass:"full-height"},[t("el-header",{directives:[{name:"show",rawName:"v-show",value:!e.readonly,expression:"!readonly"}],attrs:{height:"50px"}},[t("div",{staticClass:"group-from no-select"},[t("label",[e._v("群名称*")]),t("p",[t("el-input",{attrs:{placeholder:"请输入群名称(必填)",size:"small",maxlength:20},model:{value:e.from.groupName,callback:function(t){e.$set(e.from,"groupName",t)},expression:"from.groupName"}})],1)])]),t("el-header",{class:{mt40:!e.readonly},attrs:{height:"40px"}},[t("el-divider",{staticClass:"no-select",attrs:{"content-position":"left"}},[t("span",{staticStyle:{color:"#c4c5c7"}},[e._v(" 邀请成员 ("+e._s(e.selected.length)+") ")])])],1),t("el-main",[t("el-scrollbar",{staticClass:"full-height",attrs:{native:!1,tag:"section"}},[t("ul",{staticClass:"friend-items no-select"},e._l(e.selected,(function(a){return t("li",{key:a.id,staticStyle:{padding:"0"},on:{click:function(t){return e.triggerContacts(a)}}},[t("div",{staticClass:"avatar"},[t("el-avatar",{attrs:{size:25,src:a.avatar,shape:"square"}},[t("img",{attrs:{src:s("e366")}})])],1),t("div",{staticClass:"content"},[t("span",{staticClass:"lum-text-ellipsis"},[e._v(e._s(a.nickname))])]),t("div",{staticClass:"checkbox"},[t("i",{staticClass:"el-icon-success",class:{"icon-active":a.checked}})])])})),0)])],1)],1)],1)],1)],1),t("el-footer",{staticClass:"no-padding footer",attrs:{height:"50px"}},[t("el-button",{attrs:{size:"small",plain:""},on:{click:e.close}},[e._v("取消")]),0==e.from.groupId?t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.createSubmit}},[e._v(" 创建群组"),t("span",{directives:[{name:"show",rawName:"v-show",value:e.selected.length,expression:"selected.length"}]},[e._v("("+e._s(e.selected.length)+")")])]):t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.inviteSubmit}},[e._v(" 立即邀请("+e._s(e.selected.length)+") ")])],1)],1)],1)},i=[],c=(s("14d9"),s("23ba")),n={name:"GroupLaunch",props:{groupId:{type:[String,Number],default:null}},data(){return{readonly:!1,from:{groupId:0,groupName:""},contacts:[],search:[],searchHeaderShadow:!1,keywords:"",isAvatarCropper:!1}},computed:{selected(){return this.contacts.filter(e=>e.checked)}},watch:{keywords(e){this.search=""==e?this.contacts:this.contacts.filter(e=>null!=e.nickname.match(this.keywords))},contacts(e){""==this.keywords&&(this.search=e)}},created(){this.groupId>0&&(this.readonly=!0,this.from.groupId=this.groupId),this.friendsApi()},mounted(){this.handleScroll()},methods:{triggerContacts(e){let t=this.contacts.findIndex(t=>t.id===e.id);this.contacts[t].checked=!this.contacts[t].checked},delContacts(e){let t=this.contacts.findIndex(t=>t.id===e.id);this.contacts[t].checked=!1},delAll(){this.contacts.forEach((e,t)=>{this.contacts[t].checked=!1})},close(){this.$emit("close")},getIds(){return this.selected.map(e=>e.id)},friendsApi(){Object(c["g"])({group_id:this.from.groupId}).then(e=>{if(200==e.code&&e.data){this.contacts=[];let t=e.data.map(e=>Object.assign(e,{nickname:e.friend_remark?e.friend_remark:e.nickname,checked:!1}));this.contacts.push(...t)}})},createSubmit(){let e={group_avatar:"",group_name:this.from.groupName,group_profile:"",uids:this.getIds().join(",")};""!=e.group_name?this.getIds().length<2?this.$message("群聊人数必须大于俩人！"):Object(c["a"])({avatar:"",name:this.from.groupName,profile:"",ids:this.getIds().join(",")}).then(e=>{200==e.code?this.$emit("create-success",e.data):this.$message("创建群聊失败！")}):this.$message("群聊名称不能为空！")},inviteSubmit(){Object(c["i"])({group_id:parseInt(this.from.groupId),ids:this.getIds().join(",")}).then(e=>{200==e.code?this.$emit("invite-success"):this.$message("邀请好友失败！")})},handleScroll(){let e=this.$refs.scrollbar.wrap;e.onscroll=()=>{this.searchHeaderShadow=0!=e.scrollTop}}}},l=n,r=(s("f895"),s("2877")),o=Object(r["a"])(l,a,i,!1,null,"00c77e60",null);t["a"]=o.exports},"9bf6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("MainLayout",{attrs:{idx:1}},[t("el-container",{staticClass:"full-height",attrs:{slot:"container"},slot:"container"},[t("el-aside",{staticClass:"aside-box",attrs:{width:"250px"}},[t("el-container",{staticClass:"full-height",attrs:{direction:"vertical"}},[t("el-header",{staticClass:"no-padding header",attrs:{height:"60px"}},[t("div",{staticClass:"from"},[t("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"搜索好友 / 群组",size:"small"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),t("div",{directives:[{name:"outside",rawName:"v-outside",value:e.closeSubMenu,expression:"closeSubMenu"}],staticClass:"tools"},[t("el-button",{attrs:{icon:"el-icon-plus",circle:"",plain:"",size:"small"},on:{click:function(t){e.submenu=!e.submenu}}}),t("transition",{attrs:{name:"el-zoom-in-top"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.submenu,expression:"submenu"}],staticClass:"tools-menu"},[t("div",{staticClass:"menu1-item",on:{click:function(t){return e.triggerSubMenu(1)}}},[e._v(" 创建群组 ")]),t("div",{staticClass:"menu1-item",on:{click:function(t){return e.triggerSubMenu(2)}}},[e._v(" 添加好友 ")])])])],1)]),t("el-main",{staticClass:"no-padding no-select"},e._l(e.menus,(function(s,a){return t("router-link",{key:a,attrs:{to:s.path}},[t("div",{staticClass:"menu-list",class:{selectd:e.$route.path==s.path},domProps:{textContent:e._s(s.name)}})])})),1)],1)],1),t("el-main",{staticClass:"no-padding ov-hidden"},[t("router-view")],1)],1)],1),e.launchGroupShow?t("GroupLaunch",{on:{close:function(t){e.launchGroupShow=!1},"create-success":e.launchSuccess}}):e._e(),t("UserSearch",{ref:"searchUsers"})],1)},i=[],c=s("6300"),n=s("7ee3"),l=s("1b68"),r=s("0e77"),o={name:"ContactsPage",components:{MainLayout:c["a"],GroupLaunch:n["a"],UserSearch:l["a"]},data(){return{launchGroupShow:!1,input:"",submenu:!1,menus:[{name:"新的联系人",path:"/contacts/apply"},{name:"我的好友",path:"/contacts/friends"},{name:"我的群组",path:"/contacts/groups"}]}},methods:{closeSubMenu(){this.submenu=!1},triggerSubMenu(e){this.closeSubMenu(),1==e?this.launchGroupShow=!0:this.$refs.searchUsers.open()},launchSuccess(e){Object(r["e"])(2,e.group_id)}}},u=o,d=(s("b7e8"),s("2877")),h=Object(d["a"])(u,a,i,!1,null,"5f0433b4",null);t["default"]=h.exports},b7e8:function(e,t,s){"use strict";s("fe12")},f5f6:function(e,t,s){},f895:function(e,t,s){"use strict";s("f5f6")},fe12:function(e,t,s){}}]);