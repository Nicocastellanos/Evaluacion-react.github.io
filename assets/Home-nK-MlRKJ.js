import{f as i,u as g,o as y,j as s,c as x,a as j,i as h}from"./index-6nk1ApuA.js";import{H as p}from"./chunk-7OLJDQMT-6PmfnwjF.js";function v(a){const e=Object.assign({},a);for(let t in e)e[t]===void 0&&delete e[t];return e}var m=i(function(e,t){const n=g("Text",e),{className:r,align:c,decoration:l,casing:S,...u}=y(e),f=v({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.jsx(x.p,{ref:t,className:j("chakra-text",e.className),...f,...u,__css:n})});m.displayName="Text";var o=x("div");o.displayName="Box";var d=i(function(e,t){const{size:n,centerContent:r=!0,...c}=e,l=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return s.jsx(o,{ref:t,boxSize:n,__css:{...l,flexShrink:0,flexGrow:0},...c})});d.displayName="Square";var C=i(function(e,t){const{size:n,...r}=e;return s.jsx(d,{size:n,ref:t,borderRadius:"9999px",...r})});C.displayName="Circle";function T(){return s.jsxs(o,{display:"flex",flexDirection:"column",justifyContent:"center",border:"4px solid hsl(28, 10%, 53%)",w:600,h:355,mt:250,ml:600,alignItems:"center",borderRadius:"1rem",children:[s.jsx("img",{src:h,alt:"logo",width:100}),s.jsx(p,{fontSize:"100px",p:4,children:"Evently"}),s.jsx(m,{fontSize:20,p:8,children:"Crea tus eventos y organiza tu empresa"})]})}export{T as default};