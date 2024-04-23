"use strict";(self.webpackChunkninja_reviews_backend=self.webpackChunkninja_reviews_backend||[]).push([[2801,6675],{62801:(F,p,e)=>{e.d(p,{ProtectedCreatePage:()=>q});var s=e(92132),m=e(55506),M=e(88977),L=e(58330),U=e(26675),B=e(15126),K=e(63299),O=e(67014),g=e(59080),o=e(79275),_=e(14718),D=e(21272),j=e(82437),S=e(61535),v=e(5790),b=e(12083),C=e(35223),V=e(5409),te=e(74930),ne=e(2600),ae=e(48940),oe=e(41286),z=e(56336),re=e(13426),ie=e(84624),x=e(77965),de=e(54257),G=e(71210),$=e(51187),Q=e(39404),le=e(58692),_e=e(501),Ee=e(57646),X=e(23120),ce=e(44414),Y=e(25962),he=e(14664),ge=e(42588),T=e(90325),R=e(62785),y=e(87443),Me=e(41032),H=e(22957),Pe=e(93179),ue=e(73055),J=e(15747),me=e(85306),De=e(26509),Oe=e(32058),ve=e(81185),fe=e(82261),Ae=e(55151),w=e(79077),Ce=e(43530),N=e(92466);const q=()=>{const ee=(0,M.j)(L.s);return(0,s.jsx)(m.kz,{permissions:ee.settings?.webhooks.create,children:(0,s.jsx)(U.E,{})})}},26675:(F,p,e)=>{e.r(p),e.d(p,{E:()=>se,a:()=>N,b:()=>Ke});var s=e(92132),m=e(21272),M=e(83997),L=e(8361),U=e(43064),B=e(46462),K=e(66809),O=e(84843),g=e(81621),o=e(98765),_=e(30893),D=e(379),j=e(4181),S=e(50215),v=e(94061),b=e(90151),C=e(68074),V=e(7537),te=e(18629),ne=e(76517),ae=e(80782),oe=e(55356),z=e(85963),re=e(4198),ie=e(38413),x=e(55506),de=e(71389),G=e(17703),$=e(88977),Q=e(43530),le=e(58330),_e=e(21610),Ee=e(5194),X=e(68802),ce=e(84795),Y=e(54514),he=e(98052),ge=e(46270),T=e(61535),R=e(54894),y=e(12083),Me=e(95267),H=e(63891),Pe=e(92466);const[ue,J]=(0,Me.q)("WebhookEvent"),me=({children:t})=>{const{formatMessage:n}=(0,R.A)(),{collectionTypes:a,isLoading:c}=(0,Q.u)(),r=m.useMemo(()=>a.some(i=>i.options?.draftAndPublish===!0),[a]),E=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,s.jsx)(ue,{isDraftAndPublish:r,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.d,{"aria-hidden":!0,children:E}),c&&(0,s.jsx)(U.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,s.jsx)(De,{"aria-label":E,children:t})]})})},De=(0,H.Ay)(B.X)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,Oe=t=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return t&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},ve=({getHeaders:t=Oe})=>{const{isDraftAndPublish:n}=J("Headers"),{formatMessage:a}=(0,R.A)(),c=t(n);return(0,s.jsx)(K.r,{children:(0,s.jsxs)(O.N,{children:[(0,s.jsx)(g.e,{children:(0,s.jsx)(o.s,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),c.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,s.jsx)(g.e,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,s.jsx)(g.e,{children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},fe=({providedEvents:t})=>{const{isDraftAndPublish:n}=J("Body"),a=t||Ae(n),{values:c,handleChange:r}=(0,T.j7)(),E="events",i=c.events,u=[],f=i.reduce((d,l)=>{const P=l.split(".")[0];return d[P]||(d[P]=[]),d[P].push(l),d},{}),h=({target:{name:d,value:l}})=>{const P=new Set(i);l?P.add(d):P.delete(d),r({target:{name:E,value:Array.from(P)}})},W=({target:{name:d,value:l}})=>{const P=new Set(i);l?a[d].forEach(I=>{u.includes(I)||P.add(I)}):a[d].forEach(I=>P.delete(I)),r({target:{name:E,value:Array.from(P)}})};return(0,s.jsx)(D.f,{children:Object.entries(a).map(([d,l])=>(0,s.jsx)(w,{disabledEvents:u,name:d,events:l,inputValue:f[d],handleSelect:h,handleSelectAll:W},d))})},Ae=t=>{const n=["entry.create","entry.update","entry.delete"];return t&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},w=({disabledEvents:t=[],name:n,events:a=[],inputValue:c=[],handleSelect:r,handleSelectAll:E})=>{const{formatMessage:i}=(0,R.A)(),u=a.filter(l=>!t.includes(l)),f=c.length>0,h=c.length===u.length,W=({target:{name:l}})=>{E({target:{name:l,value:!h}})},d=5;return(0,s.jsxs)(O.N,{children:[(0,s.jsx)(g.N,{children:(0,s.jsx)(j.S,{indeterminate:f&&!h,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:W,value:h,children:Ce(n)})}),a.map(l=>(0,s.jsx)(g.N,{children:(0,s.jsx)(S.J,{disabled:t.includes(l),"aria-label":l,name:l,value:c.includes(l),onValueChange:P=>r({target:{name:l,value:P}})})},l)),a.length<d&&(0,s.jsx)(g.N,{colSpan:d-a.length})]})},Ce=t=>t.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),N={Root:me,Headers:ve,Body:fe,Row:w},q=()=>(0,s.jsxs)(N.Root,{children:[(0,s.jsx)(N.Headers,{}),(0,s.jsx)(N.Body,{})]}),ee=()=>{const{formatMessage:t}=(0,R.A)(),{values:n,errors:a}=(0,T.j7)();return(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.d,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,s.jsx)(v.a,{padding:8,background:"neutral100",hasRadius:!0,children:(0,s.jsx)(T.ED,{validateOnChange:!1,name:"headers",render:({push:c,remove:r})=>(0,s.jsxs)(b.x,{gap:4,children:[n.headers.map((E,i)=>{const u=a.headers?.[i],f=typeof u=="object"?u.key:void 0,h=typeof u=="object"?u.value:void 0;return(0,s.jsxs)(m.Fragment,{children:[(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(T.D0,{as:ye,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:f})}),(0,s.jsx)(C.E,{col:6,children:(0,s.jsxs)(M.s,{alignItems:"flex-end",children:[(0,s.jsx)(v.a,{style:{flex:1},children:(0,s.jsx)(T.D0,{as:V.k,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:h})}),(0,s.jsx)(M.s,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:h?0:5,children:(0,s.jsx)(x.yX,{disabled:n.headers.length===1,onClick:()=>r(i),label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${E.key}`)}),(0,s.jsx)(C.E,{col:12,children:(0,s.jsx)(te.Q,{type:"button",onClick:()=>{c({key:"",value:""})},startIcon:(0,s.jsx)(Ee.A,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},ye=({name:t,onChange:n,value:a,...c})=>{const{values:{headers:r}}=(0,T.j7)(),[E,i]=m.useState([...Te]);m.useEffect(()=>{const h=Te.filter(W=>!r?.some(d=>d.key!==a&&d.key===W));i(h)},[r,a]);const u=h=>{n({target:{name:t,value:h}})},f=h=>{i(W=>[...W,h]),u(h)};return(0,s.jsx)(ne.nP,{...c,onClear:()=>u(""),onChange:u,onCreateOption:f,placeholder:"",value:a,children:E.map(h=>(0,s.jsx)(ae.j,{value:h,children:h},h))})},Te=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Ie=({isPending:t,onCancel:n,response:a})=>{const{statusCode:c,message:r}=a??{},{formatMessage:E}=(0,R.A)();return(0,s.jsx)(v.a,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(b.x,{gap:4,style:{alignItems:"center"},children:[(0,s.jsx)(C.E,{col:3,children:(0,s.jsx)(_.o,{children:E({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,s.jsx)(C.E,{col:3,children:(0,s.jsx)(xe,{isPending:t,statusCode:c})}),(0,s.jsx)(C.E,{col:6,children:t?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)("button",{onClick:n,type:"button",children:(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(_.o,{textColor:"neutral400",children:E({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,s.jsx)(Z,{as:X.A,color:"neutral400"})]})})}):(0,s.jsx)(Re,{statusCode:c,message:r})})]})})},Z=H.Ay.svg(({theme:t,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,H.AH)`
          path {
            fill: ${t.colors[n]};
          }
        `:""}
`),xe=({isPending:t,statusCode:n})=>{const{formatMessage:a}=(0,R.A)();return t||!n?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(Z,{as:ce.A}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(Z,{as:Y.A,color:"success700"}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(Z,{as:X.A,color:"danger700"}),(0,s.jsxs)(_.o,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},Re=({statusCode:t,message:n})=>{const{formatMessage:a}=(0,R.A)();return t?t>=200&&t<300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(_.o,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(M.s,{maxWidth:(0,x.a8)(250),justifyContent:"flex-end",title:n,children:(0,s.jsx)(_.o,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},pe=({handleSubmit:t,triggerWebhook:n,isCreating:a,isTriggering:c,triggerResponse:r,data:E})=>{const{formatMessage:i}=(0,R.A)(),[u,f]=m.useState(!1),h=(0,$.p)(q,async()=>(await e.e(6722).then(e.bind(e,36722))).EventsTableEE),W=l=>Object.keys(l).length?Object.entries(l).map(([P,I])=>({key:P,value:I})):[{key:"",value:""}],d=(0,T.Wx)({initialValues:{name:E?.name||"",url:E?.url||"",headers:W(E?.headers||{}),events:E?.events||[]},async onSubmit(l,P){await t(l,P),P.resetForm({values:l})},validationSchema:Be({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return h?(0,s.jsx)(T.QI,{value:d,children:(0,s.jsxs)(x.lV,{children:[(0,s.jsx)(oe.Q,{primaryAction:(0,s.jsxs)(M.s,{gap:2,children:[(0,s.jsx)(z.$,{onClick:()=>{n(),f(!0)},variant:"tertiary",startIcon:(0,s.jsx)(he.A,{}),disabled:a||c,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,s.jsx)(z.$,{startIcon:(0,s.jsx)(Y.A,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:a?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):E?.name,navigationAction:(0,s.jsx)(_e.N,{as:de.k2,startIcon:(0,s.jsx)(ge.A,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,s.jsx)(re.s,{children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[u&&(0,s.jsx)(Ie,{isPending:c,response:r,onCancel:()=>f(!1)}),(0,s.jsx)(v.a,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(b.x,{gap:6,children:[(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(T.D0,{as:V.k,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,s.jsx)(C.E,{col:12,children:(0,s.jsx)(T.D0,{as:V.k,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,s.jsx)(ee,{}),(0,s.jsx)(h,{})]})})]})})]})}):null},Le=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ue=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Be=({formatMessage:t})=>y.Ik().shape({name:y.Yj().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Le,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:y.Yj().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ue,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:y.RZ(n=>{const a=y.YO();if(n.length===1){const{key:c,value:r}=n[0];if(!c&&!r)return a}return a.of(y.Ik().shape({key:y.Yj().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:y.Yj().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:y.YO()}),We=t=>({...t,headers:t.headers.reduce((n,{key:a,value:c})=>(a!==""&&(n[a]=c),n),{})}),se=()=>{const n=(0,G.W5)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:c}=(0,G.W6)(),r=(0,x.hN)(),{_unstableFormatAPIError:E,_unstableFormatValidationErrors:i}=(0,x.wq)(),{isLoading:u}=(0,Q.u)(),[f,h]=m.useState(!1),[W,d]=m.useState(),{isLoading:l,webhooks:P,error:I,createWebhook:Se,updateWebhook:be,triggerWebhook:ke}=(0,Pe.u)({id:n},{skip:a});m.useEffect(()=>{I&&r({type:"warning",message:E(I)})},[I,r,E]);const $e=async()=>{try{h(!0);const k=await ke(n);if("error"in k){r({type:"warning",message:E(k.error)});return}d(k.data)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{h(!1)}},Ne=async(k,je)=>{try{if(a){const A=await Se(We(k));if("error"in A){(0,$.x)(A.error)&&A.error.name==="ValidationError"?je.setErrors(i(A.error)):r({type:"warning",message:E(A.error)});return}r({type:"success",message:{id:"Settings.webhooks.created"}}),c(`/settings/webhooks/${A.data.id}`)}else{const A=await be({id:n,...We(k)});if("error"in A){(0,$.x)(A.error)&&A.error.name==="ValidationError"?je.setErrors(i(A.error)):r({type:"warning",message:E(A.error)});return}r({type:"success",message:{id:"notification.form.success.fields"}})}}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(l||u)return(0,s.jsx)(x.Bl,{});const[Ve]=P??[];return(0,s.jsxs)(ie.g,{children:[(0,s.jsx)(x.x7,{name:"Webhooks"}),(0,s.jsx)(pe,{data:Ve,handleSubmit:Ne,triggerWebhook:$e,isCreating:a,isTriggering:f,triggerResponse:W})]})},Ke=Object.freeze(Object.defineProperty({__proto__:null,EditPage:se,ProtectedEditPage:()=>{const t=(0,$.j)(le.s);return(0,s.jsx)(x.kz,{permissions:t.settings?.webhooks.update,children:(0,s.jsx)(se,{})})}},Symbol.toStringTag,{value:"Module"}))},43530:(F,p,e)=>{e.d(p,{u:()=>K});var s=e(21272),m=e(55506),M=e(88977);const L=M.n.injectEndpoints({endpoints:O=>({getComponents:O.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:g=>g.data}),getContentTypes:O.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:g=>g.data})}),overrideExisting:!1}),{useGetComponentsQuery:U,useGetContentTypesQuery:B}=L;function K(){const{_unstableFormatAPIError:O}=(0,m.wq)(),g=(0,m.hN)(),o=U(),_=B();s.useEffect(()=>{_.error&&g({type:"warning",message:O(_.error)})},[_.error,O,g]),s.useEffect(()=>{o.error&&g({type:"warning",message:O(o.error)})},[o.error,O,g]);const D=o.isLoading||_.isLoading,j=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind==="collectionType"&&v.isDisplayed),[_?.data]),S=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind!=="collectionType"&&v.isDisplayed),[_?.data]);return{isLoading:D,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:j,singleTypes:S}}},92466:(F,p,e)=>{e.d(p,{u:()=>O});var s=e(88977);const m=s.n.injectEndpoints({endpoints:g=>({getWebhooks:g.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,_,D)=>typeof D=="object"&&"id"in D?[{type:"Webhook",id:D.id}]:[...o?.map(({id:j})=>({type:"Webhook",id:j}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:g.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:g.mutation({query:({id:o,..._})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:_}),transformResponse:o=>o.data,invalidatesTags:(o,_,{id:D})=>[{type:"Webhook",id:D}]}),triggerWebhook:g.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:g.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,_,{ids:D})=>D.map(j=>({type:"Webhook",id:j}))})}),overrideExisting:!1}),{useGetWebhooksQuery:M,useCreateWebhookMutation:L,useUpdateWebhookMutation:U,useTriggerWebhookMutation:B,useDeleteManyWebhooksMutation:K}=m,O=(g=void 0,o)=>{const{data:_,isLoading:D,error:j}=M(g,o),[S]=L(),[v]=U(),[b]=B(),[C]=K();return{webhooks:_,isLoading:D,error:j,createWebhook:S,updateWebhook:v,triggerWebhook:b,deleteManyWebhooks:C}}}}]);
