import{d as r,ai as l,I as u,N as n,a6 as p,k as m}from"./BbVYJLFR.js";import{_ as f}from"./Caipk9G4.js";import{u as d,f as _}from"./2ETV-d1z.js";const y=()=>({unwrap:d,flatUnwrap:_}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},w=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const a=l(),{flatUnwrap:t,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=t((a.default&&a.default())??[],["ul"]).map(o=>s(o,["li"]));return n("ul",i.map(o=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(f,{use:()=>o}))])))}}}),v=m(w,[["__scopeId","data-v-d3fc0e8f"]]);export{v as default};