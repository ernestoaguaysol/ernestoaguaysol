import{d as b,r as l,ac as v,c as a,e as s,F as g,Z as x,f as u,g as k,a5 as y,n as I,t as T,p as S,j as C,Q as $,k as w}from"./BbVYJLFR.js";const B=t=>(S("data-v-1a44e4b9"),t=t(),C(),t),N={class:"tabs-header"},U=["onClick"],q=B(()=>u("span",{class:"tab"},null,-1)),F=[q],H=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,f=p,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},m=(e,c)=>{f("update:activeTabIndex",c),$(()=>o(e.target))};return v(n,e=>{e&&setTimeout(()=>{o(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",N,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(g,null,x(t.tabs,({label:d},i)=>(a(),s("button",{key:`${i}${d}`,class:I([t.activeTabIndex===i?"active":"not-active"]),onClick:_=>m(_,i)},T(d),11,U))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},F,512)],512)):k("",!0),y(e.$slots,"footer",{},void 0,!0)]))}}),R=w(H,[["__scopeId","data-v-1a44e4b9"]]);export{R as default};