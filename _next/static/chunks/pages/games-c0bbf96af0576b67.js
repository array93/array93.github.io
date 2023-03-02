(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{5337:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games",function(){return l(679)}])},679:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return _}});var t=l(5893),i=l(3100),r=l(204),s=l(8911),a=l(7306),o=l(6877),u=l(5227),d=l(7294);function c(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(l){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}var x=l(5059),h=l(1628),f=l(3179),p=l(6384),m=l(5432),[j,g]=(0,u.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[v,y]=(0,u.k)({strict:!1,name:"FormControlContext"});(0,x.G)(function(e,n){let l=(0,h.jC)("Form",e),i=(0,f.Lr)(e),{getRootProps:r,htmlProps:s,...a}=function(e){let{id:n,isRequired:l,isInvalid:t,isDisabled:i,isReadOnly:r,...s}=e,a=(0,d.useId)(),o=n||`field-${a}`,u=`${o}-label`,x=`${o}-feedback`,h=`${o}-helptext`,[f,p]=(0,d.useState)(!1),[j,g]=(0,d.useState)(!1),[v,y]=(0,d.useState)(!1),k=(0,d.useCallback)((e={},n=null)=>({id:h,...e,ref:c(n,e=>{e&&g(!0)})}),[h]),b=(0,d.useCallback)((e={},n=null)=>{var l,s;return{...e,ref:n,"data-focus":(0,m.PB)(v),"data-disabled":(0,m.PB)(i),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(r),id:null!=(l=e.id)?l:u,htmlFor:null!=(s=e.htmlFor)?s:o}},[o,i,v,t,r,u]),C=(0,d.useCallback)((e={},n=null)=>({id:x,...e,ref:c(n,e=>{e&&p(!0)}),"aria-live":"polite"}),[x]),w=(0,d.useCallback)((e={},n=null)=>({...e,...s,ref:n,role:"group"}),[s]),S=(0,d.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!l,isInvalid:!!t,isReadOnly:!!r,isDisabled:!!i,isFocused:!!v,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:j,setHasHelpText:g,id:o,labelId:u,feedbackId:x,helpTextId:h,htmlProps:s,getHelpTextProps:k,getErrorMessageProps:C,getRootProps:w,getLabelProps:b,getRequiredIndicatorProps:S}}(i),o=(0,m.cx)("chakra-form-control",e.className);return(0,t.jsx)(v,{value:a,children:(0,t.jsx)(j,{value:l,children:(0,t.jsx)(p.m.div,{...r({},n),className:o,__css:l.container})})})}).displayName="FormControl",(0,x.G)(function(e,n){let l=y(),i=g(),r=(0,m.cx)("chakra-form__helper-text",e.className);return(0,t.jsx)(p.m.div,{...null==l?void 0:l.getHelpTextProps(e,n),__css:i.helperText,className:r})}).displayName="FormHelperText";var k=(0,x.G)(function(e,n){let{htmlSize:l,...i}=e,r=(0,h.jC)("Input",i),s=(0,f.Lr)(i),a=function(e){let{isDisabled:n,isInvalid:l,isReadOnly:t,isRequired:i,...r}=function(e){var n,l,t;let i=y(),{id:r,disabled:s,readOnly:a,required:o,isRequired:u,isInvalid:d,isReadOnly:c,isDisabled:x,onFocus:h,onBlur:f,...p}=e,j=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&j.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&j.push(i.helpTextId),{...p,"aria-describedby":j.join(" ")||void 0,id:null!=r?r:null==i?void 0:i.id,isDisabled:null!=(n=null!=s?s:x)?n:null==i?void 0:i.isDisabled,isReadOnly:null!=(l=null!=a?a:c)?l:null==i?void 0:i.isReadOnly,isRequired:null!=(t=null!=o?o:u)?t:null==i?void 0:i.isRequired,isInvalid:null!=d?d:null==i?void 0:i.isInvalid,onFocus:(0,m.v0)(null==i?void 0:i.onFocus,h),onBlur:(0,m.v0)(null==i?void 0:i.onBlur,f)}}(e);return{...r,disabled:n,readOnly:t,required:i,"aria-invalid":(0,m.Qm)(l),"aria-required":(0,m.Qm)(i),"aria-readonly":(0,m.Qm)(t)}}(s),o=(0,m.cx)("chakra-input",e.className);return(0,t.jsx)(p.m.input,{size:l,...a,__css:r.field,ref:n,className:o})});k.displayName="Input",k.id="Input";var b=l(8307),C=l(6486);function w(e){let{itemHeight:n,visibleHeight:l,children:r}=e,s=(0,d.useRef)(null),[a,o]=(0,d.useState)(0),[u,c]=(0,d.useState)(0),x=d.Children.count(r),h=Math.round(u/n);return(0,d.useEffect)(()=>{let e=C.throttle(()=>{var e;let l=document.body.getBoundingClientRect().top,t=(null===(e=s.current)||void 0===e?void 0:e.getBoundingClientRect().top)||0,i=(window.scrollY-t+l)/n;o(Math.max(Math.round(i)-h,0))},100);return c(l||window.innerHeight),document.addEventListener("scroll",e),()=>{document.removeEventListener("scroll",e)}},[a]),(0,t.jsxs)(i.xu,{ref:s,h:"".concat(x*n,"px"),children:[(0,t.jsx)(i.xu,{h:"".concat(a*n,"px")}),d.Children.toArray(r).slice(a,a+2*h)]})}function S(e){let{title:n,subtitle:l,tags:u}=e;return(0,t.jsxs)(r.k,{h:"60px",p:4,py:1,gap:2,alignItems:"center",children:[(0,t.jsxs)(i.xu,{flexGrow:1,children:[(0,t.jsx)(s.x,{fontSize:"sm",fontWeight:500,lineHeight:1,children:n}),l&&(0,t.jsx)(s.x,{fontSize:"sm",lineHeight:1,color:"gray.400",children:l}),(0,t.jsx)(r.k,{gap:2,mt:1,children:null==u?void 0:u.map((e,n)=>(0,t.jsx)(s.x,{fontSize:"xs",lineHeight:1,color:"blue.200",children:e},n))})]}),(0,t.jsxs)(a.K,{spacing:1,flexShrink:0,w:14,children:[(0,t.jsxs)(r.k,{alignItems:"center",gap:1,children:[(0,t.jsx)(o.J,{as:b.q6M,w:4,h:4}),(0,t.jsx)(s.x,{fontSize:"xs",display:"inline",children:"0-99"})]}),(0,t.jsxs)(r.k,{alignItems:"center",gap:1,children:[(0,t.jsx)(o.J,{as:b.Vqd,w:4,h:4}),(0,t.jsx)(s.x,{fontSize:"xs",display:"inline",children:"999m"})]})]}),(0,t.jsxs)(a.K,{spacing:1,flexShrink:0,w:14,children:[(0,t.jsxs)(r.k,{alignItems:"center",gap:1,children:[(0,t.jsx)(o.J,{as:b.Y1i,w:4,h:4}),(0,t.jsx)(s.x,{fontSize:"xs",display:"inline",children:"99+"})]}),(0,t.jsxs)(r.k,{alignItems:"center",gap:1,children:[(0,t.jsx)(o.J,{as:b.WCS,w:4,h:4}),(0,t.jsx)(s.x,{fontSize:"xs",display:"inline",children:"99/99"})]})]})]})}function _(){let[e,n]=(0,d.useState)([]),[l,r]=(0,d.useState)("");(0,d.useEffect)(()=>{fetch("https://dejgre.lunarii.org/rest/games/?format=json").then(e=>e.json()).then(e=>{let l=(e,n)=>e.title.localeCompare(n.title),t=e.sort(l).filter(e=>e.quantity>0);n(t)}).catch(console.error)},[]);let s=e.filter(e=>e.title.toLowerCase().includes(l.toLowerCase()));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.xu,{position:"sticky",top:0,px:4,py:2,bg:"gray.900",children:(0,t.jsx)(k,{onChange:e=>r(e.target.value),value:l,placeholder:"szukaj",textAlign:"center"})}),(0,t.jsx)(i.xu,{my:4,children:(0,t.jsxs)(w,{itemHeight:60,children:[(0,t.jsx)(S,{title:"Zombicide",subtitle:"Zielona Horda",tags:["figurkowa","kooperacja"]}),(0,t.jsx)(S,{title:"7 Cud\xf3w Świata",subtitle:"Pojedynek o Panteon",tags:["szybka","fajna","prosta"]}),(0,t.jsx)(i.xu,{px:4,my:2,children:(0,t.jsx)("hr",{})}),s.map(e=>(0,t.jsx)(S,{title:e.title},e.id))]})})]})}}},function(e){e.O(0,[662,774,888,179],function(){return e(e.s=5337)}),_N_E=e.O()}]);