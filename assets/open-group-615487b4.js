import{L as Y,dq as ee,dr as I,c1 as y,f as S,g as p,j as R,ce as oe,k as ne,d as F,P as re,n as V,c2 as te,s as j,A as se,z as b,D as le,q as T,h,_ as ae,dj as ie,H as ce,E as de,cd as ue,N as he,ds as ge,de as fe,dt as ve,du as pe,a0 as me,a1 as u,a4 as A,a5 as w,ai as W,aA as x,a7 as C,al as E,a8 as k,aC as be,aD as Ce,dv as _e,ae as N,a6 as L,aa as xe,$ as M,ah as Ie,ab as ye,ac as ke,ad as we,dw as Se,bq as ze,at as $e,au as Pe,a2 as Te}from"./index-6a9cab4f.js";import{_ as Le}from"./no-data-bde0995b.js";import{N as Ae,a as Ee}from"./FormItem-aeb54bcd.js";import{G as He}from"./GroupCard-0419a9d7.js";import{S as Re}from"./Search-214e7cb3.js";const We=e=>{const{lineHeight:o,borderRadius:n,fontWeightStrong:c,baseColor:l,dividerColor:g,actionColor:_,textColor1:d,textColor2:r,closeColorHover:a,closeColorPressed:i,closeIconColor:v,closeIconColorHover:f,closeIconColorPressed:t,infoColor:s,successColor:z,warningColor:$,errorColor:P,fontSize:H}=e;return Object.assign(Object.assign({},ee),{fontSize:H,lineHeight:o,titleFontWeight:c,borderRadius:n,border:`1px solid ${g}`,color:_,titleTextColor:d,iconColor:r,contentTextColor:r,closeBorderRadius:n,closeColorHover:a,closeColorPressed:i,closeIconColor:v,closeIconColorHover:f,closeIconColorPressed:t,borderInfo:`1px solid ${I(l,y(s,{alpha:.25}))}`,colorInfo:I(l,y(s,{alpha:.08})),titleTextColorInfo:d,iconColorInfo:s,contentTextColorInfo:r,closeColorHoverInfo:a,closeColorPressedInfo:i,closeIconColorInfo:v,closeIconColorHoverInfo:f,closeIconColorPressedInfo:t,borderSuccess:`1px solid ${I(l,y(z,{alpha:.25}))}`,colorSuccess:I(l,y(z,{alpha:.08})),titleTextColorSuccess:d,iconColorSuccess:z,contentTextColorSuccess:r,closeColorHoverSuccess:a,closeColorPressedSuccess:i,closeIconColorSuccess:v,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:t,borderWarning:`1px solid ${I(l,y($,{alpha:.33}))}`,colorWarning:I(l,y($,{alpha:.08})),titleTextColorWarning:d,iconColorWarning:$,contentTextColorWarning:r,closeColorHoverWarning:a,closeColorPressedWarning:i,closeIconColorWarning:v,closeIconColorHoverWarning:f,closeIconColorPressedWarning:t,borderError:`1px solid ${I(l,y(P,{alpha:.25}))}`,colorError:I(l,y(P,{alpha:.08})),titleTextColorError:d,iconColorError:P,contentTextColorError:r,closeColorHoverError:a,closeColorPressedError:i,closeIconColorError:v,closeIconColorHoverError:f,closeIconColorPressedError:t})},Be={name:"Alert",common:Y,self:We},je=Be,Ne=S("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[p("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),R("closable",[S("alert-body",[p("title",`
 padding-right: 24px;
 `)])]),p("icon",{color:"var(--n-icon-color)"}),S("alert-body",{padding:"var(--n-padding)"},[p("title",{color:"var(--n-title-text-color)"}),p("content",{color:"var(--n-content-text-color)"})]),oe({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),p("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),p("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),R("show-icon",[S("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),R("right-adjust",[S("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),S("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[p("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[ne("& +",[p("content",{marginTop:"9px"})])]),p("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),p("icon",{transition:"color .3s var(--n-bezier)"})]),Me=Object.assign(Object.assign({},V.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Fe=F({name:"Alert",inheritAttrs:!1,props:Me,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:n,inlineThemeDisabled:c,mergedRtlRef:l}=re(e),g=V("Alert","-alert",Ne,je,e,o),_=te("Alert",l,o),d=j(()=>{const{common:{cubicBezierEaseInOut:t},self:s}=g.value,{fontSize:z,borderRadius:$,titleFontWeight:P,lineHeight:H,iconSize:O,iconMargin:B,iconMarginRtl:G,closeIconSize:D,closeBorderRadius:q,closeSize:J,closeMargin:U,closeMarginRtl:K,padding:Z}=s,{type:m}=e,{left:Q,right:X}=se(B);return{"--n-bezier":t,"--n-color":s[b("color",m)],"--n-close-icon-size":D,"--n-close-border-radius":q,"--n-close-color-hover":s[b("closeColorHover",m)],"--n-close-color-pressed":s[b("closeColorPressed",m)],"--n-close-icon-color":s[b("closeIconColor",m)],"--n-close-icon-color-hover":s[b("closeIconColorHover",m)],"--n-close-icon-color-pressed":s[b("closeIconColorPressed",m)],"--n-icon-color":s[b("iconColor",m)],"--n-border":s[b("border",m)],"--n-title-text-color":s[b("titleTextColor",m)],"--n-content-text-color":s[b("contentTextColor",m)],"--n-line-height":H,"--n-border-radius":$,"--n-font-size":z,"--n-title-font-weight":P,"--n-icon-size":O,"--n-icon-margin":B,"--n-icon-margin-rtl":G,"--n-close-size":J,"--n-close-margin":U,"--n-close-margin-rtl":K,"--n-padding":Z,"--n-icon-margin-left":Q,"--n-icon-margin-right":X}}),r=c?le("alert",j(()=>e.type[0]),d,e):void 0,a=T(!0),i=()=>{const{onAfterLeave:t,onAfterHide:s}=e;t&&t(),s&&s()};return{rtlEnabled:_,mergedClsPrefix:o,mergedBordered:n,visible:a,handleCloseClick:()=>{var t;Promise.resolve((t=e.onClose)===null||t===void 0?void 0:t.call(e)).then(s=>{s!==!1&&(a.value=!1)})},handleAfterLeave:()=>{i()},mergedTheme:g,cssVars:c?void 0:d,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h(ue,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:n}=this,c={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?h("div",Object.assign({},ae(this.$attrs,c)),this.closable&&h(ie,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&h("div",{class:`${o}-alert__border`}),this.showIcon&&h("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},ce(n.icon,()=>[h(he,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return h(pe,null);case"info":return h(ve,null);case"warning":return h(fe,null);case"error":return h(ge,null);default:return null}}})])),h("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},de(n.header,l=>{const g=l||this.title;return g?h("div",{class:`${o}-alert-body__title`},g):null}),n.default&&h("div",{class:`${o}-alert-body__content`},n))):null}})}}),Ve=me("add-one",!1,function(e){return u("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[u("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),u("path",{d:"M24 16V32",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),u("path",{d:"M16 24L32 24",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Oe={style:{width:"100%","text-align":"right"}},Ge={__name:"GroupApply",props:{gid:{type:Number,default:0}},emits:["close"],setup(e,{emit:o}){const n=T(""),c=e,l=o,g=T(!0),_=T(!1),d=()=>{l("close")},r=()=>{_.value=!0;let a=_e({group_id:c.gid,remark:n.value});a.then(i=>{i.code==200?(window.$message.success("入群申请提交成功..."),d()):window.$message.warning(i.message)}),a.finally(()=>{_.value=!1})};return(a,i)=>{const v=A("n-button");return w(),W(k(Ce),{show:g.value,"onUpdate:show":i[1]||(i[1]=f=>g.value=f),preset:"card",title:"入群申请",class:"modal-radius",style:{"max-width":"450px"},"on-after-leave":d},{footer:x(()=>[C("div",Oe,[u(v,{type:"tertiary",onClick:d},{default:x(()=>[E(" 取消 ")]),_:1}),u(v,{type:"primary",class:"mt-l15",loading:_.value,disabled:!n.value,onClick:r},{default:x(()=>[E(" 提交 ")]),_:1},8,["loading","disabled"])])]),default:x(()=>[u(k(Ae),null,{default:x(()=>[u(k(Ee),{label:"申请备注",required:""},{default:x(()=>[u(k(be),{placeholder:"请填写申请备注",type:"textarea",value:n.value,"onUpdate:value":i[0]||(i[0]=f=>n.value=f)},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["show"])}}},De=e=>($e("data-v-65f1b5da"),e=e(),Pe(),e),qe={class:"el-container height100"},Je={class:"el-main"},Ue={class:"el-container is-vertical height100"},Ke={class:"el-header me-view-header bdr-b"},Ze={key:0,class:"el-main flex-center"},Qe=De(()=>C("img",{src:Le,alt:""},null,-1)),Xe={key:1,class:"el-main me-scrollbar me-scrollbar-thumb pd-10"},Ye={class:"cards"},eo=F({__name:"open-group",setup(e){const o=N({isShow:!1,groupId:0}),n=N({page:1,next:!1,name:"",loading:!1}),c=T([]),l=()=>{n.loading||(n.loading=!0,Se({page:n.page,name:n.name}).then(r=>{if(r.code==200){let a=r.data.items||[];n.page==1?c.value=a:c.value.push(...a),n.next=r.data.next}}).finally(()=>{n.loading=!1}))},g=()=>{n.page++,l()},_=ze(r=>{n.page=1,n.name=r,l()},300),d=r=>{o.isShow=!0,o.groupId=r.id};return l(),(r,a)=>{const i=A("n-icon"),v=A("n-input"),f=A("n-empty");return w(),L(M,null,[C("section",qe,[C("main",Je,[C("section",Ue,[C("header",Ke,[C("div",null,"公开群聊("+xe(c.value.length)+")",1),C("div",null,[u(v,{placeholder:"搜索",clearable:"",style:{width:"200px"},"on-input":k(_),round:""},{prefix:x(()=>[u(i,{component:k(Re)},null,8,["component"])]),_:1},8,["on-input"])])]),c.value.length==0?(w(),L("main",Ze,[u(f,{size:"200",description:"暂无相关数据"},{icon:x(()=>[Qe]),_:1})])):(w(),L("main",Xe,[u(k(Fe),{type:"info",bordered:!1,closable:"",class:"mt-b10"},{default:x(()=>[E(" 公开群聊可自行添加入群申请，待群主（管理员）同意后方可入群！ ")]),_:1}),C("div",Ye,[(w(!0),L(M,null,Ie(c.value,t=>(w(),W(He,{key:t.id,avatar:t.avatar,username:t.name,gender:t.gender,motto:t.profile,flag:t.count+"/"+t.max_num,onJoin:s=>d(t)},null,8,["avatar","username","gender","motto","flag","onJoin"]))),128)),ye(C("div",{class:"flex-center more",onClick:g},[u(i,{component:k(Ve)},null,8,["component"]),E("  加载更多 ")],512),[[ke,n.next]])])]))])])]),o.isShow?(w(),W(Ge,{key:0,gid:o.groupId,onClose:a[0]||(a[0]=t=>o.isShow=!1)},null,8,["gid"])):we("",!0)],64)}}});const lo=Te(eo,[["__scopeId","data-v-65f1b5da"]]);export{lo as default};