import{a0 as u,a1 as s,a2 as m,a4 as a,a5 as _,a6 as f,a7 as t,aa as o,ab as h,ac as k,a8 as i,cz as v,an as C}from"./index-6a9cab4f.js";const g=u("people-plus-one",!0,function(e){return s("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),s("path",{d:"M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38 13V25V13Z",fill:e.colors[1]},null),s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32 19H44H32Z",fill:e.colors[1]},null),s("path",{d:"M38 13V25M32 19H44",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});const y={class:"items-box"},M={class:"left-item"},j={class:"right-item"},w={class:"username"},x={class:"text-ellipsis"},b={class:"badge"},S={class:"flags text-ellipsis"},V={class:"helper"},B={class:"status"},L={class:"tool"},H={__name:"GroupCard",props:{avatar:{type:String,default:""},username:{type:String,default:""},gender:{type:Number,default:0},motto:{type:String,default:""},flag:{type:String,default:""},isMember:{type:Boolean,default:!1},isQiye:{type:Boolean,default:!1}},emits:["talk","join"],setup(e,{emit:l}){const c=l;return(z,n)=>{const r=a("im-avatar"),d=a("n-icon");return _(),f("div",y,[t("div",M,[s(r,{src:e.avatar,size:40,username:e.username},null,8,["src","username"])]),t("div",j,[t("div",w,[t("span",x,o(e.username||"-"),1),h(t("span",b,"企业",512),[[k,e.isQiye]])]),t("div",S,o(e.motto||"..."),1),t("div",V,[t("div",B,o(e.flag),1),t("div",L,[s(d,{component:e.isMember?i(v):i(g),onClick:n[0]||(n[0]=C(G=>c(e.isMember?"talk":"join"),["stop"]))},null,8,["component"])])])])])}}},Z=m(H,[["__scopeId","data-v-3f930975"]]);export{Z as G};