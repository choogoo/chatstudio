(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cdb6fa8"],{"1b0a":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"lum-dialog-mask"},[e("el-container",{staticClass:"lum-dialog-box"},[e("el-header",{staticClass:"header no-select",attrs:{height:"60px"}},[e("p",[t._v("群公告("+t._s(t.items.length)+")")]),e("p",{staticClass:"tools"},[e("i",{staticClass:"el-icon-close",on:{click:function(e){return t.$emit("close")}}})])]),e("el-main",{staticClass:"main no-padding"},[0==t.loadStatus?[e("Loading",{attrs:{text:"正在努力加载中 ..."}})]:1==t.loadStatus&&0==t.items.length?[e("div",{staticClass:"loading"},[e("SvgNotData",{staticClass:"svg-icon"}),e("p",[t._v("暂无群公告")])],1)]:t._e(),2==t.loadStatus?[e("div",{staticClass:"loading"},[e("i",{staticClass:"el-icon-warning",staticStyle:{"font-size":"50px",color:"#ff5151"}}),e("p",[t._v(" 加载失败， "),e("a",{staticClass:"pointer",on:{click:t.loadNotices}},[t._v("点击重试")]),t._v("... ")])])]:[e("el-scrollbar",{staticClass:"full-height",attrs:{native:!1,tag:"section"}},t._l(t.items,(function(i,a){return e("div",{key:i.id,staticClass:"notice-item"},[e("div",{staticClass:"title"},[e("span",{staticClass:"left-title"},[t._v(t._s(i.title))]),e("span",{staticClass:"right-tools no-select",on:{click:function(e){return t.catNoticeDetail(a)}}},[t._v(" "+t._s(i.isShow?"收起":"展开")+" ")])]),e("p",{staticClass:"datetime"},[e("el-avatar",{attrs:{size:15,src:i.avatar}},[e("img",{attrs:{src:s("e366")}})]),e("span",{staticClass:"text nickname",on:{click:function(e){return t.$user(i.user_id)}}},[t._v(" "+t._s(i.nickname)+" ")]),e("span",{staticClass:"text"},[t._v("发表于 "+t._s(i.created_at))])],1),e("p",{staticClass:"content",class:{retract:!i.isShow}},[t._v(" "+t._s(i.content)+" ")])])})),0)]],2)],1)],1)},a=[],o=s("23ba"),n=s("04b3"),r=s("97b0"),l={name:"GroupNotice",props:{groupId:{type:[String,Number],default:null}},components:{SvgNotData:n["b"],Loading:r["a"]},data(){return{items:[],loadStatus:0}},created(){this.loadNotices()},methods:{loadNotices(){this.loadStatus=0,Object(o["e"])({group_id:this.groupId}).then(({code:t,data:e})=>{200==t?(this.items=e.rows.map(t=>(t.isShow=!1,t)),this.loadStatus=1):this.loadStatus=2}).catch(()=>{this.loadStatus=2})},catNoticeDetail(t){this.items[t].isShow=!this.items[t].isShow}}},c=l,d=(s("c172"),s("2877")),u=Object(d["a"])(c,i,a,!1,null,"699f7dd0",null);e["a"]=u.exports},"2bc1":function(t,e,s){},3618:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("el-container",{staticClass:"container"},[e("el-header",{staticClass:"header"},[e("span",[t._v("群信息")]),e("el-tooltip",{attrs:{content:"发送消息",placement:"top"}},[e("i",{staticClass:"icon-send el-icon-chat-line-square",on:{click:t.sendGroup}})]),e("i",{staticClass:"el-icon-close",on:{click:function(e){return t.$emit("close")}}})],1),e("el-main",{staticClass:"main lum-scrollbar"},[e("div",{staticClass:"list-item flex"},[e("p",[e("span",[t._v("群名称：")]),e("span",{staticClass:"group-setting-title"},[t._v(t._s(t.detail.groupName))])]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.detail.is_manager,expression:"detail.is_manager"}],staticClass:"more",on:{click:function(e){t.isShowManager=!0}}},[t._v("管理 ")])]),e("div",{staticClass:"list-item"},[e("span",[t._v("群主：")]),e("span",{staticClass:"group-boss-name"},[t._v(t._s(t.detail.groupOwner))])]),e("div",{staticClass:"list-item"},[e("span",[t._v("我的群昵称：")]),t.isEditRemark?e("span",[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editRemarkText,expression:"editRemarkText",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"edit-input",attrs:{type:"text"},domProps:{value:t.editRemarkText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editRemark.apply(null,arguments)},input:function(e){e.target.composing||(t.editRemarkText=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("span",{staticClass:"input-submit",on:{click:t.editRemark}},[t._v("确认")])]):e("span",{staticClass:"edit-visit-card"},[e("span",[t._v(" "+t._s(t.detail.visitCard)+" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.detail.visitCard,expression:"!detail.visitCard"}],staticStyle:{"font-size":"12px"}},[t._v(" 添加群名片 ")])]),e("i",{staticClass:"el-icon-edit-outline edit-remark-icon",on:{click:function(e){t.isEditRemark=!0,t.editRemarkText=t.detail.visitCard}}})])]),e("div",{staticClass:"list-item flex"},[e("span",[t._v("消息免打扰：")]),e("el-switch",{attrs:{"inactive-color":"#e0d6d6",disabled:t.disturbDisabled},on:{change:t.editDisturb},model:{value:t.detail.is_disturb,callback:function(e){t.$set(t.detail,"is_disturb",e)},expression:"detail.is_disturb"}})],1),e("div",{staticClass:"list-item flex"},[e("span",[t._v("全员禁言：")]),e("el-switch",{attrs:{"inactive-color":"#e0d6d6"},model:{value:t.detail.no_message,callback:function(e){t.$set(t.detail,"no_message",e)},expression:"detail.no_message"}})],1),e("div",{staticClass:"list-item"},[e("span",[t._v("群成员：")]),e("span",[t._v(t._s(t.members.length)+" 人")])]),e("div",{staticClass:"list-item-tips"},[t._v("群主已开启“新成员入群可查看所有聊天记录”")]),e("div",{staticClass:"list-item"},[t._v("群简介")]),e("div",{staticClass:"list-item-tips"},[t._v(" "+t._s(t.detail.profile?t.detail.profile:"暂无群简介")+" ")]),e("div",{staticClass:"list-item flex"},[e("span",[t._v("群公告")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.detail.group_notice,expression:"detail.group_notice"}],staticClass:"more",on:{click:function(e){t.isShowGroupNotice=!0}}},[t._v("更多 ")])]),e("div",{staticClass:"list-item-tips group-notice"},[t.detail.group_notice.title?e("span",[e("b",[t._v("#"+t._s(t.detail.group_notice.title)+"#")]),e("br"),t._v(" "+t._s(t.detail.group_notice.content)+" ")]):e("span",[t._v("暂无群公告")])]),e("div",{staticClass:"list-item"},[e("p",{staticClass:"group-invite",on:{click:t.addGroupMembers}},[e("i",{staticClass:"el-icon-plus"}),e("span",[t._v(" 邀请好友")])])]),e("div",{staticClass:"list-item"},[e("div",{staticClass:"member-box"},[e("div",{staticClass:"view-box"},[e("i",{staticClass:"iconfont icon-sousuo i-sousuo"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{type:"text",placeholder:"搜索群成员"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}})]),e("el-row",{staticClass:"row-header"},[e("el-col",{attrs:{span:11}},[t._v("昵称")]),e("el-col",{attrs:{span:8}},[t._v("名片")]),e("el-col",{attrs:{span:5}},[t._v("性别")])],1),0==t.searchs.length?[e("el-row",{staticClass:"row-items"},[e("el-col",{attrs:{span:24}},[e("p",{staticStyle:{"text-align":"center"}},[t._v("无数据")])])],1)]:t._l(t.searchs,(function(s){return e("el-row",{key:s.user_id,staticClass:"row-items",nativeOn:{click:function(e){return t.openUserDetail(s.user_id)}}},[e("el-col",{attrs:{span:11}},[e("img",{attrs:{width:"20px",src:s.avatar,onerror:t.$store.state.detaultAvatar}}),e("span",{staticClass:"nickname"},[t._v(t._s(s.nickname))])]),e("el-col",{attrs:{span:8}},[e("span",[t._v(t._s(s.user_card?s.user_card:"-"))])]),e("el-col",{attrs:{span:5}},[1==s.gender?e("span",[t._v("男")]):2==s.gender?e("span",[t._v("女")]):e("span",[t._v("未知")])])],1)}))],2)])]),e("el-footer",{staticClass:"footer"},[t.detail.is_manager?e("button",{on:{click:t.dismiss}},[t._v("解散群聊")]):e("button",{on:{click:function(e){t.isShowSignout=!0}}},[t._v("退出该群聊")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSignout,expression:"isShowSignout"}],staticClass:"signout-box no-select"},[e("p",{directives:[{name:"show",rawName:"v-show",value:0==t.signoutStatus,expression:"signoutStatus == 0"}]},[t._v("您确认退出当前群聊吗？")]),e("p",{directives:[{name:"show",rawName:"v-show",value:0==t.signoutStatus,expression:"signoutStatus == 0"}]},[t._v("退群后群聊信息将不能查看")]),e("p",{directives:[{name:"show",rawName:"v-show",value:0==t.signoutStatus,expression:"signoutStatus == 0"}],staticClass:"signout-btn"},[e("button",{on:{click:t.signout}},[t._v("确认")]),e("button",{on:{click:function(e){t.isShowSignout=!1}}},[t._v("取消")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:1==t.signoutStatus,expression:"signoutStatus == 1"}],staticClass:"signout-btn mt38"},[e("span",{staticStyle:{color:"#ccc"}},[e("i",{staticClass:"el-icon-loading"}),t._v(" 正在退出群聊... ")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:2==t.signoutStatus,expression:"signoutStatus == 2"}],staticClass:"signout-btn mt38"},[e("span",{staticStyle:{color:"#cccccc"}},[t._v("退出群聊失败，请3(s)后再试...")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:3==t.signoutStatus,expression:"signoutStatus == 3"}],staticClass:"signout-btn mt38"},[e("span",{staticStyle:{color:"#339e19"}},[e("i",{staticClass:"iconfont icon-success_no_circle"}),t._v(" 已成功退出群聊... ")])])]),e("transition",{attrs:{name:"el-fade-in-linear"}},[t.inviteFriendBox?e("GroupLaunch",{attrs:{"group-id":t.groupId},on:{close:function(e){t.inviteFriendBox=!1},"invite-success":t.inviteSuccess}}):t._e()],1),e("transition",{attrs:{name:"el-fade-in-linear"}},[t.isShowManager?e("GroupManage",{attrs:{"group-id":t.groupId},on:{close:function(e){t.isShowManager=!1}}}):t._e()],1),e("transition",{attrs:{name:"el-fade-in-linear"}},[t.isShowGroupNotice?e("GroupNotice",{attrs:{"group-id":t.groupId},on:{close:function(e){t.isShowGroupNotice=!1}}}):t._e()],1)],1)},a=[],o=s("d800"),n=s("23ba"),r=s("7ee3"),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"lum-dialog-mask"},[e("div",{staticClass:"lum-dialog-box"},[e("el-container",{staticClass:"container"},[e("el-header",{staticClass:"header no-select",attrs:{height:"60px"}},[e("p",[t._v("群管理 ("+t._s(t.detail.group_name)+")")]),e("p",{staticClass:"tools"},[e("i",{staticClass:"el-icon-close",on:{click:function(e){return t.$emit("close")}}})])]),e("el-main",{staticClass:"main no-padding"},[e("el-container",{staticClass:"full-height"},[e("el-aside",{staticClass:"aside-border no-select",attrs:{width:"100px"}},t._l(t.menus,(function(s,i){return e("div",{key:s.name,staticClass:"menu-list",class:{selectd:t.tabIndex==i},domProps:{textContent:t._s(s.name)},on:{click:function(e){return t.triggerTab(i)}}})})),0),0==t.tabIndex?e("el-main",[e("el-row",[e("el-col",{attrs:{span:14}},[e("el-form",{ref:"groupForm",attrs:{model:t.form,rules:t.rules}},[e("el-form-item",{attrs:{label:"群名:",prop:"group_name"}},[e("el-input",{attrs:{size:"medium",placeholder:"请输入群名称",maxlength:"30","show-word-limit":""},model:{value:t.form.group_name,callback:function(e){t.$set(t.form,"group_name",e)},expression:"form.group_name"}})],1),e("el-form-item",{attrs:{label:"群描述:"}},[e("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"请输入群描述"},model:{value:t.form.profile,callback:function(e){t.$set(t.form,"profile",e)},expression:"form.profile"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small",loading:t.loading},on:{click:t.editGroup}},[t._v("修改信息 ")])],1)],1)],1),e("el-col",{staticClass:"avatar-col",attrs:{span:10}},[e("div",{staticClass:"avatar-box"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.form.avatar,expression:"form.avatar"}],attrs:{src:t.form.avatar}}),e("div",{staticClass:"upload-icon"},[e("i",{staticClass:"el-icon-upload"})]),e("div",{staticClass:"upload-mask",on:{click:function(e){t.isAvatarCropper=!0}}},[e("i",{staticClass:"el-icon-plus"})])]),e("p",{staticStyle:{"margin-top":"20px"}},[t._v("设置头像")])])],1)],1):1==t.tabIndex?e("el-main",{staticClass:"no-padding"},[e("el-container",{staticClass:"full-height"},[e("el-header",{staticClass:"notice-header",attrs:{height:"50px"}},[e("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",clearable:"","prefix-icon":"el-icon-search",placeholder:`搜索群成员 ( 共${t.members.length}人 )`},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),e("p",[e("el-button",{attrs:{plain:"",size:"small",icon:"el-icon-plus"},on:{click:function(e){t.inviteFriendBox=!0}}},[t._v("邀请好友 ")]),t.batchDelMember?e("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:t.deleteMembers}},[t._v("确认删除 ")]):e("el-button",{attrs:{plain:"",size:"small",icon:"el-icon-finished"},on:{click:function(e){t.batchDelMember=!0}}},[t._v("批量操作 ")])],1)],1),e("el-main",{staticClass:"no-padding"},[e("el-scrollbar",{staticClass:"full-height",attrs:{tag:"section",native:!1}},[e("div",{staticClass:"members"},t._l(t.searchs,(function(i){return e("div",{key:i.user_id,staticClass:"member no-select",class:{selectd:i.is_delete&&t.batchDelMember}},[e("div",{staticClass:"item-header"},[e("div",{staticClass:"avatar",on:{click:function(e){return t.catUserDetail(i)}}},[e("el-avatar",{attrs:{size:30,src:i.avatar}},[e("img",{attrs:{src:s("e366")}})]),e("span",{staticClass:"nickname",domProps:{textContent:t._s(i.nickname)}}),e("span",{directives:[{name:"show",rawName:"v-show",value:2==i.leader,expression:"member.leader == 2"}],staticClass:"larkc-tag"},[t._v(" 群主 ")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.batchDelMember&&2!=i.leader,expression:"batchDelMember && member.leader != 2"}],staticClass:"tools"},[e("i",{staticClass:"el-icon-success",class:{"is-delete":i.is_delete},on:{click:function(e){return e.stopPropagation(),t.triggerDelBtn(i)}}})])]),e("div",{staticClass:"profile"},[t._v(" 签名 | "+t._s(i.motto?i.motto:"未设置")+" ")])])})),0)])],1)],1)],1):2==t.tabIndex?e("el-main",{staticClass:"no-padding"},[e("el-container",{staticClass:"full-height"},[e("el-header",{staticClass:"notice-header",staticStyle:{"padding-left":"14px"},attrs:{height:"50px"}},[e("span",[t._v("群公告 ("+t._s(t.notice.items.length)+")")]),e("el-button",{attrs:{plain:"",size:"small",icon:"el-icon-plus"},on:{click:function(e){return t.showNoticeBox(0,"","")}}},[t._v(" 添加公告 ")])],1),e("el-main",{staticClass:"no-padding"},[e("el-scrollbar",{staticClass:"full-height",attrs:{tag:"section",native:!1}},[0==t.notice.items.length?e("div",{staticClass:"empty-notice"},[e("SvgNotData",{staticStyle:{width:"80px","margin-bottom":"10px"}}),e("span",[t._v("暂无群公告")])],1):e("div",{staticClass:"notices"},t._l(t.notice.items,(function(i,a){return e("div",{key:i.id,staticClass:"notice"},[e("div",{staticClass:"title"},[e("span",{staticClass:"left-title",domProps:{textContent:t._s(i.title)},on:{click:function(e){return t.showNoticeBox(i.id,i.title,i.content)}}}),e("span",{staticClass:"right-tools no-select",on:{click:function(e){return t.catNoticeDetail(a)}}},[t._v(t._s(i.isShow?"收起":"展开"))])]),e("p",{staticClass:"datetime"},[e("el-avatar",{attrs:{size:15,src:i.avatar}},[e("img",{attrs:{src:s("e366")}})]),e("span",{staticClass:"text nickname",domProps:{textContent:t._s(i.nickname)},on:{click:function(e){return t.$user(i.user_id)}}}),e("span",{staticClass:"text"},[t._v(" 发表于 "+t._s(i.created_at.substr(0,16))+" ")])],1),e("p",{staticClass:"content",class:{retract:!i.isShow},domProps:{textContent:t._s(i.content)}})])})),0)])],1)],1)],1):3==t.tabIndex?e("el-main",{staticClass:"no-padding"}):t._e()],1)],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.notice.isShowform,expression:"notice.isShowform"}],staticClass:"lum-dialog-mask animated fadeIn"},[e("div",{staticClass:"notice-box"},[e("h4",[t._v("编辑群公告")]),e("el-form",{ref:"noticeForm",attrs:{model:t.notice.form,rules:t.notice.rules}},[e("el-form-item",{attrs:{label:"标题",prop:"title"}},[e("el-input",{attrs:{size:"medium",placeholder:"请输入标题...",maxlength:"30","show-word-limit":""},model:{value:t.notice.form.title,callback:function(e){t.$set(t.notice.form,"title",e)},expression:"notice.form.title"}})],1),e("el-form-item",{attrs:{label:"详情",prop:"content"}},[e("el-input",{attrs:{type:"textarea",rows:"5",placeholder:"请输入公告详情...",maxlength:"500"},model:{value:t.notice.form.content,callback:function(e){t.$set(t.notice.form,"content",e)},expression:"notice.form.content"}})],1),e("el-form-item",{staticStyle:{"text-align":"right"}},[e("el-button",{attrs:{plain:"",size:"small"},on:{click:function(e){t.notice.isShowform=!1}}},[t._v(" 取消 ")]),e("el-button",{attrs:{type:"primary",size:"small",loading:t.notice.loading},on:{click:t.onSubmitNotice}},[t._v("提交 ")])],1)],1)],1)]),e("transition",{attrs:{name:"el-fade-in-linear"}},[t.isAvatarCropper?e("AvatarCropper",{on:{close:t.closeAvatarCropper}}):t._e()],1),e("transition",{attrs:{name:"el-fade-in-linear"}},[t.inviteFriendBox?e("GroupLaunch",{attrs:{"group-id":t.groupId},on:{close:function(e){t.inviteFriendBox=!1},"invite-success":t.inviteSuccess}}):t._e()],1)],1)},c=[],d=(s("14d9"),s("0016")),u=s("04b3"),m={name:"GroupManage",props:{groupId:{type:[String,Number],default:null}},components:{AvatarCropper:d["a"],GroupLaunch:r["a"],SvgNotData:u["b"]},data(){return{tabIndex:0,menus:[{name:"群信息"},{name:"群成员"},{name:"群公告"},{name:"群设置"}],loading:!1,form:{group_name:"",profile:"",avatar:""},rules:{group_name:[{required:!0,message:"用户昵称不能为空!",trigger:"blur"}]},detail:{group_name:"",profile:"",avatar:""},batchDelMember:!1,members:[],keywords:"",notice:{isShowform:!1,loading:!1,form:{id:0,title:"",content:""},rules:{title:[{required:!0,message:"标题不能为空!",trigger:"blur"}],content:[{required:!0,message:"详情不能为空",trigger:"blur"}]},items:[]},inviteFriendBox:!1,isAvatarCropper:!1}},computed:{searchs(){return""==this.keywords?this.members:this.members.filter(t=>null!=t.nickname.match(this.keywords)||null!=t.user_card.match(this.keywords))}},created(){this.loadGroupDetail(),this.loadMembers(),this.loadNotices()},methods:{loadGroupDetail(){Object(n["h"])({group_id:this.groupId}).then(({code:t,data:e})=>{200==t&&(this.form=this.detail={group_name:e.group_name,profile:e.profile,avatar:e.avatar})})},loadMembers(){Object(n["d"])({group_id:this.groupId}).then(t=>{200==t.code&&(this.members=t.data.map(t=>(t.is_delete=!1,t)))})},loadNotices(){Object(n["e"])({group_id:this.groupId}).then(t=>{200==t.code&&(this.notice.items=t.data.rows.map(t=>(t.isShow=!1,t)))})},editGroup(){this.$refs.groupForm.validate(t=>{if(!t)return!1;this.loading=!0,Object(n["b"])({group_id:parseInt(this.groupId),group_name:this.form.group_name,profile:this.form.profile,avatar:this.form.avatar}).then(t=>{200==t.code?(this.detail.group_name=this.form.group_name,this.detail.profile=this.form.profile,this.detail.avatar=this.form.avatar,this.$message({message:"信息修改成功...",type:"success"})):this.$message("信息修改失败...")}).finally(()=>{this.loading=!1})})},triggerTab(t){this.tabIndex=t},closeAvatarCropper(t,e=""){this.isAvatarCropper=!1,1==t&&""!=e&&(this.form.avatar=e)},showNoticeBox(t=0,e="",s=""){this.notice.isShowform=!0,this.notice.form.id=t,this.notice.form.title=e,this.notice.form.content=s},onSubmitNotice(){this.$refs.noticeForm.validate(t=>{if(!t)return!1;this.notice.loading=!0,Object(n["c"])({notice_id:parseInt(this.notice.form.id),group_id:parseInt(this.groupId),title:this.notice.form.title,content:this.notice.form.content,is_top:0,is_confirm:0}).then(t=>{200==t.code?(this.notice.isShowform=!1,this.loadNotices(),this.$notify({title:"消息提示",message:this.notice.form.id?"群公告修改成功...":"群公告添加成功...",type:"success"})):this.$notify({title:"消息提示",message:this.notice.form.id?"群公告修改失败...":"群公告添加失败...",type:"success"})}).catch(()=>{this.$notify({title:"消息提示",message:"网络异常，请稍后再试...",position:"bottom-right",type:"warning"})}).finally(()=>{this.notice.loading=!1})})},catNoticeDetail(t){this.notice.items[t].isShow=!this.notice.items[t].isShow},catUserDetail(t){this.$user(t.user_id)},triggerDelBtn(t){let e=this.members.findIndex(e=>e.id===t.id);this.members[e].is_delete=!this.members[e].is_delete},deleteMembers(){let t=[],e=[];this.members.forEach(s=>{s.is_delete&&(t.push(s.user_id),e.push(s.nickname))}),0!=t.length?this.$confirm(`您确定要将【 ${e.join("、")}】移出群聊?`,"温馨提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",dangerouslyUseHTMLString:!0}).then(()=>{Object(n["j"])({group_id:parseInt(this.groupId),members_ids:t.join(",")}).then(t=>{200==t.code&&(this.loadMembers(),this.$notify({title:"删除成功",message:"已成功将群成员移除群组...",type:"success"}),this.batchDelMember=!1)})}).catch(()=>{this.members.map(t=>t.is_delete=!1),this.batchDelMember=!1}):this.batchDelMember=!1},inviteSuccess(){this.inviteFriendBox=!1,this.loadMembers()}}},p=m,h=(s("72bf"),s("2877")),g=Object(h["a"])(p,l,c,!1,null,"deb78120",null),v=g.exports,f=s("1b0a"),_={name:"GroupPanel",components:{GroupLaunch:r["a"],GroupManage:v,GroupNotice:f["a"]},props:{groupId:{type:[String,Number],default:null}},data(){return{detail:{groupAvatar:"",groupId:0,groupName:"",groupOwner:"",profile:"",is_disturb:0,no_message:!1,visitCard:"",is_manager:!1,group_notice:[]},keywords:"",members:[],isEditRemark:!1,editRemarkText:"",inviteFriendBox:!1,isShowSignout:!1,signoutStatus:0,disturbDisabled:!1,isShowManager:!1,isShowGroupNotice:!1}},watch:{groupId:function(t){t>0&&(this.loadGroupDetail(),this.loadMembers())}},computed:{searchs(){return""==this.keywords?this.members:this.members.filter(t=>null!=t.nickname.match(this.keywords)||null!=t.user_card.match(this.keywords))}},created(){parseInt(this.groupId)>0&&(this.loadGroupDetail(),this.loadMembers())},methods:{loadMembers(){Object(n["d"])({group_id:this.groupId}).then(t=>{200==t.code&&(this.members=t.data,this.$emit("group-info",{group_id:this.members.groupId,members_num:this.members.length}))})},loadGroupDetail(){this.isEditRemark=!1,Object(n["h"])({group_id:this.groupId}).then(t=>{if(200==t.code){let e=t.data;this.detail.groupAvatar=e.avatar,this.detail.groupId=e.group_id,this.detail.userId=t.data.user_id,this.detail.groupName=e.group_name,this.detail.groupOwner=e.manager_nickname,this.detail.profile=e.profile,this.detail.is_disturb=1==e.is_disturb,this.detail.visitCard=e.visit_card,this.detail.is_manager=e.is_manager,e.notice&&(this.detail.group_notice=e.notice)}})},editDisturb(t){this.disturbDisabled=!0,Object(o["r"])({talk_type:2,receiver_id:parseInt(this.groupId),is_disturb:t?1:0}).then(e=>{200==e.code?this.$emit("disturb-change",{group_id:this.groupId,status:t?1:0}):this.detail.is_disturb=t?0:1}).catch(()=>{this.detail.is_disturb=t?0:1}).finally(()=>{this.disturbDisabled=!1})},editRemark(){""!=this.editRemarkText&&this.detail.visitCard!=this.editRemarkText?Object(n["l"])({group_id:parseInt(this.groupId),visit_card:this.editRemarkText}).then(t=>{200==t.code&&(this.isEditRemark=!1,this.detail.visitCard=this.editRemarkText)}):this.isEditRemark=!1},openUserDetail(t){this.$user(t)},addGroupMembers(){sessionStorage.setItem("invite_group_id",this.detail.groupId),this.inviteFriendBox=!0},inviteSuccess(){this.inviteFriendBox=!1,this.loadMembers(),this.$notify({title:"邀请成功",message:"好友已成功加入群组...",type:"success"})},sendGroup(){this.$emit("send-group",this.detail.groupId)},signout(){this.signoutStatus=1,Object(n["k"])({group_id:this.detail.groupId}).then(t=>{200==t.code?(this.signoutStatus=3,setTimeout(()=>{this.signoutStatus=0,this.isShowSignout=!1,this.$emit("quit-group")},1500)):(this.signoutStatus=2,setTimeout(()=>{this.signoutStatus=0},3e3))}).catch(()=>{this.signoutStatus=2,setTimeout(()=>{this.signoutStatus=0},3e3)})},dismiss(){this.$confirm("你确定要解散当前群组吗？此操作是不可恢复的！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,dangerouslyUseHTMLString:!0}).then(()=>{})}}},b=_,C=(s("f492"),Object(h["a"])(b,i,a,!1,null,"6a90d6f9",null));e["a"]=C.exports},"72bf":function(t,e,s){"use strict";s("edcd")},"7ee3":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"lum-dialog-mask"},[e("el-container",{directives:[{name:"outside",rawName:"v-outside",value:t.close,expression:"close"}],staticClass:"lum-dialog-box"},[e("el-header",{staticClass:"no-padding header no-select",attrs:{height:"60px"}},[e("p",[t._v(" "+t._s(0==t.from.groupId?"创建群组":"请选择需要邀请的好友")+" ")]),e("p",{staticClass:"tools"},[e("i",{staticClass:"el-icon-close",on:{click:t.close}})])]),e("el-main",{staticClass:"main no-padding"},[e("el-container",{staticClass:"full-height"},[e("el-aside",{staticClass:"aside-border",attrs:{width:"250px"}},[e("el-container",{staticClass:"full-height no-select"},[e("el-header",{staticClass:"no-padding search-header",class:{shadow:t.searchHeaderShadow},attrs:{height:"50px"}},[e("el-input",{attrs:{placeholder:"搜索 | 好友 or 群组","prefix-icon":"el-icon-search",clearable:"",size:"small"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),e("el-main",{staticClass:"no-padding"},[e("el-scrollbar",{ref:"scrollbar",staticClass:"full-height",attrs:{tag:"section",native:!1}},[e("ul",{staticClass:"friend-items no-select"},t._l(t.search,(function(i){return e("li",{key:i.id,on:{click:function(e){return t.triggerContacts(i)}}},[e("div",{staticClass:"avatar"},[e("el-avatar",{attrs:{size:25,src:i.avatar,shape:"square"}},[e("img",{attrs:{src:s("e366")}})])],1),e("div",{staticClass:"content"},[e("span",{staticClass:"lum-text-ellipsis"},[t._v(t._s(i.nickname))])]),e("div",{staticClass:"checkbox"},[e("i",{staticClass:"el-icon-success",class:{"icon-active":i.checked}})])])})),0)])],1)],1)],1),e("el-main",{staticClass:"no-padding"},[e("el-container",{staticClass:"full-height"},[e("el-header",{directives:[{name:"show",rawName:"v-show",value:!t.readonly,expression:"!readonly"}],attrs:{height:"50px"}},[e("div",{staticClass:"group-from no-select"},[e("label",[t._v("群名称*")]),e("p",[e("el-input",{attrs:{placeholder:"请输入群名称(必填)",size:"small",maxlength:20},model:{value:t.from.groupName,callback:function(e){t.$set(t.from,"groupName",e)},expression:"from.groupName"}})],1)])]),e("el-header",{class:{mt40:!t.readonly},attrs:{height:"40px"}},[e("el-divider",{staticClass:"no-select",attrs:{"content-position":"left"}},[e("span",{staticStyle:{color:"#c4c5c7"}},[t._v(" 邀请成员 ("+t._s(t.selected.length)+") ")])])],1),e("el-main",[e("el-scrollbar",{staticClass:"full-height",attrs:{native:!1,tag:"section"}},[e("ul",{staticClass:"friend-items no-select"},t._l(t.selected,(function(i){return e("li",{key:i.id,staticStyle:{padding:"0"},on:{click:function(e){return t.triggerContacts(i)}}},[e("div",{staticClass:"avatar"},[e("el-avatar",{attrs:{size:25,src:i.avatar,shape:"square"}},[e("img",{attrs:{src:s("e366")}})])],1),e("div",{staticClass:"content"},[e("span",{staticClass:"lum-text-ellipsis"},[t._v(t._s(i.nickname))])]),e("div",{staticClass:"checkbox"},[e("i",{staticClass:"el-icon-success",class:{"icon-active":i.checked}})])])})),0)])],1)],1)],1)],1)],1),e("el-footer",{staticClass:"no-padding footer",attrs:{height:"50px"}},[e("el-button",{attrs:{size:"small",plain:""},on:{click:t.close}},[t._v("取消")]),0==t.from.groupId?e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.createSubmit}},[t._v(" 创建群组"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.selected.length,expression:"selected.length"}]},[t._v("("+t._s(t.selected.length)+")")])]):e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.inviteSubmit}},[t._v(" 立即邀请("+t._s(t.selected.length)+") ")])],1)],1)],1)},a=[],o=(s("14d9"),s("23ba")),n={name:"GroupLaunch",props:{groupId:{type:[String,Number],default:null}},data(){return{readonly:!1,from:{groupId:0,groupName:""},contacts:[],search:[],searchHeaderShadow:!1,keywords:"",isAvatarCropper:!1}},computed:{selected(){return this.contacts.filter(t=>t.checked)}},watch:{keywords(t){this.search=""==t?this.contacts:this.contacts.filter(t=>null!=t.nickname.match(this.keywords))},contacts(t){""==this.keywords&&(this.search=t)}},created(){this.groupId>0&&(this.readonly=!0,this.from.groupId=this.groupId),this.friendsApi()},mounted(){this.handleScroll()},methods:{triggerContacts(t){let e=this.contacts.findIndex(e=>e.id===t.id);this.contacts[e].checked=!this.contacts[e].checked},delContacts(t){let e=this.contacts.findIndex(e=>e.id===t.id);this.contacts[e].checked=!1},delAll(){this.contacts.forEach((t,e)=>{this.contacts[e].checked=!1})},close(){this.$emit("close")},getIds(){return this.selected.map(t=>t.id)},friendsApi(){Object(o["g"])({group_id:this.from.groupId}).then(t=>{if(200==t.code&&t.data){this.contacts=[];let e=t.data.map(t=>Object.assign(t,{nickname:t.friend_remark?t.friend_remark:t.nickname,checked:!1}));this.contacts.push(...e)}})},createSubmit(){let t={group_avatar:"",group_name:this.from.groupName,group_profile:"",uids:this.getIds().join(",")};""!=t.group_name?this.getIds().length<2?this.$message("群聊人数必须大于俩人！"):Object(o["a"])({avatar:"",name:this.from.groupName,profile:"",ids:this.getIds().join(",")}).then(t=>{200==t.code?this.$emit("create-success",t.data):this.$message("创建群聊失败！")}):this.$message("群聊名称不能为空！")},inviteSubmit(){Object(o["i"])({group_id:parseInt(this.from.groupId),ids:this.getIds().join(",")}).then(t=>{200==t.code?this.$emit("invite-success"):this.$message("邀请好友失败！")})},handleScroll(){let t=this.$refs.scrollbar.wrap;t.onscroll=()=>{this.searchHeaderShadow=0!=t.scrollTop}}}},r=n,l=(s("f895"),s("2877")),c=Object(l["a"])(r,i,a,!1,null,"00c77e60",null);e["a"]=c.exports},"97b0":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"loading-content"},[t._m(0),e("p",[t._v(t._s(t.text))])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ant-spin ant-spin-lg ant-spin-spinning"},[e("span",{staticClass:"ant-spin-dot ant-spin-dot-spin"},[e("i",{staticClass:"ant-spin-dot-item"}),e("i",{staticClass:"ant-spin-dot-item"}),e("i",{staticClass:"ant-spin-dot-item"}),e("i",{staticClass:"ant-spin-dot-item"})])])}],o={name:"Loading",props:{text:{type:String,default:"数据加载中 ..."}}},n=o,r=(s("cec8"),s("2877")),l=Object(r["a"])(n,i,a,!1,null,"9393fa68",null);e["a"]=l.exports},c172:function(t,e,s){"use strict";s("d555")},cec8:function(t,e,s){"use strict";s("fcaf")},d555:function(t,e,s){},edcd:function(t,e,s){},f492:function(t,e,s){"use strict";s("2bc1")},f5f6:function(t,e,s){},f895:function(t,e,s){"use strict";s("f5f6")},fcaf:function(t,e,s){}}]);