import{u as p,l as g,n as _,t as h,i as C,c}from"./CesiumContainer.cea121d4.js";import{c as S}from"./createOsmBuildings.67fd2475.js";import{T as B}from"./Toolbar.f346b6a7.js";import{c as R}from"./colorBuildingFS.5985125e.js";import{d as b,r as v,aa as E,w as n,o as P,a as l,u as T,f as k,ac as x}from"./index.e3a1b4d7.js";import{N as y}from"./Button.443f3334.js";const j=b({setup(F){let r="",t="";const a=v(!1);function u(){a.value=!a.value,t=a.value?R:r}return p(s=>{s.terrainProvider=_();const o=S();o.colorBlendMode=h.REPLACE,s.scene.primitives.add(o),s.scene.camera.setView({destination:C.fromDegrees(-122.3472,47.598,370),orientation:{heading:c.toRadians(10),pitch:c.toRadians(-10)}}),o.tileVisible.addEventListener(d=>{const{content:m}=d,{_model:e}=m;e&&e._sourcePrograms&&e._rendererResources&&(Object.keys(e._sourcePrograms).forEach(f=>{const i=e._sourcePrograms[f];r||(r=e._rendererResources.sourceShaders[i.fragmentShader],t=r),e._rendererResources.sourceShaders[i.fragmentShader]=t}),e._shouldRegenerateShaders=!0)})}),(s,o)=>(P(),E(g,null,{default:n(()=>[l(B,null,{default:n(()=>[l(T(y),{type:"primary",onClick:u},{default:n(()=>[k(" Use "+x(a.value?"Original":"Custom")+" Fragment Shader ",1)]),_:1})]),_:1})]),_:1}))}});export{j as default};