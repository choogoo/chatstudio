(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-391be96a"],{2934:function(e,s,t){"use strict";t.d(s,"b",(function(){return r})),t.d(s,"a",(function(){return a}));var i=t("b775");const r=e=>Object(i["b"])("/api/v1/common/sms-code",e),a=e=>Object(i["b"])("/api/v1/common/email-code",e)},"32ed":function(e,s,t){},"4af1":function(e,s,t){"use strict";t("6d2b")},"54f1":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e._self._c;return s("div",[s("div",{staticClass:"container"},[s("h4",[e._v("安全设置")]),s("el-row",{staticClass:"list-item",attrs:{type:"flex"}},[s("el-col",{staticClass:"left-col",attrs:{span:20}},[s("h4",[e._v("账户密码")]),s("p",[e._v("当前密码强度 ：中")])]),s("el-col",{staticClass:"right-col",attrs:{span:4}},[s("span",{staticClass:"action",on:{click:function(s){return e.$refs.changePasswrodRef.open()}}},[e._v(" 修改 ")])])],1),s("el-row",{staticClass:"list-item",attrs:{type:"flex"}},[s("el-col",{staticClass:"left-col",attrs:{span:20}},[s("h4",[e._v("绑定手机")]),s("p",[e._v("已绑定手机 ："+e._s(e.mobile))])]),s("el-col",{staticClass:"right-col",attrs:{span:4}},[s("span",{staticClass:"action",on:{click:function(s){return e.$refs.changeMobileRef.open()}}},[e._v("修改")])])],1),s("el-row",{staticClass:"list-item",attrs:{type:"flex"}},[s("el-col",{staticClass:"left-col",attrs:{span:20}},[s("h4",[e._v("绑定邮箱")]),s("p",[e._v("已绑定邮箱 ："+e._s(e.email))])]),s("el-col",{staticClass:"right-col",attrs:{span:4}},[s("span",{staticClass:"action",on:{click:function(s){return e.$refs.changeEmailRef.open()}}},[e._v("修改")])])],1)],1),s("UserEditPassword",{ref:"changePasswrodRef"}),s("UserEditMobile",{ref:"changeMobileRef",on:{success:e.getUserDetail}}),s("UserEditEmail",{ref:"changeEmailRef",on:{success:e.getUserDetail}})],1)},r=[],a=function(){var e=this,s=e._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"lum-dialog-mask"},[s("el-container",{directives:[{name:"outside",rawName:"v-outside",value:e.close,expression:"close"}],staticClass:"lum-dialog-box"},[s("el-header",{staticClass:"header",attrs:{height:"50px"}},[s("p",[e._v("修改密码")]),s("p",{staticClass:"tools"},[s("i",{staticClass:"el-icon-close",on:{click:e.close}})])]),s("el-main",{staticClass:"main"},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"top"}},[s("el-form-item",{attrs:{prop:"old_password",label:"旧密码"}},[s("el-input",{staticClass:"cuborder-radius no-border",attrs:{type:"password",size:"medium",placeholder:"请填写旧密码"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.old_password,callback:function(s){e.$set(e.form,"old_password",s)},expression:"form.old_password"}})],1),s("el-form-item",{attrs:{prop:"new_password",label:"新密码"}},[s("el-input",{staticClass:"cuborder-radius no-border",attrs:{type:"password",size:"medium",placeholder:"请填写新的密码"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.new_password,callback:function(s){e.$set(e.form,"new_password",s)},expression:"form.new_password"}})],1),s("el-form-item",{attrs:{prop:"new_password2",label:"重复密码"}},[s("el-input",{staticClass:"cuborder-radius no-border",attrs:{size:"medium",type:"password",placeholder:"请再次填写新密码"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.new_password2,callback:function(s){e.$set(e.form,"new_password2",s)},expression:"form.new_password2"}})],1),s("el-form-item",{staticStyle:{"margin-top":"40px"}},[s("el-button",{staticClass:"submit-btn",attrs:{type:"primary",size:"medium",loading:e.loading},on:{click:function(s){return e.onSubmit("form")}}},[e._v("提交 ")])],1)],1)],1)],1)],1)},o=[],l=(t("d9e2"),t("c24f")),n={name:"UserEditPassword",data(){var e=(e,s,t)=>{""===s?t(new Error("请再次输入密码")):s!==this.form.new_password?t(new Error("两次输入密码不一致!")):t()};return{loading:!1,form:{old_password:"",new_password:"",new_password2:""},rules:{old_password:[{required:!0,message:"旧密码不能为空!",trigger:"blur"}],new_password:[{required:!0,message:"新密码不能为空!",trigger:"blur"}],new_password2:[{required:!0,validator:e,trigger:"blur"}]},isShow:!1}},methods:{open(){this.$refs["form"].resetFields(),this.isShow=!0},close(){this.isShow=!1},onSubmit(e){this.$refs[e].validate(e=>{if(!e)return!1;this.changePassword()})},changePassword(){this.loading=!0,Object(l["e"])({old_password:this.form.old_password,new_password:this.form.new_password}).then(e=>{200==e.code?(this.$refs["form"].resetFields(),this.$notify({title:"成功",message:"密码修改成功...",type:"success"})):this.$message(e.message),this.loading=!1}).catch(()=>{this.loading=!1})}}},c=n,m=(t("5d1d"),t("2877")),d=Object(m["a"])(c,a,o,!1,null,"25f1eae8",null),u=d.exports,f=function(){var e=this,s=e._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"lum-dialog-mask"},[s("el-container",{directives:[{name:"outside",rawName:"v-outside",value:e.close,expression:"close"}],staticClass:"lum-dialog-box"},[s("el-header",{staticClass:"header",attrs:{height:"50px"}},[s("p",[e._v("绑定手机")]),s("p",{staticClass:"tools"},[s("i",{staticClass:"close-btn el-icon-close",on:{click:e.close}})])]),s("el-main",{staticClass:"main"},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"top"}},[s("el-form-item",{attrs:{prop:"username",label:"手机号"}},[s("el-input",{staticClass:"cuborder-radius",attrs:{maxlength:"11",size:"medium",placeholder:"请填写新手机号"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.username,callback:function(s){e.$set(e.form,"username",s)},expression:"form.username"}})],1),s("el-form-item",{attrs:{prop:"sms_code",label:"验证码"}},[s("el-input",{staticClass:"cuborder-radius",staticStyle:{width:"265px"},attrs:{maxlength:"6",size:"medium",placeholder:"验证码"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.sms_code,callback:function(s){e.$set(e.form,"sms_code",s)},expression:"form.sms_code"}}),e.smsLock?s("div",{staticClass:"send-code-btn disable"},[e._v("正在发送 ...")]):0==e.smsLock&&null==e.smsLockObj.time?s("div",{staticClass:"send-code-btn",on:{click:e.sendSms}},[e._v(" 获取验证码 ")]):s("div",{staticClass:"send-code-btn disable"},[e._v(" 重新发送("+e._s(e.smsLockObj.time)+"s) ")])],1),s("el-form-item",{attrs:{prop:"password",label:"密码"}},[s("el-input",{staticClass:"cuborder-radius no-border",attrs:{type:"password",size:"medium",placeholder:"登录密码验证"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}})],1),s("el-form-item",{staticStyle:{"margin-top":"40px"}},[s("el-button",{staticClass:"submit-btn",attrs:{type:"primary",size:"medium",loading:e.loading},on:{click:function(s){return e.onSubmit("form")}}},[e._v("提交 ")])],1)],1)],1)],1)],1)},p=[],h=t("61f7"),b=t("f977"),w=t("2934"),g={name:"UserEditMobile",data(){let e=(e,s,t)=>{""===s?t(new Error("登录手机号不能为空！")):Object(h["b"])(s)?t():t(new Error("登录手机号格式不正确！"))};return{loading:!1,form:{username:"",password:"",sms_code:""},rules:{username:[{required:!0,validator:e,trigger:"blur"},{min:11,max:11,message:"手机号格式不正确!",trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空!",trigger:"blur"}],sms_code:[{required:!0,message:"验证码不能为空!",trigger:"blur"}]},smsLock:!1,smsLockObj:null,isShow:!1}},created(){this.smsLockObj=new b["a"]("EDIT_MOBILE_SMS",120)},destroyed(){this.smsLockObj.clearInterval()},methods:{open(){this.$refs["form"].resetFields(),this.isShow=!0},close(){this.isShow=!1},sendSms(){if(!Object(h["b"])(this.form.username))return this.$refs.form.validateField("username"),!1;this.smsLock=!0,Object(w["b"])({channel:"change_account",mobile:this.form.username}).then(e=>{200===e.code?(this.smsLockObj.start(),e.data.is_debug&&(this.form.sms_code=e.data.sms_code,setTimeout(()=>{this.$notify({title:"提示",message:"已自动填充验证码",type:"success"}),this.form.sms_code=e.data.sms_code},500))):this.$notify({title:"提示",message:e.message})}).finally(()=>{this.smsLock=!1})},onSubmit(e){this.$refs[e].validate(e=>{if(!e)return!1;this.changeMobile()})},changeMobile(){this.loading=!0,Object(l["d"])({mobile:this.form.username,sms_code:this.form.sms_code,password:this.form.password}).then(e=>{200==e.code?(this.$refs["form"].resetFields(),this.$notify({title:"成功",message:"更换手机号成功...",type:"success"}),this.$emit("success"),this.close()):this.$message(e.message)}).finally(()=>{this.loading=!1})}}},k=g,v=(t("9a47"),Object(m["a"])(k,f,p,!1,null,"2869830a",null)),_=v.exports,y=function(){var e=this,s=e._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"lum-dialog-mask"},[s("el-container",{directives:[{name:"outside",rawName:"v-outside",value:e.close,expression:"close"}],staticClass:"lum-dialog-box"},[s("el-header",{staticClass:"header",attrs:{height:"50px"}},[s("p",[e._v("绑定邮箱")]),s("p",{staticClass:"tools"},[s("i",{staticClass:"el-icon-close",on:{click:e.close}})])]),s("el-main",{staticClass:"main"},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"top"}},[s("el-form-item",{attrs:{prop:"email",label:"邮箱"}},[s("el-input",{staticClass:"cuborder-radius",attrs:{size:"medium",placeholder:"请填写邮箱地址"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.email,callback:function(s){e.$set(e.form,"email",s)},expression:"form.email"}})],1),s("el-form-item",{attrs:{prop:"sms_code",label:"验证码"}},[s("el-input",{staticClass:"cuborder-radius",staticStyle:{width:"265px"},attrs:{size:"medium",maxlength:"6",placeholder:"邮件验证码"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.sms_code,callback:function(s){e.$set(e.form,"sms_code",s)},expression:"form.sms_code"}}),e.smsLock?s("div",{staticClass:"code-btn disable"},[e._v("正在发送 ...")]):0==e.smsLock&&null==e.smsLockObj.time?s("div",{staticClass:"code-btn",on:{click:e.sendSms}},[e._v(" 获取验证码 ")]):s("div",{staticClass:"code-btn disable"},[e._v(" 重新发送("+e._s(e.smsLockObj.time)+"s) ")])],1),s("el-form-item",{attrs:{prop:"password",label:"密码"}},[s("el-input",{staticClass:"cuborder-radius no-border",attrs:{type:"password",size:"medium",placeholder:"登录密码验证"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}})],1),s("el-form-item",{staticStyle:{"margin-top":"40px"}},[s("el-button",{staticClass:"submit-btn",attrs:{type:"primary",size:"medium",loading:e.loading},on:{click:function(s){return e.onSubmit("form")}}},[e._v("提交 ")])],1)],1)],1)],1)],1)},C=[],O={name:"UserEditEmail",data(){return{loading:!1,form:{email:"",password:"",sms_code:""},rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空!",trigger:"blur"}],sms_code:[{required:!0,message:"验证码不能为空!",trigger:"blur"}]},smsLock:!1,smsLockObj:null,isShow:!1}},created(){this.smsLockObj=new b["a"]("CHANGE_EMAIL_SMS",120)},destroyed(){this.smsLockObj.clearInterval()},methods:{open(){this.$refs["form"].resetFields(),this.isShow=!0},close(){this.isShow=!1},sendSms(){if(!Object(h["a"])(this.form.email))return this.$refs.form.validateField("email"),!1;this.smsLock=!0,Object(w["a"])({email:this.form.email}).then(e=>{200==e.code&&this.smsLockObj.start()}).finally(()=>{this.smsLock=!1})},onSubmit(e){this.$refs[e].validate(e=>{if(!e)return!1;this.changeEmail()})},changeEmail(){this.loading=!0,Object(l["c"])({email:this.form.email,email_code:this.form.sms_code,password:this.form.password}).then(e=>{200==e.code?(this.$refs["form"].resetFields(),this.$emit("success"),this.close(),this.$notify({title:"成功",message:"修改邮箱成功...",type:"success"})):this.$message(e.message)}).finally(()=>{this.loading=!1})}}},S=O,x=(t("4af1"),Object(m["a"])(S,y,C,!1,null,"e5e7c610",null)),$=x.exports,E={name:"SecurityPage",components:{UserEditPassword:u,UserEditMobile:_,UserEditEmail:$},data(){return{mobile:"",email:""}},created(){this.getUserDetail()},methods:{getUserDetail(){Object(l["a"])().then(e=>{200==e.code&&(this.mobile=e.data.mobile.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),this.email=e.data.email)})}}},j=E,L=(t("56e8"),Object(m["a"])(j,i,r,!1,null,"17316d6a",null));s["default"]=L.exports},"56e8":function(e,s,t){"use strict";t("32ed")},"5d1d":function(e,s,t){"use strict";t("d5dc")},"61f7":function(e,s,t){"use strict";t.d(s,"a",(function(){return i})),t.d(s,"b",(function(){return r}));const i=e=>/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e),r=e=>/^1[0-9]{10}$/.test(e)},"6d2b":function(e,s,t){},"9a47":function(e,s,t){"use strict";t("f1e9")},d5dc:function(e,s,t){},f1e9:function(e,s,t){},f977:function(e,s,t){"use strict";var i=t("ade3");class r{constructor(e,s=60){Object(i["a"])(this,"time",null),Object(i["a"])(this,"timer",null),Object(i["a"])(this,"lockTime",60),Object(i["a"])(this,"lockName",""),this.lockTime=s,this.lockName="SMSLOCK_"+e,this.init()}start(e=null){this.time=null==e||e>=this.lockTime?this.lockTime:e,this.clearInterval(),this.timer=setInterval(()=>{if(0==this.time)return this.clearInterval(),this.time=null,void localStorage.removeItem(this.lockName);this.time--,localStorage.setItem(this.lockName,this.getTime()+this.time)},1e3)}init(){let e=localStorage.getItem(this.lockName);if(null==e)return;let s=e-this.getTime();s>0?this.start(s):localStorage.removeItem(this.lockName)}getTime(){return Math.floor((new Date).getTime()/1e3)}clearInterval(){clearInterval(this.timer)}}s["a"]=r}}]);