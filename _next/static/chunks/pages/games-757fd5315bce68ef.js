(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{5337:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games",function(){return a(6383)}])},6383:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var i=a(5893),n=a(776),s=a(8911),r=a(7306),l=a(5059),o=(0,l.G)((e,t)=>(0,i.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));o.displayName="HStack";var c=a(6877),d=a(5227),u=a(1628),g=a(3179),m=a(6384),[p,x]=(0,d.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),j=(0,l.G)((e,t)=>{let a=(0,u.jC)("Tag",e),n=(0,g.Lr)(e),s={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...a.container};return(0,i.jsx)(p,{value:a,children:(0,i.jsx)(m.m.span,{ref:t,...n,__css:s})})});j.displayName="Tag",(0,l.G)((e,t)=>{let a=x();return(0,i.jsx)(m.m.span,{ref:t,noOfLines:1,...e,__css:a.label})}).displayName="TagLabel",(0,l.G)((e,t)=>(0,i.jsx)(c.J,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e})).displayName="TagLeftIcon",(0,l.G)((e,t)=>(0,i.jsx)(c.J,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e})).displayName="TagRightIcon";var f=e=>(0,i.jsx)(c.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});f.displayName="TagCloseIcon",(0,l.G)((e,t)=>{let{isDisabled:a,children:n,...s}=e,r=x(),l={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...r.closeButton};return(0,i.jsx)(m.m.button,{ref:t,"aria-label":"close",...s,type:"button",disabled:a,__css:l,children:n||(0,i.jsx)(f,{})})}).displayName="TagCloseButton";var h=a(204),y=a(1708),w=a(8307),_=a(7294);function v(e){let{title:t,subtitle:a,tags:l,players:d,time:u,age:g,available:m,total:p}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.P,{children:[(0,i.jsx)(s.x,{fontSize:"md",children:t}),a&&(0,i.jsx)(s.x,{fontSize:"sm",mt:-1.5,color:"gray.400",children:a}),(0,i.jsx)(o,{mt:1,children:l.map(e=>(0,i.jsx)(j,{size:"sm",fontWeight:"md",colorScheme:"blue",px:2,py:0,children:e},e))})]}),(0,i.jsxs)(r.K,{spacing:1,children:[(0,i.jsxs)(h.k,{alignItems:"center",gap:1,children:[(0,i.jsx)(c.J,{as:w.q6M,w:4,h:4}),(0,i.jsx)(s.x,{fontSize:"xs",display:"inline",children:d})]}),(0,i.jsxs)(h.k,{alignItems:"center",gap:1,children:[(0,i.jsx)(c.J,{as:w.Vqd,w:4,h:4}),(0,i.jsxs)(s.x,{fontSize:"xs",display:"inline",children:[u,"m"]})]})]}),(0,i.jsxs)(r.K,{spacing:1,children:[(0,i.jsxs)(h.k,{alignItems:"center",gap:1,children:[(0,i.jsx)(c.J,{as:w.Y1i,w:4,h:4}),(0,i.jsxs)(s.x,{fontSize:"xs",display:"inline",children:[g,"+"]})]}),(0,i.jsxs)(h.k,{alignItems:"center",gap:1,children:[(0,i.jsx)(c.J,{as:w.WCS,w:4,h:4}),(0,i.jsxs)(s.x,{fontSize:"xs",display:"inline",children:[m,"/",p]})]})]})]})}function C(){let[e,t]=(0,_.useState)([]);return(0,_.useEffect)(()=>{fetch("https://dejgre.lunarii.org/rest/games/?format=json").then(e=>e.json()).then(e=>{let a=(e,t)=>e.title.localeCompare(t.title),i=e.sort(a).filter(e=>e.quantity>0);t(i)}).catch(console.error)},[]),(0,i.jsxs)(y.r,{p:4,templateColumns:"1fr auto auto",columnGap:2,rowGap:4,alignItems:"center",children:[(0,i.jsx)(v,{title:"Zombicide",subtitle:"Zielona Horda",tags:["figurkowa","kooperacja"],players:"1+",time:120,age:16,available:0,total:0}),(0,i.jsx)(v,{title:"Carcassone",subtitle:"Karczmy i Katedry",tags:["figurkowa","kooperacja"],players:"1+",time:90,age:16,available:0,total:0}),(0,i.jsx)(v,{title:"7 Cud\xf3w Świata",subtitle:"Pojedynek o Panteon",tags:["figurkowa","kooperacja"],players:"1+",time:45,age:50,available:0,total:0}),(0,i.jsx)("hr",{})," ",(0,i.jsx)("hr",{})," ",(0,i.jsx)("hr",{}),e.map(e=>(0,i.jsx)(v,{title:e.title,tags:[],available:e.quantity-e.lended,total:e.quantity,players:"".concat(e.players_from,"-").concat(e.players_to),time:e.avg_play_time,age:e.age},e.id))]})}},1708:function(e,t,a){"use strict";a.d(t,{r:function(){return r}});var i=a(5059),n=a(6384),s=a(5893),r=(0,i.G)(function(e,t){let{templateAreas:a,gap:i,rowGap:r,columnGap:l,column:o,row:c,autoFlow:d,autoRows:u,templateRows:g,autoColumns:m,templateColumns:p,...x}=e;return(0,s.jsx)(n.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:a,gridGap:i,gridRowGap:r,gridColumnGap:l,gridAutoColumns:m,gridColumn:o,gridRow:c,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:g,gridTemplateColumns:p},...x})});r.displayName="Grid"},776:function(e,t,a){"use strict";a.d(t,{P:function(){return c}});var i=a(5059),n=a(6384),s=a(888),r=a(3951),l=a(5893);function o(e){return(0,r.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var c=(0,i.G)(function(e,t){let{area:a,colSpan:i,colStart:r,colEnd:c,rowEnd:d,rowSpan:u,rowStart:g,...m}=e,p=(0,s.oA)({gridArea:a,gridColumn:o(i),gridRow:o(u),gridColumnStart:r,gridColumnEnd:c,gridRowStart:g,gridRowEnd:d});return(0,l.jsx)(n.m.div,{ref:t,__css:p,...m})});c.displayName="GridItem"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5337)}),_N_E=e.O()}]);