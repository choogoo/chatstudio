import{b as d,a5 as s,a6 as n,a7 as e,a8 as c,aa as l,$ as m,ah as u,ab as _,ac as h}from"./index-6a9cab4f.js";/* empty css                    */const x={class:"im-message-sys-text"},k={class:"sys-text"},b=e("span",null,"创建了群聊，并邀请了",-1),v=["onClick"],p={__name:"SysGroupCreateMessage",props:{extra:Object,data:Object},setup(t){const r=d("$user");return(g,o)=>(s(),n("div",x,[e("div",k,[e("a",{onClick:o[0]||(o[0]=a=>c(r)(t.extra.owner_id))},l(t.extra.owner_name),1),b,(s(!0),n(m,null,u(t.extra.members,(a,i)=>(s(),n(m,{key:i},[e("a",{onClick:w=>c(r)(a.user_id)},l(a.nickname),9,v),_(e("em",null,"、",512),[[h,i<t.extra.members.length-1]])],64))),128))])]))}};export{p as default};